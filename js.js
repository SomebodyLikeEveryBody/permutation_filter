function getAllPermutations(string) {
    var results = [];
  
    if (string.length === 1) {
      results.push(string);
      return results;
    }
  
    for (var i = 0; i < string.length; i++) {
      var firstChar = string[i];
      var charsLeft = string.substring(0, i) + string.substring(i + 1);
      var innerPermutations = getAllPermutations(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  }

//element E in position K
//el.indexOf(E) === K


pattern = 'LMNO';
l = getAllPermutations(pattern);



console.log(l.filter(
    (el) => (
                el.indexOf('M') < el.indexOf('O')
                && el.indexOf('N') < el.indexOf('L')
                && (el.includes('MN') || el.includes('NM'))
                && (el.includes('NL') || el.includes('LN'))
                && (el.includes('LO') || (el.includes('OL')))

            )
));
