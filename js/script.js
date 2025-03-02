// Definer oversettelser
const translations = {
    no: {
        header: "Bestill tolketjeneste",
        datoLabel: "Dato:",
        starttidLabel: "Starttid:",
        sluttidLabel: "Sluttid:",
        adresseLabel: "Adresse (hvis oppmøte):",
        oppdragstypeLabel: "Oppdragstype:",
        temaLabel: "Overordnet tema/felt:",
        kundeinfoLabel: "Kundeinformasjon:",
        epostLabel: "E-post:",
        telefonLabel: "Telefon:",
        notaterLabel: "Notater:",
        sendButton: "Send forespørsel",
        formSuccess: "Bestillingen din har blitt sendt!",

        // Navigasjon
        navBestill: "Bestill tolketjeneste",
        navTjenester: "Tjenester",
        navOmMeg: "Om meg",
        navTilbakemeldinger: "Tilbakemeldinger",
        navBetingelser: "Betingelser",
        navKontakt: "Kontakt",

        // Oppdragstyper
        oppdragstelefon: "Telefontolking",
        oppdragsskjerm: "Skjermtolking",
        oppdragsoppmøte: "Personlig oppmøte",

        // Tjenester
        tjenesterHeader: "Tjenester",
        tjenesterTelefon: "Telefontolking",
        tjenesterTelefonDesc: "Effektiv løsning for situasjoner hvor personlig oppmøte ikke er nødvendig.",
        tjenesterSkjerm: "Skjermtolking",
        tjenesterSkjermDesc: "Praktisk og fleksibelt for møter og konferanser via videoplattformer.",
        tjenesterOppmote: "Personlig oppmøte",
        tjenesterOppmoteDesc: "For situasjoner som krever tilstedeværelse og nærhet for maksimal effektivitet.",

        // Tilbakemeldinger
        tilbakemeldingerHeader: "Tilbakemeldinger",
        feedbackIntro: "Se hva kundene sier om mine tjenester:",

        // Kontakt
        kontaktHeader: "Kontakt",
        kontaktText: "Ta gjerne kontakt via e-post eller telefon:",

        // Betingelser-siden
        betingelserHeader: "Vilkår og betingelser",
        betingelserIntro: "Her finner du vilkår og betingelser for tolketjenestene.",

        // Versjon
        versionText: "Versjon: ",
        loadingText: "Laster...",
    },
    uk: {
        header: "Замовити перекладацькі послуги",
        datoLabel: "Дата:",
        starttidLabel: "Час початку:",
        sluttidLabel: "Час завершення:",
        adresseLabel: "Адреса (якщо очно):",
        oppdragstypeLabel: "Тип перекладу:",
        temaLabel: "Тема:",
        kundeinfoLabel: "Інформація про клієнта:",
        epostLabel: "Електронна пошта:",
        telefonLabel: "Телефон:",
        notaterLabel: "Нотатки:",
        sendButton: "Надіслати запит",
        formSuccess: "Ваш запит було надіслано!",

        // Navigasjon
        navBestill: "Замовити послугу",
        navTjenester: "Послуги",
        navOmMeg: "Про мене",
        navTilbakemeldinger: "Відгуки",
        navBetingelser: "Умови",
        navKontakt: "Контакт",

        // Oppdragstyper
        oppdragstelefon: "Телефонний переклад",
        oppdragsskjerm: "Відеопереклад",
        oppdragsoppmøte: "Особиста присутність",

        // Tjenester
        tjenesterHeader: "Послуги",
        tjenesterTelefon: "Телефонний переклад",
        tjenesterTelefonDesc: "Ефективне рішення для ситуацій, де особиста присутність не є необхідною.",
        tjenesterSkjerm: "Відеопереклад",
        tjenesterSkjermDesc: "Зручний варіант для зустрічей і конференцій через відеоплатформи.",
        tjenesterOppmote: "Особиста присутність",
        tjenesterOppmoteDesc: "Для ситуацій, що вимагають присутності та особистого контакту.",

        // Tilbakemeldinger
        tilbakemeldingerHeader: "Відгуки",
        feedbackIntro: "Що клієнти кажуть про мої послуги:",

        // Kontakt
        kontaktHeader: "Контакт",
        kontaktText: "Зв'яжіться зі мною електронною поштою або телефоном:",

        // Betingelser-siden
        betingelserHeader: "Умови та положення",
        betingelserIntro: "Тут ви знайдете умови та положення для перекладацьких послуг.",

        // Versjon
        versionText: "Версія: ",
        loadingText: "Завантаження...",
    }
};

// Hent språk fra lagring
const lang = localStorage.getItem("language") || "no";

// Oppdater språkfunksjon
function updateLanguage(lang) {
    if (!translations[lang]) return;

    // Navigasjon
    document.querySelector("nav ul li:nth-child(1) a")?.textContent = translations[lang].navBestill;
    document.querySelector("nav ul li:nth-child(2) a")?.textContent = translations[lang].navTjenester;
    document.querySelector("nav ul li:nth-child(3) a")?.textContent = translations[lang].navOmMeg;
    document.querySelector("nav ul li:nth-child(4) a")?.textContent = translations[lang].navTilbakemeldinger;
    document.querySelector("nav ul li:nth-child(5) a")?.textContent = translations[lang].navBetingelser;
    document.querySelector("nav ul li:nth-child(6) a")?.textContent = translations[lang].navKontakt;

    // Skjema
    document.querySelector("#bestill-header")?.textContent = translations[lang].header;

    // Betingelser-siden
    document.querySelector(".betingelser-container h1")?.textContent = translations[lang].betingelserHeader;
    document.querySelector(".betingelser-container p")?.textContent = translations[lang].betingelserIntro;

    // Oppdater versjonstekst
    document.querySelector("#version-log")?.textContent = translations[lang].versionText + translations[lang].loadingText;
}

// ** Sørg for at siden er lastet før oversettelse brukes **
document.addEventListener("DOMContentLoaded", () => {
    updateLanguage(lang);

    // Språkknapper
    document.querySelectorAll(".lang-button").forEach(button => {
        button.addEventListener("click", () => {
            localStorage.setItem("language", button.dataset.lang);
            updateLanguage(button.dataset.lang);
        });
    });
});
