function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal < nilaiAkhir) {
    if (dataArray.length >= 5) {
      let res = [];
      dataArray.forEach((item) => {
        if (item >= nilaiAwal && item <= nilaiAkhir) {
          res.push(item);
        }
      });
      console.log(res.sort((a, b) => a - b));
    } else {
      console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    }
  } else {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  }
}

SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
// SeleksiNilai(0, 100, [10, 100, 28, 12, 32, 31, 50, 12]);
