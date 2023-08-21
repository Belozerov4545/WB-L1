// 13. Задача на классы и наследование: 
// создайте базовый класс Shape (фигура), 
// который имеет методы для расчета площади и периметра. 
// Затем создайте подклассы, представляющие различные фигуры, 
// такие как прямоугольник, круг и треугольник. 
// Реализуйте методы расчета площади и периметра для каждой фигуры.

class Shape {
    constructor(name, square, perimeter) {
      this.name = name;
      this.square = square;
      this.perimeter = perimeter;
    }
  
    getSquare(square) {
      this.square = square;
      console.log(`${this.name} имеет площадь ${this.square}.`);
    }
    
    getPerimeter(perimeter) {
      this.perimeter = perimeter;
      console.log(`${this.name} имеет периметр ${this.perimeter}.`);
    }
}
  
class Rectangle extends Shape {
    name = 'Прямоугольник';
  
    getRecSquare(a, b) {
      let S = a * b 
      super.getSquare(S)
    }
    
    getRecPerimeter(a, b) {
      let P = 2 * (a + b) 
      super.getPerimeter(P)
    }
}
  
let rect = new Rectangle()
rect.getRecSquare(5,6)
rect.getRecPerimeter(5,6)
  
class Сircle extends Shape {
    name = 'Круг';
  
    getСircleSquare(radius) {
      let S = Math.round(Math.PI * radius ** 2); 
      super.getSquare(S)
    }
    
    getСirclePerimeter(radius) {
      let P = Math.round(2 * Math.PI * radius); 
      super.getPerimeter(P)
    }
}
  
let circle = new Сircle()
circle.getСircleSquare(8)
circle.getСirclePerimeter(16)
  
  
class Triangle extends Shape {
    name = 'Треугольник';
  
    getTriangleSquare(a, b, c) {
      let S = (a + b) /2;  
      super.getSquare(S)
    }
    
    getTrianglePerimeter(a, b, c) {
      let P = a + b + c; 
      super.getPerimeter(P)
    }
}
  
  let triangle = new Triangle()
  triangle.getTriangleSquare(8,12)
  triangle.getTrianglePerimeter(16,3,21)