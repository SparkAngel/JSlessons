/**
 * Return true if all the letters in the `phrase`
 * are present in the `pattern`.
 *
 * Comparison should be case insensitive. Meaning 
 * phrase 'A' contains pattern 'a'.
 */
function hasAllLetters(pattern, phrase) {

  let lowerpattern = pattern.toLowerCase(),
  lowerPhrase = phrase.toLowerCase(),
  a1 = lowerPhrase.replace(/\s/g, ''),
  a2 = lowerpattern.replace(/\s/g, '');


  let result = true;     
  
  

   for (var i = 0; i < a1.length; i++) {
    if (a2.includes(a1[i]) == false )
    {
      result = false ;
      break;
    }
 
   
    

     
}
return result;
}


// Tests
test(hasAllLetters('abcdef', 'Dead Beef'), true, 'Dead Beef');
test(hasAllLetters('abcdef', 'Some phrase'), false, 'Some phrase');
test(hasAllLetters('Happy New Year', 'nyh'), true, 'nyh');


function test(actual, expected, testName = '') {
  if (actual !== expected) {
    const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
    console.error(errorMessage);  
  } else {
    console.log(`Test ${testName} passed!`);
  }
}