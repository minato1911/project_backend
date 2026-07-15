/* ============================================================
   BAT HELPDESK — API Client
   ============================================================ */
const API = {
  base: '/api',

  async get(path) {
    const res = await fetch(this.base + path, { credentials: 'same-origin' });
    if (!res.ok) throw new Error(res.status + ' ' + (await res.text()));
    return res.json();
  },

  async post(path, body) {
    const res = await fetch(this.base + path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(res.status + ' ' + (await res.text()));
    return res.json();
  },

  /* ── SESSION ── */
  session() { return this.get('/auth/session'); },

  /* ── CHAMADOS ── */
  listar(page) {
    return this.get('/chamados' + (page != null ? '?page=' + page + '&size=50' : '?size=2000'));
  },

  disponiveis() { return this.get('/chamados/disponiveis'); },

  buscar(id) { return this.get('/chamados/' + id); },

  criar(data) { return this.post('/chamados', data); },

  assumir(id, tecnicoId) { return this.post('/chamados/' + id + '/assumir?tecnicoId=' + tecnicoId); },

  deslocamento(id, tecnicoId) { return this.post('/chamados/' + id + '/deslocamento?tecnicoId=' + tecnicoId); },

  chegada(id, tecnicoId) { return this.post('/chamados/' + id + '/chegada?tecnicoId=' + tecnicoId); },

  atendimento(id, tecnicoId) { return this.post('/chamados/' + id + '/atendimento?tecnicoId=' + tecnicoId); },

  finalizar(id, tecnicoId) { return this.post('/chamados/' + id + '/finalizar?tecnicoId=' + tecnicoId); },

  observacoes(id) { return this.get('/chamados/' + id + '/observacoes'); },

  adicionarObservacao(id, data) { return this.post('/chamados/' + id + '/observacoes', data); },

  /* ── USERS ── */
  operadores() { return this.get('/usuarios/operadores'); },
  tecnicos() { return this.get('/usuarios/tecnicos'); },
  usuarios() { return this.get('/usuarios'); },

  /* ── SECTORS ── */
  setores() { return this.get('/setores'); },

  /* ── MACHINES ── */
  maquinas() { return this.get('/maquinas'); },
  criarMaquina(data) { return this.post('/maquinas', data); },
  removerMaquina(id) { return fetch(this.base + '/maquinas/' + id, { method: 'DELETE', credentials: 'same-origin' }).then(r => { if (!r.ok) throw new Error(r.status); }); },

  /* ── HELPERS ── */

  formatSeconds(sec) {
    if (sec == null || sec < 0) return null;
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  },

  formatDate(iso) {
    if (!iso) return null;
    const d = new Date(iso);
    const pad = n => String(n).padStart(2, '0');
    return pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  },

  statusMap: {
    'ABERTO': 'aberto',
    'ASSUMIDO': 'andamento',
    'DESLOCAMENTO': 'andamento',
    'NO_LOCAL': 'andamento',
    'ATENDIMENTO': 'andamento',
    'FINALIZADO': 'resolvido',
    'CANCELADO': 'cancelado'
  },

  priorityMap: {
    'ALTA': 'alta',
    'MEDIA': 'media',
    'BAIXA': 'baixa'
  },

  normalizeStatus(s) { return this.statusMap[s] || s.toLowerCase(); },
  normalizePriority(p) { return this.priorityMap[p] || p.toLowerCase(); },

  /* Returns chamados in a unified JS-friendly format */
  normalize(ch) {
    return {
      id: ch.id,
      protocolo: ch.protocolo,
      requester: ch.operador ? ch.operador.nome : '—',
      operator: ch.operador ? ch.operador.nome : '—',
      operatorId: ch.operador ? ch.operador.id : null,
      operatorEmail: ch.operador ? ch.operador.email : null,
      tech: ch.tecnico ? ch.tecnico.nome : null,
      techId: ch.tecnico ? ch.tecnico.id : null,
      techEmail: ch.tecnico ? ch.tecnico.email : null,
      sector: ch.setor || '',
      setor: ch.setor || '',
      maquina: ch.maquina || '',
      equip: ch.maquina || '',
      subject: ch.descricao ? ch.descricao.substring(0, 80) : '',
      desc: ch.descricao || '',
      problem: ch.descricao || '',
      categoria: ch.categoria || '',
      category: ch.categoria || '',
      priority: this.normalizePriority(ch.prioridade),
      prioridade: ch.prioridade,
      status: this.normalizeStatus(ch.status),
      statusOriginal: ch.status,
      date: this.formatDate(ch.dataAbertura),
      dateEnd: this.formatDate(ch.dataEncerramento),
      dataAbertura: ch.dataAbertura,
      dataEncerramento: ch.dataEncerramento,
      travelTime: this.formatSeconds(ch.tempoDeslocamento),
      serviceTime: this.formatSeconds(ch.tempoAtendimento),
      slaMinutos: ch.slaMinutos,
      imagem: ch.imagem
    };
  }
};
