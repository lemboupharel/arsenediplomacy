/* ═══════════════════════════════════════
   Portfolio App.js — Frontend Logic (Static Version)
   Dr. Arsène Romaric TATSAZEU
═══════════════════════════════════════ */

// ── Translation Map ───────────────────
const i18n = {
  fr: {
    hero_eyebrow:'Diplomate · Éducateur · Entrepreneur',
    hero_subtitle:'Ambassadeur et Envoyé Spécial — Diplomatie Éducative & Coopération Interculturelle (Afrique). Soutenir le développement durable à travers l\'Europe, l\'Asie, l\'Amérique Latine et l\'Afrique par l\'éducation, la diplomatie et la coopération interculturelle.',
    hero_subtitle_mockup:'Ambassadeur et Envoyé Spécial — Diplomatie Éducative & Coopération Interculturelle (Afrique). Soutenir le développement durable à travers l\'Europe, l\'Asie, l\'Amérique Latine et l\'Afrique par l\'éducation, la diplomatie et la coopération interculturelle.',
    hero_cta1:'Voir mes Réalisations', hero_cta2:'Me Contacter',
    stat_real:'Réalisations Majeures', stat_cont:'Continents', stat_inst:'Institutions Partenaires',
    about_eyebrow:'Parcours & Vision', about_title:'Un Diplomate au Service de la Paix Mondiale',
    about_p1:'Le Dr. Arsène Romaric TATSAZEU est un Ambassadeur d\'envergure internationale, expert en Psychologie Sociale et Entrepreneur visionnaire. Son parcours exceptionnel le place au croisement de la diplomatie éducative, du développement interculturel et de la coopération internationale à l\'échelle de quatre continents (Afrique, Europe, Amérique Latine et Asie).',
    about_p2:'Fondateur de l\'International Diaspora Foundation (IDF) Latino-Africano, il consacre son action à mobiliser la diaspora africaine et hispanique au service du développement durable, de la paix et de l\'éducation.',
    about_cta:'Explorer mes travaux →',
    f_name:'Nom Complet', f_role:'Rôle Principal', f_domain:'Domaine', f_action:'Champ d\'Action',
    missions_eyebrow:'Engagement Institutionnel', missions_title:'Missions & Fonctions',
    missions_sub:'Une présence active dans les plus grandes institutions diplomatiques et humanitaires mondiales.',
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
    view_pdf:'Consulter le PDF →', view_doc:'Voir Document →', view_cert:'Voir Certificat →',
    no_results:'Aucun résultat trouvé.', loading:'Chargement…'
  },
  en: {
    hero_eyebrow:'Diplomat · Educator · Entrepreneur',
    hero_subtitle:'Ambassador and Special Envoy — Educational Diplomacy & Intercultural Cooperation (Africa). Supporting sustainable development across Europe, Asia, Latin America and Africa through education, diplomacy and intercultural cooperation.',
    hero_subtitle_mockup:'Ambassador and Special Envoy — Educational Diplomacy & Intercultural Cooperation (Africa). Supporting sustainable development across Europe, Asia, Latin America and Africa through education, diplomacy and intercultural cooperation.',
    hero_cta1:'View My Work', hero_cta2:'Get in Touch',
    stat_real:'Major Achievements', stat_cont:'Continents', stat_inst:'Partner Institutions',
    about_eyebrow:'Biography & Vision', about_title:'A Diplomat in Service of World Peace',
    about_p1:'Dr. Arsène Romaric TATSAZEU is an Ambassador of international stature, Social Psychology Expert and visionary entrepreneur. His exceptional journey places him at the crossroads of educational diplomacy, intercultural development and international cooperation across four continents (Africa, Europe, Latin America and Asia).',
    about_p2:'As founder of the International Diaspora Foundation (IDF) Latino-Africano, he mobilizes the African and Hispanic diaspora in service of sustainable development, peace and education.',
    about_cta:'Explore my work →',
    f_name:'Full Name', f_role:'Primary Role', f_domain:'Domain', f_action:'Area of Action',
    missions_eyebrow:'Institutional Engagement', missions_title:'Missions & Roles',
    missions_sub:'An active presence in the world\'s leading diplomatic and humanitarian institutions.',
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
    view_pdf:'View PDF →', view_doc:'View Document →', view_cert:'View Certificate →',
    no_results:'No results found.', loading:'Loading…'
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
      "imageUrl": "",
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
      "imageUrl": "uploads/realisations/image_of_2_Diplomatic_Appointment_Announcement-uyIG7KI1xkW6R5eRgZn1ejhbKC5spy.jpg",
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
      "imageUrl": "uploads/realisations/image_of_3_HFF_Representaive_at_Commission_on_the_status_of_women_-jLiAMpdOBC3U6JKZyxwCZs5mq5xuPn.jpg",
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
      "imageUrl": "",
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
      "imageUrl": "uploads/realisations/image_of_6_Resilience_partnerships_and_global_realities-D1qsWKiJO7azqOqwLPJ5MEYpDyqsWr.jpeg",
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
      "imageUrl": "uploads/realisations/image_of_8_Arsene_Romaric_TATSAZEU_KENFACK_vision_Statement_to_support_sustainable_development_-rG8yhVrMAwz93zTw5ogWz7JIAfErAQ.jpeg",
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
      "imageUrl": "uploads/realisations/image_of_9_GOEDFA_Certificate_of_Appointment-chqKV852FlkZLlXTcc0iHW5s0QRwV7.jpeg",
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
      "imageUrl": "uploads/realisations/image_of_10_IGO_diplomatic_identification_face-TbMWFDLjhiai405gohDyKS0WJWkzv0.png",
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
      "imageUrl": "",
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
    }
  ],
  news: [
    {
      "id": "1",
      "title": "test",
      "content": "test",
      "date": "2026-05-19"
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
  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = lang === 'fr' ? 'EN' : 'FR';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (i18n[lang][key]) el.placeholder = i18n[lang][key];
  });
  if (allRealizations.length) renderRealizations();
  if (allPhotos.length) renderGallery();
}
function toggleLang() {
  lang = lang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('portfolioLang', lang);
  applyLang();
}

// ── Nav ───────────────────────────────
function initNav() {
  document.getElementById('themeBtn')?.addEventListener('click', toggleTheme);
  document.getElementById('langBtn')?.addEventListener('click', toggleLang);
  document.getElementById('burgerBtn')?.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
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
    const imgHtml = r.imageUrl
      ? `<img src="${assetUrl(r.imageUrl)}" alt="${title}" loading="lazy">`
      : `<div class="real-card-img-placeholder">${getCategoryIcon(r.category)}</div>`;
    const pdfLink = r.pdfUrl
      ? `<a href="${assetUrl(r.pdfUrl)}" target="_blank" class="real-card-link" rel="noopener"><i class="fas fa-file-pdf"></i> ${i18n[lang].view_pdf}</a>` : '';
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
            ${pdfLink}
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
