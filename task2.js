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

function searchName(matcher, outputLimit, cb) {
  name.forEach((item) => {
    if (item.toLowerCase().match(matcher.toLowerCase())) {
      res.push(item);
    }
  });

  if (res.length > outputLimit) {
    res = res.slice(0, outputLimit);
  }

  cb(res);
}

searchName("an", 3, showResult);
