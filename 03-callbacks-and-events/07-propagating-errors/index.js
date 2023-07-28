import { readFile } from "fs";

function readJSON(filename, callback) {
  readFile(filename, "utf-8", (err, data) => {
    let parsed;

    if (err) {
      return callback(err);
    }

    try {
      parsed = JSON.parse(data);
    } catch (err) {
      return callback(err);
    }

    callback(null, parsed);
  });
}

const cb = (err, data) => {
  if (err) {
    return console.error(err);
  }

  console.log(data);
};

readJSON("valid_json.json", cb);
readJSON("invalid_json.json", cb);
