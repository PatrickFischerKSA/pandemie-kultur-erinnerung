const levitFocus = [
  {
    title: "1. Das Format bleibt intim",
    text:
      "Das Wort Hauskonzert ruft Naehe, Improvisation und kleine Formate auf. Genau darin liegt die emotionale Kraft: Kultur wirkt nicht monumental, sondern nah."
  },
  {
    title: "2. Der Ort ist nicht privat-neutral",
    text:
      "Schloss Bellevue ist kein Wohnzimmer. Der Ort ist repraesentativ und staatlich aufgeladen. Das Konzert verschiebt also ein Format der Privatheit in einen symbolischen Staatsraum."
  },
  {
    title: "3. Die Oeffentlichkeit ist digital",
    text:
      "Das Publikum sitzt nicht im Raum, sondern an Bildschirmen. Die Beziehung zwischen Auftretendem und Publikum wird ueber Stream, Plattform und mediale Aufmerksamkeit hergestellt."
  },
  {
    title: "4. Genau hier beginnt die Leitfrage",
    text:
      "Pandemie-Kultur ist oft weder ganz privat noch ganz oeffentlich. Levit eignet sich deshalb als Schluesselszene fuer die Frage nach Freizeit, Gemeinschaft und Rueckzug."
  }
];

const comparisonData = [
  {
    id: "ursache",
    label: "Ursache des Rueckzugs",
    biedermeier:
      "Die vorhandenen Biedermeier-Materialien beschreiben den Rueckzug als Folge von Restauration, Zensur und politischer Kontrolle. In den Transkripten wird der Vormärz als eingeschraenkte Oeffentlichkeit beschrieben; Debatten verlagern sich in Salons und private Kreise.",
    pandemie:
      "In der Pandemie entsteht der Rueckzug nicht wegen politischer Repression, sondern wegen Ansteckungsgefahr, Schutzmassnahmen und Lockdown. Der Rueckzug ist medizinisch begruendet, sozial aber ebenso tiefgreifend.",
    tension:
      "Der Vergleich beginnt also bei einer Aehnlichkeit der Form, nicht bei einer Gleichheit der Ursache."
  },
  {
    id: "raum",
    label: "Raumordnung und Privatsphaere",
    biedermeier:
      "Das Knoblauchhaus-Transkript macht einen wichtigen Punkt: Das 19. Jahrhundert kennt noch gar nicht die heutige stabile Privatsphaere. Wohnraeume sind durchlaessig, Rollen geschlechtlich codiert, und gerade daraus entstehen Salons, Kaffeekraenzchen und neue Innenraeume.",
    pandemie:
      "2020 ist das Problem fast umgekehrt: Schueler*innen haben Zimmer, Laptops und Rueckzugsorte, erleben aber ihre Privatheit durch Teams, Kameras, Mikrofone und Dauerpraesenz ploetzlich wieder als verletzlich.",
    tension:
      "Das Private ist in beiden Faellen zentral, aber nicht auf dieselbe Weise organisiert."
  },
  {
    id: "medien",
    label: "Medien und Informationsregime",
    biedermeier:
      "Im Biedermeier sind Briefe, Gespraeche, Lektuere, Salons und halbprivate Zusammenkuenfte entscheidend. In den Materialien heisst es zugleich: Zensur begrenzt Oeffentlichkeit, aber Informationen zirkulieren dennoch durch private und halbprivate Kanaele.",
    pandemie:
      "In der Pandemie verschiebt sich Kultur in Streams, Plattformen, Videokonferenzen und Mediatheken. Oeffentlichkeit wird nicht kleiner, sondern technisch vermittelt: Teams, Streaming, Online-Lesungen, Clubstreams und Home Concerts.",
    tension:
      "Beide Epochen leben von Umwegen der Oeffentlichkeit, aber die Pandemie arbeitet mit digitaler Reichweite statt mit raeumlicher Begrenzung."
  },
  {
    id: "halb",
    label: "Halboeffentlichkeit",
    biedermeier:
      "Salons sind gerade deshalb wichtig, weil sie zwischen Haus und Oeffentlichkeit liegen. Sie sind geschuetzt, aber nicht unpolitisch. Das passt zu den salonhistorischen Materialien im Workspace.",
    pandemie:
      "Viele Lockdown-Formate funktionieren aehnlich: das Kinderzimmer im Teams-Unterricht, die Wohnung als Konzertort, der leere Club als Stream-Studio. Auch hier entstehen halboeffentliche Situationen.",
    tension:
      "Die Pandemie erzeugt eine neue digitale Halboeffentlichkeit: sichtbar fuer viele, aber aus privaten Raeumen heraus."
  },
  {
    id: "freizeit",
    label: "Freizeit und Kulturpraxis",
    biedermeier:
      "Das Biedermeier erhebt den Alltag zur Kultur: Sofa, Kaffee, Musik, Lektuere, Handarbeit, Familienraum. Diese Praxis ist nicht unpolitisch, sondern eine Lebensform unter Bedingungen eingeschraenkter Oeffentlichkeit.",
    pandemie:
      "In school@home tauchen verwandte Muster auf: Netflix, Musik, Sport, Basteln, Gartenarbeit, Naehen, Videocalls, aber auch das schmerzhafte Vermissen von Mensa, Mittagstisch, Zimmerwechsel und leibhaftiger Begegnung.",
    tension:
      "Freizeitgestaltung wird in beiden Faellen zum Ort, an dem Gesellschaft indirekt sichtbar wird."
  },
  {
    id: "grenze",
    label: "Grenze des Vergleichs",
    biedermeier:
      "Der Biedermeier-Rueckzug ist langdauernd, sozial selektiv und eng mit Buergertum, Geschlechterordnung und Zensur verknuepft.",
    pandemie:
      "Der Pandemie-Rueckzug ist globale Krisenerfahrung, technisch anders strukturiert und von Schueler*innen als Ausnahmezustand beschrieben, nicht als angestrebtes Lebensmodell.",
    tension:
      "Der Vergleich ist nur dann sinnvoll, wenn man nicht behauptet, beides sei 'eigentlich dasselbe'."
  }
];

const sourceClusters = [
  {
    id: "wohnzimmer",
    label: "Wohnzimmer und Hauskonzert",
    title: "Vom privaten Zimmer zur oeffentlichen Buehne",
    thesis:
      "Die ausgelesenen Zielseiten zeigen uebereinstimmend, dass Kultur waehrend der Lockdowns aus Wohnungen, Studios ohne Publikum und provisorischen Innenraeumen heraus neu oeffentlich wurde.",
    sources: [
      {
        title: "Deutschlandfunk Kultur: Kulturgenuss zu Hause",
        url: "https://www.deutschlandfunkkultur.de/kulturgenuss-zu-hause-wie-eine-art-lagerfeuer-100.html",
        note:
          "Die verlinkte Seite beschreibt Kulturangebote zu Hause und benutzt das Bild eines digitalen Lagerfeuers. Genau dieses Motiv hilft, das Levit-Hauskonzert als Gemeinschaftsangebot in einer Zeit der Distanz zu lesen."
      },
      {
        title: "SRF Kultur: Die Schweizer Kulturszene geht online",
        url: "https://www.srf.ch/kultur/buehne/kultur-trotz-corona-die-schweizer-kulturszene-geht-online-die-links-in-der-uebersicht",
        note:
          "Der SRF-Beitrag ist keine blosse Einzelmeldung, sondern eine Uebersicht digitaler Initiativen. Damit zeigt er, dass die Verlagerung ins Netz systematisch und nicht nur punktuell war."
      },
      {
        title: "The Guardian: Musicians performing from home",
        url: "https://www.theguardian.com/music/2020/mar/19/musicians-performing-from-home-coronavirus",
        note:
          "Der Guardian rahmt die Situation als Verwandlung von Wohnzimmern in Konzertorte. Levit steht also nicht isoliert da, sondern gehoert zu einer internationalen Form derselben Verschiebung."
      }
    ],
    prompts: [
      "Warum wirkt ein Hauskonzert zugleich vertraut und ungewoehnlich?",
      "Was gewinnt Kultur, wenn sie nah wirkt, und was verliert sie ohne koerperliches Publikum?"
    ]
  },
  {
    id: "stream",
    label: "Live im Stream",
    title: "Was an digitaler Live-Kultur trotzdem live bleibt",
    thesis:
      "Die ausgelesenen Studien- und Theorie-Links betonen nicht einfach Ersatz, sondern eine veraenderte Form von Liveness: Chat, Gleichzeitigkeit, geteilte Aufmerksamkeit und Plattformrituale ersetzen die koerperliche Anwesenheit nicht, strukturieren sie aber neu.",
    sources: [
      {
        title: "Frontiers in Psychology: Online concerts and social connection",
        url: "https://www.frontiersin.org/articles/10.3389/fpsyg.2021.648448/full",
        note:
          "Die Studie fragt danach, wie Online-Konzerte soziale Verbundenheit und Emotionen erzeugen. Fuer den Unterricht ist wichtig: digitale Kultur kann Gemeinschaft stiften, aber auf andere Weise als der Konzertsaal."
      },
      {
        title: "First Monday: Liveness Online in Deadly Times",
        url: "https://firstmonday.org/ojs/index.php/fm/article/view/12398/10657",
        note:
          "Der Text interessiert sich fuer die Herstellung von 'Liveness' unter Pandemiebedingungen. Damit laesst sich praeziser fragen, was am Stream Ereignischarakter hat und was nur technisch praesent ist."
      },
      {
        title: "PMC: How COVID-19 impacted cultural consumption online",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10062683/",
        note:
          "Der Beitrag verknuepft Pandemie und Online-Kulturkonsum. Fuer die Einheit ist zentral: Kulturnutzung wird digital verbreitert, aber nicht fuer alle gleich intensiv und nicht als vollwertiger Ersatz fuer Praesenz."
      }
    ],
    prompts: [
      "Wann fuehlt sich ein Stream fuer dich noch wie ein Ereignis an?",
      "Was kann ein Chat oder ein Kommentarstrom ersetzen und was gerade nicht?"
    ]
  },
  {
    id: "schule",
    label: "Schule, Alltag, Hybriditaet",
    title: "Von der Kulturpraxis zur Frage: Was bleibt?",
    thesis:
      "Die Links und school@home zusammen fuehren zur selben Zukunftsfrage: Bleibt nach der Krise wieder alles wie vorher, oder entstehen dauerhafte Mischformen zwischen Praesenz und Digitalitaet?",
    sources: [
      {
        title: "school@home",
        url: "./assets/school_at_home.pdf",
        note:
          "Viele Stimmen beschreiben kein Entweder-oder, sondern den Wunsch nach Mischformen: bestimmte digitale Werkzeuge sollen bleiben, aber echte Begegnung, Mensa, Pausen und gemeinsame Gegenwart duerfen nicht verschwinden."
      },
      {
        title: "SRF Kultur",
        url: "https://www.srf.ch/kultur/buehne/kultur-trotz-corona-die-schweizer-kulturszene-geht-online-die-links-in-der-uebersicht",
        note:
          "Die Uebersicht zeigt, wie schnell Kulturinstitutionen auf digitale Angebote umstellten. Daraus ergibt sich die Frage, welche dieser Formate kurzfristige Notloesungen und welche langfristige Erweiterungen waren."
      },
      {
        title: "PMC / Forschungscluster",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10062683/",
        note:
          "Die Forschung bestaetigt, dass sich Kulturgewohnheiten veraendern koennen. Das passt zu vielen school@home-Texten, die digitale Tools beibehalten wollen, aber keine rein digitale Zukunft wuenschen."
      }
    ],
    prompts: [
      "Welche Werkzeuge oder Routinen aus der Pandemiezeit sind heute noch sinnvoll?",
      "Wo beginnt Hybriditaet produktiv zu werden und wo macht sie Dinge nur bequemer, aber auch aermer?"
    ]
  }
];

const voices = [
  {
    name: "Alisha",
    theme: "Freiheit und Eingesperrtsein",
    tags: ["isolation", "freiheit", "freunde"],
    quote:
      "Ich merke erst jetzt, wie viel es wert ist, die Freiheit zu haben, zu entscheiden, wo man hinwill und wie man seinen Tag ausserhalb seines Hauses gestalten moechte."
  },
  {
    name: "Sarah",
    theme: "Routine und Schulraum",
    tags: ["routine", "mittag", "schule"],
    quote:
      "Mir fehlten vor allem das gemeinsame Mittagessen mit den Freunden und schon der Zimmerwechsel. Jeder Tag vor dem Computer wurde sehr einfoermig."
  },
  {
    name: "Cheyenne Kim",
    theme: "Freizeit und Familie",
    tags: ["freizeit", "familie", "netflix"],
    quote:
      "In meiner Freizeit sass ich oft zu Hause, schaute Netflix oder machte Sport. Gleichzeitig verstand ich mich mit meiner Familie teilweise besser als sonst."
  },
  {
    name: "Sarah",
    theme: "Bildschirmzeit",
    tags: ["bildschirm", "teams", "netflix"],
    quote:
      "Meine Bildschirmzeit stieg stark an: Teams, iPad, Netflix. Vieles war praktisch, aber unertraeglich war, dass Begegnung nur noch ueber Bildschirme lief."
  },
  {
    name: "Ann Lynn",
    theme: "Handwerk statt Dauerscreen",
    tags: ["freizeit", "handwerk", "alltag"],
    quote:
      "Ich merkte, dass ich wieder mehr handwerkliche Dinge machte: bauen, naehen, haekeln, knuepfen. Gerade das hatte ich vorher vermisst."
  },
  {
    name: "Margaryta",
    theme: "Mensa, Gipfel, Kaffee",
    tags: ["mensa", "bildschirm", "isolation"],
    quote:
      "Ich sehnte mich nach Pausen mit einem Gipfel und Kaffee aus der Mensa. Das staendige Starren in den Bildschirm liess mich das wahre Schulleben vermissen."
  },
  {
    name: "Patrick Fischer",
    theme: "Lehrerblick auf Teams",
    tags: ["teams", "unterricht", "gegenwart"],
    quote:
      "Als Klassen sind wir keine Lernteams im herkoemmlichen Sinne mehr, wir sind bloss noch auf Teams."
  }
];

const analysisQuestions = [
  {
    id: "levit-analyse",
    title: "1. Levit als Schluesselszene analysieren",
    prompt:
      "Erklaere, warum das Hauskonzert von Igor Levit im Schloss Bellevue ein besonders geeigneter Aufhaenger fuer eine Lerneinheit ueber Pandemie-Kultur ist. Gehe auf den Ort, die Form des Hauskonzerts, die digitale Oeffentlichkeit und die symbolische Wirkung ein.",
    minWords: 140,
    concepts: [
      { label: "Ort und Symbolik", keywords: ["bellevue", "schloss", "staat", "bundespraesident", "staatsraum", "symbol"] },
      { label: "Hauskonzert als intime Form", keywords: ["hauskonzert", "intim", "naehe", "wohnzimmer", "privat"] },
      { label: "Digitale Oeffentlichkeit", keywords: ["stream", "digital", "online", "publikum", "oeffentlich", "halboeffentlich"] },
      { label: "Pandemiekontext", keywords: ["pandemie", "lockdown", "abstand", "rueckzug"] },
      { label: "Deutung", keywords: ["ich", "meiner ansicht", "wirkt", "deshalb", "dadurch"] }
    ],
    sourceHints: ["deutschlandfunk", "guardian", "srf", "school@home", "levit"],
    feedbackFocus:
      "Eine starke Antwort verbindet Intimitaet, Staatsraum und digitale Reichweite und bleibt nicht bei 'schönem Konzert' stehen."
  },
  {
    id: "vergleich-analyse",
    title: "2. Biedermeier und Pandemie differenziert vergleichen",
    prompt:
      "Vergleiche den Rueckzug ins Private im Biedermeier mit dem Rueckzug in der Pandemie. Arbeite mindestens vier Unterschiede oder Spannungen heraus und erklaere, warum der Vergleich hilfreich, aber auch begrenzt ist.",
    minWords: 180,
    concepts: [
      { label: "Unterschiedliche Ursachen", keywords: ["zensur", "repression", "politisch", "medizinisch", "ansteckung", "lockdown"] },
      { label: "Raum und Privatsphaere", keywords: ["raum", "wohnraum", "privatsphaere", "zimmer", "salon", "sofa"] },
      { label: "Oeffentlichkeit", keywords: ["halboeffentlich", "oeffentlichkeit", "salon", "stream", "plattform", "teams"] },
      { label: "Alltag/Freizeit", keywords: ["alltag", "kultur", "freizeit", "kaffee", "mensa", "familie"] },
      { label: "Grenzen des Vergleichs", keywords: ["grenze", "nicht dasselbe", "unterschied", "selektiv", "ausnahmezustand"] }
    ],
    sourceHints: ["biedermeier", "knoblauchhaus", "school@home", "srf", "frontiers"],
    feedbackFocus:
      "Eine gute Antwort nennt nicht nur Parallelen, sondern zeigt, wo der Vergleich kippt und warum man die Ursachen nicht gleichsetzen darf."
  },
  {
    id: "freizeit-analyse",
    title: "3. Freizeit, Oeffentlichkeit und Zukunft",
    prompt:
      "Nutze mindestens eine Stimme aus school@home und mindestens zwei einzelne Zielseiten aus den Materialsammlungen. Erklaere, wie sich waehrend der Pandemie Freizeitgestaltung, Oeffentlichkeit und Rueckzug ins Private gegenseitig veraendert haben und welche Folgen bis heute sichtbar sind.",
    minWords: 180,
    concepts: [
      { label: "school@home-Bezug", keywords: ["school@home", "mensa", "bildschirm", "freunde", "familie", "teams"] },
      { label: "Einzelquellen aus der Linksammlung", keywords: ["deutschlandfunk", "guardian", "srf", "frontiers", "first monday", "pmc"] },
      { label: "Freizeit als Kulturpraxis", keywords: ["netflix", "sport", "lesen", "konzert", "club", "lesung", "stream"] },
      { label: "Gegenwart", keywords: ["heute", "noch", "weiter", "nachwirkt", "geblieben"] },
      { label: "Zukunft", keywords: ["zukunft", "hybrid", "behalten", "nicht bleiben", "sollte"] }
    ],
    sourceHints: ["school@home", "deutschlandfunk", "guardian", "srf", "frontiers", "pmc"],
    feedbackFocus:
      "Hier zaehlt besonders, ob du echte Quellenbeziehungen herstellst und den Weg von 2020 in die Gegenwart und Zukunft mitdenkst."
  }
];

const reflectionQuestions = [
  {
    id: "damals",
    title: "Damals: Erinnerungsbild 2020",
    prompt:
      "Beschreibe einen Moment aus dem Lockdown, in dem Privatheit und Oeffentlichkeit fuer dich ineinander uebergingen: zum Beispiel Teams-Unterricht, Videocall, Streaming, Familienalltag oder eine neue Freizeitpraxis.",
    minWords: 100,
    concepts: [
      { label: "Konkrete Szene", keywords: ["ich", "als", "waehrend", "damals", "moment"] },
      { label: "Privat/Oeffentlich", keywords: ["privat", "oeffentlich", "halboeffentlich", "kamera", "zimmer"] },
      { label: "Gefuehl", keywords: ["komisch", "unangenehm", "nah", "einsam", "intim", "fremd"] }
    ],
    sourceHints: ["school@home", "teams", "mensa"],
    feedbackFocus:
      "Am staerksten werden Antworten, wenn sie eine konkrete Szene zeigen statt nur allgemein zu urteilen."
  },
  {
    id: "heute",
    title: "Heute: Was wirkt mit 17 noch nach?",
    prompt:
      "Erklaere, was aus der Pandemiezeit heute noch in deinem Alltag, deinem Medienverhalten, deinem Blick auf Schule oder deiner Art von Freizeitgestaltung nachwirkt.",
    minWords: 110,
    concepts: [
      { label: "Gegenwart", keywords: ["heute", "jetzt", "noch", "immer", "bis heute"] },
      { label: "Schule/Alltag", keywords: ["schule", "unterricht", "organisation", "digital", "teams", "abgabe"] },
      { label: "Sozialverhalten oder Freizeit", keywords: ["freunde", "familie", "freizeit", "bildschirm", "stream", "pause"] }
    ],
    sourceHints: ["school@home", "digital", "heute"],
    feedbackFocus:
      "Hier lohnt sich Praezision: Welche Spur ist wirklich geblieben und welche nicht?"
  },
  {
    id: "morgen",
    title: "Morgen: Was soll bleiben, was nicht?",
    prompt:
      "Formuliere eine Position fuer die Zukunft: Welche digitalen Formen aus Pandemie-Kultur oder Fernunterricht sollten erhalten bleiben, welche sollten bewusst wieder zurueckgedraengt werden? Begruende differenziert.",
    minWords: 120,
    concepts: [
      { label: "Klare Position", keywords: ["ich finde", "sollte", "soll nicht", "meiner ansicht", "beibehalten"] },
      { label: "Was bleiben kann", keywords: ["hybrid", "digitale abgabe", "mediathek", "flexibel", "online"] },
      { label: "Was begrenzt werden muss", keywords: ["praesenz", "begegnung", "mensa", "koerperlich", "bildschirmzeit", "nicht ersetzen"] }
    ],
    sourceHints: ["school@home", "frontiers", "pmc", "srf"],
    feedbackFocus:
      "Eine starke Zukunftsantwort benennt nicht nur Vorlieben, sondern Kriterien fuer gute Schule und gute Kultur."
  }
];

const storageKey = "pandemie-kultur-erinnerung-answers-v2";

const levitFocusEl = document.querySelector("#levitFocus");
const comparisonTabs = document.querySelector("#comparisonTabs");
const comparisonStage = document.querySelector("#comparisonStage");
const sourceTabs = document.querySelector("#sourceTabs");
const sourceStage = document.querySelector("#sourceStage");
const voiceFilters = document.querySelector("#voiceFilters");
const voiceGrid = document.querySelector("#voiceGrid");
const analysisQuestionList = document.querySelector("#analysisQuestionList");
const reflectionQuestionList = document.querySelector("#reflectionQuestionList");
const saveAllBtn = document.querySelector("#saveAllBtn");
const exportAllBtn = document.querySelector("#exportAllBtn");
const notesStatus = document.querySelector("#notesStatus");
const bgVideo = document.querySelector("#bgVideo");
const videoToggle = document.querySelector("#videoToggle");

const savedAnswers = JSON.parse(localStorage.getItem(storageKey) || "{}");

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss");
}

function wordCount(value) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function includesAny(normalizedAnswer, keywords) {
  return keywords.some((keyword) => normalizedAnswer.includes(normalizeText(keyword)));
}

function evaluateAnswer(answer, question) {
  const normalized = normalizeText(answer);
  const words = wordCount(answer);
  const hits = [];
  const missing = [];

  question.concepts.forEach((concept) => {
    if (includesAny(normalized, concept.keywords)) {
      hits.push(concept.label);
    } else {
      missing.push(concept.label);
    }
  });

  const sourceHit = question.sourceHints.some((hint) => normalized.includes(normalizeText(hint)));
  const density = hits.length / question.concepts.length;

  let level = "ausbau";
  if (density >= 0.8 && words >= question.minWords && sourceHit) level = "stark";
  else if (density >= 0.6 && words >= question.minWords * 0.8) level = "solide";
  else if (density >= 0.4) level = "ansatz";

  let comment = "";
  if (level === "stark") {
    comment = "Die Antwort ist bereits differenziert und verbindet mehrere Ebenen sinnvoll.";
  } else if (level === "solide") {
    comment = "Die Richtung stimmt. Fuer eine noch staerkere Antwort solltest du die fehlenden Punkte gezielter ausbauen.";
  } else if (level === "ansatz") {
    comment = "Es sind gute Anfaenge da, aber die Antwort bleibt noch zu selektiv oder zu allgemein.";
  } else {
    comment = "Die Antwort braucht noch deutlich mehr Ausarbeitung und konkretere Bezuge.";
  }

  const sourceComment = sourceHit
    ? "Quellenbezug ist erkennbar."
    : "Noch fehlt ein klar erkennbarer Quellenbezug. Nenne school@home, Levit oder einzelne Linkquellen direkt.";

  return {
    words,
    hits,
    missing,
    sourceHit,
    level,
    comment,
    sourceComment
  };
}

function feedbackHtml(result, question) {
  const levelLabel = {
    stark: "Sehr stark",
    solide: "Solide",
    ansatz: "Guter Ansatz",
    ausbau: "Noch deutlich ausbauen"
  }[result.level];

  const missingText =
    result.missing.length > 0
      ? result.missing.join(", ")
      : "Keine deutlichen Luecken in der Grundstruktur.";

  return `
    <div class="feedback ${result.level}">
      <p><strong>${levelLabel}.</strong> ${result.comment}</p>
      <p><strong>Umfang:</strong> ${result.words} Woerter. Erwartet sind mindestens ${question.minWords}.</p>
      <p><strong>Schon sichtbar:</strong> ${result.hits.length ? result.hits.join(", ") : "noch kaum tragende Aspekte"}</p>
      <p><strong>Noch ergaenzen:</strong> ${missingText}</p>
      <p><strong>Quellenbezug:</strong> ${result.sourceComment}</p>
      <p><strong>Kommentar:</strong> ${question.feedbackFocus}</p>
    </div>
  `;
}

function renderLevitFocus() {
  levitFocusEl.innerHTML = levitFocus
    .map(
      (item) => `
        <article class="focus-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderComparison(activeId) {
  const item = comparisonData.find((entry) => entry.id === activeId) || comparisonData[0];
  comparisonStage.innerHTML = `
    <div class="comparison-grid">
      <article class="comparison-card">
        <p class="kicker">Biedermeier</p>
        <h3>${item.label}</h3>
        <p>${item.biedermeier}</p>
      </article>
      <article class="comparison-card">
        <p class="kicker">Pandemie</p>
        <h3>${item.label}</h3>
        <p>${item.pandemie}</p>
      </article>
    </div>
    <div class="quote-block">
      <p class="quote"><strong>Spannung:</strong> ${item.tension}</p>
    </div>
  `;

  Array.from(comparisonTabs.children).forEach((button) => {
    button.classList.toggle("active", button.dataset.id === item.id);
  });
}

function renderSource(activeId) {
  const cluster = sourceClusters.find((entry) => entry.id === activeId) || sourceClusters[0];
  sourceStage.innerHTML = `
    <div class="card source-top">
      <h3>${cluster.title}</h3>
      <p>${cluster.thesis}</p>
    </div>
    <div class="source-link-grid">
      ${cluster.sources
        .map(
          (source) => `
            <article class="source-link-card">
              <h3>${source.title}</h3>
              <p>${source.note}</p>
              <a class="button small" href="${source.url}" target="_blank" rel="noreferrer">Quelle oeffnen</a>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="meta-box">
      <h3>Weiterdenken</h3>
      <ul class="compact-list">
        ${cluster.prompts.map((prompt) => `<li>${prompt}</li>`).join("")}
      </ul>
    </div>
  `;

  Array.from(sourceTabs.children).forEach((button) => {
    button.classList.toggle("active", button.dataset.id === cluster.id);
  });
}

function renderVoices(filter = "alle") {
  const visible =
    filter === "alle" ? voices : voices.filter((voice) => voice.tags.includes(filter));

  voiceGrid.innerHTML = visible
    .map(
      (voice) => `
        <article class="voice-card">
          <div class="voice-head">
            <span class="voice-name">${voice.name}</span>
            <span class="voice-theme">${voice.theme}</span>
          </div>
          <p class="quote">„${voice.quote}“</p>
          <div class="label-cloud">
            ${voice.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  Array.from(voiceFilters.children).forEach((button) => {
    button.classList.toggle("active", button.dataset.id === filter);
  });
}

function storeAnswer(id, value) {
  savedAnswers[id] = value;
  localStorage.setItem(storageKey, JSON.stringify(savedAnswers));
}

function renderQuestionCard(question, mountPoint) {
  const wrapper = document.createElement("article");
  wrapper.className = "question-card";
  const storedValue = savedAnswers[question.id] || "";

  wrapper.innerHTML = `
    <h3>${question.title}</h3>
    <p>${question.prompt}</p>
    <div class="label-cloud rubric-cloud">
      ${question.concepts.map((concept) => `<span class="tag">${concept.label}</span>`).join("")}
    </div>
    <label class="label" for="${question.id}">Deine Antwort</label>
    <textarea id="${question.id}" data-question-id="${question.id}" placeholder="Schreibe hier deine Antwort.">${storedValue}</textarea>
    <div class="button-row">
      <button class="button evaluate-btn" type="button">Sofortfeedback</button>
      <button class="button ghost save-btn" type="button">Antwort sichern</button>
    </div>
    <div class="feedback-holder"></div>
  `;

  const textarea = wrapper.querySelector("textarea");
  const feedbackHolder = wrapper.querySelector(".feedback-holder");

  wrapper.querySelector(".save-btn").addEventListener("click", () => {
    storeAnswer(question.id, textarea.value);
    notesStatus.textContent = "Antworten lokal gespeichert.";
  });

  wrapper.querySelector(".evaluate-btn").addEventListener("click", () => {
    storeAnswer(question.id, textarea.value);
    const result = evaluateAnswer(textarea.value, question);
    feedbackHolder.innerHTML = feedbackHtml(result, question);
    notesStatus.textContent = "Sofortfeedback aktualisiert.";
  });

  mountPoint.appendChild(wrapper);
}

function exportAllAnswers() {
  const sections = [...analysisQuestions, ...reflectionQuestions].map((question) => {
    const value = savedAnswers[question.id] || "";
    return `## ${question.title}\n\n${value || "(keine Antwort)"}\n`;
  });
  const content = `# Pandemie-Kultur-Erinnerung\n\n${sections.join("\n")}`;
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "pandemie-kultur-erinnerung-antworten.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  notesStatus.textContent = "Gesamtexport erstellt.";
}

function saveAllAnswers() {
  document.querySelectorAll("textarea[data-question-id]").forEach((textarea) => {
    storeAnswer(textarea.dataset.questionId, textarea.value);
  });
  notesStatus.textContent = "Alle Antworten lokal gespeichert.";
}

renderLevitFocus();

comparisonData.forEach((item) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "pill";
  button.dataset.id = item.id;
  button.textContent = item.label;
  button.addEventListener("click", () => renderComparison(item.id));
  comparisonTabs.appendChild(button);
});

sourceClusters.forEach((cluster) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "pill";
  button.dataset.id = cluster.id;
  button.textContent = cluster.label;
  button.addEventListener("click", () => renderSource(cluster.id));
  sourceTabs.appendChild(button);
});

["alle", "isolation", "freizeit", "bildschirm", "teams", "familie", "mensa"].forEach((filter) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "pill";
  button.dataset.id = filter;
  button.textContent = filter === "alle" ? "alle" : filter;
  button.addEventListener("click", () => renderVoices(filter));
  voiceFilters.appendChild(button);
});

analysisQuestions.forEach((question) => renderQuestionCard(question, analysisQuestionList));
reflectionQuestions.forEach((question) => renderQuestionCard(question, reflectionQuestionList));

saveAllBtn.addEventListener("click", saveAllAnswers);
exportAllBtn.addEventListener("click", exportAllAnswers);

videoToggle.addEventListener("click", async () => {
  try {
    bgVideo.muted = true;
    await bgVideo.play();
    videoToggle.textContent = "Hintergrund laeuft";
  } catch {
    videoToggle.textContent = "Autoplay blockiert";
  }
});

bgVideo.addEventListener("playing", () => {
  videoToggle.textContent = "Hintergrund laeuft";
});

if (!bgVideo.paused) {
  videoToggle.textContent = "Hintergrund laeuft";
}

renderComparison(comparisonData[0].id);
renderSource(sourceClusters[0].id);
renderVoices("alle");
