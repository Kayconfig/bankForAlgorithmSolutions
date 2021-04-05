/*
Min Window Substring
Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the 
second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example: if strArr is
["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program 
should return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of
the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only 
contains lowercase alphabetic characters.

Examples
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje
Input: ["aaffhkksemckelloe", "fhea"]
Output: affhkkse
*/

function MinWindowSubstring(strArr) { 

// Helper method to get all substrings of N whose minimum length == K.length
const getSubstrings =  (N,K)=> {
    let arr = []
    for( let j= K.length; j < N.length; j++){
        for ( let i= 0; i <= N.length; i++){
            if ( (i+j) <= N.length ){
            arr.push( N.slice(i, i+j) )
                
            }
        } } //end forloop

    return arr;
} // 

let substrings = getSubstrings(...strArr)//unpack strArr
//iterate through the substrings
for ( let i=0; i < substrings.length; i++){
substring= substrings[i]

  let  substring_arr = substring.split("")//array of substring
  let solutionFound = true; // INITIALISE solutionFound to true
  let K = strArr[1]
  //iterate through each character of K to check if the current substring of N
  for( let index=0; index < K.length; index++){
    current_kth_element = K[index]
    if ( substring_arr.includes( current_kth_element)){
      /*console.log( current_kth_element,"exist in the ", substring_arr)
       get index of current_kth_element in substring_arr */
      index_kth_element = substring_arr.indexOf(current_kth_element)
      substring_arr.splice(index_kth_element, 1)
      
    }else{
      /*set the solutionFound to false, if any character of K doesn't
      exist in N */
      solutionFound = false;
      break;
    }
  } //end for loop

//returns the substring of N which contains all characters of K
  if( solutionFound) return substring // 

}


}
