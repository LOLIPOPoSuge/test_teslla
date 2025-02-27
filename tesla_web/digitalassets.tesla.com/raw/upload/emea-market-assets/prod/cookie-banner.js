(() => {
    "use strict";
    const e = "tsla-cookie-consent",
        t = "tsla-accept-cookie",
        r = "tsla-reject-cookie",
        n = "accepted",
        o = "rejected",
        i = "cookie_banner",
        a = "tesla.com",
        s = "tsla-button-container",
        l = "/legal/cookies",
        c = {
            width: "100%",
            height: "auto",
            "z-index": "1",
            position: "fixed",
            bottom: 0,
            display: "flex",
            "align-items": "center",
            background: "#fff",
            padding: "16px 24px",
            "box-shadow": "0px 8px 16px 0px rgba(0, 0, 0, 0.12)"
        },
        d = { ...c,
            padding: "16px 48px",
            "flex-flow": "row nowrap"
        },
        u = { ...c,
            gap: "10px",
            "flex-flow": "column"
        },
        p = {
            flex: 1,
            "font-size": "12px",
            "margin-right": "24px"
        },
        k = {
            display: "flex",
            "flex-flow": "row nowrap",
            gap: "10px 10px"
        },
        m = { ...k,
            width: "100%",
            "flex-flow": "column nowrap"
        },
        f = {
            "vertical-align": "middle",
            height: "32px",
            "border-color": "transparent",
            "border-radius": "4px",
            "align-items": "center",
            "box-shadow": "inset 0 0 0 2px transparent",
            display: "inline-flex",
            "font-size": "14px",
            "font-weight": "500",
            "justify-content": "center",
            "line-height": "1.2",
            padding: "4px 24px",
            position: "relative",
            "text-align": "center",
            "text-transform": "inherit",
            border: "3px solid transparent",
            transition: "border-color 0.33s ease, background-color 0.33s ease, color 0.33s ease, box-shadow 0.25s ease",
            "min-width": "137px"
        },
        g = {
            "background-color": "rgba(0,0,0,0.05)",
            ...f
        },
        b = { ...f,
            "background-color": "#eeeeee"
        },
        v = () => {
            let e;
            return e = window.innerWidth > 700 ? d : u, e["z-index"] = j() + 1, S(e)
        },
        y = () => {
            let e;
            return e = window.innerWidth > 700 ? k : m, S(e)
        },
        _ = (e, t = "tsla-cookie-consent") => {
            const r = new CustomEvent(t, {
                detail: {
                    decision: e
                }
            });
            document.dispatchEvent(r)
        },
        h = e => {
            let t;
            if (e.days) {
                let r = new Date;
                r.setTime(r.getTime() + 24 * e.days * 60 * 60 * 1e3), t = "; expires=" + r.toGMTString()
            } else t = "";
            let r = window.location.hostname;
            r = r.includes(a) ? a : r, document.cookie = `${e.name}=${e.value}${t}; path=/;domain=${r}`, _(e.value, "tsla-cookie-consent-clicked"), _(e.value)
        },
        z = () => {
            document.getElementById(i).remove()
        },
        S = e => Object.keys(e).reduce(((t, r) => (t.push(`${r}: ${e[r]}`), t)), []).join("; "),
        j = () => {
            const e = document.getElementsByTagName("div");
            let t = 0;
            for (let r = 0; r < e.length; r++) {
                let n = parseInt(document.defaultView.getComputedStyle(e[r], null).getPropertyValue("z-index"), 10);
                n > t && (t = n)
            }
            return t > 0 ? t : 1
        },
        O = {
            ar_ae: JSON.parse('{"title":"ساعدنا لتحسين موقعنا الإلكتروني باستخدام ملفات تعريف الارتباط","body":"نحن نستخدم ملفات تعريف الارتباط ونُعالج البيانات من جهازك لتحليل أداء الموقع الإلكتروني، وتخصيص محتوى الإعلان، وتحسين تجربتك. وتتضمن موافقتك عمليات نقل البيانات خارج الدولة التي تقيم فيها، على سبيل المثال الولايات المتحدة. يمكنك عرض <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>إعدادات ملفات تعريف الارتباط</a> للحصول على مزيد من المعلومات.","accept":"موافقة","reject":"مرفوض"}'),
            ar_jo: JSON.parse('{"title":"ساعدنا لتحسين موقعنا الإلكتروني باستخدام ملفات تعريف الارتباط","body":"نحن نستخدم ملفات تعريف الارتباط ونُعالج البيانات من جهازك لتحليل أداء الموقع الإلكتروني، وتخصيص محتوى الإعلان، وتحسين تجربتك. وتتضمن موافقتك عمليات نقل البيانات خارج الدولة التي تقيم فيها، على سبيل المثال الولايات المتحدة. يمكنك عرض <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>إعدادات ملفات تعريف الارتباط</a> للحصول على مزيد من المعلومات.","accept":"موافقة","reject":"مرفوض"}'),
            ar_qa: JSON.parse('{"title":"ساعدنا لتحسين موقعنا الإلكتروني باستخدام ملفات تعريف الارتباط","body":"نحن نستخدم ملفات تعريف الارتباط ونُعالج البيانات من جهازك لتحليل أداء الموقع الإلكتروني، وتخصيص محتوى الإعلان، وتحسين تجربتك. وتتضمن موافقتك عمليات نقل البيانات خارج الدولة التي تقيم فيها، على سبيل المثال الولايات المتحدة. يمكنك عرض <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>إعدادات ملفات تعريف الارتباط</a> للحصول على مزيد من المعلومات.","accept":"موافقة","reject":"مرفوض"}'),
            cs_cz: JSON.parse('{"title":"Pomozte nám zlepšit naše webové stránky pomocí cookies","body":"Používáme cookies a zpracováváme údaje z vašeho zařízení za účelem analýzy výkonu webových stránek, přizpůsobení obsahu reklam a zlepšení vašeho zážitku. Váš souhlas se vztahuje i na přenosy údajů mimo zemi, ve které se nacházíte, například do USA. Další informace najdete v části <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Nastavení cookies</a>.","accept":"přijmout","reject":"Odmítnout"}'),
            da_dk: JSON.parse('{"title":"Hjælp os med at forbedre vores hjemmeside med cookies","body":"Vi benytter cookies og behandler data fra din enhed til at analysere hjemmesidens ydeevne, tilpasse annonceindhold og forbedre din oplevelse. Dit samtykke omfatter dataoverførsler uden for det land, du befinder dig i, for eksempel USA. Se <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Indstillinger for cookies</a> for at få yderligere oplysninger.","accept":"Accepter","reject":"Afvis"}'),
            de_at: JSON.parse('{"title":"Helfen Sie uns, unsere Website mit Cookies zu verbessern","body":"Wir verwenden Cookies und verarbeiten Daten von Ihrem Gerät, um die Leistung der Website zu analysieren, Werbeinhalte zu personalisieren und Ihre Nutzererfahrung zu verbessern. Ihre Einwilligung umfasst auch Datenübertragungen außerhalb des Landes, in dem Sie sich befinden, beispielsweise in die USA. Weitere Informationen hierzu finden Sie in den <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookies-Einstellungen</a>.","accept":"Akzeptieren","reject":"Ablehnen"}'),
            de_ch: JSON.parse('{"title":"Helfen Sie uns, unsere Website mit Cookies zu verbessern","body":"Wir verwenden Cookies und verarbeiten Daten von Ihrem Gerät, um die Leistung der Website zu analysieren, Werbeinhalte zu personalisieren und Ihre Nutzererfahrung zu verbessern. Ihre Einwilligung umfasst auch Datenübertragungen ausserhalb des Landes, in dem Sie sich befinden, beispielsweise in die USA. Weitere Informationen hierzu finden Sie in den <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookies-Einstellungen</a>.","accept":"Akzeptieren","reject":"Ablehnen"}'),
            de_de: JSON.parse('{"title":"Helfen Sie uns, unsere Website mit Cookies zu verbessern","body":"Wir verwenden Cookies und verarbeiten Daten von Ihrem Gerät, um die Leistung der Website zu analysieren, Werbeinhalte zu personalisieren und Ihre Nutzererfahrung zu verbessern. Ihre Einwilligung umfasst auch Datenübertragungen außerhalb des Landes, in dem Sie sich befinden, beispielsweise in die USA. Weitere Informationen hierzu finden Sie in den <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookies-Einstellungen</a>.","accept":"Akzeptieren","reject":"Ablehnen"}'),
            de_lu: JSON.parse('{"title":"Helfen Sie uns, unsere Website mit Cookies zu verbessern","body":"Wir verwenden Cookies und verarbeiten Daten von Ihrem Gerät, um die Leistung der Website zu analysieren, Werbeinhalte zu personalisieren und Ihre Nutzererfahrung zu verbessern. Ihre Einwilligung umfasst auch Datenübertragungen außerhalb des Landes, in dem Sie sich befinden, beispielsweise in die USA. Weitere Informationen hierzu finden Sie in den <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookies-Einstellungen</a>.","accept":"Akzeptieren","reject":"Ablehnen"}'),
            el_gr: JSON.parse('{"title":"Βοηθήστε μας να βελτιώσουμε τον ιστότοπό μας με τα cookies","body":"Χρησιμοποιούμε cookies και επεξεργαζόμαστε δεδομένα από τη συσκευή σας για να αναλύσουμε την απόδοση του ιστοτόπου, να εξατομικεύσουμε το διαφημιστικό περιεχόμενο και να βελτιώσουμε τη δική σας εμπειρία χρήσης. Η συγκατάθεσή σας περιλαμβάνει διαβίβαση δεδομένων εκτός της χώρας στην οποία βρίσκεστε, για παράδειγμα στις Ηνωμένες Πολιτείες. Για περισσότερες πληροφορίες, δείτε τις <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Ρυθμίσεις cookies</a>.","accept":"Αποδέχομαι","reject":"Απόρριψη"}'),
            en_ae: JSON.parse('{"title":"Help Us Improve Our Website with Cookies","body":"We use cookies and process data from your device to analyze website performance, personalize ad content, and improve your experience. Your consent includes data transfers outside of the country you’re located, for example the United States. View <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookie Settings</a> for more information.","accept":"Accept","reject":"Reject"}'),
            en_eu: JSON.parse('{"title":"Help Us Improve Our Website with Cookies","body":"We use cookies and process data from your device to analyze website performance, personalize ad content, and improve your experience. Your consent includes data transfers outside of the country you’re located, for example the United States. View <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookie Settings</a> for more information.","accept":"Accept","reject":"Reject"}'),
            en_gb: JSON.parse('{"title":"Help Us Improve Our Website with Cookies","body":"We use cookies and process data from your device to analyze website performance, personalize ad content, and improve your experience. Your consent includes data transfers outside of the country you’re located, for example the United States. View <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookie Settings</a> for more information.","accept":"Accept","reject":"Reject"}'),
            en_ie: JSON.parse('{"title":"Help Us Improve Our Website with Cookies","body":"We use cookies and process data from your device to analyze website performance, personalize ad content, and improve your experience. Your consent includes data transfers outside of the country you’re located, for example the United States. View <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookie Settings</a> for more information.","accept":"Accept","reject":"Reject"}'),
            en_jo: JSON.parse('{"title":"Help Us Improve Our Website with Cookies","body":"We use cookies and process data from your device to analyze website performance, personalize ad content, and improve your experience. Your consent includes data transfers outside of the country you’re located, for example the United States. View <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookie Settings</a> for more information.","accept":"Accept","reject":"Reject"}'),
            en_qa: JSON.parse('{"title":"Help Us Improve Our Website with Cookies","body":"We use cookies and process data from your device to analyze website performance, personalize ad content, and improve your experience. Your consent includes data transfers outside of the country you’re located, for example the United States. View <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookie Settings</a> for more information.","accept":"Accept","reject":"Reject"}'),
            es_es: JSON.parse('{"title":"Ayúdenos a mejorar nuestro sitio web con cookies","body":"Utilizamos cookies y procesamos los datos de su dispositivo para analizar el rendimiento del sitio web, personalizar el contenido de los anuncios y mejorar su experiencia. Su consentimiento incluye transferencias de datos fuera del país en el que se encuentra, por ejemplo, Estados Unidos. Consulte la <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Configuración de cookies</a> para obtener más información.","accept":"Aceptar","reject":"Rechazar"}'),
            fi_fi: JSON.parse('{"title":"Auta meitä kehittämään verkkosivustoamme evästeiden avulla","body":"Käytämme evästeitä ja käsittelemme laitteestasi saatavia tietoja, jotta voimme analysoida sivuston suorituskykyä, personoida mainosten sisältöä ja parantaa käyttökokemustasi. Suostumuksesi koskee tietojen siirtoa sijaintimaasi ulkopuolelle, esimerkiksi Yhdysvaltojen ulkopuolelle. Lue lisätietoja kohdasta <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Evästeasetukset</a>.","accept":"Hyväksy","reject":"Hylkää"}'),
            fr_be: JSON.parse('{"title":"Aidez-nous à améliorer notre site Web grâce aux cookies","body":"Nous utilisons des cookies et traitons les données de votre appareil pour analyser les performances du site Web, personnaliser le contenu des publicités et améliorer votre expérience. Votre consentement inclut les transferts de données en dehors du pays dans lequel vous vous trouvez, par exemple les États-Unis. Consultez les <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>paramètres relatifs aux cookies</a> pour en savoir plus.","accept":"Accepter","reject":"Rejeter"}'),
            fr_ch: JSON.parse('{"title":"Aidez-nous à améliorer notre site Web grâce aux cookies","body":"Nous utilisons des cookies et traitons les données de votre appareil pour analyser les performances du site Web, personnaliser le contenu des publicités et améliorer votre expérience. Votre consentement inclut les transferts de données en dehors du pays dans lequel vous vous trouvez, par exemple les États-Unis. Consultez les <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>paramètres relatifs aux cookies</a> pour en savoir plus.","accept":"Accepter","reject":"Rejeter"}'),
            fr_fr: JSON.parse('{"title":"Aidez-nous à améliorer notre site Web grâce aux cookies","body":"Nous utilisons des cookies et traitons les données de votre appareil pour analyser les performances du site Web, personnaliser le contenu des publicités et améliorer votre expérience. Votre consentement inclut les transferts de données en dehors du pays dans lequel vous vous trouvez, par exemple les États-Unis. Consultez les <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>paramètres relatifs aux cookies</a> pour en savoir plus.","accept":"Accepter","reject":"Rejeter"}'),
            fr_lu: JSON.parse('{"title":"Aidez-nous à améliorer notre site Web grâce aux cookies","body":"Nous utilisons des cookies et traitons les données de votre appareil pour analyser les performances du site Web, personnaliser le contenu des publicités et améliorer votre expérience. Votre consentement inclut les transferts de données en dehors du pays dans lequel vous vous trouvez, par exemple les États-Unis. Consultez les <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>paramètres relatifs aux cookies</a> pour en savoir plus.","accept":"Accepter","reject":"Rejeter"}'),
            he_il: JSON.parse('{"title":"עזרו לנו לשפר את האתר שלנו באמצעות קבצי Cookies","body":"אנו משתמשים בקבצי Cookies ומעבדים נתונים מהמכשיר שלכם כדי לנתח את ביצועי האתר, להתאים אישית את תוכן המודעות ולשפר את החוויה שלכם. הסכמתכם כוללת העברות נתונים מחוץ למדינה בה אתם נמצאים, לדוגמה, ארצות הברית. עיינו <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>בהגדרות קבצי Cookies</a> לקבלת מידע נוסף.","accept":"אישור","reject":"דחייה"}'),
            hr_hr: JSON.parse('{"title":"Pomozite nam da poboljšamo web-stranicu uz pomoć kolačića","body":"Upotrebljavamo kolačiće i obrađujemo podatke s vašeg uređaja kako bismo analizirali performanse web-stranice, prilagodili sadržaje oglasa i omogućili vam bolje iskustvo prilikom pregledavanja naše stranice. Vaš pristanak uključuje prijenose podataka izvan zemlje u kojoj se nalazite, na primjer Sjedinjenih Američkih Država. Za više informacija pogledajte odjeljak <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Postavke kolačića</a>.","accept":"Prihvati","reject":"Odbij"}'),
            hu_hu: JSON.parse('{"title":"Segítsen nekünk abban, hogy cookie-k használatával tehessük jobbá a webhelyünket","body":"Cookie-kat használunk és feldolgozzuk az Ön eszközéről származó adatokat ahhoz, hogy elemezzük a webhely teljesítményét, személyre szabjuk a hirdetések tartalmát, és javítsuk a felhasználói élményét. A hozzájárulása kiterjed a tartózkodási országán, például az Egyesült Államokon kívülre történő adattovábbításra is. További információért lásd a <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookie-beállításokat</a>.","accept":"Elfogadom","reject":"Elutasítás"}'),
            is_is: JSON.parse('{"title":"Hjálpaðu okkur að bæta vefsvæðið okkar með vafrakökum","body":"Við notum vafrakökur og vinnum úr gögnum úr tækinu þínu til að greina afköst vefsvæðisins, sérsníða auglýsingaefni og bæta upplifun þína. Samþykki þitt nær til gagnaflutninga úr því landi sem þú býrð í, til dæmis Bandaríkjunum. Skoðaðu <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>stillingar vafrakaka</a> til að fá frekari upplýsingar.","accept":"Samþykkja","reject":"Hafna"}'),
            it_ch: JSON.parse('{"title":"Aiutaci a migliorare il nostro sito Web con i cookie","body":"Utilizziamo i cookie ed elaboriamo i dati dal tuo dispositivo per analizzare le prestazioni del sito Web, personalizzare il contenuto degli annunci e migliorare l\'esperienza di utilizzo del sito. Il consenso include i trasferimenti di dati al di fuori del paese in cui ti trovi, ad esempio gli Stati Uniti. Visualizza le <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Impostazioni dei cookie</a> per ulteriori informazioni.","accept":"Accetta","reject":"Rifiuta"}'),
            it_it: JSON.parse('{"title":"Aiutaci a migliorare il nostro sito Web con i cookie","body":"Utilizziamo i cookie ed elaboriamo i dati dal tuo dispositivo per analizzare le prestazioni del sito Web, personalizzare il contenuto degli annunci e migliorare l\'esperienza di utilizzo del sito. Il consenso include i trasferimenti di dati al di fuori del paese in cui ti trovi, ad esempio gli Stati Uniti. Visualizza le <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Impostazioni dei cookie</a> per ulteriori informazioni.","accept":"Accetta","reject":"Rifiuta"}'),
            ja_jp: JSON.parse('{"title":"Cookieを使用してウェブサイトの改善に向けてご協力ください","body":"Cookieを使用し、お客様のデバイスから取得するデータを処理して、ウェブサイトのパフォーマンスを解析し、広告コンテンツをパーソナライズし、エクスペリエンスの向上を図っています。お客様の同意には、お客様が所在する国の外（例、米国）へのデータ移転が含まれます。詳細については、 <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookie設定</a>をご覧ください。","accept":"同意する","reject":"辞退"}'),
            ko_kr: JSON.parse('{"title":"쿠키를 사용하여 Tesla 웹사이트를 개선할 수 있도록 지원","body":"Tesla는 웹사이트 성능을 분석하고 광고 콘텐츠를 개인화하며 귀하의 경험을 개선하기 위해 쿠키를 사용하고 귀하의 장치 데이터를 처리합니다. 귀하의 동의에는 거주 국가 외부(예: 미국)로 데이터를 전송하는 것에 대한 동의가 포함됩니다. 자세한 내용은 <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>쿠키 설정</a>을 확인하세요.","accept":"수락하기","reject":"거절하기"}'),
            lt_lt: JSON.parse('{"title":"Padėkite mums patobulinti svetainę naudodami slapukus","body":"Mes naudojame slapukus ir tvarkome duomenis iš jūsų įrenginio, kad analizuotume svetainės našumą, suasmenintume reklamos turinį ir pagerintume jūsų galimybes. Jūsų sutikimas apima ir duomenų perdavimą už šalies, kurioje esate, pavyzdžiui, JAV, ribų. Norėdami gauti daugiau informacijos, peržiūrėkite <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>slapukų nustatymus</a> .","accept":"Patvirtinti","reject":"Atmesti"}'),
            nl_be: JSON.parse('{"title":"Help ons onze website te verbeteren met cookies","body":"Wij gebruiken cookies en verwerken gegevens van uw apparaat om websiteprestaties te analyseren, advertentiecontent te personaliseren en uw ervaring te verbeteren. Uw toestemming geldt ook voor de overdracht van gegevens naar het buitenland, bijvoorbeeld de Verenigde Staten. Bekijk <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookie-instellingen</a> voor meer informatie.","accept":"Accepteren","reject":"Afwijzen"}'),
            nl_nl: JSON.parse('{"title":"Help ons onze website te verbeteren met cookies","body":"Wij gebruiken cookies en verwerken gegevens van uw apparaat om websiteprestaties te analyseren, advertentiecontent te personaliseren en uw ervaring te verbeteren. Uw toestemming geldt ook voor de overdracht van gegevens naar het buitenland, bijvoorbeeld de Verenigde Staten. Bekijk <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Cookie-instellingen</a> voor meer informatie.","accept":"Accepteren","reject":"Afwijzen"}'),
            no_no: JSON.parse('{"title":"Hjelp oss å forbedre nettstedet vårt med informasjonskapsler","body":"Vi bruker informasjonskapsler og behandler data fra enheten din for å analysere ytelsen til nettstedet, tilpasse annonseinnholdet og forbedre opplevelsen din. Samtykket ditt inkluderer dataoverføringer utenfor landet du befinner deg i, for eksempel USA. Se <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>innstillinger for informasjonskapsler</a> for mer informasjon.","accept":"Godta","reject":"Avvis"}'),
            pl_pl: JSON.parse('{"title":"Pomóż nam ulepszyć naszą witrynę za pomocą plików cookies","body":"Używamy plików cookies i przetwarzamy dane z Twojego urządzenia w celu analizowania wydajności witryny, personalizowania treści reklam i poprawy komfortu użytkowania. Twoja zgoda obejmuje przekazywanie danych poza kraj, w którym się znajdujesz, na przykład do Stanów Zjednoczonych. Więcej informacji można znaleźć w sekcji <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Ustawienia plików cookies</a>.","accept":"Akceptuj","reject":"Odrzuć"}'),
            pt_pt: JSON.parse('{"title":"Ajude-nos a melhorar o nosso website com cookies","body":"Utilizamos cookies e processamos dados do seu dispositivo para analisar o desempenho do website, personalizar o conteúdo dos anúncios e melhorar a sua experiência. O seu consentimento inclui transferências de dados para fora do país em que se encontra, por exemplo, os EUA. Consulte <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Definições de cookies</a> para obter mais informações.","accept":"Aceitar","reject":"Rejeitar"}'),
            ro_ro: JSON.parse('{"title":"Ajutați-ne ne să îmbunătățim site-ul web cu ajutorul cookie-urilor","body":"Utilizăm cookie-uri și prelucrăm datele de pe dispozitivul dvs. pentru a analiza performanța site-ului web, pentru a personaliza conținutul anunțurilor și pentru a vă îmbunătăți experiența. Consimțământul dvs. include transferurile de date în afara țării în care vă aflați, de exemplu, Statele Unite ale Americii. Pentru mai multe informații, consultați <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>setările privind cookie-urile</a>.","accept":"Acceptare","reject":"Refuzați"}'),
            sl_si: JSON.parse('{"title":"Pomagajte nam izboljšati našo spletno stran s piškotki","body":"Uporabljamo piškotke in obdelujemo podatke iz vaše naprave za analizo delovanja spletne strani, prilagajanje oglaševalske vsebine in izboljšanje vaše izkušnje. Vaše soglasje vključuje prenose podatkov zunaj države, v kateri se nahajate, na primer Združenih državah Amerike. Za več informacij <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>glejte Nastavitve piškotkov</a>.","accept":"sprejmi","reject":"Zavrni"}'),
            sv_se: JSON.parse('{"title":"Hjälp oss förbättra vår hemsida med cookies","body":"Vi använder cookies och bearbetar data från din enhet för att analysera webbplatsens prestanda, anpassa annonsinnehållet och ge dig en bättre upplevelse. Ditt samtycke omfattar även överföring av data utanför det land du befinner dig i, till exempel USA. Gå till <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Inställningar för cookies</a> för mer information.","accept":"Godkänn","reject":"Avvisa"}'),
            tr_tr: JSON.parse('{"title":"Çerezlerle Web Sitemizi Geliştirmemize Yardımcı Olun","body":"Web sitesi performansını analiz etmek, reklam içeriğini kişiselleştirmek ve deneyiminizi iyileştirmek için çerezler kullanır ve cihazınızdan gelen verileri işleriz. Onayınız, bulunduğunuz ülkenin dışına veri aktarımlarını içerir (örneğin, Amerika Birleşik Devletleri). Daha fazla bilgi için <a id=\'cookie-settings\' style=\'text-decoration: underline\' href=\'{COOKIE_SETTINGS_URL}\' class=\'cookie-settings-url\' target=\'_blank\' rel=\'noopener noreferrer\'>Çerez Ayarlarını</a> görüntüleyin.","accept":"Kabul Et","reject":"Reddet"}')
        },
        x = ["ar_ae", "ar_jo", "ar_qa", "cs_cz", "da_dk", "de_at", "de_ch", "de_de", "de_lu", "el_gr", "en_ae", "en_ee", "en_eu", "en_gb", "en_ie", "en_jo", "en_lt", "lt_lt", "en_lv", "en_qa", "en_sk", "es_es", "fi_fi", "fr_be", "fr_ch", "fr_fr", "fr_lu", "he_il", "hr_hr", "hu_hu", "is_is", "it_ch", "it_it", "ja_jp", "jp", "ko_kr", "nl_be", "nl_nl", "no_no", "pl_pl", "pt_pt", "ro_ro", "sl_si", "sv_se", "tr_tr"],
        w = ["en_lt", "lt_lt", "en_lv", "en_ee", "en_sk"],
        E = () => {
            (() => {
                const e = document.getElementById(i) ? ? null;
                e && (e.style.cssText = v())
            })(), (() => {
                const e = document.getElementById(s) ? ? null;
                e && (e.style.cssText = y())
            })()
        };
    if (window) try {
        const i = new BroadcastChannel("tsla-cookie-settings-channel");
        window.addEventListener("load", (() => {
            let a = window ? .tesla ? .cookie_banner_override_locale || location.pathname.split("/")[1];
            a = a.toLowerCase(), I(a);
            const s = document.getElementById(t),
                l = document.getElementById(r),
                c = {
                    name: e,
                    days: 365
                };
            s && l && (s.addEventListener("click", (function() {
                c.value = n, h(c), z(), i.postMessage(n), I(a), T(1)
            })), l.addEventListener("click", (function() {
                c.value = o, h(c), z(), i.postMessage(o), I(a), T(0)
            })))
        })), i.addEventListener("message", (() => {
            z()
        })), window.addEventListener("resize", E)
    } catch (e) {
        console.error("Failed to load cookie banner", e.message)
    }
    const I = n => {
            const o = document.scripts,
                a = (e => {
                    if (document.cookie.length > 0) {
                        let t = document.cookie.indexOf(e + "=");
                        if (-1 !== t) {
                            t = t + 19 + 1;
                            let e = document.cookie.indexOf(";", t);
                            return -1 === e && (e = document.cookie.length), document.cookie.substring(t, e)
                        }
                    }
                    return ""
                })(e),
                c = n && x.includes(n);
            if (!a && c) document.getElementsByTagName("body")[0].appendChild((e => {
                const n = (e => {
                        let t = e.trim().toLowerCase();
                        return "jp" === t && (t = "ja_jp"), /^[a-z]{2}_[a-z]{2}|jp$/i.test(t) && O[t] || (t = "en_eu"), O[t]
                    })(e),
                    o = document.createElement("div");
                o.classList.add("cookie-banner"), o.classList.add("tds-scrim--white"), o.id = i, o.style.cssText = v();
                let a = `https://www.tesla.com/${"en_us"!==e.toLowerCase()?`${e.toLowerCase()}`:""}${l}`;
                w.includes(e.toLowerCase()) && (a = `https://www.tesla.com/en_eu${l}`);
                const c = document.createElement("div");
                c.innerHTML = `<strong>${n.title}</strong><br/><p style="max-inline-size: 100%;">${n.body.replace("{COOKIE_SETTINGS_URL}",a)}</p>`, c.style.cssText = S(p);
                const d = document.createElement("div");
                return d.id = s, d.style.cssText = y(), d.append((e => {
                    const r = document.createElement("button");
                    return r.style.cssText = S(g), r.id = t, r.innerText = e, r.addEventListener("mouseenter", (() => {
                        r.style.cssText = S(b)
                    })), r.addEventListener("mouseleave", (() => {
                        r.style.cssText = S(g)
                    })), r
                })(n.accept), (e => {
                    const t = document.createElement("button");
                    return t.style.cssText = S(g), t.id = r, t.innerText = e, t.addEventListener("mouseenter", (() => {
                        t.style.cssText = S(b)
                    })), t.addEventListener("mouseleave", (() => {
                        t.style.cssText = S(g)
                    })), t
                })(n.reject)), o.appendChild(c), o.appendChild(d), o
            })(n)), T(2);
            else {
                for (let e of o)
                    if (e ? .dataset ? .tslaCookieConsent && e ? .dataset ? .tslaCookieConsent === a) {
                        e.remove();
                        const t = document.createElement("script");
                        e.src && (t.src = e.src), t.innerHTML = e.innerHTML, t.type = "text/javascript", document.head.appendChild(t)
                    }
                _(a)
            }
        },
        T = e => {
            try {
                fetch("https://analytics-relay.tesla.com/cb", {
                    method: "POST",
                    mode: "no-cors",
                    cache: "no-cache",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "text/plain"
                    },
                    referrerPolicy: "no-referrer",
                    body: e
                })
            } catch (e) {}
        }
})();