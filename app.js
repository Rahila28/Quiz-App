


var questionArray=[
    {
       id: 1, 
    
    question:" Who is the Web-World Wide Web?",
    answer:"Sir Tim berners-lee",
    options:[
        "Sir John timoptions",
        "Sir Tim berners-lee",
        "Sir Thomas -lee",
        "Sir  ritchie-lee"
    ]

},


{
    id: 2,
    
    question:"Who is the Founder of google?",
    answer: "Larry Page",
    options:[
        "Lee Byung-chul",
        "W.Rae Young",
        "Larry Page",
        "DennisRitchie"
    ]
    

},

{
    id: 3,
    
    question:"Who is the first inventor moblie phone?",
    answer: "Martin Cooper",
    options:[
        "Martin Cooper",
        "W.Rae Young",
        "James Gosling",
        "DennisRitchie"
    ]
},
{
    id: 4,
    
    question:"Who is the father of Smartphone?",
    answer: "Andy Rubinsa",
    options:[
        "Martin Cooper",
        "Rob Stothard",
        "Steve jobs",
        "Andy Rubinsa"
    ]
},
{
    id: 5,
    
    question:"Who is the Internet?",
    answer: "Robert E. Kahn",
    options:[
        "Guido Van Rossum",
        "Brenden Eich",
        "Robert E. Kahn",
        "Ritchie"
    ]
}





]




 var question_count =0;
 var score = 0;

 function next(){
    question_count++;
    console.log("inside next");
removeActiveClass();
    showQuestion()
   

}

function showQuestion(){
    //show question
    var questionElement = document.getElementById("questionElement");
    
    questionElement.innerHTML= questionArray[question_count].question;
    // show option
    var optionElement = document.getElementsByClassName("option");
    for (var i = 0; i < optionElement.length; i++){
        optionElement[i].innerHTML=questionArray[question_count].options[i];
       
    }

}
    function putActiveClass(e){
        removeActiveClass()
        e.classList.add("active")
    }

    function removeActiveClass(){
        console.log("chk");
        var active = document.getElementsByClassName("active")
        for(var i=0; i < active.length; i++){
            active[i].classList.remove("active")
        }
    
    }



    
    




function nextQuestion(){
   // var nextBtn =document.getElementById("nextBtn")
if(question_count < questionArray.length-1)
{
    console.log("inside if");
   validate()
   question_count++;
   
   showQuestion()
   
   removeActiveClass();
}   
else
{
    console.log("inside else");
    validate()
    removeActiveClass();
    var b = document.getElementsByClassName("btn");
    b.disabled = true;
    printAns();
}
    

}

function validate(){
    console.log("Checking for score")

    var active = document.getElementsByClassName("active")
    console.log(active[0].innerHTML)
    console.log(questionArray[question_count].answer)

    if (active[0].innerHTML == questionArray[question_count].answer){
        score += 10;
        console.log("S"+score)

    }
}

function printAns()
{
    var p=document.getElementById("para");
    p.innerHTML="<h1> Your Score: "+ score+"</h1>";
}