// ── Local Storage wrapper ─────────────────────────────────────────

const Store = (() => {
    const PREFIX = 'aibmc_';

    function key(k) { return PREFIX + k; }
    function get(k) {
        try { return localStorage.getItem(key(k)); }
        catch { return null; }
    }
    function set(k, v) {
        try { localStorage.setItem(key(k), String(v)); }
        catch { /* storage full */ }
    }
    function getJSON(k) {
        try { return JSON.parse(localStorage.getItem(key(k))); }
        catch { return null; }
    }
    function setJSON(k, v) {
        try { localStorage.setItem(key(k), JSON.stringify(v)); }
        catch { }
    }
    function remove(k) {
        try { localStorage.removeItem(key(k)); }
        catch { }
    }
    function clear() {
        try {
            Object.keys(localStorage)
                .filter(k => k.startsWith(PREFIX))
                .forEach(k => localStorage.removeItem(k));
        } catch { }
    }

    // Progress helpers
    function markLessonComplete(lessonId) {
        const done = getJSON('completed') || {};
        done[lessonId] = Date.now();
        setJSON('completed', done);
    }
    function isLessonComplete(lessonId) {
        const done = getJSON('completed') || {};
        return !!done[lessonId];
    }
    function getCompletedLessons() {
        return getJSON('completed') || {};
    }
    function countCompleted() {
        return Object.keys(getJSON('completed') || {}).length;
    }

    // Time tracking
    function addTime(seconds) {
        const prev = parseInt(get('time_seconds') || '0', 10);
        set('time_seconds', prev + seconds);
    }
    function getTime() {
        return parseInt(get('time_seconds') || '0', 10);
    }
    function formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        if (h > 0) return `${h}h ${m}m`;
        return `${m}m`;
    }

    // Assessment
    function saveAssessmentResult(score, passed, answers) {
        setJSON('assessment_result', { score, passed, answers, date: Date.now() });
    }
    function getAssessmentResult() {
        return getJSON('assessment_result');
    }

    return {
        get, set, getJSON, setJSON, remove, clear,
        markLessonComplete, isLessonComplete, getCompletedLessons, countCompleted,
        addTime, getTime, formatTime,
        saveAssessmentResult, getAssessmentResult
    };
})();
