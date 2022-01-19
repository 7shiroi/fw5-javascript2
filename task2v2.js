const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

let res = [];

function showResult(names) {
  console.log(names);
}

function searchName(filterChar, outputLimit, cb) {
  res = name.filter((value) => value.includes(filterChar));

  if (res.length > outputLimit) {
    res = res.slice(0, outputLimit);
  }

  cb(res);
}

searchName("an", 3, showResult);