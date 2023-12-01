// Add new functions, variables here

function main(input) {
  input = input.split(' ');
  let N = input[0];
  let X = input[1];
  let Y = input[2];
  let result = 0;

  switch(X){
    case "2": Binary(N, Y);
      break;
    case "8": Octal(N, Y);
      break;
    case "10": Decimal(N, Y);
      break;
    case "16": Hexa(N, Y);
      break;
  }

  function Binary(N, Y) {
    if(Y == "8"){
    let result = he2to8(N);
      console.log(result);
    }else if(Y == "10"){
      let result = he2to10(N);
      console.log(result);
    }else if(Y == "16"){
      let result = he2to16(N);
      console.log(result);
    }
  }

  function he2to8(N){
    let result = [];
    let arr = reversAndSplit(N, 3);
    for(let i = 0; i < arr.length; i++){
      switch(arr[i]){
        case "000":
          result.push("0");
          break;
        case "001":
          result.push("1");
          break;
        case "010":
          result.push("2");
          break;
        case "011":
          result.push("3");
          break;
        case "100":
          result.push("4");
          break;
        case "101":
          result.push("5");
          break;
        case "110":
          result.push("6");
          break;
        case "111":
          result.push("7");
          break;
      }
    }
    result = result.join("");
    return result;
  }

  function he2to10(N){
    let result = 0;
    let arr = N.split("");
    arr = arr.reverse();  
    for(let i = 0; i < arr.length; i++){
      result += parseInt(arr[i]) * 2 ** i;
    }
    return String(result);
  }

  function he2to16(N){
    let result = [];
    let arr = reversAndSplit(N, 4);
    for(let i = 0; i < arr.length; i++){
      switch(arr[i]){
        case "0000":
          result.push("0");
          break;
        case "0001":
          result.push("1");
          break;
        case "0010":
          result.push("2");
          break;
        case "0011":
          result.push("3");
          break;
        case "0100":
          result.push("4");
          break;
        case "0101":
          result.push("5");
          break;
        case "0110":
          result.push("6");
          break;
        case "0111":
          result.push("7");
          break;
        case "1000":
          result.push("8");
          break;
        case "1001":
          result.push("9");
          break;
        case "1010":
          result.push("A");
          break;
        case "1011":
          result.push("B");
          break;
        case "1100":
          result.push("C");
          break;
        case "1101":
          result.push("D");
          break;
        case "1110":
          result.push("E");
          break;
        case "1111":
          result.push("F");
          break;
      }
    }
    result = result.join("");
    return result;
  }

  function Octal(N, Y) {
    if(Y == "2"){
      let result = he8to2(N);
      console.log(result);
    }else if(Y == "10"){
      let result = he8to10(N);
      console.log(result);
    }else if(Y == "16"){
      let result = he8to16(N);
      console.log(result);
    }
  }

  function he8to2(N){
    let result = [];
    let arr = N.split("");
    for(let i = 0; i < arr.length; i++){
      switch(arr[i]){
        case "0":
          result.push("000");
          break;
        case "1":
          result.push("001");
          break;
        case "2":
          result.push("010");
          break;
        case "3":
          result.push("011");
          break;
        case "4":
          result.push("100");
          break;
        case "5":
          result.push("101");
          break;
        case "6":
          result.push("110");
          break;
        case "7":
          result.push("111");
          break;
      }
    }
    result = result.join("");
    result = removeLeadingZeros(result);
    return result;
  }



  function he8to10(N){
    let result = 0;
    let arr = N.split("");
    arr = arr.reverse();
    for(let i = 0; i < arr.length; i++){
      result += parseInt(arr[i]) * 8 ** i;
    }
    return String(result);
  }

  function he8to16(N){
    let chuyenDoi = he8to2(N);
    let result = he2to16(chuyenDoi);
    return String(result);
  }

  function Decimal(N, Y) {
    if(Y == "2"){
      let result = he10to2(N);
      console.log(result);
    }else if(Y == "8"){
      let result = he10to8(N);
      console.log(result);
    }else if(Y == "16"){
      he10to16(N);
    }
  }

  function he10to2(arr) {
    arr = parseInt(arr);
    let result = [];
    while (arr > 0) {
      result.push(arr % 2);
      arr = Math.trunc(arr / 2);
    }
    result = result.reverse().join("");
    return result;
  }

  function he10to8(arr) {
    arr = parseInt(arr);
    let result = [];
    while (arr > 0) {
      result.push(arr % 8);
      arr = Math.trunc(arr / 8);
    }
    result = result.reverse().join("");
    return result;
  }

  function he10to16(arr) {
    let chuyenDoi = he10to2(arr);
    let result = he2to16(chuyenDoi);
    return result;
  }

  function Hexa(N, Y) {
    if(Y == "2"){
    let result = he16to2(N);
      console.log(result);
    }else if(Y == "8"){
      let result = he16to8(N);
      console.log(result);
    }else if(Y == "10"){
      let result = he16to10(N);
      console.log(result);
    }
  }

  function he16to2(N){
    let result = [];
    let arr = N.split("");
    for(let i = 0; i < arr.length; i++){
      switch(arr[i]){
        case "0":
          result.push("0000");
          break;
        case "1":
          result.push("0001");
          break;
        case "2":
          result.push("0010");
          break;
        case "3":
          result.push("0011");
          break;
        case "4":
          result.push("0100");
          break;
        case "5":
          result.push("0101");
          break;
        case "6":
          result.push("0110");
          break;
        case "7":
          result.push("0111");
          break;
        case "8":
          result.push("1000");
          break;
        case "9":
          result.push("1001");
          break;
        case "A":
          result.push("1010");
          break;
        case "B":
          result.push("1011");
          break;
        case "C":
          result.push("1100");
          break;
        case "D":
          result.push("1101");
          break;
        case "E":
          result.push("1110");
          break;
        case "F":
          result.push("1111");
          break;
      }
    }
    result = result.join("");
    result = removeLeadingZeros(result);
    return result;
  }

  function he16to8(N){
    let chuyenDoi =  he16to2(N);
    let result = he2to8(chuyenDoi);
    return String(result);
  }

  function he16to10(N){
    let chuyenDoi =  he16to2(N);
    let result = he2to10(chuyenDoi);
    return String(result);
  }


  function removeLeadingZeros(arr) {
    let i = 0;
    while (arr[i] == "0") {
      i++;
    }
    return arr.substring(i);
  }

  function reversAndSplit(str, chunkSize){

    let result = [];

    for (let i = str.length; i > 0; i -= chunkSize) {
      result.push(str.substring(i - chunkSize, i));
    }

    let maxLength = Math.max(...result.map((str) => str.length));
    result = result.map((str) => str.padStart(maxLength, "0"));

    result = result.reverse();

    return String(result);
  }

  function main(input) {
    let arr = input.split(" ");
    let N = arr[0];
    N = removeLeadingZeros(N);
    let X = arr[1];
    let Y = arr[2];

    if(X == "2"){
      Binary(N, Y);
    } else if(X == "8"){
      Octal(N, Y);
    }else if(X == "10"){
      Decimal(N, Y);
    }else if(X == "16"){
        Hexa(N, Y);
    }
  }
}
module.exports = main;
