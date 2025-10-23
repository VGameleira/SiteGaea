
import { initParticles } from './particles.js';
import { openPanel, closePanel } from './panel.js';

// Funções de navegação
function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        closePanel();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showHome() {
    showPage('home');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    setupEventListeners();
    
    // Expor funções globalmente para uso no HTML
    window.showPage = showPage;
    window.showHome = showHome;
    window.openPanel = openPanel;
    window.closePanel = closePanel;
});

function setupEventListeners() {
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', closePanel);
    }

    const sidePanel = document.getElementById('sidePanel');
    if (sidePanel) {
        const observer = new MutationObserver(() => {
            document.body.style.overflow = sidePanel.classList.contains('active') ? 'hidden' : 'auto';
        });
        observer.observe(sidePanel, { attributes: true, attributeFilter: ['class'] });
    }
}

// Navigation functions
window.showPage = function(pageId) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) target.classList.add('active');
    closePanel();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.showHome = function() {
    showPage('home');
}

// Expose panel functions globally
window.openPanel = openPanel;
window.closePanel = closePanel;

;

// Abre o painel lateral com conteúdo resumido
function openPanel(section) {
  const panel = document.getElementById('sidePanel');
  const overlay = document.getElementById('overlay');
  const content = document.getElementById('panelContent');
  const data = panelData[section];

  if (!data || !content) return;

  content.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.content}</p>
    <button class="panel-button" onclick="showPage('${data.page}')">Ver Página Completa</button>
  `;

  panel.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Fecha o painel lateral
function closePanel() {
  const panel = document.getElementById('sidePanel');
  const overlay = document.getElementById('overlay');
  if (panel) panel.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Mostra a página completa (alterna .active)
function showPage(pageId) {
  document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');
  closePanel();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Atalho para Home
function showHome(){ showPage('home'); }

// Fecha painel ao clicar no overlay
const overlayEl = document.getElementById('overlay');
if (overlayEl) overlayEl.addEventListener('click', closePanel);

// Observador para bloquear scroll quando painel aberto (fallback)
const observerTarget = document.getElementById('sidePanel');
if (observerTarget) {
  const observer = new MutationObserver(() => {
    if (observerTarget.classList.contains('active')) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  });
  observer.observe(observerTarget, { attributes: true, attributeFilter: ['class'] });
}
