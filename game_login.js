function startgame(){
    var player_1=document.getElementById("Player_1_name").value;
    var player_2=document.getElementById("Player_2_name").value;
    localStorage.setItem("player1",player_1);
    localStorage.setItem("player2",player_2);
    window.location="game_page.html";

}