function capital(letter,num){
    let result = "";
    for(let i=0;i<num;i++){
      result += i === 0 ? letter.toUpperCase(): letter.toLowerCase();
    }
    return result;
    console.log(result);
    
  }
  
  function accum(str){
    let result = "";
    let letters = str.split("")
    
    let counter = 1;
  
    for(let letter of letters){
      result += capital(letter,counter);
      counter ++;
    }
    return result;
  }

  accum("abcd");