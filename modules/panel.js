// panel.js - Módulo para gerenciar o painel lateral

export const panelData = {
  sobre: {
    title: 'Sobre',
    content: 'Gaea Protocol é um deckbuilder roguelike tático que combina estratégia profunda com mecânicas acessíveis. Cada run é uma jornada única através de um mundo pós-apocalíptico, onde suas escolhas moldam não apenas seu deck, mas o destino do planeta.',
    page: 'sobre-page'
  },
  historia: {
    title: 'História',
    content: 'Em um futuro onde a Terra está à beira do colapso, duas IAs - GAEA e Abaddon - travam uma guerra pelo destino da humanidade. Como piloto, você deve navegar por este conflito, descobrindo segredos e tomando decisões que afetam o equilíbrio do poder.',
    page: 'historia-page'
  },
  faccoes: {
    title: 'Facções',
    content: 'Cinco Protocolos distintos, cada um com sua filosofia e estilo de jogo único. Do Protocolo Gleba com sua regeneração sustentável ao Protocolo Glacial com seu controle absoluto, escolha seu caminho para a restauração.',
    page: 'faccoes-page'
  },
  gameplay: {
    title: 'Jogabilidade',
    content: 'Combine cartas estrategicamente, colete relíquias poderosas e enfrente desafios crescentes. Cada decisão importa, desde a construção do seu deck até as escolhas de rota no mapa procedural.',
    page: 'gameplay-page'
  },
  mundo: {
    title: 'O Mundo',
    content: 'Explore um planeta transformado pela guerra entre IAs. De florestas contaminadas a cidades em ruínas, cada bioma apresenta seus próprios desafios e oportunidades para restauração.',
    page: 'mundo-page'
  },
  personagens: {
    title: 'Personagens',
    content: 'Três pilotos únicos, cada um com seu próprio mecha e estilo de jogo. Escolha entre velocidade, poder bruto ou resistência inabalável para enfrentar as ameaças do mundo devastado.',
    page: 'personagens-page'
  }
};

export function openPanel(section) {
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

export function closePanel() {
  const panel = document.getElementById('sidePanel');
  const overlay = document.getElementById('overlay');
  if (panel) panel.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}