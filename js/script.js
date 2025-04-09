const lang = localStorage.getItem("language") || "no";

//Språkdata for nettsiden
const translations = {
    no: {
        // Skjemafelt og meldinger
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
        betingelserBestilling: "1. Bestilling og avbestilling",
        betingelserBestillingText: "Alle tolkeoppdrag må bestilles i god tid for å sikre tilgjengelighet. Ved behov for tolketjenester på kort varsel vil vi forsøke å imøtekomme forespørselen, men dette kan ikke garanteres.",
        betingelserAvbestilling: "Alle tolketjenester må avbestilles senest 24 timer før oppdragets start. Ved senere avbestilling vil hele beløpet faktureres.",

        betingelserPriser: "2. Priser og betalingsbetingelser",
        betingelserPriserText: "Prisen på tolketjenester avhenger av flere faktorer, inkludert:",
        betingelserPrisType: "Type tolkning (telefontolking, skjermtolking eller personlig oppmøte)",
        betingelserPrisTid: "Tidspunkt for oppdraget (ordinær arbeidstid 08:00–16:00 eller kvelds-/helgetid)",
        betingelserPrisKontakt: "Ta kontakt for et pristilbud tilpasset dine behov. Betaling skjer via faktura med 14 dagers betalingsfrist.",

        betingelserKvalifikasjoner: "3. Kvalifikasjoner og tolkeautorisasjon",
        betingelserKvalifikasjonerText: "Jeg er registrert i Nasjonalt tolkeregister i kategori C, som innebærer at jeg har bestått statsautorisasjonsprøven for tolker i ukrainsk.",
        betingelserKategorierIntro: "I Norge er tolker klassifisert i følgende kategorier basert på kompetanse:",
        betingelserKategoriA: "Kategori A – Statsautorisert tolk med fullført bachelorgrad i tolking",
        betingelserKategoriB: "Kategori B – Statsautorisert tolk eller bachelorgrad i tolking kombinert med grunnemne (30 studiepoeng)",
        betingelserKategoriC: "Kategori C – Statsautorisert tolk",
        betingelserKategoriD: "Kategori D – Grunnemne i tolking i offentlig sektor (30 studiepoeng)",
        betingelserKategoriE: "Kategori E – Bestått Tospråktesten med kurs i tolkeetikk og ansvarsbevissthet (TAO)",

        betingelserHvorforTolk: "4. Hvorfor bruke en registrert tolk?",
        betingelserHvorforTolkText: "Nasjonalt tolkeregister er et offentlig register over kvalifiserte tolker i Norge. En registrert tolk har dokumentert kompetanse, kjennskap til tolkeetiske retningslinjer og er underlagt kravene i Tolkeloven. Dette sikrer kvalitet, nøytralitet og profesjonell utførelse av tolkeoppdrag.",

        betingelserKontakt: "5. Kontakt",
        betingelserKontaktText: "For spørsmål om betingelser, vennligst kontakt meg på:\n📧 marinakarlsen5@gmail.com"
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
        navBetingelser: "Умови та положення",
        navKontakt: "Контакт",

        oppdragstelefon: "Телефонний переклад",
        oppdragsskjerm: "Відеопереклад",
        oppdragsoppmøte: "Особиста присутність",

        tjenesterHeader: "Послуги",
        tjenesterTelefon: "Телефонний переклад",
        tjenesterTelefonDesc: "Ефективне рішення для ситуацій, де особиста присутність не є необхідною.",
        tjenesterSkjerm: "Відеопереклад",
        tjenesterSkjermDesc: "Зручний варіант для зустрічей і конференцій через відеоплатформи.",
        tjenesterOppmote: "Особиста присутність",
        tjenesterOppmoteDesc: "Для ситуацій, що вимагають присутності та особистого контакту.",

        tilbakemeldingerHeader: "Відгуки",
        feedbackIntro: "Що клієнти кажуть про мої послуги:",

        kontaktHeader: "Контакт",
        kontaktText: "Зв'яжіться зі мною електронною поштою або телефоном:",

        betingelserHeader: "Умови та положення",
        betingelserBestilling: "1. Замовлення та скасування",
        betingelserBestillingText: "Усі замовлення на перекладацькі послуги мають здійснюватися завчасно для забезпечення доступності. У разі потреби в терміновому наданні послуг ми намагатимемося задовольнити запит, однак це не може бути гарантовано.",
        betingelserAvbestilling: "Усі перекладацькі послуги мають бути скасовані не пізніше ніж за 24 години до початку завдання. У разі пізнішого скасування стягується повна сума.",

        betingelserPriser: "2. Ціни та умови оплати",
        betingelserPriserText: "Вартість перекладацьких послуг залежить від кількох чинників, зокрема:",
        betingelserPrisType: "Тип перекладу (телефонний, відеопереклад або особиста присутність)",
        betingelserPrisTid: "Час виконання завдання (звичайний робочий час 08:00–16:00 або вечірній/вихідний час)",
        betingelserPrisKontakt: "Зверніться для отримання індивідуальної цінової пропозиції. Оплата здійснюється за рахунком-фактурою з терміном оплати 14 днів.",

        betingelserKvalifikasjoner: "3. Кваліфікація та авторизація перекладача",
        betingelserKvalifikasjonerText: "Я зареєстрована в Національному реєстрі перекладачів у категорії C, що означає, що я склала іспит на державну авторизацію перекладача з української мови.",
        betingelserKategorierIntro: "У Норвегії перекладачі поділяються на п’ять категорій у Національному реєстрі перекладачів залежно від їхньої кваліфікації:",
        betingelserKategoriA: "Категорія A – Перекладач із державною авторизацією та завершеним бакалавратом у сфері перекладу",
        betingelserKategoriB: "Категорія B – Перекладач із державною авторизацією або бакалавр у сфері перекладу в комбінації з базовим курсом (30 кредитів)",
        betingelserKategoriC: "Категорія C – Перекладач із державною авторизацією",
        betingelserKategoriD: "Категорія D – Базовий курс з перекладу в державному секторі (30 кредитів)",
        betingelserKategoriE: "Категорія E – Успішно складений Двомовний тест з курсом з перекладацької етики та відповідальності (TAO)",

        betingelserHvorforTolk: "4. Чому варто звертатися до зареєстрованого перекладача?",
        betingelserHvorforTolkText: "Національний реєстр перекладачів – це офіційний реєстр кваліфікованих перекладачів у Норвегії. Зареєстрований перекладач має підтверджену компетентність, знайомий з етичними принципами перекладу та підпадає під дію вимог Закону про перекладацьку діяльність. Це забезпечує якість, неупередженість і професійне виконання перекладацьких завдань.",

        betingelserKontakt: "5. Контакт",
        betingelserKontaktText: "З питаннями щодо умов, будь ласка, звертайтеся за адресою:\n📧 marinakarlsen5@gmail.com"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "no";

    // Sjekker om vi er på betingelser.html
    if (document.querySelector(".betingelser-container")) {
        updateBetingelserLanguage(savedLang);
    } else {
        updateLanguage(savedLang);
    }

    // Finner språk-knappene
    const langButtons = document.querySelectorAll(".lang-button");

    // Oppdaterer aktiv klasse på riktig knapp ved last
    langButtons.forEach(button => {
        if (button.dataset.lang === savedLang) {
            button.classList.add("active");
        }
    });

    // Språkbytte ved klikk
    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedLang = button.dataset.lang;
            localStorage.setItem("language", selectedLang);

            // Fjerner aktiv klasse fra alle knapper
            langButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Oppdater riktig side
            if (document.querySelector(".betingelser-container")) {
                updateBetingelserLanguage(selectedLang);
            } else {
                updateLanguage(selectedLang);
            }
        });
    });
});

// Funksjon for å oppdatere språket på Betingelser-siden
function updateBetingelserLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

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
if (document.querySelector(".contact-form")) {
    if (!checkEmailJS()) {
        throw new Error("EmailJS ble ikke initialisert. Kontroller innstillingene dine.");
    }
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
        const href = link.getAttribute('href');

        // Hvis lenken starter med "#", scroll til seksjonen
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

// Aktiver interaktiv karusell for tilbakemeldinger (hvis det er flere elementer)
const feedbackCarousel = document.querySelector('.feedback-carousel');
if (feedbackCarousel) {
    feedbackCarousel.addEventListener('wheel', (e) => {
        e.preventDefault();
        feedbackCarousel.scrollLeft += e.deltaY;
    });
}

// EmailJS integrasjon for skjemaet
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
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
            console.log("Formdata som sendes:", formData);
            fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    service_id: "service_p7gp21t", // Min Service ID
                    template_id: "template_weqmq4a", // Min Template ID
                    user_id: "bFcwSKHQToHSyB7aX", // Min Public API Key
                    template_params: formData // Sender formData med dato, starttid og sluttid
                })
            })
                .then(response => {
                    if (response.ok) {
                        alert(translations[selectedLanguage].formSuccess);
                        form.reset(); // Nullstill skjemaet
                    } else {
                        return response.text().then(error => {
                            throw new Error(`Feil ved sending av e-post: ${error}`);
                        });
                    }
                })
                .catch(error => {
                    console.error("Feil ved sending av e-post:", error);
                    alert(`Noe gikk galt: ${error.message}`);
                });
        });
    }
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
    
    // Funksjon for å oppdatere språk
    function updateLanguage(lang) {
        // Sjekker om den er på betingelser.html
        if (document.querySelector(".betingelser-container")) {
        document.querySelector(".betingelser-container h1").textContent = translations[lang].betingelserTitle;
        document.querySelector(".betingelser-container p").textContent = translations[lang].betingelserIntro;
        return; // Stopp videre kjøring på denne siden
        }

        document.querySelector("nav ul li:nth-child(5) a").textContent = translations[lang].navBetingelser;

        // Hvis vi er på betingelser-siden, oppdater overskriften og teksten
        if (document.querySelector(".betingelser-container")) {
            const betingelserTitle = document.querySelector(".betingelser-container h1");
            const betingelserIntro = document.querySelector(".betingelser-container p");
        
            if (betingelserTitle) {
                betingelserTitle.textContent = translations[lang].betingelserTitle;
            }
            if (betingelserIntro) {
                betingelserIntro.textContent = translations[lang].betingelserIntro;
            }
        }
        
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
    
        // Henter riktig knapp for "Send forespørsel"
        const sendButton = document.querySelector(".contact-form button");
        if (sendButton) {
            sendButton.textContent = translations[lang].sendButton;
        }
    
        // Navigasjonsmeny
        document.querySelector("nav ul li:nth-child(1) a").textContent = translations[lang].navBestill;
        document.querySelector("nav ul li:nth-child(2) a").textContent = translations[lang].navTjenester;
        document.querySelector("nav ul li:nth-child(3) a").textContent = translations[lang].navOmMeg;
        document.querySelector("nav ul li:nth-child(4) a").textContent = translations[lang].navTilbakemeldinger;
        document.querySelector("nav ul li:nth-child(5) a").textContent = translations[lang].navBetingelser;
        document.querySelector("nav ul li:nth-child(6) a").textContent = translations[lang].navKontakt;
    
        // Oppdaterer oppdragstype i skjemaet
        document.querySelector("#oppdragstype option[value='telefontolking']").textContent = translations[lang].oppdragstelefon;
        document.querySelector("#oppdragstype option[value='skjermtolking']").textContent = translations[lang].oppdragsskjerm;
        document.querySelector("#oppdragstype option[value='personlig']").textContent = translations[lang].oppdragsoppmøte;
    
        // Tjenester-seksjonen
        document.querySelector("#tjenester h2").textContent = translations[lang].tjenesterHeader;
        document.querySelector("#tjenester .service:nth-child(1) h3").textContent = translations[lang].tjenesterTelefon;
        document.querySelector("#tjenester .service:nth-child(1) p").textContent = translations[lang].tjenesterTelefonDesc;
        document.querySelector("#tjenester .service:nth-child(2) h3").textContent = translations[lang].tjenesterSkjerm;
        document.querySelector("#tjenester .service:nth-child(2) p").textContent = translations[lang].tjenesterSkjermDesc;
        document.querySelector("#tjenester .service:nth-child(3) h3").textContent = translations[lang].tjenesterOppmote;
        document.querySelector("#tjenester .service:nth-child(3) p").textContent = translations[lang].tjenesterOppmoteDesc;
    
        // Tilbakemeldinger-seksjonen
        document.querySelector("#tilbakemeldinger h2").textContent = translations[lang].tilbakemeldingerHeader;
        document.querySelector("#tilbakemeldinger p").textContent = translations[lang].feedbackIntro;
    
        // Kontakt-seksjonen
        document.querySelector("#kontakt h2").textContent = translations[lang].kontaktHeader;
        document.querySelector("#kontakt p").textContent = translations[lang].kontaktText;
    
        // E-post og telefon i kontaktseksjonen
        const kontaktInfo = document.querySelectorAll("#kontakt li");
        if (kontaktInfo.length >= 2) {
            kontaktInfo[0].innerHTML = `<i class="fa fa-envelope"></i> ${translations[lang].epostLabel} <a href="mailto:marinakarlsen5@gmail.com">marinakarlsen5@gmail.com</a>`;
            kontaktInfo[1].innerHTML = `<i class="fa fa-phone"></i> ${translations[lang].telefonLabel} <a href="tel:+4746930229">+47 469 30 229</a>`;
        }
    }    

// Språk-oppdatering for Betingelser-siden
function updateBetingelserLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Oppdater språk når siden lastes
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "no";
    updateBetingelserLanguage(savedLang);
});

// 🔹 Funksjon for å oppdatere språket på Betingelser-siden
function updateBetingelserLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Språk-knapper som oppdaterer både hovedsiden og Betingelser-siden
document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll(".lang-button");
    const savedLang = localStorage.getItem("language") || "no";

    // Sett aktiv klasse på riktig knapp ved last
    langButtons.forEach(button => {
        if (button.dataset.lang === savedLang) {
            button.classList.add("active");
        }
    });

    // Oppdater språk på riktig side
    if (document.querySelector(".betingelser-container")) {
        updateBetingelserLanguage(savedLang);
    } else {
        updateLanguage(savedLang);
    }

    // Språkbytte ved klikk
    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedLang = button.dataset.lang;

            // Lagre språk i nettleser
            localStorage.setItem("language", selectedLang);

            // Oppdater aktiv klasse
            langButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Oppdater språk på riktig side
            if (document.querySelector(".betingelser-container")) {
                updateBetingelserLanguage(selectedLang);
            } else {
                updateLanguage(selectedLang);
            }
        });
    });
});

function updateBetingelserLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}