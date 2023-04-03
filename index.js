let score = 0;

const button = document.getElementById("button");
button.addEventListener("click", function() {
  score++;
  document.getElementById("score").innerHTML = "Score: " + score;
});
