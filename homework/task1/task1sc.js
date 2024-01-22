let fullName = "Ulfat Zakirli Rovshen";

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
console.log(fullName.split(""));
// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
let newFullName =
  fullName.slice(6, 14) + fullName.slice(0, 6) + fullName.slice(14, 21);
console.log(newFullName);
// 3) Alinan yeni arrayi stringe cevirin(join)
console.log(newFullName.split("").join(" "));

let arr = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
  5, 6, 3, 7, 3, 7,
];

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
console.log(arr.filter((num) => num === 5).length);
//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
console.log(arr.reduce((sum, num) => sum + num));
//6) arrayda tekrar olunan reqemleri artan sira ile duzun
console.log(
  arr.filter((item, index) => arr.indexOf(item) !== index).sort((a, b) => a - b)
);
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
const maxnum = Math.max(...arr);
console.log(maxnum, arr.filter((num) => num === maxnum).length);
//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
const ad = "nazrin";
const adUzunluq = ad.length;
console.log(adUzunluq, arr.includes(adUzunluq));
//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
console.log(arr.findIndex((num) => num % 3 === 2));
//10) arraydaki en boyuk reqemin ilk indexini tapin
console.log(arr.indexOf(Math.max(...arr)));
//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    console.log(i);
  }
}
//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
console.log(
  arr.filter((num) => num > 2),
  arr.length - arr.filter((num) => num > 2).length
);
//14) 7 reqeminin indexleri cemini tapin.
let yeddininIndexleri = arr.reduce((indices, num, index) => {
  if (num === 7) indices.push(index);
  return indices;
}, []);
let yeddininIndexlerininCemi = yeddininIndexleri.reduce(
  (sum, index) => sum + index
);
console.log(yeddininIndexlerininCemi);




let arr2 = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

//Aşağıdakı hər bir taskı function icərisində yazın.

//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
function tIleBashlayan(arr2) {
  return arr2.filter((obj) => obj.name.startsWith("t"));
}
console.log(tIleBashlayan(arr2));
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
function tIleBashlayanVeBiten(arr2) {
  return arr2.filter(
    (obj) => obj.name.startsWith("t") && obj.name.endsWith("t")
  ).length;
}
//console.log(tIleBashlayanVeBiten(arr2));
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
function tIleBashlayanVeBiten(arr2) {
  return arr2
    .filter((obj) => obj.name.startsWith("t") && obj.name.endsWith("t"))
    .reduce((sum, obj) => sum + obj.key, 0); //sondaki 0-ın əhəmiyyətini anlamadım
}
console.log(tIleBashlayanVeBiten(arr2));

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
function iIleBiten(arr2) {
  return arr2.map((obj) =>
    obj.name.endsWith("e") ? { ...obj, name: "SuperDev" } : obj
  );
}
console.log(iIleBiten(arr2)); //tam başa düşmədim, internetdən yazdım
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
function enUzunSozunKeyi(arr2) {
  const enUzunSoz = arr2.reduce((longest, obj) =>
    obj.name.length > longest.name.length ? obj : longest
  );
  return enUzunSoz.key;
}
console.log(enUzunSozunKeyi(arr2)); //tam başa düşmədim, internetdən yazdım
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
function enUzunSozunIndexininKvadrati(arr2) {
  const enUzunSozunIndexi = arr2.findIndex(
    (obj) => obj.name.length === Math.max(...arr2.map((o) => o.name.length))
  );
  return enUzunSozunIndexi ** 2;
}
console.log(enUzunSozunIndexininKvadrati(arr2)); //tam başa düşmədim, internetdən yazdım
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
function uzunlughuDordOlan(arr2) {
  return arr2.filter((obj) => obj.name.length === 4);
}
console.log(uzunlughuDordOlan(arr2));
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
let enBoyukKey = 0;
let enBoyukKeyinNamei = "";
for (var i = 0; i < arr2.length; i++) {
  if (arr2[i].key > enBoyukKey) {
    enBoyukKey = arr2[i].key;
    enBoyukKeyinNamei = arr2[i].name;
  }
}
console.log(enBoyukKeyinNamei);
// 24 arr2 de terkibinde 2 'l' herfi olan obyekt(ler)in index(ler)ini tapin.
for (let i = 0; i < arr2.length; i++) {
    count =0
  for (let j = 0; j < arr2[i].name.length; j++) {
    if (arr2[i].name[j] == "l") {
        count++;
    }
  }
  if (count == 2) {
    console.log(arr2[i].name, i);
  }
}

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
for (let i = 0; i < arr2.length; i++) {
    count =0
  for (let j = 0; j < arr2[i].name.length; j++) {
    if (arr2[i].name[j] == "t") {
        count++;
    }
  }
  if (count == 2) {
    console.log(arr2[i].key);
  }
}

// Second try

fullName = "Ulfat Zakirli Rovshen";

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
function herflereAyir() {
  console.log(fullName.split(""));
}
herflereAyir();

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
function yerDeyisdir() {
  console.log(
    fullName.slice(6, 14) + fullName.slice(0, 6) + fullName.slice(14, 21)
  );
}
yerDeyisdir();
// 3) Alinan yeni arrayi stringe cevirin(join)
function stringeCevir() {
  console.log(fullName.split("").join(" "));
}
stringeCevir();

//let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
function tekrar() {
  console.log(arr.filter((num) => num === 5).length);
}
tekrar();

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
function cem() {
  console.log(arr.reduce((sum, num) => sum + num));
}
cem();
//6) arrayda tekrar olunan reqemleri artan sira ile duzun
function tekrarlariArtanSiraIleDuz() {
  console.log(
    arr
      .filter((item, index) => arr.indexOf(item) !== index)
      .sort((a, b) => a - b)
  );
}
tekrarlariArtanSiraIleDuz();
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
function enBoyukReqem() {
  const maxnum = Math.max(...arr);
  console.log(maxnum, arr.filter((num) => num === maxnum).length);
}
enBoyukReqem();
//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
function addakiHerflerinSayi() {
  const ad = "nazrin";
  const adUzunluq = ad.length;
  console.log(adUzunluq, arr.includes(adUzunluq));
}
addakiHerflerinSayi();
//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
const uceBolunendeQaliqdaIki = function () {
  console.log(arr.findIndex((num) => num % 3 === 2));
};
uceBolunendeQaliqdaIki();
//10) arraydaki en boyuk reqemin ilk indexini tapin
const enBoyukReqemIlkIndex = function () {
  console.log(arr.indexOf(Math.max(...arr)));
};
enBoyukReqemIlkIndex();
//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
const dordReqemininIndexlerinde = function () {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
      console.log(i);
    }
  }
};
dordReqemininIndexlerinde();

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
let beshinIndexleri = arr.reduce((indices, num, index) => {
    if (num === 5) indices.push(index);
    return indices;
  }, []);
  console.log(Math.max(...beshinIndexleri));
  console.log(Math.min(...beshinIndexleri));
//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
//14) 7 reqeminin indexleri cemini tapin

let arr3 = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

//Aşağıdakı hər bir taskı function icərisində yazın.

//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
