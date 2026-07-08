/* ════════════════════════════════════════════════════════════
   BAT BRASIL — Preferências compartilhadas
   Tema (claro/escuro/automático), cor de destaque, tamanho de
   fonte e acessibilidade. Tudo é salvo em localStorage e
   reaplicado em TODAS as páginas do painel.
   Carregue este arquivo no <head> de cada página, ANTES do
   script específico da página.
════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var KEYS = {
    theme: 'bat-theme',     // 'light' | 'dark' | 'auto'
    accent: 'bat-accent',   // cor hex (#RRGGBB) — vazio = padrão
    font: 'bat-font-scale', // tamanho base em px (ex.: '14')
    lang: 'bat-lang'        // idioma (compartilhado com as páginas)
  };
  var SET_PREFIX = 'bat-set:'; // prefixo dos switches/campos genéricos

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) {
    try { (v === null || v === undefined) ? localStorage.removeItem(k) : localStorage.setItem(k, v); }
    catch (e) {}
  }

  /* —— util: escurece/clareia uma cor hex —— */
  function clamp(n) { return Math.max(0, Math.min(255, n)); }
  function shade(hex, pct) {
    if (!hex) return hex;
    hex = String(hex).trim().replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(function (c) { return c + c; }).join('');
    if (hex.length !== 6) return '#' + hex;
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16),
        f = pct / 100;
    r = clamp(Math.round(r + r * f));
    g = clamp(Math.round(g + g * f));
    b = clamp(Math.round(b + b * f));
    return '#' + [r, g, b].map(function (x) { var s = x.toString(16); return s.length === 1 ? '0' + s : s; }).join('');
  }

  function prefersDark() {
    try { return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches); }
    catch (e) { return false; }
  }
  function resolveTheme(mode) {
    mode = mode || 'light';
    if (mode === 'auto') return prefersDark() ? 'dark' : 'light';
    return mode === 'dark' ? 'dark' : 'light';
  }

  /* —— tema —— */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', resolveTheme(lsGet(KEYS.theme) || 'light'));
  }

  /* —— cor de destaque (cobre todos os nomes de variável usados nas páginas) —— */
  var ACCENT_MID = ['--bm', '--blue-mid', '--sa', '--sidebar-active'];
  var ACCENT_DEEP = ['--bd', '--blue-deep'];
  function applyAccent() {
    var root = document.documentElement, c = lsGet(KEYS.accent);
    if (c) {
      var deep = shade(c, -32);
      ACCENT_MID.forEach(function (v) { root.style.setProperty(v, c); });
      ACCENT_DEEP.forEach(function (v) { root.style.setProperty(v, deep); });
    } else {
      ACCENT_MID.concat(ACCENT_DEEP).forEach(function (v) { root.style.removeProperty(v); });
    }
  }

  /* —— tamanho de fonte —— */
  function applyFont() {
    var v = lsGet(KEYS.font), root = document.documentElement;
    v ? root.style.setProperty('font-size', v + 'px') : root.style.removeProperty('font-size');
  }

  /* —— acessibilidade / efeitos globais —— */
  function isOn(id) { return lsGet(SET_PREFIX + id) === '1'; }
  function applyA11y() {
    var root = document.documentElement;
    // Alto contraste (inline sobrescreve qualquer CSS [data-hc])
    if (isOn('hc')) { root.setAttribute('data-hc', '1'); root.style.filter = 'contrast(1.4) saturate(1.15)'; }
    else { root.setAttribute('data-hc', '0'); root.style.filter = ''; }
    // Redução de animações (zera as duas variáveis de transição usadas)
    if (isOn('reduceanim')) { root.style.setProperty('--tr', '0s'); root.style.setProperty('--transition', '0s'); }
    else { root.style.removeProperty('--tr'); root.style.removeProperty('--transition'); }
    // Fonte maior (acessibilidade)
    if (document.body) document.body.style.fontSize = isOn('bigfont') ? '16px' : '';
  }

  function applyAll() { applyTheme(); applyAccent(); applyFont(); applyA11y(); }

  /* —— Navegação: interliga as páginas reais pela barra lateral —— */
  var NAV_PAGES = {
    nav_dashboard: '/adm/dashboard',
    nav_machines:  '/adm/maquinas',
    nav_users:     '/adm/usuarios',
    nav_tickets:   '/adm/chamados',
    nav_profile:   '/adm/perfil',
    nav_settings:  '/adm/configuracoes'
  };
  function currentPage() {
    try { return (location.pathname || '/').replace(/\/$/, '').toLowerCase() || '/'; }
    catch (e) { return ''; }
  }
  function initSidebarNav() {
    var cur = currentPage();
    var items = document.querySelectorAll('.sidebar .nav-item, .sidebar .ni');
    Array.prototype.forEach.call(items, function (a) {
      var span = a.querySelector('span[data-i18n^="nav_"]');
      if (!span) return;
      var target = NAV_PAGES[span.getAttribute('data-i18n')];
      if (!target) return;
      a.removeAttribute('onclick'); a.onclick = null; // remove o switchView antigo (dashboard)
      if (target.toLowerCase() === cur) {              // item da página atual
        a.classList.add('active');
        a.removeAttribute('href');
        a.style.cursor = 'default';
      } else {
        a.classList.remove('active');
        a.setAttribute('href', target);
        a.style.cursor = 'pointer';
      }
    });
  }

  /* —— Sair: redireciona para a página de login —— */
  var LOGIN_PAGE = '/login';
  function logout() { window.location.href = LOGIN_PAGE; }
  function initLogout() {
    var buttons = [];
    Array.prototype.forEach.call(document.querySelectorAll('.sb-logout, .sb-lo'), function (b) { buttons.push(b); });
    // botões com rótulo "Sair" (ex.: página de perfil)
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n="btn_logout"]'), function (span) {
      var b = span.closest('button, a'); if (b && buttons.indexOf(b) === -1) buttons.push(b);
    });
    buttons.forEach(function (b) {
      b.style.cursor = 'pointer';
      b.addEventListener('click', function (e) { e.preventDefault(); logout(); });
    });
  }

  /* —— API pública —— */
  window.BATSettings = {
    KEYS: KEYS,
    SET_PREFIX: SET_PREFIX,
    get: lsGet,
    set: function (k, v) { lsSet(k, v); applyAll(); },
    getSetting: function (id) { return lsGet(SET_PREFIX + id); },
    setSetting: function (id, v) { lsSet(SET_PREFIX + id, v); applyAll(); },
    isOn: isOn,
    resolveTheme: resolveTheme,
    shade: shade,
    applyAll: applyAll,
    initSidebarNav: initSidebarNav,
    logout: logout,
    getThemeMode: function () { return lsGet(KEYS.theme) || 'light'; },
    setTheme: function (mode) { lsSet(KEYS.theme, mode); applyAll(); return resolveTheme(mode); },
    toggleTheme: function () {
      var eff = resolveTheme(lsGet(KEYS.theme) || 'light');
      var n = eff === 'dark' ? 'light' : 'dark';
      lsSet(KEYS.theme, n); applyAll(); return n;
    },
    setAccent: function (c) { lsSet(KEYS.accent, c); applyAll(); },
    setFont: function (px) { lsSet(KEYS.font, px); applyAll(); }
  };

  // aplica o quanto antes (head) e de novo quando o body existir
  applyAll();
  document.addEventListener('DOMContentLoaded', function () { applyAll(); initSidebarNav(); initLogout(); });
  // mantém abas/páginas em sincronia
  window.addEventListener('storage', function (e) { if (e.key && e.key.indexOf('bat-') === 0) applyAll(); });
  // tema automático acompanha o sistema operacional
  try {
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        if ((lsGet(KEYS.theme) || 'light') === 'auto') applyTheme();
      });
    }
  } catch (e) {}
})();
