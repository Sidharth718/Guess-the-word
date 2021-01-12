name_1=localStorage.getItem("player1");
name_2=localStorage.getItem("player2");
score_1=0;
score_2=0;
document.getElementById("player1_name").innerHTML=name_1+" :";
document.getElementById("player2_name").innerHTML=name_2+" :";
document.getElementById("player1_score").innerHTML=score_1;
document.getElementById("player2_score").innerHTML=score_2;
document.getElementById("player_question").innerHTML="Question turn:"+name_1;
document.getElementById("player_answer").innerHTML="Answer turn:"+name_2;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    c1=word.charAt(1);
    length=Math.floor(word.length/2);
    c2=word.charAt(length);
    minus=word.length-1;
    c3=word.charAt(minus);
    remove_1=word.replace(c1,"_");
    remove_2=remove_1.replace(c2,"_");
    remove_3=remove_2.replace(c3,"_");
    q="<h4 id='word_display'>Q."+remove_3+"</h4>";
    i="<br> answer:<input type='text' id='input_check_box'>";
    b="<br> <br> <button class='btn btn-info' onclick='check()'>CHECK</button>";
    r=q+i+b;
    document.getElementById("output").innerHTML=r;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
   get_answer=document.getElementById("input_check_box").value;
   check_answer=get_answer.toLowerCase();

   if(check_answer == word){
       if(answer_turn == "player1"){
           score_1=score_1+1;
        document.getElementById("player1_score").innerHTML=score_1;
       }
       else{
        score_2=score_2+1;
        document.getElementById("player2_score").innerHTML=score_2;
       }
   }
   if(question_turn == "player1"){
       question_turn="player2";
       document.getElementById("player_question").innerHTML="Question turn:"+name_2;
   }
   else{
       question_turn="player1"
       document.getElementById("player_question").innerHTML="Question turn:"+name_1;

   }
   if(answer_turn == "player2"){
       answer_turn="player1"
       document.getElementById("player_answer").innerHTML="Answer turn:"+name_1;
   }
   else{
    answer_turn="player2"
    document.getElementById("player_answer").innerHTML="Answer turn:"+name_2;
   }
   document.getElementById("output").innerHTML="";
}
