import { EventEmitter } from "events";

function helloEvent() {
  const eventEmitter = new EventEmitter();
  setTimeout(() => {
    eventEmitter.emit("complete", "hello world");
  }, 100);
  return eventEmitter;
}

function helloCallback(cb) {
  setTimeout(() => {
    cb(null, "hello world");
  }, 100);
}

const start1 = performance.now();
helloEvent().on("complete", (message) => console.log(message));
const end1 = performance.now();
console.log(`Execution time 1: ${end1 - start1} ms`);

const start2 = performance.now();
helloCallback((err, message) => console.log(message));
const end2 = performance.now();
console.log(`Execution time 2: ${end2 - start2} ms`);
