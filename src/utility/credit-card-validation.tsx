export function creditCardValidation(value: any, callback: Function) {
  const numbers = value.replace(/(\D)/g, "");
  let displayNum = numberDisplay(numbers);
  let nCheck = 0,
    bEven = false;
  for (var n = numbers.length - 1; n >= 0; n--) {
    var cDigit = numbers.charAt(n),
      nDigit = parseInt(cDigit, 10);
    if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
    nCheck += nDigit;
    bEven = !bEven;
  }
  callback(nCheck % 10 == 0 && numbers.length == 16, displayNum, numbers);
}

export function creditCardDateValidation(value: any, callback: Function) {
  let digits = value.substring(0, 5).replace(/\D/g, "");
  const dateValue = digits.match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/);
  if (dateValue) {
    callback(true, `${dateValue[1]}/${dateValue[2]}`);
    return;
  }
  if (digits?.length >= 3) {
    callback(false, `${digits.substring(0, 2)}/${digits.substring(2, 4)}`);
    return;
  }
  callback(false, digits);
}

export function creditCardCvcValidation(value: any, callback: Function) {
  if (/[^0-9-\s]+/.test(value)) {
    callback(false, "");
    return;
  }
  if (value?.length > 2) {
    callback(true, value.substring(0, 3));
    return;
  }
  callback(false, value);
}

function numberDisplay(value: any) {
  const cardValue = value
    .replace(/\D/g, "")
    .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);

  return !cardValue[2]
    ? cardValue[1]
    : `${cardValue[1]} ${cardValue[2]}${`${
        cardValue[3] ? ` ${cardValue[3]}` : ""
      }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ""}`}`;
}
