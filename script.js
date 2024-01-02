/* The class Movie is stated below.
An instance of class Movie represents a film.
This class has the following three properties:

- title, which is a String representing the title of the movie
- studio, which is a String representing the studio that made the movie
- rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
 */


//  Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
  // The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  // Method to filter movies with rating "PG"
  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}


// Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
const movieArray = [
  new Movie('m1', 's1' , 'R1'),
  new Movie('m2', 's1' , 'R2'),
  new Movie('m3', 's3')
];


// Creating an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


// let movie2 = movieArray[2];



console.log(movieArray);
const pgMovies = Movie.getPG(movieArray);

console.log(pgMovies);

// Convert the UML diagram to Typescript class. - use number for double



var Circle = /** @class */ (function () {
  function Circle(radius, color) {
    this.radius = 1.0;
    this.color = "Red";
    if (typeof radius !== "undefined") {
      this.radius = radius;
    }
    if (typeof color !== "undefined") {
      this.color = color;
    }
  }
  Circle.prototype.getRadius = function () {
    return this.radius;
  };
  Circle.prototype.setRadius = function (radius) {
    this.radius = radius;
  };
  Circle.prototype.getColor = function () {
    return this.color;
  };
  Circle.prototype.setColor = function (color) {
    this.color = color;
  };
  Circle.prototype.toString = function () {
    return "Radius: " + this.radius + " Color: " + this.color;
  };
  Circle.prototype.getArea = function () {
    return 2 * Math.PI * this.radius;
  };
  Circle.prototype.getCircumference = function () {
    return 2 * this.radius;
  };
  return Circle;
})();
var c1 = new Circle();
console.log("Constructor with no params: " + c1.toString());
var c2 = new Circle(3.5);
console.log("Constructor with one param: " + c2.toString());
var c3 = new Circle(2.2, "Yellow");
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());


// 3.Write a “person” class to hold all the details.


class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

// Example usage:
const johnDoe = new Person("John", "Doe", 25, "john.doe@example.com");

console.log("Full Name:", johnDoe.getFullName());
console.log("Age:", johnDoe.age);
console.log("Is Adult?", johnDoe.isAdult());
console.log("Email:", johnDoe.email);



//4. write a class to calculate the uber price.

class UberPricingCalculator {
  constructor(baseFare, costPerMinute, costPerMile, surgeMultiplier = 1) {
    this.baseFare = baseFare;
    this.costPerMinute = costPerMinute;
    this.costPerMile = costPerMile;
    this.surgeMultiplier = surgeMultiplier;
  }

  calculateFare(distanceInMiles, timeInMinutes) {
    const baseCost = this.baseFare;
    const timeCost = this.costPerMinute * timeInMinutes;
    const distanceCost = this.costPerMile * distanceInMiles;
    const totalFare =
      (baseCost + timeCost + distanceCost) * this.surgeMultiplier;

    return totalFare;
  }
}

// Example usage:
const standardUber = new UberPricingCalculator(5, 0.2, 1.5);
const surgeUber = new UberPricingCalculator(5, 0.2, 1.5, 2); // Surge pricing with a multiplier of 2

const distance = 10; // in miles
const time = 15; // in minutes

console.log("Standard Uber Fare:", standardUber.calculateFare(distance, time));
console.log("Surge Uber Fare:", surgeUber.calculateFare(distance, time));


