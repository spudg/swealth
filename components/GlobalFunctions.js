import abbreviate from "number-abbreviate";

export function currencyFormat(num) {
  try {
    if (num < 1000) {
      return "£" + abbreviate(num, 0);
    } else if (num === 1000 || (num > 1000 && num < 10000)) {
      return "£" + abbreviate(num, 2);
    } else if (num === 10000 || (num > 10000 && num < 100000)) {
      return "£" + abbreviate(num, 1);
    } else if (num === 100000 || (num > 100000 && num < 1000000)) {
      return "£" + abbreviate(num, 0);
    } else if (num === 1000000 || (num > 1000000 && num < 10000000)) {
      return "£" + abbreviate(num, 2);
    } else if (num === 10000000 || (num > 10000000 && num < 100000000)) {
      return "£" + abbreviate(num, 1);
    } else if (num === 100000000 || (num > 100000000 && num < 1000000000)) {
      return "£" + abbreviate(num, 0);
    } else if (num === 1000000000 || (num > 1000000000 && num < 10000000000)) {
      return "£" + abbreviate(num, 2);
    } else if (num === 1000000000 || (num > 1000000000 && num < 10000000000)) {
      return "£" + abbreviate(num, 1);
    } else if (num === 1000000000 || (num > 1000000000 && num < 10000000000)) {
      return "£" + abbreviate(num, 0);
    } else {
      return "£" + abbreviate(num);
    }
  } catch (e) {
    console.log(e);
  }
}

export const firebaseConfig = {
  //Shhh
};
