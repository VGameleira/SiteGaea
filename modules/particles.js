export function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 20 + 's';
        p.style.animationDuration = (Math.random() * 15 + 15) + 's';
        particlesContainer.appendChild(p);
    }
}
