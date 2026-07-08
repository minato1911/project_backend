/* ════════════════════════════════════════════════════════════
   BAT BRASIL — Operador · Preferências compartilhadas
   Tema (claro/escuro/automático) e acessibilidade (alto contraste,
   tamanho de fonte, redução de movimento) salvos em localStorage e
   reaplicados em TODAS as páginas do Operador.
   Carregue no <head> de cada página, ANTES do script da página.
════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var KEYS = {
    theme: 'bat-op-theme', // 'light' | 'dark' | 'auto'  (chave única p/ todas as páginas)
    hc: 'bat-op-hc',       // alto contraste  '1'/'0'
    font: 'bat-op-fs',     // multiplicador de fonte (ex.: '1', '1.25')
    rm: 'bat-op-rm',       // redução de movimento '1'/'0'
    bigfont: 'bat-op-bf'   // fonte ampliada '1'/'0'
  };

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) {
    try { (v === null || v === undefined) ? localStorage.removeItem(k) : localStorage.setItem(k, v); }
    catch (e) {}
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

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', resolveTheme(lsGet(KEYS.theme) || 'light'));
  }

  function applyA11y() {
    var root = document.documentElement;
    // Alto contraste
    root.setAttribute('data-hc', lsGet(KEYS.hc) === '1' ? '1' : '0');
    // Tamanho de fonte (escala) ou fonte ampliada
    var fs = lsGet(KEYS.font);
    if (fs) root.style.fontSize = (parseFloat(fs) * 100) + '%';
    else if (lsGet(KEYS.bigfont) === '1') root.style.fontSize = '18px';
    else root.style.fontSize = '';
    // Redução de movimento
    if (lsGet(KEYS.rm) === '1') {
      root.style.setProperty('--tr', '0s');
      if (!document.getElementById('op-rm-style') && document.head) {
        var st = document.createElement('style');
        st.id = 'op-rm-style';
        st.textContent = '*{animation:none!important;transition:none!important}';
        document.head.appendChild(st);
      }
    } else {
      root.style.removeProperty('--tr');
      var ex = document.getElementById('op-rm-style');
      if (ex) ex.remove();
    }
  }

  function applyAll() { applyTheme(); applyA11y(); }

  /* —— API pública —— */
  window.OPSettings = {
    KEYS: KEYS,
    get: lsGet,
    set: function (k, v) { lsSet(k, v); applyAll(); },
    getSetting: function (id) { return lsGet('bat-op-' + id); },
    setSetting: function (id, v) { lsSet('bat-op-' + id, v); applyAll(); },
    resolveTheme: resolveTheme,
    applyAll: applyAll,
    getThemeMode: function () { return lsGet(KEYS.theme) || 'light'; },
    setTheme: function (mode) { lsSet(KEYS.theme, mode); applyAll(); return resolveTheme(mode); },
    toggleTheme: function () {
      var eff = resolveTheme(lsGet(KEYS.theme) || 'light');
      var n = eff === 'dark' ? 'light' : 'dark';
      lsSet(KEYS.theme, n); applyAll(); return n;
    }
  };

  // aplica já (head) e de novo quando o body existir
  applyAll();
  document.addEventListener('DOMContentLoaded', applyAll);
  // mantém abas/páginas em sincronia
  window.addEventListener('storage', function (e) { if (e.key && e.key.indexOf('bat-op-') === 0) applyAll(); });
  // tema automático acompanha o sistema
  try {
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        if ((lsGet(KEYS.theme) || 'light') === 'auto') applyTheme();
      });
    }
  } catch (e) {}
})();
