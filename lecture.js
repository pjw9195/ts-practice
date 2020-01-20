var num;
num = 3;
var str = 'hello';
var arr = [true, 3, 'hello'];
var obj = { a: 'b' };
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c = Color.green;
