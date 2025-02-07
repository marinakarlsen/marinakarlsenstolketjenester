document.addEventListener('DOMContentLoaded', () => {
    // Finn språk-knappene i DOM
    const langButtons = document.querySelectorAll(".lang-button");

    // Legg til klikk-event for hver knapp
    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Fjern "active"-klassen fra alle knapper
            langButtons.forEach(btn => btn.classList.remove("active"));
            // Legg "active"-klassen til den klikkede knappen
            button.classList.add("active");

            // Oppdater språket basert på valgt knapp
            const selectedLang = button.dataset.lang;
            updateLanguage(selectedLang);

            // Lagre valgt språk i nettleserens localStorage
            localStorage.setItem("language", selectedLang);
        });
    });

    // Last språket fra localStorage (hvis tilgjengelig), ellers bruk "no" (norsk)
    const savedLanguage = localStorage.getItem("language") || "no";
    updateLanguage(savedLanguage);
});

// Sjekk om EmailJS er lastet og initialisert
function checkEmailJS() {
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS er ikke lastet inn!');
        alert('En feil oppstod. EmailJS er ikke initialisert.');
        return false; // Indikerer feil
    }
    emailjs.init('bFcwSKHQToHSyB7aX'); // Din Public API Key
    console.log('EmailJS er initialisert med den nyeste SDK-en');
    return true; // Indikerer suksess
}

// Kjør sjekk for EmailJS
if (!checkEmailJS()) {
    // Stop her hvis EmailJS ikke er lastet inn
    throw new Error('EmailJS ble ikke initialisert. Kontroller innstillingene dine.');
}

// Dynamisk logo-effekt ved scrolling
const logoContainer = document.querySelector('.logo-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        logoContainer.classList.add('shrink');
    } else {
        logoContainer.classList.remove('shrink');
    }
});

// Gjør logoen klikkbar og sender brukeren til toppen
const logoLink = document.querySelector('.logo-container a');
logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Legg til smooth scrolling for navigasjonslenker
const navLinks = document.querySelectorAll('.sticky-nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Aktiver interaktiv karusell for tilbakemeldinger (hvis det er flere elementer)
const feedbackCarousel = document.querySelector('.feedback-carousel');
if (feedbackCarousel) {
    feedbackCarousel.addEventListener('wheel', (e) => {
        e.preventDefault();
        feedbackCarousel.scrollLeft += e.deltaY;
    });
}

// EmailJS integrasjon for skjemaet
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Hindrer standard skjemaoppførsel

    // Hent språket som er valgt (fra localStorage eller default til "no")
    const selectedLanguage = localStorage.getItem("language") || "no";

    // Samle inn data fra skjemaet
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
        language: selectedLanguage === "no" ? "Norsk" : "Українська" // Legger til valgt språk
    };

    // Send data til EmailJS via fetch
    console.log('Formdata som sendes:', formData);
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            service_id: 'service_p7gp21t',   // Din Service ID
            template_id: 'template_weqmq4a', // Din Template ID
            user_id: 'bFcwSKHQToHSyB7aX',   // Din Public API Key
            template_params: formData       // Sender formData med dato, starttid og sluttid
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Bestillingen din har blitt sendt!');
            form.reset(); // Tøm skjemaet
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

// Hent versjonsnummeret fra version.json og vis det i versjonsloggen
fetch('version.json') // Hent version.json
    .then(response => {
        if (!response.ok) {
            throw new Error('Kunne ikke laste versjonsinformasjon');
        }
        return response.json(); // Konverter JSON-innhold til et objekt
    })
    .then(data => {
        // Sett versjonsnummeret i HTML-elementet med id="version-log"
        const versionLogElement = document.querySelector("#version-log");
        if (versionLogElement) {
            versionLogElement.textContent = `Versjon: ${data.version}`;
        }
    })
    .catch(error => {
        console.error('Feil ved lasting av versjonsinformasjon:', error);
    });


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
    },
};

// Oppdater teksten på nettsiden
function updateLanguage(lang) {
    document.querySelector("#bestill-header").textContent = translations[lang].header;
    document.querySelector("label[for='dato']").textContent = translations[lang].datoLabel;
    document.querySelector("label[for='starttid']").textContent = translations[lang].starttidLabel;
    document.querySelector("label[for='sluttid']").textContent = translations[lang].sluttidLabel;
    document.querySelector("label[for='adresse']").textContent = translations[lang].adresseLabel;
    document.querySelector("label[for='oppdragstype']").textContent = translations[lang].oppdragstypeLabel;
    document.querySelector("label[for='tema']").textContent = translations[lang].temaLabel;
    document.querySelector("label[for='kundeinfo']").textContent = translations[lang].kundeinfoLabel;
    document.querySelector("label[for='epost']").textContent = translations[lang].epostLabel;
    document.querySelector("label[for='telefon']").textContent = translations[lang].telefonLabel;
    document.querySelector("label[for='notater']").textContent = translations[lang].notaterLabel;
    document.querySelector(".highlight-button").textContent = translations[lang].sendButton;
}