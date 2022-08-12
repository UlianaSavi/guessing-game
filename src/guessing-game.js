class GuessingGame {
    constructor() {
        this.MIN = null;
        this.MAX = null;

        this.result = null;
    }

    setRange(min, max) {
        this.MIN = min;
        this.MAX = max;
    }

    guess() {
        this.result = Math.round((this.MIN + this.MAX) / 2);
        if (!this.result && this.result !== 0) {
            return this.result;
        }
        console.log(this.result);
        return this.result;
    }

    lower() {
        this.MAX = this.result;
    }

    greater() {
        this.MIN = this.result;
    }
}

module.exports = GuessingGame;

