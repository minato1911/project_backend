
/* ============================================================
   TRANSLATIONS
============================================================ */
const TR={
pt:{
  sys:"BAT Brasil",panel:"Painel do Operador",op_role:"Operador de Produção",online:"Online",
  lib_t:"Libras",lib_d:"Meus Chamados BAT Brasil. Acompanhe o status dos seus chamados técnicos.",
  sb_s1:"Principal",sb_s2:"Chamados",sb_s3:"Conta",
  n_dash:"Dashboard",n_new:"Novo Chamado",n_mine:"Meus Chamados",n_hist:"Histórico",n_prof:"Meu Perfil",n_cfg:"Configurações",n_out:"Sair",
  hdr_t:"Meus Chamados",hdr_s:"BAT Brasil · Acompanhamento de Chamados Técnicos",
  page_h2:"Meus Chamados",page_sub:"Acompanhe o status de todos os seus chamados técnicos",
  auto_lbl:"Atualização automática",upd_lbl:"Atualizado:",now:"agora",btn_refresh:"Atualizar",
  lbl_all:"Total de Chamados",lbl_0:"Aguardando Técnico",lbl_1:"Em Deslocamento",
  lbl_2:"No Local",lbl_3:"Em Atendimento",lbl_4:"Finalizados",
  o_all_st:"Todos os Status",o_st0:"Aguardando Técnico",o_st1:"Em Deslocamento",
  o_st2:"No Local",o_st3:"Em Atendimento",o_st4:"Finalizado",
  o_all_p:"Todas Prioridades",o_high:"Alta",o_med:"Média",o_low:"Baixa",
  o_all_s:"Todos Setores",btn_clr:"Limpar",sort_lbl:"Ordenar:",panel_title:"Lista de Chamados",
  o_srt_new:"Mais recente",o_srt_old:"Mais antigo",o_srt_p:"Prioridade",o_srt_st:"Status",
  th_id:"Número",th_date:"Data/Hora",th_equip:"Equipamento",th_sec:"Setor",th_prio:"Prioridade",
  th_status:"Status",th_tech:"Técnico",th_travel:"Deslocamento",th_service:"Atendimento",th_act:"Ações",
  btn_view:"Ver Detalhes",bc_label:"Meus Chamados",
  p_high:"Alta",p_med:"Média",p_low:"Baixa",
  s0:"Aguardando Técnico",s1:"Em Deslocamento",s2:"No Local",s3:"Em Atendimento",s4:"Finalizado",
  tl_ov:"Visão Geral",tl_st:"Status",tl_ob:"Observações",tl_im:"Imagens",tl_hi:"Histórico",
  det_op:"Operador",det_reg:"Matrícula",det_sec:"Setor",det_line:"Linha",det_mach:"Equipamento",
  det_loc:"Localização",det_cat:"Categoria",det_prio:"Prioridade",det_open:"Aberto em",
  det_tech:"Técnico",det_closed:"Finalizado em",desc_lbl:"Descrição do Problema",
  t_travel:"Deslocamento",t_service:"Atendimento",t_total:"Tempo Total",
  t_ns:"Não iniciado",t_run:"Em andamento",
  pip_reg:"Registrado",pip_wait:"Aguardando",pip_travel:"Deslocamento",
  pip_onsite:"No Local",pip_attend:"Atendimento",pip_done:"Finalizado",
  tech_lbl:"Técnico Responsável",no_tech:"Aguardando atribuição",
  no_obs:"Nenhuma observação registrada.",no_img:"Nenhuma imagem anexada.",
  h_open:"Chamado aberto pelo operador",h_assumed:"Técnico assumiu o chamado",
  h_travel:"Técnico iniciou deslocamento",h_onsite:"Técnico chegou ao local",
  h_attend:"Atendimento iniciado",h_obs:"Observação técnica adicionada",h_done:"Chamado finalizado",
  showing:"Exibindo",of:"de",records:"registros",
  no_results:"Nenhum chamado encontrado.",no_results_s:"Tente ajustar os filtros.",
  toast_ok:"Dados atualizados!"
},
en:{
  sys:"BAT Brasil",panel:"Operator Panel",op_role:"Production Operator",online:"Online",
  lib_t:"Sign Language",lib_d:"BAT Brasil My Tickets. Track your technical support tickets.",
  sb_s1:"Main",sb_s2:"Tickets",sb_s3:"Account",
  n_dash:"Dashboard",n_new:"New Ticket",n_mine:"My Tickets",n_hist:"History",
  n_prof:"My Profile",n_cfg:"Settings",n_out:"Sign Out",
  hdr_t:"My Tickets",hdr_s:"BAT Brasil · Technical Ticket Tracking",
  page_h2:"My Tickets",page_sub:"Track the status of all your technical tickets",
  auto_lbl:"Auto-update",upd_lbl:"Updated:",now:"just now",btn_refresh:"Refresh",
  lbl_all:"Total Tickets",lbl_0:"Waiting for Tech",lbl_1:"Tech Traveling",
  lbl_2:"On Site",lbl_3:"In Service",lbl_4:"Closed",
  o_all_st:"All Statuses",o_st0:"Waiting for Tech",o_st1:"Tech Traveling",
  o_st2:"On Site",o_st3:"In Service",o_st4:"Closed",
  o_all_p:"All Priorities",o_high:"High",o_med:"Medium",o_low:"Low",
  o_all_s:"All Sectors",btn_clr:"Clear",sort_lbl:"Sort:",panel_title:"Ticket List",
  o_srt_new:"Newest first",o_srt_old:"Oldest first",o_srt_p:"Priority",o_srt_st:"Status",
  th_id:"Number",th_date:"Date/Time",th_equip:"Equipment",th_sec:"Sector",th_prio:"Priority",
  th_status:"Status",th_tech:"Technician",th_travel:"Travel",th_service:"Service",th_act:"Actions",
  btn_view:"View Details",bc_label:"My Tickets",
  p_high:"High",p_med:"Medium",p_low:"Low",
  s0:"Waiting for Tech",s1:"Tech Traveling",s2:"On Site",s3:"In Service",s4:"Closed",
  tl_ov:"Overview",tl_st:"Status",tl_ob:"Observations",tl_im:"Images",tl_hi:"History",
  det_op:"Operator",det_reg:"Employee ID",det_sec:"Sector",det_line:"Line",det_mach:"Equipment",
  det_loc:"Location",det_cat:"Category",det_prio:"Priority",det_open:"Opened at",
  det_tech:"Technician",det_closed:"Closed at",desc_lbl:"Problem Description",
  t_travel:"Travel",t_service:"Service",t_total:"Total Time",
  t_ns:"Not started",t_run:"Running",
  pip_reg:"Registered",pip_wait:"Waiting",pip_travel:"Traveling",
  pip_onsite:"On Site",pip_attend:"In Service",pip_done:"Closed",
  tech_lbl:"Assigned Technician",no_tech:"Waiting for technician",
  no_obs:"No observations recorded yet.",no_img:"No images attached.",
  h_open:"Ticket opened by operator",h_assumed:"Technician assumed ticket",
  h_travel:"Technician started traveling",h_onsite:"Technician arrived on site",
  h_attend:"Service started",h_obs:"Technical observation added",h_done:"Ticket closed",
  showing:"Showing",of:"of",records:"records",
  no_results:"No tickets found.",no_results_s:"Try adjusting the filters.",
  toast_ok:"Data updated!"
},
es:{
  sys:"BAT Brasil",panel:"Panel del Operador",op_role:"Operador de Producción",online:"En línea",
  lib_t:"Lengua de Señas",lib_d:"Mis Tickets BAT Brasil.",
  sb_s1:"Principal",sb_s2:"Tickets",sb_s3:"Cuenta",
  n_dash:"Dashboard",n_new:"Nuevo Ticket",n_mine:"Mis Tickets",n_hist:"Historial",
  n_prof:"Mi Perfil",n_cfg:"Configuración",n_out:"Cerrar sesión",
  hdr_t:"Mis Tickets",hdr_s:"BAT Brasil · Seguimiento de Tickets",
  page_h2:"Mis Tickets",page_sub:"Siga el estado de sus tickets técnicos",
  auto_lbl:"Actualización automática",upd_lbl:"Actualizado:",now:"ahora",btn_refresh:"Actualizar",
  lbl_all:"Total de Tickets",lbl_0:"Esperando Técnico",lbl_1:"Técnico en Camino",
  lbl_2:"En el Lugar",lbl_3:"En Atención",lbl_4:"Finalizados",
  o_all_st:"Todos los Estados",o_st0:"Esperando Técnico",o_st1:"Técnico en Camino",
  o_st2:"En el Lugar",o_st3:"En Atención",o_st4:"Finalizado",
  o_all_p:"Todas Prioridades",o_high:"Alta",o_med:"Media",o_low:"Baja",
  o_all_s:"Todos Sectores",btn_clr:"Limpiar",sort_lbl:"Ordenar:",panel_title:"Lista de Tickets",
  o_srt_new:"Más reciente",o_srt_old:"Más antiguo",o_srt_p:"Prioridad",o_srt_st:"Estado",
  th_id:"Número",th_date:"Fecha/Hora",th_equip:"Equipo",th_sec:"Sector",th_prio:"Prioridad",
  th_status:"Estado",th_tech:"Técnico",th_travel:"Desplazamiento",th_service:"Atención",th_act:"Acciones",
  btn_view:"Ver Detalles",bc_label:"Mis Tickets",
  p_high:"Alta",p_med:"Media",p_low:"Baja",
  s0:"Esperando Técnico",s1:"Técnico en Camino",s2:"En el Lugar",s3:"En Atención",s4:"Finalizado",
  tl_ov:"Resumen",tl_st:"Estado",tl_ob:"Observaciones",tl_im:"Imágenes",tl_hi:"Historial",
  det_op:"Operador",det_reg:"Matrícula",det_sec:"Sector",det_line:"Línea",det_mach:"Equipo",
  det_loc:"Ubicación",det_cat:"Categoría",det_prio:"Prioridad",det_open:"Abierto a las",
  det_tech:"Técnico",det_closed:"Cerrado a las",desc_lbl:"Descripción del Problema",
  t_travel:"Desplazamiento",t_service:"Atención",t_total:"Tiempo Total",
  t_ns:"No iniciado",t_run:"En curso",
  pip_reg:"Registrado",pip_wait:"Esperando",pip_travel:"En camino",
  pip_onsite:"En el lugar",pip_attend:"En atención",pip_done:"Finalizado",
  tech_lbl:"Técnico Asignado",no_tech:"Esperando técnico",
  no_obs:"Sin observaciones.",no_img:"Sin imágenes adjuntas.",
  h_open:"Ticket abierto",h_assumed:"Técnico asumió el ticket",
  h_travel:"Técnico en camino",h_onsite:"Técnico llegó al lugar",
  h_attend:"Atención iniciada",h_obs:"Observación añadida",h_done:"Ticket finalizado",
  showing:"Mostrando",of:"de",records:"registros",
  no_results:"No se encontraron tickets.",no_results_s:"Ajuste los filtros.",
  toast_ok:"Datos actualizados!"
},
de:{
  sys:"BAT Brasil",panel:"Operator-Panel",op_role:"Produktionsoperator",online:"Online",
  lib_t:"Gebärdensprache",lib_d:"Meine Tickets BAT Brasil.",
  sb_s1:"Hauptmenü",sb_s2:"Tickets",sb_s3:"Konto",
  n_dash:"Dashboard",n_new:"Neues Ticket",n_mine:"Meine Tickets",n_hist:"Verlauf",
  n_prof:"Mein Profil",n_cfg:"Einstellungen",n_out:"Abmelden",
  hdr_t:"Meine Tickets",hdr_s:"BAT Brasil · Ticket-Verfolgung",
  page_h2:"Meine Tickets",page_sub:"Verfolgen Sie Ihre technischen Tickets",
  auto_lbl:"Auto-Aktualisierung",upd_lbl:"Aktualisiert:",now:"gerade eben",btn_refresh:"Aktualisieren",
  lbl_all:"Tickets gesamt",lbl_0:"Warte auf Techniker",lbl_1:"Techniker unterwegs",
  lbl_2:"Vor Ort",lbl_3:"In Bearbeitung",lbl_4:"Abgeschlossen",
  o_all_st:"Alle Status",o_st0:"Warte auf Techniker",o_st1:"Techniker unterwegs",
  o_st2:"Vor Ort",o_st3:"In Bearbeitung",o_st4:"Abgeschlossen",
  o_all_p:"Alle Prioritäten",o_high:"Hoch",o_med:"Mittel",o_low:"Niedrig",
  o_all_s:"Alle Bereiche",btn_clr:"Leeren",sort_lbl:"Sortieren:",panel_title:"Ticket-Liste",
  o_srt_new:"Neueste zuerst",o_srt_old:"Älteste zuerst",o_srt_p:"Priorität",o_srt_st:"Status",
  th_id:"Nummer",th_date:"Datum/Zeit",th_equip:"Gerät",th_sec:"Bereich",th_prio:"Priorität",
  th_status:"Status",th_tech:"Techniker",th_travel:"Anfahrt",th_service:"Service",th_act:"Aktionen",
  btn_view:"Details",bc_label:"Meine Tickets",
  p_high:"Hoch",p_med:"Mittel",p_low:"Niedrig",
  s0:"Warte auf Techniker",s1:"Unterwegs",s2:"Vor Ort",s3:"In Bearbeitung",s4:"Abgeschlossen",
  tl_ov:"Übersicht",tl_st:"Status",tl_ob:"Notizen",tl_im:"Bilder",tl_hi:"Verlauf",
  det_op:"Operator",det_reg:"Mitarbeiter-ID",det_sec:"Bereich",det_line:"Linie",det_mach:"Gerät",
  det_loc:"Standort",det_cat:"Kategorie",det_prio:"Priorität",det_open:"Geöffnet am",
  det_tech:"Techniker",det_closed:"Abgeschlossen am",desc_lbl:"Problembeschreibung",
  t_travel:"Anfahrt",t_service:"Service",t_total:"Gesamtzeit",
  t_ns:"Nicht gestartet",t_run:"Läuft",
  pip_reg:"Registriert",pip_wait:"Warten",pip_travel:"Unterwegs",
  pip_onsite:"Vor Ort",pip_attend:"In Bearbeitung",pip_done:"Abgeschlossen",
  tech_lbl:"Zugewiesener Techniker",no_tech:"Warte auf Techniker",
  no_obs:"Keine Notizen vorhanden.",no_img:"Keine Bilder angehängt.",
  h_open:"Ticket geöffnet",h_assumed:"Ticket übernommen",
  h_travel:"Techniker unterwegs",h_onsite:"Techniker vor Ort",
  h_attend:"Service gestartet",h_obs:"Notiz hinzugefügt",h_done:"Ticket abgeschlossen",
  showing:"Zeige",of:"von",records:"Einträgen",
  no_results:"Keine Tickets gefunden.",no_results_s:"Filter anpassen.",
  toast_ok:"Daten aktualisiert!"
},
ru:{
  sys:"BAT Brasil",panel:"Панель оператора",op_role:"Оператор производства",online:"Онлайн",
  lib_t:"Язык жестов",lib_d:"Мои заявки BAT Brasil.",
  sb_s1:"Главное",sb_s2:"Заявки",sb_s3:"Аккаунт",
  n_dash:"Панель",n_new:"Новая заявка",n_mine:"Мои заявки",n_hist:"История",
  n_prof:"Мой профиль",n_cfg:"Настройки",n_out:"Выйти",
  hdr_t:"Мои заявки",hdr_s:"BAT Brasil · Отслеживание заявок",
  page_h2:"Мои заявки",page_sub:"Отслеживайте статус ваших технических заявок",
  auto_lbl:"Автообновление",upd_lbl:"Обновлено:",now:"только что",btn_refresh:"Обновить",
  lbl_all:"Всего заявок",lbl_0:"Ожидание техника",lbl_1:"Техник едет",
  lbl_2:"На месте",lbl_3:"В работе",lbl_4:"Закрыто",
  o_all_st:"Все статусы",o_st0:"Ожидание",o_st1:"В пути",
  o_st2:"На месте",o_st3:"В работе",o_st4:"Закрыто",
  o_all_p:"Все приоритеты",o_high:"Высокий",o_med:"Средний",o_low:"Низкий",
  o_all_s:"Все отделы",btn_clr:"Очистить",sort_lbl:"Сортировка:",panel_title:"Список заявок",
  o_srt_new:"Сначала новые",o_srt_old:"Сначала старые",o_srt_p:"Приоритет",o_srt_st:"Статус",
  th_id:"Номер",th_date:"Дата/Время",th_equip:"Оборудование",th_sec:"Отдел",th_prio:"Приоритет",
  th_status:"Статус",th_tech:"Техник",th_travel:"Поездка",th_service:"Обслуживание",th_act:"Действия",
  btn_view:"Детали",bc_label:"Мои заявки",
  p_high:"Высокий",p_med:"Средний",p_low:"Низкий",
  s0:"Ожидание",s1:"В пути",s2:"На месте",s3:"В работе",s4:"Закрыто",
  tl_ov:"Обзор",tl_st:"Статус",tl_ob:"Заметки",tl_im:"Изображения",tl_hi:"История",
  det_op:"Оператор",det_reg:"Табельный номер",det_sec:"Отдел",det_line:"Линия",det_mach:"Оборудование",
  det_loc:"Расположение",det_cat:"Категория",det_prio:"Приоритет",det_open:"Открыта",
  det_tech:"Техник",det_closed:"Закрыта",desc_lbl:"Описание проблемы",
  t_travel:"Поездка",t_service:"Обслуживание",t_total:"Итого",
  t_ns:"Не начато",t_run:"Идёт",
  pip_reg:"Зарегистрировано",pip_wait:"Ожидание",pip_travel:"В пути",
  pip_onsite:"На месте",pip_attend:"В работе",pip_done:"Закрыто",
  tech_lbl:"Назначенный техник",no_tech:"Ожидание техника",
  no_obs:"Нет наблюдений.",no_img:"Нет изображений.",
  h_open:"Заявка открыта",h_assumed:"Техник принял",
  h_travel:"Техник едет",h_onsite:"Техник прибыл",
  h_attend:"Начато",h_obs:"Заметка добавлена",h_done:"Заявка закрыта",
  showing:"Показано",of:"из",records:"записей",
  no_results:"Заявок не найдено.",no_results_s:"Измените фильтры.",
  toast_ok:"Данные обновлены!"
}
};

var CL = localStorage.getItem('bat-mc-lang') || 'pt';
function T(k){ return (TR[CL]||TR.pt)[k] || TR.pt[k] || k; }

/* ============================================================
   APPLY TRANSLATIONS — uses ID map
============================================================ */
var ID_MAP = {
  'lib-t':'lib_t','lib-d':'lib_d',
  'sb-panel':'panel','sb-role':'op_role','sb-on':'online',
  'sb-s1':'sb_s1','sb-s2':'sb_s2','sb-s3':'sb_s3',
  'n-dash':'n_dash','n-new':'n_new','n-mine':'n_mine','n-hist':'n_hist',
  'n-prof':'n_prof','n-cfg':'n_cfg','n-out':'n_out',
  'hdr-t':'hdr_t','hdr-s':'hdr_s','hdr-on':'online',
  'page-h2':'page_h2','page-sub':'page_sub',
  'auto-lbl':'auto_lbl','upd-lbl':'upd_lbl','btn-refresh':'btn_refresh',
  'lbl-all':'lbl_all','lbl-0':'lbl_0','lbl-1':'lbl_1','lbl-2':'lbl_2','lbl-3':'lbl_3','lbl-4':'lbl_4',
  'o-all-st':'o_all_st','o-st0':'o_st0','o-st1':'o_st1','o-st2':'o_st2','o-st3':'o_st3','o-st4':'o_st4',
  'o-all-p':'o_all_p','o-high':'o_high','o-med':'o_med','o-low':'o_low','o-all-s':'o_all_s',
  'btn-clr':'btn_clr','sort-lbl':'sort_lbl','panel-title':'panel_title',
  'o-srt-new':'o_srt_new','o-srt-old':'o_srt_old','o-srt-p':'o_srt_p','o-srt-st':'o_srt_st',
  'th-id':'th_id','th-date':'th_date','th-equip':'th_equip','th-sec':'th_sec','th-prio':'th_prio',
  'th-status':'th_status','th-tech':'th_tech','th-travel':'th_travel','th-service':'th_service','th-act':'th_act',
  'bc-label':'bc_label','tl-ov':'tl_ov','tl-st':'tl_st','tl-ob':'tl_ob','tl-im':'tl_im','tl-hi':'tl_hi',
  'm-desc-lbl':'desc_lbl'
};
function applyTR(){
  Object.keys(ID_MAP).forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.textContent = T(ID_MAP[id]);
  });
  var si = document.getElementById('srch');
  if(si) si.placeholder = T('th_id') + ', ' + T('th_equip') + '...';
  document.documentElement.lang = CL==='pt'?'pt-BR':CL==='ru'?'ru':CL==='de'?'de':CL==='es'?'es':'en';
}

function setLang(code){
  CL = code;
  localStorage.setItem('bat-mc-lang', code);
  document.getElementById('lm').classList.remove('open');
  document.getElementById('lang-lbl').textContent = code.toUpperCase();
  document.querySelectorAll('.lo').forEach(function(el, i){
    el.classList.toggle('active', ['pt','en','es','de','ru'][i] === code);
  });
  applyTR();
  renderTable();
}
function toggleLM(){
  document.getElementById('lm').classList.toggle('open');
}
document.addEventListener('click', function(e){
  if(!e.target.closest('.lw')) document.getElementById('lm').classList.remove('open');
});

/* ============================================================
   THEME
============================================================ */
function initTheme(){
  document.getElementById('theme-ico').className = OPSettings.resolveTheme(OPSettings.getThemeMode())==='dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}
function toggleTheme(){
  var n = OPSettings.toggleTheme();
  document.getElementById('theme-ico').className = n==='dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

/* ============================================================
   SIDEBAR
============================================================ */
function toggleSB(){
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('active');
}
function closeSB(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

/* ============================================================
   TOAST
============================================================ */
function showToast(msg, type){
  var t = document.getElementById('toast');
  var ic = document.getElementById('tico');
  var icons = {suc:'fa-check-circle', err:'fa-times-circle', info:'fa-info-circle', warn:'fa-exclamation-circle'};
  document.getElementById('tmsg').textContent = msg;
  t.className = 'toast show ' + (type || 'suc');
  ic.className = 'fa-solid ' + (icons[type] || 'fa-check-circle');
  clearTimeout(t._t);
  t._t = setTimeout(function(){ t.classList.remove('show'); }, 3500);
}

/* ============================================================
   USER
============================================================ */
function ini(n){
  var p = n.trim().split(' ');
  return p.length >= 2 ? (p[0][0] + p[p.length-1][0]).toUpperCase() : (p[0][0] || 'J').toUpperCase();
}
function initUser(){
  var name = localStorage.getItem('bat-op-name') || 'João Pedro Silva';
  var iv = ini(name);
  ['sb-av','hdr-av'].forEach(function(id){ var e=document.getElementById(id); if(e) e.textContent=iv; });
  ['sb-name','hdr-name'].forEach(function(id){ var e=document.getElementById(id); if(e) e.textContent=name; });
}

/* ============================================================
   DATA
============================================================ */
var tickets = [];
var sortCol = 'date', sortDir = 'desc', page = 1;
var PER = 10;

function parseDate(ds){
  if(!ds) return new Date(0);
  var p = ds.split(' ');
  var dp = p[0].split('/');
  return new Date(dp[2] + '-' + dp[1] + '-' + dp[0] + (p[1] ? 'T' + p[1] : ''));
}

function sumTimes(a, b){
  if(!a || !b) return '—';
  function toSec(s){ var p=s.split(':'); return (+p[0])*3600 + (+p[1])*60 + (+(p[2]||0)); }
  var tot = toSec(a) + toSec(b);
  return String(Math.floor(tot/3600)).padStart(2,'0') + ':' +
         String(Math.floor((tot%3600)/60)).padStart(2,'0') + ':' +
         String(tot%60).padStart(2,'0');
}

function loadData(){
  localStorage.removeItem('bat-op-tickets');
  localStorage.removeItem('bat-tech-tickets');
  fetch('/api/chamados?page=0&size=100').then(r=>r.json()).then(data=>{
    var items = data.content || data || [];
    tickets = items.map(c=>({ 
      id:c.id,
      equip:c.equip||c.equipment||'—',
      setor:c.sector||'—',
      prio:(c.priority||'baixa').toLowerCase(),
      status:c.status||'0',
      tech:c.technicianName||'—',
      data:new Date(c.createdAt||new Date()).toLocaleDateString('pt-BR'),
      notas:c.notes||'',
      desc:c.subject||c.descricao||''
    }));
  }).catch(e=>{ console.warn('Erro ao carregar chamados:', e); tickets=[]; });
}

/* ============================================================
   BADGES — use single quotes for HTML attributes (FIXED)
============================================================ */
function prioBadge(p){
  var labels = {alta: T('p_high'), media: T('p_med'), baixa: T('p_low')};
  var classes = {alta:'p-a', media:'p-m', baixa:'p-b'};
  var dotColors = {alta:'var(--dn)', media:'var(--wn)', baixa:'var(--bm)'};
  var lbl = labels[p] || p;
  var cls = classes[p] || 'p-b';
  var dc = dotColors[p] || 'var(--bm)';
  return '<span class="' + cls + ' prio"><span style="width:5px;height:5px;border-radius:50%;display:inline-block;background:' + dc + '"></span> ' + lbl + '</span>';
}

function stBadge(s){
  var cfg = {
    '0': {cls:'s0', lbl:T('s0'), icon:'fa-hourglass-half', dc:'#9CA3AF', anim:false},
    '1': {cls:'s1', lbl:T('s1'), icon:'fa-truck-moving', dc:'var(--wn)', anim:true},
    '2': {cls:'s2', lbl:T('s2'), icon:'fa-location-dot', dc:'var(--pu)', anim:true},
    '3': {cls:'s3', lbl:T('s3'), icon:'fa-wrench', dc:'var(--bm)', anim:true},
    '4': {cls:'s4', lbl:T('s4'), icon:'fa-check', dc:'var(--ok)', anim:false}
  };
  var c = cfg[s] || cfg['0'];
  var animStyle = c.anim ? ';animation:blink 1.3s ease infinite' : '';
  return '<span class="stb ' + c.cls + '"><span class="dp" style="background:' + c.dc + animStyle + '"></span> ' + c.lbl + '</span>';
}

/* ============================================================
   STATS
============================================================ */
function animV(el, tgt){
  if(!el) return;
  var from = parseInt(el.textContent) || 0, dur = 700, st = performance.now();
  function step(now){ var p=Math.min((now-st)/dur,1), e=1-Math.pow(1-p,3); el.textContent=Math.round(from+(tgt-from)*e); if(p<1) requestAnimationFrame(step); }
  requestAnimationFrame(step);
}

function updateStats(){
  var total = tickets.length;
  var c = {'0':0,'1':0,'2':0,'3':0,'4':0};
  tickets.forEach(function(t){ if(c[t.status]!==undefined) c[t.status]++; });
  animV(document.getElementById('cnt-all'), total);
  ['0','1','2','3','4'].forEach(function(k){ animV(document.getElementById('cnt-'+k), c[k]); });
  document.getElementById('nb-open').textContent = c['0']+c['1']+c['2']+c['3'];
}

function filterSt(s){
  document.getElementById('f-st').value = s;
  document.querySelectorAll('.sc').forEach(function(c){ c.classList.remove('afl'); });
  var el = document.getElementById(s ? 'sc-'+s : 'sc-all');
  if(el) el.classList.add('afl');
  page = 1;
  renderTable();
}

/* ============================================================
   FILTERS & SORT
============================================================ */
function getFiltered(){
  var q = (document.getElementById('srch').value || '').toLowerCase();
  var fst = document.getElementById('f-st').value;
  var fpr = document.getElementById('f-pr').value;
  var fsc = document.getElementById('f-sec').value;
  var fd1 = document.getElementById('f-d1').value;
  var fd2 = document.getElementById('f-d2').value;
  return tickets.filter(function(t){
    if(q && !(t.id+t.equip+t.sector+(t.tech||'')).toLowerCase().includes(q)) return false;
    if(fst && t.status !== fst) return false;
    if(fpr && t.priority !== fpr) return false;
    if(fsc && t.sector !== fsc) return false;
    if(fd1 && parseDate(t.date) < new Date(fd1)) return false;
    if(fd2 && parseDate(t.date) > new Date(fd2+'T23:59:59')) return false;
    return true;
  });
}

function sortData(arr){
  var sv = document.getElementById('f-sort').value;
  var col = sortCol, dir = sortDir;
  var po = {alta:3, media:2, baixa:1};
  return arr.slice().sort(function(a,b){
    if(sv==='prio' || col==='prio'){ var d=(po[b.priority]||0)-(po[a.priority]||0); return d!==0?d:parseDate(b.date)-parseDate(a.date); }
    if(sv==='st' || col==='status'){ var d=(+a.status)-(+b.status); return d!==0?d:parseDate(b.date)-parseDate(a.date); }
    if(col==='id'){ var d=a.id.localeCompare(b.id); return dir==='asc'?d:-d; }
    if(col==='equip'){ var d=a.equip.localeCompare(b.equip); return dir==='asc'?d:-d; }
    if(col==='sector'){ var d=a.sector.localeCompare(b.sector); return dir==='asc'?d:-d; }
    var da=parseDate(a.date), db=parseDate(b.date);
    return (sv==='old' || dir==='asc') ? da-db : db-da;
  });
}

function srt(col){
  if(sortCol===col) sortDir = sortDir==='asc'?'desc':'asc';
  else { sortCol=col; sortDir='asc'; }
  document.querySelectorAll('thead th').forEach(function(th){ th.classList.remove('srt'); });
  var el = document.getElementById('th-'+col);
  if(el) el.classList.add('srt');
  renderTable();
}

function clearFilters(){
  ['f-st','f-pr','f-sec'].forEach(function(id){ var e=document.getElementById(id); if(e) e.value=''; });
  ['f-d1','f-d2'].forEach(function(id){ var e=document.getElementById(id); if(e) e.value=''; });
  document.getElementById('srch').value = '';
  document.querySelectorAll('.sc').forEach(function(c){ c.classList.remove('afl'); });
  page = 1;
  renderTable();
}

/* ============================================================
   RENDER TABLE — FIXED (no double-quote HTML attribute bug)
============================================================ */
function renderTable(){
  var fi = getFiltered();
  var sorted = sortData(fi);
  var total = sorted.length;
  var tp = Math.max(1, Math.ceil(total/PER));
  if(page > tp) page = 1;
  var st = (page-1)*PER;
  var pg = sorted.slice(st, st+PER);
  var tbody = document.getElementById('tbody');

  if(!total){
    tbody.innerHTML = '<tr><td colspan="10"><div class="empty"><i class="fa-solid fa-ticket-simple"></i><strong>' + T('no_results') + '</strong><p>' + T('no_results_s') + '</p></div></td></tr>';
  } else {
    var rows = pg.map(function(t, i){
      // Travel time cell
      var tvHtml;
      if(t.travelTime){ tvHtml = '<span class="tval">' + t.travelTime + '</span>'; }
      else if(t.status==='1'){ tvHtml = '<span class="tval run">' + T('t_run') + '</span>'; }
      else { tvHtml = '<span class="tval na">' + T('t_ns') + '</span>'; }

      // Service time cell
      var svHtml;
      if(t.serviceTime){ svHtml = '<span class="tval">' + t.serviceTime + '</span>'; }
      else if(t.status==='3'){ svHtml = '<span class="tval run">' + T('t_run') + '</span>'; }
      else { svHtml = '<span class="tval na">' + T('t_ns') + '</span>'; }

      // Tech display
      var techHtml = t.tech
        ? '<span style="font-size:12.5px;color:var(--tx)">' + t.tech + '</span>'
        : '<em style="color:var(--mu);font-size:11.5px">' + T('no_tech') + '</em>';

      // Build row using array join — avoids all quote issues
      var cells = [
        '<span style="font-family:monospace;font-size:12.5px;font-weight:700;color:var(--bm)">' + t.id + '</span>',
        '<span style="font-size:12px">' + t.date + '</span>',
        '<span style="font-size:13px;font-weight:600">' + t.equip + '</span>',
        '<span style="font-size:12px">' + t.sector + '</span>',
        prioBadge(t.priority),
        stBadge(t.status),
        techHtml,
        '<div class="tcell">' + tvHtml + '<span class="tlbl">' + T('t_travel') + '</span></div>',
        '<div class="tcell">' + svHtml + '<span class="tlbl">' + T('t_service') + '</span></div>',
        '<button class="btn primary xs" onclick=\'openModal("' + t.id + '")\' ><i class="fa-solid fa-eye"></i> ' + T('btn_view') + '</button>'
      ];

      return '<tr style="animation-delay:' + (i*0.03) + 's">' +
             cells.map(function(c){ return '<td>' + c + '</td>'; }).join('') +
             '</tr>';
    });
    tbody.innerHTML = rows.join('');
  }

  // Panel subtitle
  var psi = document.getElementById('panel-sub');
  if(psi) psi.textContent = T('showing') + ' ' + (total ? st+1 : 0) + '-' + Math.min(st+PER,total) + ' ' + T('of') + ' ' + total + ' ' + T('records');

  // Pagination info
  var pi = document.getElementById('pg-inf');
  if(pi) pi.innerHTML = T('showing') + ' <strong>' + Math.min(st+1,total) + '-' + Math.min(st+PER,total) + '</strong> ' + T('of') + ' <strong>' + total + '</strong>';

  // Pagination buttons
  var pb = document.getElementById('pg-btns');
  if(pb){
    var h = '<button class="pp" onclick="goPage(' + (page-1) + ')" ' + (page<=1?'disabled':'') + '><i class="fa-solid fa-chevron-left"></i></button>';
    for(var i=1; i<=tp; i++){
      if(i===1 || i===tp || Math.abs(i-page)<=1){
        h += '<button class="pp ' + (i===page?'act':'') + '" onclick="goPage(' + i + ')">' + i + '</button>';
      } else if(Math.abs(i-page)===2){
        h += '<span class="pp" style="cursor:default">...</span>';
      }
    }
    h += '<button class="pp" onclick="goPage(' + (page+1) + ')" ' + (page>=tp?'disabled':'') + '><i class="fa-solid fa-chevron-right"></i></button>';
    pb.innerHTML = h;
  }
}

function goPage(p){
  var fi = getFiltered();
  var tp = Math.max(1, Math.ceil(fi.length/PER));
  if(p < 1 || p > tp) return;
  page = p;
  renderTable();
}

/* ============================================================
   MODAL — switchTab FIXED (single clean implementation)
============================================================ */
document.getElementById('modal').addEventListener('click', function(e){
  if(e.target === document.getElementById('modal')){
    document.getElementById('modal').classList.remove('open');
  }
});

function switchTab(tab){
  var tabs = ['ov','st','ob','im','hi'];
  // Update tab buttons
  var tabBtns = document.querySelectorAll('.m-tab');
  tabBtns.forEach(function(btn, i){
    btn.classList.toggle('active', tabs[i] === tab);
  });
  // Update tab panes by ID
  tabs.forEach(function(id){
    var pane = document.getElementById('tabp-' + id);
    if(pane) pane.classList.toggle('active', id === tab);
  });
}

function openModal(id){
  var t = tickets.find(function(x){ return x.id === id; });
  if(!t) return;

  document.getElementById('m-num').textContent = t.id;
  document.getElementById('m-equip').textContent = t.equip + ' — ' + t.sector;
  document.getElementById('m-badges').innerHTML = prioBadge(t.priority) + ' ' + stBadge(t.status);

  // Reset to overview tab
  switchTab('ov');

  /* ── OVERVIEW TAB ── */
  var detailPairs = [
    ['det_op', t.operator], ['det_reg', t.matricula],
    ['det_sec', t.sector], ['det_line', t.line || '—'],
    ['det_mach', t.equip], ['det_loc', t.location || '—'],
    ['det_cat', t.category || '—'], ['det_prio', prioBadge(t.priority)],
    ['det_open', t.date], ['det_tech', t.tech || T('no_tech')]
  ];
  if(t.dateEnd) detailPairs.push(['det_closed', t.dateEnd]);

  document.getElementById('m-dg').innerHTML = detailPairs.map(function(pair){
    return '<div class="di"><div class="dl">' + T(pair[0]) + '</div><div class="dv">' + pair[1] + '</div></div>';
  }).join('');

  document.getElementById('m-desc').textContent = t.problem;

  // Timer boxes
  var tvShow = t.travelTime || (t.status==='1' ? T('t_run') : T('t_ns'));
  var svShow = t.serviceTime || (t.status==='3' ? T('t_run') : (t.status==='4' ? '—' : T('t_ns')));
  var ttl = (t.travelTime && t.serviceTime) ? sumTimes(t.travelTime, t.serviceTime) : '—';
  var tvRun = (!t.travelTime && t.status==='1');
  var svRun = (!t.serviceTime && t.status==='3');

  var timerBoxes = [
    {ico:'fa-truck-moving', val:tvShow, run:tvRun, lbl:T('t_travel')},
    {ico:'fa-wrench', val:svShow, run:svRun, lbl:T('t_service')},
    {ico:'fa-clock', val:ttl, run:false, lbl:T('t_total')}
  ];
  document.getElementById('m-timers').innerHTML = timerBoxes.map(function(tb){
    var valCls = 'tv' + (tb.run ? ' run' : '') + (tb.val===T('t_ns')||tb.val==='—' ? ' na' : '');
    return '<div class="timer-box"><i class="fa-solid ' + tb.ico + '"></i><div class="' + valCls + '">' + tb.val + '</div><div class="tl">' + tb.lbl + '</div></div>';
  }).join('');

  /* ── STATUS TAB ── */
  var statusOrder = ['0','1','2','3','4'];
  var curIdx = statusOrder.indexOf(t.status);
  var pipCfg = [
    {k:'pip_reg', ico:'fa-check', s:'-1'},
    {k:'pip_wait', ico:'fa-hourglass-half', s:'0'},
    {k:'pip_travel', ico:'fa-truck-moving', s:'1'},
    {k:'pip_onsite', ico:'fa-location-dot', s:'2'},
    {k:'pip_attend', ico:'fa-wrench', s:'3'},
    {k:'pip_done', ico:'fa-flag-checkered', s:'4'}
  ];
  document.getElementById('m-pipeline').innerHTML = pipCfg.map(function(ps, idx){
    var cls = 'pend';
    if(idx === 0) cls = 'done';
    else if(ps.s === t.status) cls = 'cur';
    else if(ps.s !== '-1' && (+ps.s) < (+t.status)) cls = 'done';
    var histEntry = (t.history || []).find(function(h){ return h.st === ps.s; });
    var timeLabel = histEntry ? '<div class="pip-time">' + (histEntry.time||'').split(' ')[1] + '</div>' : '';
    return '<div class="pip-step ' + cls + '"><div class="pip-dot"><i class="fa-solid ' + ps.ico + '"></i></div><div class="pip-lbl">' + T(ps.k) + '</div>' + timeLabel + '</div>';
  }).join('');

  var mtech = document.getElementById('m-tech');
  if(t.tech){
    var av = ini(t.tech);
    mtech.innerHTML = '<div class="tech-card"><div class="tech-av">' + av + '</div><div class="tech-inf"><p>' + T('tech_lbl') + '</p><strong>' + t.tech + '</strong><span>' + stBadge(t.status) + '</span></div></div>';
  } else {
    mtech.innerHTML = '<div class="no-tech"><i class="fa-solid fa-user-clock"></i><p>' + T('no_tech') + '</p></div>';
  }

  /* ── OBSERVATIONS TAB ── */
  var mobs = document.getElementById('m-obs');
  if(t.obs && t.obs.length){
    mobs.innerHTML = '<div class="obs-list">' + t.obs.map(function(o){
      return '<div class="obs-item"><div class="obs-hd"><strong>' + o.type + '</strong><div class="obs-meta"><span class="obs-tag">' + o.type + '</span><span class="obs-time"><i class="fa-regular fa-clock"></i> ' + o.time + '</span></div></div><div class="obs-body">' + o.text + '</div><div class="obs-tech"><i class="fa-solid fa-hard-hat"></i> ' + o.tech + '</div></div>';
    }).join('') + '</div>';
  } else {
    mobs.innerHTML = '<div class="no-obs"><i class="fa-solid fa-notes-medical"></i><p>' + T('no_obs') + '</p></div>';
  }

  /* ── IMAGES TAB ── */
  var mimgs = document.getElementById('m-imgs');
  if(t.files && t.files.length){
    var colors = ['#002B5B','#005691','#2D9E6B','#6B46C1','#E8A020','#C8A96B'];
    var imgHtml = t.files.map(function(f, fi){
      var c = colors[fi % colors.length];
      var isImg = /\.(jpe?g|png|gif|webp)$/i.test(f);
      var inner = isImg
        ? '<div class="img-ph" style="background:linear-gradient(135deg,' + c + '22,' + c + '44);width:100%;height:100%"><i class="fa-solid fa-image" style="font-size:28px;color:' + c + ';opacity:.65"></i><span>' + f + '</span></div><div class="img-ov"><i class="fa-solid fa-magnifying-glass-plus"></i></div>'
        : '<div class="img-ph"><i class="fa-solid fa-file-pdf" style="font-size:28px;color:var(--dn)"></i><span>' + f + '</span></div>';
      return '<div class="img-card" title="' + f + '">' + inner + '</div>';
    }).join('');
    mimgs.innerHTML = '<div class="img-grid">' + imgHtml + '</div><p style="font-size:11.5px;color:var(--mu);margin-top:12px"><i class="fa-solid fa-info-circle" style="color:var(--bm)"></i> ' + t.files.length + ' arquivo(s) anexado(s).</p>';
  } else {
    mimgs.innerHTML = '<div class="no-img"><i class="fa-solid fa-images"></i><p>' + T('no_img') + '</p></div>';
  }

  /* ── HISTORY TAB ── */
  var hCfg = {
    '0':{cls:'hd0', ico:'fa-hourglass-half', lbl:'h_open'},
    '1':{cls:'hd1', ico:'fa-truck-moving', lbl:'h_travel'},
    '2':{cls:'hd2', ico:'fa-location-dot', lbl:'h_onsite'},
    '3':{cls:'hd3', ico:'fa-wrench', lbl:'h_attend'},
    '4':{cls:'hd4', ico:'fa-flag-checkered', lbl:'h_done'},
    'obs':{cls:'hd5', ico:'fa-notes-medical', lbl:'h_obs'}
  };
  var histEntries = [{st:'0', time:t.date, isOpen:true}]
    .concat((t.history || []).filter(function(h){ return h.st!=='0'; }));
  (t.obs || []).forEach(function(o){
    histEntries.push({st:'obs', time:o.time, text:o.text, tech:o.tech});
  });
  histEntries.sort(function(a,b){ return parseDate(a.time) - parseDate(b.time); });

  document.getElementById('m-hist').innerHTML = histEntries.map(function(h){
    var cfg = hCfg[h.st] || hCfg['0'];
    var subTech = h.tech
      ? '<p style="font-size:11px;color:var(--mu)"><i class="fa-solid fa-hard-hat"></i> ' + h.tech + '</p>'
      : ((!h.isOpen && t.tech) ? '<p style="font-size:11.5px;color:var(--mu)">' + t.tech + '</p>' : '');
    return '<div class="hist-entry">' +
           '<div class="h-dot ' + cfg.cls + '"><i class="fa-solid ' + cfg.ico + '"></i></div>' +
           '<div class="h-con"><strong>' + (h.isOpen ? T('h_open') : T(cfg.lbl)) + '</strong>' +
           (h.text ? '<p>' + h.text + '</p>' : '') +
           subTech +
           '<div class="h-time"><i class="fa-regular fa-clock"></i> ' + (h.time||'') + '</div></div></div>';
  }).join('');

  document.getElementById('modal').classList.add('open');
}

/* ============================================================
   AUTO REFRESH
============================================================ */
function updateTimestamp(){
  var el = document.getElementById('upd-time');
  if(el) el.textContent = T('now');
}
function forceRefresh(){
  loadData();
  updateStats();
  renderTable();
  updateTimestamp();
  showToast(T('toast_ok'), 'suc');
}

/* ============================================================
   INIT
============================================================ */
function init(){
  initTheme();
  var lang = localStorage.getItem('bat-mc-lang') || 'pt';
  CL = lang;
  document.getElementById('lang-lbl').textContent = lang.toUpperCase();
  document.querySelectorAll('.lo').forEach(function(el, i){
    el.classList.toggle('active', ['pt','en','es','de','ru'][i] === lang);
  });
  if(localStorage.getItem('bat-op-hc') === '1'){
    document.documentElement.setAttribute('data-hc', '1');
  }
  loadData();
  initUser();
  applyTR();
  updateStats();
  renderTable();
  updateTimestamp();
  // Auto-refresh every 30 seconds
  setInterval(function(){
    loadData();
    updateStats();
    renderTable();
    updateTimestamp();
  }, 30000);
}
document.addEventListener('DOMContentLoaded', init);
/*logout*/
function logout(){
  showToast(T('toast_logout'), 'info');

  setTimeout(function(){
    window.location.href = '/login';
  }, 1500);
}
function openDashboard(){
    window.location.href = '/operador/dashboard';
}

function openNewTicket(){
    window.location.href = '/operador/novo-chamado';
}

function openMyTickets(){
    window.location.href = '/operador/meus-chamados';
}

function openHistory(){
    window.location.href = '/operador/historico';
}

function openProfile(){
    window.location.href = '/operador/perfil';
}

function openSettings(){
    window.location.href = '/operador/configuracoes';
}