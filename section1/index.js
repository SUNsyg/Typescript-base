var isDone = false;
var decLiteral = 20;
var hexLiteral = 0x14;
var binaryLiteral = 20;
var octalLiteral = 20;
var str = 'bob';
str = 'smith';
// let list: number[] = [1,2]
var list = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName);
