import { readFile } from "fs";

function readJSONThrows(filename, callback) {
  readFile(filename, "utf-8", (err, data) => {
    if (err) {
      return callback(err);
    }

    callback(null, JSON.parse(data));
  });
}

try {
  readJSONThrows("invalid_json.json", (err) => console.error(err));
} catch (err) {
  console.log("This will NOT catch the JSON parsing exception");
}

process.on("uncaughtException", (err) => {
  console.error(
    `This will catch at last the JSON parsing exception: ${err.message}`
  );
  process.exit(1);
});
