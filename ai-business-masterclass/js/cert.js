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
      <button class="btn-primary" onclick="Cert.download()">⬇ Download Certificate</button>
      <button class="btn-secondary" onclick="Cert.print()">🖨 Print</button>
      <button class="btn-linkedin" onclick="App._shareOnLinkedIn()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        Share on LinkedIn
      </button>
      <button class="btn-outline" onclick="App._downloadActionPlan()">📋 My Action Plan</button>
    </div>
    <div class="cert-share-hint">Share your achievement on LinkedIn to let clients and colleagues know you're AI-qualified.</div>
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

        // Background gradient — Penshaw View dark navy to teal
        const grad = ctx.createLinearGradient(0, 0, W, H);
        grad.addColorStop(0,   '#0A1E2D');
        grad.addColorStop(0.5, '#1B6B8A');
        grad.addColorStop(1,   '#0A2535');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);

        // Outer border
        ctx.strokeStyle = 'rgba(0,212,232,0.5)';
        ctx.lineWidth   = 3;
        ctx.strokeRect(20, 20, W-40, H-40);

        // Inner border
        ctx.strokeStyle = 'rgba(0,212,232,0.18)';
        ctx.lineWidth   = 1;
        ctx.strokeRect(35, 35, W-70, H-70);

        // Decorative corner stars
        ['25,25','1175,25','25,825','1175,825'].forEach(pos => {
            const [cx,cy] = pos.split(',').map(Number);
            _star(ctx, cx, cy, 12, 6, 'rgba(0,212,232,0.4)');
        });

        // Cyan accent top line
        const gold = ctx.createLinearGradient(100, 0, W-100, 0);
        gold.addColorStop(0,   'transparent');
        gold.addColorStop(0.3, '#00D4E8');
        gold.addColorStop(0.7, '#1B6B8A');
        gold.addColorStop(1,   'transparent');
        ctx.fillStyle = gold;
        ctx.fillRect(100, 90, W-200, 3);
        ctx.fillRect(100, H-90, W-200, 3);

        // Penshaw View dot grid (3×3) — top centre
        const dotColors = ['#1B6B8A','#1B6B8A','#00D4E8','#1B6B8A','#1B6B8A','#00D4E8','#00D4E8','#00D4E8','#00D4E8'];
        const dotSize = 9, dotGap = 22, gridStartX = W/2 - 25, gridStartY = 62;
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                ctx.beginPath();
                ctx.arc(gridStartX + c*dotGap, gridStartY + r*dotGap, dotSize/2, 0, Math.PI*2);
                ctx.fillStyle = dotColors[r*3+c];
                ctx.fill();
            }
        }

        // "PV" initials with gradient
        const pvGrad = ctx.createLinearGradient(W/2 - 30, 0, W/2 + 60, 0);
        pvGrad.addColorStop(0, '#1B6B8A');
        pvGrad.addColorStop(1, '#00D4E8');
        ctx.font = 'bold 42px -apple-system, Segoe UI, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = pvGrad;
        ctx.fillText('PV', W/2 + 48, 116);

        // "Certificate of Completion"
        ctx.font      = 'bold 20px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle = '#00D4E8';
        ctx.letterSpacing = '0.2em';
        ctx.fillText('CERTIFICATE OF COMPLETION', W/2, 160);

        // Course name
        ctx.font      = 'bold 38px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.letterSpacing = '0';
        ctx.fillText('AI For Business Growth Masterclass', W/2, 210);

        // Divider
        ctx.fillStyle = 'rgba(0,212,232,0.3)';
        ctx.fillRect(W/2 - 200, 230, 400, 1);

        // "This certifies that"
        ctx.font      = 'italic 18px Georgia, serif';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillText('This is to certify that', W/2, 280);

        // Student name — cyan gradient
        ctx.font      = 'bold 52px Georgia, serif';
        const nameGrad = ctx.createLinearGradient(0, 0, W, 0);
        nameGrad.addColorStop(0.3, '#00D4E8');
        nameGrad.addColorStop(0.7, '#1B6B8A');
        ctx.fillStyle = nameGrad;
        ctx.fillText(name, W/2, 350);

        // Underline name
        const nameW = ctx.measureText(name).width;
        ctx.fillStyle = 'rgba(0,212,232,0.4)';
        ctx.fillRect(W/2 - nameW/2 - 10, 362, nameW + 20, 2);

        // "has successfully completed"
        ctx.font      = 'italic 18px Georgia, serif';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillText('has successfully completed the 3-hour professional programme with a score of', W/2, 405);

        // Score badge — teal
        const bx = W/2 - 60, by = 422;
        ctx.fillStyle = '#00D4E8';
        _roundRect(ctx, bx, by, 120, 44, 22);
        ctx.fillStyle = '#0A1E2D';
        ctx.font      = 'bold 24px -apple-system, Segoe UI, sans-serif';
        ctx.fillText(score + '%', W/2, by + 30);

        // Achievement description
        ctx.font      = '16px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.65)';
        ctx.fillText('demonstrating proficiency in AI tools, strategy, marketing, automation, and lead generation', W/2, 498);

        // CPD Hours badge
        ctx.font      = 'bold 13px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle = 'rgba(0,212,232,0.9)';
        ctx.letterSpacing = '0.08em';
        ctx.fillText('3.5 CPD HOURS · STRUCTURED LEARNING · FOUNDATION / INTERMEDIATE', W/2, 532);
        ctx.letterSpacing = '0';

        // Bottom info row
        const bottomY = 600;
        // Date
        ctx.font      = 'bold 14px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle = '#00D4E8';
        ctx.fillText('DATE OF COMPLETION', W/4, bottomY);
        ctx.font      = '18px Georgia, serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(date, W/4, bottomY + 28);

        // Signature line
        ctx.strokeStyle = 'rgba(0,212,232,0.4)';
        ctx.lineWidth   = 1;
        ctx.beginPath(); ctx.moveTo(W/2 - 140, bottomY + 10); ctx.lineTo(W/2 + 140, bottomY + 10); ctx.stroke();
        ctx.font        = 'italic 20px Georgia, serif';
        ctx.fillStyle   = '#00D4E8';
        ctx.fillText('Penshaw View Training', W/2, bottomY + 6);
        ctx.font        = 'bold 12px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle   = 'rgba(0,212,232,0.7)';
        ctx.fillText('AUTHORISED TRAINING PROVIDER', W/2, bottomY + 28);

        // Cert ID
        ctx.font      = 'bold 14px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle = '#00D4E8';
        ctx.fillText('CERTIFICATE ID', (W*3)/4, bottomY);
        ctx.font      = '16px monospace';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(_certId(name, date), (W*3)/4, bottomY + 28);

        // Bottom cyan line
        ctx.fillStyle = gold;
        ctx.fillRect(100, bottomY + 52, W-200, 2);

        // Penshaw View dot row at bottom
        const bDotY = bottomY + 72;
        const bDotColors = ['#1B6B8A','#1B6B8A','#00D4E8','#1B6B8A','#1B6B8A','#00D4E8','#00D4E8','#00D4E8','#00D4E8'];
        for (let c = 0; c < 9; c++) {
            ctx.beginPath();
            ctx.arc(W/2 - 80 + c*20, bDotY, 5, 0, Math.PI*2);
            ctx.fillStyle = bDotColors[c];
            ctx.globalAlpha = 0.6;
            ctx.fill();
            ctx.globalAlpha = 1;
        }

        // Footer
        ctx.font      = '13px -apple-system, Segoe UI, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fillText('Penshaw View Training  ·  AI For Business Growth Masterclass  ·  Professional Development', W/2, bottomY + 96);
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
