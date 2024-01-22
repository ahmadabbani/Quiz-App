
let QuestionElement = document.getElementById('question');
let buttons = document.getElementById('answers');
let next = document.getElementById('next');
let restart = document.getElementById('restart');
let tobeginning = document.getElementById('tobeginning');
let nextcategory = document.getElementById('nextcategory');
let categorytitle = document.getElementById('categorytitle');
let categories = document.getElementById('categories');
let scoreResult = document.getElementById('scoreresult');
let totalscore = document.getElementById('totalscore');


const questions =[ [
  {
    question: "Q1: What is the capital of Silicon Valley?",
    answer: [
      { option: "San Francisco", isCorrect: false },
      { option: "San Jose", isCorrect: true },
      { option: "Palo Alto", isCorrect: false }
    ]
  },
  {
    question: "Q2: What programming language does not use semicolons?",
    answer: [
      { option: "Python", isCorrect: true },
      { option: "JavaScript", isCorrect: false },
      { option: "Java", isCorrect: false }
    ]
  },
  {
    question: "Q3: Which company developed the Windows operating system?",
    answer: [
      { option: "Microsoft", isCorrect: true },
      { option: "Apple", isCorrect: false },
      { option: "Linux", isCorrect: false }
    ]
  },
  {
    question: "Q4: What does HTML stand for?",
    answer: [
      { option: "High-Level Text Language", isCorrect: false },
      { option: "HyperLink and Text Markup", isCorrect: false },
      { option: "HyperText Markup Language", isCorrect: true }
    ]
  },
  {
    question: "Q5: What is the main function of a router in a computer network?",
    answer: [
      { option: "Firewall Protection", isCorrect: false },
      { option: "Wireless Transmission", isCorrect: false },
      { option: "Routing", isCorrect: true }
    ]
  },
  {
    question: "Q6: What is the term for malicious software that demands a ransom?",
    answer: [
      { option: "Ransomware", isCorrect: true },
      { option: "Spyware", isCorrect: false },
      { option: "Malware", isCorrect: false }
    ]
  },
  {
    question: "Q7: What is the primary purpose of JavaScript in web development?",
    answer: [
      { option: "Styling", isCorrect: false },
      { option: "Interactivity", isCorrect: true },
      { option: "Database Management", isCorrect: false }
    ]
  },
  {
    question: "Q8: What is the programming language developed by Google?",
    answer: [
      { option: "Swift", isCorrect: false },
      { option: "Go", isCorrect: true },
      { option: "Ruby", isCorrect: false }
    ]
  },
  {
    question: "Q9: What does CPU stand for?",
    answer: [
      { option: "Computer Processing Unit", isCorrect: false },
      { option: "Central Processor Unit", isCorrect: false },
      { option: "Central Processing Unit", isCorrect: true }
    ]
  },
  {
    question: "Q10: Which company created the Android operating system?",
    answer: [
      { option: "Google", isCorrect: true },
      { option: "Apple", isCorrect: false },
      { option: "Samsung", isCorrect: false }
    ]
  }
],
[
  {
    question: "Q1: What is the capital of France?",
    answer: [
      { option: "Berlin", isCorrect: false },
      { option: "Madrid", isCorrect: false },
      { option: "Paris", isCorrect: true }
    ]
  },
  {
    question: "Q2: Which river is the longest in the world?",
    answer: [
      { option: "Amazon", isCorrect: false },
      { option: "Nile", isCorrect: true },
      { option: "Yangtze", isCorrect: false }
    ]
  },
  {
    question: "Q3: In which mountain range is Mount Everest located?",
    answer: [
      { option: "Andes", isCorrect: false },
      { option: "Rocky Mountains", isCorrect: false },
      { option: "Himalayas", isCorrect: true }
    ]
  },
  {
    question: "Q4: What is the largest desert in the world?",
    answer: [
      { option: "Sahara", isCorrect: false },
      { option: "Gobi", isCorrect: false },
      { option: "Antarctica", isCorrect: true }
    ]
  },
  {
    question: "Q5: Which country is known as the Land of the Rising Sun?",
    answer: [
      { option: "China", isCorrect: false },
      { option: "Japan", isCorrect: true },
      { option: "South Korea", isCorrect: false }
    ]
  },
  {
    question: "Q6: What is the capital of Australia?",
    answer: [
      { option: "Sydney", isCorrect: false },
      { option: "Canberra", isCorrect: true },
      { option: "Melbourne", isCorrect: false }
    ]
  },
  {
    question: "Q7: Which ocean is the largest on Earth?",
    answer: [
      { option: "Atlantic", isCorrect: false },
      { option: "Indian", isCorrect: false },
      { option: "Pacific", isCorrect: true }
    ]
  },
  {
    question: "Q8: What is the official language of Brazil?",
    answer: [
      { option: "Spanish", isCorrect: false },
      { option: "Portuguese", isCorrect: true },
      { option: "French", isCorrect: false }
    ]
  },
  {
    question: "Q9: In which continent is the Sahara Desert located?",
    answer: [
      { option: "Asia", isCorrect: false },
      { option: "Africa", isCorrect: true },
      { option: "South America", isCorrect: false }
    ]
  },
  {
    question: "Q10: What is the capital of Canada?",
    answer: [
      { option: "Toronto", isCorrect: false },
      { option: "Ottawa", isCorrect: true },
      { option: "Vancouver", isCorrect: false }
    ]
  }
],
[
  {
    question: "Q1: In which year did World War I begin?",
    answer: [
      { option: "1914", isCorrect: true },
      { option: "1918", isCorrect: false },
      { option: "1939", isCorrect: false }
    ]
  },
  {
    question: "Q2: Who was the first President of the United States?",
    answer: [
      { option: "Thomas Jefferson", isCorrect: false },
      { option: "George Washington", isCorrect: true },
      { option: "Abraham Lincoln", isCorrect: false }
    ]
  },
  {
    question: "Q3: What famous document begins with the words 'We the People'?",
    answer: [
      { option: "The Magna Carta", isCorrect: false },
      { option: "The Declaration of Independence", isCorrect: false },
      { option: "The U.S. Constitution", isCorrect: true }
    ]
  },
  {
    question: "Q4: Who was the leader of the Soviet Union during World War II?",
    answer: [
      { option: "Vladimir Putin", isCorrect: false },
      { option: "Joseph Stalin", isCorrect: true },
      { option: "Nikita Khrushchev", isCorrect: false }
    ]
  },
  {
    question: "Q5: What event marked the beginning of the Great Depression in the United States?",
    answer: [
      { option: "The Wall Street Crash of 1929", isCorrect: true },
      { option: "The Roaring Twenties", isCorrect: false },
      { option: "The Prohibition Era", isCorrect: false }
    ]
  },
  {
    question: "Q6: In which year did the Titanic sink?",
    answer: [
      { option: "1912", isCorrect: true },
      { option: "1920", isCorrect: false },
      { option: "1931", isCorrect: false }
    ]
  },
  {
    question: "Q7: Who was the first woman to win a Nobel Prize?",
    answer: [
      { option: "Marie Curie", isCorrect: true },
      { option: "Rosa Parks", isCorrect: false },
      { option: "Amelia Earhart", isCorrect: false }
    ]
  },
  {
    question: "Q8: What ancient civilization built the pyramids?",
    answer: [
      { option: "Greece", isCorrect: false },
      { option: "Rome", isCorrect: false },
      { option: "Egypt", isCorrect: true }
    ]
  },
  {
    question: "Q9: Who was the leader of the Allied forces during World War II?",
    answer: [
      { option: "Winston Churchill", isCorrect: true },
      { option: "Adolf Hitler", isCorrect: false },
      { option: "Benito Mussolini", isCorrect: false }
    ]
  },
  {
    question: "Q10: What event led to the start of the Korean War?",
    answer: [
      { option: "The invasion of South Korea by North Korea", isCorrect: true },
      { option: "The dropping of atomic bombs on Japan", isCorrect: false },
      { option: "The Cuban Missile Crisis", isCorrect: false }
    ]
  }
]
];

let CategoryIndex = 0;
let QuestionIndex = 0;
let score = 0;
let totalScore = 0;
let NbOfCatgsPlayed = 1;
let categorieNames = ["Technologie", "Geography", "History"];

SelectCategory = (CatgId) => { 
//regular expression to extract numeric part from the categorie iD
const CategoryId = parseInt(CatgId.replace(/\D/g, ''), 10);
CategoryIndex = CategoryId;
categories.style.display = "none";
categorytitle.style.display = "none";
QuestionElement.style.display = "block"
displayQuestion();
};

  const displayQuestion = () => {
    QandAReset();
        const currentQuestion = questions[CategoryIndex][QuestionIndex];
        QuestionElement.innerHTML = currentQuestion.question;
        currentQuestion.answer.forEach(answer => {
          // Create a button
          const button = document.createElement("button");
          button.innerHTML = answer.option;
           button.classList.add("btn");
           buttons.appendChild(button);
           if(answer.isCorrect){
            button.dataset.isCorrect = answer.isCorrect;
           }
           button.addEventListener("click", SelectAnswer);

        });
      };
       
  const QandAReset = () => {
    next.style.display = "none";
    while(buttons.firstChild){
      buttons.removeChild(buttons.firstChild);
    }
  }
  
  const SelectAnswer = (e) => {
    next.style.display = "block";
    const btnSeleceted = e.target;
    const Correct = btnSeleceted.dataset.isCorrect ==="true";
    if(Correct){
      btnSeleceted.classList.add("correct");
      score++;
    }
    else{
      btnSeleceted.classList.add("incorrect");
    }
    Array.from(buttons.children).forEach(button => {
      if(button.dataset.isCorrect === "true"){
        button.classList.add("correct");
      }
     button.disabled = true;
    });
    QuestionIndex++;
    next.style.display = "block";

    if(QuestionIndex ===  (questions[CategoryIndex].length)){
       totalScore = totalScore + score;
       if(CategoryIndex >=  (questions.length - 1)){
        setTimeout(ScoreShow, 500);
        restart.style.display = "block";
      tobeginning.style.display = "block"; 
      next.style.display = "none";}
       else{
        ScoreShow();
      restart.style.display = "block";
      tobeginning.style.display = "block"; 
      next.style.display = "none";}
      if(CategoryIndex <  (questions.length - 1)){
        nextcategory.style.display = "block";
      }
      else{
        QuestionElement.style.display = "none"
        setTimeout(ShowTotalScore, 500);
        setTimeout(QandAReset, 500);
      }
    };
    
  };
    next.addEventListener("click", ()=>{
        displayQuestion();
    });

    let categoryName;
    const ScoreShow = () => {
      categoryName = categorieNames[CategoryIndex];
      if((score / questions[CategoryIndex].length) * 100 === 100){
      scoreResult.innerHTML = "You answered all questions correctly in" + " " + categoryName + " " +  "&#128522  achieving a  " + (score / questions[CategoryIndex].length) * 100 + "% score!";
      }
      else{
        scoreResult.innerHTML = "You achieved a " + (score / questions[CategoryIndex].length) * 100 + "% score in" + " " + categoryName + ".";
      }

  };
let totalresult = 0;
  const ShowTotalScore = () => {
    totalresult =((totalScore / NbOfCatgsPlayed)* 10);
    let decimalPlaces = totalresult % 1 === 0 ? 0 : 1;

    // Display totalresult with the appropriate number of decimal places
    totalresult = totalresult.toFixed(decimalPlaces);
    if(totalresult == 100){
      totalscore.innerHTML = "Congratulations! Your  Quiz score is a perfect 100! Gold Trophy achieved! <img src='images/Gold.png' id ='master'>";
    }
    else if(totalresult >= 75 && totalresult < 100){
      totalscore.innerHTML = "Great job! Your Total Quiz score is" + " " + totalresult + "%" + "." + " " + " Silver Medal achieved!" + " " +  "Keep up the good work! <img src='images/Silver.png' id ='pro'>";
    }
    else if(totalresult >= 50 && totalresult < 75){
      totalscore.innerHTML ="Nice effort! Your Total Quiz score is" + " " + totalresult + "%" + "." + " " + "Bronze Medal achieved!" + " " + "Keep practicing and improving! <img src='images/Bronze.png' id ='amateur'>";

    }
    else{
      totalscore.innerHTML = "Better luck next time! Your Total Quiz score is" + " " + totalresult + "%" + "." + " " + "Don't give up, keep learning!";
    }

  };

  
  const PlayAgain = () => {
    restart.style.display = "none";
    tobeginning.style.display = "none"; 
    nextcategory.style.display = "none";
    totalScore = totalScore - score;
    QuestionIndex = 0;
    score = 0;
    displayQuestion();
    scoreResult.innerHTML = "";
    totalscore.innerHTML = "";
    QuestionElement.style.display = "block"
   
  };

  const NextCategory = () => {
    restart.style.display = "none";
    tobeginning.style.display = "none"; 
    nextcategory.style.display = "none";
    CategoryIndex++;
    QuestionIndex = 0;
    NbOfCatgsPlayed = NbOfCatgsPlayed + 1;
    scoreResult.innerHTML = "";
    totalscore.innerHTML = "";
    score = 0;
    displayQuestion();

  };

  const chooseCategorie = () => {
    QandAReset();
    CategoryIndex = 0;
    QuestionIndex = 0;
    score = 0;
    totalScore = 0;
    NbOfCatgsPlayed = 1;
    scoreResult.innerHTML = "";
    totalscore.innerHTML = "";
    restart.style.display = "none";
    tobeginning.style.display = "none"; 
    nextcategory.style.display = "none";
    QuestionElement.style.display = "none";
    categorytitle.style.display = "block";
    categories.style.display = "flex";
};

