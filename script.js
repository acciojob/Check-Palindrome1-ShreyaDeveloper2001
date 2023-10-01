// complete the given function

function palindrome(str){
	// Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Compare the cleaned string with its reverse
  return cleanedString === cleanedString.split('').reverse().join('');

}
module.exports = palindrome
