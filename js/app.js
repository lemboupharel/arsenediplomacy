/* ═══════════════════════════════════════
   Portfolio App.js — Frontend Logic (Static Version)
   Dr. Arsène Romaric TATSAZEU
═══════════════════════════════════════ */

// ── Translation Map (6 UN Languages) ───────────────────
const i18n = {
  fr: {
    hero_eyebrow:'Ambassadeur · Éducateur · Entrepreneur',
    hero_subtitle:'Ambassadeur et Envoyé Spécial — Diplomatie Éducative & Coopération Interculturelle (Afrique). Soutenir le développement durable à travers l\'Europe, l\'Asie, l\'Amérique Latine et l\'Afrique par l\'éducation, la diplomatie et la coopération interculturelle.',
    hero_subtitle_mockup:'Ambassadeur et Envoyé Spécial — Diplomatie Éducative & Coopération Interculturelle (Afrique). Soutenir le développement durable à travers l\'Europe, l\'Asie, l\'Amérique Latine et l\'Afrique par l\'éducation, la diplomatie et la coopération interculturelle.',
    hero_cta_parcours:'Voir mes Réalisations', hero_cta_contact:'Me Contacter',
    hero_quote:'« L\'excellence, l\'intégrité et l\'engagement au service du développement humain, de la paix et de la coopération internationale. »',
    hero_badge_ua:'Envoyé Spécial UA', hero_badge_idf:'Fondateur IDF', hero_badge_uno:'Commissions ONU', hero_badge_cont:'3 Continents',
    hero_caption_name:'Dr. Arsène Romaric TATSAZEU', hero_caption_role:'Ambassadeur • Expert • Visionnaire',
    follow_me:'ME SUIVRE', stat_exp:'Années d\'expérience', stat_cont:'Continents engagés', stat_missions:'Missions internationales', stat_dist:'Distinctions & reconnaissances',
    scroll_down:'Défiler',
    stat_real:'Réalisations Majeures', stat_cont:'Continents', stat_inst:'Institutions Partenaires',
    about_eyebrow:'Parcours & Vision', about_title:'Un Diplomate au Service de la Paix Mondiale',
    about_p1:'Le Dr. Arsène Romaric TATSAZEU est un Ambassadeur d\'envergure internationale, expert en Psychologie Sociale et Entrepreneur visionnaire. Son parcours exceptionnel le place au croisement de la diplomatie éducative, du développement interculturel et de la coopération internationale à l\'échelle de quatre continents (Afrique, Europe, Amérique Latine et Asie).',
    about_p2:'Fondateur de l\'International Diaspora Foundation (IDF) Latino-Africano, il consacre son action à mobiliser la diaspora africaine et hispanique au service du développement durable, de la paix et de l\'éducation.',
    about_cta:'Explorer mes travaux →',
    f_name:'Nom Complet', f_role:'Rôle Principal', f_domain:'Domaine', f_action:'Champ d\'Action',
    missions_eyebrow:'Engagement Institutionnel', missions_title:'Missions & Fonctions',
    missions_sub:'Une présence active dans les plus grandes institutions diplomatiques et humanitaires mondiales.',
    mission_web:'Site Web',
    real_eyebrow:'Preuves d\'Excellence', real_title:'Réalisations & Certifications',
    real_sub:'Nominations officielles, certificats, publications et reconnaissances institutionnelles.',
    filter_all:'Tous', filter_dip:'Diplomatie', filter_cert:'Certificats', filter_pub:'Publications', filter_part:'Partenariats',
    search_ph:'Rechercher...',
    gal_eyebrow:'Moments Diplomatiques', gal_title:'Galerie Photo', gal_sub:'Conférences, événements, cérémonies et missions à travers quatre continents.',
    vid_eyebrow:'Médiathèque Vidéo', vid_title:'Discours & Interventions', vid_sub:'Conférences internationales, interviews et présentations officielles.',
    part_eyebrow:'Réseau International', part_title:'Institutions Partenaires',
    news_eyebrow:'Actualités & Communiqués', news_title:'Dernières Activités',
    contact_eyebrow:'Prise de Contact', contact_title:'Travailler Ensemble',
    contact_sub:'Disponible pour des missions diplomatiques, conférences et collaborations stratégiques.',
    contact_form_h:'Envoyer un Message',
    cf_name:'Votre nom complet', cf_email:'Votre adresse email', cf_subject:'Objet de votre message', cf_message:'Votre message…',
    send_whatsapp:'Envoyer via WhatsApp', contact_linkedin:'Contacter sur LinkedIn',
    view_pdf:'Consulter le PDF →', view_doc:'Voir Document →', view_cert:'Voir Certificat →',
    no_results:'Aucun résultat trouvé.', loading_real:'Chargement des réalisations…', loading_gal:'Chargement de la galerie…', loading_vid:'Chargement des vidéos…', loading_news:'Chargement des actualités…',
    footer_copy:'© 2026 Dr. Arsène Romaric TATSAZEU · Tous droits réservés', footer_home:'Accueil', footer_about:'Parcours', footer_contact:'Contact'
  },
  en: {
    hero_eyebrow:'Ambassador · Educator · Entrepreneur',
    hero_subtitle:'Ambassador and Special Envoy — Educational Diplomacy & Intercultural Cooperation (Africa). Supporting sustainable development across Europe, Asia, Latin America and Africa through education, diplomacy and intercultural cooperation.',
    hero_subtitle_mockup:'Ambassador and Special Envoy — Educational Diplomacy & Intercultural Cooperation (Africa). Supporting sustainable development across Europe, Asia, Latin America and Africa through education, diplomacy and intercultural cooperation.',
    hero_cta_parcours:'View My Work', hero_cta_contact:'Get in Touch',
    hero_quote:'« Excellence, integrity and commitment in service of human development, peace and international cooperation. »',
    hero_badge_ua:'UA Special Envoy', hero_badge_idf:'IDF Founder', hero_badge_uno:'UN Commissions', hero_badge_cont:'3 Continents',
    hero_caption_name:'Dr. Arsène Romaric TATSAZEU', hero_caption_role:'Ambassador • Expert • Visionary',
    follow_me:'FOLLOW ME', stat_exp:'Years of Experience', stat_cont:'Engaged Continents', stat_missions:'International Missions', stat_dist:'Distinctions & Recognitions',
    scroll_down:'Scroll',
    stat_real:'Major Achievements', stat_cont:'Continents', stat_inst:'Partner Institutions',
    about_eyebrow:'Biography & Vision', about_title:'A Diplomat in Service of World Peace',
    about_p1:'Dr. Arsène Romaric TATSAZEU is an Ambassador of international stature, Social Psychology Expert and visionary entrepreneur. His exceptional journey places him at the crossroads of educational diplomacy, intercultural development and international cooperation across four continents (Africa, Europe, Latin America and Asia).',
    about_p2:'As founder of the International Diaspora Foundation (IDF) Latino-Africano, he mobilizes the African and Hispanic diaspora in service of sustainable development, peace and education.',
    about_cta:'Explore my work →',
    f_name:'Full Name', f_role:'Primary Role', f_domain:'Domain', f_action:'Area of Action',
    missions_eyebrow:'Institutional Engagement', missions_title:'Missions & Roles',
    missions_sub:'An active presence in the world\'s leading diplomatic and humanitarian institutions.',
    mission_web:'Website',
    real_eyebrow:'Proof of Excellence', real_title:'Realizations & Certifications',
    real_sub:'Official nominations, certificates, publications and institutional recognitions.',
    filter_all:'All', filter_dip:'Diplomacy', filter_cert:'Certificates', filter_pub:'Publications', filter_part:'Partnerships',
    search_ph:'Search...',
    gal_eyebrow:'Diplomatic Moments', gal_title:'Photo Gallery', gal_sub:'Conferences, events, ceremonies and missions across four continents.',
    vid_eyebrow:'Video Media Hub', vid_title:'Speeches & Interventions', vid_sub:'International conferences, interviews and official presentations.',
    part_eyebrow:'International Network', part_title:'Partner Institutions',
    news_eyebrow:'News & Releases', news_title:'Latest Activities',
    contact_eyebrow:'Get In Touch', contact_title:'Let\'s Work Together',
    contact_sub:'Available for diplomatic missions, conferences, strategic collaborations and institutional expertise.',
    contact_form_h:'Send a Message',
    cf_name:'Your full name', cf_email:'Your email address', cf_subject:'Message subject', cf_message:'Your message…',
    send_whatsapp:'Send via WhatsApp', contact_linkedin:'Contact on LinkedIn',
    view_pdf:'View PDF →', view_doc:'View Document →', view_cert:'View Certificate →',
    no_results:'No results found.', loading_real:'Loading realizations…', loading_gal:'Loading gallery…', loading_vid:'Loading videos…', loading_news:'Loading news…',
    footer_copy:'© 2026 Dr. Arsène Romaric TATSAZEU · All rights reserved', footer_home:'Home', footer_about:'About', footer_contact:'Contact'
  },
  es: {
    hero_eyebrow:'Embajador · Educador · Emprendedor',
    hero_subtitle:'Embajador y Enviado Especial — Diplomacia Educativa y Cooperación Intercultural (África). Apoyando el desarrollo sostenible en Europa, Asia, América Latina y África a través de la educación, la diplomacia y la cooperación intercultural.',
    hero_subtitle_mockup:'Embajador y Enviado Especial — Diplomacia Educativa y Cooperación Intercultural (África). Apoyando el desarrollo sostenible en Europa, Asia, América Latina y África a través de la educación, la diplomacia y la cooperación intercultural.',
    hero_cta_parcours:'Ver Mi Trabajo', hero_cta_contact:'Contáctame',
    hero_quote:'« La excelencia, la integridad y el compromiso al servicio del desarrollo humano, la paz y la cooperación internacional. »',
    hero_badge_ua:'Enviado Especial UA', hero_badge_idf:'Fundador IDF', hero_badge_uno:'Comisiones ONU', hero_badge_cont:'3 Continentes',
    hero_caption_name:'Dr. Arsène Romaric TATSAZEU', hero_caption_role:'Embajador • Experto • Visionario',
    follow_me:'SEGUIRME', stat_exp:'Años de experiencia', stat_cont:'Continentes comprometidos', stat_missions:'Misiones internacionales', stat_dist:'Distinciones y reconocimientos',
    scroll_down:'Desplazar',
    stat_real:'Logros Importantes', stat_cont:'Continentes', stat_inst:'Instituciones Asociadas',
    about_eyebrow:'Biografía y Visión', about_title:'Un Diplomático al Servicio de la Paz Mundial',
    about_p1:'El Dr. Arsène Romaric TATSAZEU es un Embajador de estatura internacional, experto en Psicología Social y emprendedor visionario. Su trayectoria excepcional lo sitúa en la encrucijada de la diplomacia educativa, el desarrollo intercultural y la cooperación internacional en cuatro continentes (África, Europa, América Latina y Asia).',
    about_p2:'Como fundador de la International Diaspora Foundation (IDF) Latino-Africano, moviliza a la diáspora africana e hispana al servicio del desarrollo sostenible, la paz y la educación.',
    about_cta:'Explorar mi trabajo →',
    f_name:'Nombre Completo', f_role:'Rol Principal', f_domain:'Dominio', f_action:'Área de Acción',
    missions_eyebrow:'Compromiso Institucional', missions_title:'Misiones y Funciones',
    missions_sub:'Una presencia activa en las principales instituciones diplomáticas y humanitarias del mundo.',
    mission_web:'Sitio Web',
    real_eyebrow:'Prueba de Excelencia', real_title:'Realizaciones y Certificaciones',
    real_sub:'Nominaciones oficiales, certificados, publicaciones y reconocimientos institucionales.',
    filter_all:'Todos', filter_dip:'Diplomacia', filter_cert:'Certificados', filter_pub:'Publicaciones', filter_part:'Asociaciones',
    search_ph:'Buscar...',
    gal_eyebrow:'Momentos Diplomáticos', gal_title:'Galería de Fotos', gal_sub:'Conferencias, eventos, ceremonias y misiones en cuatro continentes.',
    vid_eyebrow:'Centro de Medios de Video', vid_title:'Discursos e Intervenciones', vid_sub:'Conferencias internacionales, entrevistas y presentaciones oficiales.',
    part_eyebrow:'Red Internacional', part_title:'Instituciones Asociadas',
    news_eyebrow:'Noticias y Comunicados', news_title:'Últimas Actividades',
    contact_eyebrow:'Póngase en Contacto', contact_title:'Trabajemos Juntos',
    contact_sub:'Disponible para misiones diplomáticas, conferencias, colaboraciones estratégicas y experiencia institucional.',
    contact_form_h:'Enviar un Mensaje',
    cf_name:'Su nombre completo', cf_email:'Su dirección de correo', cf_subject:'Asunto del mensaje', cf_message:'Su mensaje…',
    send_whatsapp:'Enviar vía WhatsApp', contact_linkedin:'Contactar en LinkedIn',
    view_pdf:'Ver PDF →', view_doc:'Ver Documento →', view_cert:'Ver Certificado →',
    no_results:'No se encontraron resultados.', loading_real:'Cargando realizaciones…', loading_gal:'Cargando galería…', loading_vid:'Cargando videos…', loading_news:'Cargando noticias…',
    footer_copy:'© 2026 Dr. Arsène Romaric TATSAZEU · Todos los derechos reservados', footer_home:'Inicio', footer_about:'Acerca de', footer_contact:'Contacto'
  },
  ar: {
    hero_eyebrow:'سفير · معلم · رائد أعمال',
    hero_subtitle:'سفير ومبعوث خاص — الدبلوماسية التعليمية والتعاون بين الثقافات (أفريقيا). دعم التنمية المستدامة في أوروبا وآسيا وأمريكا اللاتينية وأفريقيا من خلال التعليم والدبلوماسية والتعاون بين الثقافات.',
    hero_subtitle_mockup:'سفير ومبعوث خاص — الدبلوماسية التعليمية والتعاون بين الثقافات (أفريقيا). دعم التنمية المستدامة في أوروبا وآسيا وأمريكا اللاتينية وأفريقيا من خلال التعليم والدبلوماسية والتعاون بين الثقافات.',
    hero_cta_parcours:'عرض عملي', hero_cta_contact:'تواصل معي',
    hero_quote:'« التميز والنزاهة والالتزام في خدمة التنمية البشرية والسلام والتعاون الدولي. »',
    hero_badge_ua:'مبعوث خاص UA', hero_badge_idf:'مؤسس IDF', hero_badge_uno:'لجان الأمم المتحدة', hero_badge_cont:'3 قارات',
    hero_caption_name:'الدكتور أرسين روماريك تاتازو', hero_caption_role:'سفير • خبير • رؤيوي',
    follow_me:'تابعني', stat_exp:'سنوات الخبرة', stat_cont:'القارات المشاركة', stat_missions:'المهام الدولية', stat_dist:'التميز والاعترافات',
    scroll_down:'تمرير',
    stat_real:'الإنجازات الرئيسية', stat_cont:'القارات', stat_inst:'المؤسسات الشريكة',
    about_eyebrow:'السيرة الذاتية والرؤية', about_title:'دبلوماسي في خدمة السلام العالمي',
    about_p1:'الدكتور أرسين روماريك تاتازو هو سفير ذو مكانة دولية وخبير في علم النفس الاجتماعي ورائد أعمال ذو رؤية. مساره الاستثنائي يضعه عند تقاطع الدبلوماسية التعليمية والتنمية بين الثقافات والتعاون الدولي عبر أربع قارات (أفريقيا وأوروبا وأمريكا اللاتينية وآسيا).',
    about_p2:'بصفته مؤسس مؤسسة الشتات الدولية (IDF) اللاتينية الأفريقية، فهو يعمل على mobilizar الشتات الأفريقي والإسباني لخدمة التنمية المستدامة والسلام والتعليم.',
    about_cta:'استكشف عملي →',
    f_name:'الاسم الكامل', f_role:'الدور الرئيسي', f_domain:'المجال', f_action:'مجال العمل',
    missions_eyebrow:'الالتزام المؤسسي', missions_title:'المهام والوظائف',
    missions_sub:'حضور نشط في المؤسسات الدبلوماسية والإنسانية الرائدة في العالم.',
    mission_web:'الموقع الإلكتروني',
    real_eyebrow:'دليل على التميز', real_title:'الإنجازات والشهادات',
    real_sub:'الترشيحات الرسمية والشهادات والمنشورات والاعترافات المؤسسية.',
    filter_all:'الكل', filter_dip:'الدبلوماسية', filter_cert:'الشهادات', filter_pub:'المنشورات', filter_part:'الشراكات',
    search_ph:'بحث...',
    gal_eyebrow:'لحظات دبلوماسية', gal_title:'معرض الصور', gal_sub:'المؤتمرات والفعاليات والاحتفالات والمهام عبر أربع قارات.',
    vid_eyebrow:'مركز وسائط الفيديو', vid_title:'الخطب والتدخلات', vid_sub:'المؤتمرات الدولية والمقابلات والعروض التقديمية الرسمية.',
    part_eyebrow:'الشبكة الدولية', part_title:'المؤسسات الشريكة',
    news_eyebrow:'الأخبار والبيانات', news_title:'أحدث الأنشطة',
    contact_eyebrow:'التواصل', contact_title:'لنعمل معاً',
    contact_sub:'متاح للمهام الدبلوماسية والمؤتمرات والتعاون الاستراتيجي والخبرة المؤسسية.',
    contact_form_h:'إرسال رسالة',
    cf_name:'الاسم الكامل', cf_email:'عنوان البريد الإلكتروني', cf_subject:'موضوع الرسالة', cf_message:'رسالتك…',
    send_whatsapp:'إرسال عبر واتساب', contact_linkedin:'التواصل عبر لينكد إن',
    view_pdf:'عرض PDF →', view_doc:'عرض المستند →', view_cert:'عرض الشهادة →',
    no_results:'لم يتم العثور على نتائج.', loading_real:'جاري تحميل الإنجازات…', loading_gal:'جاري تحميل المعرض…', loading_vid:'جاري تحميل الفيديوهات…', loading_news:'جاري تحميل الأخبار…',
    footer_copy:'© 2026 الدكتور أرسين روماريك تاتازو · جميع الحقوق محفوظة', footer_home:'الرئيسية', footer_about:'حول', footer_contact:'اتصل'
  },
  zh: {
    hero_eyebrow:'大使 · 教育家 · 企业家',
    hero_subtitle:'大使和特使 — 教育外交与跨文化合作（非洲）。通过教育、外交和跨文化合作支持欧洲、亚洲、拉丁美洲和非洲的可持续发展。',
    hero_subtitle_mockup:'大使和特使 — 教育外交与跨文化合作（非洲）。通过教育、外交和跨文化合作支持欧洲、亚洲、拉丁美洲和非洲的可持续发展。',
    hero_cta_parcours:'查看我的工作', hero_cta_contact:'联系我',
    hero_quote:'« 为人类发展、和平与国际合作服务的卓越、诚信与承诺。 »',
    hero_badge_ua:'非盟特使', hero_badge_idf:'IDF创始人', hero_badge_uno:'联合国委员会', hero_badge_cont:'3大洲',
    hero_caption_name:'Arsène Romaric TATSAZEU 博士', hero_caption_role:'大使 • 专家 • 远见者',
    follow_me:'关注我', stat_exp:'经验年限', stat_cont:'参与大洲', stat_missions:'国际任务', stat_dist:'荣誉与认可',
    scroll_down:'滚动',
    stat_real:'主要成就', stat_cont:'大洲', stat_inst:'合作伙伴机构',
    about_eyebrow:'传记与愿景', about_title:'为世界和平服务的外交官',
    about_p1:'Arsène Romaric TATSAZEU 博士是具有国际地位的大使、社会心理学专家和有远见的企业家。他非凡的历程使他处于教育外交、跨文化发展和国际合作的十字路口，跨越四大洲（非洲、欧洲、拉丁美洲和亚洲）。',
    about_p2:'作为国际侨民基金会（IDF）拉美非洲分会的创始人，他动员非洲和西班牙裔侨民为可持续发展、和平和教育服务。',
    about_cta:'探索我的工作 →',
    f_name:'全名', f_role:'主要角色', f_domain:'领域', f_action:'行动领域',
    missions_eyebrow:'机构参与', missions_title:'任务与职能',
    missions_sub:'在世界领先的外交和人道主义机构中积极参与。',
    mission_web:'网站',
    real_eyebrow:'卓越证明', real_title:'成就与认证',
    real_sub:'官方提名、证书、出版物和机构认可。',
    filter_all:'全部', filter_dip:'外交', filter_cert:'证书', filter_pub:'出版物', filter_part:'伙伴关系',
    search_ph:'搜索...',
    gal_eyebrow:'外交时刻', gal_title:'照片画廊', gal_sub:'跨越四大洲的会议、活动、仪式和任务。',
    vid_eyebrow:'视频媒体中心', vid_title:'演讲与发言', vid_sub:'国际会议、采访和官方演示。',
    part_eyebrow:'国际网络', part_title:'合作伙伴机构',
    news_eyebrow:'新闻与公告', news_title:'最新活动',
    contact_eyebrow:'联系', contact_title:'让我们一起工作',
    contact_sub:'可提供外交任务、会议、战略合作和机构专业知识。',
    contact_form_h:'发送消息',
    cf_name:'您的全名', cf_email:'您的电子邮件地址', cf_subject:'消息主题', cf_message:'您的消息…',
    send_whatsapp:'通过WhatsApp发送', contact_linkedin:'在LinkedIn联系',
    view_pdf:'查看 PDF →', view_doc:'查看文档 →', view_cert:'查看证书 →',
    no_results:'未找到结果。', loading_real:'正在加载成就…', loading_gal:'正在加载画廊…', loading_vid:'正在加载视频…', loading_news:'正在加载新闻…',
    footer_copy:'© 2026 Arsène Romaric TATSAZEU 博士 · 版权所有', footer_home:'首页', footer_about:'关于', footer_contact:'联系'
  },
  ru: {
    hero_eyebrow:'Посол · Педагог · Предприниматель',
    hero_subtitle:'Посол и Специальный посланник — Образовательная дипломатия и межкультурное сотрудничество (Африка). Поддержка устойчивого развития в Европе, Азии, Латинской Америке и Африке через образование, дипломатию и межкультурное сотрудничество.',
    hero_subtitle_mockup:'Посол и Специальный посланник — Образовательная дипломатия и межкультурное сотрудничество (Африка). Поддержка устойчивого развития в Европе, Азии, Латинской Америке и Африке через образование, дипломатию и межкультурное сотрудничество.',
    hero_cta_parcours:'Посмотреть мою работу', hero_cta2:'Связаться со мной',
    hero_quote:'« Превосходство, честность и приверженность служению человеческому развитию, миру и международному сотрудничеству. »',
    hero_badge_ua:'Специальный посланник АС', hero_badge_idf:'Основатель IDF', hero_badge_uno:'Комиссии ООН', hero_badge_cont:'3 континента',
    hero_caption_name:'Доктор Арсен Ромарик Татазеу', hero_caption_role:'Посол • Эксперт • Визионер',
    follow_me:'ПОДПИСАТЬСЯ', stat_exp:'Лет опыта', stat_cont:'Задействованные континенты', stat_missions:'Международные миссии', stat_dist:'Отличия и признания',
    scroll_down:'Прокрутить',
    stat_real:'Крупные достижения', stat_cont:'Континенты', stat_inst:'Партнерские организации',
    about_eyebrow:'Биография и видение', about_title:'Дипломат на службе мирового мира',
    about_p1:'Доктор Арсен Ромарик Татазеу — посол международного масштаба, эксперт по социальной психологии и дальновидный предприниматель. Его исключительный путь ставит его на перекресток образовательной дипломатии, межкультурного развития и международного сотрудничества на четырех континентах (Африка, Европа, Латинская Америка и Азия).',
    about_p2:'Как основатель Международного фонда диаспоры (IDF) Латиноамериканско-Африканского, он мобилизует африканскую и испаноязычную диаспору на службу устойчивому развитию, миру и образованию.',
    about_cta:'Изучить мою работу →',
    f_name:'Полное имя', f_role:'Основная роль', f_domain:'Сфера', f_action:'Область деятельности',
    missions_eyebrow:'Институциональное участие', missions_title:'Миссии и функции',
    missions_sub:'Активное присутствие в ведущих дипломатических и гуманитарных учреждениях мира.',
    mission_web:'Веб-сайт',
    real_eyebrow:'Доказательство превосходства', real_title:'Достижения и сертификаты',
    real_sub:'Официальные номинации, сертификаты, публикации и институциональные признания.',
    filter_all:'Все', filter_dip:'Дипломатия', filter_cert:'Сертификаты', filter_pub:'Публикации', filter_part:'Партнерства',
    search_ph:'Поиск...',
    gal_eyebrow:'Дипломатические моменты', gal_title:'Фотогалерея', gal_sub:'Конференции, мероприятия, церемонии и миссии на четырех континентах.',
    vid_eyebrow:'Видеомедиа центр', vid_title:'Речи и выступления', vid_sub:'Международные конференции, интервью и официальные презентации.',
    part_eyebrow:'Международная сеть', part_title:'Партнерские организации',
    news_eyebrow:'Новости и пресс-релизы', news_title:'Последние действия',
    contact_eyebrow:'Связаться', contact_title:'Давайте работать вместе',
    contact_sub:'Доступен для дипломатических миссий, конференций, стратегического сотрудничества и институциональной экспертизы.',
    contact_form_h:'Отправить сообщение',
    cf_name:'Ваше полное имя', cf_email:'Ваш адрес электронной почты', cf_subject:'Тема сообщения', cf_message:'Ваше сообщение…',
    send_whatsapp:'Отправить через WhatsApp', contact_linkedin:'Связаться в LinkedIn',
    view_pdf:'Просмотреть PDF →', view_doc:'Просмотреть документ →', view_cert:'Просмотреть сертификат →',
    no_results:'Результаты не найдены.', loading_real:'Загрузка достижений…', loading_gal:'Загрузка галереи…', loading_vid:'Загрузка видео…', loading_news:'Загрузка новостей…',
    footer_copy:'© 2026 Доктор Арсен Ромарик Татазеу · Все права защищены', footer_home:'Главная', footer_about:'О нас', footer_contact:'Контакт'
  }
};

// ── Static Data (embedded instead of API) ───────────────────
const staticData = {
  realizations: [
    {
      "id": "1",
      "title": "Member of EACC Global Team — Special Envoy Education Diplomacy & Intercultural Cooperation (Africa)",
      "titleEn": "Member of EACC Global Team — Special Envoy Education Diplomacy & Intercultural Cooperation (Africa)",
      "description": "Membre officiel de l'équipe mondiale de l'Eurasia Afro Chamber of Commerce (EACC) et Envoyé Spécial pour la Diplomatie Éducative et la Coopération Interculturelle en Afrique.",
      "descriptionEn": "Official member of the Eurasia Afro Chamber of Commerce (EACC) Global Team and Special Envoy for Education Diplomacy & Intercultural Cooperation (Africa).",
      "category": "Diplomacy",
      "imageUrl": "uploads/realisations/images_of_16_image_of_16_Eurasia_Afro_Chamber_of_Commerce_personal_picture1.jpeg",
      "pdfUrl": "",
      "date": "2024",
      "featured": true
    },
    {
      "id": "2",
      "title": "Nomination Officielle EACC — Représentant auprès de l'Union Africaine (ESTI)",
      "titleEn": "Official EACC Nomination — Representative to the African Union (ESTI)",
      "description": "L'EACC annonce la nomination du Dr. Arsène Romaric TATSAZEU KENFACK comme représentant officiel auprès du Département de l'Éducation, des Sciences, de la Technologie et de l'Innovation (ESTI) de l'Union Africaine.",
      "descriptionEn": "EACC announces the nomination of Dr. Arsène Romaric TATSAZEU KENFACK as official External Observer within the African Union's ESTI framework.",
      "category": "Diplomacy",
      "imageUrl": "uploads/realisations/2_image_of_2_Diplomatic_Appointment_Announcement-uyIG7KI1xkW6R5eRgZn1ejhbKC5spy.jpg",
      "pdfUrl": "",
      "date": "2026",
      "featured": true
    },
    {
      "id": "3",
      "title": "Représentant HFF — Commission on the Status of Women (ONU)",
      "titleEn": "HFF Representative — Commission on the Status of Women (UN)",
      "description": "Représentation officielle de la Humanitarian Focus Foundation (HFF) lors de la Commission sur la Condition de la Femme des Nations Unies.",
      "descriptionEn": "Official representation of the Humanitarian Focus Foundation (HFF) at the United Nations Commission on the Status of Women.",
      "category": "Diplomacy",
      "imageUrl": "uploads/realisations/3_image_of_3_HFF_Representaive_at_Commission_on_the_status_of_women_-jLiAMpdOBC3U6JKZyxwCZs5mq5xuPn.jpg",
      "pdfUrl": "",
      "date": "2025",
      "featured": false
    },
    {
      "id": "4",
      "title": "Commission des Stupéfiants — Nations Unies (ECOSOC / CND), Vienne",
      "titleEn": "Commission on Narcotic Drugs — United Nations (ECOSOC / CND), Vienna",
      "description": "Participation officielle de l'IDF à la session de la Commission des Stupéfiants de l'ONU à Vienne (CND), représentée par le Dr. TATSAZEU. Listée dans les documents officiels de l'ONUDC.",
      "descriptionEn": "Official IDF participation at the UN Commission on Narcotic Drugs in Vienna (CND), represented by Dr. TATSAZEU. Listed in official UNODC documents.",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/Untitled.jpg",
      "pdfUrl": "",
      "date": "2025",
      "featured": false
    },
    {
      "id": "6",
      "title": "Publication : Resilience Partnerships and Global Realities",
      "titleEn": "Publication: Resilience Partnerships and Global Realities",
      "description": "Document stratégique sur les partenariats de résilience face aux réalités mondiales contemporaines.",
      "descriptionEn": "Strategic document on resilience partnerships in the face of contemporary global realities.",
      "category": "Publication",
      "imageUrl": "uploads/realisations/6_image_of_6_Resilience_partnerships_and_global_realities-D1qsWKiJO7azqOqwLPJ5MEYpDyqsWr.jpeg",
      "pdfUrl": "",
      "date": "2024",
      "featured": false
    },
    {
      "id": "7",
      "title": "Nomination : Directeur Régional",
      "titleEn": "Appointment: Regional Director",
      "description": "Acte officiel de nomination en tant que Directeur Régional, certifiant le leadership et les responsabilités institutionnelles.",
      "descriptionEn": "Official appointment as Regional Director, certifying leadership and institutional responsibilities.",
      "category": "Certificate",
      "imageUrl": "",
      "pdfUrl": "uploads/realisations/7_pdf_of_7_Arsene_Romaric_Tatsazeu_Kenfack_Regional_director_Appointment-okYYxTsiusefwYvlNv5xN9W3v3HK0R.pdf",
      "date": "2023",
      "featured": false
    },
    {
      "id": "8",
      "title": "Vision Statement — Développement Durable à travers l'Éducation et la Diplomatie",
      "titleEn": "Vision Statement — Sustainable Development through Education and Diplomacy",
      "description": "Déclaration de vision officielle du Dr. TATSAZEU pour soutenir le développement durable à travers l'Europe, l'Asie et l'Afrique via l'éducation, la diplomatie et la coopération interculturelle.",
      "descriptionEn": "Official vision statement by Dr. TATSAZEU to support sustainable development across Europe, Asia and Africa through education, diplomacy and intercultural cooperation.",
      "category": "Publication",
      "imageUrl": "uploads/realisations/8_image_of_8_Arsene_Romaric_TATSAZEU_KENFACK_vision_Statement_to_support_sustainable_development_-rG8yhVrMAwz93zTw5ogWz7JIAfErAQ.jpeg",
      "pdfUrl": "",
      "date": "2024",
      "featured": true
    },
    {
      "id": "9",
      "title": "Certificat de Nomination GOEDFA",
      "titleEn": "GOEDFA Certificate of Appointment",
      "description": "Certificat officiel de nomination délivré par le GOEDFA, attestant le rôle et les responsabilités confiés au Dr. TATSAZEU.",
      "descriptionEn": "Official certificate of appointment issued by GOEDFA, attesting to the role and responsibilities entrusted to Dr. TATSAZEU.",
      "category": "Certificate",
      "imageUrl": "uploads/realisations/9_image_of_9_GOEDFA_Certificate_of_Appointment-chqKV852FlkZLlXTcc0iHW5s0QRwV7.jpeg",
      "pdfUrl": "uploads/realisations/9_pdf_of_9_GOEDFA_Certificate_of_Appointment-0DZjkSliu3qUSAcmCn0N06By1cT3aK.pdf",
      "date": "2023",
      "featured": false
    },
    {
      "id": "10",
      "title": "Identification Diplomatique IGO — Accréditation Officielle",
      "titleEn": "IGO Diplomatic Identification — Official Accreditation",
      "description": "Identification diplomatique officielle délivrée par une Organisation Intergouvernementale (IGO), accréditation diplomatique de haut niveau.",
      "descriptionEn": "Official diplomatic identification issued by an Intergovernmental Organization (IGO), high-level diplomatic accreditation.",
      "category": "Certificate",
      "imageUrl": "uploads/realisations/10_image_of_10_IGO_diplomatic_identification_face-TbMWFDLjhiai405gohDyKS0WJWkzv0.png",
      "pdfUrl": "",
      "date": "2024",
      "featured": true
    },
    {
      "id": "11",
      "title": "Nomination au Comité Exécutif — CDECO",
      "titleEn": "Nomination to Executive Committee — CDECO",
      "description": "Nomination officielle du Dr. TATSAZEU en tant que Membre du Comité Exécutif de la Chambre de Diplomatie Économique du Congo (CDECO), renforçant son rôle de leadership institutionnel.",
      "descriptionEn": "Official nomination of Dr. TATSAZEU as Member of the Executive Committee of the Congo Economic Diplomacy Chamber (CDECO), strengthening his institutional leadership role.",
      "category": "Diplomacy",
      "imageUrl": "",
      "pdfUrl": "uploads/realisations/11_pdf_of_11_Nomination_Dr_ARSÈNE_ROMARIC_T_Membre_du_comite_execitif-1mybnoTr8KGEFcKYU18f7F7HPGE0IS.pdf",
      "date": "2026",
      "featured": false
    },
    {
      "id": "12",
      "title": "Acte de Nomination Officielle",
      "titleEn": "Official Appointment Letter",
      "description": "Lettre d'acte de nomination officielle adressée au Dr. Arsène Romaric TATSAZEU KENFACK, confirmant ses nouvelles responsabilités diplomatiques.",
      "descriptionEn": "Official appointment letter addressed to Dr. Arsène Romaric TATSAZEU KENFACK, confirming his new diplomatic responsibilities.",
      "category": "Certificate",
      "imageUrl": "",
      "pdfUrl": "uploads/realisations/12_pdf_of_12_Mr._Arsène_Romaric_Tatsazeu_Kenfack_Appointment-tThcB61K5YWJasVn83zSFrHQOhw74z.pdf",
      "date": "2024",
      "featured": false
    },
    {
      "id": "13",
      "title": "MOU — Gandhi Mandela Foundation & IDF",
      "titleEn": "MOU — Gandhi Mandela Foundation & IDF",
      "description": "Protocole d'accord (MOU) signé entre la Gandhi Mandela Foundation (GMF) et l'International Diaspora Foundation (IDF), sous la direction du Dr. TATSAZEU.",
      "descriptionEn": "Memorandum of Understanding (MOU) signed between the Gandhi Mandela Foundation (GMF) and the International Diaspora Foundation (IDF), under the leadership of Dr. TATSAZEU.",
      "category": "Partnership",
      "imageUrl": "",
      "pdfUrl": "uploads/realisations/13_pdf_of_13_MOU_-_GMF_and_IDF_-_Official_Announcement_-_March_2026-Cav6d2Ka0H1D6tL0TMf5dK9K2xLEaj.pdf",
      "date": "2026",
      "featured": true
    },
    {
      "id": "14",
      "title": "RICS ULI Mexico Summit 2016 — Certificado de Participación",
      "titleEn": "RICS ULI Mexico Summit 2016 — Certificate of Participation",
      "description": "Certificat de participation au RICS ULI Mexico Summit 2016, organisé par le Royal Institution of Chartered Surveyors et l'Urban Land Institute.",
      "descriptionEn": "Certificate of participation at the RICS ULI Mexico Summit 2016, organized by the Royal Institution of Chartered Surveyors and the Urban Land Institute.",
      "category": "Certificate",
      "imageUrl": "",
      "pdfUrl": "uploads/realisations/14_pdf_of_14_certificado-Arsene-Romanic-Tatsazeu-806jsvyZ5xSprBxsvSPCnvHl4yqTvr.pdf",
      "date": "2016",
      "featured": false
    },
    {
      "id": "15",
      "title": "Partenariat IDF — Landesverband Hamburg (Allemagne)",
      "titleEn": "IDF Partnership — Landesverband Hamburg (Germany)",
      "description": "Signature d'un accord de coopération entre l'IDF Latino-Africano et Landesverband Hamburg pour 2 ans, visant le développement social durable en Allemagne et à l'international.",
      "descriptionEn": "Signing of a cooperation agreement between IDF Latino-Africano and Landesverband Hamburg for 2 years, targeting sustainable social development in Germany and internationally.",
      "category": "Partnership",
      "imageUrl": "uploads/realisations/images_of_15_nouveau_partenariat_image_of_15_nouveau_partenariat0.jpeg",
      "pdfUrl": "",
      "date": "2025",
      "featured": false
    },
    {
      "id": "19",
      "title": "Publication : Propositions pour le Développement Durable et la Paix dans le Monde",
      "titleEn": "Publication: Proposals for Sustainable Development and World Peace",
      "description": "Document de recommandations stratégiques du Dr. TATSAZEU sur les voies du développement durable et de la consolidation de la paix mondiale.",
      "descriptionEn": "Strategic recommendations document by Dr. TATSAZEU on pathways to sustainable development and world peace consolidation.",
      "category": "Publication",
      "imageUrl": "",
      "pdfUrl": "uploads/realisations/19_image_of_19_PROPOSITIONS_POUR_LE_DEVELOPPEMENT_DURABLE_(Fr)-WzC6X3laEbthcXeUHNMeQSNVumfja7.pdf",
      "date": "2024",
      "featured": true
    },
    {
      "id": "22",
      "title": "Invitation Officielle — Global Peace Summit 2026",
      "titleEn": "Official Invitation — Global Peace Summit 2026",
      "description": "Invitation officielle adressée au Dr. TATSAZEU en tant que Délégué du Cameroun au Global Peace Summit 2026.",
      "descriptionEn": "Official invitation addressed to Dr. TATSAZEU as Delegate of Cameroon to the Global Peace Summit 2026.",
      "category": "Diplomacy",
      "imageUrl": "",
      "pdfUrl": "uploads/realisations/22_image_of_22_Invitacion_Arsene_Romaric_Tatsazeu_Kenfack_Delegado_Camerun-xzdmzprG5aCkbrYydPRz43h920qHxi.pdf",
      "date": "2026",
      "featured": true
    },
    {
      "id": "23",
      "title": "Certificat de Formation : Sensibilisation et Prévention de la Traite des Êtres Humains",
      "titleEn": "Training Certificate: Human Trafficking Awareness and Prevention",
      "description": "Certificat attestant de la réussite de la formation en ligne sur la sensibilisation et la prévention de la traite des êtres humains. Dispensée par l'IPPDR (Institute of Public Policy and Diplomacy Research) en collaboration avec le U.S. Homeland Security Investigation. Signé par S.E. l'Ambassadeur Dr. Andrise Bass.",
      "descriptionEn": "Certificate attesting to the successful completion of the online Human Trafficking Awareness and Prevention Training. Provided by the IPPDR (Institute of Public Policy and Diplomacy Research) in collaboration with U.S. Homeland Security Investigation. Signed by H.E. Ambassador Dr. Andrise Bass.",
      "category": "Certificate",
      "imageUrl": "uploads/realisations/new_certificate.jpeg",
      "pdfUrl": "",
      "date": "2026",
      "featured": true
    },
    {
      "id": "24",
      "title": "Bibimbap Festival — Foro Lindbergh, Parque México",
      "titleEn": "Bibimbap Festival — Foro Lindbergh, Parque México",
      "description": "Participation au Bibimbap Festival au Foro Lindbergh, Parque México, sur invitation du Conseil Consultatif pour la Réunification Pacifique de la Corée en Amérique Centrale et dans les Caraïbes. Cet événement culturel et sportif a réuni des représentants diplomatiques de plusieurs nations, dont la République tchèque, l'Afrique du Sud, la République de Corée et le Mexique.",
      "descriptionEn": "Attendance at the Bibimbap Festival at Foro Lindbergh, Parque México, following an invitation from the Advisory Council for the Peaceful Unification of Korea in Central America and the Caribbean. This cultural and sports gathering brought together diplomatic representatives from several nations, including the Czech Republic, South Africa, the Republic of Korea, and Mexico.",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/in2-image_2.jpg",
      "pdfUrl": "",
      "date": "2026",
      "featured": false
    },
    {
      "id": "25",
      "title": "Rencontre avec S.E. l'Ambassadeur de Corée du Sud au Mexique",
      "titleEn": "Meeting with H.E. the Ambassador of South Korea to Mexico",
      "description": "Rencontre avec Son Excellence Monsieur l'Ambassadeur JOOIL LEE, la Consul Madame EUNJIN LEE et la Présidente Municipale Madame Caroline Garduño.",
      "descriptionEn": "Meeting with His Excellency Ambassador JOOIL LEE, Consul Mrs. EUNJIN LEE, and Municipal President Mrs. Caroline Garduño.",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/in-image_1.jpg",
      "pdfUrl": "",
      "date": "2026",
      "featured": false
    },
    {
      "id": "26",
      "title": "Bibimbap Festival — Foro Lindbergh, Parque México",
      "titleEn": "Bibimbap Festival — Foro Lindbergh, Parque México",
      "description": "Participation au Bibimbap Festival au Foro Lindbergh, Parque México, sur invitation du Conseil Consultatif pour la Réunification Pacifique de la Corée en Amérique Centrale et dans les Caraïbes. Cet événement culturel et sportif a réuni des représentants diplomatiques de plusieurs nations, dans une atmosphère de paix, d'amitié et de solidarité.",
      "descriptionEn": "Attendance at the Bibimbap Festival at Foro Lindbergh, Parque México, following an invitation from the Advisory Council for the Peaceful Unification of Korea in Central America and the Caribbean. This cultural and sports gathering brought together diplomatic representatives from several nations in an atmosphere of peace, friendship, and solidarity.",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/in2-image_1.jpg",
      "pdfUrl": "",
      "date": "2026",
      "featured": false
    },
    {
      "id": "27",
      "title": "United Nations Genève — Réunion",
      "titleEn": "United Nations Geneva — Meeting",
      "description": "Réunion à l'Organisation des Nations Unies à Genève, Suisse.",
      "descriptionEn": "Meeting at the United Nations in Geneva, Switzerland.",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/Untitled.jpg",
      "pdfUrl": "",
      "date": "2026",
      "featured": false
    },
    {
      "id": "28",
      "title": "Ambassadeur des Diplomates Internationaux — Lettre de Nomination Officielle",
      "titleEn": "Ambassador of International Diplomats — Official Appointment Letter",
      "description": "Nomination officielle en tant qu'Ambassadeur des Diplomates Internationaux. Reconnaissance pour le leadership, les qualités de direction et l'engagement à avoir un impact positif.",
      "descriptionEn": "Official appointment as Ambassador of International Diplomats. Recognition for leadership qualities, dedication, and commitment to making a positive impact.",
      "category": "Diplomacy",
      "imageUrl": "",
      "pdfUrl": "uploads/realisations/Appointment Letter - Dr. Arsene Romaric .pdf",
      "date": "2026-06-05",
      "featured": true
    },
    {
      "id": "29",
      "title": "Participation à l'IGF Riyadh — Dialogue sur la Gouvernance de l'Internet",
      "titleEn": "IGF Riyadh Participation — Internet Governance Dialogue",
      "description": "Participation à l'Internet Governance Forum (IGF) à Riyadh, Arabie Saoudite. Dialogue international sur la gouvernance de l'Internet, la coopération numérique et le développement durable à l'ère du numérique.",
      "descriptionEn": "Participation in the Internet Governance Forum (IGF) in Riyadh, Saudi Arabia. International dialogue on Internet governance, digital cooperation and sustainable development in the digital age.",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/gallery_030_riyadh_IGF.jpeg",
      "pdfUrl": "",
      "date": "2026",
      "featured": true
    },
    {
      "id": "30",
      "title": "Réunion à l'Organisation des Nations Unies — Genève, Suisse",
      "titleEn": "Meeting at the United Nations — Geneva, Switzerland",
      "description": "Réunion diplomatique à l'Office des Nations Unies à Genève, Suisse. Participation aux travaux des commissions onusiennes et aux sessions de dialogue multilatéral.",
      "descriptionEn": "Diplomatic meeting at the United Nations Office in Geneva, Switzerland. Participation in UN commission work and multilateral dialogue sessions.",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/gallery_036_geneva_un.jpeg",
      "pdfUrl": "",
      "date": "2026",
      "featured": true
    },
    {
      "id": "31",
      "title": "Présence à l'Office des Nations Unies — Vienne, Autriche",
      "titleEn": "Presence at the United Nations Office — Vienna, Austria",
      "description": "Mission diplomatique à l'Office des Nations Unies à Vienne, Autriche. Engagement dans les sessions des commissions onusiennes et renforcement de la coopération internationale.",
      "descriptionEn": "Diplomatic mission to the United Nations Office in Vienna, Austria. Engagement in UN commission sessions and strengthening international cooperation.",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/gallery_048_vienna_un.jpeg",
      "pdfUrl": "",
      "date": "2026",
      "featured": true
    },
    {
      "id": "32",
      "title": "Interview — Vision sur la Paix dans le Monde",
      "titleEn": "Interview — Vision on World Peace",
      "description": "Interview exclusive sur la vision du Dr. TATSAZEU pour la paix mondiale, la diplomatie interculturelle et le développement durable à travers les continents.",
      "descriptionEn": "Exclusive interview on Dr. TATSAZEU's vision for world peace, intercultural diplomacy and sustainable development across continents.",
      "category": "Publication",
      "imageUrl": "uploads/photos/gallery_049_interview_paix.jpeg",
      "pdfUrl": "",
      "date": "2026",
      "featured": true
    },
    {
      "id": "33",
      "title": "Festival Culturel de Metepec 2026 — Coopération Culturelle Internationale",
      "titleEn": "Metepec Cultural Festival 2026 — International Cultural Cooperation",
      "description": "Réunion de travail avec les représentants du Centre Culturel de Metepec, État de Mexico, pour l'organisation du Festival Culturel Annuel (13-18 Octobre 2026). Promotion de l'art, du patrimoine et du dialogue interculturel comme pont entre les peuples.",
      "descriptionEn": "Working meeting with representatives of the Metepec Cultural Center, State of Mexico, for the organization of the Annual Cultural Festival (October 13-18, 2026). Promoting art, heritage and intercultural dialogue as a bridge between peoples.",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/gallery_054_metepec.jpg",
      "pdfUrl": "",
      "date": "2026",
      "featured": true
    },
    {
      "id": "34",
      "title": "Mission Diplomatique en Albanie — Réunion avec la Vice-Ministre de l'Éducation",
      "titleEn": "Diplomatic Mission in Albania — Meeting with Deputy Minister of Education",
      "description": "Mission diplomatique à Tirana, Albanie. Réunion de travail avec Madame Herida Duro, Vice-Ministre de l'Éducation, pour la préparation de la Formation Internationale sur le Protocole Diplomatique et la Lutte Contre la Traite des Êtres Humains (Novembre 2026).",
      "descriptionEn": "Diplomatic mission to Tirana, Albania. Working meeting with Mrs. Herida Duro, Deputy Minister of Education, for the preparation of the International Training on Diplomatic Protocol and the Fight Against Human Trafficking (November 2026).",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/gallery_057_albania.jpeg",
      "pdfUrl": "",
      "date": "2026",
      "featured": true
    },
    {
      "id": "35",
      "title": "Visite Officielle à la Municipalité de Viti, Kosovo — Renforcement de la Coopération Internationale",
      "titleEn": "Official Visit to the Municipality of Viti, Kosovo — Strengthening International Cooperation",
      "description": "Visite officielle au Kosovo, reçu par Monsieur Sokol Haliti, Maire de la Municipalité de Viti. Préparation du Forum Mondial de la Jeunesse pour la Paix dans le Monde (25-29 Août 2026, Viti, Kosovo). Élaboration de la Déclaration de Viti pour la Paix dans le Monde.",
      "descriptionEn": "Official visit to Kosovo, received by Mr. Sokol Haliti, Mayor of the Municipality of Viti. Preparation of the World Youth Forum for Peace in the World (August 25-29, 2026, Viti, Kosovo). Development of the Viti Declaration for World Peace.",
      "category": "Diplomacy",
      "imageUrl": "",
      "pdfUrl": "",
      "date": "2026",
      "featured": true
    }
  ],
  albums: [
    {
      "id": "default",
      "title": "Missions & Moments Diplomatiques",
      "description": "Conférences, événements et missions officielles sur trois continents.",
      "photos": [
        { "url": "uploads/photos/gallery_001_1.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_002_2.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_003_3.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_004_4.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_005_5.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_006_6.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_007_WhatsApp_Image_2026-05-16_at_18.02.40.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_008_WhatsApp_Image_2026-05-16_at_18.02.48.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_009_WhatsApp_Image_2026-05-16_at_18.02.49_1_.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_010_WhatsApp_Image_2026-05-16_at_18.02.49.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_011_WhatsApp_Image_2026-05-16_at_18.02.50.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_012_WhatsApp_Image_2026-05-16_at_18.03.03.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_013_WhatsApp_Image_2026-05-16_at_18.03.04_1_.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_014_WhatsApp_Image_2026-05-16_at_18.03.04.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_015_WhatsApp_Image_2026-05-16_at_18.03.05_1_.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_016_WhatsApp_Image_2026-05-16_at_18.03.05_2_.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_017_WhatsApp_Image_2026-05-16_at_18.03.05_3_.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_018_WhatsApp_Image_2026-05-16_at_18.03.05_4_.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_019_WhatsApp_Image_2026-05-16_at_18.03.05_5_.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_020_WhatsApp_Image_2026-05-16_at_18.03.05.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_021_WhatsApp_Image_2026-05-16_at_18.03.06.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_022_WhatsApp_Image_2026-05-16_at_18.09.36_1_.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_023_WhatsApp_Image_2026-05-16_at_18.09.36_2_.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_024_WhatsApp_Image_2026-05-16_at_18.09.36_3_.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_025_WhatsApp_Image_2026-05-16_at_18.09.36.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_026_WhatsApp_Image_2026-05-16_at_18.09.37.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_027_WhatsApp_Image_2026-05-16_at_18.09.38.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_028_e1.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_029_hero_new.jpeg", "caption": "" }
      ]
    },
    {
      "id": "korean-ambassador-meeting",
      "title": "Rencontre Ambassade de Corée du Sud — Mexique",
      "description": "Rencontre avec S.E. l'Ambassadeur JOOIL LEE, la Consul EUNJIN LEE et la Présidente Municipale Caroline Garduño.",
      "photos": [
        { "url": "uploads/photos/in-image_1.jpg", "caption": "" },
        { "url": "uploads/photos/in-image_2.jpg", "caption": "" },
        { "url": "uploads/photos/in-image_3.jpg", "caption": "" }
      ]
    },
    {
      "id": "bibimbap-festival-2026",
      "title": "Bibimbap Festival — Foro Lindbergh, Parque México",
      "description": "Participation au Bibimbap Festival au Foro Lindbergh, Parque México — intercultural dialogue et coopération entre nations.",
      "photos": [
        { "url": "uploads/photos/in2-image_1.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_2.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_3.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_4.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_5.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_6.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_7.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_8.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_9.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_10.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_11.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_12.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_13.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_14.jpg", "caption": "" },
        { "url": "uploads/photos/in2-image_15.jpg", "caption": "" }
      ]
    },
    {
      "id": "riyadh-igf-2026",
      "title": "Participation à l'IGF Riyadh — Arabie Saoudite",
      "description": "Dialogue international sur la gouvernance de l'Internet, la coopération numérique et le développement durable.",
      "photos": [
        { "url": "uploads/photos/gallery_030_riyadh_IGF.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_031_riyadh_IGF.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_032_riyadh_IGF.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_033_riyadh_IGF.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_034_riyadh_IGF.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_035_riyadh_IGF.jpeg", "caption": "" }
      ]
    },
    {
      "id": "geneva-un-2026",
      "title": "Réunion à l'ONU Genève — Suisse",
      "description": "Mission diplomatique à l'Office des Nations Unies à Genève. Participation aux commissions onusiennes.",
      "photos": [
        { "url": "uploads/photos/gallery_036_geneva_un.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_037_geneva_un.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_038_geneva_un.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_039_geneva_un.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_040_geneva_un.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_041_geneva_un.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_042_geneva_un.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_043_geneva_un.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_044_geneva_un.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_045_geneva_un.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_046_geneva_un.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_047_geneva_un.jpeg", "caption": "" }
      ]
    },
    {
      "id": "vienna-un-2026",
      "title": "Office des Nations Unies — Vienne, Autriche",
      "description": "Mission diplomatique à l'Office des Nations Unies à Vienne, Autriche.",
      "photos": [
        { "url": "uploads/photos/gallery_048_vienna_un.jpeg", "caption": "" }
      ]
    },
    {
      "id": "interview-paix-2026",
      "title": "Interview — Vision sur la Paix dans le Monde",
      "description": "Interview exclusive sur la paix mondiale, la diplomatie interculturelle et le développement durable.",
      "photos": [
        { "url": "uploads/photos/gallery_049_interview_paix.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_050_interview_paix.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_051_interview_paix.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_052_interview_paix.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_053_interview_paix.jpeg", "caption": "" }
      ]
    },
    {
      "id": "metepec-festival-2026",
      "title": "Festival Culturel de Metepec 2026 — Mexique",
      "description": "Réunion de travail pour l'organisation du Festival Culturel Annuel de Metepec. Promotion de l'art et du dialogue interculturel.",
      "photos": [
        { "url": "uploads/photos/gallery_054_metepec.jpg", "caption": "" },
        { "url": "uploads/photos/gallery_055_metepec.jpg", "caption": "" },
        { "url": "uploads/photos/gallery_056_metepec.jpg", "caption": "" }
      ]
    },
    {
      "id": "albania-mission-2026",
      "title": "Mission Diplomatique en Albanie — Tirana",
      "description": "Mission à Tirana avec la Vice-Ministre de l'Éducation pour la Formation Internationale sur le Protocole Diplomatique.",
      "photos": [
        { "url": "uploads/photos/gallery_057_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_058_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_059_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_060_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_061_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_062_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_063_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_064_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_065_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_066_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_067_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_068_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_069_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_070_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_071_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_072_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_073_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_074_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_075_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_076_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_077_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_078_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_079_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_080_albania.jpeg", "caption": "" },
        { "url": "uploads/photos/gallery_081_albania.jpeg", "caption": "" }
      ]
    }
  ],
  videos: [
    {
      "title": "Intervention Officielle — Discours",
      "description": "Dr. Arsène Romaric TATSAZEU",
      "url": "uploads/videos/video_01_1.mp4"
    },
    {
      "title": "Présentation Diplomatique",
      "description": "Dr. Arsène Romaric TATSAZEU",
      "url": "uploads/videos/video_02_2.mp4"
    },
    {
      "title": "Événement — Mai 2026",
      "description": "Dr. Arsène Romaric TATSAZEU",
      "url": "uploads/videos/video_03_WhatsApp_Video_2026-05-16_at_18.09.36.mp4"
    },
    {
      "title": "Conférence Internationale — Mai 2026",
      "description": "Dr. Arsène Romaric TATSAZEU",
      "url": "uploads/videos/video_04_WhatsApp_Video_2026-05-16_at_18.09.37.mp4"
    },
    {
      "title": "Intervention Diplomatique — Mai 2026",
      "description": "Dr. Arsène Romaric TATSAZEU",
      "url": "uploads/videos/video_05_WhatsApp_Video_2026-05-21_at_00.19.50_1_.mp4"
    },
    {
      "title": "Bibimbap Festival — Foro Lindbergh, Parque México",
      "description": "Dr. Arsène Romaric TATSAZEU — Festival culturel et diplomatique",
      "url": "uploads/videos/new_event1.mp4"
    },
    {
      "title": "Visite Officielle au Kosovo — Municipalité de Viti (1)",
      "description": "Dr. Arsène Romaric TATSAZEU — Visite officielle au Kosovo, reçu par le Maire Sokol Haliti",
      "url": "uploads/videos/video_06_kosovo_visit_1.mp4"
    },
    {
      "title": "Visite Officielle au Kosovo — Municipalité de Viti (2)",
      "description": "Dr. Arsène Romaric TATSAZEU — Renforcement de la coopération internationale pour la paix",
      "url": "uploads/videos/video_07_kosovo_visit_2.mp4"
    }
  ],
  news: [
    {
      "id": "1",
      "title": "Formation : Prévention de la traite des êtres humains",
      "content": "Le Dr. Arsène Romaric TATSAZEU a complété avec succès la formation en ligne sur la sensibilisation et la prévention de la traite des êtres humains. Dispensée par l'IPPDR en collaboration avec le U.S. Homeland Security Investigation.",
      "date": "2026-04-30"
    },
    {
      "id": "2",
      "title": "Bibimbap Festival — Foro Lindbergh, Parque México",
      "content": "Participation au Bibimbap Festival au Foro Lindbergh, Parque México, sur invitation du Conseil Consultatif pour la Réunification Pacifique de la Corée en Amérique Centrale et dans les Caraïbes. Événement culturel et sportif réunissant des représentants diplomatiques de plusieurs nations, dans une atmosphère de paix, d'amitié et de solidarité.",
      "date": "2026-05-30"
    },
    {
      "id": "3",
      "title": "Rencontre avec S.E. l'Ambassadeur de Corée du Sud au Mexique",
      "content": "Rencontre avec Son Excellence Monsieur l'Ambassadeur JOOIL LEE, la Consul Madame EUNJIN LEE et la Présidente Municipale Madame Caroline Garduño.",
      "date": "2026-05-30"
    },
    {
      "id": "4",
      "title": "United Nations Genève — Réunion",
      "content": "Réunion à l'Organisation des Nations Unies à Genève, Suisse.",
      "date": "2026-05-30"
    },
    {
      "id": "5",
      "title": "Nomination Officielle : Ambassadeur des Diplomates Internationaux",
      "content": "Le Dr. Arsène Romaric TATSAZEU a été officiellement nommé Ambassadeur des Diplomates Internationaux. Cette nomination reconnaît son leadership, ses qualités de direction et son engagement à avoir un impact positif. Lettre de nomination officielle reçue le 5 juin 2026.",
      "date": "2026-06-05"
    },
    {
      "id": "6",
      "title": "Mission Diplomatique en Albanie — Préparation de la Formation Internationale",
      "content": "Mission diplomatique à Tirana, Albanie. Réunion de travail avec Madame Herida Duro, Vice-Ministre de l'Éducation, pour la préparation de la Formation Internationale sur le Protocole Diplomatique et la Lutte Contre la Traite des Êtres Humains, qui se tiendra en Novembre 2026 à Tirana, sous le patronage du Ministère de l'Éducation.",
      "date": "2026"
    },
    {
      "id": "7",
      "title": "Visite Officielle au Kosovo — Forum Mondial de la Jeunesse pour la Paix",
      "content": "Visite officielle au Kosovo. Réunion avec Monsieur Sokol Haliti, Maire de la Municipalité de Viti, pour la préparation du Forum Mondial de la Jeunesse pour la Paix dans le Monde (25-29 Août 2026, Viti, Kosovo). Élaboration de la Déclaration de Viti pour la Paix dans le Monde, réunissant des délégations de plus de 80 pays.",
      "date": "2026"
    },
    {
      "id": "8",
      "title": "Festival Culturel de Metepec 2026 — Coopération Culturelle",
      "content": "Réunion de travail avec les représentants du Centre Culturel de Metepec, État de Mexico, pour l'organisation du Festival Culturel Annuel de Metepec (13-18 Octobre 2026). Le Dr. Arsène Romaric TATSAZEU a été honoré d'un cadeau symbolique par Madame Carolina Garduño, renforçant le rôle de la culture comme pont entre les peuples.",
      "date": "2026"
    },
    {
      "id": "9",
      "title": "Participation à l'IGF Riyadh — Gouvernance de l'Internet",
      "content": "Participation à l'Internet Governance Forum (IGF) à Riyadh, Arabie Saoudite. Dialogue international sur la gouvernance de l'Internet, la coopération numérique et le développement durable à l'ère du numérique, renforçant l'engagement diplomatique dans les forums technologiques mondiaux.",
      "date": "2026"
    },
    {
      "id": "10",
      "title": "Interview Exclusive — Vision sur la Paix dans le Monde",
      "content": "Interview exclusive du Dr. Arsène Romaric TATSAZEU sur sa vision pour la paix mondiale, la diplomatie interculturelle et le développement durable à travers l'Europe, l'Asie, l'Amérique Latine et l'Afrique.",
      "date": "2026"
    }
  ]
};

// ── Asset URL helper ──────────────────
function assetUrl(p) {
  if (!p) return '';
  if (p.startsWith('http') || p.startsWith('uploads/') || p.startsWith('/')) return p;
  return 'uploads/' + p;
}

// ── State ─────────────────────────────
let lang = localStorage.getItem('portfolioLang') || 'fr';
let theme = localStorage.getItem('portfolioTheme') || 'light';
const supportedLangs = ['fr', 'en', 'es', 'ar', 'zh', 'ru'];
const langNames = { fr:'FR', en:'EN', es:'ES', ar:'AR', zh:'ZH', ru:'RU' };
let allRealizations = [];
let allAlbums = [];
let allPhotos = [];
let allVideos = [];
let galleryIndex = 0;
let currentFilter = 'all';
let searchTerm = '';

// ── Init ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  applyLang();
  initNav();
  initHero();
  loadStaticData();
  initContact();
  initLightbox();
  initVideoModal();
});

// ── Load Static Data ───────────────────
function loadStaticData() {
  allRealizations = staticData.realizations;
  allAlbums = staticData.albums;
  allVideos = staticData.videos;
  
  // Flatten albums into allPhotos for lightbox
  allPhotos = [];
  allAlbums.forEach(album => {
    (album.photos || []).forEach(p => {
      allPhotos.push({ ...p, albumTitle: album.title });
    });
  });

  renderRealizations();
  renderGallery();
  renderVideos();
  renderNews(staticData.news);
  initFilters();
}

// ── Theme ─────────────────────────────
function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeBtn');
  if (btn) btn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}
function toggleTheme() {
  theme = theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('portfolioTheme', theme);
  applyTheme();
}

// ── Language ──────────────────────────
function applyLang() {
  document.documentElement.lang = lang;
  const langCode = document.getElementById('langCode');
  if (langCode) langCode.textContent = langNames[lang] || 'FR';
  // Update active state in dropdown
  document.querySelectorAll('.lang-dropdown button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Set direction for Arabic
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (i18n[lang] && i18n[lang][key]) el.placeholder = i18n[lang][key];
  });
  if (allRealizations.length) renderRealizations();
  if (allPhotos.length) renderGallery();
}
function changeLanguage(newLang) {
  if (supportedLangs.includes(newLang)) {
    lang = newLang;
    localStorage.setItem('portfolioLang', lang);
    applyLang();
    // Close dropdown after selection
    closeLangDropdown();
  }
}
function toggleLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  const btn = document.getElementById('langBtn');
  if (dropdown && btn) {
    const isOpen = dropdown.classList.contains('open');
    dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', !isOpen);
  }
}
function closeLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  const btn = document.getElementById('langBtn');
  if (dropdown) dropdown.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

// ── Nav ───────────────────────────────
function initNav() {
  document.getElementById('themeBtn')?.addEventListener('click', toggleTheme);
  document.getElementById('langBtn')?.addEventListener('click', toggleLangDropdown);
  document.querySelectorAll('.lang-dropdown button').forEach(btn => {
    btn.addEventListener('click', () => {
      changeLanguage(btn.dataset.lang);
    });
  });
  document.getElementById('burgerBtn')?.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const selector = document.querySelector('.lang-selector');
    if (selector && !selector.contains(e.target)) {
      closeLangDropdown();
    }
  });
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
    highlightNav();
  });
  document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });
}

function highlightNav() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll('#navLinks a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

// ── Hero ──────────────────────────────
function initHero() {
  // Parallax
  window.addEventListener('scroll', () => {
    const bg = document.getElementById('heroBg');
    if (bg && window.scrollY < window.innerHeight) {
      bg.style.transform = `scaleX(-1) translateY(${window.scrollY * 0.3}px)`;
    }
  });
}

// ── Realizations ──────────────────────
function renderRealizations() {
  const grid = document.getElementById('realizationsGrid');
  if (!grid) return;

  let items = allRealizations;
  if (currentFilter !== 'all') items = items.filter(r => r.category === currentFilter);
  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    items = items.filter(r =>
      (r.title || '').toLowerCase().includes(q) ||
      (r.description || '').toLowerCase().includes(q) ||
      (r.category || '').toLowerCase().includes(q)
    );
  }

  if (!items.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><p>${i18n[lang].no_results}</p></div>`;
    return;
  }

  grid.innerHTML = items.map(r => {
    const title = lang === 'en' && r.titleEn ? r.titleEn : r.title;
    const desc = lang === 'en' && r.descriptionEn ? r.descriptionEn : r.description;
    let imgHtml = '';
    const previewUrl = r.imageUrl || r.pdfUrl;
    if (previewUrl) {
      if (previewUrl.toLowerCase().endsWith('.pdf')) {
        // For PDFs, use iframe preview with fallback to icon
        imgHtml = `<iframe src="${assetUrl(previewUrl)}#toolbar=0&navpanes=0&scrollbar=0&view=FitH" style="width:100%; height:100%; border:none; pointer-events:none; overflow:hidden;" scrolling="no" tabindex="-1" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"></iframe>
        <div class="real-card-img-placeholder pdf-placeholder" style="display:none"><i class="fas fa-file-pdf"></i></div>`;
      } else {
        imgHtml = `<img src="${assetUrl(previewUrl)}" alt="${title}" loading="lazy">`;
      }
    } else {
      imgHtml = `<div class="real-card-img-placeholder">${getCategoryIcon(r.category)}</div>`;
    }
    // Add view button for both PDFs and images
    let viewLink = '';
    if (r.pdfUrl) {
      viewLink = `<a href="${assetUrl(r.pdfUrl)}" target="_blank" class="real-card-link" rel="noopener"><i class="fas fa-file-pdf"></i> ${i18n[lang].view_pdf}</a>`;
    } else if (r.imageUrl) {
      viewLink = `<a href="${assetUrl(r.imageUrl)}" target="_blank" class="real-card-link" rel="noopener"><i class="fas fa-image"></i> ${i18n[lang].view_doc}</a>`;
    }
    const yearBadge = r.date ? `<span class="tag"><i class="fas fa-calendar-alt"></i> ${r.date}</span>` : '';
    return `
      <article class="real-card fade-in">
        <div class="real-card-img">
          ${imgHtml}
          ${r.featured ? '<span class="real-card-featured">⭐ Featured</span>' : ''}
        </div>
        <div class="real-card-body">
          <span class="real-card-cat">${r.category || 'General'}</span>
          <h3 class="real-card-title">${title || ''}</h3>
          <p class="real-card-desc">${desc || ''}</p>
          <div class="real-card-footer">
            ${yearBadge}
            ${viewLink}
          </div>
        </div>
      </article>`;
  }).join('');
}

function getCategoryIcon(cat) {
  const icons = { Diplomacy:'<i class="fas fa-globe-africa"></i>', Certificate:'<i class="fas fa-certificate"></i>', Publication:'<i class="fas fa-book-open"></i>', Partnership:'<i class="fas fa-handshake"></i>', Award:'<i class="fas fa-award"></i>', General:'<i class="fas fa-file-alt"></i>' };
  return icons[cat] || '<i class="fas fa-file-alt"></i>';
}

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderRealizations();
    });
  });
  document.getElementById('searchInput')?.addEventListener('input', e => {
    searchTerm = e.target.value;
    renderRealizations();
  });
}

// ── Gallery ───────────────────────────
function renderGallery() {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  if (!allAlbums || !allAlbums.length) {
    container.innerHTML = '<div class="loading">Galerie non disponible.</div>';
    return;
  }

  container.className = 'albums-container';
  container.innerHTML = allAlbums.map((album, aIdx) => {
    if (!album.photos || !album.photos.length) return '';
    
    // Create stack of first 3 photos
    const stackPhotos = album.photos.slice(0, 3);
    const stackHtml = `
      <div id="stack-wrapper-${album.id}" class="album-stack-wrapper" onclick="openAlbum('${album.id}')">
        <div class="album-header mb-32">
          <h3 class="album-title">${album.title}</h3>
          <p class="album-desc">${album.description || ''}</p>
          <div class="album-line"></div>
        </div>
        <div class="album-stack">
          ${stackPhotos.map((p, i) => `
            <div class="album-stack-photo">
              <img src="${assetUrl(p.url)}" alt="">
            </div>
          `).join('')}
          <div class="album-stack-info">
            <i class="fas fa-images"></i> ${album.photos.length} photos
          </div>
        </div>
    `;

    return `
    <div class="album-section mt-80 fade-in">
      ${stackHtml}
    </div>`;
  }).join('');
}

function openAlbum(id) {
  const album = allAlbums.find(a => a.id === id);
  if (!album) return;

  const modal = document.getElementById('albumModal');
  const title = document.getElementById('modalAlbumTitle');
  const desc = document.getElementById('modalAlbumDesc');
  const grid = document.getElementById('modalAlbumGrid');

  title.textContent = album.title;
  desc.textContent = album.description || '';
  
  // Find global start index for lightbox
  let startIdx = 0;
  for (const a of allAlbums) {
    if (a.id === id) break;
    startIdx += (a.photos || []).length;
  }

  grid.innerHTML = (album.photos || []).map((p, i) => {
    const globalIdx = startIdx + i;
    return `
      <div class="gallery-item" onclick="openLightbox(${globalIdx})">
        <img src="${assetUrl(p.url)}" alt="${p.caption || ''}" loading="lazy">
        <div class="gallery-item-overlay"><span><i class="fas fa-search-plus"></i></span></div>
      </div>`;
  }).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('nav')?.classList.add('blurred-bg');
  document.querySelectorAll('section').forEach(s => {
    if (s.id !== 'gallery') s.classList.add('blurred-bg');
  });
}

function closeAlbum() {
  const modal = document.getElementById('albumModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
  document.querySelectorAll('.blurred-bg').forEach(el => el.classList.remove('blurred-bg'));
}

// ── Videos ────────────────────────────
function renderVideos() {
  const grid = document.getElementById('videoGrid');
  if (!grid) return;

  if (!allVideos.length) {
    grid.innerHTML = '<div class="loading" style="color:rgba(255,255,255,.4)">Vidéos non disponibles.</div>';
    return;
  }

  grid.innerHTML = allVideos.map(v => {
    const vUrl = assetUrl(v.url);
    return `
    <div class="video-card">
      <div class="video-thumb" onclick="openVideo('${vUrl}')">
        ${!vUrl.startsWith('http') ? `<video src="${vUrl}" preload="metadata"></video>` : '<div style="background:var(--navy-mid); height:100%"></div>'}`
        + `<div class="video-play-btn"><span><i class="fas fa-play"></i></span></div>
      </div>
      <div class="video-card-body">
        <h3 class="video-card-title">${v.title}</h3>
        <p class="video-card-desc">${v.description || ''}</p>
      </div>
    </div>`;
  }).join('');
}

// ── News ──────────────────────────────
function renderNews(items) {
  const list = document.getElementById('newsList');
  if (!list) return;
  if (!items.length) {
    list.innerHTML = '<div class="loading">Aucune actualité disponible.</div>';
    return;
  }
  list.innerHTML = items.slice(0, 8).map(n => {
    const d = new Date(n.date || Date.now());
    return `
      <article class="news-item">
        <div class="news-date">
          <div class="news-date-day">${String(d.getDate()).padStart(2,'0')}</div>
          <div class="news-date-month">${d.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US', {month:'short'}).toUpperCase()}</div>
          <div class="news-date-year">${d.getFullYear()}</div>
        </div>
        <div>
          <h3 class="news-title">${n.title}</h3>
          <p class="news-content">${(n.content || '').substring(0, 280)}${n.content?.length > 280 ? '…' : ''}</p>
        </div>
      </article>`;
  }).join('');
}

// ── Lightbox ──────────────────────────
function initLightbox() {
  document.getElementById('lbClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox')?.addEventListener('click', e => {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
  });
  document.getElementById('lbPrev')?.addEventListener('click', () => {
    galleryIndex = (galleryIndex - 1 + allPhotos.length) % allPhotos.length;
    updateLightbox();
  });
  document.getElementById('lbNext')?.addEventListener('click', () => {
    galleryIndex = (galleryIndex + 1) % allPhotos.length;
    updateLightbox();
  });
  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
  });
}
function openLightbox(i) {
  galleryIndex = i;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function updateLightbox() {
  const p = allPhotos[galleryIndex];
  if (!p) return;
  document.getElementById('lbImg').src = assetUrl(p.url);
  document.getElementById('lbImg').alt = p.caption || 'Photo';
}

// ── Video Modal ───────────────────────
function initVideoModal() {
  document.getElementById('vmClose')?.addEventListener('click', closeVideo);
  document.getElementById('videoModal')?.addEventListener('click', e => {
    if (e.target === document.getElementById('videoModal')) closeVideo();
  });
}
function openVideo(url) {
  const vid = document.getElementById('vmVideo');
  vid.src = url;
  vid.play();
  document.getElementById('videoModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeVideo() {
  const vid = document.getElementById('vmVideo');
  vid.pause(); vid.src = '';
  document.getElementById('videoModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Contact form → WhatsApp ───────────
function initContact() {
  document.getElementById('sendWhatsApp')?.addEventListener('click', e => {
    e.preventDefault();
    const name = document.getElementById('cf-name')?.value || '';
    const email = document.getElementById('cf-email')?.value || '';
    const subject = document.getElementById('cf-subject')?.value || '';
    const msg = document.getElementById('cf-message')?.value || '';
    const text = `Bonjour Dr. TATSAZEU,\n\n*Nom:* ${name}\n*Email:* ${email}\n*Sujet:* ${subject}\n\n${msg}`;
    window.open(`https://wa.me/32467889716?text=${encodeURIComponent(text)}`, '_blank');
  });
}
