//how to change lower case to upper case
var sentence = 'the quick brown fox';

var capitaliseString = (word)=> word[0].lowerCase()+ word(1).toupperCase 
//the first word should be in lower case while the second should be in uppercase

var capitaliseWords = (word) =word.split(' ').map
(capitaliseString).join('');
//return a string to array

console .log(capitaliseString)