
/* ══════════════════════════════════════════
   TRADUÇÕES — 6 IDIOMAS
══════════════════════════════════════════ */
const TR = {
  'pt-BR':{
    admin_panel:'Painel Adm.',page_title:'Configurações',page_sub:'BAT Brasil · Preferências do Sistema',
    nav_main:'Principal',nav_dashboard:'Dashboard',nav_management:'Gerenciamento',
    nav_machines:'Máquinas',nav_users:'Usuários',nav_tickets:'Chamados',
    nav_account:'Conta',nav_profile:'Meu Perfil',nav_settings:'Configurações',
    user_name:'Admin BAT',user_role:'Administrador',
    cfg_categories:'Categorias',btn_save_all:'Salvar Alterações',search_ph:'Buscar configuração...',
    sec_general:'Geral',sec_general_sub:'Configurações básicas do sistema',
    sec_appearance:'Aparência',sec_appearance_sub:'Personalize a interface do sistema',
    sec_security:'Segurança',sec_security_sub:'Gerencie a segurança da sua conta',
    sec_notif:'Notificações',sec_notif_sub:'Configure seus alertas e preferências',
    sec_system:'Sistema',sec_system_sub:'Informações técnicas e monitoramento',
    sec_backup:'Backup',sec_backup_sub:'Gerencie backups e restaurações do sistema',
    sec_account:'Conta',sec_account_sub:'Gerencie suas informações pessoais',
    sec_a11y:'Acessibilidade',sec_a11y_sub:'Adapte a interface às suas necessidades',
    lbl_company:'Nome da Empresa',lbl_sysname:'Nome do Sistema',lbl_adm_email:'E-mail Administrativo',
    lbl_support_phone:'Telefone de Suporte',lbl_sys_lang:'Idioma do Sistema',lbl_timezone:'Fuso Horário',
    lbl_date_fmt:'Formato de Data',lbl_currency:'Moeda',
    theme_label:'Tema do Sistema',theme_light:'Claro',theme_light_d:'Fundo branco padrão',
    theme_dark_card:'Escuro',theme_dark_d:'Modo noturno',theme_auto:'Automático',theme_auto_d:'Segue o sistema',
    accent_color:'Cor de Destaque',font_size:'Tamanho da Fonte',font_small:'Pequena',font_large:'Grande',
    compact_menu:'Compactar Menu Lateral',compact_menu_d:'Reduz o tamanho da sidebar para mais espaço',
    animations:'Ativar Animações',animations_d:'Transições e efeitos visuais suaves',
    glass_fx:'Efeito Glassmorphism',glass_fx_d:'Transparência suave nos cards e painéis',
    sec_score_title:'Segurança da Conta: Boa',sec_score_sub:'Ative a autenticação em duas etapas para aumentar a proteção.',
    change_pass:'Alterar Senha',lbl_curr_pass:'Senha Atual',lbl_new_pass:'Nova Senha',lbl_conf_pass:'Confirmar Nova Senha',
    ph_min8:'Mín. 8 caracteres',ph_repeat:'Repita a nova senha',
    '2fa':'Autenticação em Duas Etapas','2fa_d':'Adiciona uma camada extra de proteção ao login',
    sess_timeout:'Tempo de Sessão Automática',sess_timeout_d:'Desconectar após 30 minutos de inatividade',
    login_hist:'Histórico de Login',login_hist_d:'Registrar todos os acessos no sistema',
    devices:'Dispositivos Conectados',curr_sess:'Sessão atual',btn_revoke:'Revogar',
    notif_sys:'Notificações do Sistema',notif_sys_d:'Alertas gerais de status e atualizações',
    notif_email:'Alertas por E-mail',notif_email_d:'Receba notificações no e-mail corporativo',
    notif_sound:'Sons de Notificação',notif_sound_d:'Reproduzir áudio ao receber alertas',
    notif_urgent:'Chamados Urgentes',notif_urgent_d:'Notificar imediatamente chamados de alta prioridade',
    notif_daily:'Resumo Diário',notif_daily_d:'Receber relatório automático às 08:00',
    notif_maint:'Alertas de Manutenção',notif_maint_d:'Notificar quando máquinas precisam de manutenção',
    notif_new_user:'Novos Usuários',notif_new_user_d:'Alertar quando um novo usuário for cadastrado',
    sys_version:'Versão',sys_latest:'Versão mais recente',sys_status:'Status',status_operational:'Operacional',
    sys_uptime:'Uptime: 99,8%',sys_last_update:'Última Atualização',sys_by_admin:'por Administrador',
    sys_env:'Ambiente',sys_brazil:'Brasil — São Paulo',sys_cpu:'CPU',sys_ram:'Memória RAM',
    sys_storage:'Armazenamento',sys_net:'Rede',
    btn_do_backup:'Realizar Backup',btn_restore:'Restaurar Sistema',btn_download:'Baixar Último Backup',
    backup_history:'Histórico de Backups',backup_full:'Backup Completo',backup_diff:'Backup Diferencial',backup_manual:'Backup Manual',
    lbl_name:'Nome Completo',lbl_email:'E-mail',lbl_phone:'Telefone',lbl_role:'Cargo',lbl_dept:'Departamento',
    joined_since:'Membro desde',btn_change_photo:'Alterar Foto',
    a11y_contrast:'Alto Contraste',a11y_contrast_d:'Aumenta o contraste para melhor visibilidade',
    a11y_font:'Aumentar Fonte',a11y_font_d:'Textos maiores para facilitar leitura',
    a11y_reader:'Leitor de Tela',a11y_reader_d:'Compatível com NVDA e VoiceOver',
    a11y_nav:'Navegação Simplificada',a11y_nav_d:'Interface mais simples e direta',
    a11y_reduce_anim:'Redução de Animações',a11y_reduce_anim_d:'Minimiza efeitos visuais em movimento',
    a11y_libras:'Libras (Língua de Sinais)',a11y_libras_d:'Widget de acessibilidade em Libras ativo',
    kbd_nav:'Atalhos de Teclado',kbd_nav_d:'Pressione Tab para navegar entre elementos e Enter para confirmar.',
    libras_title:'Libras',libras_hint:'Intérprete ativo',
    libras_desc:'Esta é a página de Configurações do sistema BAT Brasil. Aqui você personaliza aparência, segurança, notificações e preferências.',
    toast_saved:'Configurações salvas!',toast_backup:'Backup iniciado com sucesso!',
    toast_restore:'Restauração iniciada!',toast_download:'Download iniciado!',
    toast_revoke:'Dispositivo desconectado!',toast_2fa:'Autenticação em duas etapas ativada!',
    toast_photo:'Foto atualizada!',toast_hc:'Alto contraste ativado!',toast_hc_off:'Alto contraste desativado!',
    toast_big_font:'Fonte aumentada!',toast_big_font_off:'Fonte normalizada!',
    toast_sr:'Modo leitor de tela ativado!',toast_anim_red:'Animações reduzidas!',
    theme_dark:'Escuro',theme_light_btn:'Claro',
    pass_weak:'Fraca',pass_med:'Média',pass_str:'Forte',
  },
  'en':{
    admin_panel:'Admin Panel',page_title:'Settings',page_sub:'BAT Brasil · System Preferences',
    nav_main:'Main',nav_dashboard:'Dashboard',nav_management:'Management',
    nav_machines:'Machines',nav_users:'Users',nav_tickets:'Tickets',
    nav_account:'Account',nav_profile:'My Profile',nav_settings:'Settings',
    user_name:'BAT Admin',user_role:'Administrator',
    cfg_categories:'Categories',btn_save_all:'Save Changes',search_ph:'Search setting...',
    sec_general:'General',sec_general_sub:'Basic system settings',
    sec_appearance:'Appearance',sec_appearance_sub:'Customize the system interface',
    sec_security:'Security',sec_security_sub:'Manage your account security',
    sec_notif:'Notifications',sec_notif_sub:'Configure your alerts and preferences',
    sec_system:'System',sec_system_sub:'Technical information and monitoring',
    sec_backup:'Backup',sec_backup_sub:'Manage system backups and restores',
    sec_account:'Account',sec_account_sub:'Manage your personal information',
    sec_a11y:'Accessibility',sec_a11y_sub:'Adapt the interface to your needs',
    lbl_company:'Company Name',lbl_sysname:'System Name',lbl_adm_email:'Admin E-mail',
    lbl_support_phone:'Support Phone',lbl_sys_lang:'System Language',lbl_timezone:'Time Zone',
    lbl_date_fmt:'Date Format',lbl_currency:'Currency',
    theme_label:'System Theme',theme_light:'Light',theme_light_d:'Default white background',
    theme_dark_card:'Dark',theme_dark_d:'Night mode',theme_auto:'Automatic',theme_auto_d:'Follows system',
    accent_color:'Accent Color',font_size:'Font Size',font_small:'Small',font_large:'Large',
    compact_menu:'Compact Sidebar',compact_menu_d:'Reduce sidebar size for more space',
    animations:'Enable Animations',animations_d:'Smooth transitions and visual effects',
    glass_fx:'Glassmorphism Effect',glass_fx_d:'Subtle transparency on cards and panels',
    sec_score_title:'Account Security: Good',sec_score_sub:'Enable two-factor authentication for better protection.',
    change_pass:'Change Password',lbl_curr_pass:'Current Password',lbl_new_pass:'New Password',lbl_conf_pass:'Confirm New Password',
    ph_min8:'Min. 8 characters',ph_repeat:'Repeat new password',
    '2fa':'Two-Factor Authentication','2fa_d':'Adds an extra layer of protection to login',
    sess_timeout:'Automatic Session Timeout',sess_timeout_d:'Disconnect after 30 minutes of inactivity',
    login_hist:'Login History',login_hist_d:'Log all system accesses',
    devices:'Connected Devices',curr_sess:'Current session',btn_revoke:'Revoke',
    notif_sys:'System Notifications',notif_sys_d:'General status alerts and updates',
    notif_email:'E-mail Alerts',notif_email_d:'Receive notifications on your corporate e-mail',
    notif_sound:'Notification Sounds',notif_sound_d:'Play audio when receiving alerts',
    notif_urgent:'Urgent Tickets',notif_urgent_d:'Immediately notify high-priority tickets',
    notif_daily:'Daily Summary',notif_daily_d:'Receive automatic report at 08:00',
    notif_maint:'Maintenance Alerts',notif_maint_d:'Notify when machines need maintenance',
    notif_new_user:'New Users',notif_new_user_d:'Alert when a new user is registered',
    sys_version:'Version',sys_latest:'Latest version',sys_status:'Status',status_operational:'Operational',
    sys_uptime:'Uptime: 99.8%',sys_last_update:'Last Update',sys_by_admin:'by Administrator',
    sys_env:'Environment',sys_brazil:'Brazil — São Paulo',sys_cpu:'CPU',sys_ram:'RAM Memory',
    sys_storage:'Storage',sys_net:'Network',
    btn_do_backup:'Perform Backup',btn_restore:'Restore System',btn_download:'Download Latest Backup',
    backup_history:'Backup History',backup_full:'Full Backup',backup_diff:'Differential Backup',backup_manual:'Manual Backup',
    lbl_name:'Full Name',lbl_email:'E-mail',lbl_phone:'Phone',lbl_role:'Position',lbl_dept:'Department',
    joined_since:'Member since',btn_change_photo:'Change Photo',
    a11y_contrast:'High Contrast',a11y_contrast_d:'Increases contrast for better visibility',
    a11y_font:'Larger Font',a11y_font_d:'Bigger text for easier reading',
    a11y_reader:'Screen Reader',a11y_reader_d:'Compatible with NVDA and VoiceOver',
    a11y_nav:'Simplified Navigation',a11y_nav_d:'Simpler and more direct interface',
    a11y_reduce_anim:'Reduce Animations',a11y_reduce_anim_d:'Minimize moving visual effects',
    a11y_libras:'Sign Language (Libras)',a11y_libras_d:'Sign language accessibility widget active',
    kbd_nav:'Keyboard Shortcuts',kbd_nav_d:'Press Tab to navigate between elements and Enter to confirm.',
    libras_title:'Sign Language',libras_hint:'Interpreter active',
    libras_desc:'This is the BAT Brasil Settings page. Customize appearance, security, notifications and preferences.',
    toast_saved:'Settings saved!',toast_backup:'Backup started successfully!',
    toast_restore:'Restore initiated!',toast_download:'Download started!',
    toast_revoke:'Device disconnected!',toast_2fa:'Two-factor authentication enabled!',
    toast_photo:'Photo updated!',toast_hc:'High contrast enabled!',toast_hc_off:'High contrast disabled!',
    toast_big_font:'Font enlarged!',toast_big_font_off:'Font normalized!',
    toast_sr:'Screen reader mode enabled!',toast_anim_red:'Animations reduced!',
    theme_dark:'Dark',theme_light_btn:'Light',
    pass_weak:'Weak',pass_med:'Medium',pass_str:'Strong',
  },
  'es':{admin_panel:'Panel Adm.',page_title:'Configuración',page_sub:'BAT Brasil · Preferencias del Sistema',nav_main:'Principal',nav_dashboard:'Dashboard',nav_management:'Gestión',nav_machines:'Máquinas',nav_users:'Usuarios',nav_tickets:'Tickets',nav_account:'Cuenta',nav_profile:'Mi Perfil',nav_settings:'Configuración',user_name:'Admin BAT',user_role:'Administrador',cfg_categories:'Categorías',btn_save_all:'Guardar Cambios',search_ph:'Buscar configuración...',sec_general:'General',sec_general_sub:'Configuración básica del sistema',sec_appearance:'Apariencia',sec_appearance_sub:'Personalice la interfaz del sistema',sec_security:'Seguridad',sec_security_sub:'Gestione la seguridad de su cuenta',sec_notif:'Notificaciones',sec_notif_sub:'Configure sus alertas y preferencias',sec_system:'Sistema',sec_system_sub:'Información técnica y monitoreo',sec_backup:'Copia de Seguridad',sec_backup_sub:'Gestione copias y restauraciones',sec_account:'Cuenta',sec_account_sub:'Gestione su información personal',sec_a11y:'Accesibilidad',sec_a11y_sub:'Adapte la interfaz a sus necesidades',lbl_company:'Nombre de la Empresa',lbl_sysname:'Nombre del Sistema',lbl_adm_email:'E-mail Administrativo',lbl_support_phone:'Teléfono de Soporte',lbl_sys_lang:'Idioma del Sistema',lbl_timezone:'Zona Horaria',lbl_date_fmt:'Formato de Fecha',lbl_currency:'Moneda',theme_label:'Tema del Sistema',theme_light:'Claro',theme_light_d:'Fondo blanco predeterminado',theme_dark_card:'Oscuro',theme_dark_d:'Modo nocturno',theme_auto:'Automático',theme_auto_d:'Sigue al sistema',accent_color:'Color de Acento',font_size:'Tamaño de Fuente',font_small:'Pequeña',font_large:'Grande',compact_menu:'Compactar Menú',compact_menu_d:'Reduce la barra lateral para más espacio',animations:'Activar Animaciones',animations_d:'Transiciones y efectos visuales suaves',glass_fx:'Efecto Glassmorphism',glass_fx_d:'Transparencia suave en tarjetas',sec_score_title:'Seguridad de Cuenta: Buena',sec_score_sub:'Active la autenticación de dos factores.',change_pass:'Cambiar Contraseña',lbl_curr_pass:'Contraseña Actual',lbl_new_pass:'Nueva Contraseña',lbl_conf_pass:'Confirmar Contraseña',ph_min8:'Mín. 8 caracteres',ph_repeat:'Repita la contraseña','2fa':'Autenticación de Dos Factores','2fa_d':'Añade una capa extra de protección',sess_timeout:'Tiempo de Sesión',sess_timeout_d:'Desconectar tras 30 min de inactividad',login_hist:'Historial de Login',login_hist_d:'Registrar todos los accesos',devices:'Dispositivos Conectados',curr_sess:'Sesión actual',btn_revoke:'Revocar',notif_sys:'Notificaciones del Sistema',notif_sys_d:'Alertas generales de estado',notif_email:'Alertas por E-mail',notif_email_d:'Reciba notificaciones en su correo',notif_sound:'Sonidos de Notificación',notif_sound_d:'Reproducir audio al recibir alertas',notif_urgent:'Tickets Urgentes',notif_urgent_d:'Notificar inmediatamente tickets de alta prioridad',notif_daily:'Resumen Diario',notif_daily_d:'Recibir informe automático a las 08:00',notif_maint:'Alertas de Mantenimiento',notif_maint_d:'Notificar cuando las máquinas necesitan mantenimiento',notif_new_user:'Nuevos Usuarios',notif_new_user_d:'Alertar cuando se registra un nuevo usuario',sys_version:'Versión',sys_latest:'Versión más reciente',sys_status:'Estado',status_operational:'Operacional',sys_uptime:'Uptime: 99,8%',sys_last_update:'Última Actualización',sys_by_admin:'por Administrador',sys_env:'Entorno',sys_brazil:'Brasil — São Paulo',sys_cpu:'CPU',sys_ram:'Memoria RAM',sys_storage:'Almacenamiento',sys_net:'Red',btn_do_backup:'Realizar Copia de Seguridad',btn_restore:'Restaurar Sistema',btn_download:'Descargar Última Copia',backup_history:'Historial de Copias',backup_full:'Copia Completa',backup_diff:'Copia Diferencial',backup_manual:'Copia Manual',lbl_name:'Nombre Completo',lbl_email:'E-mail',lbl_phone:'Teléfono',lbl_role:'Cargo',lbl_dept:'Departamento',joined_since:'Miembro desde',btn_change_photo:'Cambiar Foto',a11y_contrast:'Alto Contraste',a11y_contrast_d:'Aumenta el contraste para mejor visibilidad',a11y_font:'Fuente Grande',a11y_font_d:'Textos más grandes para facilitar lectura',a11y_reader:'Lector de Pantalla',a11y_reader_d:'Compatible con NVDA y VoiceOver',a11y_nav:'Navegación Simplificada',a11y_nav_d:'Interfaz más sencilla y directa',a11y_reduce_anim:'Reducir Animaciones',a11y_reduce_anim_d:'Minimiza efectos visuales en movimiento',a11y_libras:'Lengua de Señas',a11y_libras_d:'Widget de accesibilidad en lengua de señas activo',kbd_nav:'Atajos de Teclado',kbd_nav_d:'Presione Tab para navegar y Enter para confirmar.',libras_title:'Lengua de Señas',libras_hint:'Intérprete activo',libras_desc:'Esta es la página de Configuración del sistema BAT Brasil.',toast_saved:'¡Configuración guardada!',toast_backup:'¡Copia de seguridad iniciada!',toast_restore:'¡Restauración iniciada!',toast_download:'¡Descarga iniciada!',toast_revoke:'¡Dispositivo desconectado!',toast_2fa:'¡Autenticación de dos factores activada!',toast_photo:'¡Foto actualizada!',toast_hc:'¡Alto contraste activado!',toast_hc_off:'¡Alto contraste desactivado!',toast_big_font:'¡Fuente aumentada!',toast_big_font_off:'¡Fuente normalizada!',toast_sr:'¡Modo lector de pantalla activado!',toast_anim_red:'¡Animaciones reducidas!',theme_dark:'Oscuro',theme_light_btn:'Claro',pass_weak:'Débil',pass_med:'Media',pass_str:'Fuerte'},
  'de':{admin_panel:'Admin-Panel',page_title:'Einstellungen',page_sub:'BAT Brasil · Systemeinstellungen',nav_main:'Hauptmenü',nav_dashboard:'Dashboard',nav_management:'Verwaltung',nav_machines:'Maschinen',nav_users:'Benutzer',nav_tickets:'Tickets',nav_account:'Konto',nav_profile:'Mein Profil',nav_settings:'Einstellungen',user_name:'BAT Admin',user_role:'Administrator',cfg_categories:'Kategorien',btn_save_all:'Änderungen speichern',search_ph:'Einstellung suchen...',sec_general:'Allgemein',sec_general_sub:'Grundlegende Systemeinstellungen',sec_appearance:'Erscheinungsbild',sec_appearance_sub:'Oberfläche anpassen',sec_security:'Sicherheit',sec_security_sub:'Kontosicherheit verwalten',sec_notif:'Benachrichtigungen',sec_notif_sub:'Benachrichtigungen konfigurieren',sec_system:'System',sec_system_sub:'Technische Informationen und Überwachung',sec_backup:'Sicherung',sec_backup_sub:'Sicherungen und Wiederherstellungen verwalten',sec_account:'Konto',sec_account_sub:'Persönliche Daten verwalten',sec_a11y:'Barrierefreiheit',sec_a11y_sub:'Oberfläche anpassen',lbl_company:'Firmenname',lbl_sysname:'Systemname',lbl_adm_email:'Admin-E-Mail',lbl_support_phone:'Support-Telefon',lbl_sys_lang:'Systemsprache',lbl_timezone:'Zeitzone',lbl_date_fmt:'Datumsformat',lbl_currency:'Währung',theme_label:'Systemdesign',theme_light:'Hell',theme_light_d:'Weißer Hintergrund',theme_dark_card:'Dunkel',theme_dark_d:'Nachtmodus',theme_auto:'Automatisch',theme_auto_d:'Folgt dem System',accent_color:'Akzentfarbe',font_size:'Schriftgröße',font_small:'Klein',font_large:'Groß',compact_menu:'Seitenleiste komprimieren',compact_menu_d:'Sidebar verkleinern',animations:'Animationen aktivieren',animations_d:'Sanfte Übergänge',glass_fx:'Glassmorphismus-Effekt',glass_fx_d:'Leichte Transparenz',sec_score_title:'Kontosicherheit: Gut',sec_score_sub:'Zwei-Faktor-Authentifizierung aktivieren.',change_pass:'Passwort ändern',lbl_curr_pass:'Aktuelles Passwort',lbl_new_pass:'Neues Passwort',lbl_conf_pass:'Passwort bestätigen',ph_min8:'Mind. 8 Zeichen',ph_repeat:'Passwort wiederholen','2fa':'Zwei-Faktor-Authentifizierung','2fa_d':'Fügt eine zusätzliche Schutzebene hinzu',sess_timeout:'Automatischer Sitzungs-Timeout',sess_timeout_d:'Nach 30 Min. trennen',login_hist:'Login-Verlauf',login_hist_d:'Alle Zugriffe protokollieren',devices:'Verbundene Geräte',curr_sess:'Aktuelle Sitzung',btn_revoke:'Widerrufen',notif_sys:'Systembenachrichtigungen',notif_sys_d:'Allgemeine Status-Benachrichtigungen',notif_email:'E-Mail-Benachrichtigungen',notif_email_d:'Benachrichtigungen per E-Mail',notif_sound:'Benachrichtigungstöne',notif_sound_d:'Audio abspielen',notif_urgent:'Dringende Tickets',notif_urgent_d:'Sofort benachrichtigen',notif_daily:'Tägliche Zusammenfassung',notif_daily_d:'Automatischen Bericht erhalten',notif_maint:'Wartungsbenachrichtigungen',notif_maint_d:'Maschinenbenachrichtigungen',notif_new_user:'Neue Benutzer',notif_new_user_d:'Benachrichtigen bei neuer Registrierung',sys_version:'Version',sys_latest:'Neueste Version',sys_status:'Status',status_operational:'Betriebsbereit',sys_uptime:'Uptime: 99,8%',sys_last_update:'Letztes Update',sys_by_admin:'von Administrator',sys_env:'Umgebung',sys_brazil:'Brasilien — São Paulo',sys_cpu:'CPU',sys_ram:'Arbeitsspeicher',sys_storage:'Speicher',sys_net:'Netzwerk',btn_do_backup:'Sicherung durchführen',btn_restore:'System wiederherstellen',btn_download:'Letzte Sicherung herunterladen',backup_history:'Sicherungsverlauf',backup_full:'Vollständige Sicherung',backup_diff:'Differentielle Sicherung',backup_manual:'Manuelle Sicherung',lbl_name:'Vollständiger Name',lbl_email:'E-Mail',lbl_phone:'Telefon',lbl_role:'Position',lbl_dept:'Abteilung',joined_since:'Mitglied seit',btn_change_photo:'Foto ändern',a11y_contrast:'Hoher Kontrast',a11y_contrast_d:'Erhöht den Kontrast',a11y_font:'Größere Schrift',a11y_font_d:'Größere Texte',a11y_reader:'Bildschirmleser',a11y_reader_d:'Kompatibel mit NVDA und VoiceOver',a11y_nav:'Vereinfachte Navigation',a11y_nav_d:'Einfachere Oberfläche',a11y_reduce_anim:'Animationen reduzieren',a11y_reduce_anim_d:'Bewegungseffekte minimieren',a11y_libras:'Gebärdensprache',a11y_libras_d:'Gebärdensprache-Widget aktiv',kbd_nav:'Tastaturkürzel',kbd_nav_d:'Tab zum Navigieren, Enter zum Bestätigen.',libras_title:'Gebärdensprache',libras_hint:'Dolmetscher aktiv',libras_desc:'Dies ist die Einstellungsseite von BAT Brasil.',toast_saved:'Einstellungen gespeichert!',toast_backup:'Sicherung gestartet!',toast_restore:'Wiederherstellung gestartet!',toast_download:'Download gestartet!',toast_revoke:'Gerät getrennt!',toast_2fa:'Zwei-Faktor-Authentifizierung aktiviert!',toast_photo:'Foto aktualisiert!',toast_hc:'Hoher Kontrast aktiviert!',toast_hc_off:'Hoher Kontrast deaktiviert!',toast_big_font:'Schrift vergrößert!',toast_big_font_off:'Schrift normalisiert!',toast_sr:'Bildschirmleser-Modus aktiviert!',toast_anim_red:'Animationen reduziert!',theme_dark:'Dunkel',theme_light_btn:'Hell',pass_weak:'Schwach',pass_med:'Mittel',pass_str:'Stark'},
  'ru':{admin_panel:'Адм. панель',page_title:'Настройки',page_sub:'BAT Brasil · Настройки системы',nav_main:'Главное',nav_dashboard:'Панель',nav_management:'Управление',nav_machines:'Машины',nav_users:'Пользователи',nav_tickets:'Заявки',nav_account:'Аккаунт',nav_profile:'Мой профиль',nav_settings:'Настройки',user_name:'Администратор',user_role:'Администратор',cfg_categories:'Категории',btn_save_all:'Сохранить изменения',search_ph:'Поиск настройки...',sec_general:'Общие',sec_general_sub:'Основные настройки системы',sec_appearance:'Внешний вид',sec_appearance_sub:'Настройте интерфейс системы',sec_security:'Безопасность',sec_security_sub:'Управление безопасностью аккаунта',sec_notif:'Уведомления',sec_notif_sub:'Настройте уведомления и предпочтения',sec_system:'Система',sec_system_sub:'Техническая информация и мониторинг',sec_backup:'Резервная копия',sec_backup_sub:'Управление резервными копиями',sec_account:'Аккаунт',sec_account_sub:'Управление личными данными',sec_a11y:'Доступность',sec_a11y_sub:'Адаптируйте интерфейс под свои потребности',lbl_company:'Название компании',lbl_sysname:'Название системы',lbl_adm_email:'Административный e-mail',lbl_support_phone:'Телефон поддержки',lbl_sys_lang:'Язык системы',lbl_timezone:'Часовой пояс',lbl_date_fmt:'Формат даты',lbl_currency:'Валюта',theme_label:'Тема системы',theme_light:'Светлая',theme_light_d:'Белый фон по умолчанию',theme_dark_card:'Тёмная',theme_dark_d:'Ночной режим',theme_auto:'Автоматически',theme_auto_d:'Следует системе',accent_color:'Акцентный цвет',font_size:'Размер шрифта',font_small:'Малый',font_large:'Крупный',compact_menu:'Компактная боковая панель',compact_menu_d:'Уменьшает боковую панель',animations:'Включить анимации',animations_d:'Плавные переходы и эффекты',glass_fx:'Эффект Glassmorphism',glass_fx_d:'Лёгкая прозрачность',sec_score_title:'Безопасность аккаунта: Хорошая',sec_score_sub:'Включите двухфакторную аутентификацию.',change_pass:'Изменить пароль',lbl_curr_pass:'Текущий пароль',lbl_new_pass:'Новый пароль',lbl_conf_pass:'Подтвердить пароль',ph_min8:'Мин. 8 символов',ph_repeat:'Повторите пароль','2fa':'Двухфакторная аутентификация','2fa_d':'Добавляет дополнительный уровень защиты',sess_timeout:'Автоматический тайм-аут',sess_timeout_d:'Отключить через 30 мин бездействия',login_hist:'История входов',login_hist_d:'Регистрировать все доступы',devices:'Подключённые устройства',curr_sess:'Текущая сессия',btn_revoke:'Отозвать',notif_sys:'Системные уведомления',notif_sys_d:'Общие оповещения о статусе',notif_email:'Оповещения по e-mail',notif_email_d:'Получать уведомления на корпоративный e-mail',notif_sound:'Звуки уведомлений',notif_sound_d:'Воспроизводить аудио при оповещениях',notif_urgent:'Срочные заявки',notif_urgent_d:'Немедленно уведомлять о срочных заявках',notif_daily:'Ежедневный отчёт',notif_daily_d:'Получать автоматический отчёт в 08:00',notif_maint:'Оповещения об обслуживании',notif_maint_d:'Уведомлять о необходимости ТО',notif_new_user:'Новые пользователи',notif_new_user_d:'Оповещать при регистрации нового пользователя',sys_version:'Версия',sys_latest:'Последняя версия',sys_status:'Статус',status_operational:'Работает',sys_uptime:'Аптайм: 99,8%',sys_last_update:'Последнее обновление',sys_by_admin:'Администратором',sys_env:'Среда',sys_brazil:'Бразилия — Сан-Паулу',sys_cpu:'ЦПУ',sys_ram:'ОЗУ',sys_storage:'Хранилище',sys_net:'Сеть',btn_do_backup:'Создать резервную копию',btn_restore:'Восстановить систему',btn_download:'Скачать последнюю копию',backup_history:'История резервных копий',backup_full:'Полная копия',backup_diff:'Дифференциальная копия',backup_manual:'Ручная копия',lbl_name:'Полное имя',lbl_email:'E-mail',lbl_phone:'Телефон',lbl_role:'Должность',lbl_dept:'Отдел',joined_since:'Участник с',btn_change_photo:'Изменить фото',a11y_contrast:'Высокий контраст',a11y_contrast_d:'Увеличивает контраст',a11y_font:'Крупный шрифт',a11y_font_d:'Большие тексты',a11y_reader:'Экранный диктор',a11y_reader_d:'Совместим с NVDA и VoiceOver',a11y_nav:'Упрощённая навигация',a11y_nav_d:'Более простой интерфейс',a11y_reduce_anim:'Уменьшить анимации',a11y_reduce_anim_d:'Минимизировать движущиеся эффекты',a11y_libras:'Язык жестов',a11y_libras_d:'Виджет жестового языка активен',kbd_nav:'Горячие клавиши',kbd_nav_d:'Tab для навигации, Enter для подтверждения.',libras_title:'Язык жестов',libras_hint:'Переводчик активен',libras_desc:'Это страница настроек BAT Brasil.',toast_saved:'Настройки сохранены!',toast_backup:'Резервная копия создаётся!',toast_restore:'Восстановление запущено!',toast_download:'Загрузка начата!',toast_revoke:'Устройство отключено!',toast_2fa:'Двухфакторная аутентификация включена!',toast_photo:'Фото обновлено!',toast_hc:'Высокий контраст включён!',toast_hc_off:'Высокий контраст отключён!',toast_big_font:'Шрифт увеличен!',toast_big_font_off:'Шрифт нормализован!',toast_sr:'Режим экранного диктора включён!',toast_anim_red:'Анимации уменьшены!',theme_dark:'Тёмная',theme_light_btn:'Светлая',pass_weak:'Слабый',pass_med:'Средний',pass_str:'Сильный'},
  'zh':{admin_panel:'管理面板',page_title:'设置',page_sub:'BAT Brasil · 系统首选项',nav_main:'主菜单',nav_dashboard:'仪表板',nav_management:'管理',nav_machines:'机器',nav_users:'用户',nav_tickets:'工单',nav_account:'账户',nav_profile:'我的资料',nav_settings:'设置',user_name:'BAT管理员',user_role:'管理员',cfg_categories:'类别',btn_save_all:'保存更改',search_ph:'搜索设置...',sec_general:'常规',sec_general_sub:'基本系统设置',sec_appearance:'外观',sec_appearance_sub:'自定义系统界面',sec_security:'安全',sec_security_sub:'管理账户安全',sec_notif:'通知',sec_notif_sub:'配置提醒和首选项',sec_system:'系统',sec_system_sub:'技术信息和监控',sec_backup:'备份',sec_backup_sub:'管理备份和还原',sec_account:'账户',sec_account_sub:'管理个人信息',sec_a11y:'无障碍',sec_a11y_sub:'调整界面以满足需求',lbl_company:'公司名称',lbl_sysname:'系统名称',lbl_adm_email:'管理员电子邮件',lbl_support_phone:'支持电话',lbl_sys_lang:'系统语言',lbl_timezone:'时区',lbl_date_fmt:'日期格式',lbl_currency:'货币',theme_label:'系统主题',theme_light:'浅色',theme_light_d:'默认白色背景',theme_dark_card:'深色',theme_dark_d:'夜间模式',theme_auto:'自动',theme_auto_d:'跟随系统',accent_color:'强调色',font_size:'字体大小',font_small:'小',font_large:'大',compact_menu:'紧凑侧边栏',compact_menu_d:'减小侧边栏以节省空间',animations:'启用动画',animations_d:'平滑过渡和视觉效果',glass_fx:'毛玻璃效果',glass_fx_d:'卡片和面板的轻微透明效果',sec_score_title:'账户安全：良好',sec_score_sub:'启用双因素身份验证以提高保护。',change_pass:'更改密码',lbl_curr_pass:'当前密码',lbl_new_pass:'新密码',lbl_conf_pass:'确认新密码',ph_min8:'至少8个字符',ph_repeat:'重复新密码','2fa':'双因素身份验证','2fa_d':'为登录添加额外保护层',sess_timeout:'自动会话超时',sess_timeout_d:'不活动30分钟后断开连接',login_hist:'登录历史',login_hist_d:'记录所有系统访问',devices:'已连接设备',curr_sess:'当前会话',btn_revoke:'撤销',notif_sys:'系统通知',notif_sys_d:'一般状态警报和更新',notif_email:'电子邮件提醒',notif_email_d:'在企业电子邮件上接收通知',notif_sound:'通知声音',notif_sound_d:'收到警报时播放音频',notif_urgent:'紧急工单',notif_urgent_d:'立即通知高优先级工单',notif_daily:'每日摘要',notif_daily_d:'在08:00接收自动报告',notif_maint:'维护提醒',notif_maint_d:'机器需要维护时通知',notif_new_user:'新用户',notif_new_user_d:'注册新用户时提醒',sys_version:'版本',sys_latest:'最新版本',sys_status:'状态',status_operational:'正常运行',sys_uptime:'正常运行时间：99.8%',sys_last_update:'最后更新',sys_by_admin:'由管理员',sys_env:'环境',sys_brazil:'巴西 — 圣保罗',sys_cpu:'CPU',sys_ram:'内存',sys_storage:'存储',sys_net:'网络',btn_do_backup:'执行备份',btn_restore:'还原系统',btn_download:'下载最新备份',backup_history:'备份历史',backup_full:'完整备份',backup_diff:'差异备份',backup_manual:'手动备份',lbl_name:'全名',lbl_email:'电子邮件',lbl_phone:'电话',lbl_role:'职位',lbl_dept:'部门',joined_since:'成员自',btn_change_photo:'更换照片',a11y_contrast:'高对比度',a11y_contrast_d:'提高对比度以便更好地查看',a11y_font:'放大字体',a11y_font_d:'更大的文字便于阅读',a11y_reader:'屏幕阅读器',a11y_reader_d:'兼容NVDA和VoiceOver',a11y_nav:'简化导航',a11y_nav_d:'更简单直接的界面',a11y_reduce_anim:'减少动画',a11y_reduce_anim_d:'最小化移动视觉效果',a11y_libras:'手语（Libras）',a11y_libras_d:'手语无障碍小部件已激活',kbd_nav:'键盘快捷键',kbd_nav_d:'按Tab导航，按Enter确认。',libras_title:'手语无障碍',libras_hint:'翻译员已激活',libras_desc:'这是BAT巴西设置页面。',toast_saved:'设置已保存！',toast_backup:'备份已开始！',toast_restore:'还原已启动！',toast_download:'下载已开始！',toast_revoke:'设备已断开连接！',toast_2fa:'双因素身份验证已启用！',toast_photo:'照片已更新！',toast_hc:'高对比度已启用！',toast_hc_off:'高对比度已禁用！',toast_big_font:'字体已放大！',toast_big_font_off:'字体已恢复！',toast_sr:'屏幕阅读器模式已启用！',toast_anim_red:'动画已减少！',theme_dark:'深色',theme_light_btn:'浅色',pass_weak:'弱',pass_med:'中',pass_str:'强'}
};
const LC={'pt-BR':'PT','en':'EN','es':'ES','de':'DE','ru':'RU','zh':'中文'};
let currentLang='pt-BR';

/* ══ THEME (persistido e compartilhado via BATSettings) ══ */
function initTheme(){const mode=BATSettings.getThemeMode();updTUI(BATSettings.resolveTheme(mode));updThemeCards(mode)}
function toggleTheme(){const eff=BATSettings.toggleTheme();updTUI(eff);updThemeCards(BATSettings.getThemeMode())}
function updTUI(t){const i=document.getElementById('ti');const l=document.getElementById('tl');if(i)i.className=t==='dark'?'fa-solid fa-sun':'fa-solid fa-moon';if(l)l.textContent=t==='dark'?(TR[currentLang].theme_light_btn||'Claro'):(TR[currentLang].theme_dark||'Escuro')}
function selectTheme(t,el){document.querySelectorAll('.theme-card').forEach(c=>c.classList.remove('selected'));if(el)el.classList.add('selected');updTUI(BATSettings.setTheme(t))}
function updThemeCards(mode){document.querySelectorAll('.theme-card').forEach(c=>c.classList.remove('selected'));const tc=document.getElementById('tc-'+mode);if(tc)tc.classList.add('selected')}

/* ══ LANG ══ */
function initLang(){const s=localStorage.getItem('bat-lang')||'pt-BR';currentLang=s;document.getElementById('ll').textContent=LC[s]||'PT';applyTR()}
function setLang(code){currentLang=code;localStorage.setItem('bat-lang',code);document.getElementById('ll').textContent=LC[code]||code;document.querySelectorAll('.lo').forEach((el,i)=>{const c=['pt-BR','en','es','de','ru','zh'];el.classList.toggle('active',c[i]===code)});closeLM();applyTR();updTUI(document.documentElement.getAttribute('data-theme'))}
function applyTR(){const d=TR[currentLang]||TR['pt-BR'];document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(d[k]!==undefined)el.textContent=d[k]});document.querySelectorAll('[data-i18n-ph]').forEach(el=>{const k=el.getAttribute('data-i18n-ph');if(d[k])el.placeholder=d[k]})}
function toggleLM(){document.getElementById('lm').classList.toggle('open')}
function closeLM(){document.getElementById('lm').classList.remove('open')}
document.addEventListener('click',e=>{if(!e.target.closest('.lw'))closeLM()});

/* ══ SIDEBAR ══ */
function toggleSB(){const o=document.getElementById('sidebar').classList.toggle('open');document.getElementById('overlay').classList.toggle('active',o)}
function closeSB(){document.getElementById('sidebar').classList.remove('open');document.getElementById('overlay').classList.remove('active')}

/* ══ LIBRAS ══ */
function toggleL(){document.getElementById('lp').classList.toggle('open')}

/* ══ CFG NAVIGATION ══ */
function showSec(id,el){
  document.querySelectorAll('.sc').forEach(s=>s.classList.remove('visible'));
  const t=document.getElementById('sec-'+id);if(t){t.classList.add('visible');t.style.animation='none';t.offsetHeight;t.style.animation='fu .4s ease both'}
  document.querySelectorAll('.cfg-nav-item').forEach(n=>n.classList.remove('active'));
  if(el)el.classList.add('active');
  // animate bars if system section
  if(id==='sistema'){setTimeout(()=>{document.querySelectorAll('.bar-fill[data-w]').forEach(b=>{b.style.width=b.dataset.w+'%'})},200)}
}

/* ══ SAVE ALL ══ */
function saveAll(){const btn=document.getElementById('btn-save-all');btn.classList.add('loading');setTimeout(()=>{btn.classList.remove('loading');showToast((TR[currentLang]||TR['pt-BR']).toast_saved,'suc')},1500)}

/* ══ COLOR PICKER (cor de destaque salva para todas as páginas) ══ */
function selectColor(c,el){document.querySelectorAll('.color-dot').forEach(d=>d.classList.remove('selected'));el.classList.add('selected');BATSettings.setAccent(c)}

/* ══ FONT SIZE (salvo para todas as páginas) ══ */
function onFontInput(el){const lab=document.getElementById('fsv');if(lab)lab.textContent=el.value+'px';BATSettings.setFont(el.value)}

/* ══ PASS STRENGTH ══ */
function chkStr(){const v=document.getElementById('s-new').value;const b=document.getElementById('ps-fill');const d=TR[currentLang]||TR['pt-BR'];if(!v){b.style.width='0';return}let sc=0;if(v.length>=8)sc++;if(/[A-Z]/.test(v))sc++;if(/[0-9]/.test(v))sc++;if(/[^A-Za-z0-9]/.test(v))sc++;const m=[{w:'25%',c:'#E53E3E'},{w:'50%',c:'#E8A020'},{w:'75%',c:'#E8A020'},{w:'100%',c:'#2D9E6B'}];const s=m[Math.max(0,sc-1)];b.style.width=s.w;b.style.background=s.c}

/* ══ TOGGLE PASS ══ */
function tp(id,ico){const i=document.getElementById(id);const ic=document.getElementById(ico);i.type=i.type==='password'?'text':'password';ic.className=i.type==='password'?'fa-solid fa-eye':'fa-solid fa-eye-slash'}

/* ══ DEVICES ══ */
function revokeDevice(btn){btn.closest('.dev-item').style.opacity='0';btn.closest('.dev-item').style.transform='translateX(10px)';btn.closest('.dev-item').style.transition='all .3s';setTimeout(()=>btn.closest('.dev-item').remove(),300);showToast((TR[currentLang]||TR['pt-BR']).toast_revoke,'info')}

/* ══ BACKUP ══ */
function doBackup(){
  const d=TR[currentLang]||TR['pt-BR'];
  showToast(d.toast_backup,'suc');
  const now=new Date();
  const ds=`${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()} — ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  const item=document.createElement('div');
  item.className='bk-item';item.style.animation='fu .4s ease';
  item.innerHTML=`<div class="bk-ico"><i class="fa-solid fa-database"></i></div><div class="bk-info"><strong>${d.backup_manual}</strong><span>${ds} · Admin BAT</span></div><span class="bk-size">4,3 GB</span><button class="btn-backup dl" style="padding:5px 10px;font-size:11px" onclick="doDownload()"><i class="fa-solid fa-download"></i></button>`;
  document.getElementById('bk-list').prepend(item);
}
function doRestore(){showToast((TR[currentLang]||TR['pt-BR']).toast_restore,'warn')}
function doDownload(){showToast((TR[currentLang]||TR['pt-BR']).toast_download,'info')}

/* ══ AVATAR ══ */
const AVC=['#005691','#6B46C1','#2D9E6B','#C0392B','#E8A020','#C8A96B'];
function fakeAvUpload(){const c=AVC[Math.floor(Math.random()*AVC.length)];document.getElementById('acc-av').style.background=c;showToast((TR[currentLang]||TR['pt-BR']).toast_photo,'info')}

/* ══ ACCESSIBILITY TOGGLES (salvos e aplicados em todas as páginas) ══ */
function toggleHC(cb){BATSettings.setSetting('hc',cb.checked?'1':'0');toggleA11yCard('a11y-hc',cb);showToast((TR[currentLang]||TR['pt-BR'])[cb.checked?'toast_hc':'toast_hc_off'],cb.checked?'info':'warn')}
function toggleBigFont(cb){BATSettings.setSetting('bigfont',cb.checked?'1':'0');toggleA11yCard('a11y-font',cb);showToast((TR[currentLang]||TR['pt-BR'])[cb.checked?'toast_big_font':'toast_big_font_off'],'info')}
function toggleSR(cb){BATSettings.setSetting('sr',cb.checked?'1':'0');toggleA11yCard('a11y-sr',cb);showToast((TR[currentLang]||TR['pt-BR']).toast_sr,'info')}
function toggleReduceAnim(cb){BATSettings.setSetting('reduceanim',cb.checked?'1':'0');toggleA11yCard('a11y-anim',cb);if(cb.checked)showToast((TR[currentLang]||TR['pt-BR']).toast_anim_red,'info')}
function toggleNav(cb){BATSettings.setSetting('simplenav',cb.checked?'1':'0');toggleA11yCard('a11y-nav',cb)}
function toggleLibrasCfg(cb){BATSettings.setSetting('libras',cb.checked?'1':'0');toggleA11yCard('a11y-libras',cb)}
function toggleA11yCard(id,cb){document.getElementById(id).classList.toggle('on',cb.checked)}

/* ══ TOAST ══ */
function showToast(msg,type='suc'){const t=document.getElementById('toast');const i=document.getElementById('tico');const m={suc:'fa-check-circle',err:'fa-times-circle',info:'fa-info-circle',warn:'fa-exclamation-circle'};document.getElementById('tmsg').textContent=msg;t.className=`toast show ${type}`;i.className=`fa-solid ${m[type]||'fa-check-circle'}`;clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),3200)}

/* ══ SEARCH ══ */
document.getElementById('cfg-search-inp').addEventListener('input',function(){
  const q=this.value.toLowerCase();
  document.querySelectorAll('.cfg-nav-item').forEach(item=>{
    const txt=item.textContent.toLowerCase();
    item.style.display=!q||txt.includes(q)?'flex':'none';
  });
});

/* ══ PERSISTÊNCIA DAS CONFIGURAÇÕES ══
   Restaura os controles da página a partir do localStorage e mantém
   cada alteração salva (para todas as páginas). */
const A11Y_MAP=[['a11y-hc','hc'],['a11y-font','bigfont'],['a11y-sr','sr'],['a11y-nav','simplenav'],['a11y-anim','reduceanim'],['a11y-libras','libras']];
function initSettings(){
  // Cor de destaque — marca o "dot" salvo
  const acc=BATSettings.get(BATSettings.KEYS.accent);
  if(acc){
    document.querySelectorAll('.color-dot').forEach(d=>{
      const m=(d.getAttribute('onclick')||'').match(/#([0-9a-fA-F]{3,6})/);
      d.classList.toggle('selected',!!(m&&('#'+m[1]).toLowerCase()===acc.toLowerCase()));
    });
  }
  // Tamanho de fonte
  const fs=BATSettings.get(BATSettings.KEYS.font),r=document.getElementById('fs-range');
  if(r&&fs){r.value=fs;const lab=document.getElementById('fsv');if(lab)lab.textContent=fs+'px';}
  // Acessibilidade — estado das checkboxes + destaque dos cards
  A11Y_MAP.forEach(p=>{
    const card=document.getElementById(p[0]);if(!card)return;
    const cb=card.querySelector('input[type=checkbox]');if(!cb)return;
    const v=BATSettings.getSetting(p[1]);
    if(v!==null){cb.checked=(v==='1');card.classList.toggle('on',cb.checked);}
  });
  // Demais controles do painel (switches, selects e campos de texto)
  let idx=0;
  document.querySelectorAll('.cfg-main input, .cfg-main select, .cfg-main textarea').forEach(el=>{
    if(el.type==='password'||el.id==='cfg-search-inp'||el.id==='fs-range')return;
    if(el.closest('#sec-a11y'))return;
    const key='c'+(idx++);
    const isCb=(el.type==='checkbox');
    const stored=BATSettings.getSetting(key);
    if(stored!==null){
      if(isCb)el.checked=(stored==='1');else el.value=stored;
      if(el.id==='acc-nm'){const an=document.getElementById('acc-name');if(an)an.textContent=el.value;}
    }
    const evt=(isCb||el.tagName==='SELECT')?'change':'input';
    el.addEventListener(evt,()=>BATSettings.setSetting(key,isCb?(el.checked?'1':'0'):el.value));
  });
}

/* ══ INIT ══ */
initTheme();initLang();initSettings();updTUI(BATSettings.resolveTheme(BATSettings.getThemeMode()));
setTimeout(()=>{document.querySelectorAll('.bar-fill[data-w]').forEach(b=>{if(document.getElementById('sec-sistema').classList.contains('visible'))b.style.width=b.dataset.w+'%'})},400);