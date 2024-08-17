let arr = [];
let count = 0;
let top = -1;
const size = 5;

function push(el) {
    if (count === size) {
        console.log("Overflow");
    } else {
        top++;
        arr[top] = el;
        count++;
    }
}

function pop() {
    if (count === 0) {
        console.log("Underflow");
    } else {
        delete arr[top]; // Remove the top element
        top--;
        count--;
    }
}

push(5);
push(4);
push(2);
push(3);
push(1);
pop();
pop();
pop();
push(6);
console.log(arr);
