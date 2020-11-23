window.addEventListener('load', function () {
  init();
});

function init() {
  const artyom = new Artyom();
  const commands = [
    { //StartUp
      indexes: [ //frage 1 läuft
        'was erwartet mich heute',
        'Was steht an heute',
      ],
      action: function () { //antwort 1
        const answer = 'heute erwartet dich Interface Design um 9 Uhr 45';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },

    {//gegenfrage 1.1 läuft
      indexes: ['Wo findet IFD statt'],
      action: function () {
        const answer = 'im alfaview-Raum DM-05';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },

    { //gegenfrage 1.2 läuft
      indexes: ['Ist für IFD ein Praktikum eingeplant'],
      action: function () {
        const answer = 'Ja, ein Praktikum ist laut Stundenplan angesetzt';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },

    { //gegenfrage 1.3 läuft 
      indexes: ['Sonstige Veranstaltungen heute'],
      action: function () {
        const answer = 'Ja, Projektstudium ab 13 Uhr 30';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },
//------------------
    { //frage 2 läuft
      indexes: ['Irgendwelche Abgaben in den nächsten Tagen'],
      action: function () {
        const answer =
          'In 3 Tagen ist die Deadline für die Aufgabe 5 in Interface Design. Soll ich dir eine Erinnnerung erstellen?';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },

    { //gegenfrage 2.1 läuft
      indexes: ['Ja bitte erinnere mich heute Mittag'],
      action: function () {
        const answer =
          'Okay, ich werde dich erinnern Diggi';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },
//------------------
    { //frage 3 läuft
      indexes: ['Habe ich neue Mails'],
      action: function () {
        const answer =
          'Ja, du hast eine neue Mail.';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },

    { //gegenfrage 3.1 läuft
      indexes: ['Von wem'],
      action: function () {
        const answer =
          'Die Mail kommt von Prof. Hottong, der Betreff lautet "Streamingcamp fällt aus"';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },

    { //gegenfrage 3.2 läuft
      indexes: ['Oh super Lies mir die Mail vor'],
      action: function () {
        const answer =
          'Hallo liebe Studierende. Ich mache es kurz - aufgrund von Corona wird das Streamingcamp ausfallen. Nähere Infos dann in der Vorlesung morgen. Beste Grüße, Prof. Hottong';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },
//------------------
    { //frage 4 error
      indexes: ['Welcher Dozent hält interfacedesign'],
      action: function () {
        const answer =
          'Interface Design wird von Prof. Dr. Rausch gehalten';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },
//------------------
    { //frage 5 läuft
      indexes: ['Was gibt es heute in der Mensa'],
      action: function () {
        const answer =
          'Heute gibt es Putengeschnetzeltes oder Spaghetti Carbonara. Soll ich dich für ein Essen anmelden';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },

    { //gegenfrage 5.1 läuft
      indexes: ['Ja bitte'],
      action: function () {
        const answer = 'Gern. Für welches Essen soll ich dich anmelden';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },

    { //gegenfrage 5.2 läuft
      indexes: ['Bitte für Spaghetti Carbonara'],
      action: function () {
        const answer = 'Okay. Du bist angemeldet. Die Mensa ist ab 11 Uhr 30 geöffnet';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },

//------------------
    { //frage 6 läuft
      indexes: ['hat die Bibliothek heute geöffnet'],
      action: function () {
        const answer =
          'ja, die Bibliothek hat heute von 7 Uhr bis 20 Uhr geöffnet';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },

    { //gegenfrage 6.1 error
      indexes: ['Cool Weißt du ob das Mein Kampf von Adolf Hitler verfügbar ist'],
      action: function () {
        const answer = 'Ja. Das Buch ist momentan noch ausleihbar';
        artyom.say(answer);
        createNewMessageBox(answer, 'userOutput');
      },
    },

    

    

  ];

  document.querySelector('.startButton').addEventListener('click', () => {
    document
      .querySelector('.startScreen')
      .classList.remove('active', 'animate__animated', 'animate__fadeIn');
    document
      .querySelector('.conversation')
      .classList.add('active', 'animate__animated', 'animate__fadeIn');
    artyom.addCommands(commands);
    function startContinuousArtyom() {
      artyom.fatality();
      setTimeout(function () {
        artyom
          .initialize({
            lang: 'de-DE',
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true,
          })
          .then(function () {
            console.log('Ready!');
          });
      }, 250);
    }
    startContinuousArtyom();
    const answer =
      'Hey Benni, ich hoffe du hast gut schlafen. Wie geht es dir heute';
    artyom.say(answer);
    createNewMessageBox(answer, 'userOutput');
    artyom.redirectRecognizedTextOutput(function (recognized, isFinal) {
      if (isFinal) {
        createNewMessageBox(recognized, 'userInput');
      } else {
        console.log(recognized);
      }
    });
  });

  document.querySelector('.endButton').addEventListener('click', () => {
    document
      .querySelector('.startScreen')
      .classList.add('active', 'animate__animated', 'animate__fadeIn');
    document
      .querySelector('.conversation')
      .classList.remove('active', 'animate__animated', 'animate__fadeIn');
    artyom.say('Bis bald Benni');
    artyom.dontObey();
    document.querySelector('.conversation__messages').innerHTML = '';
    console.log('Closed!');
  });
}

function createNewMessageBox(text, typeOfInput) {
  const creatElem = document.createElement('section');
  const addText = document.createTextNode(text);
  const addClass = creatElem.classList.add(
    typeOfInput,
    'animate__animated',
    'animate__fadeIn'
  );
  creatElem.append(addText);
  document.querySelector('.conversation__messages').appendChild(creatElem);
  document.querySelector('.conversation__messages').lastElementChild.scrollIntoView();
}