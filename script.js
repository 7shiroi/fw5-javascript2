// arrow function
const addition = (num1, num2) => {
  const total = num1 + num2;

  return total;
};

// console.log(addition(1, 3));

// function
function multiply(num1, num2) {
  return num1 * num2;
}

// expression function

const division = function (num1, num2) {
  return num1 / num2;
};

// method
const biodata = {
  firstName: "Kelvin",
  lastName: "Wong",
  fullName: function (surname) {
    return this.firstName + (surname ? ` ${surname} ` : " ") + this.lastName;
  },
};

// console.log(biodata.fullName("beast"));

// array
const nilai = [50, 20, 80, 86, 98, 100, 15, 55];

nilai.push(99);

const final = nilai.map(function (val, idx) {
  return idx + 1 + ". " + val;
});

const filtered = nilai.filter(function (val) {
  return val > 50;
});

// console.log(final);
// console.log(filtered);

test = "apple";
matcher = "pl";

console.log(test.match(matcher));
