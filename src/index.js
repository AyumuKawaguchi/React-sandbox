// constで定義したオブジェクトはプロパティの変更が可能

// const val4 = {
//   name: "kawa",
//   age: 31
// }

// val4.address = "aaaa";

// console.log(val4);

// constで定義した配列はプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "川口";
//  const age = 31;

// //  従来のやりかた
//  const message = "私の名前は" + name + "です。年齢は" + age;
//  console.log(message);

// // テンプレート文字列を用いた方法

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * 分割代入
 */

// //  オブジェクトで受け取る場合
//  const myProfile = {
//   name: "かわ",
//   age: 31
//  };

//  const message1 = `オブジェクト：私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;

//  console.log(message1);

//  const {name, age} = myProfile;

//  const message2 = `オブジェクト分割代入：私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// // 配列で受け取る場合
// const myProfile2 = ['kawa',31];

// const message3 = `配列：名前は${myProfile2[0]}で、年齢は${myProfile2[1]}です`;
// console.log(message3);

// const [name2, age2] = myProfile2;
// const message4 = `配列分割代入：名前は${name2}で、年齢は${age2}です`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

//  const sayHello = (name = "デフォルト値") => console.log(`こんにちは！${name}さん！`);

//  sayHello();

/**
 * スプレット構文　...
 */

//  配列の展開
const ary1 = [1, 2];
//  console.log(ary1);
//  console.log(...ary1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(ary1[0], ary1[1]);
const sumFunc2 = (num1, num2) => console.log(num1 + num2);
sumFunc2(...ary1);

// 配列をまとめる

const ary2 = [1, 2, 3, 4, 5];
const [num1, num2, ...ary3] = ary2;

console.log(num1);
console.log(num2);
console.log(...ary3);

// 配列のコピー、結合

const ary4 = [10, 20];
const ary5 = [30, 40];

const ary6 = [...ary4];
console.log(ary6);

const ary7 = [...ary4, ...ary5];
console.log(ary7);

// mapやfilterを使った配列の処理

const nameAry = ["田中", "やまだ", "さとう"];

for (let index = 0; index < nameAry.length; index++) {
  console.log(nameAry[index]);
}

// 配列から配列をつくる
const nameAry2 = nameAry.map((name) => {
  return name;
});
console.log(nameAry2);

// 配列からfor文のように値を取り出す

nameAry.map((name) => {
  console.log(name);
});

// 条件によって取り出す

const numAry = [1, 2, 3, 4, 5];

const newNumAry = numAry.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumAry);
