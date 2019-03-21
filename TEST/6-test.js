/**
 * Given two strings, first and second. Find all letters (ignoring case)
 * which are present only in one string but not the other.
 */
function getUniqueLetters(first, second) {
  let lowerfirst = first.toLowerCase(),
  lowersecond = second.toLowerCase(),
  a1 = lowerfirst.replace(/\s/g, ''),
  a2 = lowersecond;


  let result = '';     
  
  
   for (var i = 0; i < a1.length; i++) {
     
    if (a2.includes(a1[i]) == false )
    {
     if(result.includes(a1[i]) == false){
      result += a1[i]; 
     }
      
    }
    }
    for (var j = 0; j < a2.length; j++) {
     
      if (a1.includes(a2[j]) == false )
      {
        if(result.includes(a2[i]) == false){
          result += a2[j]; 
      }
           
    }  

}
return result;
}

  
  
  
  // Tests
  test(getUniqueLetters('aBcdef', 'CdEfgh'), 'abgh');
  test(getUniqueLetters('aAAaabBb', 'ab'), '');
  test(getUniqueLetters('Happy New Year', 'nyh'), 'apewr');
  
  function test(actual, expected, testName = '') {
    if (actual !== expected) {
      const errorMessage = `Test ${testName} failed: "${actual}" is not equal to expected "${expected}"`;
      console.error(errorMessage);  
    } else {
      console.log(`Test ${testName} passed!`);
    }
  }