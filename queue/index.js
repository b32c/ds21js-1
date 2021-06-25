import Queue from "./Queue";

const cars = Queue();

cars.enqueue ("honda");
cars.enqueue ("chevrolet");
cars.enqueue ("tzuru");

console.log (cars.dequeue());
console.log(cars.peek());