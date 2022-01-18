// 1. toString
// toString digunakan untuk mengubah tipe data variable menjadi string

const x = 123;
console.log(typeof toString(x));
// output "string"

// 2. concat
// menggabungkan text dari 2 buah string dan mengembalikan sebuah string
const text1 = "hello";
const text2 = "world";
const concatText = text1.concat(text2);
console.log(concatText);
// output "helloworld"

// 3. length
// mengembalikan panjang sebuah string atau array
const text = "text";
console.log(text.length);
// output 4
const arr = [32, 21, 51, 21, 5];
console.log(arr.length);
// output 5

// 4. max
// sebuah fungsi dari object Math yang digunakan untuk mencari nilai tertinggi
const max = Math.max(5, 2, 66, 13, 87, 55);
console.log(max);
// output 87

// 5. min
// sebuah fungsi dari object Math yang digunakan untuk mencari nilai terendah
const min = Math.min(5, 2, 66, 13, 87, 55);
console.log(min);
// output 2

// 6. pop
// mengeluarkan data index terakhir pada sebuah array dan mengembalikan value itu
const arr2 = [32, 12, 34, 621, 12];
console.log(arr2.pop());
// output 12

// 7. reverse
// membalikkan susunan array, dimana index pertama menjadi terakhir dan begitu kebalikannya
const arr3 = [1, 2, 3, 4, 5];
console.log(arr3.reverse());
// output [5,4,3,2,1]

// 8. abs
// sebuah fungsi dari object Math yang digunakan untuk mengembalikan nilai positive dari data yang dimasukkan
console.log(Math.abs(5 - 7));
// output 2

// 9. random
// sebuah fungsi dari object Math yang digunakan untuk mengembalikan nilai acak antara 0 dan 1
console.log(Math.random());
// output random antara 0 sampai 1 (contoh 0.2554250048798339, 0.36546293773717076)

// 10. search
// sebuah fungsi untuk mencari apakah dalam sebuah string ditemukan kata/karakter yang ingin dicari menggunakan regex. mengembalikan nilai index kata/karater tersebut ditemukan, jika tidak ditemukan kembalikan -1
const test = "cari kata dalam kalimat ini";
const regex = /kata/;
console.log(test.search(regex));
// output 5 karena 'kata' ditemukan pada index ke 5
