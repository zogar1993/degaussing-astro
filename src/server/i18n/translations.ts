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
		"menu.language": "Español",


		"strip.page": "Page",
		"strip.chapter": "Chapter",
		"strip.cover": "Cover",
		"strip.heading-main": "Comic page",
		"strip.heading-main-home": "Latest comic page",

		"chapters.cover": "Cover",
		"chapters.page": "Page",
		"chapters.chapter": "Chapter",
		"chapters.pages": "pages",

		"characters.age": "Age",
		"characters.likes": "Likes",
		"characters.dislikes": "Dislikes",
		"characters.years-old": "years old",

		"landmarks.navigation-page": "Page navigation",
		"landmarks.navigation-comic": "Comic navigation",
		"landmarks.last-update": "Last update",
		"landmarks.characters": "Characters",
		"landmarks.donations": "Donations",
		"landmarks.navigation-social": "Social navigation",
		"landmarks.comments": "Comments",
		"landmarks.social": "Social",
		"landmarks.strip-aside": "Current page information",
		"landmarks.transcript": "Transcript",
		"landmarks.author": "Author",

		"seo.description": "Our young friends escape their hometown and make a run through the continent of Gaoan, but it seems like nowhere is really safe! Where could a mage go to avoid persecution? What secrets do Alan's sword hold? Old grudges are brewing beneath the surface and war is coming from overseas.",

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
		"menu.language": "English",

		"strip.page": "Página",
		"strip.chapter": "Capítulo",
		"strip.cover": "Portada",
		"strip.heading-main": "Página del comic",
		"strip.heading-main-home": "Última página del comic",

		"chapters.cover": "Portada",
		"chapters.page": "Página",
		"chapters.chapter": "Capítulo",
		"chapters.pages": "páginas",

		"characters.age": "Edad",
		"characters.likes": "Le gusta",
		"characters.dislikes": "Le disgusta",
		"characters.years-old": "años",

		"landmarks.navigation-page": "Navegación de la página",
		"landmarks.navigation-comic": "Navegación del comic",
		"landmarks.last-update": "Última actualización",
		"landmarks.characters": "Personajes",
		"landmarks.donations": "Donaciones",
		"landmarks.navigation-social": "Navegación social",
		"landmarks.comments": "Comentarios",
		"landmarks.social": "Social",
		"landmarks.strip-aside": "Information de página actual",
		"landmarks.transcript": "Transcripción",
		"landmarks.author": "Autor",

		"seo.description": "Nuestros jovenes amigos escapan de su pueblo y emprenden un viaje a través del continente de Gaoan, ¡Pero ningún lugar es seguro! ¿Donde podría ir un mago para evitar ser perseguido? ¿Que secretos guarda la espada de Alan? Antiguos rencores no se olvidan, cruzando el mar se preparan para la guerra.",

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
