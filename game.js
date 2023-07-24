//document.querySelector('.message').textContent = "Gagnée !!"
const message = function(message) {
    document.querySelector('.message').textContent = message;
}
var nbre = Math.trunc(Math.random()*20 + 1);
var score = 20;

var highscore = 0;

//document.querySelector('.number').textContent = nbre;

document.querySelector(".check").addEventListener(
    'click', function() {
        const guess = document.querySelector('.guess').value;
        if (!guess){
            message('Saisissez un nombre svp!');
        }

        else if (guess == nbre){
            message('Trouvée!!')

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = nbre;

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
              }
        }

        else if (guess < nbre){
            message('Un peu plus haut !')
            score--;
            document.querySelector('.score').textContent = score;
            if (score < 1){
                message('Perdu');
                document.querySelector('.score').textContent = 0;
            }


        }

        else if (guess > nbre){
            message('Un peu plus bas !')
            score--;
            document.querySelector('.score').textContent = score;
            if (score < 1){
                message('Perdu');
                document.querySelector('.score').textContent = 0;
            }
        }
    }
)

document.querySelector(".again").addEventListener(
    "click", function(){

        nbre = Math.trunc(Math.random()*20 + 1);
        document.querySelector('.score').textContent = 20;
        
        document.querySelector('.guess').value = "";
        message("Start guessing...");
        document.querySelector('.number').textContent = nbre;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').textContent = "?";
        
    }
)