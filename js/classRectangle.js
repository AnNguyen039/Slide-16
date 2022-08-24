let Rectangle = function (weight,height) {
    this.weight = weight;
    this.height = height;

    this.getArea = function() {
        return this.weight * this.height;
    }
    this.getPerimeter = function() {
        return (this.weight + this.height) * 2;
    }
    this.drawRectangle = function () {
        let c = document.getElementById("drawRectangle");
        let ctx = c.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(20, 20, weight, height);
    }
}
let weight = +prompt("Enter number")
let height = +prompt("Enter number")
let rectangle = new Rectangle(weight,height)
rectangle.drawRectangle();
alert(rectangle.getArea());
alert(rectangle.getPerimeter());