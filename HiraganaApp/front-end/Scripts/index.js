/*
 * Note: in the middle of learning Jquery on
 * "The complete web developed 2.0"
 * first time to use it in a project
 */
$(document).ready(function(){
/*
 * Function gets innerText value of td
 * then passes it to play functin and
 * plays audio element with matching id.
 * I was able to cut down lots of html
 * with this
 */
  $(".hiraganaCharttd").click(function(){
    function play(element){
       let audio = document.getElementById(element);
       audio.play();
      }
      play(this.innerText);
    });

  /*
   * Credit for the following belongs to
   * https://www.youtube.com/watch?v=gvGb5Z0yMFY
   * I was truely stuck understang the $.post syntax
   * without this man. W3 schools have poor examples
   */
  //jQuery function to post form data to php file
  $("#regButton").click(function(){
    //var data = $("#registerForm").serializeArray();
      $.post($("#registerForm").attr("action"), $("#registerForm :input").serializeArray(), function(info){
        alert(info);
        clearInput();
    });
      $("#form").hide();
      $("#quizTable").show();
       generateQuiz();
  });

  //function to clear the input values of the form upon submission
  function clearInput(){
    $("#registerForm :input").each (function() {
      $(this).val('');
    });
  }

  //jQuery function to prevent re-direction to the php file
   $("#registerForm").submit(function(){
    return false;
  });

  /*
   *100% this is wrong, because it sould be a get method
   * Used here to display username and quiz score
   */
  $("#signInButton").click(function(){
    //var data = $("#registerForm").serializeArray();
      $.post($("#signInForm").attr("action"), $("#signInForm :input").serializeArray(), function(info){
        $("#signedIn").html(info);
        clearSignInInput();
    });
      $("#form").hide();
      $("#quizTable").show();
       generateQuiz();
  });
  //Empty form fields
  function clearSignInInput(){
    $("#signInForm :input").each (function() {
      $(this).val('');
    });
  }

  //EPrevent re-direction of the sign in form
  $("#signInForm").submit(function(){
   return false;
 });
});//End of Jquery



//Function to show one element and hide all others
function showHide(show, hide1, hide2, hide3){
  let s = document.getElementById(show);
  let h1 = document.getElementById(hide1);
  let h2 = document.getElementById(hide2);
  let h3 = document.getElementById(hide3);
  s.style.display = '';
  h1.style.display = 'none';
  h2.style.display = 'none';
  h3.style.display = 'none';
}
//Variables to track the quiz score and current question
let score = 0;
let question = 0;

//Table of all hiragana and romaji equivalent
let hashOfAll = {'../Media/Static_Characters/a.png':'a',
                     '../Media/Static_Characters/ka.png':'ka',
                     '../Media/Static_Characters/sa.png':'sa',
                     '../Media/Static_Characters/ta.png':'ta',
                     '../Media/Static_Characters/na.png':'na',
                     '../Media/Static_Characters/ha.png':'ha',
                     '../Media/Static_Characters/ma.png':'ma',
                     '../Media/Static_Characters/ya.png':'ya',
                     '../Media/Static_Characters/ra.png':'ra',
                     '../Media/Static_Characters/wa.png':'wa',
                     '../Media/Static_Characters/i.png':'i',
                     '../Media/Static_Characters/ki.png':'ki',
                     '../Media/Static_Characters/shi.png':'shi',
                     '../Media/Static_Characters/chi.png':'chi',
                     '../Media/Static_Characters/ni.png':'ni',
                     '../Media/Static_Characters/hi.png':'hi',
                     '../Media/Static_Characters/mi.png':'mi',
                     '../Media/Static_Characters/ri.png':'ri',
                     '../Media/Static_Characters/u.png':'u',
                     '../Media/Static_Characters/ku.png':'ku',
                     '../Media/Static_Characters/su.png':'su',
                     '../Media/Static_Characters/tsu.png':'tsu',
                     '../Media/Static_Characters/nu.png':'nu',
                     '../Media/Static_Characters/hu.png':'hu',
                     '../Media/Static_Characters/mu.png':'mu',
                     '../Media/Static_Characters/yu.png':'yu',
                     '../Media/Static_Characters/ru.png':'ru',
                     '../Media/Static_Characters/e.png':'e',
                     '../Media/Static_Characters/ke.png':'ke',
                     '../Media/Static_Characters/se.png':'se',
                     '../Media/Static_Characters/te.png':'te',
                     '../Media/Static_Characters/ne.png':'ne',
                     '../Media/Static_Characters/he.png':'he',
                     '../Media/Static_Characters/me.png':'me',
                     '../Media/Static_Characters/re.png':'re',
                     '../Media/Static_Characters/o.png':'o',
                     '../Media/Static_Characters/ko.png':'ko',
                     '../Media/Static_Characters/so.png':'so',
                     '../Media/Static_Characters/to.png':'to',
                     '../Media/Static_Characters/no.png':'no',
                     '../Media/Static_Characters/ho.png':'ho',
                     '../Media/Static_Characters/mo.png':'mo',
                     '../Media/Static_Characters/ro.png':'ro',
                     '../Media/Static_Characters/yo.png':'yo',
                     '../Media/Static_Characters/wo.png':'wo'};

/*
 * Below is smaller sets of the hiragana to use as the training Game
 */
let hashOfSetOne = {'../Media/Static_Characters/a.png':'a',
                    '../Media/Static_Characters/ka.png':'ka',
                    '../Media/Static_Characters/sa.png':'sa',
                    '../Media/Static_Characters/ta.png':'ta',
                    '../Media/Static_Characters/na.png':'na',
                    '../Media/Static_Characters/ha.png':'ha',
                    '../Media/Static_Characters/ma.png':'ma',
                    '../Media/Static_Characters/ya.png':'ya',
                    '../Media/Static_Characters/ra.png':'ra',
                    '../Media/Static_Characters/wa.png':'wa' };

let hashOfSetTwo = {'../Media/Static_Characters/i.png':'i',
                    '../Media/Static_Characters/ki.png':'ki',
                    '../Media/Static_Characters/shi.png':'shi',
                    '../Media/Static_Characters/chi.png':'chi',
                    '../Media/Static_Characters/ni.png':'ni',
                    '../Media/Static_Characters/hi.png':'hi',
                    '../Media/Static_Characters/mi.png':'mi',
                    '../Media/Static_Characters/ri.png':'ri'};

let hashOfSetThree = {'../Media/Static_Characters/u.png':'u',
                      '../Media/Static_Characters/ku.png':'ku',
                      '../Media/Static_Characters/su.png':'su',
                      '../Media/Static_Characters/tsu.png':'tsu',
                      '../Media/Static_Characters/nu.png':'nu',
                      '../Media/Static_Characters/hu.png':'hu',
                      '../Media/Static_Characters/mu.png':'mu',
                      '../Media/Static_Characters/yu.png':'yu',
                      '../Media/Static_Characters/ru.png':'ru'};

let hashOfSetFour = {'../Media/Static_Characters/e.png':'e',
                     '../Media/Static_Characters/ke.png':'ke',
                     '../Media/Static_Characters/se.png':'se',
                     '../Media/Static_Characters/te.png':'te',
                     '../Media/Static_Characters/ne.png':'ne',
                     '../Media/Static_Characters/he.png':'he',
                     '../Media/Static_Characters/me.png':'me',
                     '../Media/Static_Characters/re.png':'re'};

let hashOfSetFive = {'../Media/Static_Characters/o.png':'o',
                     '../Media/Static_Characters/ko.png':'ko',
                     '../Media/Static_Characters/so.png':'so',
                     '../Media/Static_Characters/to.png':'to',
                     '../Media/Static_Characters/no.png':'no',
                     '../Media/Static_Characters/ho.png':'ho',
                     '../Media/Static_Characters/mo.png':'mo',
                     '../Media/Static_Characters/ro.png':'ro',
                     '../Media/Static_Characters/yo.png':'yo',
                     '../Media/Static_Characters/wo.png':'wo'};

  //Arrays to hold the images and names seperatly
  images = new Array();
  names = new Array();
  let randFour = Math.floor((Math.random() * 4));

  //changes the set of questions that appear in the quiz
  function changeSet(x){
    images = new Array();
    names = new Array();

    let setToUse =hashOfAll
    if(x==0){
       setToUse = hashOfAll;
    }
    if(x==1){
       setToUse = hashOfSetOne;
    }
    if(x==2){
       setToUse = hashOfSetTwo;
    }
    if(x==3){
       setToUse = hashOfSetThree;
    }
    if(x==4){
       setToUse = hashOfSetFour;
    }
    if(x==5){
        setToUse = hashOfSetFive;
    }
    //console.log(x);
    for(let key in setToUse){
     images.push(key);
     names.push(setToUse[key]);
   }
}

/* Here I generate four random numbers and
 * place them in a small array of 4 and then by
 * creating four new image objects I can
 * append the four images at these indexes
 * to my quizTable, I also take 4 romaji
 * equivalent and by generating a random
 * num between 0-3 I choose one of the romaji
 * and add it to the table. This ensures the
 * correct answer is in a different postition
 * each time
 */
function generateQuiz(){

  if(question==0){
    question = 1;
  //These will be the small arrays filled with 4 hiragana/romaji
  questionHiragana = new Array();
  questionRomaji = new Array();

    //Below is how I get my hiragana/romaji at random
   rand = Math.floor((Math.random() * (images.length)));
   questionHiragana[0] = new Image();
   questionHiragana[0].src = images[rand];
   questionRomaji[0] = names[rand];

   rand = Math.floor((Math.random() * (images.length)));
   questionHiragana[1] = new Image();
   questionHiragana[1].src = images[rand];
   questionRomaji[1] = names[rand];

   rand = Math.floor((Math.random() * (images.length)));
   questionHiragana[2] = new Image();
   questionHiragana[2].src = images[rand];
   questionRomaji[2] = names[rand];

   rand = Math.floor((Math.random() * (images.length)));
   questionHiragana[3] = new Image();
   questionHiragana[3].src = images[rand];
   questionRomaji[3] = names[rand];

   randFour = Math.floor((Math.random() * 4));
   let randomRomaji = questionRomaji[randFour];

     //Fill the document with the images and answer
    document.getElementById("1").appendChild(questionHiragana[0]);
    document.getElementById("2").appendChild(questionHiragana[1]);
    document.getElementById("3").appendChild(questionHiragana[2]);
    document.getElementById("4").appendChild(questionHiragana[3]);
    document.getElementById("question").innerHTML="Romaji: \"" + randomRomaji +"\"";
    document.getElementById("score").innerHTML="Question: "+ question + "/10 <br>" +"Score: " +score+"/10";
  }
  else{
    console.log("Do nothing");
  }
}

/*
 * This function works on the same precedence as the previous
 * the reason for having so much code is that I kept getting multiple
 * images in each td of my quiz table when I just simply called the
 * generateQuiz function again. Thsi changes the quiz to alter the
 * question/ answer aspect from guessing the hiragana to guessing
 * the romaji depending on whether the question number is an even
 * or odd number.
 */
function answerQuestion(answer){
  //If the user has completed 10 questions
  if(question==10){
    alert("Game over, your score was: " + score+"/10");
    question=1;
    location.reload();//Should probably be taken out
  }
  else{
    /*
     *Answer here in fact brings a number from the doc,
     *I found this out by fluke using the console
     *as I had been trying 'answer.value' and 'document.getElementById(answer).value',
     *I had used the innerHTML originally (which i had set as 1,2,3,4)
     *because I was only using images as answers but
     *when I wanted to have romaji as answers I had to add them as text by modifying
     *the inner html. Where as images can be appended.
     */
    let checkCorrect = answer;
    //console.log (checkCorrect);
    //checkCorrect is -1 because the arrays are index 0-3
    if ((checkCorrect-1) != randFour){
      //console.log("False");
      question++;
    }else{
       console.log("True");
       score++;
       question++;
    }

      //Below is how I get my hiragana/romaji at random
     rand = Math.floor((Math.random() * (images.length)));
     questionHiragana[0].src = images[rand];
     questionRomaji[0] = names[rand];

     rand = Math.floor((Math.random() * (images.length)));
     questionHiragana[1].src = images[rand];
     questionRomaji[1] = names[rand];

     rand = Math.floor((Math.random() * (images.length)));
     questionHiragana[2].src = images[rand];
     questionRomaji[2] = names[rand];

     rand = Math.floor((Math.random() * (images.length)));
     questionHiragana[3].src = images[rand];
     questionRomaji[3] = names[rand];

     randFour = Math.floor((Math.random() * 4));

     //Adds 4 hiragana images and one romaji to try guess
    if(question%2!=0){
      let random = questionRomaji[randFour];
      document.getElementById("1").innerHTML=1;
      document.getElementById("2").innerHTML=2;
      document.getElementById("3").innerHTML=3;
      document.getElementById("4").innerHTML=4;
      document.getElementById("1").appendChild(questionHiragana[0]);
      document.getElementById("2").appendChild(questionHiragana[1]);
      document.getElementById("3").appendChild(questionHiragana[2]);
      document.getElementById("4").appendChild(questionHiragana[3]);
      document.getElementById("question").innerHTML= "Romaji: \"" + random+"\"";
      document.getElementById("score").innerHTML="Question: "+ question + "/10 <br>" +"Score: " +score+"/10";

    }else{
      //Adds 4 romaji texts and one hiragana to try guess
      let random = questionHiragana[randFour];
      document.getElementById("1").innerHTML=(questionRomaji[0]);
      document.getElementById("2").innerHTML=(questionRomaji[1]);
      document.getElementById("3").innerHTML=(questionRomaji[2]);
      document.getElementById("4").innerHTML=(questionRomaji[3]);
      document.getElementById("question").innerHTML= "";
      document.getElementById("question").appendChild(random);
      document.getElementById("score").innerHTML="Question: "+ question + "/10 <br>" +"Score: " +score+"/10";
    }
  }
}

//trainingTable javascript
//Can't be left unassigned
let set = 0;

/*
 * These functions are all identical essentially,
 * the only difference is the set of characters
 * that the source hiragani and romaji from
 * They create an array of one image (As I'm commenting
 * i realize there was probably no need for that)
 * an its corresponding romaji from the chosen set
 * and appends the random image to the traing table and
 * adds the random romaji text too.
 */
function setOne() {
  document.getElementById("flashCard").innerHTML = null;
  let image = new Image();
  let images = new Array();
  let names = new Array();

  for(let key in hashOfSetOne){
    images.push(key);
    names.push(hashOfSetOne[key]);
  }
  //console.log(images.length)
  let rand = Math.floor((Math.random() * (images.length)));
  image.src = images[rand]
  document.getElementById("flashCard").appendChild(image);
  document.getElementById("cardName").innerHTML=names[rand];
  //I assign set the value here so when I use the nextCard function
  //the card will be from the same set unless another has been chosen
  set = 1;
}

function setTwo() {

  document.getElementById("flashCard").innerHTML = null;
  let image = new Image();
  let images = new Array();
  let names = new Array();

  for(let key in hashOfSetTwo){
    images.push(key);
    names.push(hashOfSetTwo[key]);
  }
  //console.log(images.length)
  let rand = Math.floor((Math.random() * (images.length)));
  image.src = images[rand]
  document.getElementById("flashCard").appendChild(image);
  document.getElementById("cardName").innerHTML=names[rand];
  set = 2;
}

function setThree() {

  document.getElementById("flashCard").innerHTML = null;
  let image = new Image();
  let images = new Array();
  let names = new Array();

  for(let key in hashOfSetThree){
    images.push(key);
    names.push(hashOfSetThree[key]);
  }
  //console.log(images.length)
  let rand = Math.floor((Math.random() * (images.length)));
  image.src = images[rand]
  document.getElementById("flashCard").appendChild(image);
  document.getElementById("cardName").innerHTML=names[rand];
  set = 3;
}

function setFour() {

  document.getElementById("flashCard").innerHTML = null;
  let image = new Image();
  let images = new Array();
  let names = new Array();

  for(let key in hashOfSetFour){
    images.push(key);
    names.push(hashOfSetFour[key]);
  }
  //console.log(images.length)
  let rand = Math.floor((Math.random() * (images.length)));
  image.src = images[rand]
  document.getElementById("flashCard").appendChild(image);
  document.getElementById("cardName").innerHTML=names[rand];
  set = 4;
}

function setFive() {

  document.getElementById("flashCard").innerHTML = null;
  let image = new Image();
  let images = new Array();
  let names = new Array();

  for(let key in hashOfSetFive){
    images.push(key);
    names.push(hashOfSetFive[key]);
  }
  //console.log(images.length)
  let rand = Math.floor((Math.random() * (images.length)));
  image.src = images[rand]
  document.getElementById("flashCard").appendChild(image);
  document.getElementById("cardName").innerHTML=names[rand];
  set = 5;
}

/*
 * this if for the next card button in the training
 * element, it ensures that the next card comes from the same
 * set by calling its particular method.
 */
function nextCard(){
  if(set==1){
    setOne();
  }
  if(set==2){
    setTwo();
  }
  if(set==3){
    setThree();
  }
  if(set==4){
    setFour();
  }
  if(set==5){
    setFive();
  }
}
