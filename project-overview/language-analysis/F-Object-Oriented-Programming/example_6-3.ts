export {};

abstract class Shape {
        abstract getArea(): number;

        describe(): void {
            console.log(`This shape has an area of ${this.getArea()}`);
        }
    }

    class Circle extends Shape {
        constructor(private radius: number) { super(); }

        getArea(): number {
            return Math.round(Math.PI * this.radius * this.radius * 100) / 100;
        }
    }

    class Rectangle extends Shape {
        constructor(private width: number, private height: number) { super(); }

        getArea(): number {
            return this.width * this.height;
        }
    }

    const circle: Shape = new Circle(5);
    const rectangle: Shape = new Rectangle(4, 6);

    console.log(circle.getArea());       // 78.54
    console.log(rectangle.getArea());    // 24