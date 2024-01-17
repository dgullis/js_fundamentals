class Rectangle {

    // A constructor, to give initial arguments.
    constructor(height, width) {

      // We can define attributes stored on the instance with `this`
        this.height = height;
        this.width = width;
    }
    getArea() {
      return this.height * this.width;
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getIntroduction() {
        return `Hi, my name is ${this.name}`
    }
};

class UserBase {
    constructor(users) {
        this.users = users
    }
    count() {
        return this.users.length;
    }
    getNames() {
        return this.users.map((user) => {
            return user.name;
        })
    }
    getIntroductions() {
        return this.users.map((user)=> {
            return `Hi, my name is ${user.name}`
        })
    }
}

class Candy {
    constructor(name, price) {
        this.name = name,
        this.price = price
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}

class ShoppingBasket {
    //set defalt value of items to emtpy list is no list given
    constructor(items=[]) {
        this.items = items
    }
    getTotalPrice() {

        let sum = 0;
        this.items.forEach((item) => {
            sum+=item.price;
        })
        return sum;
    }
    addItem(newItem) {
        this.items.push(newItem)
    }
}


// Export the class
module.exports = { Rectangle, User, UserBase, ShoppingBasket, Candy }