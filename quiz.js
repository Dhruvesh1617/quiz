var readlineSync=require("readline-sync")
var score=0;
var highscore=
[
  {
  name:"momo",
  score:"5",
},
{
  name:"atreyee",
  score:"3"
}
]
var Username=readlineSync.question("what's your name? ");
var identity=readlineSync.question("Welcome " + Username +" DO you Know Dhruv ? ");
function play(question,answer)
{
  useranswer=readlineSync.question(question);
  if(useranswer.toUpperCase()===answer.toUpperCase())
  {
    console.log("you are right")
    score+=1;
  }
  else
  {
    console.log("you are wrong")
  }
  console.log("score is "+score)
  console.log("------")
}
var questions=[
  {
    question:"Who is dhruv's favourite superhero? ",
    answer:"Thor",
  },
  {
    question:"which chocolate dhruv loves most? ",
    answer:"Kitkat",
  }
  ,
  {
    question:"dhruv's favourite Movie of Bollywood? ",
    answer:"YJHD"
  },
  {
    question:"which sport dhruv likes to play most?  ",
    answer:"Cricket"
  },
  {
    question:"dhruv's favourite food cuisine? ",
    answer:"Chinese"
  }
]
//loop for array of questions
for(var i=0;i<questions.length;i++)
{
  var currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer);
}


for(var j=0;j<highscore.length;j++)
{
 score_data=highscore[j];
if(score>score_data.score)
{
console.log("YAY "+ Username  + "  ur FINAL SCORE IS "+score)
}
else
{
  console.log("the highest scorer is",score_data.name);
  console.log("the score is",score_data.score);
}
}