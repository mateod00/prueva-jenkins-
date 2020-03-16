const ML = require('ml');
// Define features
var x = new Array(100);
var y = new Array(100);
for (var i = 0; i < 100; ++i){
    x[i] = (i - 50) / 50;
    y[i] = 2 * x[i] + 3 + 0.25 * (Math.random() - 0.5);
}
// Create a model
const regression = new ML.SimpleLinearRegression(x, y);
// Get results
console.log(regression.predict(0));
console.log(regression.computeX(0));
console.log(regression);