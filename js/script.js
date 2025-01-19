if (typeof emailjs !== 'undefined') {
    emailjs.init('bFcwSKHQToHSyB7aX');
    console.log('EmailJS er initialisert');
} else {
    console.error('EmailJS er ikke lastet inn!');
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
        e.preventDefault();
    
        if (typeof emailjs === 'undefined') {
            console.error('EmailJS er ikke initialisert!');
            alert('En feil oppstod. EmailJS er ikke initialisert.');
            return;
        }
    
        // Sendelogikk:
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
    
        emailjs.send('din-service-id', 'din-template-id', formData)
            .then(() => {
                alert('E-posten ble sendt!');
            })
            .catch((error) => {
                console.error('Feil ved sending av e-post:', error);
                alert('Noe gikk galt. Prøv igjen senere.');
            });
    });
    
