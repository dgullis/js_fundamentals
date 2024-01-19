class Scorecard {
    constructor() {
        this.score = 0;
        this.frames = 0;
        this.memory = [];
    };

    calculateScore() {
        return this.score;
    };

    returnNumberFrames() {
        return this.frames;
    }

    addFrame() {
        let roll1 = arguments[0];
        let roll2 = arguments[1];
        
        this.handleEndOfGame(roll1, roll2)
        // if strike
        if (roll1 === 10){
            this.handleStrike();
            this.frames += 1;
        // if not a strike check if spare        
        } else if ((roll1 + roll2) === 10) {
            this.handleSpare(roll1, roll2);
            this.frames += 1;

        // if not strike or spare   
        } else {
            this.handleNormalRoll(roll1, roll2)
            this.frames += 1;

        };
    };

    
    handleStrike() {
        // check to see uncalculated scores i.e. spares/strike waiting to be settled
        if(this.memory.length !== 0){
            // if one score waiting to be settled
            if (this.memory.length === 1){
                // if this is a strike, add second strike
                if(this.memory[0] === (10)){
                    this.memory.push(10);
                // if not strike i.e. spare, settle this score, delete spare, add strike 
                } else {
                    this.score += 20;
                    this.memory.shift();
                    this.memory.push(10)
                }
            // if two scores waiting to be settled (must be strikes)    
            } else if (this.memory.length === 2) {
               // settles first score (30), delete first score
                    this.score += 30;
                    this.memory.push(10)
                    this.memory.shift();  
            }
        // if no scores waiting to be settled, add strike to memory
        } else {
            this.memory.push(10);
        }
    };

    handleSpare(roll1, roll2) {
        // check if scores waiting to be settled
        if (this.memory.length !== 0) {
            // if one score waiting to be settled
            if (this.memory.length === 1) {
                // if strike waiting to be settled, settle score, delete strike, add spare
                if (this.memory[0] == 10) {
                    this.score += 20;
                    this.memory.shift();
                    this.memory.push([roll1,roll2])
                // if not a strike, must be a spare waiting to be settled, settle score, delete spare, add current spare
                } else {
                    this.score += (10 + roll1);
                    this.memory.shift();
                    this.memory.push([roll1,roll2])
                }
            // if length is 2 must be two strike?, settle both strike, add spare    
            } else if ( this.memory.length === 2 ) {
                this.score += (40 + roll1);
                this.memory.shift();
                this.memory.shift();
                this.memory.push([roll1, roll2]);
            }
        // if no scores waiting to be settled
        } else {
            this.memory.push([roll1,roll2]);
        }
    };

    handleNormalRoll(roll1, roll2) {
        if (this.memory.length !== 0) {
            // if one waiting
            if (this.memory.length === 1) {
                // if strike, settle strike, add strike w/ bonus to score, delete strike, add current rolls to score
                if (this.memory[0] === 10) {
                    this.score += (10 + (roll1+roll2) + (roll1+roll2));
                    this.memory.shift();
                // if not strike must be spare
                } else {
                    this.score += (10 + roll1 + (roll1 + roll2));
                    this.memory.shift();
                }
            // if two scores waiting to be settled (must be 2 x strikes?), settle scores, delete from memory, add current score    
            } else if ( this.memory.length === 2 ) {
                this.score += 20 + (roll1) + 10 + (roll1 + roll2) + (roll1 + roll2);
                this.memory.shift();
                this.memory.shift();
            }
        // if no scores waiting to be settled just add current rolls to score    
        } else {
            this.score += (roll1 + roll2);
        };
    };

    handleEndOfGame(roll1, roll2) {
        if (this.frames === 10) {
            if (roll1+roll2 === 10) {
                this.handleSpare(roll1, roll2)
                console.log("end of game")
            } else if (roll1===10) {
                this.handleStrike(roll1);
                this.frames += 1

            } else {
                // if one waiting
                if (this.memory.length === 1) {
                    // if strike, settle strike, add strike w/ bonus to score, delete strike, add current rolls to score
                    if (this.memory[0] === 10) {
                        this.score += (10 + (roll1+roll2) + (roll1+roll2));
                        this.memory.shift();
                    // if not strike must be spare
                    } else {
                        this.score += (10 + roll1 + (roll1 + roll2));
                        this.memory.shift();
                    }
                // if two scores waiting to be settled (must be 2 x strikes?), settle scores, delete from memory, add current score    
                } else if ( this.memory.length === 2 ) {
                    this.score += 20 + (roll1) + 10 + (roll1 + roll2)
                    this.memory.shift();
                    this.memory.shift();
                }
            console.log('end of game')
            }
        } else if (this.frames === 11){
            if (this.memory.slice(-1)[0] != 10) {
                this.score += 10 + roll1
                console.log('end of game')
            } else {
                this.score += 20 + roll1
                console.log("end of game")
            }
        } else if (this.frames === 12){
            if (roll1 === 10) {
                this.score += (this.memory[0] + this.memory[1] + 10)
            } else {
                this.score += (this.memory[0] + this.memory[1] + roll1)
            }
        }
    }
};

module.exports = Scorecard;