//console.log(questions.length);

let currentQuestion =0;
let correctAnswers = 0;


showQuestion();



document.querySelector('.scoreArea button').addEventListener('click',reset)

function showQuestion(){
    if(questions[currentQuestion]){

        let q = questions[currentQuestion];
        //console.log(q.question);

      

        let pct =  Math.floor( (currentQuestion/ questions.length) * 100);

        document.querySelector('.progress-bar').style.width = `${pct}%`;

        

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';


        document.querySelector('.question').innerHTML = q.question;

        document.querySelector('.options').innerHTML = '';

        let optionsHtml = '';

        for(let i in q.options){
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span> ${q.options[i]}</div>`
        }


        document.querySelector('.options').innerHTML = optionsHtml;


        document.querySelectorAll('.options .option').forEach(item =>{
            item.addEventListener('click', optionClickEvent)
        })

    }else{
        //acabaram as questoes;

        finishQuiz()
    }
}


function optionClickEvent(e){
  //  console.log(e.target.getAttribute('data-op'))

  let clickOption = parseInt( e.target.getAttribute('data-op'))

  if(questions[currentQuestion].answer === clickOption){

        console.log('acertou');
        correctAnswers++;

  }else{
      console.log('errou')
  }

  currentQuestion++;
  showQuestion();
}

function finishQuiz(){

    let points = Math.floor( (correctAnswers / questions.length) *100);




    if(points < 30){
        document.querySelector('.scoreText1').innerHTML = 'Pessimo';
        document.querySelector('.scorePct').style.color = '#ff0000';
    }else if(points >= 30 && points < 70){
        document.querySelector('.scoreText1').innerHTML = 'Bom';
        document.querySelector('.scorePct').style.color = '#ffff00';

    }else if(points >= 70 ){
        document.querySelector('.scoreText1').innerHTML = 'Parabens';
        document.querySelector('.scorePct').style.color = '#blue';
    }




    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Voce respondeu ${questions.length} e acertou ${correctAnswers} questões`

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';  
    document.querySelector('.progress-bar').style.width = `100%`;  

}



function reset(){
    correctAnswers =0;
    currentQuestion = 0;
    showQuestion();
}