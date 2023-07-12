function gradient_descent(start, gradient, learn_rate, max_iter, tol = 0.01) {
    let x = start;
    let steps = [x];

    for (let i = 0; i < max_iter; i++) {
        const step = learn_rate * gradient(x);
        x = x - step;
        steps.push(x);

        if (Math.abs(step) < tol) {
            break;
        }
    }

    return [steps, x];
}

/* Example 1 */

function func1(x) {
    return x ** 2 - 4 * x + 1;
}

function gradient_func1(x) {
    return 2 * x - 4;
}

const start = 9;
const learn_rate = 0.1;
const max_iter = 100;
const tol = 0.01;

const [steps, result] = gradient_descent(start, gradient_func1, learn_rate, max_iter, tol);

console.log("Steps of gradient descent:", steps);
console.log("Final result:", result);

