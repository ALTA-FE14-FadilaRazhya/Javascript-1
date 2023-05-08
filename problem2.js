function ubahHuruf(sentence) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    const shiftedAlphabet = alphabet.slice(10) + alphabet.slice(0, 10); 
    let result = '';
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      const index = alphabet.indexOf(char);
      if (index === -1) { 
        result += char;
      } else { 
        result += shiftedAlphabet[index];
      }
    }
    return result;
  }
  
  console.log(ubahHuruf("SEPULSA OKE"))     
  console.log(ubahHuruf("ALTERRA ACADEMY")) 
  console.log(ubahHuruf("INDONESIA"))       
  console.log(ubahHuruf("GOLANG"))          
  console.log(ubahHuruf("PROGRAMMER"))