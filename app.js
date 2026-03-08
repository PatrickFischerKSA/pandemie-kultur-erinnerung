const levitFocus = [
  {
    title: "1. Das Format bleibt intim",
    text:
      "Das Wort Hauskonzert ruft Nähe, Improvisation und kleine Formate auf. Gerade darin liegt seine Kraft: Kultur erscheint nicht monumental, sondern greifbar, verletzlich und nah."
  },
  {
    title: "2. Der Ort ist nicht privat-neutral",
    text:
      "Schloss Bellevue ist kein Wohnzimmer. Der Ort ist repräsentativ und staatlich aufgeladen. Das Konzert verschiebt also ein Format der Privatheit in einen symbolischen Staatsraum."
  },
  {
    title: "3. Die Öffentlichkeit ist digital",
    text:
      "Das Publikum sitzt nicht im Raum, sondern an Bildschirmen. Die Beziehung zwischen Auftretendem und Publikum wird über Stream, Plattform und mediale Aufmerksamkeit hergestellt."
  },
  {
    title: "4. Genau hier beginnt die Leitfrage",
    text:
      "Pandemie-Kultur ist oft weder ganz privat noch ganz öffentlich. Levit eignet sich deshalb als Schlüsselszene für die Frage nach Freizeit, Gemeinschaft und Rückzug."
  }
];

const comparisonData = [
  {
    id: "ursache",
    label: "Ursache des Rückzugs",
    biedermeier:
      "Die vorhandenen Biedermeier-Materialien beschreiben den Rückzug als Folge von Restauration, Zensur und politischer Kontrolle. In den Transkripten wird der Vormärz als eingeschränkte Öffentlichkeit beschrieben; Debatten verlagern sich in Salons und private Kreise.",
    pandemie:
      "In der Pandemie entsteht der Rückzug nicht wegen politischer Repression, sondern wegen Ansteckungsgefahr, Schutzmaßnahmen und Lockdown. Der Rückzug ist medizinisch begründet, sozial aber ebenso tiefgreifend.",
    tension:
      "Der Vergleich beginnt also bei einer Ähnlichkeit der Form, nicht bei einer Gleichheit der Ursache."
  },
  {
    id: "raum",
    label: "Raumordnung und Privatsphäre",
    biedermeier:
      "Das Knoblauchhaus-Transkript macht einen wichtigen Punkt: Das 19. Jahrhundert kennt noch gar nicht die heutige stabile Privatsphäre. Wohnräume sind durchlässig, Rollen geschlechtlich codiert, und gerade daraus entstehen Salons, Kaffeekränzchen und neue Innenräume.",
    pandemie:
      "2020 ist das Problem fast umgekehrt: Schüler*innen haben Zimmer, Laptops und Rückzugsorte, erleben aber ihre Privatheit durch Teams, Kameras, Mikrofone und Dauerpräsenz plötzlich wieder als verletzlich.",
    tension:
      "Das Private ist in beiden Fällen zentral, aber nicht auf dieselbe Weise organisiert."
  },
  {
    id: "medien",
    label: "Medien und Informationsregime",
    biedermeier:
      "Im Biedermeier sind Briefe, Gespräche, Lektüre, Salons und halbprivate Zusammenkünfte entscheidend. In den Materialien heißt es zugleich: Zensur begrenzt Öffentlichkeit, aber Informationen zirkulieren dennoch durch private und halbprivate Kanäle.",
    pandemie:
      "In der Pandemie verschiebt sich Kultur in Streams, Plattformen, Videokonferenzen und Mediatheken. Öffentlichkeit wird nicht kleiner, sondern technisch vermittelt: Teams, Streaming, Online-Lesungen, Clubstreams und Home Concerts.",
    tension:
      "Beide Epochen leben von Umwegen der Öffentlichkeit, aber die Pandemie arbeitet mit digitaler Reichweite statt mit räumlicher Begrenzung."
  },
  {
    id: "halb",
    label: "Halböffentlichkeit",
    biedermeier:
      "Salons sind gerade deshalb wichtig, weil sie zwischen Haus und Öffentlichkeit liegen. Sie sind geschützt, aber nicht unpolitisch. Das passt zu den salonhistorischen Materialien im Workspace.",
    pandemie:
      "Viele Lockdown-Formate funktionieren ähnlich: das Kinderzimmer im Teams-Unterricht, die Wohnung als Konzertort, der leere Club als Stream-Studio. Auch hier entstehen halböffentliche Situationen.",
    tension:
      "Die Pandemie erzeugt eine neue digitale Halböffentlichkeit: sichtbar für viele, aber aus privaten Räumen heraus."
  },
  {
    id: "freizeit",
    label: "Freizeit und Kulturpraxis",
    biedermeier:
      "Das Biedermeier erhebt den Alltag zur Kultur: Sofa, Kaffee, Musik, Lektüre, Handarbeit, Familienraum. Diese Praxis ist nicht unpolitisch, sondern eine Lebensform unter Bedingungen eingeschränkter Öffentlichkeit.",
    pandemie:
      "In school@home tauchen verwandte Muster auf: Netflix, Musik, Sport, Basteln, Gartenarbeit, Nähen, Videocalls, aber auch das schmerzhafte Vermissen von Mensa, Mittagstisch, Zimmerwechsel und leibhaftiger Begegnung.",
    tension:
      "Freizeitgestaltung wird in beiden Fällen zum Ort, an dem Gesellschaft indirekt sichtbar wird."
  },
  {
    id: "grenze",
    label: "Grenze des Vergleichs",
    biedermeier:
      "Der Biedermeier-Rückzug ist langdauernd, sozial selektiv und eng mit Bürgertum, Geschlechterordnung und Zensur verknüpft.",
    pandemie:
      "Der Pandemie-Rückzug ist globale Krisenerfahrung, technisch anders strukturiert und von Schüler*innen als Ausnahmezustand beschrieben, nicht als angestrebtes Lebensmodell.",
    tension:
      "Der Vergleich ist nur dann sinnvoll, wenn man nicht behauptet, beides sei 'eigentlich dasselbe'."
  }
];

const sourceClusters = [
  {
    id: "wohnzimmer",
    label: "Wohnzimmer und Hauskonzert",
    title: "Vom privaten Zimmer zur öffentlichen Bühne",
    thesis:
      "Die ausgelesenen Zielseiten zeigen übereinstimmend, dass Kultur während der Lockdowns aus Wohnungen, Studios ohne Publikum und provisorischen Innenräumen heraus neu öffentlich wurde.",
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
          "Der SRF-Beitrag ist keine bloße Einzelmeldung, sondern eine Übersicht digitaler Initiativen. Damit zeigt er, dass die Verlagerung ins Netz systematisch und nicht nur punktuell war."
      },
      {
        title: "The Guardian: Musicians performing from home",
        url: "https://www.theguardian.com/music/2020/mar/19/musicians-performing-from-home-coronavirus",
        note:
          "Der Guardian rahmt die Situation als Verwandlung von Wohnzimmern in Konzertorte. Levit steht also nicht isoliert da, sondern gehört zu einer internationalen Form derselben Verschiebung."
      }
    ],
    prompts: [
      "Warum wirkt ein Hauskonzert zugleich vertraut und ungewöhnlich?",
      "Was gewinnt Kultur, wenn sie nah wirkt, und was verliert sie ohne körperliches Publikum?"
    ]
  },
  {
    id: "stream",
    label: "Live im Stream",
    title: "Was an digitaler Live-Kultur trotzdem live bleibt",
    thesis:
      "Die ausgelesenen Studien- und Theorie-Links betonen nicht einfach Ersatz, sondern eine veränderte Form von Liveness: Chat, Gleichzeitigkeit, geteilte Aufmerksamkeit und Plattformrituale ersetzen die körperliche Anwesenheit nicht, strukturieren sie aber neu.",
    sources: [
      {
        title: "Frontiers in Psychology: Online concerts and social connection",
        url: "https://www.frontiersin.org/articles/10.3389/fpsyg.2021.648448/full",
        note:
          "Die Studie fragt danach, wie Online-Konzerte soziale Verbundenheit und Emotionen erzeugen. Für den Unterricht ist wichtig: digitale Kultur kann Gemeinschaft stiften, aber auf andere Weise als der Konzertsaal."
      },
      {
        title: "First Monday: Liveness Online in Deadly Times",
        url: "https://firstmonday.org/ojs/index.php/fm/article/view/12398/10657",
        note:
          "Der Text interessiert sich für die Herstellung von 'Liveness' unter Pandemiebedingungen. Damit lässt sich präziser fragen, was am Stream Ereignischarakter hat und was nur technisch präsent ist."
      },
      {
        title: "PMC: How COVID-19 impacted cultural consumption online",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10062683/",
        note:
          "Der Beitrag verknüpft Pandemie und Online-Kulturkonsum. Für die Einheit ist zentral: Kulturnutzung wird digital verbreitert, aber nicht für alle gleich intensiv und nicht als vollwertiger Ersatz für Präsenz."
      }
    ],
    prompts: [
      "Wann fühlt sich ein Stream für dich noch wie ein Ereignis an?",
      "Was kann ein Chat oder ein Kommentarstrom ersetzen und was gerade nicht?"
    ]
  },
  {
    id: "schule",
    label: "Schule, Alltag, Hybridität",
    title: "Von der Kulturpraxis zur Frage: Was bleibt?",
    thesis:
      "Die Links und school@home zusammen führen zur selben Zukunftsfrage: Bleibt nach der Krise wieder alles wie vorher, oder entstehen dauerhafte Mischformen zwischen Präsenz und Digitalität?",
    sources: [
      {
        title: "school@home",
        url: "./assets/school_at_home.pdf",
        note:
          "Viele Stimmen beschreiben kein Entweder-oder, sondern den Wunsch nach Mischformen: bestimmte digitale Werkzeuge sollen bleiben, aber echte Begegnung, Mensa, Pausen und gemeinsame Gegenwart dürfen nicht verschwinden."
      },
      {
        title: "SRF Kultur",
        url: "https://www.srf.ch/kultur/buehne/kultur-trotz-corona-die-schweizer-kulturszene-geht-online-die-links-in-der-uebersicht",
        note:
          "Die Übersicht zeigt, wie schnell Kulturinstitutionen auf digitale Angebote umstellten. Daraus ergibt sich die Frage, welche dieser Formate kurzfristige Notlösungen und welche langfristige Erweiterungen waren."
      },
      {
        title: "PMC / Forschungscluster",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10062683/",
        note:
          "Die Forschung bestätigt, dass sich Kulturgewohnheiten verändern können. Das passt zu vielen school@home-Texten, die digitale Tools beibehalten wollen, aber keine rein digitale Zukunft wünschen."
      }
    ],
    prompts: [
      "Welche Werkzeuge oder Routinen aus der Pandemiezeit sind heute noch sinnvoll?",
      "Wo beginnt Hybridität produktiv zu werden und wo macht sie Dinge nur bequemer, aber auch ärmer?"
    ]
  }
];

const voices = [
  {
    name: "Alisha",
    theme: "Freiheit und Eingesperrtsein",
    tags: ["isolation", "freiheit", "freunde"],
    quote:
      "Ich merke erst jetzt, wie viel es wert ist, die Freiheit zu haben, zu entscheiden, wo man hinwill und wie man seinen Tag außerhalb seines Hauses gestalten möchte."
  },
  {
    name: "Sarah",
    theme: "Routine und Schulraum",
    tags: ["routine", "mittag", "schule"],
    quote:
      "Mir fehlten vor allem das gemeinsame Mittagessen mit den Freunden und schon der Zimmerwechsel. Jeder Tag vor dem Computer wurde sehr eintönig."
  },
  {
    name: "Cheyenne Kim",
    theme: "Freizeit und Familie",
    tags: ["freizeit", "familie", "netflix"],
    quote:
      "In meiner Freizeit saß ich oft zu Hause, schaute Netflix oder machte Sport. Gleichzeitig verstand ich mich mit meiner Familie teilweise besser als sonst."
  },
  {
    name: "Sarah",
    theme: "Bildschirmzeit",
    tags: ["bildschirm", "teams", "netflix"],
    quote:
      "Meine Bildschirmzeit stieg stark an: Teams, iPad, Netflix. Vieles war praktisch, aber unerträglich war, dass Begegnung nur noch über Bildschirme lief."
  },
  {
    name: "Ann Lynn",
    theme: "Handwerk statt Dauerscreen",
    tags: ["freizeit", "handwerk", "alltag"],
    quote:
      "Ich merkte, dass ich wieder mehr handwerkliche Dinge machte: bauen, nähen, häkeln, knüpfen. Gerade das hatte ich vorher vermisst."
  },
  {
    name: "Margaryta",
    theme: "Mensa, Gipfel, Kaffee",
    tags: ["mensa", "bildschirm", "isolation"],
    quote:
      "Ich sehnte mich nach Pausen mit einem Gipfel und Kaffee aus der Mensa. Das ständige Starren in den Bildschirm ließ mich das wahre Schulleben vermissen."
  },
  {
    name: "Patrick Fischer",
    theme: "Lehrerblick auf Teams",
    tags: ["teams", "unterricht", "gegenwart"],
    quote:
      "Als Klassen sind wir keine Lernteams im herkömmlichen Sinne mehr, wir sind bloß noch auf Teams."
  }
];

const analysisQuestions = [
  {
    id: "levit-analyse",
    title: "1. Levit als Schlüsselszene lesen",
    prompt:
      "Erkläre, warum das Hauskonzert von Igor Levit im Schloss Bellevue ein besonders geeigneter Aufhänger für eine Lerneinheit über Pandemie-Kultur ist. Gehe auf den Ort, die Form des Hauskonzerts, die digitale Öffentlichkeit und die symbolische Wirkung ein.",
    minWords: 140,
    platformLinks: [
      { label: "Levit lesen", href: "#levit", keywords: ["levit", "hauskonzert", "bellevue", "staatsraum", "schloss"] },
      { label: "Spurensuche", href: "#quellen", keywords: ["deutschlandfunk", "guardian", "srf", "lagerfeuer", "wohnzimmer"] }
    ],
    concepts: [
      { label: "Ort und Symbolik", keywords: ["bellevue", "schloss", "staat", "bundespraesident", "bundespräsident", "staatsraum", "symbol"] },
      { label: "Hauskonzert als intime Form", keywords: ["hauskonzert", "intim", "nähe", "naehe", "wohnzimmer", "privat"] },
      { label: "Digitale Öffentlichkeit", keywords: ["stream", "digital", "online", "publikum", "öffentlich", "oeffentlich", "halböffentlich", "halboeffentlich"] },
      { label: "Pandemiekontext", keywords: ["pandemie", "lockdown", "abstand", "rückzug", "rueckzug"] },
      { label: "Deutung", keywords: ["ich", "meiner ansicht", "wirkt", "deshalb", "dadurch"] }
    ],
    sourceHints: ["deutschlandfunk", "guardian", "srf", "school@home", "levit"],
    feedbackFocus:
      "Eine starke Antwort verbindet Intimität, Staatsraum und digitale Reichweite und bleibt nicht bei 'schönem Konzert' stehen."
  },
  {
    id: "vergleich-analyse",
    title: "2. Rückzug ist nicht gleich Rückzug",
    prompt:
      "Vergleiche den Rückzug ins Private im Biedermeier mit dem Rückzug in der Pandemie. Arbeite mindestens vier Unterschiede oder Spannungen heraus und erkläre, warum der Vergleich hilfreich, aber auch begrenzt ist.",
    minWords: 180,
    platformLinks: [
      { label: "Vergleich", href: "#vergleich", keywords: ["biedermeier", "vormärz", "zensur", "salon", "halböffentlichkeit"] },
      { label: "school@home", href: "#school", keywords: ["school@home", "teams", "mensa", "bildschirm", "freunde"] }
    ],
    concepts: [
      { label: "Unterschiedliche Ursachen", keywords: ["zensur", "repression", "politisch", "medizinisch", "ansteckung", "lockdown"] },
      { label: "Raum und Privatsphäre", keywords: ["raum", "wohnraum", "privatsphäre", "privatsphaere", "zimmer", "salon", "sofa"] },
      { label: "Öffentlichkeit", keywords: ["halböffentlich", "halboeffentlich", "öffentlichkeit", "oeffentlichkeit", "salon", "stream", "plattform", "teams"] },
      { label: "Alltag/Freizeit", keywords: ["alltag", "kultur", "freizeit", "kaffee", "mensa", "familie"] },
      { label: "Grenzen des Vergleichs", keywords: ["grenze", "nicht dasselbe", "unterschied", "selektiv", "ausnahmezustand"] }
    ],
    sourceHints: ["biedermeier", "knoblauchhaus", "school@home", "srf", "frontiers"],
    feedbackFocus:
      "Eine gute Antwort nennt nicht nur Parallelen, sondern zeigt, wo der Vergleich kippt und warum man die Ursachen nicht gleichsetzen darf."
  },
  {
    id: "freizeit-analyse",
    title: "3. Was von 2020 bis heute weiterwirkt",
    prompt:
      "Nutze mindestens eine Stimme aus school@home und mindestens zwei einzelne Zielseiten aus den Materialsammlungen. Erkläre, wie sich während der Pandemie Freizeitgestaltung, Öffentlichkeit und Rückzug ins Private gegenseitig verändert haben und welche Folgen bis heute sichtbar sind.",
    minWords: 180,
    platformLinks: [
      { label: "Spurensuche", href: "#quellen", keywords: ["deutschlandfunk", "guardian", "srf", "frontiers", "first monday", "pmc"] },
      { label: "school@home", href: "#school", keywords: ["school@home", "teams", "mensa", "familie", "bildschirm"] },
      { label: "Vergleich", href: "#vergleich", keywords: ["biedermeier", "rückzug", "öffentlichkeit", "freizeit"] }
    ],
    concepts: [
      { label: "school@home-Bezug", keywords: ["school@home", "mensa", "bildschirm", "freunde", "familie", "teams"] },
      { label: "Einzelquellen aus der Linksammlung", keywords: ["deutschlandfunk", "guardian", "srf", "frontiers", "first monday", "pmc"] },
      { label: "Freizeit als Kulturpraxis", keywords: ["netflix", "sport", "lesen", "konzert", "club", "lesung", "stream"] },
      { label: "Gegenwart", keywords: ["heute", "noch", "weiter", "nachwirkt", "geblieben"] },
      { label: "Zukunft", keywords: ["zukunft", "hybrid", "behalten", "nicht bleiben", "sollte"] }
    ],
    sourceHints: ["school@home", "deutschlandfunk", "guardian", "srf", "frontiers", "pmc"],
    feedbackFocus:
      "Hier zählt besonders, ob du echte Quellenbeziehungen herstellst und den Weg von 2020 in die Gegenwart und Zukunft mitdenkst."
  }
];

const reflectionQuestions = [
  {
    id: "damals",
    title: "Damals: Erinnerungsbild 2020",
    prompt:
      "Beschreibe einen Moment aus dem Lockdown, in dem Privatheit und Öffentlichkeit für dich ineinander übergingen: zum Beispiel Teams-Unterricht, Videocall, Streaming, Familienalltag oder eine neue Freizeitpraxis.",
    minWords: 100,
    platformLinks: [
      { label: "school@home", href: "#school", keywords: ["school@home", "teams", "mensa", "bildschirm", "pause"] },
      { label: "Levit lesen", href: "#levit", keywords: ["hauskonzert", "öffentlichkeit", "privat", "stream"] }
    ],
    concepts: [
      { label: "Konkrete Szene", keywords: ["ich", "als", "während", "waehrend", "damals", "moment"] },
      { label: "Privat/Öffentlich", keywords: ["privat", "öffentlich", "oeffentlich", "halböffentlich", "halboeffentlich", "kamera", "zimmer"] },
      { label: "Gefühl", keywords: ["komisch", "unangenehm", "nah", "einsam", "intim", "fremd"] }
    ],
    sourceHints: ["school@home", "teams", "mensa"],
    feedbackFocus:
      "Am stärksten werden Antworten, wenn sie eine konkrete Szene zeigen statt nur allgemein zu urteilen."
  },
  {
    id: "heute",
    title: "Heute: Was wirkt mit 17 noch nach?",
    prompt:
      "Erkläre, was aus der Pandemiezeit heute noch in deinem Alltag, deinem Medienverhalten, deinem Blick auf Schule oder deiner Art von Freizeitgestaltung nachwirkt.",
    minWords: 110,
    platformLinks: [
      { label: "school@home", href: "#school", keywords: ["school@home", "heute", "teams", "bildschirm", "mensa"] },
      { label: "Spurensuche", href: "#quellen", keywords: ["hybrid", "digital", "stream", "pmc", "frontiers"] }
    ],
    concepts: [
      { label: "Gegenwart", keywords: ["heute", "jetzt", "noch", "immer", "bis heute"] },
      { label: "Schule/Alltag", keywords: ["schule", "unterricht", "organisation", "digital", "teams", "abgabe"] },
      { label: "Sozialverhalten oder Freizeit", keywords: ["freunde", "familie", "freizeit", "bildschirm", "stream", "pause"] }
    ],
    sourceHints: ["school@home", "digital", "heute"],
    feedbackFocus:
      "Hier lohnt sich Präzision: Welche Spur ist wirklich geblieben und welche nicht?"
  },
  {
    id: "morgen",
    title: "Morgen: Was soll bleiben, was nicht?",
    prompt:
      "Formuliere eine Position für die Zukunft: Welche digitalen Formen aus Pandemie-Kultur oder Fernunterricht sollten erhalten bleiben, welche sollten bewusst wieder zurückgedrängt werden? Begründe differenziert.",
    minWords: 120,
    platformLinks: [
      { label: "Spurensuche", href: "#quellen", keywords: ["pmc", "frontiers", "srf", "hybrid", "online"] },
      { label: "school@home", href: "#school", keywords: ["school@home", "mensa", "begegnung", "bildschirm"] },
      { label: "Vergleich", href: "#vergleich", keywords: ["biedermeier", "rückzug", "öffentlichkeit", "grenze"] }
    ],
    concepts: [
      { label: "Klare Position", keywords: ["ich finde", "sollte", "soll nicht", "meiner ansicht", "beibehalten"] },
      { label: "Was bleiben kann", keywords: ["hybrid", "digitale abgabe", "mediathek", "flexibel", "online"] },
      { label: "Was begrenzt werden muss", keywords: ["präsenz", "praesenz", "begegnung", "mensa", "körperlich", "koerperlich", "bildschirmzeit", "nicht ersetzen"] }
    ],
    sourceHints: ["school@home", "frontiers", "pmc", "srf"],
    feedbackFocus:
      "Eine starke Zukunftsantwort benennt nicht nur Vorlieben, sondern Kriterien für gute Schule und gute Kultur."
  }
];

const sectionChecks = [
  {
    id: "levit-sicherung",
    mountId: "levitCheckList",
    title: "Sicherung: Warum ist Levit hier mehr als ein Musikbeispiel?",
    intro:
      "Halte den Kern des Abschnitts fest. Schreibe 2 bis 4 Sätze dazu, warum das Hauskonzert im Schloss Bellevue als Einstieg so ergiebig ist.",
    prompt:
      "Beziehe dich ausdrücklich auf Intimität, Staatsraum und digitale Öffentlichkeit.",
    minWords: 45,
    concepts: [
      { label: "Hauskonzert/Intimität", keywords: ["hauskonzert", "intim", "intimität", "wohnzimmer", "nah"] },
      { label: "Schloss/Bellevue/Staatsraum", keywords: ["bellevue", "schloss", "staat", "staatsraum", "repräsentativ"] },
      { label: "Digitale Öffentlichkeit", keywords: ["stream", "digital", "online", "öffentlichkeit", "publikum"] }
    ],
    feedbackFocus:
      "Stark ist die Antwort dann, wenn sie zeigt, dass gerade die Spannung zwischen privater Form und öffentlichem Ort den Aufhänger so ergiebig macht."
  },
  {
    id: "vergleich-sicherung",
    mountId: "comparisonCheckList",
    title: "Sicherung: Was trägt der Vergleich und wo endet er?",
    intro:
      "Sichere den Vergleich unmittelbar nach dem Lesen. Formuliere knapp, worin die produktive Nähe zwischen Biedermeier und Pandemie liegt und worin der entscheidende Unterschied.",
    prompt:
      "Nenne mindestens einen gemeinsamen Zug und mindestens eine klare Grenze des Vergleichs.",
    minWords: 55,
    concepts: [
      { label: "Rückzug/Ähnlichkeit", keywords: ["rückzug", "ähnlich", "privat", "innenraum", "salon"] },
      { label: "Unterschiedliche Ursache", keywords: ["zensur", "repression", "medizinisch", "lockdown", "ansteckung"] },
      { label: "Grenze des Vergleichs", keywords: ["grenze", "nicht dasselbe", "ausnahmezustand", "bürgerlich", "global"] }
    ],
    feedbackFocus:
      "Wichtig ist hier nicht bloß 'beide ziehen sich zurück', sondern die klare Unterscheidung der historischen Ursachen und Strukturen."
  },
  {
    id: "spurensuche-sicherung",
    mountId: "sourceCheckList",
    title: "Sicherung: Was zeigen die Einzelquellen zusammen?",
    intro:
      "Verdichte die Spurensuche in einer knappen Auswertung. Schreibe 2 bis 4 Sätze dazu, was die ausgewählten Zielseiten gemeinsam über Pandemie-Kultur sichtbar machen.",
    prompt:
      "Nenne dabei mindestens zwei konkrete Quellen oder Quellengruppen aus dem Abschnitt.",
    minWords: 55,
    concepts: [
      { label: "Mindestens zwei Quellen", keywords: ["deutschlandfunk", "guardian", "srf", "frontiers", "first monday", "pmc", "school@home"] },
      { label: "Digitale Kulturformen", keywords: ["stream", "online", "wohnzimmer", "plattform", "konzert", "livestream"] },
      { label: "Gewinn oder Verlust", keywords: ["nähe", "gemeinschaft", "verlust", "ersatz", "reichweite", "hybrid"] }
    ],
    feedbackFocus:
      "Gut ist die Sicherung dann, wenn sie nicht bloß Quellen aufzählt, sondern ihre gemeinsame Aussage über neue Kulturformen und ihre Grenzen bündelt."
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
const levitCheckList = document.querySelector("#levitCheckList");
const comparisonCheckList = document.querySelector("#comparisonCheckList");
const sourceCheckList = document.querySelector("#sourceCheckList");
const analysisQuestionList = document.querySelector("#analysisQuestionList");
const reflectionQuestionList = document.querySelector("#reflectionQuestionList");
const saveAllBtn = document.querySelector("#saveAllBtn");
const exportAllBtn = document.querySelector("#exportAllBtn");
const notesStatus = document.querySelector("#notesStatus");

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
  const platformHits = [];

  question.concepts.forEach((concept) => {
    if (includesAny(normalized, concept.keywords)) {
      hits.push(concept.label);
    } else {
      missing.push(concept.label);
    }
  });

  question.platformLinks.forEach((platformLink) => {
    if (includesAny(normalized, platformLink.keywords)) {
      platformHits.push(platformLink.label);
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
    comment = "Die Richtung stimmt. Für eine noch stärkere Antwort solltest du die fehlenden Punkte gezielter ausbauen.";
  } else if (level === "ansatz") {
    comment = "Es sind gute Anfänge da, aber die Antwort bleibt noch zu selektiv oder zu allgemein.";
  } else {
    comment = "Die Antwort braucht noch deutlich mehr Ausarbeitung und konkretere Bezüge.";
  }

  const sourceComment = sourceHit
    ? "Quellenbezug ist erkennbar."
    : "Noch fehlt ein klar erkennbarer Quellenbezug. Nenne school@home, Levit oder einzelne Linkquellen direkt.";

  const platformComment =
    platformHits.length > 0
      ? `Du bindest deine Antwort bereits an diese Plattformbereiche zurück: ${platformHits.join(", ")}.`
      : `Noch fehlt der sichtbare Rückbezug auf die Plattform. Greife ausdrücklich Abschnitte wie ${question.platformLinks
          .map((link) => link.label)
          .join(", ")} auf.`;

  let appreciation = "";
  if (level === "stark") {
    appreciation = "Das ist bereits eine tragfähige Deutung, nicht nur eine Sammlung einzelner Beobachtungen.";
  } else if (level === "solide") {
    appreciation = "Die Antwort hat Substanz. Jetzt lohnt es sich, die stärksten Beobachtungen noch genauer an den Materialien zu erden.";
  } else if (level === "ansatz") {
    appreciation = "Du hast einen brauchbaren Einstieg gefunden. Mit einem präzisen Rückgriff auf die Plattform wird daraus schneller eine belastbare Antwort.";
  } else {
    appreciation = "Der Anfang ist da. Die Plattform liefert dir genug Material, um daraus eine deutlich konkretere Antwort zu machen.";
  }

  return {
    words,
    hits,
    missing,
    platformHits,
    sourceHit,
    level,
    comment,
    sourceComment,
    platformComment,
    appreciation
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
      : "Keine deutlichen Lücken in der Grundstruktur.";

  return `
    <div class="feedback ${result.level}">
      <p><strong>${levelLabel}.</strong> ${result.comment}</p>
      <p><strong>Würdigung:</strong> ${result.appreciation}</p>
      <p><strong>Umfang:</strong> ${result.words} Wörter. Erwartet sind mindestens ${question.minWords}.</p>
      <p><strong>Schon sichtbar:</strong> ${result.hits.length ? result.hits.join(", ") : "noch kaum tragende Aspekte"}</p>
      <p><strong>Plattformbezug:</strong> ${result.platformComment}</p>
      <p><strong>Noch ergänzen:</strong> ${missingText}</p>
      <p><strong>Quellenbezug:</strong> ${result.sourceComment}</p>
      <p><strong>Kommentar:</strong> ${question.feedbackFocus}</p>
    </div>
  `;
}

function liveFeedbackHtml(result) {
  return `
    <div class="feedback live ${result.level}">
      <p><strong>Zwischenstand.</strong> ${result.appreciation}</p>
      <p><strong>Plattformbezug:</strong> ${result.platformComment}</p>
    </div>
  `;
}

function evaluateSectionCheck(answer, sectionCheck) {
  const normalized = normalizeText(answer);
  const words = wordCount(answer);
  const hits = [];
  const missing = [];

  sectionCheck.concepts.forEach((concept) => {
    if (includesAny(normalized, concept.keywords)) {
      hits.push(concept.label);
    } else {
      missing.push(concept.label);
    }
  });

  const density = hits.length / sectionCheck.concepts.length;
  let level = "ausbau";
  if (density >= 0.8 && words >= sectionCheck.minWords) level = "stark";
  else if (density >= 0.6 && words >= sectionCheck.minWords * 0.8) level = "solide";
  else if (density >= 0.34) level = "ansatz";

  let appreciation = "";
  if (level === "stark") {
    appreciation = "Du sicherst den Kern des Abschnitts bereits sehr klar.";
  } else if (level === "solide") {
    appreciation = "Die Hauptlinie ist erkennbar und schon gut getroffen.";
  } else if (level === "ansatz") {
    appreciation = "Ein tragfähiger Anfang ist da, aber die Sicherung bleibt noch lückenhaft.";
  } else {
    appreciation = "Die Sicherung ist noch zu knapp oder zu allgemein, um den Abschnitt wirklich festzuhalten.";
  }

  return {
    words,
    hits,
    missing,
    level,
    appreciation
  };
}

function sectionCheckFeedbackHtml(result, sectionCheck) {
  const levelLabel = {
    stark: "Sehr sicher",
    solide: "Weitgehend sicher",
    ansatz: "Im Ansatz sicher",
    ausbau: "Noch unsicher"
  }[result.level];

  const missingText =
    result.missing.length > 0
      ? result.missing.join(", ")
      : "Keine deutlichen Lücken in der Sicherung.";

  return `
    <div class="feedback ${result.level}">
      <p><strong>${levelLabel}.</strong> ${result.appreciation}</p>
      <p><strong>Schon gesichert:</strong> ${result.hits.length ? result.hits.join(", ") : "noch kaum Kerngedanken des Abschnitts"}</p>
      <p><strong>Noch nachschärfen:</strong> ${missingText}</p>
      <p><strong>Kommentar:</strong> ${sectionCheck.feedbackFocus}</p>
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
              <a class="button small" href="${source.url}" target="_blank" rel="noreferrer">Quelle öffnen</a>
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
    <div class="platform-link-box">
      <p class="platform-label">Arbeite auf dieser Seite besonders mit:</p>
      <div class="platform-links">
        ${question.platformLinks
          .map((link) => `<a class="jump-chip" href="${link.href}">${link.label}</a>`)
          .join("")}
      </div>
    </div>
    <div class="label-cloud rubric-cloud">
      ${question.concepts.map((concept) => `<span class="tag">${concept.label}</span>`).join("")}
    </div>
    <label class="label" for="${question.id}">Deine Antwort</label>
    <textarea id="${question.id}" data-question-id="${question.id}" placeholder="Schreibe hier deine Antwort.">${storedValue}</textarea>
    <p class="draft-status">Noch kein Text. Nimm mindestens einen klaren Bezug auf ${question.platformLinks
      .map((link) => link.label)
      .join(", ")} auf.</p>
    <div class="button-row">
      <button class="button evaluate-btn" type="button">Kommentar anzeigen</button>
      <button class="button ghost save-btn" type="button">Antwort speichern</button>
    </div>
    <div class="feedback-holder"></div>
  `;

  const textarea = wrapper.querySelector("textarea");
  const feedbackHolder = wrapper.querySelector(".feedback-holder");
  const draftStatus = wrapper.querySelector(".draft-status");

  const updateDraftStatus = () => {
    const text = textarea.value.trim();
    const words = wordCount(text);
    if (!text) {
      draftStatus.textContent = `Noch kein Text. Nimm mindestens einen klaren Bezug auf ${question.platformLinks
        .map((link) => link.label)
        .join(", ")} auf.`;
      return;
    }

    const normalized = normalizeText(text);
    const linkedSections = question.platformLinks
      .filter((link) => includesAny(normalized, link.keywords))
      .map((link) => link.label);

    draftStatus.textContent =
      linkedSections.length > 0
        ? `${words} Wörter. Schon angebunden an: ${linkedSections.join(", ")}.`
        : `${words} Wörter. Binde jetzt sichtbar ${question.platformLinks.map((link) => link.label).join(", ")} ein.`;
  };

  const updateLiveFeedback = () => {
    const text = textarea.value.trim();
    const minPreviewWords = Math.max(18, Math.floor(question.minWords * 0.18));

    if (wordCount(text) < minPreviewWords) {
      feedbackHolder.innerHTML = "";
      return;
    }

    const result = evaluateAnswer(text, question);
    feedbackHolder.innerHTML = liveFeedbackHtml(result);
  };

  wrapper.querySelector(".save-btn").addEventListener("click", () => {
    storeAnswer(question.id, textarea.value);
    notesStatus.textContent = "Antworten lokal gespeichert.";
  });

  wrapper.querySelector(".evaluate-btn").addEventListener("click", () => {
    storeAnswer(question.id, textarea.value);
    const result = evaluateAnswer(textarea.value, question);
    feedbackHolder.innerHTML = feedbackHtml(result, question);
    notesStatus.textContent = "Kommentar aktualisiert.";
  });

  textarea.addEventListener("input", () => {
    storeAnswer(question.id, textarea.value);
    updateDraftStatus();
    updateLiveFeedback();
  });

  updateDraftStatus();
  updateLiveFeedback();

  mountPoint.appendChild(wrapper);
}

function renderSectionCheck(sectionCheck, mountPoint) {
  const wrapper = document.createElement("article");
  wrapper.className = "question-card section-check-card";
  const storedValue = savedAnswers[sectionCheck.id] || "";

  wrapper.innerHTML = `
    <p class="kicker">Inhalt sichern</p>
    <h3>${sectionCheck.title}</h3>
    <p>${sectionCheck.intro}</p>
    <p class="section-check-prompt"><strong>Arbeitsauftrag:</strong> ${sectionCheck.prompt}</p>
    <div class="label-cloud rubric-cloud">
      ${sectionCheck.concepts.map((concept) => `<span class="tag">${concept.label}</span>`).join("")}
    </div>
    <label class="label" for="${sectionCheck.id}">Deine Sicherung</label>
    <textarea id="${sectionCheck.id}" data-question-id="${sectionCheck.id}" placeholder="Sichere hier die Kernaussage des Abschnitts.">${storedValue}</textarea>
    <div class="button-row">
      <button class="button evaluate-btn" type="button">Sicherung prüfen</button>
      <button class="button ghost save-btn" type="button">Sicherung speichern</button>
    </div>
    <div class="feedback-holder"></div>
  `;

  const textarea = wrapper.querySelector("textarea");
  const feedbackHolder = wrapper.querySelector(".feedback-holder");

  wrapper.querySelector(".save-btn").addEventListener("click", () => {
    storeAnswer(sectionCheck.id, textarea.value);
    notesStatus.textContent = "Sicherung lokal gespeichert.";
  });

  wrapper.querySelector(".evaluate-btn").addEventListener("click", () => {
    storeAnswer(sectionCheck.id, textarea.value);
    const result = evaluateSectionCheck(textarea.value, sectionCheck);
    feedbackHolder.innerHTML = sectionCheckFeedbackHtml(result, sectionCheck);
    notesStatus.textContent = "Sicherung kommentiert.";
  });

  textarea.addEventListener("input", () => {
    storeAnswer(sectionCheck.id, textarea.value);
    if (wordCount(textarea.value) >= Math.max(12, Math.floor(sectionCheck.minWords * 0.35))) {
      const result = evaluateSectionCheck(textarea.value, sectionCheck);
      feedbackHolder.innerHTML = `
        <div class="feedback live ${result.level}">
          <p><strong>Zwischenstand.</strong> ${result.appreciation}</p>
          <p><strong>Schon gesichert:</strong> ${result.hits.length ? result.hits.join(", ") : "noch keine klaren Kerngedanken"}</p>
        </div>
      `;
    } else {
      feedbackHolder.innerHTML = "";
    }
  });

  mountPoint.appendChild(wrapper);
}

function exportAllAnswers() {
  const sections = [...sectionChecks, ...analysisQuestions, ...reflectionQuestions].map((question) => {
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
  button.textContent = filter === "alle" ? "Alle" : filter;
  button.addEventListener("click", () => renderVoices(filter));
  voiceFilters.appendChild(button);
});

analysisQuestions.forEach((question) => renderQuestionCard(question, analysisQuestionList));
reflectionQuestions.forEach((question) => renderQuestionCard(question, reflectionQuestionList));
sectionChecks.forEach((sectionCheck) => {
  const mountMap = {
    levitCheckList,
    comparisonCheckList,
    sourceCheckList
  };
  renderSectionCheck(sectionCheck, mountMap[sectionCheck.mountId]);
});

saveAllBtn.addEventListener("click", saveAllAnswers);
exportAllBtn.addEventListener("click", exportAllAnswers);

renderComparison(comparisonData[0].id);
renderSource(sourceClusters[0].id);
renderVoices("alle");
