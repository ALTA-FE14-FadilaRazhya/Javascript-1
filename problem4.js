function caesarCipher(offset,input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
      let charCode = input.charCodeAt(i); 
      if (charCode >= 97 && charCode <= 122) { 
        let shiftedCode = ((charCode - 97 + offset) % 26) + 97;
        result += String.fromCharCode(shiftedCode);
      } 
      else {  
        result += input.charAt(i);
      }
    }
    return result;
  }
  
  console.log(caesarCipher(3, "abc"))
  console.log(caesarCipher(2, "alta")) 
  console.log(caesarCipher(10, "alterraacademy"))
  console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz"))
  console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz"))