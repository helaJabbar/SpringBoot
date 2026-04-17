
document.addEventListener("DOMContentLoaded", () => {

    const steps = document.querySelectorAll(".step");
    const content = document.getElementById("content");

    function setActive(step) {
        steps.forEach(s => s.classList.remove("active"));
        step.classList.add("active");
    }

    function load(page) {
        fetch("pages/" + page + ".html")
            .then(res => res.text())
            .then(data => {
                content.innerHTML = data;

                // 🔥 relancer accordéon après injection HTML
                initAccordion();
                if (page === "quiz") {
                    initQuiz();
                }
            });
    }

    steps.forEach(step => {
        step.addEventListener("click", () => {

            const page = step.dataset.page;

            setActive(step);
            load(page);

        });
    });

});
function initAccordion() {

    const items = document.querySelectorAll(".accordion-item");

    items.forEach(item => {

        const header = item.querySelector(".accordion-header");

        header.onclick = () => {

            // fermer les autres
            items.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                }
            });

            // toggle current
            item.classList.toggle("active");
        };

    });

}

/***************************************************************************************************/
function initQuiz() {
    loadQuestion();
}

console.log("JS chargé");
const quiz = [
    {
        question: "Quelle annotation permet de récupérer un paramètre depuis l’URL (ex: ?id=5) ?",
        answers: ["@PathVariable", "@RequestBody", "@RequestParam", "@Autowired"],
        correct: 2
    },
    {
        question: "Quelle annotation permet de récupérer une valeur directement dans l’URL (ex: /user/5) ?",
        answers: ["@RequestParam", "@PathVariable", "@RequestBody", "@Component"],
        correct: 1
    },
    {
        question: "Quelle annotation est utilisée pour récupérer des données envoyées en JSON dans le body ?",
        answers: ["@RequestParam", "@PathVariable", "@RequestBody", "@Service"],
        correct: 2
    },
    {
        question: "Dans cette URL /users/10, quelle annotation utiliser pour récupérer '10' ?",
        answers: ["@RequestParam", "@RequestBody", "@PathVariable", "@Bean"],
        correct: 2
    },
    {
        question: "Dans cette URL /search?name=Ali, quelle annotation utiliser pour récupérer 'Ali' ?",
        answers: ["@PathVariable", "@RequestParam", "@RequestBody", "@Controller"],
        correct: 1
    },
    {
        question: "Quelle annotation est souvent utilisée avec la méthode POST pour créer une ressource ?",
        answers: ["@PathVariable", "@RequestParam", "@RequestBody", "@GetMapping"],
        correct: 2
    },
    {
        question: "Quelle annotation permet de récupérer plusieurs champs d’un objet (JSON) ?",
        answers: ["@RequestParam", "@PathVariable", "@RequestBody", "@Value"],
        correct: 2
    },
    {
        question: "Quelle annotation est la plus adaptée pour passer un ID dans une API REST propre ?",
        answers: ["@RequestParam", "@PathVariable", "@RequestBody", "@Qualifier"],
        correct: 1
    }, {
        question: "À quoi sert l’annotation @Service dans Spring ?",
        answers: [
            "Définir une entité JPA",
            "Gérer les requêtes HTTP",
            "Contenir la logique métier",
            "Configurer la base de données"
        ],
        correct: 2
    },
    {
        question: "À quoi sert l’annotation @Autowired ?",
        answers: [
            "Créer une API REST",
            "Injecter automatiquement une dépendance",
            "Définir une route HTTP",
            "Créer une table en base de données"
        ],
        correct: 1
    },
    {
        question: "À quoi sert l’annotation @Repository ?",
        answers: [
            "Gérer les appels à la base de données",
            "Afficher une page web",
            "Créer des composants UI",
            "Gérer les sessions utilisateur"
        ],
        correct: 0
    },
    {
        question: "À quoi sert l’annotation @RestController ?",
        answers: [
            "Créer une entité",
            "Gérer les requêtes HTTP et retourner du JSON",
            "Accéder à la base de données",
            "Injecter des dépendances"
        ],
        correct: 1
    },
    {
        question: "À quoi sert l’annotation @RequestMapping ?",
        answers: [
            "Mapper une URL à une méthode",
            "Créer une base de données",
            "Injecter un service",
            "Définir une classe métier"
        ],
        correct: 0
    }
,
        {
            question: "À quoi sert l’annotation @Entity ?",
            answers: [
                "Définir une classe comme une table en base de données",
                "Créer un contrôleur REST",
                "Injecter une dépendance",
                "Gérer les requêtes HTTP"
            ],
            correct: 0
        },
        {
            question: "À quoi sert l’annotation @Table ?",
            answers: [
                "Définir le nom de la table en base",
                "Créer une API",
                "Mapper une URL",
                "Gérer les services"
            ],
            correct: 0
        },
        {
            question: "À quoi sert l’annotation @Id ?",
            answers: [
                "Identifier la clé primaire",
                "Créer une relation entre tables",
                "Injecter une dépendance",
                "Définir une route HTTP"
            ],
            correct: 0
        },
        {
            question: "Quelle annotation permet de générer automatiquement une clé primaire ?",
            answers: [
                "@Auto",
                "@GeneratedValue",
                "@PrimaryKey",
                "@AutoId"
            ],
            correct: 1
        },
        {
            question: "À quoi sert l’annotation @Column ?",
            answers: [
                "Définir une colonne et ses propriétés",
                "Créer une relation entre entités",
                "Mapper une URL",
                "Créer un service"
            ],
            correct: 0
        },
        {
            question: "Quelle annotation permet de créer une relation 'Many-to-One' ?",
            answers: [
                "@OneToOne",
                "@ManyToOne",
                "@OneToMany",
                "@JoinColumn"
            ],
            correct: 1
        },
        {
            question: "Quelle annotation permet de joindre une colonne étrangère (clé étrangère) ?",
            answers: [
                "@ForeignKey",
                "@JoinColumn",
                "@ColumnJoin",
                "@Link"
            ],
            correct: 1
        },
        
        {
            question: "Quelle annotation permet de définir une relation One-to-Many ?",
            answers: [
                "@ManyToOne",
                "@OneToMany",
                "@OneToOne",
                "@ManyToMany"
            ],
            correct: 1
        },
        {
            question: "Que fait @GeneratedValue(strategy = GenerationType.IDENTITY) ?",
            answers: [
                "Génère automatiquement un ID avec auto-incrément",
                "Crée une table",
                "Supprime une colonne",
                "Crée une relation"
            ],
            correct: 0
        },
        {question: "À quoi sert le fichier pom.xml dans un projet Maven ?",
        answers: [
            "Gérer les dépendances et la configuration du projet",
            "Compiler directement le code Java sans Maven",
            "Configurer uniquement Tomcat",
            "Créer automatiquement une base de données"
        ],
        correct: 0
    },
    {
        question: "Que signifie le packaging 'war' dans un pom.xml ?",
        answers: [
            "Une application web déployable sur un serveur comme Tomcat",
            "Un fichier exécutable Java SE",
            "Une bibliothèque Java",
            "Un fichier de configuration Spring uniquement"
        ],
        correct: 0
    },

    {
        question: "Quel rôle joue Tomcat ?",
        answers: [
            "Serveur web et conteneur de servlets Java",
            "Base de données relationnelle",
            "Compilateur Java",
            "IDE de développement"
        ],
        correct: 0
    },
    {
        question: "Que contient principalement un fichier pom.xml ?",
        answers: [
            "Les dépendances, plugins et configuration du projet",
            "Le code source Java",
            "Les pages HTML de l'application",
            "Les logs du serveur Tomcat"
        ],
        correct: 0
    },
    {
        question: "Quel fichier configure généralement Tomcat côté serveur ?",
        answers: [
            "server.xml",
            "pom.xml",
            "application.properties",
            "web.xml uniquement"
        ],
        correct: 0
    },
    
    {
        question: "Quel est le rôle de Tomcat dans une application WAR ?",
        answers: [
            "Déployer et exécuter l'application web",
            "Compiler le code source",
            "Créer le pom.xml",
            "Gérer les dépendances Maven"
        ],
        correct: 0
    }
    ];



let currentQuestion = 0;

function loadQuestion() {
  
  const q = quiz[currentQuestion];

  document.getElementById("question-number").innerText = `Question ${
    currentQuestion + 1 } of ${quiz.length}`;

  document.getElementById("question-text").innerText = q.question;

  let answersHTML = "";

  q.answers.forEach((answer, index) => {
    answersHTML += `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${answer}
            </label><br>
        `;
  });
// restaurer réponse si déjà choisie
if (userAnswers[currentQuestion] !== null) {
    const radios = document.querySelectorAll("input[name='answer']");
    radios[userAnswers[currentQuestion]].checked = true;
}
  document.getElementById("answers").innerHTML = answersHTML;
}

function nextQuestion() {
  if (currentQuestion < quiz.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
  else {
    showResult();
  }
}
function prevQuestion() {

    const selected = document.querySelector("input[name='answer']:checked");
  
    if (selected) {
      userAnswers[currentQuestion] = parseInt(selected.value);
    }
  
    if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion();
    }
  }
  function calculateScore() {
    let score = 0;
  
    quiz.forEach((q, index) => {
      if (userAnswers[index] === q.correct) {
        score++;
      }
    });
  
    return score;
  }
  function showResult() {

    const score = calculateScore();
  
    let resultHTML = `
      <h2>Résultat</h2>
      <p>Votre score : ${score} / ${quiz.length}</p>
      <h3>Correction :</h3>
    `;
  
    quiz.forEach((q, index) => {
  
      const userAnswer = userAnswers[index];
      const correctAnswer = q.correct;
  
      resultHTML += `
        <div style="margin-bottom:10px;">
          <strong>${q.question}</strong><br>
          Votre réponse : ${userAnswer !== null ? q.answers[userAnswer] : "Aucune"}<br>
          Bonne réponse : ${q.answers[correctAnswer]}<br>
        </div>
      `;
    });
  
    document.querySelector(".quiz-container").innerHTML = resultHTML;
  }
  
  function initQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quiz.length).fill(null);
    loadQuestion();
}