export const translations = {
	en: {
		"interaction.skip-to-main": "Skip to main content",

		"interaction.main-menu": "Main menu",
		"interaction.close": "Close",
		"interaction.open": "Open Menu",

		"menu.home": "Home",
		"menu.chapters": "Chapters",
		"menu.characters": "Characters",
		"menu.about": "About",
		"menu.language": "Language",

		"comic.chapter.singular": "Chapter",
		"comic.page.singular": "Page",
		"comic.cover.singular": "Cover",

		"strip.heading-main": "Comic page",
		"strip.heading-main-home": "Latest comic page",

		"chapters.pages": "pages",

		"characters.age": "Age",
		"characters.likes": "Likes",
		"characters.dislikes": "Dislikes",
		"characters.years-old": "years old",

		"landmarks.navigation-page": "Page navigation",
		"landmarks.navigation-comic": "Comic navigation",
		"landmarks.next-update": "Next update",
		"landmarks.characters": "Characters",
		"landmarks.donations": "Donations",
		"landmarks.navigation-social": "Social navigation",
		"landmarks.comments": "Comments",
		"landmarks.social": "Social",
		"landmarks.newsletter": "Newsletter",
		"landmarks.strip-aside": "Current page information",
		"landmarks.author": "Author",

		"newsletter.title": "Newsletter",
		"newsletter.description": "Subscribe for new release and other updates!",
		"newsletter.subscribe": "Subscribe",
		"newsletter.success": "You have successfully joined our newsletter!",
		"newsletter.error": `Something went wrong! Please try again later, or <a href="https://github.com/zogar1993/degaussing-astro/issues">post an issue</a> if the problem persists.`,
		"newsletter.recaptcha-policy": `*This form is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.`,

		"seo.description": "Our young friends escape their hometown and make a run through the continent of Gaoan, but it seems like nowhere is really safe! Where could a mage go to avoid persecution? What secrets do Alan's sword hold? Old grudges are brewing beneath the surface and war is coming from overseas.",

		"transcript.image.alt-text": "Comic page. Complete transcript for the content below.",
		"transcript.title": "Transcript",
		"transcript.no-description": "This page hasn't been transcribed yet.",
		"transcript.button.expanded-false": "Open transcript",
		"transcript.button.expanded-true": "Close transcript",

		"secondary-nav.first": "First page",
		"secondary-nav.previous": "Previous page",
		"secondary-nav.next": "Next page",
		"secondary-nav.last": "Last page",
		"secondary-nav.back": "Back",

		"about.story": "About the story",
		"about.authors": "About the authors",

		"url.chapters": "chapters",
		"url.pages": "pages",
		"url.characters": "characters",
		"url.about": "about"
	},
	es: {
		"interaction.skip-to-main": "Saltar al contenido principal",

		"interaction.main-menu": "Menú principal",
		"interaction.close": "Cerrar",
		"interaction.open": "Abir Menu",

		"menu.home": "Inicio",
		"menu.chapters": "Capítulos",
		"menu.characters": "Personajes",
		"menu.about": "Acerca de",
		"menu.language": "Lenguaje",

		"strip.heading-main": "Página del cómic",
		"strip.heading-main-home": "Última página del cómic",
		
		"comic.chapter.singular": "Capítulo",
		"comic.page.singular": "Página",
		"comic.cover.singular": "Portada",

		"chapters.pages": "páginas",

		"characters.age": "Edad",
		"characters.likes": "Le gusta",
		"characters.dislikes": "Le disgusta",
		"characters.years-old": "años",

		"landmarks.navigation-page": "Navegación de la página",
		"landmarks.navigation-comic": "Navegación del cómic",
		"landmarks.next-update": "Próxima actualización",
		"landmarks.characters": "Personajes",
		"landmarks.donations": "Donaciones",
		"landmarks.navigation-social": "Navegación social",
		"landmarks.comments": "Comentarios",
		"landmarks.social": "Social",
		"landmarks.newsletter": "Novedades",
		"landmarks.strip-aside": "Information de página actual",
		"landmarks.author": "Autor",

		"newsletter.title": "Novedades",
		"newsletter.description": "¡Enterate cuando salen nuevas paginas y otras noticias!",
		"newsletter.subscribe": "Suscribir",
		"newsletter.success": "¡Te suscribiste al newsletter exitosamente!",
		"newsletter.error": "Ha ocurrido un error. Inténtelo nuevamente más tarde, o <a href=\"https://github.com/zogar1993/degaussing-astro/issues\">reporte el error</a> si este persiste.",
		"newsletter.recaptcha-policy": `*Este formulario está protegido por reCAPTCHA de Google y aplican su <a href="https://policies.google.com/privacy">Política de Privacidad</a> y sus <a href="https://policies.google.com/terms">Términos de Servicio</a>.`,

		"seo.description": "Nuestros jovenes amigos escapan de su pueblo y emprenden un viaje a través del continente de Gaoan, ¡Pero ningún lugar es seguro! ¿Donde podría ir un mago para evitar ser perseguido? ¿Que secretos guarda la espada de Alan? Antiguos rencores no se olvidan, cruzando el mar se preparan para la guerra.",

		"transcript.image.alt-text": "Pagina del cómic. La transcripción completa del contenido se encuentra debajo.",
		"transcript.title": "Transcripción",
		"transcript.no-description": "Aún no se ha realizado la descripción de esta página.",
		"transcript.button.expanded-false": "Abrir transcripción",
		"transcript.button.expanded-true": "Cerrar transcripción",

		"secondary-nav.first": "Primera página",
		"secondary-nav.previous": "Página anterior",
		"secondary-nav.next": "Página siguiente",
		"secondary-nav.last": "Última página",
		"secondary-nav.back": "Atrás",

		"about.story": "Acerca de la historia",
		"about.authors": "Acerca de los autores",

		"url.chapters": "capitulos",
		"url.pages": "paginas",
		"url.characters": "personajes",
		"url.about": "acerca-de"
	}
} as const

export const URL_PARTS = [
	{ en: translations["en"]["url.chapters"], es: translations["es"]["url.chapters"] },
	{ en: translations["en"]["url.pages"], es: translations["es"]["url.pages"] },
	{ en: translations["en"]["url.characters"], es: translations["es"]["url.characters"] },
	{ en: translations["en"]["url.about"], es: translations["es"]["url.about"] }
] as const
