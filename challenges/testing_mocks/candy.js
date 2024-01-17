class Candy {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
};

const mars = new Candy('Mars', 5);

console.log(mars.getName())


const fakeMars = { getName: () => 'Mars'}

console.log(fakeMars.getName())