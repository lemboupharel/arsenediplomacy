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
    footer_copy:'© 2026 Dr. Arsène Romaric TATSAZEU · Tous droits réservés', footer_home:'Accueil', footer_about:'Parcours', footer_contact:'Contact',
    featured:'En vedette', photos_count:'{n} photos', empty_gallery:'Galerie non disponible.', empty_videos:'Vidéos non disponibles.', empty_news:'Aucune actualité disponible.', cat_general:'Général'
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
    footer_copy:'© 2026 Dr. Arsène Romaric TATSAZEU · All rights reserved', footer_home:'Home', footer_about:'About', footer_contact:'Contact',
    featured:'Featured', photos_count:'{n} photos', empty_gallery:'Gallery not available.', empty_videos:'Videos not available.', empty_news:'No news available.', cat_general:'General'
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
    footer_copy:'© 2026 Dr. Arsène Romaric TATSAZEU · Todos los derechos reservados', footer_home:'Inicio', footer_about:'Acerca de', footer_contact:'Contacto',
    featured:'Destacado', photos_count:'{n} fotos', empty_gallery:'Galería no disponible.', empty_videos:'Videos no disponibles.', empty_news:'No hay noticias disponibles.', cat_general:'General'
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
    footer_copy:'© 2026 الدكتور أرسين روماريك تاتازو · جميع الحقوق محفوظة', footer_home:'الرئيسية', footer_about:'حول', footer_contact:'اتصل',
    featured:'مميز', photos_count:'{n} صورة', empty_gallery:'المعرض غير متاح.', empty_videos:'الفيديوهات غير متاحة.', empty_news:'لا توجد أخبار متاحة.', cat_general:'عام'
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
    footer_copy:'© 2026 Arsène Romaric TATSAZEU 博士 · 版权所有', footer_home:'首页', footer_about:'关于', footer_contact:'联系',
    featured:'精选', photos_count:'{n} 张照片', empty_gallery:'画廊不可用。', empty_videos:'视频不可用。', empty_news:'暂无新闻。', cat_general:'综合'
  },
  ru: {
    hero_eyebrow:'Посол · Педагог · Предприниматель',
    hero_subtitle:'Посол и Специальный посланник — Образовательная дипломатия и межкультурное сотрудничество (Африка). Поддержка устойчивого развития в Европе, Азии, Латинской Америке и Африке через образование, дипломатию и межкультурное сотрудничество.',
    hero_subtitle_mockup:'Посол и Специальный посланник — Образовательная дипломатия и межкультурное сотрудничество (Африка). Поддержка устойчивого развития в Европе, Азии, Латинской Америке и Африке через образование, дипломатию и межкультурное сотрудничество.',
    hero_cta_parcours:'Посмотреть мою работу', hero_cta_contact:'Связаться со мной',
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
    footer_copy:'© 2026 Доктор Арсен Ромарик Татазеу · Все права защищены', footer_home:'Главная', footer_about:'О нас', footer_contact:'Контакт',
    featured:'Избранное', photos_count:'{n} фото', empty_gallery:'Галерея недоступна.', empty_videos:'Видео недоступны.', empty_news:'Новостей нет.', cat_general:'Общее'
  }
};

// ── Static Data (embedded instead of API) ───────────────────
const staticData = {
  "realizations": [
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
      "date": "2026-06-19",
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
      "date": "2026-06-21",
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
      "date": "2026-06-17",
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
      "date": "2026-06-23",
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
      "date": "2026-06-20",
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
      "date": "2026-06-22",
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
      "date": "2026-06-16",
      "featured": true
    },
    {
      "id": "36",
      "title": "Délégation Camerounaise en route pour le Kosovo 2026",
      "titleEn": "Cameroonian Delegation en route for Kosovo 2026",
      "description": "Délégation camerounaise en route pour le Kosovo afin de participer aux missions diplomatiques et forums internationaux 2026.",
      "descriptionEn": "Cameroonian delegation en route for Kosovo to take part in diplomatic missions and international forums in 2026.",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/gallery_082_kosovo_delegation.jpeg",
      "pdfUrl": "",
      "date": "2026-08-24",
      "featured": false
    },
    {
      "id": "37",
      "title": "Distinction Spéciale du Maire de la Ville de Viti — Kosovo",
      "titleEn": "Special Distinction from the Mayor of the City of Viti — Kosovo",
      "description": "Remise d'une distinction spéciale à l'Ambassadeur Arsène TATSAZEU par Monsieur Sokol Haliti, Maire de la ville de Viti, au Kosovo.",
      "descriptionEn": "Special distinction presented to Ambassador Arsène TATSAZEU by Mr. Sokol Haliti, Mayor of the city of Viti, in Kosovo.",
      "category": "Certificate",
      "imageUrl": "uploads/photos/gallery_087_viti_mayor.jpeg",
      "pdfUrl": "",
      "date": "2026-08-27",
      "featured": true
    },
    {
      "id": "38",
      "title": "Bref échange avec S.E. la Présidente de la République du Kosovo — Dr Vjosa Osmani",
      "titleEn": "Brief Exchange with H.E. the President of the Republic of Kosovo — Dr Vjosa Osmani",
      "description": "Bref échange entre l'Ambassadeur Arsène TATSAZEU et Son Excellence Madame la Présidente de la République du Kosovo, Dr Vjosa Osmani, lors de sa visite officielle au Kosovo.",
      "descriptionEn": "Brief exchange between Ambassador Arsène TATSAZEU and Her Excellency Dr Vjosa Osmani, President of the Republic of Kosovo, during his official visit to Kosovo.",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/gallery_094_kosovo_president.jpeg",
      "pdfUrl": "",
      "date": "2026-08-28",
      "featured": true
    },
    {
      "id": "39",
      "title": "World Peace Forum in Kosovo — Viti, 25–29 Août 2026",
      "titleEn": "World Peace Forum in Kosovo — Viti, August 25–29, 2026",
      "description": "Du 25 au 29 août 2026, l'Ambassadeur Dr. Arsène TATSAZEU a activement contribué à l'organisation du World Peace Forum à Viti, Kosovo. L'événement a réuni des jeunes de différents pays, des diplomates et des leaders engagés pour la paix, la stabilité et le développement durable. Les discussions ont abouti à l'établissement d'une Déclaration destinée aux Nations Unies. L'Ambassadeur y a reçu une distinction honorifique de la Municipalité de Viti, en présence de nombreux diplomates et de la Présidente de la République du Kosovo.",
      "descriptionEn": "From August 25 to 29, 2026, Ambassador Dr. Arsène TATSAZEU actively contributed to the organization of the World Peace Forum in Viti, Kosovo. The event brought together young people from different countries, diplomats and leaders committed to peace, stability and sustainable development. Discussions led to the preparation of a Declaration intended to be submitted to the United Nations. The Ambassador received an honorary distinction from the Municipality of Viti, in the presence of numerous diplomats and the President of the Republic of Kosovo.",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/gallery_110_world_peace_forum.jpeg",
      "pdfUrl": "",
      "date": "2026-08-29",
      "featured": true
    },
    {
      "id": "40",
      "title": "Conférence avec le Secrétariat des Relations Extérieures du Mexique — Coopération Internationale & Immigration",
      "titleEn": "Conference with the Mexican Secretariat of Foreign Affairs — International Cooperation & Immigration",
      "description": "Conférence sur la coopération internationale et l'immigration organisée avec le Secrétariat des Relations Extérieures du Mexique. Bref dialogue avec la sénatrice Karina Isabel Ruiz après l'événement.",
      "descriptionEn": "Conference on international cooperation and immigration held with the Mexican Secretariat of Foreign Affairs. Brief dialogue with Senator Karina Isabel Ruiz after the event.",
      "category": "Diplomacy",
      "imageUrl": "uploads/photos/gallery_175_mexico_sre.jpeg",
      "pdfUrl": "",
      "date": "2026-07-15",
      "featured": false
    },
    {
      "id": "41",
      "title": "Invitation Officielle — Primer Foro Internacional en Michoacán « Cambiando la Narrativa »",
      "titleEn": "Official Invitation — First International Forum in Michoacán “Changing the Narrative”",
      "description": "Invitation officielle de la CONAPRESU (Coalición Internacional, Nacional y Estatal de Prevención del Suicidio) à participer au Primer Foro Internacional en Michoacán, le 18 septembre 2026 à l'Universidad Don Vasco, Uruapan, Michoacán, Mexique. Thème : promotion de la santé mentale et prévention du suicide.",
      "descriptionEn": "Official invitation from CONAPRESU (International, National and State Coalition for Suicide Prevention) to participate in the First International Forum in Michoacán, on September 18, 2026 at Universidad Don Vasco, Uruapan, Michoacán, Mexico. Theme: mental health promotion and suicide prevention.",
      "category": "Diplomacy",
      "imageUrl": "",
      "pdfUrl": "uploads/realisations/41_invitacion_conapresu_michoacan.pdf",
      "date": "2026-09-18",
      "featured": true
    }
  ],
  "albums": [
    {
      "id": "default",
      "title": "Missions & Moments Diplomatiques",
      "titleEn": "Diplomatic Missions & Moments",
      "descriptionEn": "Conferences, events and official missions across three continents.",
      "titleEs": "Misiones y Momentos Diplomáticos",
      "descriptionEs": "Conferencias, eventos y misiones oficiales en tres continentes.",
      "titleAr": "المهام واللحظات الدبلوماسية",
      "descriptionAr": "مؤتمرات وأحداث ومهام رسمية عبر ثلاث قارات.",
      "titleZh": "外交使命与时刻",
      "descriptionZh": "横跨三大洲的会议、活动与正式访问。",
      "titleRu": "Дипломатические миссии и моменты",
      "descriptionRu": "Конференции, события и официальные миссии на трёх континентах.",
      "description": "Conférences, événements et missions officielles sur trois continents.",
      "date": "2026-05-16",
      "photos": [
        {
          "url": "uploads/photos/gallery_001_1.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_002_2.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_003_3.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_004_4.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_005_5.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_006_6.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_007_WhatsApp_Image_2026-05-16_at_18.02.40.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_008_WhatsApp_Image_2026-05-16_at_18.02.48.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_009_WhatsApp_Image_2026-05-16_at_18.02.49_1_.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_010_WhatsApp_Image_2026-05-16_at_18.02.49.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_011_WhatsApp_Image_2026-05-16_at_18.02.50.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_012_WhatsApp_Image_2026-05-16_at_18.03.03.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_013_WhatsApp_Image_2026-05-16_at_18.03.04_1_.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_014_WhatsApp_Image_2026-05-16_at_18.03.04.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_015_WhatsApp_Image_2026-05-16_at_18.03.05_1_.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_016_WhatsApp_Image_2026-05-16_at_18.03.05_2_.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_017_WhatsApp_Image_2026-05-16_at_18.03.05_3_.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_018_WhatsApp_Image_2026-05-16_at_18.03.05_4_.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_019_WhatsApp_Image_2026-05-16_at_18.03.05_5_.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_020_WhatsApp_Image_2026-05-16_at_18.03.05.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_021_WhatsApp_Image_2026-05-16_at_18.03.06.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_022_WhatsApp_Image_2026-05-16_at_18.09.36_1_.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_023_WhatsApp_Image_2026-05-16_at_18.09.36_2_.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_024_WhatsApp_Image_2026-05-16_at_18.09.36_3_.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_025_WhatsApp_Image_2026-05-16_at_18.09.36.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_026_WhatsApp_Image_2026-05-16_at_18.09.37.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_027_WhatsApp_Image_2026-05-16_at_18.09.38.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_028_e1.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_029_hero_new.jpeg",
          "caption": ""
        }
      ]
    },
    {
      "id": "korean-ambassador-meeting",
      "title": "Rencontre Ambassade de Corée du Sud — Mexique",
      "titleEn": "Meeting with the Embassy of South Korea — Mexico",
      "descriptionEn": "Meeting with H.E. Ambassador JOOIL LEE, Consul EUNJIN LEE and Municipal President Caroline Garduño.",
      "titleEs": "Reunión con la Embajada de Corea del Sur — México",
      "descriptionEs": "Reunión con S.E. el Embajador JOOIL LEE, la Cónsul EUNJIN LEE y la Presidenta Municipal Caroline Garduño.",
      "titleAr": "لقاء مع سفارة كوريا الجنوبية — المكسيك",
      "descriptionAr": "لقاء مع سعادة السفير جو إيل لي، القنصل إون جين لي والرئيسة البلدية كارولينا غاردونيو.",
      "titleZh": "会见韩国驻墨西哥大使馆",
      "descriptionZh": "会见JOOIL LEE大使阁下、领事EUNJIN LEE及市长Caroline Garduño。",
      "titleRu": "Встреча с Посольством Республики Корея — Мексика",
      "descriptionRu": "Встреча с Его Превосходительством послом JOOIL LEE, консулом EUNJIN LEE и муниципальным президентом Caroline Garduño.",
      "description": "Rencontre avec S.E. l'Ambassadeur JOOIL LEE, la Consul EUNJIN LEE et la Présidente Municipale Caroline Garduño.",
      "date": "2026-05-30",
      "photos": [
        {
          "url": "uploads/photos/in-image_1.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in-image_2.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in-image_3.jpg",
          "caption": ""
        }
      ]
    },
    {
      "id": "bibimbap-festival-2026",
      "title": "Bibimbap Festival — Foro Lindbergh, Parque México",
      "titleEn": "Bibimbap Festival — Foro Lindbergh, Parque México",
      "descriptionEn": "Participation in the Bibimbap Festival at Foro Lindbergh, Parque México — intercultural dialogue and cooperation between nations.",
      "titleEs": "Festival Bibimbap — Foro Lindbergh, Parque México",
      "descriptionEs": "Participación en el Festival Bibimbap en el Foro Lindbergh, Parque México — diálogo intercultural y cooperación entre naciones.",
      "titleAr": "مهرجان بيبيمباب — فورو ليندبرغ، باركي ميكسيكو",
      "descriptionAr": "المشاركة في مهرجان بيبيمباب في فورو ليندبرغ، باركي ميكسيكو — حوار بين الثقافات وتعاون بين الأمم.",
      "titleZh": "拌饭节 — Lindbergh论坛，墨西哥公园",
      "descriptionZh": "参加在墨西哥公园Lindbergh论坛举办的拌饭节 — 跨文化对话与国际合作。",
      "titleRu": "Фестиваль Бибимбап — Foro Lindbergh, Parque México",
      "descriptionRu": "Участие в фестивале Бибимбап в Foro Lindbergh, Parque México — межкультурный диалог и сотрудничество между народами.",
      "description": "Participation au Bibimbap Festival au Foro Lindbergh, Parque México — intercultural dialogue et coopération entre nations.",
      "date": "2026-05-30",
      "photos": [
        {
          "url": "uploads/photos/in2-image_1.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_2.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_3.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_4.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_5.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_6.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_7.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_8.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_9.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_10.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_11.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_12.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_13.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_14.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/in2-image_15.jpg",
          "caption": ""
        }
      ]
    },
    {
      "id": "riyadh-igf-2026",
      "title": "Participation à l'IGF Riyadh — Arabie Saoudite",
      "titleEn": "Participation in IGF Riyadh — Saudi Arabia",
      "descriptionEn": "International dialogue on Internet governance, digital cooperation and sustainable development.",
      "titleEs": "Participación en el IGF Riyadh — Arabia Saudita",
      "descriptionEs": "Diálogo internacional sobre gobernanza de Internet, cooperación digital y desarrollo sostenible.",
      "titleAr": "المشاركة في منتدى حوكمة الإنترنت — الرياض",
      "descriptionAr": "حوار دولي حول حوكمة الإنترنت والتعاون الرقمي والتنمية المستدامة.",
      "titleZh": "参加利雅得互联网治理论坛 — 沙特阿拉伯",
      "descriptionZh": "围绕互联网治理、数字合作与可持续发展的国际对话。",
      "titleRu": "Участие в IGF Эр-Рияд — Саудовская Аравия",
      "descriptionRu": "Международный диалог об управлении Интернетом, цифровом сотрудничестве и устойчивом развитии.",
      "description": "Dialogue international sur la gouvernance de l'Internet, la coopération numérique et le développement durable.",
      "date": "2026-06-19",
      "photos": [
        {
          "url": "uploads/photos/gallery_030_riyadh_IGF.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_031_riyadh_IGF.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_032_riyadh_IGF.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_033_riyadh_IGF.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_034_riyadh_IGF.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_035_riyadh_IGF.jpeg",
          "caption": ""
        }
      ]
    },
    {
      "id": "geneva-un-2026",
      "title": "Réunion à l'ONU Genève — Suisse",
      "titleEn": "Meeting at UN Geneva — Switzerland",
      "descriptionEn": "Diplomatic mission to the United Nations Office in Geneva. Participation in UN commissions.",
      "titleEs": "Reunión en la ONU Ginebra — Suiza",
      "descriptionEs": "Misión diplomática a la Oficina de las Naciones Unidas en Ginebra. Participación en comisiones de la ONU.",
      "titleAr": "اجتماع في الأمم المتحدة جنيف — سويسرا",
      "descriptionAr": "مهمة دبلوماسية إلى مكتب الأمم المتحدة في جنيف. المشاركة في لجان الأمم المتحدة.",
      "titleZh": "联合国日内瓦会议 — 瑞士",
      "descriptionZh": "对联合国日内瓦办事处的外交访问，参加联合国各委员会。",
      "titleRu": "Встреча в ООН Женева — Швейцария",
      "descriptionRu": "Дипломатическая миссия в офис ООН в Женеве. Участие в комиссиях ООН.",
      "description": "Mission diplomatique à l'Office des Nations Unies à Genève. Participation aux commissions onusiennes.",
      "date": "2026-06-21",
      "photos": [
        {
          "url": "uploads/photos/gallery_036_geneva_un.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_037_geneva_un.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_038_geneva_un.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_039_geneva_un.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_040_geneva_un.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_041_geneva_un.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_042_geneva_un.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_043_geneva_un.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_044_geneva_un.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_045_geneva_un.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_046_geneva_un.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_047_geneva_un.jpeg",
          "caption": ""
        }
      ]
    },
    {
      "id": "vienna-un-2026",
      "title": "Office des Nations Unies — Vienne, Autriche",
      "titleEn": "United Nations Office — Vienna, Austria",
      "descriptionEn": "Diplomatic mission to the United Nations Office in Vienna, Austria.",
      "titleEs": "Oficina de las Naciones Unidas — Viena, Austria",
      "descriptionEs": "Misión diplomática a la Oficina de las Naciones Unidas en Viena, Austria.",
      "titleAr": "مكتب الأمم المتحدة — فيينا، النمسا",
      "descriptionAr": "مهمة دبلوماسية إلى مكتب الأمم المتحدة في فيينا، النمسا.",
      "titleZh": "联合国办事处 — 奥地利维也纳",
      "descriptionZh": "对奥地利维也纳联合国办事处的外交访问。",
      "titleRu": "Офис Организации Объединённых Наций — Вена, Австрия",
      "descriptionRu": "Дипломатическая миссия в офис ООН в Вене, Австрия.",
      "description": "Mission diplomatique à l'Office des Nations Unies à Vienne, Autriche.",
      "date": "2026-06-17",
      "photos": [
        {
          "url": "uploads/photos/gallery_048_vienna_un.jpeg",
          "caption": ""
        }
      ]
    },
    {
      "id": "interview-paix-2026",
      "title": "Interview — Vision sur la Paix dans le Monde",
      "titleEn": "Interview — Vision for World Peace",
      "descriptionEn": "Exclusive interview on world peace, intercultural diplomacy and sustainable development.",
      "titleEs": "Entrevista — Visión sobre la Paz Mundial",
      "descriptionEs": "Entrevista exclusiva sobre la paz mundial, la diplomacia intercultural y el desarrollo sostenible.",
      "titleAr": "حوار — رؤية للسلام العالمي",
      "descriptionAr": "حوار حصري حول السلام العالمي والدبلوماسية بين الثقافات والتنمية المستدامة.",
      "titleZh": "访谈 — 世界和平愿景",
      "descriptionZh": "关于世界和平、跨文化外交与可持续发展的独家访谈。",
      "titleRu": "Интервью — видение мирового мира",
      "descriptionRu": "Эксклюзивное интервью о мировом мире, межкультурной дипломатии и устойчивом развитии.",
      "description": "Interview exclusive sur la paix mondiale, la diplomatie interculturelle et le développement durable.",
      "date": "2026-06-23",
      "photos": [
        {
          "url": "uploads/photos/gallery_049_interview_paix.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_050_interview_paix.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_051_interview_paix.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_052_interview_paix.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_053_interview_paix.jpeg",
          "caption": ""
        }
      ]
    },
    {
      "id": "metepec-festival-2026",
      "title": "Festival Culturel de Metepec 2026 — Mexique",
      "titleEn": "Metepec Cultural Festival 2026 — Mexico",
      "descriptionEn": "Working meeting to organize the Annual Metepec Cultural Festival. Promotion of art and intercultural dialogue.",
      "titleEs": "Festival Cultural de Metepec 2026 — México",
      "descriptionEs": "Reunión de trabajo para organizar el Festival Cultural Anual de Metepec. Promoción del arte y el diálogo intercultural.",
      "titleAr": "مهرجان ميتيبك الثقافي 2026 — المكسيك",
      "descriptionAr": "اجتماع عمل لتنظيم المهرجان الثقافي السنوي لميتيبك. تعزيز الفن والحوار بين الثقافات.",
      "titleZh": "2026梅特佩克文化节 — 墨西哥",
      "descriptionZh": "筹办梅特佩克年度文化节的工作会议，推广艺术与跨文化对话。",
      "titleRu": "Фестиваль культуры Метепек 2026 — Мексика",
      "descriptionRu": "Рабочая встреча по организации Ежегодного фестиваля культуры Метепек. Продвижение искусства и межкультурного диалога.",
      "description": "Réunion de travail pour l'organisation du Festival Culturel Annuel de Metepec. Promotion de l'art et du dialogue interculturel.",
      "date": "2026-06-20",
      "photos": [
        {
          "url": "uploads/photos/gallery_054_metepec.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_055_metepec.jpg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_056_metepec.jpg",
          "caption": ""
        }
      ]
    },
    {
      "id": "albania-mission-2026",
      "title": "Mission Diplomatique en Albanie — Tirana",
      "titleEn": "Diplomatic Mission in Albania — Tirana",
      "descriptionEn": "Mission to Tirana with the Deputy Minister of Education for the International Training on Diplomatic Protocol.",
      "titleEs": "Misión Diplomática en Albania — Tirana",
      "descriptionEs": "Misión a Tirana con la Viceministra de Educación para la Formación Internacional sobre Protocolo Diplomático.",
      "titleAr": "مهمة دبلوماسية في ألبانيا — تيرانا",
      "descriptionAr": "مهمة في تيرانا مع نائبة وزير التربية والتعليم للتدريب الدولي حول البروتوكول الدبلوماسي.",
      "titleZh": "阿尔巴尼亚外交使命 — 地拉那",
      "descriptionZh": "与教育部副部长在地拉那开展外交礼仪国际培训任务。",
      "titleRu": "Дипломатическая миссия в Албании — Тирана",
      "descriptionRu": "Миссия в Тиране с заместителем министра образования по Международной подготовке по дипломатическому протоколу.",
      "description": "Mission à Tirana avec la Vice-Ministre de l'Éducation pour la Formation Internationale sur le Protocole Diplomatique.",
      "date": "2026-06-22",
      "photos": [
        {
          "url": "uploads/photos/gallery_057_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_058_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_059_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_060_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_061_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_062_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_063_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_064_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_065_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_066_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_067_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_068_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_069_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_070_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_071_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_072_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_073_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_074_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_075_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_076_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_077_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_078_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_079_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_080_albania.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_081_albania.jpeg",
          "caption": ""
        }
      ]
    },
    {
      "id": "kosovo-delegation-2026",
      "title": "Délégation Camerounaise en route pour le Kosovo 2026",
      "titleEn": "Cameroonian Delegation en route for Kosovo 2026",
      "descriptionEn": "Cameroonian delegation en route for Kosovo — diplomatic missions and international forums 2026.",
      "titleEs": "Delegación Camerunesa en ruta hacia Kosovo 2026",
      "descriptionEs": "Delegación camerunesa en ruta hacia Kosovo — misiones diplomáticas y foros internacionales 2026.",
      "titleAr": "وفد الكاميرون في طريقه إلى كوسوفو 2026",
      "descriptionAr": "وفد كاميروني في طريقه إلى كوسوفو — مهام دبلوماسية ومنتديات الدولية 2026.",
      "titleZh": "喀麦隆代表团前往科索沃 2026",
      "descriptionZh": "喀麦隆代表团前往科索沃 — 2026年外交使命与国际论坛。",
      "titleRu": "Камерунская делегация в пути в Косово 2026",
      "descriptionRu": "Камерунская делегация в пути в Косово — дипломатические миссии и международные форумы 2026.",
      "description": "Délégation camerounaise en route pour le Kosovo — missions diplomatiques et forums internationaux 2026.",
      "date": "2026-08-24",
      "photos": [
        {
          "url": "uploads/photos/gallery_082_kosovo_delegation.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_083_kosovo_delegation.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_084_kosovo_delegation.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_085_kosovo_delegation.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_086_kosovo_delegation.jpeg",
          "caption": ""
        }
      ]
    },
    {
      "id": "viti-mayor-distinction-2026",
      "title": "Distinction Spéciale du Maire de Viti — Kosovo",
      "titleEn": "Special Distinction from the Mayor of Viti — Kosovo",
      "descriptionEn": "Presentation of a special distinction by Mr. Sokol Haliti, Mayor of the city of Viti, in Kosovo.",
      "titleEs": "Distinción Especial del Alcalde de Viti — Kosovo",
      "descriptionEs": "Entrega de una distinción especial por parte del Sr. Sokol Haliti, Alcalde de la ciudad de Viti, en Kosovo.",
      "titleAr": "تميز خاص من عمدة فيتي — كوسوفو",
      "descriptionAr": "تقديم تميز خاص من السيد سوكول هاليتي، عمدة مدينة فيتي، في كوسوفو.",
      "titleZh": "维提市长特别荣誉 — 科索沃",
      "descriptionZh": "科索沃维提市市长Sokol Haliti先生颁发特别荣誉。",
      "titleRu": "Особое отличие мэра Вити — Косово",
      "descriptionRu": "Вручение особого отличия господином Соколом Халити, мэром города Вити, Косово.",
      "description": "Remise d'une distinction spéciale par Monsieur Sokol Haliti, Maire de la ville de Viti, au Kosovo.",
      "date": "2026-08-27",
      "photos": [
        {
          "url": "uploads/photos/gallery_087_viti_mayor.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_088_viti_mayor.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_089_viti_mayor.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_090_viti_mayor.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_091_viti_mayor.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_092_viti_mayor.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_093_viti_mayor.jpeg",
          "caption": ""
        }
      ]
    },
    {
      "id": "kosovo-president-osmani-2026",
      "title": "Rencontre avec S.E. la Présidente du Kosovo — Dr Vjosa Osmani",
      "titleEn": "Meeting with H.E. the President of Kosovo — Dr Vjosa Osmani",
      "descriptionEn": "Brief exchange between Ambassador Arsène TATSAZEU and Her Excellency Dr Vjosa Osmani, President of the Republic of Kosovo.",
      "titleEs": "Reunión con S.E. la Presidenta de Kosovo — Dra. Vjosa Osmani",
      "descriptionEs": "Breve intercambio entre el Embajador Arsène TATSAZEU y Su Excelencia la Dra. Vjosa Osmani, Presidenta de la República de Kosovo.",
      "titleAr": "لقاء مع رئيسة كوسوفو — الدكتورة فيوسا أوسماني",
      "descriptionAr": "تبادل موجز بين السفير أرسين تاتازو وسعادة الدكتورة فيوسا أوسماني، رئيسة جمهورية كوسوفو.",
      "titleZh": "会见科索沃总统 — Vjosa Osmani博士",
      "descriptionZh": "阿尔塞纳·塔塔泽乌大使与科索沃共和国总统Vjosa Osmani阁下的简短交流。",
      "titleRu": "Встреча с Е.П. Президентом Косово — д-р Вьоса Османи",
      "descriptionRu": "Краткий обмен между послом Арсеном Татазеу и Её Превосходительством д-ром Вьосой Османи, Президентом Республики Косово.",
      "description": "Bref échange entre l'Ambassadeur Arsène TATSAZEU et Son Excellence Madame la Présidente de la République du Kosovo, Dr Vjosa Osmani.",
      "date": "2026-08-28",
      "photos": [
        {
          "url": "uploads/photos/gallery_094_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_095_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_096_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_097_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_098_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_099_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_100_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_101_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_102_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_103_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_104_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_105_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_106_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_107_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_108_kosovo_president.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_109_kosovo_president.jpeg",
          "caption": ""
        }
      ]
    },
    {
      "id": "world-peace-forum-viti-2026",
      "title": "World Peace Forum in Kosovo — Viti, 25–29 Août 2026",
      "titleEn": "World Peace Forum in Kosovo — Viti, August 25–29, 2026",
      "descriptionEn": "Ambassador Dr. Arsène TATSAZEU, active contributor to the organization of the World Peace Forum in Viti, Kosovo. Honorary distinction from the Municipality of Viti and a Declaration intended for the United Nations.",
      "titleEs": "Foro Mundial por la Paz en Kosovo — Viti, 25–29 de agosto de 2026",
      "descriptionEs": "El Embajador Dr. Arsène TATSAZEU, contribuyente activo a la organización del Foro Mundial por la Paz en Viti, Kosovo. Distinción honorífica del Municipio de Viti y una Declaración destinada a las Naciones Unidas.",
      "titleAr": "منتدى السلام العالمي في كوسوفو — فيتي، 25–29 أغسطس 2026",
      "descriptionAr": "السفير الدكتور أرسين تاتازو، مساهم فعال في تنظيم منتدى السلام العالمي في فيتي، كوسوفو. تميز شرفي من بلدية فيتي وإعلان موجه إلى الأمم المتحدة.",
      "titleZh": "科索沃世界和平论坛 — 维提，2026年8月25–29日",
      "descriptionZh": "阿尔塞纳·塔塔泽乌大使积极推动科索沃维提世界和平论坛的举办。获维提市荣誉表彰及提交联合国的宣言。",
      "titleRu": "Всемирный форум за мир в Косово — Вити, 25–29 августа 2026",
      "descriptionRu": "Посол д-р Арсен Татазеу — активный содействующий организации Всемирного форума за мир в Вити, Косово. Почётное отличие муниципалитета Вити и Декларация, предназначенная для ООН.",
      "description": "Ambassadeur Dr. Arsène TATSAZEU, contributeur actif à l'organisation du World Peace Forum à Viti, Kosovo. Distinction honorifique de la Municipalité de Viti et Déclaration destinée aux Nations Unies.",
      "date": "2026-08-29",
      "photos": [
        {
          "url": "uploads/photos/gallery_110_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_111_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_112_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_113_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_114_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_115_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_116_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_117_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_118_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_119_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_120_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_121_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_122_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_123_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_124_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_125_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_126_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_127_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_128_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_129_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_130_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_131_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_132_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_133_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_134_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_135_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_136_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_137_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_138_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_139_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_140_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_141_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_142_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_143_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_144_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_145_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_146_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_147_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_148_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_149_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_150_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_151_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_152_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_153_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_154_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_155_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_156_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_157_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_158_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_159_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_160_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_161_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_162_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_163_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_164_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_165_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_166_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_167_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_168_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_169_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_170_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_171_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_172_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_173_world_peace_forum.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_174_world_peace_forum.jpeg",
          "caption": ""
        }
      ]
    },
    {
      "id": "mexico-sre-cooperation-2026",
      "title": "Conférence avec le Secrétariat des Relations Extérieures du Mexique",
      "titleEn": "Conference with the Mexican Secretariat of Foreign Affairs",
      "descriptionEn": "Conference on international cooperation and immigration. Brief dialogue with Senator Karina Isabel Ruiz after the event.",
      "titleEs": "Conferencia con la Secretaría de Relaciones Exteriores de México",
      "descriptionEs": "Conferencia sobre cooperación internacional e inmigración. Breve diálogo con la senadora Karina Isabel Ruiz después del evento.",
      "titleAr": "مؤتمر مع السكرتارية الخارجية المكسيكية",
      "descriptionAr": "مؤتمر حول التعاون الدولي والهجرة. حوار موجز مع السيناتور كارينا إيزابيل رويز بعد الحدث.",
      "titleZh": "与墨西哥外交部会议",
      "descriptionZh": "关于国际合作与移民的会议。活动结束后与参议员Karina Isabel Ruiz简短交流。",
      "titleRu": "Конференция с Министерством иностранных дел Мексики",
      "descriptionRu": "Конференция по международному сотрудничеству и иммиграции. Краткий диалог с сенатором Кариной Изабель Руис после мероприятия.",
      "description": "Conférence sur la coopération internationale et l'immigration. Bref dialogue avec la sénatrice Karina Isabel Ruiz après l'événement.",
      "date": "2026-07-15",
      "photos": [
        {
          "url": "uploads/photos/gallery_175_mexico_sre.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_176_mexico_sre.jpeg",
          "caption": ""
        }
      ]
    },
    {
      "id": "moments-divers-2026",
      "title": "Moments Divers — Cérémonies, Célébrations & Voyages",
      "titleEn": "Diverse Moments — Ceremonies, Celebrations & Travels",
      "descriptionEn": "Interfaith church ceremony, formal events, night celebration with the flag of Cameroon and travels across international missions.",
      "titleEs": "Momentos Diversos — Ceremonias, Celebraciones y Viajes",
      "descriptionEs": "Ceremonia interreligiosa en la iglesia, eventos formales, celebración nocturna con la bandera de Camerún y viajes por las misiones internacionales.",
      "titleAr": "لحظات متنوعة — مراسم احتفالات وسفر",
      "descriptionAr": "مراسم بين الأديان في الكنيسة، وأحداث رسمية، واحتفال ليلي بعلم الكاميرون، وسفر عبر المهام الدولية.",
      "titleZh": "多元时刻 — 仪式、庆典与旅行",
      "descriptionZh": "教堂跨宗教仪式、正式活动、喀麦隆国旗夜间庆典以及国际使命之旅。",
      "titleRu": "Разные моменты — церемонии, праздники и путешествия",
      "descriptionRu": "Межконфессиональная церемония в церкви, официальные мероприятия, ночное празднование с флагом Камеруна и поездки по международным миссиям.",
      "description": "Cérémonie interreligieuse en église, événements formels, célébration nocturne au drapeau du Cameroun et voyages à travers les missions internationales.",
      "date": "2026-10-05",
      "photos": [
        {
          "url": "uploads/photos/gallery_177_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_178_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_179_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_180_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_181_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_182_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_183_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_184_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_185_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_186_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_187_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_188_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_189_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_190_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_191_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_192_moments_divers.jpeg",
          "caption": ""
        },
        {
          "url": "uploads/photos/gallery_193_moments_divers.jpeg",
          "caption": ""
        }
      ]
    }
  ],
  "videos": [
    {
      "title": "Intervention Officielle — Discours",
      "titleEn": "Official Address — Speech",
      "titleEs": "Intervención Oficial — Discurso",
      "titleAr": "خطاب رسمي — كلمة",
      "titleZh": "正式发言 — 演讲",
      "titleRu": "Официальное выступление — речь",
      "description": "Dr. Arsène Romaric TATSAZEU",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу",
      "url": "uploads/videos/video_01_1.mp4"
    },
    {
      "title": "Présentation Diplomatique",
      "titleEn": "Diplomatic Presentation",
      "titleEs": "Presentación Diplomática",
      "titleAr": "عرض دبلوماسي",
      "titleZh": "外交演讲",
      "titleRu": "Дипломатическая презентация",
      "description": "Dr. Arsène Romaric TATSAZEU",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу",
      "url": "uploads/videos/video_02_2.mp4"
    },
    {
      "title": "Événement — Mai 2026",
      "titleEn": "Event — May 2026",
      "titleEs": "Evento — Mayo 2026",
      "titleAr": "حدث — مايو 2026",
      "titleZh": "活动 — 2026年5月",
      "titleRu": "Мероприятие — май 2026",
      "description": "Dr. Arsène Romaric TATSAZEU",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу",
      "url": "uploads/videos/video_03_WhatsApp_Video_2026-05-16_at_18.09.36.mp4"
    },
    {
      "title": "Conférence Internationale — Mai 2026",
      "titleEn": "International Conference — May 2026",
      "titleEs": "Conferencia Internacional — Mayo 2026",
      "titleAr": "مؤتمر دولي — مايو 2026",
      "titleZh": "国际会议 — 2026年5月",
      "titleRu": "Международная конференция — май 2026",
      "description": "Dr. Arsène Romaric TATSAZEU",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу",
      "url": "uploads/videos/video_04_WhatsApp_Video_2026-05-16_at_18.09.37.mp4"
    },
    {
      "title": "Intervention Diplomatique — Mai 2026",
      "titleEn": "Diplomatic Address — May 2026",
      "titleEs": "Intervención Diplomática — Mayo 2026",
      "titleAr": "تدخل دبلوماسي — مايو 2026",
      "titleZh": "外交致辞 — 2026年5月",
      "titleRu": "Дипломатическое выступление — май 2026",
      "description": "Dr. Arsène Romaric TATSAZEU",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу",
      "url": "uploads/videos/video_05_WhatsApp_Video_2026-05-21_at_00.19.50_1_.mp4"
    },
    {
      "title": "Bibimbap Festival — Foro Lindbergh, Parque México",
      "titleEn": "Bibimbap Festival — Foro Lindbergh, Parque México",
      "titleEs": "Festival Bibimbap — Foro Lindbergh, Parque México",
      "titleAr": "مهرجان بيبيمباب — فورو ليندبرغ، باركي ميكسيكو",
      "titleZh": "拌饭节 — Lindbergh论坛，墨西哥公园",
      "titleRu": "Фестиваль Бибимбап — Foro Lindbergh, Parque México",
      "description": "Dr. Arsène Romaric TATSAZEU — Festival culturel et diplomatique",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU — Cultural and diplomatic festival",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU — Festival cultural y diplomático",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو — مهرجان ثقافي ودبلوماسي",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士 — 文化与外交节庆",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу — культурно-дипломатический фестиваль",
      "url": "uploads/videos/new_event1.mp4"
    },
    {
      "title": "Visite Officielle au Kosovo — Municipalité de Viti (1)",
      "titleEn": "Official Visit to Kosovo — Municipality of Viti (1)",
      "titleEs": "Visita Oficial al Kosovo — Municipio de Viti (1)",
      "titleAr": "زيارة رسمية إلى كوسوفو — بلدية فيتي (1)",
      "titleZh": "正式访问科索沃 — 维提市（1）",
      "titleRu": "Официальный визит в Косово — муниципалитет Вити (1)",
      "description": "Dr. Arsène Romaric TATSAZEU — Visite officielle au Kosovo, reçu par le Maire Sokol Haliti",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU — Official visit to Kosovo, received by Mayor Sokol Haliti",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU — Visita oficial al Kosovo, recibido por el Alcalde Sokol Haliti",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو — زيارة رسمية إلى كوسوفو واستقباله من العمدة سوكول هاليتي",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士 — 正式访问科索沃，获市长Sokol Haliti接见",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу — официальный визит в Косово, принят мэром Соколом Халити",
      "url": "uploads/videos/video_06_kosovo_visit_1.mp4"
    },
    {
      "title": "Visite Officielle au Kosovo — Municipalité de Viti (2)",
      "titleEn": "Official Visit to Kosovo — Municipality of Viti (2)",
      "titleEs": "Visita Oficial al Kosovo — Municipio de Viti (2)",
      "titleAr": "زيارة رسمية إلى كوسوفو — بلدية فيتي (2)",
      "titleZh": "正式访问科索沃 — 维提市（2）",
      "titleRu": "Официальный визит в Косово — муниципалитет Вити (2)",
      "description": "Dr. Arsène Romaric TATSAZEU — Renforcement de la coopération internationale pour la paix",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU — Strengthening international cooperation for peace",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU — Fortalecimiento de la cooperación internacional por la paz",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو — تعزيز التعاون الدولي من أجل السلام",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士 — 加强国际和平合作",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу — укрепление международного сотрудничества ради мира",
      "url": "uploads/videos/video_07_kosovo_visit_2.mp4"
    },
    {
      "title": "Événement Formel — Hôtel",
      "titleEn": "Formal Event — Hotel",
      "titleEs": "Evento Formal — Hotel",
      "titleAr": "حدث رسمي — فندق",
      "titleZh": "正式活动 — 酒店",
      "titleRu": "Официальное мероприятие — отель",
      "description": "Dr. Arsène Romaric TATSAZEU — Rencontre protocolaire et rencontres diplomatiques",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU — Protocol meeting and diplomatic encounters",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU — Reunión protocolaria y encuentros diplomáticos",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو — لقاء بروتوكولي ولقاءات دبلوماسية",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士 — 礼仪会晤与外交交流",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу — протокольная встреча и дипломатические контакты",
      "url": "uploads/videos/video_08_hotel_event.mp4"
    },
    {
      "title": "Célébration de Nuit — Drapeau du Cameroun",
      "titleEn": "Night Celebration — Flag of Cameroon",
      "titleEs": "Celebración Nocturna — Bandera de Camerún",
      "titleAr": "احتفال ليلي — علم الكاميرون",
      "titleZh": "夜间庆典 — 喀麦隆国旗",
      "titleRu": "Ночное празднование — флаг Камеруна",
      "description": "Dr. Arsène Romaric TATSAZEU — Célébration avec le drapeau camerounais",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU — Celebration with the Cameroonian flag",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU — Celebración con la bandera camerunesa",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو — احتفال بعلم الكاميرون",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士 — 挥舞喀麦隆国旗的庆典",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу — празднование с флагом Камеруна",
      "url": "uploads/videos/video_09_celebration_night.mp4"
    },
    {
      "title": "En Route — Voyage International",
      "titleEn": "En Route — International Travel",
      "titleEs": "En Ruta — Viaje Internacional",
      "titleAr": "في الطريق — سفر دولي",
      "titleZh": "在路上 — 国际出行",
      "titleRu": "В пути — международные поездки",
      "description": "Dr. Arsène Romaric TATSAZEU — Déplacements pour les missions internationales",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU — Travels for international missions",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU — Desplazamientos para misiones internacionales",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو — تنقلات للمهام الدولية",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士 — 国际使命之旅",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу — поездки по международным миссиям",
      "url": "uploads/videos/video_10_travel_1.mp4"
    },
    {
      "title": "Voyage Aérien — Mission Internationale",
      "titleEn": "Air Travel — International Mission",
      "titleEs": "Viaje Aéreo — Misión Internacional",
      "titleAr": "سفر جوي — مهمة دولية",
      "titleZh": "空中出行 — 国际使命",
      "titleRu": "Авиаперелёт — международная миссия",
      "description": "Dr. Arsène Romaric TATSAZEU — À bord d'un vol international",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU — On board an international flight",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU — A bordo de un vuelo internacional",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو — على متن رحلة دولية",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士 — 在国际航班上",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу — на борту международного рейса",
      "url": "uploads/videos/video_11_travel_2.mp4"
    },
    {
      "title": "Cérémonie Interreligieuse — Église",
      "titleEn": "Interfaith Ceremony — Church",
      "titleEs": "Ceremonia Interreligiosa — Iglesia",
      "titleAr": "مراسم بين الأديان — كنيسة",
      "titleZh": "跨宗教仪式 — 教堂",
      "titleRu": "Межконфессиональная церемония — церковь",
      "description": "Dr. Arsène Romaric TATSAZEU — Cérémonie œcuménique et dialogue interreligieux",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU — Ecumenical ceremony and interfaith dialogue",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU — Ceremonia ecuménica y diálogo interreligioso",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو — مراسم مشتركة وحوار بين الأديان",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士 — 普世仪式与宗教间对话",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу — экуменическая церемония и межрелигиозный диалог",
      "url": "uploads/videos/video_12_church_ceremony.mp4"
    },
    {
      "title": "Intervention en Église — Cérémonie",
      "titleEn": "Church Address — Ceremony",
      "titleEs": "Intervención en la Iglesia — Ceremonia",
      "titleAr": "كلمة في الكنيسة — مراسم",
      "titleZh": "教堂致辞 — 仪式",
      "titleRu": "Выступление в церкви — церемония",
      "description": "Dr. Arsène Romaric TATSAZEU — Intervention lors d'une cérémonie en église",
      "descriptionEn": "Dr. Arsène Romaric TATSAZEU — Address during a church ceremony",
      "descriptionEs": "Dr. Arsène Romaric TATSAZEU — Intervención durante una ceremonia en la iglesia",
      "descriptionAr": "الدكتور أرسين روماريك تاتازو — كلمة خلال مراسم في الكنيسة",
      "descriptionZh": "阿瑟内·罗梅里克·塔塔泽乌博士 — 在教堂仪式上的致辞",
      "descriptionRu": "Д-р Арсен Ромарик Татазеу — выступление во время церковной церемонии",
      "url": "uploads/videos/video_13_church_altar.mp4"
    }
  ],
  "news": [
    {
      "id": "1",
      "title": "Formation : Prévention de la traite des êtres humains",
      "titleEn": "Training: Human Trafficking Prevention",
      "titleEs": "Formación: Prevención de la trata de personas",
      "titleAr": "التدريب: منع الاتجار بالبشر",
      "titleZh": "培训：预防人口贩运",
      "titleRu": "Обучение: предотвращение торговли людьми",
      "content": "Le Dr. Arsène Romaric TATSAZEU a complété avec succès la formation en ligne sur la sensibilisation et la prévention de la traite des êtres humains. Dispensée par l'IPPDR en collaboration avec le U.S. Homeland Security Investigation.",
      "contentEn": "Dr. Arsène Romaric TATSAZEU successfully completed the online training on human trafficking awareness and prevention. Delivered by the IPPDR in collaboration with U.S. Homeland Security Investigation.",
      "contentEs": "El Dr. Arsène Romaric TATSAZEU completó con éxito la formación en línea sobre concienciación y prevención de la trata de personas. Impartida por el IPPDR en colaboración con la U.S. Homeland Security Investigation.",
      "contentAr": "أكمل الدكتور أرسين روماريك تاتازو بنجاح التدريب عبر الإنترنت حول التوعية بمنع الاتجار بالبشر. تقديمه من معهد IPPDR بالتعاون مع جهاز التحقيقات الأمنية الأمريكية.",
      "contentZh": "阿瑟内·罗梅里克·塔塔泽乌博士成功完成了关于人口贩运意识与预防的在线培训。该培训由IPPDR与美国国土安全调查局合作举办。",
      "contentRu": "Д-р Арсен Ромарик Татазеу успешно завершил онлайн-обучение по осведомлённости и предотвращению торговли людьми. Проведено IPPDR совместно с U.S. Homeland Security Investigation.",
      "date": "2026-04-30"
    },
    {
      "id": "2",
      "title": "Bibimbap Festival — Foro Lindbergh, Parque México",
      "titleEn": "Bibimbap Festival — Foro Lindbergh, Parque México",
      "titleEs": "Festival Bibimbap — Foro Lindbergh, Parque México",
      "titleAr": "مهرجان بيبيمباب — فورو ليندبرغ، باركي ميكسيكو",
      "titleZh": "拌饭节 — Lindbergh论坛，墨西哥公园",
      "titleRu": "Фестиваль Бибимбап — Foro Lindbergh, Parque México",
      "content": "Participation au Bibimbap Festival au Foro Lindbergh, Parque México, sur invitation du Conseil Consultatif pour la Réunification Pacifique de la Corée en Amérique Centrale et dans les Caraïbes. Événement culturel et sportif réunissant des représentants diplomatiques de plusieurs nations, dans une atmosphère de paix, d'amitié et de solidarité.",
      "contentEn": "Participation in the Bibimbap Festival at Foro Lindbergh, Parque México, on invitation of the Advisory Council for the Peaceful Reunification of Korea in Central America and the Caribbean. A cultural and sports event bringing together diplomatic representatives of several nations in an atmosphere of peace, friendship and solidarity.",
      "contentEs": "Participación en el Festival Bibimbap en el Foro Lindbergh, Parque México, por invitación del Consejo Asesor para la Reunificación Pacífica de Coreia en Centroamérica y el Caribe. Evento cultural y deportivo que reunió a representantes diplomáticas de varias naciones en un ambiente de paz, amistad y solidaridad.",
      "contentAr": "المشاركة في مهرجان بيبيمباب في فورو ليندبرغ، باركي ميكسيكو، بدعوة من المجلس الاستشاري لإعادة توحيد كوريا سلميًا في أمريكا الوسطى والكاريبي. حدث ثقافي ورياضي جمع ممثلين دبلوماسيين من عدة أمم في أجواء من السلام والصداقة والتضامن.",
      "contentZh": "应中美洲及加勒比地区韩国和平统一咨询委员会邀请，参加在墨西哥公园Lindbergh论坛举办的拌饭节。这是一场文化体育盛事，多国外交代表齐聚一堂，气氛和平、友谊与团结。",
      "contentRu": "Участие в фестивале Бибимбап в Foro Lindbergh, Parque México, по приглашению Консультативного совета за мирное объединение Кореи в Центральной Америке и Карибском бассейне. Культурно-спортивное мероприятие, объединившее дипломатических представителей нескольких стран в атмосфере мира, дружбы и солидарности.",
      "date": "2026-05-30"
    },
    {
      "id": "3",
      "title": "Rencontre avec S.E. l'Ambassadeur de Corée du Sud au Mexique",
      "titleEn": "Meeting with H.E. the Ambassador of South Korea to Mexico",
      "titleEs": "Reunión con S.E. el Embajador de Corea del México",
      "titleAr": "لقاء مع سفير كوريا الجنوبية في المكسيك",
      "titleZh": "会见韩国驻墨西哥大使",
      "titleRu": "Встреча с Послом Республики Корея в Мексике",
      "content": "Rencontre avec Son Excellence Monsieur l'Ambassadeur JOOIL LEE, la Consul Madame EUNJIN LEE et la Présidente Municipale Madame Caroline Garduño.",
      "contentEn": "Meeting with His Excellency Ambassador JOOIL LEE, Consul Mrs. EUNJIN LEE and Municipal President Mrs. Caroline Garduño.",
      "contentEs": "Reunión con Su Excelencia el Embajador JOOIL LEE, la Cónsul Sra. EUNJIN LEE y la Presidenta Municipal Sra. Caroline Garduño.",
      "contentAr": "لقاء مع سعادة السفير جو إيل لي، القنصل السيدة إون جين لي، والرئيسة البلدية السيدة كارولينا غاردونيو.",
      "contentZh": "会见大使JOOIL LEE阁下、领事EUNJIN LEE女士及市长Caroline Garduño女士。",
      "contentRu": "Встреча с Его Превосходительством послом JOOIL LEE, консулом госпожой EUNJIN LEE и муниципальным президентом госпожой Caroline Garduño.",
      "date": "2026-05-30"
    },
    {
      "id": "4",
      "title": "United Nations Genève — Réunion",
      "titleEn": "United Nations Geneva — Meeting",
      "titleEs": "Naciones Unidas Ginebra — Reunión",
      "titleAr": "الأمم المتحدة جنيف — اجتماع",
      "titleZh": "联合国日内瓦 — 会议",
      "titleRu": "ООН Женева — встреча",
      "content": "Réunion à l'Organisation des Nations Unies à Genève, Suisse.",
      "contentEn": "Meeting at the United Nations Organization in Geneva, Switzerland.",
      "contentEs": "Reunión en la Organización de las Naciones Unidas en Ginebra, Suiza.",
      "contentAr": "اجتماع في منظمة الأمم المتحدة في جنيف، سويسرا.",
      "contentZh": "在瑞士日内瓦联合国总部举行的会议。",
      "contentRu": "Встреча в Организации Объединённых Наций в Женеве, Швейцария.",
      "date": "2026-05-30"
    },
    {
      "id": "5",
      "title": "Nomination Officielle : Ambassadeur des Diplomates Internationaux",
      "titleEn": "Official Appointment: Ambassador of International Diplomats",
      "titleEs": "Nombramiento Oficial: Embajador de los Diplomáticos Internacionales",
      "titleAr": "تعيين رسمي: سفير الدبلوماسيين الدوليين",
      "titleZh": "正式任命：国际外交官大使",
      "titleRu": "Официальное назначение: Послед международных дипломатов",
      "content": "Le Dr. Arsène Romaric TATSAZEU a été officiellement nommé Ambassadeur des Diplomates Internationaux. Cette nomination reconnaît son leadership, ses qualités de direction et son engagement à avoir un impact positif. Lettre de nomination officielle reçue le 5 juin 2026.",
      "contentEn": "Dr. Arsène Romaric TATSAZEU was officially appointed Ambassador of International Diplomats. This appointment recognizes his leadership, his leadership qualities and his commitment to making a positive impact. Official appointment letter received on June 5, 2026.",
      "contentEs": "El Dr. Arsène Romaric TATSAZEU fue oficialmente nombrado Embajador de los Diplomáticos Internacionales. Este nombramiento reconoce su liderazgo, sus cualidades de dirección y su compromiso de generar un impacto positivo. Carta de nombramiento oficial recibida el 5 de junio de 2026.",
      "contentAr": "عُيّن الدكتور أرسين روماريك تاتازو رسميًا سفيرًا للدبلوماسيين الدوليين. يعكس هذا التعيين قيادته وصفاته القيادية والتزامه بإحداث أثر إيجابي. تم تسلم خطاب التعيين الرسمي في 5 يونيو 2026.",
      "contentZh": "阿瑟内·罗梅里克·塔塔泽乌博士被正式任命为国际外交官大使。此项任命表彰了他的领导力、领导才能以及产生积极影响的承诺。官方任命书于2026年6月5日收到。",
      "contentRu": "Д-р Арсен Ромарик Татазеу официально назначен Послом международных дипломатов. Это назначение признаёт его лидерство, лидерские качества и приверженность позитивному влиянию. Официальное письмо о назначении получено 5 июня 2026 года.",
      "date": "2026-06-05"
    },
    {
      "id": "6",
      "title": "Mission Diplomatique en Albanie — Préparation de la Formation Internationale",
      "titleEn": "Diplomatic Mission in Albania — Preparing the International Training",
      "titleEs": "Misión Diplomática en Albania — Preparación de la Formación Internacional",
      "titleAr": "مهمة دبلوماسية في ألبانيا — التحضير للتدريب الدولي",
      "titleZh": "阿尔巴尼亚外交使命 — 筹备国际培训",
      "titleRu": "Дипломатическая миссия в Албании — подготовка Международной подготовки",
      "content": "Mission diplomatique à Tirana, Albanie. Réunion de travail avec Madame Herida Duro, Vice-Ministre de l'Éducation, pour la préparation de la Formation Internationale sur le Protocole Diplomatique et la Lutte Contre la Traite des Êtres Humains, qui se tiendra en Novembre 2026 à Tirana, sous le patronage du Ministère de l'Éducation.",
      "contentEn": "Diplomatic mission to Tirana, Albania. Working meeting with Mrs. Herida Duro, Deputy Minister of Education, to prepare the International Training on Diplomatic Protocol and the Fight Against Human Trafficking, to be held in November 2026 in Tirana, under the patronage of the Ministry of Education.",
      "contentEs": "Misión diplomática en Tirana, Albania. Reunión de trabajo con la Sra. Herida Duro, Viceministra de Educación, para la preparación de la Formación Internacional sobre Protocolo Diplomático y la Lucha Contra la Trata de Personas, que se celebrará en noviembre de 2026 en Tirana, bajo el patrocinio del Ministerio de Educación.",
      "contentAr": "مهمة دبلوماسية في تيرانا، ألبانيا. اجتماع عمل مع السيدة هيرودا ديرو، نائبة وزير التربية والتعليم، للتحضير للتدريب الدولي حول البروتوكول الدبلوماسي ومكافحة الاتجار بالبشر، المقرر في نوفمبر 2026 بتيرانا برعاية وزارة التربية والتعليم.",
      "contentZh": "阿尔巴尼亚地拉那外交使命。与教育部副部长Herida Duro女士举行工作会议，筹备将于2026年11月在地拉那由教育部主办的外交礼仪与打击人口贩运国际培训。",
      "contentRu": "Дипломатическая миссия в Тиране, Албания. Рабочая встреча с госпожой Херида Дуро, заместителем министра образования, по подготовке Международной подготовки по дипломатическому протоколу и борьбе с торговлей людьми, которая состоится в ноябре 2026 года в Тиране под патронатом Министерства образования.",
      "date": "2026-06-22"
    },
    {
      "id": "7",
      "title": "Visite Officielle au Kosovo — Forum Mondial de la Jeunesse pour la Paix",
      "titleEn": "Official Visit to Kosovo — World Youth Forum for Peace",
      "titleEs": "Visita Oficial al Kosovo — Foro Mundial de la Juventud por la Paz",
      "titleAr": "زيارة رسمية إلى كوسوفو — المنتدى العالمي للشباب من أجل السلام",
      "titleZh": "正式访问科索沃 — 世界青年和平论坛",
      "titleRu": "Официальный визит в Косово — Всемирный молодёжный форум за мир",
      "content": "Visite officielle au Kosovo. Réunion avec Monsieur Sokol Haliti, Maire de la Municipalité de Viti, pour la préparation du Forum Mondial de la Jeunesse pour la Paix dans le Monde (25-29 Août 2026, Viti, Kosovo). Élaboration de la Déclaration de Viti pour la Paix dans le Monde, réunissant des délégations de plus de 80 pays.",
      "contentEn": "Official visit to Kosovo. Meeting with Mr. Sokol Haliti, Mayor of the Municipality of Viti, to prepare the World Youth Forum for Peace in the World (August 25-29, 2026, Viti, Kosovo). Development of the Viti Declaration for World Peace, bringing together delegations from more than 80 countries.",
      "contentEs": "Visita oficial al Kosovo. Reunión con el Sr. Sokol Haliti, Alcalde del Municipio de Viti, para la preparación del Foro Mundial de la Juventud por la Paz en el Mundo (25-29 de agosto de 2026, Viti, Kosovo). Elaboración de la Declaración de Viti por la Paz Mundial, reuniendo delegaciones de más de 80 países.",
      "contentAr": "زيارة رسمية إلى كوسوفو. لقاء مع السيد سوكول هاليتي، عمدة بلدية فيتي، للتحضير للمنتدى العالمي للشباب من أجل السلام في العالم (25-29 أغسطس 2026، فيتي، كوسوفو). إعداد إعلان فيتي من أجل السلام العالمي، الذي جمع وفودًا من أكثر من 80 دولة.",
      "contentZh": "正式访问科索沃。与维提市市长Sokol Haliti先生会面，筹备世界青年和平论坛（2026年8月25-29日，科索沃维提）。制定《维提世界和平宣言》，汇聚来自80多个国家的代表团。",
      "contentRu": "Официальный визит в Косово. Встреча с господином Соколом Халити, мэром муниципалитета Вити, по подготовке Всемирного молодёжного форума за мир в мире (25-29 августа 2026, Вити, Косово). Разработка Витийской декларации за мировой мир, объединившей делегации более чем 80 стран.",
      "date": "2026-06-16"
    },
    {
      "id": "8",
      "title": "Festival Culturel de Metepec 2026 — Coopération Culturelle",
      "titleEn": "Metepec Cultural Festival 2026 — Cultural Cooperation",
      "titleEs": "Festival Cultural de Metepec 2026 — Cooperación Cultural",
      "titleAr": "مهرجان ميتيبك الثقافي 2026 — التعاون الثقافي",
      "titleZh": "2026梅特佩克文化节 — 文化合作",
      "titleRu": "Фестиваль культуры Метепек 2026 — культурное сотрудничество",
      "content": "Réunion de travail avec les représentants du Centre Culturel de Metepec, État de Mexico, pour l'organisation du Festival Culturel Annuel de Metepec (13-18 Octobre 2026). Le Dr. Arsène Romaric TATSAZEU a été honoré d'un cadeau symbolique par Madame Carolina Garduño, renforçant le rôle de la culture comme pont entre les peuples.",
      "contentEn": "Working meeting with representatives of the Metepec Cultural Center, State of Mexico, to organize the Annual Metepec Cultural Festival (October 13-18, 2026). Dr. Arsène Romaric TATSAZEU was honored with a symbolic gift by Mrs. Carolina Garduño, strengthening the role of culture as a bridge between peoples.",
      "contentEs": "Reunión de trabajo con representantes del Centro Cultural de Metepec, Estado de México, para la organización del Festival Cultural Anual de Metepec (13-18 de octubre de 2026). El Dr. Arsène Romaric TATSAZEU fue honrado con un regalo simbólico por la Sra. Carolina Garduño, reforzando el papel de la cultura como puente entre los pueblos.",
      "contentAr": "اجتماع عمل مع ممثلين عن المركز الثقافي لميتيبك، ولاية ميكسيكو، لتنظيم المهرجان الثقافي السنوي لميتيبك (13-18 أكتوبر 2026). حظي الدكتور أرسين روماريك تاتازو بتكريم من السيدة كارولينا غاردونيو بهدية رمزية، مما يعزز دور الثقافة كجسر بين الشعوب.",
      "contentZh": "与墨西哥州梅特佩克文化中心代表举行工作会议，筹办梅特佩克年度文化节（2026年10月13-18日）。阿瑟内·罗梅里克·塔塔泽乌博士获Carolina Garduño女士赠送象征性礼物，彰显文化作为民族间桥梁的作用。",
      "contentRu": "Рабочая встреча с представителями Культурного центра Метепек, штат Мехико, по организации Ежегодного фестиваля культуры Метепек (13-18 октября 2026). Д-р Арсен Ромарик Татазеу был удостоен символического подарка от госпожи Каролины Гардуньо, укрепляя роль культуры как моста между народами.",
      "date": "2026-06-20"
    },
    {
      "id": "9",
      "title": "Participation à l'IGF Riyadh — Gouvernance de l'Internet",
      "titleEn": "Participation in IGF Riyadh — Internet Governance",
      "titleEs": "Participación en el IGF Riyadh — Gobernanza de Internet",
      "titleAr": "المشاركة في منتدى حوكمة الإنترنت — الرياض",
      "titleZh": "参加利雅得互联网治理论坛",
      "titleRu": "Участие в IGF Эр-Рияд — управление Интернетом",
      "content": "Participation à l'Internet Governance Forum (IGF) à Riyadh, Arabie Saoudite. Dialogue international sur la gouvernance de l'Internet, la coopération numérique et le développement durable à l'ère du numérique, renforçant l'engagement diplomatique dans les forums technologiques mondiaux.",
      "contentEn": "Participation in the Internet Governance Forum (IGF) in Riyadh, Saudi Arabia. International dialogue on Internet governance, digital cooperation and sustainable development in the digital age, strengthening diplomatic engagement in global technology forums.",
      "contentEs": "Participación en el Foro de Gobernanza de Internet (IGF) en Riad, Arabia Saudita. Diálogo internacional sobre gobernanza de Internet, cooperación digital y desarrollo sostenible en la era digital, fortaleciendo el compromiso diplomático en los foros tecnológicos mundiales.",
      "contentAr": "المشاركة في منتدى حوكمة الإنترنت (IGF) في الرياض، المملكة العربية السعودية. حوار دولي حول حوكمة الإنترنت والتعاون الرقمي والتنمية المستدامة في العصر الرقمي، مما يعزز المساهمة الدبلوماسية في المنتديات التقنية العالمية.",
      "contentZh": "参加在沙特阿拉伯利雅得举行的互联网治理论坛（IGF）。围绕互联网治理、数字合作与数字时代可持续发展展开国际对话，加强在全球科技论坛中的外交参与。",
      "contentRu": "Участие в Форуме по управлению Интернетом (IGF) в Эр-Рияде, Саудовская Аравия. Международный диалог об управлении Интернетом, цифровом сотрудничестве и устойчивом развитии в цифровую эпоху, укрепляющий дипломатическое участие в глобальных технологических форумах.",
      "date": "2026-06-19"
    },
    {
      "id": "10",
      "title": "Interview Exclusive — Vision sur la Paix dans le Monde",
      "titleEn": "Exclusive Interview — Vision for World Peace",
      "titleEs": "Entrevista Exclusiva — Visión sobre la Paz Mundial",
      "titleAr": "حوار حصري — رؤية للسلام العالمي",
      "titleZh": "独家访谈 — 世界和平愿景",
      "titleRu": "Эксклюзивное интервью — видение мирового мира",
      "content": "Interview exclusive du Dr. Arsène Romaric TATSAZEU sur sa vision pour la paix mondiale, la diplomatie interculturelle et le développement durable à travers l'Europe, l'Asie, l'Amérique Latine et l'Afrique.",
      "contentEn": "Exclusive interview with Dr. Arsène Romaric TATSAZEU on his vision for world peace, intercultural diplomacy and sustainable development across Europe, Asia, Latin America and Africa.",
      "contentEs": "Entrevista exclusiva con el Dr. Arsène Romaric TATSAZEU sobre su visión para la paz mundial, la diplomacia intercultural y el desarrollo sostenible a través de Europa, Asia, América Latina y África.",
      "contentAr": "حوار حصري مع الدكتور أرسين روماريك تاتازو حول رؤيته للسلام العالمي والدبلوماسية بين الثقافات والتنمية المستدامة عبر أوروبا وآسيا وأمريكا اللاتينية وأفريقيا.",
      "contentZh": "阿瑟内·罗梅里克·塔塔泽乌博士就世界和平、跨文化外交及横跨欧洲、亚洲、拉丁美洲和非洲的可持续发展愿景接受独家专访。",
      "contentRu": "Эксклюзивное интервью с д-ром Арсеном Ромариком Татазеу о его видении мирового мира, межкультурной дипломатии и устойчивого развития в Европе, Азии, Латинской Америке и Африке.",
      "date": "2026-06-23"
    },
    {
      "id": "11",
      "title": "Délégation Camerounaise en route pour le Kosovo 2026",
      "titleEn": "Cameroonian Delegation en route for Kosovo 2026",
      "titleEs": "Delegación Camerunesa en ruta hacia Kosovo 2026",
      "titleAr": "وفد الكاميرون في طريقه إلى كوسوفو 2026",
      "titleZh": "喀麦隆代表团前往科索沃 2026",
      "titleRu": "Камерунская делегация в пути в Косово 2026",
      "content": "Délégation camerounaise en route pour le Kosovo afin de participer aux missions diplomatiques et forums internationaux 2026.",
      "contentEn": "Cameroonian delegation en route for Kosovo to take part in diplomatic missions and international forums in 2026.",
      "contentEs": "Delegación camerunesa en ruta hacia Kosovo para participar en misiones diplomáticas y foros internacionales en 2026.",
      "contentAr": "وفد كاميروني في طريقه إلى كوسوفو للمشاركة في المهام الدبلوماسية والمنتديات الدولية عام 2026.",
      "contentZh": "喀麦隆代表团前往科索沃，参加2026年的外交使命与国际论坛。",
      "contentRu": "Камерунская делегация в пути в Косово для участия в дипломатических миссиях и международных форумах 2026 года.",
      "date": "2026-08-24"
    },
    {
      "id": "12",
      "title": "Distinction Spéciale du Maire de Viti — Sokol Haliti",
      "titleEn": "Special Distinction from the Mayor of Viti — Sokol Haliti",
      "titleEs": "Distinción Especial del Alcalde de Viti — Sokol Haliti",
      "titleAr": "تميز خاص من عمدة فيتي — سوكول هاليتي",
      "titleZh": "维提市长特别荣誉 — Sokol Haliti",
      "titleRu": "Особое отличие мэра Вити — Сокол Халити",
      "content": "L'Ambassadeur Arsène TATSAZEU a reçu une distinction spéciale de Monsieur Sokol Haliti, Maire de la ville de Viti, au Kosovo, en reconnaissance de son engagement pour la paix et la coopération internationale.",
      "contentEn": "Ambassador Arsène TATSAZEU received a special distinction from Mr. Sokol Haliti, Mayor of the city of Viti, in Kosovo, in recognition of his commitment to peace and international cooperation.",
      "contentEs": "El Embajador Arsène TATSAZEU recibió una distinción especial del Sr. Sokol Haliti, Alcalde de la ciudad de Viti, en Kosovo, en reconocimiento a su compromiso con la paz y la cooperación internacional.",
      "contentAr": "حصل السفير أرسين تاتازو على تميز خاص من السيد سوكول هاليتي، عمدة مدينة فيتي، في كوسوفو، تقديرًا لالتزامه بالسلام والتعاون الدولي.",
      "contentZh": "阿尔塞纳·塔塔泽乌大使获科索沃维提市市长Sokol Haliti先生颁发特别荣誉，表彰其对和平与国际合作的贡献。",
      "contentRu": "Посол Арсен Татазеу получил особое отличие от господина Сокола Халити, мэра города Вити, Косово, в признание его приверженности миру и международному сотрудничеству.",
      "date": "2026-08-27"
    },
    {
      "id": "13",
      "title": "Bref échange avec S.E. Dr Vjosa Osmani — Présidente de la République du Kosovo",
      "titleEn": "Brief Exchange with H.E. Dr Vjosa Osmani — President of the Republic of Kosovo",
      "titleEs": "Breve Intercambio con S.E. Dr Vjosa Osmani — Presidenta de la República de Kosovo",
      "titleAr": "تبادل موجز مع السيدة الدكتورة فيوسا أوسماني — رئيسة جمهورية كوسوفو",
      "titleZh": "与科索沃共和国总统Vjosa Osmani博士简短交流",
      "titleRu": "Краткий обмен с Е.П. д-ром Вьосой Османи — Президентом Республики Косово",
      "content": "Bref échange entre l'Ambassadeur Arsène TATSAZEU et Son Excellence Madame la Présidente de la République du Kosovo, Dr Vjosa Osmani, lors de sa visite officielle au Kosovo.",
      "contentEn": "Brief exchange between Ambassador Arsène TATSAZEU and Her Excellency Dr Vjosa Osmani, President of the Republic of Kosovo, during his official visit to Kosovo.",
      "contentEs": "Breve intercambio entre el Embajador Arsène TATSAZEU y Su Excelencia la Dra. Vjosa Osmani, Presidenta de la República de Kosovo, durante su visita oficial al Kosovo.",
      "contentAr": "تبادل موجز بين السفير أرسين تاتازو وسعادة الدكتورة فيوسا أوسماني، رئيسة جمهورية كوسوفو، خلال زيارته الرسمية إلى كوسوفو.",
      "contentZh": "阿尔塞纳·塔塔泽乌大使在正式访问科索沃期间，与科索沃共和国总统Vjosa Osmani阁下进行简短交流。",
      "contentRu": "Краткий обмен между послом Арсеном Татазеу и Её Превосходительством д-ром Вьосой Османи, Президентом Республики Косово, во время его официального визита в Косово.",
      "date": "2026-08-28"
    },
    {
      "id": "14",
      "title": "World Peace Forum in Kosovo — Viti, 25–29 Août 2026",
      "titleEn": "World Peace Forum in Kosovo — Viti, August 25–29, 2026",
      "titleEs": "Foro Mundial por la Paz en Kosovo — Viti, 25–29 de agosto de 2026",
      "titleAr": "منتدى السلام العالمي في كوسوفو — فيتي، 25–29 أغسطس 2026",
      "titleZh": "科索沃世界和平论坛 — 维提，2026年8月25–29日",
      "titleRu": "Всемирный форум за мир в Косово — Вити, 25–29 августа 2026",
      "content": "Du 25 au 29 août 2026, l'Ambassadeur Dr. Arsène TATSAZEU a activement contribué à l'organisation du World Peace Forum à Viti, Kosovo. L'événement a réuni des jeunes de différents pays, des diplomates et des leaders engagés pour la paix, la stabilité et le développement durable, aboutissant à une Déclaration destinée aux Nations Unies. L'Ambassadeur y a reçu une distinction honorifique de la Municipalité de Viti, en présence de nombreux diplomates et de la Présidente de la République du Kosovo.",
      "contentEn": "From August 25 to 29, 2026, Ambassador Dr. Arsène TATSAZEU actively contributed to the organization of the World Peace Forum in Viti, Kosovo. The event brought together young people from different countries, diplomats and leaders committed to peace, stability and sustainable development, resulting in a Declaration intended for the United Nations. The Ambassador received an honorary distinction from the Municipality of Viti, in the presence of numerous diplomats and the President of the Republic of Kosovo.",
      "contentEs": "Del 25 al 29 de agosto de 2026, el Embajador Dr. Arsène TATSAZEU contribuyó activamente a la organización del Foro Mundial por la Paz en Viti, Kosovo. El evento reunió a jóvenes de diferentes países, diplomáticos y líderes comprometidos con la paz, la estabilidad y el desarrollo sostenible, dando lugar a una Declaración destinada a las Naciones Unidas. El Embajador recibió una distinción honorífica del Municipio de Viti, en presencia de numerosos diplomáticos y de la Presidenta de la República de Kosovo.",
      "contentAr": "من 25 إلى 29 أغسطس 2026، أسهم السفير الدكتور أرسين تاتازو بفعالية في تنظيم منتدى السلام العالمي في فيتي، كوسوفو. جمع الحدث شبابًا من بلدان مختلفة ودبلوماسيين وقادة ملتزمين بالسلام والاستقرار والتنمية المستدامة، وأسفر عن إعلان موجه إلى الأمم المتحدة. حصل السفير على تميز شرفي من بلدية فيتي، بحضور العديد من الدبلوماسيين ورئيسة جمهورية كوسوفو.",
      "contentZh": "2026年8月25日至29日，阿尔塞纳·塔塔泽乌大使积极推动在科索沃维提举办的世界和平论坛。活动汇聚各国青年、外交官及致力于和平、稳定与可持续发展的领袖，最终形成提交联合国的宣言。大使在众多外交官及科索沃共和国总统见证下获维提市颁发的荣誉表彰。",
      "contentRu": "С 25 по 29 августа 2026 года посол д-р Арсен Татазеу активно содействовал организации Всемирного форума за мир в Вити, Косово. Мероприятие объединило молодёжь разных стран, дипломатов и лидеров, приверженных миру, стабильности и устойчивому развитию, и завершилось Декларацией, предназначенной для ООН. Посол получил почётное отличие муниципалитета Вити в присутствии многочисленных дипломатов и Президента Республики Косово.",
      "date": "2026-08-29"
    },
    {
      "id": "15",
      "title": "Conférence avec le Secrétariat des Relations Extérieures du Mexique",
      "titleEn": "Conference with the Mexican Secretariat of Foreign Affairs",
      "titleEs": "Conferencia con la Secretaría de Relaciones Exteriores de México",
      "titleAr": "مؤتمر مع السكرتارية الخارجية المكسيكية",
      "titleZh": "与墨西哥外交部会议",
      "titleRu": "Конференция с Министерством иностранных дел Мексики",
      "content": "Conférence sur la coopération internationale et l'immigration avec le Secrétariat des Relations Extérieures du Mexique. Bref dialogue avec la sénatrice Karina Isabel Ruiz après l'événement qui s'est déroulé au Mexique.",
      "contentEn": "Conference on international cooperation and immigration with the Mexican Secretariat of Foreign Affairs. Brief dialogue with Senator Karina Isabel Ruiz after the event held in Mexico.",
      "contentEs": "Conferencia sobre cooperación internacional e inmigración con la Secretaría de Relaciones Exteriores de México. Breve diálogo con la senadora Karina Isabel Ruiz después del evento celebrado en México.",
      "contentAr": "مؤتمر حول التعاون الدولي والهجرة مع السكرتارية الخارجية للمكسيك. حوار موجز مع السيناتور كارينا إيزابيل رويز بعد الحدث الذي أُقيم في المكسيك.",
      "contentZh": "与墨西哥外交部就国际合作与移民问题举行会议。活动结束后与参议员Karina Isabel Ruiz进行简短交流。",
      "contentRu": "Конференция по международному сотрудничеству и иммиграции с Министерством иностранных дел Мексики. Краткий диалог с сенатором Кариной Изабель Руис после мероприятия в Мексике.",
      "date": "2026-07-15"
    },
    {
      "id": "16",
      "title": "Présence à l'Office des Nations Unies — Vienne, Autriche",
      "titleEn": "United Nations Office — Vienna, Austria",
      "titleEs": "Oficina de las Naciones Unidas — Viena, Austria",
      "titleAr": "مكتب الأمم المتحدة — فيينا، النمسا",
      "titleZh": "联合国办事处 — 奥地利维也纳",
      "titleRu": "Офис Организации Объединённых Наций — Вена, Австрия",
      "content": "Mission diplomatique à l'Office des Nations Unies à Vienne, Autriche. Participation aux sessions des commissions onusiennes et renforcement de la coopération internationale.",
      "contentEn": "Diplomatic mission to the United Nations Office in Vienna, Austria. Participation in UN commission sessions and strengthening of international cooperation.",
      "contentEs": "Misión diplomática a la Oficina de las Naciones Unidas en Viena, Austria. Participación en sesiones de las comisiones de la ONU y fortalecimiento de la cooperación internacional.",
      "contentAr": "مهمة دبلوماسية إلى مكتب الأمم المتحدة في فيينا، النمسا. المشاركة في جلسات لجان الأمم المتحدة وتعزيز التعاون الدولي.",
      "contentZh": "对奥地利维也纳联合国办事处的外交访问。参加联合国各委员会会议，加强国际合作。",
      "contentRu": "Дипломатическая миссия в офис ООН в Вене, Австрия. Участие в сессиях комиссий ООН и укрепление международного сотрудничества.",
      "date": "2026-06-17"
    },
    {
      "id": "17",
      "title": "Invitation Officielle — Primer Foro Internacional en Michoacán (CONAPRESU)",
      "titleEn": "Official Invitation — First International Forum in Michoacán (CONAPRESU)",
      "titleEs": "Invitación Oficial — Primer Foro Internacional en Michoacán (CONAPRESU)",
      "titleAr": "دعوة رسمية — أول المنتدى الدولي في ميشواكان (كونابريسو)",
      "titleZh": "正式邀请 — 米却肯首届国际论坛（CONAPRESU）",
      "titleRu": "Официальное приглашение — Первый международный форум в Мичоакане (CONAPRESU)",
      "content": "La CONAPRESU (Coalición Internacional, Nacional y Estatal de Prevención del Suicidio) a invité officiellement l'Ambassadeur Arsène TATSAZEU à participer au Primer Foro Internacional en Michoacán « Cambiando la Narrativa », le 18 septembre 2026 à l'Universidad Don Vasco, Uruapan, Michoacán, Mexique.",
      "contentEn": "CONAPRESU (International, National and State Coalition for Suicide Prevention) has officially invited Ambassador Arsène TATSAZEU to participate in the First International Forum in Michoacán “Changing the Narrative”, on September 18, 2026 at Universidad Don Vasco, Uruapan, Michoacán, Mexico.",
      "contentEs": "La CONAPRESU (Coalición Internacional, Nacional y Estatal de Prevención del Suicidio) ha invitado oficialmente al Embajador Arsène TATSAZEU a participar en el Primer Foro Internacional en Michoacán “Cambiando la Narrativa”, el 18 de septiembre de 2026 en la Universidad Don Vasco, Uruapan, Michoacán, México.",
      "contentAr": "دعت CONAPRESU (ال Coalition الدولية والوطنية والدولية لمنع الانتحار) السفير أرسين تاتازو رسميًا للمشاركة في أول المنتدى الدولي في ميشواكان «تغيير السرد»، في 18 سبتمبر 2026 بجامعة دون فاسكو، أوروابان، ميشواكان، المكسيك.",
      "contentZh": "墨西哥自杀预防国际、国家与州联盟（CONAPRESU）正式邀请阿尔塞纳·塔塔泽乌大使参加将于2026年9月18日在墨西哥米却肯州乌阿潘市Don Vasco大学举办的米却肯首届国际论坛——“改变叙事”。",
      "contentRu": "CONAPRESU (Международная, национальная и государственная коалиция по предотвращению самоубийств) официально пригласила посла Арсена Татазеу принять участие в Первом международном форуме в Мичоакане «Меняем нарратив», 18 сентября 2026 года в Universidad Don Vasco, Уруапан, Мичоакан, Мексика.",
      "date": "2026-09-12"
    }
  ]
};

// ── Asset URL helper ──────────────────
const ASSETS_BASE = 'https://cdn.jsdelivr.net/gh/lemboupharel/arsenediplomacy@main';

function assetUrl(p) {
  if (!p) return '';
  if (p.startsWith('http') || p.startsWith('/')) return p;
  return ASSETS_BASE + '/' + p;
}

// ── i18n helpers for dynamic content ──
const LANG_SUFFIX = { en:'En', es:'Es', ar:'Ar', zh:'Zh', ru:'Ru' };
const MONTH_LOCALES = { fr:'fr-FR', en:'en-US', es:'es-ES', ar:'ar', zh:'zh-CN', ru:'ru-RU' };
const CATEGORY_KEYS = { Diplomacy:'filter_dip', Certificate:'filter_cert', Publication:'filter_pub', Partnership:'filter_part' };

function trField(item, base) {
  const s = LANG_SUFFIX[lang];
  if (s) {
    const v = item[base + s];
    if (v) return v;
    const en = item[base + 'En'];
    if (en) return en;
  }
  return item[base] || '';
}

function catLabel(cat) {
  if (!cat) return i18n[lang].cat_general;
  const key = CATEGORY_KEYS[cat];
  return key ? i18n[lang][key] : cat;
}

function parseItemDate(d) {
  if (!d) return 0;
  if (/^\d{4}$/.test(d)) return new Date(d + '-01-01T00:00:00').getTime();
  const t = new Date(d.length === 10 ? d + 'T00:00:00' : d).getTime();
  return isNaN(t) ? 0 : t;
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
let allNews = [];
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
  // Newest first (year-only dates sort as Jan 1 of that year)
  allRealizations = [...staticData.realizations].sort((a, b) => parseItemDate(b.date) - parseItemDate(a.date));
  allAlbums = [...staticData.albums].sort((a, b) => parseItemDate(b.date) - parseItemDate(a.date));
  allVideos = staticData.videos;
  allNews = [...staticData.news].sort((a, b) => parseItemDate(b.date) - parseItemDate(a.date));
  
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
  renderNews(allNews);
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
  if (allVideos.length) renderVideos();
  if (allNews.length) renderNews(allNews);
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
          ${r.featured ? `<span class="real-card-featured">⭐ ${i18n[lang].featured}</span>` : ''}
        </div>
        <div class="real-card-body">
          <span class="real-card-cat">${catLabel(r.category)}</span>
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
    container.innerHTML = `<div class="loading">${i18n[lang].empty_gallery}</div>`;
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
          <h3 class="album-title">${trField(album, 'title')}</h3>
          <p class="album-desc">${trField(album, 'description')}</p>
          <div class="album-line"></div>
        </div>
        <div class="album-stack">
          ${stackPhotos.map((p, i) => `
            <div class="album-stack-photo">
              <img src="${assetUrl(p.url)}" alt="">
            </div>
          `).join('')}
          <div class="album-stack-info">
            <i class="fas fa-images"></i> ${i18n[lang].photos_count.replace('{n}', album.photos.length)}
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

  title.textContent = trField(album, 'title');
  desc.textContent = trField(album, 'description');
  
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
    grid.innerHTML = `<div class="loading" style="color:rgba(255,255,255,.4)">${i18n[lang].empty_videos}</div>`;
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
        <h3 class="video-card-title">${trField(v, 'title')}</h3>
        <p class="video-card-desc">${trField(v, 'description')}</p>
      </div>
    </div>`;
  }).join('');
}

// ── News ──────────────────────────────
function renderNews(items) {
  const list = document.getElementById('newsList');
  if (!list) return;
  if (!items.length) {
    list.innerHTML = `<div class="loading">${i18n[lang].empty_news}</div>`;
    return;
  }
  list.innerHTML = items.map(n => {
    const d = new Date(n.date || Date.now());
    return `
      <article class="news-item">
        <div class="news-date">
          <div class="news-date-day">${String(d.getDate()).padStart(2,'0')}</div>
          <div class="news-date-month">${d.toLocaleString(MONTH_LOCALES[lang] || 'en-US', {month:'short'}).toUpperCase()}</div>
          <div class="news-date-year">${d.getFullYear()}</div>
        </div>
        <div>
          <h3 class="news-title">${trField(n, 'title')}</h3>
          <p class="news-content">${trField(n, 'content').substring(0, 280)}${trField(n, 'content').length > 280 ? '…' : ''}</p>
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
