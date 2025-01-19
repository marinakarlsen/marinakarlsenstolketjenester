// En funksjon som sjekker om EmailJS er initialisert
function checkEmailJS() {
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS er ikke lastet inn!');
        alert('En feil oppstod. EmailJS er ikke initialisert.');
        return; // Dette er gyldig fordi det er inne i en funksjon.
    }
    emailjs.init('bFcwSKHQToHSyB7aX'); // Min Public API Key
    console.log('EmailJS er initialisert med den nyeste SDK-en');
}

// Kaller funksjonen for å sjekke EmailJS
checkEmailJS();


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
    e.preventDefault(); // Hindre standard skjemaoppførsel

    // Samle inn data fra skjemaet
    const form = e.target;
    const formData = {
        dato: form.dato.value,
        adresse: form.adresse.value,
        oppdragstype: form.oppdragstype.value,
        tema: form.tema.value,
        kundeinfo: form.kundeinfo.value,
        epost: form.epost.value,
        telefon: form.telefon.value,
        notater: form.notater.value,
    };

    // Send data til EmailJS
    console.log('Formdata som sendes:', formData);
    console.log('EmailJS-objekt:', emailjs);
    emailjs.send('service_p7gp21t', 'template_weqmq4a', formData)
        .then(() => {
            alert('Bestillingen din har blitt sendt! Takk.');
            form.reset(); // Nullstill skjemaet
        })
        .catch((error) => {
            console.error('Feil ved sending av e-post:', error);
            alert(`Det oppstod en feil: ${error.text || 'Ukjent feil'}. Vennligst prøv igjen.`);
        });
});

// Definer versjonsnummer
const versionNumber = "1.0.1"; // Oppdater dette nummeret ved nye endringer

// Sett versjonsnummeret automatisk i HTML
document.addEventListener("DOMContentLoaded", () => {
    const versionLogElement = document.querySelector("#version-log");
    if (versionLogElement) {
        versionLogElement.textContent = `Versjon: ${versionNumber}`;
    }
});
