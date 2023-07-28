import { readFileSync } from "fs";

const cache = new Map();

function consistentReadSync(filename) {
  if (cache.has(filename)) {
    return cache.get(filename);
  } else {
    const data = readFileSync(filename, "utf-8");
    cache.set(filename, data);
    return data;
  }
}

// normal
console.log(consistentReadSync("data.txt"));
// next call will read from the cache
console.log(consistentReadSync("data.txt"));
