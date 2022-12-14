window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1270;
    canvas.height = 567;
    let changePage = 0;

    class InputHandler { //handles user input
        constructor(){
            this.keys = []; //keeps track of button presses
            window.addEventListener('keydown', e => { //ES6 arrow function (lexical scoping: dont bind their own 'this' but they inherit the one from their parents scope)
                if((e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp') && this.keys.indexOf(e.key) === -1){ //dont store button press if alrdy in array  
                    this.keys.push(e.key);
                }
            });
            window.addEventListener('keyup', e => { //when was down and key is released, remove from the array
                if(e.key === 'ArrowLeft'|| e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
            });
        }
    }

    class Player{ //moves player based on input
        constructor(gameWidth, gameHeight){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 120;
            this.height = 207;
            this.x = 0;
            this.y = this.gameHeight- this.height;
            this.image = document.getElementById('playerImage');
            this.frameX = 0;
            this.frameY = 0;
            this.speed = 0;
            changePage = 0;
        }
        draw(context){
            //context.fillStyle = 'white';
            //context.fillRect(this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.frameX*this.width, this.frameY*this.height, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        update(input){
            //collision detection w door
            if(this.x == 1100){
                this.x = 0;
                changePage ++;
            }

            this.x += this.speed;
            //movement w arrows
            if (input.keys.indexOf('ArrowRight') > -1){

                if (changePage == 1){ //dhaka page
                    this.image = document.getElementById('rickshaw')//add teacup on poem cover page
                    this.speed = 5;
                } else if (changePage == 2){ //poem cover page
                    this.image = document.getElementById('playerTea')//add teacup on poem cover page 
                    this.speed = 5;
                } else if (changePage == 3){ //poem page
                    this.image = document.getElementById('gloves');
                    this.speed = 5;
                } else if (changePage == 4 || changePage == 5 || changePage == 6){ //fashion page
                    this.image = document.getElementById('sari');
                    this.speed = 5;   
                } else{
                    this.image = document.getElementById('playerImage');
                    this.speed = 5;
                }

            } else if (input.keys.indexOf('ArrowLeft') > -1){
                if (changePage == 0){ //cover page
                    this.image = document.getElementById('boatMirror');
                    this.speed = -5;
                }
                if (changePage == 1){ //dhaka page
                    this.image = document.getElementById('rickshawMirror');
                    this.speed = -5;
                }else if (changePage == 3){ //poem page
                    this.image = document.getElementById('glovesMirror');
                    this.speed = -5;
                } else if (changePage == 4 || changePage == 5 || changePage == 6){ //fashion page
                    this.image = document.getElementById('sariMirror');
                    this.speed = -5;   
                }else {
                    this.image = document.getElementById('playerMirrorImage');
                    this.speed = -5;
                }
                
            } else if (input.keys.indexOf('ArrowUp') > -1){
                this.speed = 0;
                this.image = document.getElementById('playerUpImage');
            } else {
                this.speed = 0;
            }
        }
    }

    class Background{ //handles constantly moving background
        constructor(gameWidth, gameHeight){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.image = document.getElementById('back1');
            this.x = 0;
            this.y = 0;
            this.width = 1270;
            this.height = 567;
            this.speed = 0;
        }
        draw(context){
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
        update(){
            //page 1: dhaka
            if (changePage == 1){
                this.width = 1270;
                this.image = document.getElementById('back2');
                //movement w arrows
                this.x -= this.speed;
                if (input.keys.indexOf('ArrowRight') > -1){
                    this.speed = 11;
                } else {
                    this.speed = 0;
                }
                if(this.x < 0 - this.width) this.x = 0;
            }

            //page 2: poem cover
            if (changePage == 2){
                this.width = 1270;
                this.image = document.getElementById('magic1');
                this.x = 0;
                this.y = 0;
            }

            //page 3: poem 
            if (changePage == 3 ){
                this.width = 3810;
                this.image = document.getElementById('poem');

                //movement w arrows
                this.x -= this.speed;
                if (input.keys.indexOf('ArrowRight') > -1){
                    this.speed = 11.55;
                } else {
                    this.speed = 0;
                }
                if(this.x < 0 - this.width) this.speed = 0;
            }

            //page 4: fashion cover
            if (changePage == 4){
                this.width = 1270;
                this.image = document.getElementById('fashion');
                this.x = 0;
                this.y = 0;
            }

            //page 5: fashion and history
            if (changePage == 5 || changePage == 6){
                this.width = 7620;
                this.image = document.getElementById('fashionhistory');

                //movement w arrows
                this.x -= this.speed;
                if (input.keys.indexOf('ArrowRight') > -1){
                    this.speed = 14.4;
                } else {
                    this.speed = 0;
                }
                if(this.x < 0 - this.width) this.speed = 0;
            }
            
            //reset
            if(changePage ==  7){changePage = 1;} 
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