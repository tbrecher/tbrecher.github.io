var player_name = localStorage.getItem('player_name');
var result = "";
var p_name = localStorage.getItem("player_name");
var feedback_content = "";

if(localStorage.getItem("game_count" != "")){
  var game_count = localStorage.getItem("game_count");
  localStorage.setItem("game_count", game_count);
}
else{
  var game_count = 0;
  localStorage.setItem("game_count", game_count);
}
if(localStorage.getItem("win_count" != "")){
  var win_count = localStorage.getItem("win_count");
  localStorage.setItem("win_count", win_count);
}
else{
  var win_count = 0;
  localStorage.setItem("win_count", win_count);
}
if(localStorage.getItem("lose_count" != "")){
  var lose_count = localStorage.getItem("lose_count");
  localStorage.setItem("lose_count", lose_count);
}
else{
  var lose_count = 0;
  localStorage.setItem("lose_count", lose_count);
}
if(localStorage.getItem("tie_count" != "")){
  var tie_count = localStorage.getItem("tie_count");
  localStorage.setItem("tie_count", tie_count);
}
else{
  var tie_count = 0;
  localStorage.setItem("tie_count", tie_count);
}
if(localStorage.getItem("player_rock_count" != "")){
  var player_rock_count = localStorage.getItem("player_rock_count");
  localStorage.setItem("player_rock_count", player_rock_count);
}
else{
  var player_rock_count = 0;
  localStorage.setItem("player_rock_count", player_rock_count);
}
if(localStorage.getItem("player_paper_count" != "")){
  var player_paper_count = localStorage.getItem("player_paper_count");
  localStorage.setItem("player_paper_count", player_paper_count);
}
else{
  var player_paper_count = 0;
  localStorage.setItem("player_paper_count", player_paper_count);
}
if(localStorage.getItem("player_scissors_count" != "")){
  var player_scissors_count = localStorage.getItem("player_scissors_count");
  localStorage.setItem("player_scissors_count", player_scissors_count);
}
else{
  var player_scissors_count = 0;
  localStorage.setItem("player_scissors_count", player_scissors_count);
}
if(localStorage.getItem("opponent_rock_count" != "")){
  var opponent_rock_count = localStorage.getItem("opponent_rock_count");
  localStorage.setItem("opponent_rock_count", opponent_rock_count);
}
else{
  var opponent_rock_count = 0;
  localStorage.setItem("opponent_rock_count", opponent_rock_count);
}
if(localStorage.getItem("opponent_paper_count" != "")){
  var opponent_paper_count = localStorage.getItem("opponent_paper_count");
  localStorage.setItem("opponent_paper_count", opponent_paper_count);
}
else{
  var opponent_paper_count = 0;
  localStorage.setItem("opponent_paper_count", opponent_paper_count);
}
if(localStorage.getItem("opponent_scissors_count" != "")){
  var opponent_scissors_count = localStorage.getItem("opponent_scissors_count");
  localStorage.setItem("opponent_scissors_count", opponent_scissors_count);
}
else{
  var opponent_scissors_count = 0;
  localStorage.setItem("opponent_scissors_count", opponent_scissors_count);
}

updateStats();
if(!p_name){
  showOrNot(document.getElementById("enter_name"), true);
}
else{
  updateNames(p_name);
  showOrNot(document.getElementById("throw_choice"), true);
}

document.getElementById("enter_name_button").addEventListener("click", function(){
  p_name = document.getElementById("enter_name_input").value;
  if(p_name == ""){
    feedback.classList.remove("good");
    feedback.classList.add("bad");
    feedback_content = "Please Enter a Name to Continue.";
    updateFeedback();
  }
  else{
    localStorage.setItem("player_name", p_name);
    showOrNot(document.getElementById("enter_name"), false);
    showOrNot(document.getElementById("throw_choice"), true);
    updateNames(p_name);
    feedback.classList.remove("bad");
    feedback.classList.add("good");
    feedback_content = "Name Successfully Saved!";
    updateFeedback();
  }
});

function updateNames(name){
  console.log(name);
  var name_spots = document.getElementsByClassName("player_name_span");
  for(var i = 0; i<name_spots.length; i++){
    console.log(name_spots[i]);
    name_spots[i].innerHTML = name;
  }
}

function showOrNot(div_element, show){
  if(show && div_element.classList.contains("hidden")){
    div_element.classList.remove("hidden");
    div_element.classList.add("visible");
  }
  else if(!show && div_element.classList.contains("visible")){
    div_element.classList.remove("visible");
    div_element.classList.add("hidden");
  }
}

document.getElementById("throw_choice_button").addEventListener("click", function(){
  var player_choice = document.getElementById("player_throw_choice").value;
  var opponent_throw_choice = "";
  var chances = Math.random();
  if(player_choice == " "){
    feedback.classList.remove("good");
    feedback.classList.add("bad");
    feedback_content = "Please Choose Either Rock, Paper, or Scissors to Play.";
    updateFeedback();
  }
  else{
    if(player_choice == "Rock"){
      var empty = localStorage.getItem("player_rock_count");
      empty ++;
      localStorage.setItem("player_rock_count", empty);
    }
    else if(player_choice == "Paper"){
      var empty = localStorage.getItem("player_paper_count");
      empty ++;
      localStorage.setItem("player_paper_count", empty);
    }
    else{
      var empty = localStorage.getItem("player_scissors_count");
      empty ++;
      localStorage.setItem("player_scissors_count", empty);
    }

    if(chances < 0.33){
      opponent_throw_choice = "Rock";
      var empty = localStorage.getItem("opponent_rock_count");
      empty ++;
      localStorage.setItem("opponent_rock_count", empty);
    }
    else if(chances < 0.66 && chances > 0.33){
      opponent_throw_choice = "Paper";
      var empty = localStorage.getItem("opponent_paper_count");
      empty ++;
      localStorage.setItem("opponent_paper_count", empty);
    }
    else{
      opponent_throw_choice = "Scissors";
      var empty = localStorage.getItem("opponent_scissors_count");
      empty ++;
      localStorage.setItem("opponent_scissors_count", empty);
    }

    if(opponent_throw_choice == player_choice){
      result = "You Tied. :|";
      var empty = localStorage.getItem("tie_count");
      empty ++;
      localStorage.setItem("tie_count", empty);
      var empty = localStorage.getItem("game_count");
      empty ++;
      localStorage.setItem("game_count", empty);
    }
    else if(opponent_throw_choice == "Rock" && player_choice == "Paper"){
      result = "You Won! :)";
      var empty = localStorage.getItem("win_count");
      empty ++;
      localStorage.setItem("win_count", empty);
      var empty = localStorage.getItem("game_count");
      empty ++;
      localStorage.setItem("game_count", empty);
    }
    else if(opponent_throw_choice == "Paper" && player_choice == "Scissors"){
      result = "You Won! :)";
      var empty = localStorage.getItem("win_count");
      empty ++;
      localStorage.setItem("win_count", empty);
      var empty = localStorage.getItem("game_count");
      empty ++;
      localStorage.setItem("game_count", empty);
    }
    else if(opponent_throw_choice == "Scissors" && player_choice == "Rock"){
      result = "You Won! :)";
      var empty = localStorage.getItem("win_count");
      empty ++;
      localStorage.setItem("win_count", empty);
      var empty = localStorage.getItem("game_count");
      empty ++;
      localStorage.setItem("game_count", empty);
    }
    else if(opponent_throw_choice == "Rock" && player_choice == "Scissors"){
      result = "You Lost! :(";
      var empty = localStorage.getItem("lose_count");
      empty ++;
      localStorage.setItem("lose_count", empty);
      var empty = localStorage.getItem("game_count");
      empty ++;
      localStorage.setItem("game_count", empty);
    }
    else if(opponent_throw_choice == "Paper" && player_choice == "Rock"){
      result = "You Lost! :(";
      var empty = localStorage.getItem("lose_count");
      empty ++;
      localStorage.setItem("lose_count", empty);
      var empty = localStorage.getItem("game_count");
      empty ++;
      localStorage.setItem("game_count", empty);
    }
    else if(opponent_throw_choice == "Scissors" && player_choice == "Paper"){
      result = "You Lost! :(";
      var empty = localStorage.getItem("lose_count");
      empty ++;
      localStorage.setItem("lose_count", empty);
      var empty = localStorage.getItem("game_count");
      empty ++;
      localStorage.setItem("game_count", empty);
    }

    var results_spots = document.getElementsByClassName("result_span");
    for(var i = 0; i<results_spots.length; i++){
      results_spots[i].innerHTML=result;
    }
    var player_spots = document.getElementsByClassName("player_choice_span");
    for(var i = 0; i<player_spots.length; i++){
      player_spots[i].innerHTML=player_choice;
    }
    var opponent_spots = document.getElementsByClassName("opponent_choice_span");
    for(var i = 0; i<opponent_spots.length; i++){
      opponent_spots[i].innerHTML=opponent_throw_choice;
    }
    showOrNot(document.getElementById("game_results"), true);
    showOrNot(document.getElementById("throw_choice"), false);
    showOrNot(document.getElementById("rules"), false);
    showOrNot(document.getElementById("stats"), false);
    updateStats();

    if(player_choice == "Rock"){
      var playerImageSrc = "PlayerRock.jpg"
    }
    if(player_choice == "Paper"){
      var playerImageSrc = "PlayerPaper.jpg"
    }
    if(player_choice == "Scissors"){
      var playerImageSrc = "PlayerScissors.jpg"
    }
    var playerImageInput = document.getElementById("player_image");
    playerImageInput.src = playerImageSrc;

    if(opponent_throw_choice == "Rock"){
      var opponentImageSrc = "OpponentRock.jpg"
    }
    if(opponent_throw_choice == "Paper"){
      var opponentImageSrc = "OpponentPaper.jpg"
    }
    if(opponent_throw_choice == "Scissors"){
      var opponentImageSrc = "OpponentScissors.jpg"
    }
    var opponentImageInput = document.getElementById("opponent_image");
    opponentImageInput.src = opponentImageSrc;

    feedback.classList.remove("bad");
    feedback.classList.add("good");
    feedback_content = player_choice + " successfully played!";
    updateFeedback();
  }
});

function updateStats(){
  var stats_content_spots = document.getElementsByClassName("stats_content_span");
  for(var i = 0; i<stats_content_spots.length; i++){
    stats_content_spots[i].innerHTML= "You have played " + game_count + " game(s) total! " +
    "You have lost " + localStorage.getItem("lose_count") + " game(s) total! " +
    "You have won " + localStorage.getItem("win_count") + " game(s) total! " +
    "You have tied " + localStorage.getItem("tie_count") + " game(s) total! " +
    "Win/Loss Ratio: " + localStorage.getItem("win_count") + ":" + localStorage.getItem("lose_count") + ". " +
    "You have thrown Rock " + ((localStorage.getItem("player_rock_count")/localStorage.getItem("game_count"))*100) + "% of the time. " +
    "You have thrown Paper " + ((localStorage.getItem("player_paper_count")/localStorage.getItem("game_count"))*100) + "% of the time. " +
    "You have thrown Scissors " + ((localStorage.getItem("player_scissors_count")/localStorage.getItem("game_count"))*100) + "% of the time. " +
    "The Opponent has thrown Rock " + ((localStorage.getItem("opponent_rock_count")/localStorage.getItem("game_count"))*100) + "% of the time. " +
    "The Opponent has thrown Paper " + ((localStorage.getItem("opponent_paper_count")/localStorage.getItem("game_count"))*100) + "% of the time. " +
    "The Opponent has thrown Scissors " + ((localStorage.getItem("opponent_scissors_count")/localStorage.getItem("game_count"))*100) + "% of the time. ";
  }
}

document.getElementById("play_again_button").addEventListener("click", function(){
  showOrNot(document.getElementById("game_results"), false);
  showOrNot(document.getElementById("throw_choice"), true);
  document.getElementById("player_throw_choice").value = " ";
});

makeTogglable(document.getElementById("show_rules_button"), document.getElementById("rules"));
makeTogglable(document.getElementById("show_stats_button"), document.getElementById("stats"));

function makeTogglable(button_element, div_element){
  button_element.addEventListener("click", function(){
    if(div_element.classList.contains("hidden")){
      div_element.classList.remove("hidden");
      div_element.classList.add("visible");
    }
    else{
      div_element.classList.remove("visible");
      div_element.classList.add("hidden");
    }
  });
}

function updateFeedback(){
  var feedback_spots = document.getElementsByClassName("feedback_span");
  for(var i = 0; i<feedback_spots.length; i++){
    feedback_spots[i].innerHTML=feedback_content;
  }
  if(feedback_spots != " "){
    showOrNot(document.getElementById("feedback"), true);
  }
  else{
    showOrNot(document.getElementById("feedback"), false);
  }
}
