import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.telehealth': 'Telehealth',
    'nav.locations': 'Locations',
    'nav.book': 'Book Consultation',
    'header.title': 'Carlos Camacho',
    'header.subtitle': 'Registered Psychologist',

    // Hero
    'hero.badge': 'Registered Psychologist · Practising since 1996',
    'hero.title.1': 'Expert psychological',
    'hero.title.2': 'support for your journey',
    'hero.desc': 'Providing evidence-based mental health care across New South Wales since 1996. Over 30 years of clinical experience, offered in English and Spanish — in-person across Sydney and the Central Coast, or via secure telehealth statewide.',
    'hero.cta.primary': 'Enquire Now',
    'hero.cta.secondary': 'View Services',

    // Philosophy
    'phil.title': 'The "Pat Yourself on the Back" Philosophy',
    'phil.desc': 'Acknowledging personal milestones and recognizing your own resilience is a crucial step in the therapeutic process. My practice incorporates the philosophy of acknowledging your efforts—taking a moment to "pat yourself on the back"—as a foundation for building enduring mental well-being and self-efficacy.',

    // Services
    'services.title': 'Comprehensive Psychological Services',
    'services.subtitle': 'Professional, evidence-based psychological treatment tailored to your unique circumstances.',
    
    'services.dep.title': 'Treatment for Depression',
    'services.dep.desc': 'Using structured, evidence-based approaches, we work collaboratively to understand the underlying factors of your low mood, develop practical coping strategies, and gradually restore a sense of purpose and vitality.',
    
    'services.anx.title': 'Managing Anxiety',
    'services.anx.desc': 'Anxiety disorders require targeted interventions. Therapy focuses on identifying triggers, challenging unhelpful thought patterns, and implementing effective relaxation and cognitive restructuring techniques.',
    
    'services.est.title': 'Building Self-Esteem',
    'services.est.desc': 'Through guided therapeutic exploration, we address negative self-beliefs and cultivate a more balanced, self-compassionate perspective, empowering you to navigate life with confidence.',
    
    'services.work.title': 'WorkCover & SIRA Claims',
    'services.work.desc': 'As a SIRA-approved psychologist, Carlos provides targeted treatment plans aimed at facilitating psychological recovery, managing trauma, and supporting a safe, sustainable return to work.',

    'services.tele.title': 'Telehealth & Phone Consultations',
    'services.tele.desc': "Carlos is very much aware of life's demands on people. Between work, family, and daily responsibilities, finding time for an in-person appointment isn't always possible. To ensure everyone has access to support, Carlos is happy to provide secure, confidential telephone and video consultations for clients right across New South Wales.",

    // About
    'about.label': 'Meet Carlos',
    'about.title': 'Dedicated Mental Health Professional',
    'about.desc': 'Born in Uruguay and raised across South America before calling Australia home, Carlos has spent over three decades helping people navigate life\'s most challenging moments. Registered Psychologist, philosopher, author, and musician — his multicultural background shapes a deeply empathetic, evidence-based approach to care.',
    'about.quals': 'Academic Qualifications',
    'about.qual.1': 'BA — Psychology & Social Sciences',
    'about.qual.2': 'MA — Psychology',
    'about.qual.3': 'Diploma of Philosophy',
    'about.radio.title': 'Radio & "Private Universe" Podcast',
    'about.radio.desc': 'Carlos hosts the "Mind Matters" segment on FM 93.3 Cruze every Monday after 8:30 am, and is the creator of the "Private Universe" podcast — exploring philosophy, psychology, and personal resilience.',
    'about.listen': 'Listen to Private Universe',
    'about.acc.title': 'Accreditations & Expertise',
    'about.acc.desc': 'As a SIRA/WorkCover Accredited provider and MAA Permanent Impairment Assessor, Carlos facilitates psychological recovery, return-to-work strategies, and comprehensive impairment assessments.',
    'about.auth.title': 'Author & Philosopher',
    'about.auth.desc': 'A published author of books for adults and children — including the celebrated "Goodbye Adios Charlie Char" — Carlos shares practical insights on building mental strength and living his "Pat Yourself on the Back" philosophy.',
    'about.browse': 'Browse Books on Amazon',

    // Locations
    'loc.title': 'Servicing New South Wales',
    'loc.desc': 'Whether you prefer the familiarity of an in-person visit at one of our associated clinics, or the convenience of a telehealth consultation from your home, expert psychological care is available statewide.',
    'loc.syd.title': 'Sydney / Fairfield',
    'loc.syd.desc': 'Serving the Greater Western Sydney region, Carlos offers extensive experience and bilingual (English/Spanish) support to the diverse Fairfield community. Consultations available at Myhealth Fairfield.',
    'loc.cen.title': 'Gosford / Central Coast / Kanwal',
    'loc.cen.desc': 'Affiliated with Axiom Psychological Services in Gosford and maintaining a presence in Kanwal, Carlos offers accessible, in-person consultations alongside comprehensive telehealth options for the Central Coast.',
    'loc.tweed.title': 'Tweed Heads / Northern Rivers',
    'loc.tweed.desc': 'Carlos understands that life gets busy, which is why he is happy to provide flexible, over-the-phone and video consultations to clients right up to the Queensland border, ensuring you receive the support you need from the comfort of your home.',
    'loc.albury.title': 'Albury / Riverina',
    'loc.albury.desc': 'Aware of the demands on your time and the vastness of regional NSW, Carlos extends his professional services right down to the Victorian border. He is happy to provide support over the phone or via telehealth, ensuring expert care is always within reach.',

    // Footer
    'footer.about': 'Registered Psychologist, philosopher, author, and radio host. Providing evidence-based mental health care across NSW since 1996. SIRA/WorkCover Accredited & MAA Permanent Impairment Assessor.',
    'footer.contact': 'Contact',
    'footer.booking': 'Book by phone or via the enquiry form above.',
    'footer.explore': 'Explore',
    'footer.podcast': '"Private Universe" Podcast',
    'footer.books': 'Books on Amazon',
    'footer.axiom': 'Axiom Psychological Services',
    'footer.emergency.title': 'Emergency Support',
    'footer.emergency.desc': 'If you are in immediate danger or experiencing a mental health crisis, please contact emergency services immediately.',
    'footer.rights': 'All rights reserved.',

    // Intake Form
    'intake.title': 'New Patient Inquiry',
    'intake.desc': 'Please provide your details below to request a consultation. Our team will contact you securely.',
    'intake.fname': 'First Name',
    'intake.lname': 'Last Name',
    'intake.email': 'Email Address',
    'intake.phone': 'Phone Number',
    'intake.dob': 'Date of Birth',
    'intake.location': 'Preferred Location',
    'intake.loc.telehealth': 'Telehealth (Video/Phone)',
    'intake.loc.fairfield': 'Fairfield',
    'intake.loc.gosford': 'Gosford',
    'intake.loc.kanwal': 'Kanwal',
    'intake.reason': 'Primary Reason for Visit',
    'intake.emergency': 'I acknowledge this form is not for crisis support. If in immediate danger, I will call 000 or Lifeline (13 11 14).',
    'intake.submit': 'Request Consultation',
    'intake.submitting': 'Securely submitting...',
    'intake.success.title': 'Request Received',
    'intake.success.desc': 'Thank you. Your consultation request has been securely submitted. We will contact you within 1-2 business days.',

    // Patient Resources
    'res.title': 'Patient Resources & Fact Sheets',
    'res.desc': 'Access AHPRA-compliant, evidence-based informational guides. To ensure privacy, resources are delivered directly to your secure email.',
    'res.item1.title': 'Understanding Anxiety',
    'res.item1.desc': 'An evidence-based overview of anxiety disorders, triggers, and cognitive restructuring techniques.',
    'res.item2.title': 'Navigating Depression',
    'res.item2.desc': 'A clinical guide to understanding low mood, coping strategies, and the path to vitality.',
    'res.item3.title': 'Building Resilience',
    'res.item3.desc': 'Techniques for cultivating a self-compassionate perspective and enduring mental strength.',
    'res.item4.title': 'Workplace Injury & Recovery',
    'res.item4.desc': 'Information on psychological recovery and safe return-to-work strategies under SIRA/WorkCover.',
    'res.btn.request': 'Request Fact Sheet',
    'res.modal.title': 'Request Resource',
    'res.modal.desc': 'Enter your email address to securely receive:',
    'res.modal.email': 'Email Address',
    'res.modal.submit': 'Send to Email',
    'res.modal.submitting': 'Sending securely...',
    'res.modal.success': 'Resource Sent!',
    'res.modal.success.desc': 'Please check your inbox. The fact sheet has been securely dispatched.',
    'res.modal.close': 'Close',

    // Telehealth Guide
    'tele.guide.title': 'Getting Started with Telehealth',
    'tele.guide.s1.title': '1. Book Your Session',
    'tele.guide.s1.desc': 'Submit a request online or call to schedule. You will receive a secure video link via email.',
    'tele.guide.s2.title': '2. Prepare Your Space',
    'tele.guide.s2.desc': 'Find a quiet, private room. Ensure your device has a working camera, microphone, and stable internet.',
    'tele.guide.s3.title': '3. Connect & Begin',
    'tele.guide.s3.desc': 'At the scheduled time, simply click the link provided to join the confidential video room.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'What types of psychological services are offered?',
    'faq.a1': 'We provide evidence-based psychological treatment for conditions including depression, anxiety disorders, and self-esteem issues, as well as psychological recovery related to WorkCover and SIRA claims.',
    'faq.q2': 'Do you offer telehealth consultations?',
    'faq.a2': 'Yes, secure telephone and video consultations are available for clients across New South Wales, providing flexible access to psychological support.',
    'faq.q3': 'Are services available for WorkCover or SIRA claims?',
    'faq.a3': 'Yes. As a SIRA-approved psychologist, Carlos provides targeted treatment plans designed to support psychological recovery and safe, sustainable return-to-work outcomes.',
    'faq.q4': 'What languages are consultations available in?',
    'faq.a4': 'Consultations can be conducted in both English and Spanish.',
  },
  es: {
    // Header
    'nav.services': 'Servicios',
    'nav.about': 'Sobre Mí',
    'nav.telehealth': 'Telesalud',
    'nav.locations': 'Ubicaciones',
    'nav.book': 'Reservar Consulta',
    'header.title': 'Carlos Camacho',
    'header.subtitle': 'Psicólogo Registrado',

    // Hero
    'hero.badge': 'Psicólogo Registrado · Ejerciendo desde 1996',
    'hero.title.1': 'Apoyo psicológico experto',
    'hero.title.2': 'para tu bienestar',
    'hero.desc': 'Brindando atención de salud mental basada en evidencia en toda Nueva Gales del Sur desde 1996. Más de 30 años de experiencia clínica en inglés y español — en persona en Sídney y la Costa Central, o mediante telesalud segura en todo el estado.',
    'hero.cta.primary': 'Consultar Ahora',
    'hero.cta.secondary': 'Ver Servicios',

    // Philosophy
    'phil.title': 'La Filosofía de "Darse una Palmadita en la Espalda"',
    'phil.desc': 'Reconocer los logros personales y tu propia resiliencia es un paso crucial en el proceso terapéutico. Mi práctica incorpora la filosofía de reconocer tus esfuerzos—tomarte un momento para "darte una palmadita en la espalda"—como base para construir un bienestar mental duradero y autoeficacia.',

    // Services
    'services.title': 'Servicios Psicológicos Integrales',
    'services.subtitle': 'Tratamiento psicológico profesional basado en evidencia, adaptado a sus circunstancias únicas.',
    
    'services.dep.title': 'Tratamiento para la Depresión',
    'services.dep.desc': 'Utilizando enfoques estructurados y basados en evidencia, trabajamos en colaboración para comprender los factores subyacentes de su bajo estado de ánimo, desarrollar estrategias prácticas de afrontamiento y restaurar gradualmente un sentido de propósito y vitalidad.',
    
    'services.anx.title': 'Manejo de la Ansiedad',
    'services.anx.desc': 'Los trastornos de ansiedad requieren intervenciones específicas. La terapia se centra en identificar los desencadenantes, desafiar los patrones de pensamiento inútiles e implementar técnicas efectivas de relajación y reestructuración cognitiva.',
    
    'services.est.title': 'Desarrollo de la Autoestima',
    'services.est.desc': 'A través de la exploración terapéutica guiada, abordamos las creencias negativas sobre uno mismo y cultivamos una perspectiva más equilibrada y autocompasiva, capacitándolo para navegar la vida con confianza.',
    
    'services.work.title': 'Reclamaciones WorkCover y SIRA',
    'services.work.desc': 'Como psicólogo aprobado por SIRA, Carlos proporciona planes de tratamiento específicos destinados a facilitar la recuperación psicológica, manejar el trauma y apoyar un regreso al trabajo seguro y sostenible.',

    'services.tele.title': 'Telesalud y Consultas Telefónicas',
    'services.tele.desc': "Carlos es muy consciente de las exigencias de la vida sobre las personas. Entre el trabajo, la familia y las responsabilidades diarias, encontrar tiempo para una cita en persona no siempre es posible. Para garantizar que todos tengan acceso al apoyo, Carlos se complace en ofrecer consultas telefónicas y por video seguras y confidenciales para clientes en toda Nueva Gales del Sur.",

    // About
    'about.label': 'Conoce a Carlos',
    'about.title': 'Profesional Dedicado a la Salud Mental',
    'about.desc': 'Nacido en Uruguay y criado en Sudamérica antes de establecerse en Australia, Carlos ha dedicado más de tres décadas a ayudar a las personas a navegar los momentos más desafiantes de sus vidas. Psicólogo registrado, filósofo, autor y músico — su bagaje multicultural da forma a un enfoque de atención profundamente empático y basado en evidencia.',
    'about.quals': 'Formación Académica',
    'about.qual.1': 'Licenciatura — Psicología y Ciencias Sociales',
    'about.qual.2': 'Maestría — Psicología',
    'about.qual.3': 'Diploma de Filosofía',
    'about.radio.title': 'Radio y Podcast "Private Universe"',
    'about.radio.desc': 'Carlos presenta el segmento "Mind Matters" en FM 93.3 Cruze todos los lunes después de las 8:30 am, y es el creador del podcast "Private Universe" — explorando filosofía, psicología y resiliencia personal.',
    'about.listen': 'Escuchar Private Universe',
    'about.acc.title': 'Acreditaciones y Experiencia',
    'about.acc.desc': 'Como proveedor Acreditado por SIRA/WorkCover y Evaluador de Deterioro Permanente de MAA, Carlos facilita la recuperación psicológica, estrategias de regreso al trabajo y evaluaciones integrales de deterioro.',
    'about.auth.title': 'Autor y Filósofo',
    'about.auth.desc': 'Autor publicado de libros para adultos y niños — incluyendo el celebrado "Goodbye Adios Charlie Char" — Carlos comparte conocimientos prácticos para construir fortaleza mental y vivir la filosofía "Darse una Palmadita en la Espalda".',
    'about.browse': 'Ver Libros en Amazon',

    // Locations
    'loc.title': 'Dando Servicio a Nueva Gales del Sur',
    'loc.desc': 'Ya sea que prefiera la familiaridad de una visita en persona en una de nuestras clínicas asociadas, o la conveniencia de una consulta de telesalud desde su hogar, la atención psicológica experta está disponible en todo el estado.',
    'loc.syd.title': 'Sídney / Fairfield',
    'loc.syd.desc': 'Sirviendo a la región del Gran Sídney Occidental, Carlos ofrece amplia experiencia y apoyo bilingüe (inglés/español) a la diversa comunidad de Fairfield. Consultas disponibles en Myhealth Fairfield.',
    'loc.cen.title': 'Gosford / Costa Central / Kanwal',
    'loc.cen.desc': 'Afiliado a Axiom Psychological Services en Gosford y manteniendo presencia en Kanwal, Carlos ofrece consultas accesibles en persona junto con opciones integrales de telesalud para la Costa Central.',
    'loc.tweed.title': 'Tweed Heads / Northern Rivers',
    'loc.tweed.desc': 'Carlos entiende que la vida se llena de ocupaciones, por lo que se complace en brindar consultas flexibles por teléfono y video a clientes hasta la frontera con Queensland, asegurando que reciba el apoyo que necesita desde la comodidad de su hogar.',
    'loc.albury.title': 'Albury / Riverina',
    'loc.albury.desc': 'Consciente de las demandas de su tiempo y la inmensidad del NSW regional, Carlos extiende sus servicios profesionales hasta la frontera con Victoria. Se complace en brindar apoyo por teléfono o telesalud, asegurando que la atención experta esté siempre a su alcance.',

    // Footer
    'footer.about': 'Psicólogo registrado, filósofo, autor y conductor de radio. Brindando atención de salud mental basada en evidencia en NSW desde 1996. Proveedor acreditado por SIRA/WorkCover y Evaluador de Deterioro Permanente de MAA.',
    'footer.contact': 'Contacto',
    'footer.booking': 'Reserve por teléfono o mediante el formulario de consulta.',
    'footer.explore': 'Explorar',
    'footer.podcast': 'Podcast "Private Universe"',
    'footer.books': 'Libros en Amazon',
    'footer.axiom': 'Axiom Psychological Services',
    'footer.emergency.title': 'Soporte de Emergencia',
    'footer.emergency.desc': 'Si se encuentra en peligro inmediato o experimenta una crisis de salud mental, comuníquese con los servicios de emergencia de inmediato.',
    'footer.rights': 'Todos los derechos reservados.',

    // Intake Form
    'intake.title': 'Consulta para Nuevos Pacientes',
    'intake.desc': 'Por favor, proporcione sus datos a continuación para solicitar una consulta. Nuestro equipo se pondrá en contacto con usted de forma segura.',
    'intake.fname': 'Nombre',
    'intake.lname': 'Apellido',
    'intake.email': 'Correo Electrónico',
    'intake.phone': 'Número de Teléfono',
    'intake.dob': 'Fecha de Nacimiento',
    'intake.location': 'Ubicación Preferida',
    'intake.loc.telehealth': 'Telesalud (Video/Teléfono)',
    'intake.loc.fairfield': 'Fairfield',
    'intake.loc.gosford': 'Gosford',
    'intake.loc.kanwal': 'Kanwal',
    'intake.reason': 'Motivo Principal de la Visita',
    'intake.emergency': 'Reconozco que este formulario no es para apoyo en crisis. Si estoy en peligro inmediato, llamaré al 000 o a Lifeline (13 11 14).',
    'intake.submit': 'Solicitar Consulta',
    'intake.submitting': 'Enviando de forma segura...',
    'intake.success.title': 'Solicitud Recibida',
    'intake.success.desc': 'Gracias. Su solicitud de consulta ha sido enviada de forma segura. Nos comunicaremos con usted en 1-2 días hábiles.',

    // Patient Resources
    'res.title': 'Recursos y Hojas Informativas para Pacientes',
    'res.desc': 'Acceda a guías informativas basadas en evidencia y que cumplen con AHPRA. Para garantizar la privacidad, los recursos se envían directamente a su correo electrónico seguro.',
    'res.item1.title': 'Comprendiendo la Ansiedad',
    'res.item1.desc': 'Una descripción general basada en evidencia de los trastornos de ansiedad, desencadenantes y técnicas de reestructuración cognitiva.',
    'res.item2.title': 'Navegando por la Depresión',
    'res.item2.desc': 'Una guía clínica para comprender el bajo estado de ánimo, las estrategias de afrontamiento y el camino hacia la vitalidad.',
    'res.item3.title': 'Construyendo Resiliencia',
    'res.item3.desc': 'Técnicas para cultivar una perspectiva autocompasiva y una fuerza mental duradera.',
    'res.item4.title': 'Lesiones en el Lugar de Trabajo y Recuperación',
    'res.item4.desc': 'Información sobre recuperación psicológica y estrategias seguras de regreso al trabajo bajo SIRA/WorkCover.',
    'res.btn.request': 'Solicitar Hoja Informativa',
    'res.modal.title': 'Solicitar Recurso',
    'res.modal.desc': 'Ingrese su dirección de correo electrónico para recibir de forma segura:',
    'res.modal.email': 'Correo Electrónico',
    'res.modal.submit': 'Enviar al Correo',
    'res.modal.submitting': 'Enviando de forma segura...',
    'res.modal.success': '¡Recurso Enviado!',
    'res.modal.success.desc': 'Por favor revise su bandeja de entrada. La hoja informativa ha sido enviada de forma segura.',
    'res.modal.close': 'Cerrar',

    // Telehealth Guide
    'tele.guide.title': 'Cómo Empezar con la Telesalud',
    'tele.guide.s1.title': '1. Reserva tu Sesión',
    'tele.guide.s1.desc': 'Envía una solicitud en línea o llama para programar. Recibirás un enlace de video seguro por correo.',
    'tele.guide.s2.title': '2. Prepara tu Espacio',
    'tele.guide.s2.desc': 'Busca una habitación tranquila y privada. Asegúrate de tener cámara, micrófono e internet estable.',
    'tele.guide.s3.title': '3. Conéctate y Comienza',
    'tele.guide.s3.desc': 'A la hora programada, simplemente haz clic en el enlace proporcionado para unirte a la sala de video confidencial.',

    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.q1': '¿Qué tipos de servicios psicológicos se ofrecen?',
    'faq.a1': 'Proporcionamos tratamiento psicológico basado en evidencia para afecciones que incluyen depresión, trastornos de ansiedad y problemas de autoestima, así como recuperación psicológica relacionada con reclamos de WorkCover y SIRA.',
    'faq.q2': '¿Ofrecen consultas de telesalud?',
    'faq.a2': 'Sí, las consultas telefónicas y por video seguras están disponibles para clientes en toda Nueva Gales del Sur, brindando un acceso flexible al apoyo psicológico.',
    'faq.q3': '¿Hay servicios disponibles para reclamos de WorkCover o SIRA?',
    'faq.a3': 'Sí. Como psicólogo aprobado por SIRA, Carlos proporciona planes de tratamiento específicos diseñados para apoyar la recuperación psicológica y resultados de regreso al trabajo seguros y sostenibles.',
    'faq.q4': '¿En qué idiomas están disponibles las consultas?',
    'faq.a4': 'Las consultas se pueden realizar tanto en inglés como en español.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
