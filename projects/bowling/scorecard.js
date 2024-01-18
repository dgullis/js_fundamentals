class Scorecard {
    constructor() {
        this.score = 0;
        this.frames = [];
        this.previous_frame_score = [];
    };

    calculateScore() {
        return this.score;
    };

};

module.exports = Scorecard;