function Rectangle(width, height, color) {
    class obj {
        constructor(width, height, color) {
            this.width = Number(width);
            this.height = Number(height);
            this.color = color[0].toUpperCase() + color.slice(1).toLowerCase();
        }

        calcArea() {
            let area = this.width * this.height;
            this.area = area;
            return area;
        }
    };

    let rectangle = new obj(width, height, color);
    return rectangle;
}