// Write your code here

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.soup = soup;
        this.salad = salad;
        this.drink = drink;
    }
}

let lunch = new Lunch('side salad', 'side salad', 'Pepsi')

console.log(lunch.soup)

class Dinner { 
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}

let newdinner = new Dinner('balsamic', 'consomme', 'filet mignon', 'cheesecake')

console.log(newdinner)