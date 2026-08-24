// =====================================================
// FINAL PROJECT - JAVASCRIPT
// =====================================================

console.log("Final Project loaded successfully!");


// =====================================================
// 01. MOBILE MENU
// =====================================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


const menuItems = document.querySelectorAll(".nav-links a");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("active");

        }

    });

});


// =====================================================
// 02. HOME
// =====================================================

// El botón del Home utiliza un enlace #slide.
// Si no existe esa sección, no hacemos nada.
// Esto evita errores en consola.

const homeButton = document.querySelector('.hero .button');

if (homeButton) {

    homeButton.addEventListener("click", () => {

        console.log("Exploring my projects...");

    });

}


// =====================================================
// 03. DESCRIPTION
// =====================================================

const descriptionSection =
    document.getElementById("description");

if (descriptionSection) {

    console.log("Description section loaded.");

}


// =====================================================
// 04. CONTROVERSIAL TOPIC
// =====================================================

const controversialSection =
    document.getElementById("controversial");

if (controversialSection) {

    console.log("Controversial Topic section loaded.");

}


// =====================================================
// 05. VIDEO GAME
// =====================================================

const gameDetailsButton =
    document.getElementById("gameDetailsButton");

if (gameDetailsButton) {

    gameDetailsButton.addEventListener("click", () => {

        alert(
            "More information about Aether Rebellion will be available soon!"
        );

    });

}


// =====================================================
// 06. LIP SYNC
// =====================================================

const lipSyncVideo =
    document.querySelector("#lipsync video");

if (lipSyncVideo) {

    lipSyncVideo.addEventListener("play", () => {

        console.log("Lip Sync video started.");

    });

    lipSyncVideo.addEventListener("pause", () => {

        console.log("Lip Sync video paused.");

    });

}


// =====================================================
// 07. ONLINE STORE
// =====================================================

const searchButton =
    document.getElementById("searchButton");

const productSearch =
    document.getElementById("productSearch");

const productCards =
    document.querySelectorAll(".product-card");


if (searchButton && productSearch) {

    searchButton.addEventListener("click", () => {

        searchProducts();

    });


    productSearch.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            searchProducts();

        }

    });

}


function searchProducts() {

    const searchText =
        productSearch.value.toLowerCase().trim();


    productCards.forEach(card => {

        const productName =
            card.querySelector("h3");

        if (!productName) return;


        const name =
            productName.textContent.toLowerCase();


        if (
            searchText === "" ||
            name.includes(searchText)
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


// =====================================================
// 08. FOOD MENU
// =====================================================

const foodMenu =
    document.getElementById("foodmenu");

if (foodMenu) {

    console.log("Food Menu section loaded.");

}


// =====================================================
// 09. COLOMBIAN CITY
// =====================================================

const citySection =
    document.getElementById("city");

if (citySection) {

    console.log("Colombian City section loaded.");

}


// =====================================================
// 10. CILLIAN MURPHY
// =====================================================

const cillianSection =
    document.getElementById("cillian-murphy");

if (cillianSection) {

    console.log("Cillian Murphy section loaded.");

}


// =====================================================
// 11. CURRICULUM VITAE
// =====================================================

const cvSection =
    document.getElementById("cv");

if (cvSection) {

    console.log("Curriculum Vitae section loaded.");

}


// =====================================================
// 12. SKILLS
// =====================================================

const skillsSection =
    document.getElementById("skills");

if (skillsSection) {

    console.log("Skills section loaded.");

}


// =====================================================
// 13. CONTACT
// =====================================================

const contactSection =
    document.getElementById("contact");

if (contactSection) {

    console.log("Contact section loaded.");

}


// =====================================================
// 14. LANGUAGE TRANSLATOR
// =====================================================

const translations = {

    // =================================================
    // ENGLISH
    // =================================================

    en: {

        // -------------------------------------------------
        // NAVIGATION
        // -------------------------------------------------

        logo: "My Portfolio",

        navHome: "Home",

        navDescription: "Description",

        navControversial: "Controversial Topic",

        navGame: "Video Game",

        navLipSync: "Lip Sync",

        navStore: "Online Store",

        navFoodMenu: "Food Menu",

        navCity: "Colombian City",

        navCV: "C.V.",

        navskills: "Skills",


        // -------------------------------------------------
        // HOME
        // -------------------------------------------------

        welcome: "WELCOME TO MY",

        heroTitle: "FINAL PROJECT",

        heroDescription:
            "This website contains my projects, activities and English learning experiences.",

        heroButton:
            "Explore My Projects",


        // -------------------------------------------------
        // DESCRIPTION
        // -------------------------------------------------

        descriptionProject:
            "PROJECT 02",

        descriptionTitle:
            "Description",

        descriptionHeading:
            "About My Final Project",

        descriptionText1:
            "This website is a collection of my English projects and activities developed during my learning process.",

        descriptionText2:
            "Here you can find different types of work, including presentations, controversial topics, a video game project, a lip sync video, an online store and my curriculum vitae.",

        descriptionText3:
            "The main purpose of this project is to demonstrate my creativity, knowledge and progress in English.",

        creativity:
            "Creativity",

        creativityText:
            "Developing original ideas and projects.",

        learning:
            "Learning",

        learningText:
            "Improving my English communication skills.",

        technology:
            "Technology",

        technologyText:
            "Using web technologies to present my work.",


        // -------------------------------------------------
        // CONTROVERSIAL TOPIC
        // -------------------------------------------------

        controversialProject:
            "PROJECT 03",

        controversialTitle:
            "Controversial Topic",

        debate:
            "DEBATE",

        controversialQuestion:
            "Is Artificial Intelligence Good or Bad?",

        controversialDescription:
            "Artificial Intelligence is changing the way we study, work and communicate. But is it really good for society?",

        pro:
            "PRO",

        aiBenefits:
            "AI Can Be Beneficial",

        pro1:
            "It helps people complete tasks faster.",

        pro2:
            "It can improve education and learning.",

        pro3:
            "It can help solve complex problems.",

        con:
            "CON",

        aiDanger:
            "AI Can Be Dangerous",

        con1:
            "Some jobs may be replaced by AI.",

        con2:
            "People can become too dependent on technology.",

        con3:
            "AI can be used to spread false information.",


        // -------------------------------------------------
        // VIDEO GAME
        // -------------------------------------------------

        gameProject:
            "PROJECT 04",

        gameProjectTitle:
            "Video Game Project",

        gameGenre:
            "SCI-FI • CYBERPUNK • ACTION",

        gameSubtitle:
            "In a world powered by energy, the balance of power is fading.",

        theStory:
            "THE STORY",

        threatTitle:
            "The Threat",

        threatText:
            "Eclipse harvests Aether to build an unstoppable mechanized army, corrupting ecosystems and enslaving populations.",

        threatSmall:
            "The Threat",

        threatSmallText:
            "Eclipse is taking control of Aether and using it to create a powerful mechanized army.",

        missionSmall:
            "The Mission",

        missionSmallText:
            "A lone mercenary must dismantle Eclipse's operations and restore equilibrium.",

        worldSmall:
            "The World",

        worldSmallText:
            "A futuristic world where Aether powers technology, armies and life itself.",

        exploreStory:
            "Explore the Story",


        // -------------------------------------------------
        // LIP SYNC
        // -------------------------------------------------

        lipProject:
            "PROJECT 05",

        lipTitle:
            "Lip Sync Video",

        lipPerformance:
            "LIP SYNC PERFORMANCE",

        videoProject:
            "VIDEO PROJECT",

        lipHeading:
            "My Lip Sync Performance",

        lipDescription:
            "This project consists of a lip sync performance based on a selected song. It allowed me to practice pronunciation, expression and confidence while speaking English.",

        videoNotSupported:
            "Your browser does not support the video tag.",

        yourVideo:
            "Your Lip Sync Video",

        music:
            "Music",

        selectedSong:
            "Selected song",

        performance:
            "Performance",

        lipSync:
            "Lip sync",

        language:
            "Language",

        english:
            "English",


        // -------------------------------------------------
        // ONLINE STORE
        // -------------------------------------------------

        storeProject:
            "PROJECT 06",

        storeTitle:
            "Online Store",

        onlineShopping:
            "ONLINE SHOPPING",

        storeDescription:
            "A modern online store created to offer smartphones and technology products with an easy and attractive shopping experience.",

        searchPlaceholder:
            "Search products...",

        search:
            "Search",

        smartphone:
            "SMARTPHONE",

        gamingPhone:
            "GAMING PHONE",

        gamerDescription:
            "High-performance smartphone designed for gaming and entertainment.",

        everydayPhone:
            "EVERYDAY PHONE",

        smartDescription:
            "A balanced smartphone with modern features for everyday use.",

        classicPhone:
            "CLASSIC PHONE",

        longBattery:
            "LONG BATTERY",

        luchoDescription:
            "A classic phone with a physical keyboard, strong signal and long-lasting battery.",

        buy:
            "Buy",


        // -------------------------------------------------
        // FOOD MENU
        // -------------------------------------------------

        foodProject:
            "PROJECT 07",

        foodTitle:
            "Food Menu",

        restaurantTheme:
            "ELEGANT & SOPHISTICATED",

        foodDescription:
            "Gourmet Burgers & Fine Fast Food",

        targetCustomers:
            "Target Customers: Teenagers, families, and young adults",

        starters:
            "STARTERS",

        truffleFries:
            "Truffle Fries",

        truffleFriesDesc:
            "Crispy golden fries topped with Parmesan cheese and a touch of truffle oil.",

        chickenBites:
            "Crispy Chicken Bites",

        chickenBitesDesc:
            "Tender pieces of crispy chicken served with our signature creamy sauce.",

        mozzarellaSticks:
            "Mozzarella Sticks",

        mozzarellaSticksDesc:
            "Golden-fried mozzarella sticks served with homemade tomato sauce.",

        potatoSkins:
            "Loaded Potato Skins",

        potatoSkinsDesc:
            "Crispy potato skins filled with cheese, bacon, and green onions.",

        onionRings:
            "Classic Onion Rings",

        onionRingsDesc:
            "Crunchy golden onion rings served with our special Royal sauce.",

        mainCourses:
            "MAIN COURSES",

        royalClassic:
            "Royal Classic Burger",

        royalClassicDesc:
            "A juicy beef patty with cheddar cheese, lettuce, tomato, onion, and our signature sauce.",

        goldenChicken:
            "Golden Chicken Burger",

        goldenChickenDesc:
            "Crispy chicken breast with lettuce, tomato, cheddar cheese, and creamy garlic sauce.",

        doubleCrown:
            "Double Crown Burger",

        doubleCrownDesc:
            "Two grilled beef patties with double cheddar cheese, caramelized onions, and Royal sauce.",

        bbqBacon:
            "BBQ Bacon Burger",

        bbqBaconDesc:
            "A grilled beef patty topped with crispy bacon, cheddar cheese, crispy onions, and smoky BBQ sauce.",

        mushroomDeluxe:
            "Mushroom Deluxe Burger",

        mushroomDeluxeDesc:
            "A juicy beef patty with sautéed mushrooms, Swiss cheese, caramelized onions, and creamy sauce.",

        burgersFries:
            "All burgers are served with crispy French fries.",


        // -------------------------------------------------
        // COLOMBIAN CITY
        // -------------------------------------------------

        cityProject:
            "PROJECT 08",

        cityTitle:
            "Colombian City",

        cityCountry:
            "COLOMBIA",

        cityLabel:
            "DESTINATION",

        cityName:
            "Gigante, Huila",

        citySubtitle:
            "The Green Capital of Huila",

        cityDescription:
            "Gigante is a municipality located in the department of Huila, Colombia. It is known for its beautiful landscapes, coffee production, natural attractions and cultural traditions.",

        locationTitle:
            "Location",

        locationText:
            "Huila, Colombia — Andean Region",

        natureLabel:
            "NATURE",

        natureTitle:
            "Natural Landscapes",

        natureText:
            "Gigante has mountains, rivers, waterfalls and beautiful landscapes that attract visitors.",

        coffeeLabel:
            "COFFEE",

        coffeeTitle:
            "Coffee Culture",

        coffeeText:
            "Coffee production is an important part of the local economy and culture.",

        cultureLabel:
            "CULTURE",

        cultureTitle:
            "Local Traditions",

        cultureText:
            "The municipality preserves traditions, celebrations and cultural activities.",

        ceibaLabel:
            "ICONIC LANDMARK",

        ceibaTitle:
            "The Ceiba of Liberty",

        ceibaText:
            "The Ceiba de la Libertad is one of the most recognized symbols of Gigante. This historic tree represents nature, history and the identity of the municipality.",

        tagNature:
            "Nature",

        tagHistory:
            "History",

        tagCulture:
            "Culture",

        cityQuote:
            "A place where nature, culture and tradition come together.",


        // -------------------------------------------------
        // CILLIAN MURPHY
        // -------------------------------------------------

        actorSubtitle:
            "FEATURED ACTOR",

        actorTitle:
            "Cillian Murphy",

        actorText1:
            "Cillian Murphy is an Irish actor known for his outstanding performances in movies and television series. His ability to portray complex and different characters has made him one of the most recognized actors of his generation.",

        actorText2:
            "He is best known for playing Thomas Shelby in the television series Peaky Blinders. He also starred as J. Robert Oppenheimer in Christopher Nolan's movie Oppenheimer.",

        fullName:
            "Full Name",

        born:
            "Born",

        nationality:
            "Nationality",

        profession:
            "Profession",

        actorNationality:
            "Irish",

        actorProfession:
            "Actor",


        // -------------------------------------------------
        // CV
        // -------------------------------------------------

        cvProject:
            "PROJECT 09",

        cvTitle:
            "Curriculum Vitae",

        personalProfile:
            "PERSONAL PROFILE",

        profileText:
            "Software Analysis and Development student interested in web development, programming and database management. I am responsible, organized and committed to learning new technologies.",

        country:
            "Sasaima, Colombia",

        education:
            "Education",

        degree:
            "Technology in Software Analysis and Development",

        school:
            "SENA CDAE Villeta",

        location:
            "Villeta, Cundinamarca",

        workExperience:
            "Work Experience",

        restaurantExperience:
            "I worked with customers and other employees. I was responsible for serving customers, taking orders and keeping the tables clean.",

        restaurantSkills:
            "I developed communication, teamwork and responsibility skills.",

        webDevelopment:
            "Web Development",

        developerExperience:
            "I worked with HTML, CSS, JavaScript and MySQL. I created web pages, fixed programming errors and updated websites.",

        skills:
            "Skills",

        programming:
            "Programming",

        problemSolving:
            "Problem Solving",

        webDevelopmentSkill:
            "Web Development",

        databaseManagement:
            "Database Management",

        basicEnglish:
            "English — Basic",

        leadership:
            "Leadership & Activities",

        teamLeader:
            "Team Leader",


        // -------------------------------------------------
        // SKILLS SECTION
        // -------------------------------------------------

        skillsProject:
            "PROJECT 10",

        skillsTitle:
            "My Skills",


        // -------------------------------------------------
        // CONTACT
        // -------------------------------------------------

        contactTitle:
            "Contact",

        address:
            "Address",

        callMe:
            "Call Me",

        emailUs:
            "Email Us",

        socialProfiles:
            "Social Profiles",

        yourName:
            "Your Name",

        yourEmail:
            "Your Email",

        subject:
            "Subject",

        message:
            "Message",

        sendMessage:
            "Send Message",


        // -------------------------------------------------
        // FOOTER
        // -------------------------------------------------

        footer:
            "© 2026 Uver Andrey Ossa Pastrana. All rights reserved."

    },


    // =====================================================
    // SPANISH
    // =====================================================

    es: {

        // -------------------------------------------------
        // NAVEGACIÓN
        // -------------------------------------------------

        logo:
            "Mi Portafolio",

        navHome:
            "Inicio",

        navDescription:
            "Descripción",

        navControversial:
            "Tema Controversial",

        navGame:
            "Videojuego",

        navLipSync:
            "Lip Sync",

        navStore:
            "Tienda Online",

        navFoodMenu:
            "Menú de Comida",

        navCity:
            "Ciudad Colombiana",

        navCV:
            "C.V.",

        navskills:
            "Habilidades",


        // -------------------------------------------------
        // INICIO
        // -------------------------------------------------

        welcome:
            "BIENVENIDO A MI",

        heroTitle:
            "PROYECTO FINAL",

        heroDescription:
            "Este sitio web contiene mis proyectos, actividades y experiencias de aprendizaje de inglés.",

        heroButton:
            "Explorar Mis Proyectos",


        // -------------------------------------------------
        // DESCRIPCIÓN
        // -------------------------------------------------

        descriptionProject:
            "PROYECTO 02",

        descriptionTitle:
            "Descripción",

        descriptionHeading:
            "Sobre Mi Proyecto Final",

        descriptionText1:
            "Este sitio web es una colección de mis proyectos y actividades de inglés desarrollados durante mi proceso de aprendizaje.",

        descriptionText2:
            "Aquí puedes encontrar diferentes tipos de trabajos, incluyendo presentaciones, temas controversiales, un proyecto de videojuego, un video de lip sync, una tienda en línea y mi hoja de vida.",

        descriptionText3:
            "El propósito principal de este proyecto es demostrar mi creatividad, conocimientos y progreso en inglés.",

        creativity:
            "Creatividad",

        creativityText:
            "Desarrollar ideas y proyectos originales.",

        learning:
            "Aprendizaje",

        learningText:
            "Mejorar mis habilidades de comunicación en inglés.",

        technology:
            "Tecnología",

        technologyText:
            "Utilizar tecnologías web para presentar mi trabajo.",


        // -------------------------------------------------
        // TEMA CONTROVERSIAL
        // -------------------------------------------------

        controversialProject:
            "PROYECTO 03",

        controversialTitle:
            "Tema Controversial",

        debate:
            "DEBATE",

        controversialQuestion:
            "¿La Inteligencia Artificial es buena o mala?",

        controversialDescription:
            "La Inteligencia Artificial está cambiando la forma en que estudiamos, trabajamos y nos comunicamos. Pero, ¿realmente es buena para la sociedad?",

        pro:
            "A FAVOR",

        aiBenefits:
            "La IA puede ser beneficiosa",

        pro1:
            "Ayuda a las personas a completar tareas más rápidamente.",

        pro2:
            "Puede mejorar la educación y el aprendizaje.",

        pro3:
            "Puede ayudar a resolver problemas complejos.",

        con:
            "EN CONTRA",

        aiDanger:
            "La IA puede ser peligrosa",

        con1:
            "Algunos trabajos pueden ser reemplazados por la IA.",

        con2:
            "Las personas pueden volverse demasiado dependientes de la tecnología.",

        con3:
            "La IA puede utilizarse para difundir información falsa.",


        // -------------------------------------------------
        // VIDEOJUEGO
        // -------------------------------------------------

        gameProject:
            "PROYECTO 04",

        gameProjectTitle:
            "Proyecto de Videojuego",

        gameGenre:
            "CIENCIA FICCIÓN • CYBERPUNK • ACCIÓN",

        gameSubtitle:
            "En un mundo impulsado por la energía, el equilibrio del poder se está desvaneciendo.",

        theStory:
            "LA HISTORIA",

        threatTitle:
            "La Amenaza",

        threatText:
            "Eclipse recolecta Aether para construir un ejército mecanizado imparable, corrompiendo los ecosistemas y esclavizando poblaciones.",

        threatSmall:
            "La Amenaza",

        threatSmallText:
            "Eclipse está tomando el control del Aether y utilizándolo para crear un poderoso ejército mecanizado.",

        missionSmall:
            "La Misión",

        missionSmallText:
            "Un mercenario solitario debe desmantelar las operaciones de Eclipse y restaurar el equilibrio.",

        worldSmall:
            "El Mundo",

        worldSmallText:
            "Un mundo futurista donde el Aether impulsa la tecnología, los ejércitos y la vida misma.",

        exploreStory:
            "Explorar la Historia",


        // -------------------------------------------------
        // LIP SYNC
        // -------------------------------------------------

        lipProject:
            "PROYECTO 05",

        lipTitle:
            "Video Lip Sync",

        lipPerformance:
            "PRESENTACIÓN DE LIP SYNC",

        videoProject:
            "PROYECTO DE VIDEO",

        lipHeading:
            "Mi Presentación de Lip Sync",

        lipDescription:
            "Este proyecto consiste en una presentación de lip sync basada en una canción seleccionada. Me permitió practicar la pronunciación, expresión y confianza al hablar inglés.",

        videoNotSupported:
            "Tu navegador no soporta la etiqueta de video.",

        yourVideo:
            "Tu Video de Lip Sync",

        music:
            "Música",

        selectedSong:
            "Canción seleccionada",

        performance:
            "Presentación",

        lipSync:
            "Lip sync",

        language:
            "Idioma",

        english:
            "Inglés",


        // -------------------------------------------------
        // TIENDA
        // -------------------------------------------------

        storeProject:
            "PROYECTO 06",

        storeTitle:
            "Tienda Online",

        onlineShopping:
            "COMPRAS EN LÍNEA",

        storeDescription:
            "Una tienda online moderna creada para ofrecer teléfonos inteligentes y productos tecnológicos con una experiencia de compra sencilla y atractiva.",

        searchPlaceholder:
            "Buscar productos...",

        search:
            "Buscar",

        smartphone:
            "SMARTPHONE",

        gamingPhone:
            "TELÉFONO GAMER",

        gamerDescription:
            "Smartphone de alto rendimiento diseñado para videojuegos y entretenimiento.",

        everydayPhone:
            "TELÉFONO PARA USO DIARIO",

        smartDescription:
            "Un smartphone equilibrado con características modernas para el uso diario.",

        classicPhone:
            "TELÉFONO CLÁSICO",

        longBattery:
            "BATERÍA DE LARGA DURACIÓN",

        luchoDescription:
            "Un teléfono clásico con teclado físico, buena señal y batería de larga duración.",

        buy:
            "Comprar",


        // -------------------------------------------------
        // MENÚ DE COMIDA
        // -------------------------------------------------

        foodProject:
            "PROYECTO 07",

        foodTitle:
            "Menú de Comida",

        restaurantTheme:
            "ELEGANTE Y SOFISTICADO",

        foodDescription:
            "Hamburguesas Gourmet y Comida Rápida",

        targetCustomers:
            "Clientes objetivo: adolescentes, familias y jóvenes adultos",

        starters:
            "ENTRADAS",

        truffleFries:
            "Papas con Trufa",

        truffleFriesDesc:
            "Papas doradas y crujientes cubiertas con queso parmesano y un toque de aceite de trufa.",

        chickenBites:
            "Bocados de Pollo Crujiente",

        chickenBitesDesc:
            "Trozos de pollo crujiente servidos con nuestra salsa cremosa especial.",

        mozzarellaSticks:
            "Palitos de Mozzarella",

        mozzarellaSticksDesc:
            "Palitos de mozzarella fritos y dorados servidos con salsa de tomate casera.",

        potatoSkins:
            "Cáscaras de Papa Cargadas",

        potatoSkinsDesc:
            "Cáscaras de papa crujientes rellenas de queso, tocino y cebolla verde.",

        onionRings:
            "Aros de Cebolla Clásicos",

        onionRingsDesc:
            "Crujientes aros de cebolla dorados servidos con nuestra salsa especial Royal.",

        mainCourses:
            "PLATOS PRINCIPALES",

        royalClassic:
            "Royal Classic Burger",

        royalClassicDesc:
            "Una jugosa carne de res con queso cheddar, lechuga, tomate, cebolla y nuestra salsa especial.",

        goldenChicken:
            "Golden Chicken Burger",

        goldenChickenDesc:
            "Pechuga de pollo crujiente con lechuga, tomate, queso cheddar y salsa cremosa de ajo.",

        doubleCrown:
            "Double Crown Burger",

        doubleCrownDesc:
            "Dos carnes de res a la parrilla con doble queso cheddar, cebolla caramelizada y salsa Royal.",

        bbqBacon:
            "BBQ Bacon Burger",

        bbqBaconDesc:
            "Carne de res a la parrilla cubierta con tocino crujiente, queso cheddar, cebolla crujiente y salsa BBQ.",

        mushroomDeluxe:
            "Mushroom Deluxe Burger",

        mushroomDeluxeDesc:
            "Jugosa carne de res con champiñones salteados, queso suizo, cebolla caramelizada y salsa cremosa.",

        burgersFries:
            "Todas las hamburguesas se sirven con papas fritas crujientes.",


        // -------------------------------------------------
        // CIUDAD COLOMBIANA
        // -------------------------------------------------

        cityProject:
            "PROYECTO 08",

        cityTitle:
            "Ciudad Colombiana",

        cityCountry:
            "COLOMBIA",

        cityLabel:
            "DESTINO",

        cityName:
            "Gigante, Huila",

        citySubtitle:
            "La Capital Verde del Huila",

        cityDescription:
            "Gigante es un municipio ubicado en el departamento del Huila, Colombia. Es conocido por sus hermosos paisajes, producción de café, atractivos naturales y tradiciones culturales.",

        locationTitle:
            "Ubicación",

        locationText:
            "Huila, Colombia — Región Andina",

        natureLabel:
            "NATURALEZA",

        natureTitle:
            "Paisajes Naturales",

        natureText:
            "Gigante cuenta con montañas, ríos, cascadas y hermosos paisajes que atraen visitantes.",

        coffeeLabel:
            "CAFÉ",

        coffeeTitle:
            "Cultura Cafetera",

        coffeeText:
            "La producción de café es una parte importante de la economía y cultura local.",

        cultureLabel:
            "CULTURA",

        cultureTitle:
            "Tradiciones Locales",

        cultureText:
            "El municipio conserva tradiciones, celebraciones y actividades culturales.",

        ceibaLabel:
            "LUGAR EMBLEMÁTICO",

        ceibaTitle:
            "La Ceiba de la Libertad",

        ceibaText:
            "La Ceiba de la Libertad es uno de los símbolos más reconocidos de Gigante. Este árbol histórico representa la naturaleza, la historia y la identidad del municipio.",

        tagNature:
            "Naturaleza",

        tagHistory:
            "Historia",

        tagCulture:
            "Cultura",

        cityQuote:
            "Un lugar donde la naturaleza, la cultura y la tradición se encuentran.",


        // -------------------------------------------------
        // CILLIAN MURPHY
        // -------------------------------------------------

        actorSubtitle:
            "ACTOR DESTACADO",

        actorTitle:
            "Cillian Murphy",

        actorText1:
            "Cillian Murphy es un actor irlandés conocido por sus destacadas actuaciones en películas y series de televisión. Su capacidad para interpretar personajes complejos y diferentes lo ha convertido en uno de los actores más reconocidos de su generación.",

        actorText2:
            "Es conocido principalmente por interpretar a Thomas Shelby en la serie de televisión Peaky Blinders. También protagonizó a J. Robert Oppenheimer en la película Oppenheimer de Christopher Nolan.",

        fullName:
            "Nombre Completo",

        born:
            "Nacimiento",

        nationality:
            "Nacionalidad",

        profession:
            "Profesión",

        actorNationality:
            "Irlandés",

        actorProfession:
            "Actor",


        // -------------------------------------------------
        // C.V.
        // -------------------------------------------------

        cvProject:
            "PROYECTO 09",

        cvTitle:
            "Hoja de Vida",

        personalProfile:
            "PERFIL PERSONAL",

        profileText:
            "Estudiante de Análisis y Desarrollo de Software interesado en desarrollo web, programación y gestión de bases de datos. Soy responsable, organizado y comprometido con el aprendizaje de nuevas tecnologías.",

        country:
            "Sasaima, Colombia",

        education:
            "Educación",

        degree:
            "Tecnología en Análisis y Desarrollo de Software",

        school:
            "SENA CDAE Villeta",

        location:
            "Villeta, Cundinamarca",

        workExperience:
            "Experiencia Laboral",

        restaurantExperience:
            "Trabajé con clientes y otros empleados. Era responsable de atender a los clientes, tomar pedidos y mantener las mesas limpias.",

        restaurantSkills:
            "Desarrollé habilidades de comunicación, trabajo en equipo y responsabilidad.",

        webDevelopment:
            "Desarrollo Web",

        developerExperience:
            "Trabajé con HTML, CSS, JavaScript y MySQL. Creé páginas web, solucioné errores de programación y actualicé sitios web.",

        skills:
            "Habilidades",

        programming:
            "Programación",

        problemSolving:
            "Resolución de Problemas",

        webDevelopmentSkill:
            "Desarrollo Web",

        databaseManagement:
            "Gestión de Bases de Datos",

        basicEnglish:
            "Inglés — Básico",

        leadership:
            "Liderazgo y Actividades",

        teamLeader:
            "Líder de Equipo",


        // -------------------------------------------------
        // SKILLS
        // -------------------------------------------------

        skillsProject:
            "PROYECTO 10",

        skillsTitle:
            "Mis Habilidades",


        // -------------------------------------------------
        // CONTACT
        // -------------------------------------------------

        contactTitle:
            "Contacto",

        address:
            "Dirección",

        callMe:
            "Llámenme",

        emailUs:
            "Correo Electrónico",

        socialProfiles:
            "Perfiles Sociales",

        yourName:
            "Tu Nombre",

        yourEmail:
            "Tu Correo",

        subject:
            "Asunto",

        message:
            "Mensaje",

        sendMessage:
            "Enviar Mensaje",


        // -------------------------------------------------
        // FOOTER
        // -------------------------------------------------

        footer:
            "© 2026 Uver Andrey Ossa Pastrana. Todos los derechos reservados."

    }

};


// =====================================================
// 15. APPLY TRANSLATION
// =====================================================

function translatePage(language) {

    const elements =
        document.querySelectorAll("[data-i18n]");


    elements.forEach(element => {

        const key =
            element.dataset.i18n;


        if (
            translations[language] &&
            translations[language][key] !== undefined
        ) {

            element.textContent =
                translations[language][key];

        }

    });


    // -------------------------------------------------
    // PLACEHOLDERS
    // -------------------------------------------------

    const placeholderElements =
        document.querySelectorAll(
            "[data-i18n-placeholder]"
        );


    placeholderElements.forEach(element => {

        const key =
            element.dataset.i18nPlaceholder;


        if (
            translations[language] &&
            translations[language][key] !== undefined
        ) {

            element.placeholder =
                translations[language][key];

        }

    });


    // -------------------------------------------------
    // CILLIAN MURPHY
    // -------------------------------------------------

    const cillian =
        document.getElementById("cillian-murphy");


    if (cillian) {

        const subtitle =
            cillian.querySelector(".cillian-subtitle");

        const title =
            cillian.querySelector("h2");

        const paragraphs =
            cillian.querySelectorAll(".cillian-info > p");

        const details =
            cillian.querySelectorAll(".detail");


        if (subtitle) {

            subtitle.textContent =
                translations[language].actorSubtitle;

        }


        if (title) {

            title.textContent =
                translations[language].actorTitle;

        }


        if (paragraphs[0]) {

            paragraphs[0].textContent =
                translations[language].actorText1;

        }


        if (paragraphs[1]) {

            paragraphs[1].textContent =
                translations[language].actorText2;

        }


        if (details.length >= 4) {

            details[0].querySelector("span").textContent =
                translations[language].fullName;

            details[1].querySelector("span").textContent =
                translations[language].born;

            details[2].querySelector("span").textContent =
                translations[language].nationality;

            details[3].querySelector("span").textContent =
                translations[language].profession;


            details[2].querySelector("p").textContent =
                translations[language].actorNationality;

            details[3].querySelector("p").textContent =
                translations[language].actorProfession;

        }

    }


    // -------------------------------------------------
    // SKILLS SECTION
    // -------------------------------------------------

    const skillsSection =
        document.getElementById("skills");


    if (skillsSection) {

        const project =
            skillsSection.querySelector(".section-title p");

        const title =
            skillsSection.querySelector(".section-title h2");


        if (project) {

            project.textContent =
                translations[language].skillsProject;

        }


        if (title) {

            title.textContent =
                translations[language].skillsTitle;

        }

    }


    // -------------------------------------------------
    // CONTACT SECTION
    // -------------------------------------------------

    const contact =
        document.getElementById("contact");


    if (contact) {

        const title =
            contact.querySelector(".section-header h2");

        const infoTitles =
            contact.querySelectorAll(".info-text h4");

        const inputs =
            contact.querySelectorAll("input");

        const textarea =
            contact.querySelector("textarea");

        const sendButton =
            contact.querySelector(".btn-send");


        if (title) {

            title.textContent =
                translations[language].contactTitle;

        }


        if (infoTitles.length >= 4) {

            infoTitles[0].textContent =
                translations[language].address;

            infoTitles[1].textContent =
                translations[language].callMe;

            infoTitles[2].textContent =
                translations[language].emailUs;

            infoTitles[3].textContent =
                translations[language].socialProfiles;

        }


        if (inputs.length >= 3) {

            inputs[0].placeholder =
                translations[language].yourName;

            inputs[1].placeholder =
                translations[language].yourEmail;

            inputs[2].placeholder =
                translations[language].subject;

        }


        if (textarea) {

            textarea.placeholder =
                translations[language].message;

        }


        if (sendButton) {

            sendButton.textContent =
                translations[language].sendMessage;

        }

    }


    // -------------------------------------------------
    // LANGUAGE BUTTON
    // -------------------------------------------------

    const languageButton =
        document.getElementById("languageToggle");


    if (languageButton) {

        languageButton.textContent =
            language === "en"
                ? "🌐 EN"
                : "🌐 ES";

    }


    // -------------------------------------------------
    // SAVE LANGUAGE
    // -------------------------------------------------

    localStorage.setItem(
        "portfolioLanguage",
        language
    );

}


// =====================================================
// 16. LANGUAGE BUTTON
// =====================================================

const languageToggle =
    document.getElementById("languageToggle");


let currentLanguage =
    localStorage.getItem("portfolioLanguage") || "en";


translatePage(currentLanguage);


if (languageToggle) {

    languageToggle.addEventListener("click", () => {

        currentLanguage =
            currentLanguage === "en"
                ? "es"
                : "en";


        translatePage(currentLanguage);

        console.log(
            "Language changed to:",
            currentLanguage
        );

    });

}


// =====================================================
// 17. CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();


        const formData =
            new FormData(this);


        const submitButton =
            this.querySelector(".btn-send");


        // -------------------------------------------------
        // CHANGE BUTTON WHILE SENDING
        // -------------------------------------------------

        if (submitButton) {

            submitButton.disabled = true;

            submitButton.textContent =
                currentLanguage === "en"
                    ? "Sending..."
                    : "Enviando...";

        }


        // -------------------------------------------------
        // SEND TO PHP
        // -------------------------------------------------

        fetch("procesar.php", {

            method: "POST",

            body: formData

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Server error: " + response.status
                );

            }


            return response.text();

        })


        .then(data => {

            console.log(
                "PHP response:",
                data
            );


            // -------------------------------------------------
            // SUCCESS MESSAGE
            // -------------------------------------------------

            const successElement =
                document.getElementById("formSuccess");


            if (successElement) {

                successElement.classList.remove(
                    "is-hidden"
                );

            } else {

                alert(
                    currentLanguage === "en"
                        ? "Message sent successfully!"
                        : "¡Mensaje enviado correctamente!"
                );

            }


            // -------------------------------------------------
            // CLEAR FORM
            // -------------------------------------------------

            contactForm.reset();


            console.log(
                "Contact form sent successfully."
            );

        })


        .catch(error => {

            console.error(
                "Error sending form:",
                error
            );


            alert(
                currentLanguage === "en"
                    ? "There was an error sending the message."
                    : "Hubo un error al enviar el mensaje."
            );

        })


        .finally(() => {

            if (submitButton) {

                submitButton.disabled = false;


                submitButton.textContent =
                    currentLanguage === "en"
                        ? "Send Message"
                        : "Enviar Mensaje";

            }

        });

    });

}


// =====================================================
// 18. BUY BUTTONS
// =====================================================

const buyButtons =
    document.querySelectorAll(".buy-button");


buyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const productCard =
            button.closest(".product-card");


        if (!productCard) return;


        const productName =
            productCard.querySelector("h3");


        if (productName) {

            const name =
                productName.textContent;


            alert(
                currentLanguage === "en"
                    ? `${name} added to your shopping cart!`
                    : `¡${name} fue agregado a tu carrito!`
            );

        }

    });

});


// =====================================================
// 19. PAGE LOADED
// =====================================================

window.addEventListener("load", () => {

    console.log(
        "All website components loaded successfully."
    );

});