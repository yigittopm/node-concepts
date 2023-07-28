import { readFile } from "fs";

const cache = new Map();

function inconsistentRead(filename, cb) {
  if (cache.has(filename)) {
    cb(cache.get(filename));
  } else {
    readFile(filename, "utf-8", (err, data) => {
      cache.set(filename, data);
      cb(data);
    });
  }
}

function createFileReader(filename) {
  const listeners = [];

  inconsistentRead(filename, (value) => {
    listeners.forEach((listener) => listener(value));
  });

  return {
    onDataReady: (listener) => listeners.push(listener),
  };
}

const reader1 = createFileReader("data.txt");
reader1.onDataReady((data) => {
  console.log(`First call data: ${data}`);

  const reader2 = createFileReader("data.txt");
  reader2.onDataReady((data) => {
    console.log(`Second all data: ${data}`);
  });
});
