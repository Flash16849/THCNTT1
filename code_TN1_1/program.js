// Add new functions, variables here

function main(input) {
  let inputs = input.split(" ");
  let a = inputs[0];
  let b = inputs[2];
  
  let numb1 = 0;
  let numb2 = 0;

  if(a.length >= b.length){
    numb1 = a;
    numb2 = b;
  }else{
    numb1 = b;
    numb2 = a;
  }
  
  


}

module.exports = main;
