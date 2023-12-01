// Add new functions, variables here
function factorial(numb){
    let result = BigInt(1);
    let a = BigInt(numb);
    
    if(a > 1n){
      for(let i = a; i > 1n; i -= 1n){
        result *= i;
      }
    }
    
    return result;
  }


  function toHop(n, k){
    let a = factorial(n - k);
    n = factorial(n);
    k = factorial(k);

    let result = parseInt(n/(k * a));
    return result;
  }


  function xacSuat(x, y, denominator){
    let result = 0;
    for(let i = y; i <= x; i++){
      let temp = toHop(13, i) * toHop(39, (x - i));
      result += temp;
    }
    result = parseFloat(result/denominator);
    result = result.toFixed(2);

    if(result == 0.00){
      result = "0";
    }
    return result;
  }


function main(input) {
  input = input.split(" ");
  let x = parseInt(input[0]);
  let y = parseInt(input[1]);
  let denominator = parseInt(toHop(52, x));

  
  // let check1 = factorial(52);
  // let check2 = factorial(2);
  // let check3 = factorial(50);
  // let check4 = parseInt(check1/(check2 * check3));


  console.log(xacSuat(x, y, denominator));
}



module.exports = main;
