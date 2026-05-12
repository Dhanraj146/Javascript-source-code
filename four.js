const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

const str = "dhanraj";
for (const char in str) {
  // console.log(char); // gives index
  // console.log(str[char]); // access using square brackets
}
for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //   console.log(key);
  //   console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
  // we cannot iterate the map using for...in loop
  // console.log(key);
}
