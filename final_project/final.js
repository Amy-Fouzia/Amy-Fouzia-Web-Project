//https://www.youtube.com/watch?v=7JtLHJbm0kA&t=14s&ab_channel=Frankslaboratory
alert('hit -> or <- arrows');  

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1270;
    canvas.height = 567;

    class InputHandler { //handles user input
        constructor(){
            this.keys = []; //keeps track of button presses
            window.addEventListener('keydown', e => { //ES6 arrow function (lexical scoping: dont bind their own 'this' but they inherit the one from their parents scope)
                if((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && this.keys.indexOf(e.key) === -1){ //dont store button press if alrdy in array  
                    this.keys.push(e.key);
                }
            });
            window.addEventListener('keyup', e => { //when was down and key is released, remove from the array
                if(e.key === 'ArrowLeft'|| e.key === 'ArrowRight') {
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
            });
        }
    }

    class Player{ //moves player based on input
        constructor(gameWidth, gameHeight){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 200;
            this.height = 200;
            this.x = 0;
            this.y = this.gameHeight- this.height;
            this.image = document.getElementById('playerImage');
            this.frameX = 0;
            this.frameY = 0;
            this.speed = 0;
        }
        draw(context){
            //context.fillStyle = 'white';
            //context.fillRect(this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.frameX*this.width, this.frameY*this.height, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        update(input){
            this.x += this.speed;
            //movement w arrows
            if (input.keys.indexOf('ArrowRight') > -1){
                this.speed = 5;
            } else if (input.keys.indexOf('ArrowLeft') > -1){
                this.speed = -5;
            } else {
                this.speed = 0;
            }
        }
    }

    class Background{ //handles constantly moving background
        constructor(gameWidth, gameHeight){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.image = document.getElementById('backgroundImage');
            this.x = 0;
            this.y = 0;
            this.width = 1270;
            this.height = 633;
            this.speed = 0;
        }
        draw(context){
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
        update(){
            this.x -= this.speed;
            //movement w arrows
            if (input.keys.indexOf('ArrowRight') > -1){
                this.speed = 10;
            } else {
                this.speed = 0;
            }
            if(this.x < 0 - this.width) this.x = 0;
        }
    }

    function dispplayStatusText(){ //to display objects

    }

    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);

    function animate(){ //animates screen
        ctx.clearRect(0,0,canvas.width,canvas.height);
        background.draw(ctx);
        background.update();
        player.draw(ctx);
        player.update(input);
        requestAnimationFrame(animate);
    }
    animate();
});