function playWithAsterik(n) {
    let result = '';
    const maxAsterisks = n; 
    for (let i = 1; i <= n; i++) {
      const asterisks = i;
      const spaces = maxAsterisks - asterisks; 
      for (let j = 0; j < spaces; j++) {
        result += ' ';
      }
      for (let j = 0; j < asterisks; j++) {
        result += '* ';
      }
      result += '\n';
    }
    return result;
  }
  
  console.log(playWithAsterik(5));