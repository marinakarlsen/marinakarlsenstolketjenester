// Språkdata for nettsiden
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
        navBestill: "Bestill tolketjeneste",
        navTjenester: "Tjenester",
        navOmMeg: "Om meg",
        navTilbakemeldinger: "Tilbakemeldinger",
        navKontakt: "Kontakt",
        navBetingelser: "Betingelser",
        betingelserTitle: "Vilkår og betingelser",
        betingelserIntro: "Her finner du vilkår og betingelser for tolketjenestene."
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
        navBestill: "Замовити послугу",
        navTjenester: "Послуги",
        navOmMeg: "Про мене",
        navTilbakemeldinger: "Відгуки",
        navKontakt: "Контакт",
        navBetingelser: "Умови",
        betingelserTitle: "Умови та положення",
        betingelserIntro: "Тут ви знайдете умови та положення для перекладацьких послуг."
    }
};

// Når dokumentet er lastet inn
document.addEventListener("DOMContentLoaded", () => {
    // Språk-knapper
    const langButtons = document.querySelectorAll(".lang-button");
    
    if (langButtons.length > 0) {
        langButtons.forEach(button => {
            button.addEventListener("click", () => {
                langButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                const selectedLang = button.dataset.lang;
                updateLanguage(selectedLang);
                localStorage.setItem("language", selectedLang);
            });
        });
    }

    // Bruk lagret språk eller sett til norsk
    const savedLanguage = localStorage.getItem("language") || "no";
    updateLanguage(savedLanguage);
});

// Funksjon for å oppdatere språk
function updateLanguage(lang) {
    if (document.querySelector(".betingelser-container")) {
        document.querySelector(".betingelser-container h1").textContent = translations[lang].betingelserTitle;
        document.querySelector(".betingelser-container p").textContent = translations[lang].betingelserIntro;
        return;
    }

    const elementsToUpdate = {
        "#bestill-header": "header",
        "label[for='dato']": "datoLabel",
        "label[for='starttid']": "starttidLabel",
        "label[for='sluttid']": "sluttidLabel",
        "label[for='adresse']": "adresseLabel",
        "label[for='oppdragstype']": "oppdragstypeLabel",
        "label[for='tema']": "temaLabel",
        "label[for='kundeinfo']": "kundeinfoLabel",
        "label[for='epost']": "epostLabel",
        "label[for='telefon']": "telefonLabel",
        "label[for='notater']": "notaterLabel",
        ".contact-form button": "sendButton"
    };

    Object.keys(elementsToUpdate).forEach(selector => {
        const element = document.querySelector(selector);
        if (element) element.textContent = translations[lang][elementsToUpdate[selector]];
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    const navTranslations = ["navBestill", "navTjenester", "navOmMeg", "navTilbakemeldinger", "navBetingelser", "navKontakt"];

    navLinks.forEach((link, index) => {
        if (translations[lang][navTranslations[index]]) {
            link.textContent = translations[lang][navTranslations[index]];
        }
    });
}

// EmailJS integrasjon for skjemaet
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
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

        console.log('Formdata som sendes:', formData);
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
                return response.text().then(error => {
                    throw new Error(`Feil ved sending av e-post: ${error}`);
                });
            }
        })
        .catch(error => {
            console.error('Feil ved sending av e-post:', error);
            alert(`Noe gikk galt: ${error.message}`);
        });
    });
}

// Smooth scrolling for navigasjon
const navLinks = document.querySelectorAll('.sticky-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Versjonslogg
fetch('version.json')
    .then(response => {
        if (!response.ok) throw new Error('Kunne ikke laste versjonsinformasjon');
        return response.json();
    })
    .then(data => {
        const versionLogElement = document.querySelector("#version-log");
        if (versionLogElement) versionLogElement.textContent = `Versjon: ${data.version}`;
    })
    .catch(error => console.error('Feil ved lasting av versjonsinformasjon:', error));