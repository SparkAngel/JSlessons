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
  a1 = lowerPhrase.split(''),
  a2 = lowerpattern.split('');

    
  
  

    for (var i = 0; i < a2.length; i++) {
        
        var found = false;
        for (var j = 0; j < a1.length; j++) {
            if (a1[j] === a2[i]) {
                found = true;
                break;
            }
        }
     
        }
    
    return found;


};


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