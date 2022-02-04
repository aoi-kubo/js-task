// function calc() {
//   console.log(document.getElementById("product"));
// } 
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

const products = [
  {
    id: 1,
    name: "オリジナルブレンド200g",
    price: 500,
  },
  {
    id: 2,
    name: "オリジナルブレンド500g",
    price: 900,
  },
  {
    id: 3,
    name: "スペシャルブレンド200g",
    price: 700,
  },
  {
    id: 4,
    name: "スペシャルブレンド500g",
    price: 1200,
  }
];


function add() {
  const targetId = parseInt(priceElement.value);
  const product = products.find(item => item.id == targetId);
  const number = numberElement.value;
  let purchase = {
    product: product,
    number: parseInt(number),
  };
  // for (let i = 0; i <= purchases.length; i++) {
  //   debugger
  //   if (purchases.length < 1 || purchases[i].price !== purchase.price) {
  //     debugger
  //     purchases.push(purchase);
  //     break;
  //   } else {
  //     debugger
  //     purchases[i].number += purchase.number;
  //     break;
  //   }
  // }
  const newPurchase = purchases.findIndex((item) => item.product.id === purchase.product.id);

  if (purchases.length < 1 || newPurchase === -1) {
    purchases.push(purchase)
  } else {
    purchases[newPurchase].number += purchase.number
  }

  // purchase.forEach((item) => {
  //   if (item.price === purchase.price) {
  //     newPurchase = false;
  //   }
  // })
  // if (purchases.length < 1 || newPurchase) {
  //   purchases.push(purchase);
  // } else {
  //   for (let i = 0; i < purchases.length; i++) {
  //     if (purchases[i].price === purchases.price) {
  //       purchases[i].number += purchase.number;
  //     }
  //   }
  // }
  // purchases.push(purchase);
  window.alert(`${display()}\n小計${subtotal()}円`);
  priceElement.value = "";
  numberElement.value = "";
};

// 現時点での購入履歴の内容（〇〇が何点）を返す関数
function display() {
  // let string = "";
  // for (let i = 0; i < purchases.length; i++) {
  //   string += `${purchases[i].price}円が${purchases[i].number}点`;
  // }
  // return string;
  return purchases.map(purchase => {
    return `${purchase.product.name} ${purchase.price}円が${purchase.number}点`
  }).join("\n");
};

// 小計を算出する関数
function subtotal() {
  // let sum = 0;
  // for (let i = 0; i < purchases.length; i++) {
  //   sum += purchases[i].price * purchases[i].number;
  // }
  // return sum;
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.price * purchase.number
  }, 0);
};

function calc() {
  // const price = parseInt(priceElement.value);
  // const number = parseInt(numberElement.value);
  // window.alert(`${price}円が${number}個。小計は${price * number}円です。`);
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です。`);
  purchases = [];
  priceElement.value = "";
  numberElement.value = "";
};

// 送料について
function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000) {
    return 500;
  } else {
    return 250;
  }
};

