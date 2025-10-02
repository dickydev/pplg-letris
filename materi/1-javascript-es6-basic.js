// Fitur-fitur ES6 :
// 1. Deklarasi variabel Let dan Const :
/*
    -. let : block-scope ({}), nilai masih bisa berubah namun tidak bisa deklarasi ulang
    -. const : block-scope ({}), nilai tidak bisa berubah serta tidak bisa deklarasi ulang
*/

// Contoh Let
let nama = "Ayub";
console.log(nama);
nama = "El Ayub";
console.log(nama);

// Contoh Let dengan Scope
let umur = 16;
{
  let umur = 23;

  console.log("Umur ayub :", umur);
}
console.log("Umur ayub :", umur);

// Contoh Const
const pajak = 10_000;
console.log(pajak);

// Contoh Const dengan Scope

// Di gunung sindur
const g_force = 9.8;
{
  // Di gunung himalaya
  const g_force = 0;
  console.log(g_force);
}
console.log(g_force);

// 2. Arrow Function dan Template Literals
/*
    -. Arrow Function : Fungsi Panah -> Jauh lebih singkat, ringkas serta mudah dibaca
    -. Template Literals : Cara baru menulis string menggunakan backtick `` daripada menggunakan kutip '' / ""
*/
// >. Declaration Function
function sayHelloDeclare(nama, umur, alamat, sekolah) {
  console.log(
    "Hello, " +
      nama +
      ", Umur :" +
      umur +
      " ,alamat " +
      alamat +
      " ,sekolah " +
      sekolah
  );
}
sayHelloDeclare("Alvin", 20, "Gak tau", "Letris 2");

// >. Arrow Function
const sayHelloArrow = (nama, umur, alamat, sekolah) => {
  console.log(
    `Hello, ${nama}, Umur ${umur}, alamat ${alamat}, sekolah ${sekolah}`
  );
};
sayHelloArrow("Alvin", 20, "Gak tau", "Letris 2");
