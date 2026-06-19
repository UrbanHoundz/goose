// ── Certificate Generator ─────────────────────────────────────

const Cert = (() => {

    function show() {
        const result = Store.getAssessmentResult();
        if (!result || !result.passed) {
            App.toast('Complete and pass the assessment first.', 'error');
            return;
        }
        const container = document.getElementById('view-certificate');
        if (!container) return;

        const savedName = Store.get('cert_name') || Auth.getUserName() || '';

        container.innerHTML = `
<div class="certificate-container">
  <h2 style="margin-bottom:8px">🏆 Your Certificate of Achievement</h2>
  <p style="color:var(--text-secondary);margin-bottom:28px">Enter your full name as you would like it to appear on your certificate, then download or print.</p>
  <div class="cert-name-input-wrap">
    <label for="cert-name-field">Your Full Name</label>
    <input class="cert-name-field" id="cert-name-field" type="text"
      placeholder="e.g. Jane Smith" value="${_esc(savedName)}" autocomplete="name" />
    <button class="btn-primary cert-generate-btn" onclick="Cert.generate()">Generate Certificate</button>
  </div>
  <div id="cert-canvas-wrap" style="display:none;text-align:center">
    <div class="cert-actions">
      <button class="btn-primary" onclick="Cert.download()">⬇ Download PNG</button>
      <button class="btn-secondary" onclick="Cert.print()">🖨 Print Certificate</button>
    </div>
    <canvas id="certificate-canvas"></canvas>
  </div>
</div>`;

        // Enter key triggers generation
        const inp = document.getElementById('cert-name-field');
        if (inp) inp.addEventListener('keydown', e => { if (e.key === 'Enter') generate(); });

        // Auto-generate if name already known
        if (savedName) setTimeout(generate, 300);
    }

    function generate() {
        const nameField = document.getElementById('cert-name-field');
        const name = (nameField?.value || '').trim();
        if (!name) { App.toast('Please enter your full name.', 'error'); return; }

        Store.set('cert_name', name);
        const result = Store.getAssessmentResult();
        const score  = result?.score || 0;
        const date   = new Date().toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' });

        _draw(name, score, date);

        const wrap = document.getElementById('cert-canvas-wrap');
        if (wrap) wrap.style.display = 'block';

        // Save to Supabase if available
        _saveToSupabase(name, score);
    }

    function _draw(name, score, date) {
        const canvas = document.getElementById('certificate-canvas');
        if (!canvas) return;

        const W = 1200, H = 850;
        canvas.width  = W;
        canvas.height = H;
        const ctx = canvas.getContext('2d');

        // Background gradient
        const grad = ctx.createLinearGradient(0, 0, W, H);
        grad.addColorStop(0,   '#1E1B4B');
        grad.addColorStop(0.5, '#312E81');
        grad.addColorStop(1,   '#1E3A5F');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);

        // Outer border
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth   = 3;
        ctx.strokeRect(20, 20, W-40, H-40);

        // Inner border
        ctx.strokeStyle = 'rgba(255,255,255,0.12)';
        ctx.lineWidth   = 1;
        ctx.strokeRect(35, 35, W-70, H-70);

        // Decorative corner stars
        ['25,25','1175,25','25,825','1175,825'].forEach(pos => {
            const [cx,cy] = pos.split(',').map(Number);
            _star(ctx, cx, cy, 12, 6, 'rgba(255,255,255,0.3)');
        });

        // Gold accent top line
        const gold = ctx.createLinearGradient(100, 0, W-100, 0);
        gold.addColorStop(0,   'transparent');
        gold.addColorStop(0.3, '#F59E0B');
        gold.addColorStop(0.7, '#FCD34D');
        gold.addColorStop(1,   'transparent');
        ctx.fillStyle = gold;
        ctx.fillRect(100, 90, W-200, 3);
        ctx.fillRect(100, H-90, W-200, 3);

        // Robot emoji
        ctx.font = '64px serif';
        ctx.textAlign = 'center';
        ctx.fillText('🤖', W/2, 155);

        // "Certificate of Completion"
        ctx.font      = 'bold 20px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle = '#A5B4FC';
        ctx.letterSpacing = '0.2em';
        ctx.fillText('CERTIFICATE OF COMPLETION', W/2, 205);

        // Course name
        ctx.font      = 'bold 38px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.letterSpacing = '0';
        ctx.fillText('AI For Business Growth Masterclass', W/2, 258);

        // Divider
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.fillRect(W/2 - 200, 278, 400, 1);

        // "This certifies that"
        ctx.font      = 'italic 18px Georgia, serif';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillText('This is to certify that', W/2, 330);

        // Student name
        ctx.font      = 'bold 52px Georgia, serif';
        const nameGrad = ctx.createLinearGradient(0, 0, W, 0);
        nameGrad.addColorStop(0.3, '#FCD34D');
        nameGrad.addColorStop(0.7, '#F59E0B');
        ctx.fillStyle = nameGrad;
        ctx.fillText(name, W/2, 400);

        // Underline name
        const nameW = ctx.measureText(name).width;
        ctx.fillStyle = 'rgba(245,158,11,0.4)';
        ctx.fillRect(W/2 - nameW/2 - 10, 412, nameW + 20, 2);

        // "has successfully completed"
        ctx.font      = 'italic 18px Georgia, serif';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillText('has successfully completed the 3-hour professional programme with a score of', W/2, 455);

        // Score badge
        const bx = W/2 - 60, by = 472;
        ctx.fillStyle = '#10B981';
        _roundRect(ctx, bx, by, 120, 44, 22);
        ctx.fillStyle = '#FFFFFF';
        ctx.font      = 'bold 24px -apple-system, Segoe UI, sans-serif';
        ctx.fillText(score + '%', W/2, by + 30);

        // Achievement description
        ctx.font      = '16px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.65)';
        ctx.fillText('demonstrating proficiency in AI tools, strategy, marketing, automation, and lead generation', W/2, 548);

        // Bottom info row
        const bottomY = 660;
        // Date
        ctx.font      = 'bold 14px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle = '#A5B4FC';
        ctx.fillText('DATE OF COMPLETION', W/4, bottomY);
        ctx.font      = '18px Georgia, serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(date, W/4, bottomY + 28);

        // Signature line
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth   = 1;
        ctx.beginPath(); ctx.moveTo(W/2 - 120, bottomY + 10); ctx.lineTo(W/2 + 120, bottomY + 10); ctx.stroke();
        ctx.font        = 'italic 20px Georgia, serif';
        ctx.fillStyle   = '#FCD34D';
        ctx.fillText('AI Business Masterclass', W/2, bottomY + 6);
        ctx.font        = 'bold 13px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle   = '#A5B4FC';
        ctx.fillText('COURSE DIRECTOR', W/2, bottomY + 30);

        // Cert ID
        ctx.font      = 'bold 14px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle = '#A5B4FC';
        ctx.fillText('CERTIFICATE ID', (W*3)/4, bottomY);
        ctx.font      = '16px monospace';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(_certId(name, date), (W*3)/4, bottomY + 28);

        // Bottom gold line
        ctx.fillStyle = gold;
        ctx.fillRect(100, bottomY + 60, W-200, 2);

        // Footer
        ctx.font      = '13px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fillText('AI For Business Growth Masterclass  ·  Professional Development Programme', W/2, bottomY + 100);
    }

    function _roundRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x+r, y);
        ctx.lineTo(x+w-r, y);
        ctx.quadraticCurveTo(x+w, y, x+w, y+r);
        ctx.lineTo(x+w, y+h-r);
        ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
        ctx.lineTo(x+r, y+h);
        ctx.quadraticCurveTo(x, y+h, x, y+h-r);
        ctx.lineTo(x, y+r);
        ctx.quadraticCurveTo(x, y, x+r, y);
        ctx.closePath();
        ctx.fill();
    }

    function _star(ctx, cx, cy, outerR, innerR, colour) {
        ctx.fillStyle = colour;
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
            const r   = i % 2 === 0 ? outerR : innerR;
            const ang = (Math.PI / 5) * i - Math.PI / 2;
            i === 0 ? ctx.moveTo(cx + r*Math.cos(ang), cy + r*Math.sin(ang))
                    : ctx.lineTo(cx + r*Math.cos(ang), cy + r*Math.sin(ang));
        }
        ctx.closePath(); ctx.fill();
    }

    function _certId(name, date) {
        let h = 0;
        (name + date).split('').forEach(c => { h = ((h << 5) - h) + c.charCodeAt(0); h |= 0; });
        return 'AIBM-' + Math.abs(h).toString(16).toUpperCase().padStart(8,'0');
    }

    function _esc(str) {
        return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
    }

    function download() {
        const canvas = document.getElementById('certificate-canvas');
        if (!canvas) return;
        const name = (document.getElementById('cert-name-field')?.value || 'certificate').replace(/\s+/g,'-');
        const link = document.createElement('a');
        link.download = `AI-Masterclass-Certificate-${name}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
        App.toast('Certificate downloaded!', 'success');
    }

    function print() {
        const canvas = document.getElementById('certificate-canvas');
        if (!canvas) return;
        const dataUrl = canvas.toDataURL('image/png', 1.0);
        const win = window.open('', '_blank');
        win.document.write(`<!DOCTYPE html><html><head><title>Certificate</title>
<style>*{margin:0;padding:0}body{display:flex;justify-content:center;align-items:center;min-height:100vh;background:#f0f0f0}
img{max-width:100%;box-shadow:0 4px 20px rgba(0,0,0,.2)}@media print{body{background:white}img{box-shadow:none;width:100%}}</style>
</head><body><img src="${dataUrl}" onload="setTimeout(()=>{window.print();window.close()},500)"/></body></html>`);
        win.document.close();
    }

    async function _saveToSupabase(name, score) {
        try {
            if (typeof supabase === 'undefined') return;
            const user = Auth.currentUser();
            if (!user) return;
            const client = supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
            const { data: { session } } = await client.auth.getSession();
            if (!session) return;
            await fetch(`${CONFIG.SUPABASE_URL}/rest/v1/certificates`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': CONFIG.SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${session.access_token}`,
                    'Prefer': 'resolution=merge-duplicates',
                },
                body: JSON.stringify({ user_id: user.id, student_name: name, score, issued_at: new Date().toISOString() }),
            });
        } catch { /* silently ignore Supabase errors — cert still works locally */ }
    }

    return { show, generate, download, print };
})();
