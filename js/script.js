const lang = localStorage.getItem("language") || "no";

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
        navBetingelser: "Betingelser",
        navKontakt: "Kontakt",

        oppdragstelefon: "Telefontolking",
        oppdragsskjerm: "Skjermtolking",
        oppdragsoppmøte: "Personlig oppmøte",

        tjenesterHeader: "Tjenester",
        tjenesterTelefon: "Telefontolking",
        tjenesterTelefonDesc: "Effektiv løsning for situasjoner hvor personlig oppmøte ikke er nødvendig.",
        tjenesterSkjerm: "Skjermtolking",
        tjenesterSkjermDesc: "Praktisk og fleksibelt for møter og konferanser via videoplattformer.",
        tjenesterOppmote: "Personlig oppmøte",
        tjenesterOppmoteDesc: "For situasjoner som krever tilstedeværelse og nærhet for maksimal effektivitet.",

        tilbakemeldingerHeader: "Tilbakemeldinger",
        feedbackIntro: "Se hva kundene sier om mine tjenester:",

        kontaktHeader: "Kontakt",
        kontaktText: "Ta gjerne kontakt via e-post eller telefon:",

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
        betingelserKontaktText: "For spørsmål om betingelser, vennligst kontakt meg på:\n📧 marinakarlsen5@gmail.com",

        omMegTitle: "Om Meg",
        omMegIntro: "Som tolk jobber jeg i skjæringspunktet mellom språk, mennesker og presisjon. Jeg har alltid hatt interesse for hvordan vi kommuniserer – både det menneskelige og det strukturelle. Det var denne kombinasjonen som førte meg inn i tolkeyrket.",
        omMegErfaring: "Jeg har jobbet som tolk i over tre år, med norsk og ukrainsk som arbeidsspråk – to språk jeg har som morsmål. I løpet av denne tiden har jeg tolket i en rekke ulike sammenhenger, og fått mange gode og takknemlige tilbakemeldinger fra både oppdragsgivere og brukere.",
        omMegKvalifikasjon: "Min vei inn i tolkeyrket startet med tospråktesten og TAO-kurset. Deretter tok jeg statsautorisasjonsprøven i tolking – en krevende, men lærerik prosess som endte med at jeg ble registrert i Nasjonalt tolkeregister i kategori C. Det å være statsautorisert tolk er noe jeg setter stor pris på, både fordi det er en anerkjennelse av kompetanse, og fordi det forplikter til høy faglig og etisk standard.",
        omMegSprak: "Jeg har alltid hatt en interesse for språk og kommunikasjon. Gjennom kurs og utdanning har jeg fordypet meg i språk som tysk, russisk og engelsk, men det er mellom norsk og ukrainsk jeg tolker profesjonelt.",
        omMegStudier: "Ved siden av tolkeoppdragene studerer jeg til sivilingeniør innen ingeniørfag og IKT – en utdanning som gir meg en strukturert og analytisk tilnærming også i tolkerollen.",
        omMegMotivasjon: "Motivasjonen min for å jobbe som tolk handler først og fremst om mennesker. Jeg ønsker å bidra til at alle skal få likeverdige tjenester og god oppfølging, uavhengig av hvilket språk de snakker. God tolkning handler ikke bare om språk, men også om tillit, nøyaktighet og medmenneskelighet.",
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
        betingelserKontaktText: "З питаннями щодо умов, будь ласка, звертайтеся за адресою:\n📧 marinakarlsen5@gmail.com",

        omMegTitle: "Про мене",
        omMegIntro: "У своїй роботі перекладача я поєдную мову, людей і точність. Мене завжди цікавило, як ми спілкуємося – як на людському рівні, так і на структурному. Саме ця комбінація і привела мене до професії перекладача.",
        omMegErfaring: "Я працюю перекладачем понад три роки, використовуючи норвезьку та українську як робочі мови – обидві є для мене рідними. За цей час я перекладала в різних ситуаціях і отримувала багато позитивних і вдячних відгуків від клієнтів та користувачів.",
        omMegKvalifikasjon: "Мій шлях до професії почався з двомовного тесту та курсу TAO. Після цього я склала державний кваліфікаційний іспит з перекладу – це був складний, але дуже цінний процес, що завершився реєстрацією в Національному реєстрі перекладачів у категорії C. Для мене це не лише підтвердження компетентності, але й зобов’язання дотримуватись високих професійних та етичних стандартів.",
        omMegSprak: "Мене завжди цікавили мови та комунікація. Завдяки курсам та навчальним програмам я поглибила знання з німецької, російської та англійської мов, хоча професійно перекладаю саме з норвезької та української.",
        omMegStudier: "Паралельно з перекладацькою діяльністю я навчаюсь на інженера у сфері інженерії та ІКТ. Це дає мені структурований та аналітичний підхід, який я застосовую і в перекладацькій роботі.",
        omMegMotivasjon: "Моя мотивація працювати перекладачем передусім полягає в бажанні допомагати людям. Я прагну, щоб усі отримували рівні послуги і належне обслуговування, незалежно від мови, якою вони розмовляють. Якісний переклад – це не лише про слова, але й про довіру, точність і людяність.",
        }
};

// === Globale funksjoner for språk ===

function updateLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    const setText = (selector, key) => {
        const el = document.querySelector(selector);
        if (el && t[key]) el.textContent = t[key];
    };

    setText("#bestill-header", "header");
    setText("label[for='dato']", "datoLabel");
    setText("label[for='starttid']", "starttidLabel");
    setText("label[for='sluttid']", "sluttidLabel");
    setText("label[for='adresse']", "adresseLabel");
    setText("label[for='oppdragstype']", "oppdragstypeLabel");
    setText("label[for='tema']", "temaLabel");
    setText("label[for='kundeinfo']", "kundeinfoLabel");
    setText("label[for='epost']", "epostLabel");
    setText("label[for='telefon']", "telefonLabel");
    setText("label[for='notater']", "notaterLabel");

    const sendBtn = document.querySelector(".contact-form button");
    if (sendBtn && t.sendButton) sendBtn.textContent = t.sendButton;

    const navItems = document.querySelectorAll("nav ul li a");
    if (navItems.length >= 6) {
        navItems[0].textContent = t.navBestill;
        navItems[1].textContent = t.navTjenester;
        navItems[2].textContent = t.navOmMeg;
        navItems[3].textContent = t.navTilbakemeldinger;
        navItems[4].textContent = t.navBetingelser;
        navItems[5].textContent = t.navKontakt;
    }

    const tele = document.querySelector("#oppdragstype option[value='telefontolking']");
    const skjerm = document.querySelector("#oppdragstype option[value='skjermtolking']");
    const pers = document.querySelector("#oppdragstype option[value='personlig']");
    if (tele) tele.textContent = t.oppdragstelefon;
    if (skjerm) skjerm.textContent = t.oppdragsskjerm;
    if (pers) pers.textContent = t.oppdragsoppmøte;

    setText("#tjenester h2", "tjenesterHeader");
    setText("#tjenester .service:nth-child(1) h3", "tjenesterTelefon");
    setText("#tjenester .service:nth-child(1) p", "tjenesterTelefonDesc");
    setText("#tjenester .service:nth-child(2) h3", "tjenesterSkjerm");
    setText("#tjenester .service:nth-child(2) p", "tjenesterSkjermDesc");
    setText("#tjenester .service:nth-child(3) h3", "tjenesterOppmote");
    setText("#tjenester .service:nth-child(3) p", "tjenesterOppmoteDesc");

    setText("#tilbakemeldinger h2", "tilbakemeldingerHeader");
    setText("#tilbakemeldinger p", "feedbackIntro");

    setText("#kontakt h2", "kontaktHeader");
    setText("#kontakt p", "kontaktText");

    const kontaktInfo = document.querySelectorAll("#kontakt li");
    if (kontaktInfo.length >= 2) {
        kontaktInfo[0].innerHTML = `<i class="fa fa-envelope"></i> ${t.epostLabel} <a href="mailto:marinakarlsen5@gmail.com">marinakarlsen5@gmail.com</a>`;
        kontaktInfo[1].innerHTML = `<i class="fa fa-phone"></i> ${t.telefonLabel} <a href="tel:+4746930229">+47 469 30 229</a>`;
    }
}

function updateBetingelserLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (t[key]) el.textContent = t[key];
    });
}

function updateOmMegLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (t[key]) el.textContent = t[key];
    });
}

function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    loadTranslations(lang);
}

function loadTranslations(lang) {
    fetch(`translations_${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[key]) {
                    element.textContent = translations[key];
                }
            });
        });
}

// === DOMContentLoaded ===

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "no";

    // Språk-oppdatering for gjeldende side
    if (document.querySelector(".betingelser-container")) {
        updateBetingelserLanguage(savedLang);
    } else if (document.querySelector("#om-meg")) {
        updateOmMegLanguage(savedLang);
    } else {
        updateLanguage(savedLang);
    }

    // Språkvalg-knapper
    const langButtons = document.querySelectorAll(".lang-button");
    langButtons.forEach(button => {
        if (button.dataset.lang === savedLang) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            const selectedLang = button.dataset.lang;
            localStorage.setItem("language", selectedLang);

            langButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            if (document.querySelector(".betingelser-container")) {
                updateBetingelserLanguage(selectedLang);
            } else if (document.querySelector("#om-meg")) {
                updateOmMegLanguage(selectedLang);
            } else {
                updateLanguage(selectedLang);
            }
        });
    });

    // Slide-in effekt
    const slideInElements = document.querySelectorAll('.slide-in');
    if (slideInElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });
        slideInElements.forEach(el => observer.observe(el));
    }

    // Logo skrinking
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        window.addEventListener('scroll', () => {
            logoContainer.classList.toggle('shrink', window.scrollY > 50);
        });

        const logoLink = logoContainer.querySelector('a');
        if (logoLink) {
            logoLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // Smooth scrolling for interne lenker
    document.querySelectorAll('.sticky-nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Tilbakemelding-karusell
    const feedbackCarousel = document.querySelector('.feedback-carousel');
    if (feedbackCarousel) {
        feedbackCarousel.addEventListener('wheel', (e) => {
            e.preventDefault();
            feedbackCarousel.scrollLeft += e.deltaY;
        });
    }

    // EmailJS
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        if (typeof emailjs === 'undefined') {
            console.error('EmailJS er ikke lastet inn!');
            alert('En feil oppstod. EmailJS er ikke initialisert.');
            return;
        }

        emailjs.init('bFcwSKHQToHSyB7aX');
        console.log('EmailJS er initialisert med den nyeste SDK-en');

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const form = e.target;
            const selectedLang = localStorage.getItem("language") || "no";

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
                language: selectedLang === "no" ? "Norsk" : "Українська"
            };

            fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    service_id: "service_p7gp21t",
                    template_id: "template_weqmq4a",
                    user_id: "bFcwSKHQToHSyB7aX",
                    template_params: formData
                })
            })
            .then(response => {
                if (response.ok) {
                    alert(translations[selectedLang].formSuccess);
                    form.reset();
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

    // Hent versjon fra version.json
    fetch('version.json')
        .then(response => {
            if (!response.ok) throw new Error('Kunne ikke laste versjonsinformasjon');
            return response.json();
        })
        .then(data => {
            const versionLogElement = document.querySelector("#version-log");
            if (versionLogElement) {
                versionLogElement.textContent = `Versjon: ${data.version}`;
            }
        })
        .catch(error => {
            console.error('Feil ved lasting av versjonsinformasjon:', error);
        });
});