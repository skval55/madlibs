function addCommas(num) {
  let decNum = "";
  let numberToIndex = 3;
  let numWithCommas = num.toString().split("");
  if (numWithCommas.indexOf(".") !== -1) {
    decNum = numWithCommas.splice(
      numWithCommas.indexOf("."),
      numWithCommas.length
    );
  }
  let numLength = numWithCommas.length;
  if (numWithCommas[0] === "-") numberToIndex = 4;
  while (numLength > numberToIndex) {
    numLength -= 3;
    numWithCommas.splice(numLength, 0, ",");
  }
  return decNum !== ""
    ? numWithCommas.concat(decNum).join("")
    : numWithCommas.join("");
}

module.exports = addCommas;
