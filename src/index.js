const fs = require("fs/promises");

const fileName = "myfile.txt";

const reader = async (fileName) => {
  try {
    // Read the content of the file asynchronously
    const content = await fs.readFile(fileName, "utf8");
    return content;
  } catch (err) {
    // If there is an error while reading the file, throw the error
    throw err;
  }
};

module.exports = reader;
