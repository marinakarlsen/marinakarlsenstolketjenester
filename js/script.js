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

        // Navigasjonsmeny
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

        // Tjenester-seksjonen
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

        // Kontakt-seksjonen
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

        // Navigasjonsmeny
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

        // Tjenester-seksjonen
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

        // Kontakt-seksjonen
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

// Oppdater språkfunksjon
function updateLanguage(lang) {
    if (!translations[lang]) {
        console.error("Språk ikke funnet:", lang);
        return;
    }

    // Navigasjonsmeny
    document.querySelector("nav ul li:nth-child(1) a").textContent = translations[lang].navBestill;
    document.querySelector("nav ul li:nth-child(2) a").textContent = translations[lang].navTjenester;
    document.querySelector("nav ul li:nth-child(3) a").textContent = translations[lang].navOmMeg;
    document.querySelector("nav ul li:nth-child(4) a").textContent = translations[lang].navTilbakemeldinger;
    document.querySelector("nav ul li:nth-child(5) a").textContent = translations[lang].navBetingelser;
    document.querySelector("nav ul li:nth-child(6) a").textContent = translations[lang].navKontakt;

    // Skjema
    document.querySelector("#bestill-header")?.textContent = translations[lang].header;
    document.querySelector("label[for='dato']")?.textContent = translations[lang].datoLabel;
    document.querySelector("label[for='starttid']")?.textContent = translations[lang].starttidLabel;
    document.querySelector("label[for='sluttid']")?.textContent = translations[lang].sluttidLabel;
    document.querySelector("label[for='adresse']")?.textContent = translations[lang].adresseLabel;
    document.querySelector("label[for='oppdragstype']")?.textContent = translations[lang].oppdragstypeLabel;
    document.querySelector("label[for='tema']")?.textContent = translations[lang].temaLabel;
    document.querySelector("label[for='kundeinfo']")?.textContent = translations[lang].kundeinfoLabel;
    document.querySelector("label[for='epost']")?.textContent = translations[lang].epostLabel;
    document.querySelector("label[for='telefon']")?.textContent = translations[lang].telefonLabel;
    document.querySelector("label[for='notater']")?.textContent = translations[lang].notaterLabel;
    
    document.querySelector(".contact-form button")?.textContent = translations[lang].sendButton;

    // Tjenester-seksjonen
    document.querySelector("#tjenester h2")?.textContent = translations[lang].tjenesterHeader;
    document.querySelector("#tjenester .service:nth-child(1) h3")?.textContent = translations[lang].tjenesterTelefon;
    document.querySelector("#tjenester .service:nth-child(1) p")?.textContent = translations[lang].tjenesterTelefonDesc;
    document.querySelector("#tjenester .service:nth-child(2) h3")?.textContent = translations[lang].tjenesterSkjerm;
    document.querySelector("#tjenester .service:nth-child(2) p")?.textContent = translations[lang].tjenesterSkjermDesc;
    document.querySelector("#tjenester .service:nth-child(3) h3")?.textContent = translations[lang].tjenesterOppmote;
    document.querySelector("#tjenester .service:nth-child(3) p")?.textContent = translations[lang].tjenesterOppmoteDesc;

    // Tilbakemeldinger-seksjonen
    document.querySelector("#tilbakemeldinger h2")?.textContent = translations[lang].tilbakemeldingerHeader;
    document.querySelector("#tilbakemeldinger p")?.textContent = translations[lang].feedbackIntro;

    // Kontakt-seksjonen
    document.querySelector("#kontakt h2")?.textContent = translations[lang].kontaktHeader;
    document.querySelector("#kontakt p")?.textContent = translations[lang].kontaktText;

    // Betingelser-siden (hvis til stede)
    document.querySelector(".betingelser-container h1")?.textContent = translations[lang].betingelserHeader;
    document.querySelector(".betingelser-container p")?.textContent = translations[lang].betingelserIntro;

    // Oppdater versjonstekst
    const versionLogElement = document.querySelector("#version-log");
    if (versionLogElement) {
        versionLogElement.textContent = translations[lang].versionText + translations[lang].loadingText;
    }
}

// Språkbytte-knapper
document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll(".lang-button");

    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            langButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedLang = button.dataset.lang;
            updateLanguage(selectedLang);
            localStorage.setItem("language", selectedLang);
        });
    });

    const savedLanguage = localStorage.getItem("language") || "no";
    updateLanguage(savedLanguage);
});

// Skjema-sending med EmailJS
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedLanguage = localStorage.getItem("language") || "no";
    const form = e.target;
    const formData = {
        dato: form.dato.value,
        starttid: form.starttid.value,
        sluttid: form.sluttid.value,
        adresse: form.adresse.value,
        oppdragstype: form.oppdragstype.value,
        tema: form.tema.value,
        kundeinfo: form.kundeinfo.value,
        epost: form.epost.value,
        telefon: form.telefon.value,
        notater: form.notater.value,
        language: selectedLanguage === "no" ? "Norsk" : "Українська"
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            service_id: 'service_p7gp21t',
            template_id: 'template_weqmq4a',
            user_id: 'bFcwSKHQToHSyB7aX',
            template_params: formData
        })
    })
    .then(response => {
        if (response.ok) {
            alert(translations[selectedLanguage].formSuccess);
            form.reset();
        } else {
            return response.text().then(error => { throw new Error(error); });
        }
    })
    .catch(error => {
        console.error('Feil ved sending av e-post:', error);
        alert(`Noe gikk galt: ${error.message}`);
    });
});

