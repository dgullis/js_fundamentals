const Thermostat = require('./thermostat')

describe('unit tests for Thermostat class', () => {
    const thermostat = new Thermostat();

    test('gets base temperature of 20', () => {
        expect(thermostat.getTemperature()).toBe(20);
    });
    test('up increases temp by 1 degree', () => {
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(22);
    });
    test('down decrease temp by 1 degree', () => {
        thermostat.down();
        expect(thermostat.getTemperature()).toBe(21);
    });
    test('power saving mode stops temp being over 25', () => {
        thermostat.setPowerSavingMode(true);
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up();
            } 
        expect(thermostat.getTemperature()).toBe(25);
    });
    test('power saving mode off max temp is 32', () => {
        thermostat.setPowerSavingMode(false);
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(26);
        for (let i = 0 ; i < 9 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(32);
    });
    test('resets temp to 20', () => {
        thermostat.reset();
        expect(thermostat.getTemperature()).toBe(20);
    });
    test('cannot go below minimum temp of 10', () => {
        for (let i = 0 ; i < 12 ; i++) {
            thermostat.down();
        }
        expect(thermostat.getTemperature()).toBe(10)
    });
    test('gives energy usage for low/med/high temps', () => {
        thermostat.setTemperature(17);
        expect(thermostat.getEnergyUsage()).toBe('low-usage');
        thermostat.setTemperature(25);
        expect(thermostat.getEnergyUsage()).toBe('medium-usage');
        thermostat.setTemperature(32);
        expect(thermostat.getEnergyUsage()).toBe('high-usage')
    })
})