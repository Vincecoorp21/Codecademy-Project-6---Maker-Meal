const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {},
  set appetizers(appetizers) {},
  get mains() {},
  set mains(mains) {},
  get desserts() {},

  set desserts(desserts) {},

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  // Add a new dish to the appropriate array in the menu's _courses object, based on what coursName was passed in
  // Each dish is added with a name and price properties

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },

  // Generate a random dish (random index) from the course (array) we pass in:
  // This method will be used inside generateRandomMeal() where we will pass in the argument/course

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  // Generate the 3-course meal:

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}`;
  },
};

//Appetizers
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.5);
menu.addDishToCourse('appetizers', 'Ceviche', 8);
menu.addDishToCourse('appetizers', 'Pea Soup', 6.5);
//Mains
menu.addDishToCourse('mains', 'Entrecote', 18.8);
menu.addDishToCourse('mains', 'Sea bass', 20.5);
menu.addDishToCourse('mains', 'Risotto', 13);
//Desserts
menu.addDishToCourse('desserts', 'Tiramisu', 7);
menu.addDishToCourse('desserts', 'Cheese Plate', 12.5);
menu.addDishToCourse('desserts', 'Ice Cream', 5);

const meal = menu.generateRandomMeal();

console.log(meal);
