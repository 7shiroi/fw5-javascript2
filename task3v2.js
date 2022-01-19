function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal < nilaiAkhir) {
    if (dataArray.length >= 5) {
      const res = dataArray.filter(
        (value) => value >= nilaiAwal && value <= nilaiAkhir
      );

      console.log(res.sort((a, b) => a - b)); //menambahkan fungsi dalam sort agar sorting dilakukan berdasarkan angka, bukan ascii || (a-b) untuk asc, (b-a) desc
    } else {
      console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    }
  } else {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  }
}

SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
// SeleksiNilai(0, 100, [10, 100, 28, 12, 32, 31, 50, 12]);
