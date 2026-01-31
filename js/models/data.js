// js/models/data.js - DATOS COMPLETOS
export const siteData = {
  // ===== HEADER =====
  header: {
    logo: { text: "PERRONAUTAS" },
    navItems: [
      { text: "Inicio", href: "#hero", isCta: false },
      { text: "Conócenos", href: "#staff", isCta: false },  // ← Cambiado de "Staff"
      { text: "Clases", href: "#clases", isCta: false },
      { text: "Modalidades", href: "#modalidades", isCta: false },    // ← Nuevo: ¿Es esto "Modalidades"?
      { text: "Contacto", href: "#contacto", isCta: true }
    ]
  },

  // ===== SECCIÓN 1: HERO/SLIDER (perronautas-1) =====
  heroSlider: [
    {
      id: 1,
      title: "Entrenamiento profesional para tu perro",
      subtitle: "Transformamos paseos estresantes en momentos de conexión",
      image: "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      ctaText: "Descubre nuestras clases",
      ctaLink: "#clases"
    },
    {
      id: 2,
      title: "Educación canina con ciencia y empatía",
      subtitle: "Métodos 100% basados en reforzamiento positivo",
      image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      ctaText: "Conoce nuestro método",
      ctaLink: "#modalidades"
    }
  ],

  // ===== SECCIÓN 2: STAFF/QUIÉNES SOMOS (perronautas-2) =====
  team: {
    id: "staff",
    sectionTitle: "Conócenos",
    description: "Somos un equipo de etólogos y entrenadores certificados apasionados por el bienestar animal. Combinamos ciencia del comportamiento con experiencia práctica.",
    members: [
      {
        name: "Ana García",
        role: "Directora & Etóloga",
        bio: "Máster en Etología. 12 años de experiencia.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Carlos López",
        role: "Entrenador Senior",
        bio: "Especialista en perros reactivos. Certificación ICB.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Marta Rodríguez",
        role: "Instructora de Cachorros",
        bio: "Especialista en socialización temprana y juegos educativos.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ],
    tagline: "No solo entrenamos perros, educamos familias para una convivencia feliz."
  },

  // ===== SECCIÓN 3: CLASES (perronautas-3) =====
  classes: {
    id: "clases",
    sectionTitle: "Nuestras Clases",
    intro: "Programas diseñados para cada etapa y necesidad",
    items: [
      {
        title: "Cachorros",
        description: "Socialización, control de mordida, primeras órdenes",
        features: ["8 semanas", "Grupos reducidos", "Kit de bienvenida"],
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Obediencia Básica",
        description: "Las órdenes esenciales para el día a día",
        features: ["12 sesiones", "Incluye material", "Seguimiento personal"],
        image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Modificación de Conducta",
        description: "Para perros reactivos, con miedos o ansiedad",
        features: ["Evaluación previa", "Plan personalizado", "Soporte 24/7"],
        image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ]
  },

  // ===== SECCIÓN 4: MODALIDADES (perronautas-4) =====
  modalities: {
    id: "modalidades",
    sectionTitle: "Modalidades",
    items: [
      {
        type: "online",
        title: "Clases Online",
        description: "Aprendizaje desde la comodidad de tu hogar",
        features: [
          "Sesiones en vivo por Zoom",
          "Material descargable",
          "Foro de comunidad",
          "Grabaciones disponibles"
        ],
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        type: "presencial",
        title: "Clases Presenciales",
        description: "Interacción directa en nuestro centro especializado",
        features: [
          "Instalaciones equipadas",
          "Parque de obstáculos",
          "Grupos reducidos",
          "Estacionamiento gratuito"
        ],
        image: "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  },

  // ===== SECCIÓN 5: RESEÑAS (perronautas-5) =====
  reviews: {
    id: "reseñas",
    sectionTitle: "Lo que dicen nuestros clientes",
    items: [
      {
        name: "Laura M.",
        text: "Mi perro Bolt pasó de tirar de la correa a caminar a mi lado en solo 4 semanas. ¡Increíble!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Miguel R.",
        text: "Las clases online me salvaron. Vivo en el campo y no tenía acceso a un buen entrenador.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Sofía G.",
        text: "El equipo es super profesional. Mi cachorro ahora hace sus necesidades donde debe y ya no muerde los muebles.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      }
    ]
  },

  // ===== SECCIÓN CONTACTO =====
  contact: {
    id: "contacto",
    sectionTitle: "Contacto",
    subtitle: "¿Tienes dudas? Escríbenos",
    formTitle: "Envíanos un mensaje",
    info: {
      email: "hola@perronautas.com",
      phone: "+34 123 456 789",
      address: "Calle del Perro Feliz, 123, Madrid",
      schedule: "Lunes a Viernes: 9:00 - 19:00"
    }
  },

  // ===== FOOTER =====
  footer: {
    logo: "PERRONAUTAS",
    description: "Educación canina profesional con métodos basados en ciencia y empatía.",
    contact: {
      email: "hola@perronautas.com",
      phone: "+34 123 456 789",
      address: "Calle del Perro Feliz, 123, Madrid"
    },
    social: [
      { name: "Instagram", icon: "bi-instagram", url: "#" },
      { name: "Facebook", icon: "bi-facebook", url: "#" },
      { name: "YouTube", icon: "bi-youtube", url: "#" }
    ],
    copyright: "© 2023 Perronautas. Todos los derechos reservados."
  }
};