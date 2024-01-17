class Thermostat {

    constructor() {
        this.temp = 20
        this.powerSavingMode = true
    };

    getTemperature() {
        return this.temp;
    };

    setTemperature(temp) {
        if (this.powerSavingMode) {
            if (temp <= 25) {
                this.temp = temp;
            }
        } else if (!this.powerSavingMode) {
            if (temp <= 32) {
                this.temp = temp;
            }
        }
    }

    up() {
        if (this.powerSavingMode) {
            if (this.temp < 25) {
                this.temp +=1;
            }
        } else if (!this.powerSavingMode) {
            if (this.temp < 32) {
                this.temp +=1;
            }
        }
    };

    down() {
        if (this.temp > 10) {
            this.temp -=1;
        };
    }

    setPowerSavingMode(status) {
        if (status == false) {
            this.powerSavingMode = false;
        } else if (status == true) {
            this.powerSavingMode = true;
        }
    };

    getEnergyUsage() {
        if (this.temp < 18) {
            return 'low-usage';
        } else if (this.temp <=25) {
            return 'medium-usage'
        } else {
            return 'high-usage';
        }
    };

    reset() {
        this.temp = 20;
    };

}

module.exports = Thermostat;