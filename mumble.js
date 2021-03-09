function funCapatalize(letter,num){
    let result = "";
    for(let i=0;i<num;i++){
      if(i===0){
        result += letter.toUpperCase();
      }
      else{
        result += letter.toLowerCase();
      }
      
    }
    return result;
  }
  
  function mumblingInput(str){
    let result = "";
    let letters=str.split("")
    
    let counter = 1;
  
    for(let letter of letters){
      result += funCapatalize(letter,counter)
      counter ++;
    }
    return result;
  }

  mumblingInput("abcd");