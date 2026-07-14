
/* ══════════════════════════════════════════════
   TRADUÇÕES — 6 IDIOMAS
══════════════════════════════════════════════ */
const TR = {
  'pt-BR': {
    admin_panel:'Painel Adm.', page_title:'Chamados Pendentes', page_sub:'BAT Brasil · Suporte Técnico Interno',
    page_desc:'Acompanhe, registre e resolva chamados técnicos internos da BAT Brasil',
    nav_main:'Principal', nav_dashboard:'Dashboard', nav_management:'Gerenciamento',
    nav_machines:'Máquinas', nav_users:'Usuários', nav_tickets:'Chamados',
    nav_account:'Conta', nav_profile:'Meu Perfil', nav_settings:'Configurações',
    user_name:'Admin BAT', user_role:'Administrador',
    btn_new:'Novo Chamado', btn_cancel:'Cancelar', btn_register:'Registrar Chamado',
    btn_confirm:'Confirmar', btn_close:'Fechar',
    stat_open:'Chamados Abertos', stat_open_sub:'Aguardando atendimento',
    stat_urgent:'Chamados Urgentes', stat_urgent_sub:'Prioridade alta — ação imediata',
    stat_progress:'Em Andamento', stat_progress_sub:'Em atendimento pela equipe',
    stat_done:'Resolvidos Hoje', stat_done_sub:'Concluídos nas últimas 24h',
    search_ph:'Buscar por chamado, usuário ou setor...',
    filter_all_prio:'Todas as prioridades', filter_all_status:'Todos os status',
    prio_high:'Alta', prio_medium:'Média', prio_low:'Baixa',
    status_open:'Aberto', status_progress:'Em andamento', status_resolved:'Resolvido',
    col_id:'Nº', col_subject:'Assunto', col_requester:'Solicitante', col_sector:'Setor',
    col_priority:'Prioridade', col_status:'Status', col_date:'Data', col_time:'Tempo', col_actions:'Ações',
    col_category:'Categoria', col_description:'Descrição', col_attach:'Anexo',
    table_title:'Lista de Chamados',
    btn_view:'Ver', btn_assume:'Assumir', btn_finish:'Finalizar', btn_edit:'Editar',
    modal_new:'Novo Chamado', modal_new_sub:'Preencha os dados da solicitação técnica',
    sec_requester:'Dados do Solicitante', sec_problem:'Detalhes do Problema',
    ph_name:'Ex.: João da Silva', ph_subject:'Resumo do problema...', ph_desc:'Descreva detalhadamente...',
    cat_hw:'Hardware', cat_sw:'Software', cat_net:'Rede', cat_print:'Impressora', cat_sys:'Sistema Interno', cat_other:'Outros',
    upload_hint:'Clique para selecionar arquivo', upload_types:'PNG, JPG, PDF — máx. 10MB',
    confirm_finish_title:'Finalizar Chamado', confirm_finish_msg:'Confirma a finalização deste chamado?',
    confirm_assume_title:'Assumir Chamado', confirm_assume_msg:'Deseja assumir a responsabilidade por este chamado?',
    toast_registered:'Chamado registrado com sucesso!', toast_finished:'Chamado finalizado!',
    toast_assumed:'Chamado assumido!', toast_saved:'Chamado atualizado!',
    showing:'Exibindo', of:'de', records:'registros',
    tl_title:'Atividade Recente', tl_sub:'Últimas ações no sistema',
    tip_view:'Visualizar', tip_assume:'Assumir chamado', tip_finish:'Finalizar chamado', tip_edit:'Editar chamado',
    view_lbl_id:'Número', view_lbl_req:'Solicitante', view_lbl_sector:'Setor',
    view_lbl_cat:'Categoria', view_lbl_prio:'Prioridade', view_lbl_status:'Status',
    view_lbl_date:'Data', view_lbl_desc:'Descrição',
    libras_title:'Libras', libras_hint:'Intérprete ativo',
    libras_desc:'Esta é a página de Chamados Pendentes. Registre, acompanhe e resolva chamados técnicos internos.',
    theme_dark:'Escuro', theme_light:'Claro',
  },
  'en': {
    admin_panel:'Admin Panel', page_title:'Pending Tickets', page_sub:'BAT Brasil · Internal Technical Support',
    page_desc:'Track, register and resolve internal technical tickets at BAT Brasil',
    nav_main:'Main', nav_dashboard:'Dashboard', nav_management:'Management',
    nav_machines:'Machines', nav_users:'Users', nav_tickets:'Tickets',
    nav_account:'Account', nav_profile:'My Profile', nav_settings:'Settings',
    user_name:'BAT Admin', user_role:'Administrator',
    btn_new:'New Ticket', btn_cancel:'Cancel', btn_register:'Register Ticket',
    btn_confirm:'Confirm', btn_close:'Close',
    stat_open:'Open Tickets', stat_open_sub:'Awaiting service',
    stat_urgent:'Urgent Tickets', stat_urgent_sub:'High priority — immediate action',
    stat_progress:'In Progress', stat_progress_sub:'Being handled by the team',
    stat_done:'Resolved Today', stat_done_sub:'Completed in the last 24h',
    search_ph:'Search by ticket, user or sector...',
    filter_all_prio:'All priorities', filter_all_status:'All statuses',
    prio_high:'High', prio_medium:'Medium', prio_low:'Low',
    status_open:'Open', status_progress:'In progress', status_resolved:'Resolved',
    col_id:'No.', col_subject:'Subject', col_requester:'Requester', col_sector:'Sector',
    col_priority:'Priority', col_status:'Status', col_date:'Date', col_time:'Time', col_actions:'Actions',
    col_category:'Category', col_description:'Description', col_attach:'Attachment',
    table_title:'Ticket List',
    btn_view:'View', btn_assume:'Assume', btn_finish:'Finish', btn_edit:'Edit',
    modal_new:'New Ticket', modal_new_sub:'Fill in the technical request details',
    sec_requester:'Requester Details', sec_problem:'Problem Details',
    ph_name:'e.g. John Smith', ph_subject:'Problem summary...', ph_desc:'Describe in detail...',
    cat_hw:'Hardware', cat_sw:'Software', cat_net:'Network', cat_print:'Printer', cat_sys:'Internal System', cat_other:'Others',
    upload_hint:'Click to select file', upload_types:'PNG, JPG, PDF — max. 10MB',
    confirm_finish_title:'Close Ticket', confirm_finish_msg:'Confirm closing this ticket?',
    confirm_assume_title:'Assume Ticket', confirm_assume_msg:'Do you want to take responsibility for this ticket?',
    toast_registered:'Ticket registered successfully!', toast_finished:'Ticket closed!',
    toast_assumed:'Ticket assumed!', toast_saved:'Ticket updated!',
    showing:'Showing', of:'of', records:'records',
    tl_title:'Recent Activity', tl_sub:'Latest system actions',
    tip_view:'View', tip_assume:'Assume ticket', tip_finish:'Finish ticket', tip_edit:'Edit ticket',
    view_lbl_id:'Number', view_lbl_req:'Requester', view_lbl_sector:'Sector',
    view_lbl_cat:'Category', view_lbl_prio:'Priority', view_lbl_status:'Status',
    view_lbl_date:'Date', view_lbl_desc:'Description',
    libras_title:'Sign Language', libras_hint:'Interpreter active',
    libras_desc:'This is the Pending Tickets page. Register, track and resolve internal technical tickets.',
    theme_dark:'Dark', theme_light:'Light',
  },
  'es': {
    admin_panel:'Panel Adm.', page_title:'Tickets Pendientes', page_sub:'BAT Brasil · Soporte Técnico Interno',
    page_desc:'Rastree, registre y resuelva tickets técnicos internos de BAT Brasil',
    nav_main:'Principal', nav_dashboard:'Dashboard', nav_management:'Gestión',
    nav_machines:'Máquinas', nav_users:'Usuarios', nav_tickets:'Tickets',
    nav_account:'Cuenta', nav_profile:'Mi Perfil', nav_settings:'Configuración',
    user_name:'Admin BAT', user_role:'Administrador',
    btn_new:'Nuevo Ticket', btn_cancel:'Cancelar', btn_register:'Registrar Ticket',
    btn_confirm:'Confirmar', btn_close:'Cerrar',
    stat_open:'Tickets Abiertos', stat_open_sub:'Esperando atención',
    stat_urgent:'Tickets Urgentes', stat_urgent_sub:'Alta prioridad — acción inmediata',
    stat_progress:'En Progreso', stat_progress_sub:'Siendo atendidos por el equipo',
    stat_done:'Resueltos Hoy', stat_done_sub:'Completados en las últimas 24h',
    search_ph:'Buscar por ticket, usuario o sector...',
    filter_all_prio:'Todas las prioridades', filter_all_status:'Todos los estados',
    prio_high:'Alta', prio_medium:'Media', prio_low:'Baja',
    status_open:'Abierto', status_progress:'En progreso', status_resolved:'Resuelto',
    col_id:'N°', col_subject:'Asunto', col_requester:'Solicitante', col_sector:'Sector',
    col_priority:'Prioridad', col_status:'Estado', col_date:'Fecha', col_time:'Tiempo', col_actions:'Acciones',
    col_category:'Categoría', col_description:'Descripción', col_attach:'Adjunto',
    table_title:'Lista de Tickets',
    btn_view:'Ver', btn_assume:'Asumir', btn_finish:'Finalizar', btn_edit:'Editar',
    modal_new:'Nuevo Ticket', modal_new_sub:'Complete los datos de la solicitud técnica',
    sec_requester:'Datos del Solicitante', sec_problem:'Detalles del Problema',
    ph_name:'Ej.: Juan García', ph_subject:'Resumen del problema...', ph_desc:'Describa en detalle...',
    cat_hw:'Hardware', cat_sw:'Software', cat_net:'Red', cat_print:'Impresora', cat_sys:'Sistema Interno', cat_other:'Otros',
    upload_hint:'Clic para seleccionar archivo', upload_types:'PNG, JPG, PDF — máx. 10MB',
    confirm_finish_title:'Cerrar Ticket', confirm_finish_msg:'¿Confirmar el cierre de este ticket?',
    confirm_assume_title:'Asumir Ticket', confirm_assume_msg:'¿Desea asumir la responsabilidad de este ticket?',
    toast_registered:'¡Ticket registrado con éxito!', toast_finished:'¡Ticket cerrado!',
    toast_assumed:'¡Ticket asumido!', toast_saved:'¡Ticket actualizado!',
    showing:'Mostrando', of:'de', records:'registros',
    tl_title:'Actividad Reciente', tl_sub:'Últimas acciones del sistema',
    tip_view:'Ver', tip_assume:'Asumir ticket', tip_finish:'Finalizar ticket', tip_edit:'Editar ticket',
    view_lbl_id:'Número', view_lbl_req:'Solicitante', view_lbl_sector:'Sector',
    view_lbl_cat:'Categoría', view_lbl_prio:'Prioridad', view_lbl_status:'Estado',
    view_lbl_date:'Fecha', view_lbl_desc:'Descripción',
    libras_title:'Lengua de Señas', libras_hint:'Intérprete activo',
    libras_desc:'Esta es la página de Tickets Pendientes.',
    theme_dark:'Oscuro', theme_light:'Claro',
  },
  'de': {
    admin_panel:'Admin-Panel', page_title:'Offene Tickets', page_sub:'BAT Brasil · Technischer Support',
    page_desc:'Tickets verfolgen, registrieren und lösen bei BAT Brasil',
    nav_main:'Hauptmenü', nav_dashboard:'Dashboard', nav_management:'Verwaltung',
    nav_machines:'Maschinen', nav_users:'Benutzer', nav_tickets:'Tickets',
    nav_account:'Konto', nav_profile:'Mein Profil', nav_settings:'Einstellungen',
    user_name:'BAT Admin', user_role:'Administrator',
    btn_new:'Neues Ticket', btn_cancel:'Abbrechen', btn_register:'Ticket registrieren',
    btn_confirm:'Bestätigen', btn_close:'Schließen',
    stat_open:'Offene Tickets', stat_open_sub:'Warten auf Bearbeitung',
    stat_urgent:'Dringende Tickets', stat_urgent_sub:'Hohe Priorität — sofortige Maßnahmen',
    stat_progress:'In Bearbeitung', stat_progress_sub:'Vom Team bearbeitet',
    stat_done:'Heute gelöst', stat_done_sub:'In den letzten 24h abgeschlossen',
    search_ph:'Nach Ticket, Benutzer oder Bereich suchen...',
    filter_all_prio:'Alle Prioritäten', filter_all_status:'Alle Status',
    prio_high:'Hoch', prio_medium:'Mittel', prio_low:'Niedrig',
    status_open:'Offen', status_progress:'In Bearbeitung', status_resolved:'Gelöst',
    col_id:'Nr.', col_subject:'Betreff', col_requester:'Antragsteller', col_sector:'Bereich',
    col_priority:'Priorität', col_status:'Status', col_date:'Datum', col_time:'Zeit', col_actions:'Aktionen',
    col_category:'Kategorie', col_description:'Beschreibung', col_attach:'Anhang',
    table_title:'Ticket-Liste',
    btn_view:'Anzeigen', btn_assume:'Übernehmen', btn_finish:'Abschließen', btn_edit:'Bearbeiten',
    modal_new:'Neues Ticket', modal_new_sub:'Technische Anfragedaten ausfüllen',
    sec_requester:'Antragsteller-Details', sec_problem:'Problem-Details',
    ph_name:'z.B. Max Mustermann', ph_subject:'Problemzusammenfassung...', ph_desc:'Detailliert beschreiben...',
    cat_hw:'Hardware', cat_sw:'Software', cat_net:'Netzwerk', cat_print:'Drucker', cat_sys:'Internes System', cat_other:'Sonstiges',
    upload_hint:'Datei auswählen', upload_types:'PNG, JPG, PDF — max. 10MB',
    confirm_finish_title:'Ticket schließen', confirm_finish_msg:'Dieses Ticket abschließen?',
    confirm_assume_title:'Ticket übernehmen', confirm_assume_msg:'Verantwortung für dieses Ticket übernehmen?',
    toast_registered:'Ticket erfolgreich registriert!', toast_finished:'Ticket geschlossen!',
    toast_assumed:'Ticket übernommen!', toast_saved:'Ticket aktualisiert!',
    showing:'Zeige', of:'von', records:'Einträgen',
    tl_title:'Letzte Aktivität', tl_sub:'Letzte Systemaktionen',
    tip_view:'Anzeigen', tip_assume:'Ticket übernehmen', tip_finish:'Ticket abschließen', tip_edit:'Ticket bearbeiten',
    view_lbl_id:'Nummer', view_lbl_req:'Antragsteller', view_lbl_sector:'Bereich',
    view_lbl_cat:'Kategorie', view_lbl_prio:'Priorität', view_lbl_status:'Status',
    view_lbl_date:'Datum', view_lbl_desc:'Beschreibung',
    libras_title:'Gebärdensprache', libras_hint:'Dolmetscher aktiv',
    libras_desc:'Dies ist die Seite für offene Tickets.',
    theme_dark:'Dunkel', theme_light:'Hell',
  },
  'ru': {
    admin_panel:'Адм. панель', page_title:'Открытые заявки', page_sub:'BAT Brasil · Техническая поддержка',
    page_desc:'Отслеживайте, регистрируйте и решайте заявки на техподдержку BAT Brasil',
    nav_main:'Главное', nav_dashboard:'Панель', nav_management:'Управление',
    nav_machines:'Машины', nav_users:'Пользователи', nav_tickets:'Заявки',
    nav_account:'Аккаунт', nav_profile:'Мой профиль', nav_settings:'Настройки',
    user_name:'Администратор', user_role:'Администратор',
    btn_new:'Новая заявка', btn_cancel:'Отмена', btn_register:'Зарегистрировать',
    btn_confirm:'Подтвердить', btn_close:'Закрыть',
    stat_open:'Открытые заявки', stat_open_sub:'Ожидают обработки',
    stat_urgent:'Срочные заявки', stat_urgent_sub:'Высокий приоритет — немедленное действие',
    stat_progress:'В работе', stat_progress_sub:'Обрабатываются командой',
    stat_done:'Решено сегодня', stat_done_sub:'Завершено за последние 24ч',
    search_ph:'Поиск по заявке, пользователю или отделу...',
    filter_all_prio:'Все приоритеты', filter_all_status:'Все статусы',
    prio_high:'Высокий', prio_medium:'Средний', prio_low:'Низкий',
    status_open:'Открыта', status_progress:'В работе', status_resolved:'Решена',
    col_id:'№', col_subject:'Тема', col_requester:'Заявитель', col_sector:'Отдел',
    col_priority:'Приоритет', col_status:'Статус', col_date:'Дата', col_time:'Время', col_actions:'Действия',
    col_category:'Категория', col_description:'Описание', col_attach:'Вложение',
    table_title:'Список заявок',
    btn_view:'Просмотр', btn_assume:'Взять', btn_finish:'Закрыть', btn_edit:'Изменить',
    modal_new:'Новая заявка', modal_new_sub:'Заполните данные технической заявки',
    sec_requester:'Данные заявителя', sec_problem:'Детали проблемы',
    ph_name:'Напр.: Иван Иванов', ph_subject:'Краткое описание...', ph_desc:'Опишите подробно...',
    cat_hw:'Оборудование', cat_sw:'Программное обеспечение', cat_net:'Сеть', cat_print:'Принтер', cat_sys:'Внутренняя система', cat_other:'Прочее',
    upload_hint:'Нажмите для выбора файла', upload_types:'PNG, JPG, PDF — макс. 10MB',
    confirm_finish_title:'Закрыть заявку', confirm_finish_msg:'Подтвердить закрытие этой заявки?',
    confirm_assume_title:'Взять заявку', confirm_assume_msg:'Взять ответственность за эту заявку?',
    toast_registered:'Заявка успешно зарегистрирована!', toast_finished:'Заявка закрыта!',
    toast_assumed:'Заявка принята!', toast_saved:'Заявка обновлена!',
    showing:'Показано', of:'из', records:'записей',
    tl_title:'Последняя активность', tl_sub:'Последние действия в системе',
    tip_view:'Просмотр', tip_assume:'Взять заявку', tip_finish:'Закрыть заявку', tip_edit:'Изменить заявку',
    view_lbl_id:'Номер', view_lbl_req:'Заявитель', view_lbl_sector:'Отдел',
    view_lbl_cat:'Категория', view_lbl_prio:'Приоритет', view_lbl_status:'Статус',
    view_lbl_date:'Дата', view_lbl_desc:'Описание',
    libras_title:'Язык жестов', libras_hint:'Переводчик активен',
    libras_desc:'Это страница открытых заявок.',
    theme_dark:'Тёмная', theme_light:'Светлая',
  },
  'zh': {
    admin_panel:'管理面板', page_title:'待处理工单', page_sub:'BAT Brasil · 内部技术支持',
    page_desc:'跟踪、登记和解决BAT巴西内部技术工单',
    nav_main:'主菜单', nav_dashboard:'仪表板', nav_management:'管理',
    nav_machines:'机器', nav_users:'用户', nav_tickets:'工单',
    nav_account:'账户', nav_profile:'我的资料', nav_settings:'设置',
    user_name:'BAT管理员', user_role:'管理员',
    btn_new:'新建工单', btn_cancel:'取消', btn_register:'提交工单',
    btn_confirm:'确认', btn_close:'关闭',
    stat_open:'开放工单', stat_open_sub:'等待处理',
    stat_urgent:'紧急工单', stat_urgent_sub:'高优先级 — 立即行动',
    stat_progress:'处理中', stat_progress_sub:'团队正在处理',
    stat_done:'今日已解决', stat_done_sub:'过去24小时内完成',
    search_ph:'按工单、用户或部门搜索...',
    filter_all_prio:'所有优先级', filter_all_status:'所有状态',
    prio_high:'高', prio_medium:'中', prio_low:'低',
    status_open:'开放', status_progress:'处理中', status_resolved:'已解决',
    col_id:'编号', col_subject:'主题', col_requester:'申请人', col_sector:'部门',
    col_priority:'优先级', col_status:'状态', col_date:'日期', col_time:'时间', col_actions:'操作',
    col_category:'类别', col_description:'描述', col_attach:'附件',
    table_title:'工单列表',
    btn_view:'查看', btn_assume:'接单', btn_finish:'完成', btn_edit:'编辑',
    modal_new:'新建工单', modal_new_sub:'填写技术申请详情',
    sec_requester:'申请人信息', sec_problem:'问题详情',
    ph_name:'例如：李明', ph_subject:'问题摘要...', ph_desc:'详细描述...',
    cat_hw:'硬件', cat_sw:'软件', cat_net:'网络', cat_print:'打印机', cat_sys:'内部系统', cat_other:'其他',
    upload_hint:'点击选择文件', upload_types:'PNG、JPG、PDF — 最大10MB',
    confirm_finish_title:'完成工单', confirm_finish_msg:'确认完成此工单？',
    confirm_assume_title:'接受工单', confirm_assume_msg:'您要负责此工单吗？',
    toast_registered:'工单注册成功！', toast_finished:'工单已完成！',
    toast_assumed:'工单已接受！', toast_saved:'工单已更新！',
    showing:'显示', of:'共', records:'条',
    tl_title:'最近活动', tl_sub:'最新系统操作',
    tip_view:'查看', tip_assume:'接受工单', tip_finish:'完成工单', tip_edit:'编辑工单',
    view_lbl_id:'编号', view_lbl_req:'申请人', view_lbl_sector:'部门',
    view_lbl_cat:'类别', view_lbl_prio:'优先级', view_lbl_status:'状态',
    view_lbl_date:'日期', view_lbl_desc:'描述',
    libras_title:'手语无障碍', libras_hint:'翻译员已激活',
    libras_desc:'这是待处理工单页面。',
    theme_dark:'深色', theme_light:'浅色',
  }
};

/* ══════════════════════════════════════════════
   DADOS FICTÍCIOS
══════════════════════════════════════════════ */
const AV_COLORS = ['#005691','#002B5B','#2D9E6B','#6B46C1','#E8A020','#0072BC','#C0392B','#1ABC9C'];
function initials(n){ const p=n.trim().split(' '); return p.length>=2?(p[0][0]+p[p.length-1][0]).toUpperCase():p[0][0].toUpperCase(); }
function avColor(n){ let h=0; for(let c of n) h=(h<<5)-h+c.charCodeAt(0); return AV_COLORS[Math.abs(h)%AV_COLORS.length]; }

let tickets = [];

let timeline = [
  {type:'finish', text:'Chamado <strong>#4814</strong> finalizado com sucesso', time:'Ontem, 15:45'},
  {type:'new',    text:'Novo chamado <strong>#4813</strong> aberto — prioridade alta', time:'Ontem, 14:20'},
  {type:'assume', text:'<strong>Admin</strong> assumiu o chamado <strong>#4811</strong>', time:'Ontem, 11:05'},
  {type:'open',   text:'Chamado <strong>#4808</strong> reaberto por <strong>Camila Melo</strong>', time:'19/05, 16:30'},
];

const LANG_CODES = {'pt-BR':'PT','en':'EN','es':'ES','de':'DE','ru':'RU','zh':'中文'};
let currentLang = 'pt-BR';
let currentPage = 1;
const PER_PAGE  = 6;
let actionIdx = -1;

/* ══ THEME ══ */
function initTheme(){ updateThemeUI(document.documentElement.getAttribute('data-theme')||'light'); }
function toggleTheme(){ updateThemeUI(BATSettings.toggleTheme()); }
function updateThemeUI(t){ const i=document.getElementById('theme-icon'); const l=document.getElementById('theme-label'); if(i) i.className=t==='dark'?'fa-solid fa-sun':'fa-solid fa-moon'; if(l) l.textContent=t==='dark'?(TR[currentLang].theme_light||'Claro'):(TR[currentLang].theme_dark||'Escuro'); }

/* ══ LANG ══ */
function initLang(){ const s=localStorage.getItem('bat-lang')||'pt-BR'; currentLang=s; document.getElementById('lang-label').textContent=LANG_CODES[s]||'PT'; applyTranslations(); }
function setLang(code){ currentLang=code; localStorage.setItem('bat-lang',code); document.getElementById('lang-label').textContent=LANG_CODES[code]||code; document.querySelectorAll('.lang-opt').forEach((el,i)=>{ const c=['pt-BR','en','es','de','ru','zh']; el.classList.toggle('active',c[i]===code); }); closeLangMenu(); applyTranslations(); renderAll(); updateThemeUI(document.documentElement.getAttribute('data-theme')); }
function applyTranslations(){ const d=TR[currentLang]||TR['pt-BR']; document.querySelectorAll('[data-i18n]').forEach(el=>{ const k=el.getAttribute('data-i18n'); if(d[k]!==undefined) el.textContent=d[k]; }); document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ const k=el.getAttribute('data-i18n-ph'); if(d[k]) el.placeholder=d[k]; }); }
function toggleLangMenu(){ document.getElementById('lang-menu').classList.toggle('open'); }
function closeLangMenu(){ document.getElementById('lang-menu').classList.remove('open'); }
document.addEventListener('click', e=>{ if(!e.target.closest('.lang-wrap')) closeLangMenu(); });

/* ══ SIDEBAR ══ */
function toggleSidebar(){ const o=document.getElementById('sidebar').classList.toggle('open'); document.getElementById('overlay').classList.toggle('active',o); }
function closeSidebar(){ document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlay').classList.remove('active'); }

/* ══ LIBRAS ══ */
function toggleLibras(){ document.getElementById('libras-panel').classList.toggle('open'); }

/* ══ MODAL ══ */
function closeModal(id){ document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-bg').forEach(bg=>{ bg.addEventListener('click',e=>{ if(e.target===bg) bg.classList.remove('open'); }); });

/* ══ STATS ══ */
function updateStats(){
  const d=TR[currentLang]||TR['pt-BR'];
  const open  = tickets.filter(t=>t.status==='aberto').length;
  const prog  = tickets.filter(t=>t.status==='andamento').length;
  const done  = tickets.filter(t=>t.status==='resolvido').length;
  const urg   = tickets.filter(t=>t.priority==='alta' && t.status!=='resolvido').length;
  animVal('cnt-open', open); animVal('cnt-urgent', urg);
  animVal('cnt-progress', prog); animVal('cnt-done', done);
  document.getElementById('sb-count').textContent = open+prog;
}
function animVal(id,target){ const el=document.getElementById(id); if(!el) return; const from=parseInt(el.textContent)||0; const dur=700; const start=performance.now(); function step(now){ const p=Math.min((now-start)/dur,1); const e=1-Math.pow(1-p,3); el.textContent=Math.round(from+(target-from)*e); if(p<1)requestAnimationFrame(step); } requestAnimationFrame(step); }

/* ══ BADGES ══ */
function prioBadge(p){
  const d=TR[currentLang]||TR['pt-BR'];
  const map={alta:{cls:'alta',label:d.prio_high},media:{cls:'media',label:d.prio_medium},baixa:{cls:'baixa',label:d.prio_low}};
  const s=map[p]||{cls:p,label:p};
  return `<span class="prio-badge ${s.cls}"><span class="prio-dot"></span>${s.label}</span>`;
}
function statusBadge(st){
  const d=TR[currentLang]||TR['pt-BR'];
  const map={aberto:{cls:'aberto',label:d.status_open,icon:'fa-clock'},andamento:{cls:'andamento',label:d.status_progress,icon:'fa-rotate'},resolvido:{cls:'resolvido',label:d.status_resolved,icon:'fa-check'}};
  const s=map[st]||{cls:st,label:st,icon:'fa-circle'};
  return `<span class="status-badge ${s.cls}"><i class="fa-solid ${s.icon}"></i>${s.label}</span>`;
}

function parseTicketDate(t){
  if(!t || !t.date) return new Date();
  const parts = t.date.split(' ');
  const dateParts = parts[0].split('/');
  const year = +dateParts[2] || new Date().getFullYear();
  const month = (+dateParts[1] || 1) - 1;
  const day = +dateParts[0] || 1;
  if(parts[1]){
    const timeParts = parts[1].split(':');
    const hour = +timeParts[0] || 0;
    const minute = +timeParts[1] || 0;
    const second = +timeParts[2] || 0;
    return new Date(year, month, day, hour, minute, second);
  }
  return new Date(year, month, day, 0, 0, 0);
}
function formatElapsed(start, end){
  const diff = Math.max(0, Math.floor((end - start) / 1000));
  const h = String(Math.floor(diff / 3600)).padStart(2,'0');
  const m = String(Math.floor((diff % 3600) / 60)).padStart(2,'0');
  const s = String(diff % 60).padStart(2,'0');
  return `${h}:${m}:${s}`;
}
function getTicketTimer(t){
  if(!t) return {text:'--:--', running:false};
  if(!t._timerStart){
    t._timerStart = parseTicketDate(t);
  }
  if(t.status === 'resolvido'){
    if(!t._finalTimer){
      t._finalTimer = formatElapsed(t._timerStart, t._resolvedAt || new Date());
    }
    return {text:t._finalTimer, running:false};
  }
  return {text:formatElapsed(t._timerStart, new Date()), running:true};
}

/* ══ FILTER ══ */
function getFiltered(){
  const q  = document.getElementById('search-input').value.toLowerCase();
  const fp = document.getElementById('filter-prio').value;
  const fs = document.getElementById('filter-status').value;
  return tickets.filter(t=>{
    const mq = !q || t.id.toLowerCase().includes(q) || t.subject.toLowerCase().includes(q) || t.requester.toLowerCase().includes(q) || t.sector.toLowerCase().includes(q);
    const mp = !fp || t.priority===fp;
    const ms = !fs || t.status===fs;
    return mq && mp && ms;
  });
}

/* ══ TABLE ══ */
function renderTable(){
  const d  = TR[currentLang]||TR['pt-BR'];
  const fi = getFiltered();
  const tot= fi.length;
  const totalPages = Math.max(1,Math.ceil(tot/PER_PAGE));
  if(currentPage>totalPages) currentPage=1;
  const start=(currentPage-1)*PER_PAGE;
  const page=fi.slice(start,start+PER_PAGE);
  const tbody=document.getElementById('table-body');
  tbody.innerHTML = page.map(t=>{
    const ri=tickets.indexOf(t);
    const ini=initials(t.requester); const col=avColor(t.requester);
    const canFinish = t.status!=='resolvido';
    return `<tr>
      <td class="td-id">${t.id}</td>
      <td><div class="td-subject" title="${t.subject}">${t.subject}</div></td>
      <td><div class="td-user"><div class="td-av" style="background:${col}">${ini}</div><span>${t.requester}</span></div></td>
      <td style="font-size:12px">${t.sector}</td>
      <td>${prioBadge(t.priority)}</td>
      <td>${statusBadge(t.status)}</td>
      <td style="font-size:12px;color:var(--text-muted)">${t.date}</td>
      <td>${getTicketTimer(t).text}</td>
      <td>
        <div class="act-btns">
          <button class="act-btn view"   onclick="viewTicket(${ri})"   title="${d.tip_view}"><i class="fa-solid fa-eye"></i> ${d.btn_view}</button>
          <button class="act-btn assume" onclick="assumeTicket(${ri})" title="${d.tip_assume}" ${t.status==='resolvido'?'disabled style="opacity:.4;cursor:not-allowed"':''}><i class="fa-solid fa-hand-pointer"></i> ${d.btn_assume}</button>
          <button class="act-btn finish" onclick="finishTicket(${ri})" title="${d.tip_finish}" ${!canFinish?'disabled style="opacity:.4;cursor:not-allowed"':''}><i class="fa-solid fa-check"></i> ${d.btn_finish}</button>
          <button class="act-btn edit"   onclick="editTicket(${ri})"   title="${d.tip_edit}"><i class="fa-solid fa-pen"></i> ${d.btn_edit}</button>
        </div>
      </td>
    </tr>`;
  }).join('');
  const info=`${d.showing} <strong>${Math.min(start+1,tot)}-${Math.min(start+PER_PAGE,tot)}</strong> ${d.of} <strong>${tot}</strong> ${d.records}`;
  document.getElementById('pag-info').innerHTML = info;
  document.getElementById('tbl-info').innerHTML = `${tot} ${d.records}`;
  renderPagination(totalPages);
}
function renderPagination(total){
  const pb=document.getElementById('pag-btns');
  let h=`<button class="pag-btn" onclick="goPage(${currentPage-1})" ${currentPage<=1?'disabled':''}><i class="fa-solid fa-chevron-left"></i></button>`;
  for(let i=1;i<=total;i++){ if(i===1||i===total||Math.abs(i-currentPage)<=1){ h+=`<button class="pag-btn ${i===currentPage?'active':''}" onclick="goPage(${i})">${i}</button>`; } else if(Math.abs(i-currentPage)===2){ h+=`<button class="pag-btn" disabled>…</button>`; } }
  h+=`<button class="pag-btn" onclick="goPage(${currentPage+1})" ${currentPage>=total?'disabled':''}><i class="fa-solid fa-chevron-right"></i></button>`;
  pb.innerHTML=h;
}
function goPage(p){ const f=getFiltered(); const t=Math.max(1,Math.ceil(f.length/PER_PAGE)); if(p<1||p>t)return; currentPage=p; renderTable(); }

/* ══ TIMELINE ══ */
function renderTimeline(){
  const iconMap = {open:'fa-folder-open',assume:'fa-hand-pointer',finish:'fa-check',edit:'fa-pen',new:'fa-plus'};
  document.getElementById('tl-body').innerHTML = timeline.map(item=>`
    <div class="tl-item">
      <div class="tl-icon ${item.type}"><i class="fa-solid ${iconMap[item.type]||'fa-circle'}"></i></div>
      <div class="tl-txt">
        <strong></strong>
        <span>${item.text}</span>
        <span class="tl-time"><i class="fa-regular fa-clock" style="font-size:10px"></i> ${item.time}</span>
      </div>
    </div>`).join('');
}

function startLiveClock(){
  const el=document.getElementById('live-clock');
  if(!el) return;
  const tick=()=>{ const now=new Date(); el.textContent=now.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit'}); };
  tick(); setInterval(tick,1000);
}

function renderKanban(){
  const board=document.getElementById('kanban-board');
  if(!board) return;
  const groups=[
    {key:'aberto',title:'Abertos',icon:'fa-folder-open'},
    {key:'andamento',title:'Em andamento',icon:'fa-spinner'},
    {key:'resolvido',title:'Resolvidos',icon:'fa-check-circle'}
  ];
  board.innerHTML=groups.map(group=>{
    const items=tickets.filter(t=>t.status===group.key).slice(0,4);
    return `<div class="kanban-col">
      <h4><i class="fa-solid ${group.icon}" style="margin-right:6px"></i>${group.title}<span class="count"> · ${items.length}</span></h4>
      ${items.length?items.map(item=>`<div class="kanban-card"><strong>${item.subject}</strong><span>${item.requester} · ${item.sector}</span><div class="meta">${item.priority.toUpperCase()}</div></div>`).join(''):'<div class="kanban-card"><strong>Nenhum chamado</strong><span>Não há itens nessa etapa.</span></div>'}
    </div>`;
  }).join('');
}

/* ══ NOVO CHAMADO ══ */
function openNewModal(){
  const now=new Date(); const d=`${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()}`;
  document.getElementById('f-date').value=d;
  document.getElementById('f-name').value='';
  document.getElementById('f-subject').value='';
  document.getElementById('f-desc').value='';
  document.getElementById('upload-name').style.display='none';
  document.getElementById('modal-new').classList.add('open');
}
function registerTicket(){
  const d=TR[currentLang]||TR['pt-BR'];
  const name    = document.getElementById('f-name').value.trim();
  const subject = document.getElementById('f-subject').value.trim();
  const desc    = document.getElementById('f-desc').value.trim();
  let valid=true;
  ['f-name','f-subject','f-desc'].forEach(id=>{ document.getElementById(id).classList.remove('err'); });
  if(!name)    { document.getElementById('f-name').classList.add('err');    valid=false; }
  if(!subject) { document.getElementById('f-subject').classList.add('err'); valid=false; }
  if(!desc)    { document.getElementById('f-desc').classList.add('err');    valid=false; }
  if(!valid) return;
  const newId = '#' + (parseInt(tickets[0].id.replace('#',''))+1);
  const now=new Date(); const dateStr=`${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()}`;
  const t = {
    id:newId, subject, requester:name,
    sector: document.getElementById('f-sector').value,
    category: document.getElementById('f-category').value,
    desc, priority: document.getElementById('f-priority').value,
    status:'aberto', date:dateStr
  };
  tickets.unshift(t);
  timeline.unshift({type:'new', text:`Novo chamado <strong>${newId}</strong> aberto por <strong>${name}</strong>`, time:'Agora'});
  closeModal('modal-new'); renderAll();
  showToast(d.toast_registered,'suc');
}

/* ══ VISUALIZAR ══ */
function viewTicket(idx){
  const t=tickets[idx]; const d=TR[currentLang]||TR['pt-BR'];
  document.getElementById('view-id').textContent = t.id;
  document.getElementById('view-body').innerHTML = `
    <div class="view-row"><span class="view-lbl">${d.view_lbl_id}</span><span class="view-val">${t.id}</span></div>
    <div class="view-row"><span class="view-lbl">${d.view_lbl_req}</span><span class="view-val">${t.requester}</span></div>
    <div class="view-row"><span class="view-lbl">${d.view_lbl_sector}</span><span class="view-val">${t.sector}</span></div>
    <div class="view-row"><span class="view-lbl">${d.view_lbl_cat}</span><span class="view-val">${t.category}</span></div>
    <div class="view-row"><span class="view-lbl">${d.view_lbl_prio}</span><span class="view-val">${prioBadge(t.priority)}</span></div>
    <div class="view-row"><span class="view-lbl">${d.view_lbl_status}</span><span class="view-val">${statusBadge(t.status)}</span></div>
    <div class="view-row"><span class="view-lbl">${d.view_lbl_date}</span><span class="view-val">${t.date}</span></div>
    <div class="view-row" style="flex-direction:column;gap:8px"><span class="view-lbl">${d.view_lbl_desc}</span><div class="view-desc">${t.desc}</div></div>`;
  document.getElementById('modal-view').classList.add('open');
}

/* ══ ASSUMIR ══ */
function assumeTicket(idx){
  if(tickets[idx].status==='resolvido') return;
  actionIdx=idx;
  const d=TR[currentLang]||TR['pt-BR'];
  const ci=document.getElementById('confirm-ico'); ci.className='confirm-ico assume';
  document.getElementById('confirm-icon-i').className='fa-solid fa-hand-pointer';
  document.getElementById('confirm-title').textContent=d.confirm_assume_title;
  document.getElementById('confirm-msg').textContent=d.confirm_assume_msg;
  const btn=document.getElementById('btn-confirm-action'); btn.className='btn-cd gld'; btn.textContent=d.btn_confirm;
  btn.onclick=()=>{ 
    if(!tickets[actionIdx]._timerStart) tickets[actionIdx]._timerStart = parseTicketDate(tickets[actionIdx]);
    tickets[actionIdx].status='andamento'; 
    timeline.unshift({type:'assume',text:`<strong>Admin</strong> assumiu o chamado <strong>${tickets[actionIdx].id}</strong>`,time:'Agora'}); 
    closeModal('modal-confirm'); renderAll(); showToast(d.toast_assumed,'info'); };
  document.getElementById('modal-confirm').classList.add('open');
}

/* ══ FINALIZAR ══ */
function finishTicket(idx){
  if(tickets[idx].status==='resolvido') return;
  actionIdx=idx;
  const d=TR[currentLang]||TR['pt-BR'];
  const ci=document.getElementById('confirm-ico'); ci.className='confirm-ico finish';
  document.getElementById('confirm-icon-i').className='fa-solid fa-check-circle';
  document.getElementById('confirm-title').textContent=d.confirm_finish_title;
  document.getElementById('confirm-msg').textContent=d.confirm_finish_msg;
  const btn=document.getElementById('btn-confirm-action'); btn.className='btn-cd ok'; btn.textContent=d.btn_confirm;
  btn.onclick=()=>{ 
    if(!tickets[actionIdx]._timerStart) tickets[actionIdx]._timerStart = parseTicketDate(tickets[actionIdx]);
    tickets[actionIdx].status='resolvido';
    tickets[actionIdx]._resolvedAt = new Date();
    tickets[actionIdx]._finalTimer = formatElapsed(tickets[actionIdx]._timerStart, tickets[actionIdx]._resolvedAt);
    timeline.unshift({type:'finish',text:`Chamado <strong>${tickets[actionIdx].id}</strong> finalizado por <strong>Admin</strong>`,time:'Agora'}); closeModal('modal-confirm'); renderAll(); showToast(d.toast_finished,'suc'); };
  document.getElementById('modal-confirm').classList.add('open');
}

/* ══ EDITAR ══ */
function editTicket(idx){
  const t=tickets[idx];
  document.getElementById('f-name').value    = t.requester;
  document.getElementById('f-subject').value = t.subject;
  document.getElementById('f-desc').value    = t.desc;
  document.getElementById('f-sector').value  = t.sector;
  document.getElementById('f-priority').value= t.priority;
  document.getElementById('f-date').value    = t.date;
  document.getElementById('upload-name').style.display='none';
  const d=TR[currentLang]||TR['pt-BR'];
  document.getElementById('form-title').textContent=d.tip_edit+' '+t.id;
  document.querySelector('.btn-save span').textContent=d.btn_save||'Salvar';
  document.querySelector('.btn-save').onclick=()=>{
    tickets[idx].requester = document.getElementById('f-name').value.trim()||t.requester;
    tickets[idx].subject   = document.getElementById('f-subject').value.trim()||t.subject;
    tickets[idx].desc      = document.getElementById('f-desc').value.trim()||t.desc;
    tickets[idx].priority  = document.getElementById('f-priority').value;
    timeline.unshift({type:'edit',text:`Chamado <strong>${t.id}</strong> atualizado`,time:'Agora'});
    closeModal('modal-new'); renderAll(); showToast(d.toast_saved,'info');
    document.querySelector('.btn-save').onclick=registerTicket;
    document.querySelector('.btn-save span').textContent=d.btn_register;
    document.getElementById('form-title').textContent=d.modal_new;
  };
  document.getElementById('modal-new').classList.add('open');
}

/* ══ FAKE UPLOAD ══ */
const fakeFiles=['relatorio_falha.pdf','screenshot_erro.png','log_sistema.txt','evidencia_camera.jpg'];
function fakeUpload(){
  const f=fakeFiles[Math.floor(Math.random()*fakeFiles.length)];
  document.getElementById('upload-fname').textContent=f;
  document.getElementById('upload-name').style.display='block';
}

/* ══ TOAST ══ */
function showToast(msg,type='suc'){
  const t=document.getElementById('toast');
  const i=document.getElementById('toast-ico');
  const icMap={suc:'fa-check-circle',err:'fa-times-circle',info:'fa-info-circle',warn:'fa-exclamation-circle'};
  document.getElementById('toast-msg').textContent=msg;
  t.className=`toast show ${type}`;
  i.className=`fa-solid ${icMap[type]||'fa-check-circle'}`;
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),3200);
}

/* ══ LOAD CHAMADOS FROM BACKEND ══ */
function loadChamados(){
  return fetch('/api/chamados?page=0&size=100').then(r=>r.json()).then(data=>{
    const items = data.content || data || [];
    tickets = items.map(c=>({ 
      id:'#'+c.id, 
      subject:c.subject||c.descricao, 
      requester:c.requesterName||'Desconhecido',
      sector:c.sector||'—',
      priority:(c.priority||'baixa').toLowerCase(),
      status:c.status||'aberto',
      date: new Date(c.createdAt||new Date()).toLocaleDateString('pt-BR'),
      notes:c.notes||''
    }));
    updateStats();
  }).catch(e=>{ console.warn('Erro ao carregar chamados:', e); });
}

/* ══ RENDER ALL ══ */
function renderAll(){ updateStats(); renderTable(); renderTimeline(); renderKanban(); }

/* ══ INIT ══ */
initTheme(); initLang();
loadChamados().then(()=>renderAll());
setInterval(function(){ renderTable(); }, 1000);