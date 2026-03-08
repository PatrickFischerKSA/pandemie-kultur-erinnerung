const comparisonData = [
  {
    id: "anlass",
    label: "Anlass des Rückzugs",
    biedermeier:
      "Der Rückzug ins Private entsteht vor allem unter politischer Repression, Zensur und eingeschränkter Öffentlichkeit. Der Salon wird zu einem halböffentlichen Ersatzraum.",
    pandemie:
      "Der Rückzug ins Private entsteht aus medizinischen Gründen. Abstand, Lockdown und Schutzmaßnahmen verlagern Schule, Kultur und Freizeit in Wohnungen und auf Bildschirme.",
    transfer: "Gemeinsam ist beiden Situationen: Das Private wird kulturell aufgeladen."
  },
  {
    id: "raum",
    label: "Raum und Bühne",
    biedermeier:
      "Wohnzimmer, Salons, Musikzimmer und private Gesprächsrunden tragen Debatten, Kunst und soziale Rollen.",
    pandemie:
      "Wohnzimmer, Kinderzimmer und Küchen werden zu Klassenzimmern, Bühnen, Konzertsälen und Lesungsorten. Das Levit-Hauskonzert macht genau diesen Raumwandel sichtbar.",
    transfer: "Der private Raum ist nicht nur Rückzugsort, sondern Produktionsraum von Kultur."
  },
  {
    id: "oeffentlichkeit",
    label: "Form der Öffentlichkeit",
    biedermeier:
      "Öffentlichkeit bleibt begrenzt und selektiv. Der Salon ist offen genug für Austausch, aber geschlossen genug, um Schutz zu bieten.",
    pandemie:
      "Digitale Öffentlichkeit wächst: Hauskonzerte, Tiny Desk (Home), digitale Lesungen, Clubstreams und Online-Theater bringen Kultur aus privaten Räumen in viele Haushalte.",
    transfer: "Pandemie-Öffentlichkeit ist breiter, aber körperlich entfernter."
  },
  {
    id: "kulturfunktion",
    label: "Wozu dient Kultur?",
    biedermeier:
      "Kultur stiftet Distinktion, Geselligkeit, Bildung und eine Form indirekter politischer Kommunikation.",
    pandemie:
      "Kultur stiftet Halt, Gemeinschaft, Tagesstruktur, emotionale Entlastung und digitale Verbundenheit. Die Word-Dateien zeigen besonders Musik, Literatur, Clubs und hybride Live-Formate.",
    transfer: "Kultur kompensiert Verlust und schafft dennoch gemeinsame Zeit."
  },
  {
    id: "grenze",
    label: "Grenze des Vergleichs",
    biedermeier:
      "Der politische Kontext ist dauerhaft, sozial stark codiert und an Klassen- und Bildungszugänge gebunden.",
    pandemie:
      "Der Lockdown ist krisenbedingt, technisch vermittelt und global. Schülerinnen und Schüler erleben ihn als Ausnahmezustand, nicht als Lebensmodell.",
    transfer: "Der Vergleich ist produktiv, aber die Ursachen sind deutlich verschieden."
  }
];

const sourceData = [
  {
    id: "wohnzimmer",
    label: "Wohnzimmerkultur",
    title: "Hauskonzerte und private Kulturorte",
    summary:
      "Alle vier Word-Dateien machen sichtbar, wie Wohnungen, private Zimmer und kleine Salons zu Bühnen wurden. Das Material reicht von Deutschlandfunk Kultur über Guardian und NPR bis zu Salonformaten.",
    evidence: [
      "Wohnzimmerkonzerte und Hauskonzerte werden mehrfach als typische Lockdown-Form beschrieben.",
      "Der Begriff 'Lagerfeuer' taucht als Bild für digitale Nähe trotz Distanz auf.",
      "Levit lässt sich als prominentes Beispiel dieser Verschiebung lesen: intim in der Form, öffentlich in der Reichweite."
    ],
    prompts: [
      "Warum wirkt ein Konzert aus einem privaten Raum oft persönlicher als eine große Bühne?",
      "Was geht verloren, wenn das Publikum nur noch als Stream existiert?"
    ],
    files: [
      "kultur_pandemie_linksammlung.docx",
      "kultur_pandemie_linksammlung_erweitert.docx",
      "kultur_pandemie_sammlung3.docx",
      "kultur_pandemie_sammlung4.docx"
    ],
    tags: ["Hauskonzert", "Wohnzimmer", "Intimität", "Livestream"]
  },
  {
    id: "literatur",
    label: "Digitale Literatur",
    title: "Lesungen, Zoom-Literatur und neue Textöffentlichkeiten",
    summary:
      "Die Sammlungen zeigen, dass nicht nur Musik, sondern auch Literaturveranstaltungen ins Digitale gewandert sind: PEN America, Literaturhaus, Brooklyn Rail und LARB stehen für diese Verlagerung.",
    evidence: [
      "Literatur wird vom Saal in Mediatheken, Videocalls und gestreamte Gespräche verlegt.",
      "Lesungen werden nicht abgeschafft, sondern in veränderte Wahrnehmungsformen überführt.",
      "Der private Bildschirm ersetzt den gemeinsamen Raum nur teilweise."
    ],
    prompts: [
      "Wie verändert sich eine Lesung, wenn man sie allein am Laptop verfolgt?",
      "Ist Zuhören im Privaten intensiver oder einsamer?"
    ],
    files: [
      "kultur_pandemie_linksammlung_erweitert.docx",
      "kultur_pandemie_sammlung4.docx"
    ],
    tags: ["Lesung", "Zoom", "Literaturhaus", "Mediathek"]
  },
  {
    id: "buehnen",
    label: "Digitale Bühnen",
    title: "Streaming, Clubs und Online-Theater",
    summary:
      "Die Word-Dateien bündeln Beispiele wie United We Stream, Home Concerts, digitale Theaterformate und Shakespeare über Zoom. Kultur verschiebt sich nicht nur ins Netz, sondern verändert ihre Form.",
    evidence: [
      "Clubs streamen DJ-Sets und verlieren zugleich ihre körperliche Situation.",
      "Theater wird zum Bildschirmereignis und muss seine Live-Wirkung neu herstellen.",
      "Mehrere Texte fragen, was 'live' bedeutet, wenn Publikum und Bühne getrennt bleiben."
    ],
    prompts: [
      "Wann fühlt sich ein Stream noch live an?",
      "Ist digitale Unmittelbarkeit eher eine neue Chance oder eine Notlösung?"
    ],
    files: [
      "kultur_pandemie_linksammlung_erweitert.docx",
      "kultur_pandemie_sammlung3.docx",
      "kultur_pandemie_sammlung4.docx"
    ],
    tags: ["United We Stream", "Theater", "Clubkultur", "Liveness"]
  },
  {
    id: "oeffentlichkeiten",
    label: "Neue Öffentlichkeiten",
    title: "Wie Öffentlichkeit im Netz neu organisiert wird",
    summary:
      "Mehrere Sammlungen fragen nach neuen kulturellen Öffentlichkeiten: solidarische Formate, neue Teilhabe und die Frage, wer im Digitalen sichtbar wird.",
    evidence: [
      "Das Netz wird nicht bloß Verteiler, sondern sozialer Kulturraum.",
      "Teilhabe wird breiter, aber zugleich technikabhängig.",
      "Die Grenze zwischen Publikum, Wohnzimmer und Bühne wird unscharf."
    ],
    prompts: [
      "Ist eine gestreamte Veranstaltung demokratischer, weil mehr Menschen zugreifen können?",
      "Oder wird sie exklusiver, weil Technik, Ruhe und Aufmerksamkeit ungleich verteilt sind?"
    ],
    files: [
      "kultur_pandemie_linksammlung_erweitert.docx",
      "kultur_pandemie_sammlung4.docx"
    ],
    tags: ["Teilhabe", "Solidarität", "Netz", "Öffentlichkeit"]
  },
  {
    id: "forschung",
    label: "Forschung",
    title: "Was Studien über Online-Kultur sagen",
    summary:
      "Die Dateien nennen wiederholt Forschungsarbeiten zu kulturellem Konsum, Online-Konzerten und digitaler Verbundenheit. Das Material zeigt: Digitale Kultur kann Nähe erzeugen, ersetzt Präsenz aber nicht vollständig.",
    evidence: [
      "Online-Konzerte erzeugen Emotion und Gemeinschaft, aber anders als körperliche Live-Erfahrung.",
      "Digitale Kulturkonsummuster verändern Gewohnheiten langfristig.",
      "Hybride Formate gelten als besonders zukunftsfähig."
    ],
    prompts: [
      "Warum wünschen sich viele Schüler*innen im PDF ein Mischmodell statt ein Entweder-oder?",
      "Welche Rolle spielt Gewöhnung: technisch möglich heißt noch nicht kulturell gleichwertig."
    ],
    files: [
      "kultur_pandemie_linksammlung.docx",
      "kultur_pandemie_linksammlung_erweitert.docx",
      "kultur_pandemie_sammlung3.docx",
      "kultur_pandemie_sammlung4.docx"
    ],
    tags: ["Studien", "Emotion", "Hybrid", "Publikum"]
  }
];

const voices = [
  {
    name: "Alisha Ademaj",
    theme: "Freiheit und Eingesperrtsein",
    tags: ["Isolation", "Freunde", "Freiheit"],
    quote:
      "Ich merke erst jetzt, wie viel es wert ist, die Freiheit zu haben, zu entscheiden, wo man hinwill und wie man seinen Tag außerhalb seines Hauses gestalten möchte."
  },
  {
    name: "Sarah Bruhin",
    theme: "Routine und Schulraum",
    tags: ["Routine", "Mittag", "Zimmerwechsel"],
    quote:
      "Mir fehlten vor allem das gemeinsame Mittagessen mit den Freunden und schon der Zimmerwechsel. Jeder Tag vor dem Computer wurde sehr eintönig."
  },
  {
    name: "Cheyenne Kim Bähler",
    theme: "Freizeit und Familie",
    tags: ["Freizeit", "Familie", "Netflix"],
    quote:
      "In meiner Freizeit saß ich oft zu Hause, schaute Netflix oder machte Sport. Gleichzeitig verstand ich mich mit meiner Familie teilweise besser als sonst."
  },
  {
    name: "Sarah Vuchinic",
    theme: "Bildschirmzeit",
    tags: ["Bildschirm", "Teams", "Netflix"],
    quote:
      "Meine Bildschirmzeit stieg stark an: Teams, iPad, Netflix. Vieles war praktisch, aber unerträglich war, dass Begegnung nur noch über Bildschirme lief."
  },
  {
    name: "Ann Lynn Willi",
    theme: "Handwerk statt Dauerscreen",
    tags: ["Handwerk", "Freizeit", "Geräte"],
    quote:
      "Ich merkte, dass ich wieder mehr handwerkliche Dinge machte: bauen, nähen, häkeln, knüpfen. Gerade das hatte ich vorher vermisst."
  },
  {
    name: "Margaryta Zimarina",
    theme: "Mensa, Gipfel, Kaffee",
    tags: ["Mensa", "Isolation", "Bildschirm"],
    quote:
      "Ich sehnte mich nach Pausen mit einem Gipfel und Kaffee aus der Mensa. Das ständige Starren in den Bildschirm ließ mich das wahre Schulleben vermissen."
  },
  {
    name: "Patrick Fischer",
    theme: "Lehrerblick auf Teams",
    tags: ["Teams", "Unterricht", "Sozialform"],
    quote:
      "Als Klassen sind wir keine Lernteams im herkömmlichen Sinne mehr, wir sind bloß noch auf Teams."
  }
];

const scenarios = [
  {
    title: "Hauskonzert von Igor Levit im Schloss Bellevue",
    correct: "halböffentlich",
    explanation:
      "Die Aufführung wirkt intim, richtet sich aber über den Stream an viele. Sie ist weder rein privat noch klassische Saalöffentlichkeit."
  },
  {
    title: "Teams-Unterricht aus dem Kinder- oder Jugendzimmer",
    correct: "halböffentlich",
    explanation:
      "Der Raum ist privat, aber Kamera, Mikrofon und Schulorganisation machen ihn temporär zum öffentlichen Lernraum."
  },
  {
    title: "United We Stream aus einem leeren Club",
    correct: "halböffentlich",
    explanation:
      "Der Club bleibt ein öffentlicher Kulturort, wird aber ohne Publikum und nur digital erfahrbar. Öffentlichkeit verlagert sich ins Netz."
  },
  {
    title: "Allein Netflix schauen im eigenen Zimmer",
    correct: "privat",
    explanation:
      "Das ist eine private Freizeitpraxis ohne unmittelbare geteilte Situation, auch wenn sie Teil großer Plattformöffentlichkeit ist."
  },
  {
    title: "Biedermeier-Salon mit geladenen Gästen",
    correct: "halböffentlich",
    explanation:
      "Der Salon ist geschützt und privat organisiert, funktioniert aber als Raum von Austausch, Status und politischer Kommunikation."
  },
  {
    title: "Digitale Lesung in einer offenen Mediathek",
    correct: "öffentlich",
    explanation:
      "Zugang und Adressierung sind grundsätzlich auf ein breites Publikum hin angelegt, auch wenn der Empfang zu Hause stattfindet."
  }
];

const quizItems = [
  {
    statement: "Die Word-Dateien behandeln fast nur Musik; Literatur und Theater spielen dort kaum eine Rolle.",
    answer: false,
    reason:
      "Falsch. Die Sammlungen enthalten ausdrücklich digitale Lesungen, Literaturveranstaltungen, Online-Theater und Essays zu neuen Textöffentlichkeiten."
  },
  {
    statement: "Im Biedermeier wie in der Pandemie gewinnt das Private kulturelle Bedeutung.",
    answer: true,
    reason:
      "Richtig. In beiden Fällen wird der private Raum kulturell aufgeladen, auch wenn die Ursachen unterschiedlich sind."
  },
  {
    statement: "Die Stimmen aus school@home beschreiben nur negative Erfahrungen.",
    answer: false,
    reason:
      "Falsch. Viele Texte nennen auch Vorteile wie mehr Schlaf, mehr Zeit, neue Routinen, Sport, Familie oder selbstständigeres Arbeiten."
  },
  {
    statement: "Digitale Kultur ersetzt laut Quellen das Live-Erlebnis vollständig.",
    answer: false,
    reason:
      "Falsch. Sowohl die Forschungscluster als auch die Schüler*innen-Stimmen betonen Grenzen digitaler Nähe."
  },
  {
    statement: "Mehrere Stimmen im PDF wünschen sich ein Mischmodell aus Präsenz und Fernunterricht.",
    answer: true,
    reason:
      "Richtig. Gerade die Verbindung aus Flexibilität und sozialer Begegnung erscheint vielen als sinnvoll."
  }
];

const prompts = [
  "Erinnere dich an einen Moment, in dem dein Zuhause plötzlich Schule, Bühne oder Treffpunkt wurde.",
  "Welche Freizeitform im Lockdown fühlte sich für dich eher privat an, welche eher gemeinschaftlich?",
  "Warum konnten digitale Formate Nähe schaffen und gleichzeitig das Gefühl von Isolation verstärken?",
  "Worin ähnelt die Pandemie-Kultur dem Biedermeier, und wo wäre ein Vergleich unfair oder zu einfach?"
];

const comparisonTabs = document.querySelector("#comparisonTabs");
const comparisonStage = document.querySelector("#comparisonStage");
const sourceTabs = document.querySelector("#sourceTabs");
const sourceStage = document.querySelector("#sourceStage");
const voiceFilters = document.querySelector("#voiceFilters");
const voiceGrid = document.querySelector("#voiceGrid");
const scenarioGrid = document.querySelector("#scenarioGrid");
const quizList = document.querySelector("#quizList");
const promptList = document.querySelector("#promptList");
const notesField = document.querySelector("#memoryNotes");
const notesStatus = document.querySelector("#notesStatus");
const saveNotesBtn = document.querySelector("#saveNotesBtn");
const exportNotesBtn = document.querySelector("#exportNotesBtn");
const bgVideo = document.querySelector("#bgVideo");
const videoToggle = document.querySelector("#videoToggle");

const notesKey = "pandemie-kultur-erinnerung-notes-v1";

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
      <p class="quote"><strong>Transfer:</strong> ${item.transfer}</p>
    </div>
  `;

  Array.from(comparisonTabs.children).forEach((button) => {
    button.classList.toggle("active", button.dataset.id === item.id);
  });
}

function renderSource(activeId) {
  const item = sourceData.find((entry) => entry.id === activeId) || sourceData[0];
  sourceStage.innerHTML = `
    <div class="source-grid">
      <article>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="label-cloud">
          ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </article>
      <article>
        <h3>Kernaussagen</h3>
        <ul class="compact-list">
          ${item.evidence.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </article>
    </div>
    <div class="source-meta">
      <div class="meta-box">
        <h3>Unterrichtsimpulse</h3>
        <ul class="compact-list">
          ${item.prompts.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </div>
      <div class="meta-box">
        <h3>Bearbeitete Dateien</h3>
        <ul class="compact-list">
          ${item.files.map((file) => `<li><code>${file}</code></li>`).join("")}
        </ul>
      </div>
    </div>
  `;

  Array.from(sourceTabs.children).forEach((button) => {
    button.classList.toggle("active", button.dataset.id === item.id);
  });
}

function renderVoices(filter = "alle") {
  const visibleVoices =
    filter === "alle"
      ? voices
      : voices.filter((voice) => voice.tags.some((tag) => tag.toLowerCase() === filter));

  voiceGrid.innerHTML = visibleVoices
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

function handleScenarioChoice(index, choice, feedbackBox) {
  const item = scenarios[index];
  const correct = item.correct === choice;
  feedbackBox.className = `feedback ${correct ? "correct" : "wrong"}`;
  feedbackBox.innerHTML = `
    <strong>${correct ? "Treffer." : "Noch nicht ganz."}</strong>
    ${item.explanation}
  `;
}

function handleQuizChoice(index, answer, feedbackBox) {
  const item = quizItems[index];
  const correct = item.answer === answer;
  feedbackBox.className = `feedback ${correct ? "correct" : "wrong"}`;
  feedbackBox.innerHTML = `
    <strong>${correct ? "Richtig." : "Falsch."}</strong>
    ${item.reason}
  `;
}

function saveNotes() {
  localStorage.setItem(notesKey, notesField.value);
  notesStatus.textContent = "Notizen lokal gespeichert.";
}

function exportNotes() {
  const blob = new Blob([notesField.value || ""], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "pandemie-erinnerungsnotizen.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  notesStatus.textContent = "Textdatei exportiert.";
}

comparisonData.forEach((item) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "pill";
  button.dataset.id = item.id;
  button.textContent = item.label;
  button.addEventListener("click", () => renderComparison(item.id));
  comparisonTabs.appendChild(button);
});

sourceData.forEach((item) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "pill";
  button.dataset.id = item.id;
  button.textContent = item.label;
  button.addEventListener("click", () => renderSource(item.id));
  sourceTabs.appendChild(button);
});

["alle", "Isolation", "Freizeit", "Bildschirm", "Teams", "Familie", "Mensa"].forEach((label) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "pill";
  button.dataset.id = label.toLowerCase();
  button.textContent = label;
  button.addEventListener("click", () => renderVoices(button.dataset.id));
  voiceFilters.appendChild(button);
});

scenarios.forEach((item, index) => {
  const card = document.createElement("article");
  card.className = "scenario-card";
  const feedback = document.createElement("div");
  feedback.className = "feedback";
  feedback.textContent = "Wähle eine Einordnung.";

  card.innerHTML = `
    <h3>${item.title}</h3>
    <div class="choice-row">
      <button class="quiz-choice" type="button">privat</button>
      <button class="quiz-choice" type="button">halböffentlich</button>
      <button class="quiz-choice" type="button">öffentlich</button>
    </div>
  `;

  card.querySelectorAll(".quiz-choice").forEach((button) => {
    button.addEventListener("click", () => handleScenarioChoice(index, button.textContent, feedback));
  });

  card.appendChild(feedback);
  scenarioGrid.appendChild(card);
});

quizItems.forEach((item, index) => {
  const card = document.createElement("article");
  card.className = "quiz-item";
  const feedback = document.createElement("div");
  feedback.className = "feedback";
  feedback.textContent = "Entscheide dich für richtig oder falsch.";

  card.innerHTML = `
    <h3>${index + 1}. ${item.statement}</h3>
    <div class="choice-row">
      <button class="quiz-choice" type="button">Richtig</button>
      <button class="quiz-choice" type="button">Falsch</button>
    </div>
  `;

  const [trueBtn, falseBtn] = card.querySelectorAll(".quiz-choice");
  trueBtn.addEventListener("click", () => handleQuizChoice(index, true, feedback));
  falseBtn.addEventListener("click", () => handleQuizChoice(index, false, feedback));

  card.appendChild(feedback);
  quizList.appendChild(card);
});

prompts.forEach((prompt) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `<p>${prompt}</p>`;
  promptList.appendChild(card);
});

const savedNotes = localStorage.getItem(notesKey);
if (savedNotes) {
  notesField.value = savedNotes;
  notesStatus.textContent = "Gespeicherte Notizen geladen.";
}

saveNotesBtn.addEventListener("click", saveNotes);
exportNotesBtn.addEventListener("click", exportNotes);

videoToggle.addEventListener("click", async () => {
  try {
    bgVideo.muted = true;
    await bgVideo.play();
    videoToggle.textContent = "Hintergrund läuft";
  } catch {
    videoToggle.textContent = "Autoplay blockiert";
  }
});

bgVideo.addEventListener("playing", () => {
  videoToggle.textContent = "Hintergrund läuft";
});

if (!bgVideo.paused) {
  videoToggle.textContent = "Hintergrund läuft";
}

renderComparison(comparisonData[0].id);
renderSource(sourceData[0].id);
renderVoices("alle");
