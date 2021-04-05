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

} // end method MinWinSubString




/*

Tree Constructor
Have the function TreeConstructor(strArr) take the array of strings stored in strArr, which will contain pairs of integers in the following format: (i1,i2), where i1 represents
a child node in a tree and the second integer i2 signifies that it is the parent of i1. For example: if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following 
tree:

which you can see forms a proper binary tree. Your program should, in this case, return the string true because a valid binary tree can be formed. If a proper binary tree 
cannot be formed with the integer pairs, then return the string false. All of the integers within the tree will be unique, which means there can only be one node in the tree 
with the given integer value.

Examples
Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
Output: true
Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
Output: false
*/

function TreeConstructor(strArr) { 
/* helper function to arrange the string arr into an object whose key/value
 pair represents parent node and an array of children nodes respectively
 */
let getTree = (arr)=> { 
let o = {};
arr.forEach( tuple=>{
    let [child, parent] = tuple.match(/\d+/ig);
    parent_children = o[parent];
    if( parent_children) { 
      parent_children.push(child);
      } else o[parent] = [child]; 
    });
return o;
}

// get object Tree of the strArr
let tree = getTree(strArr);

/* If any parent node has more than 2 children, this tree is not a 
binary tree */
let highest_children_count = 0;
for( parentNode in tree){
  children = tree[parentNode];
  //update highest_children_count 
  highest_children_count =  ( children.length > highest_children_count) ? 
                                    children.length : highest_children_count;
}

  //if highest_children_count is greater than 2 return 'false' else return true
  return (highest_children_count > 2 ) ? "false":"true"; 

} // end method TreeConstructor


/*
Bracket Matcher
Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. 
Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because 
the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

Examples
Input: "(coder)(byte))"
Output: 0
Input: "(c(oder)) b(yte)"
Output: 1
*/
   
function BracketMatcher(str) { 
//match the brackets from str
let brackets = str.match(/[()]/ig)

let open_bracket_count = 0;
let closed_bracket_count = 0;
brackets.forEach( bracket=>{
  if ( bracket =="("){
    open_bracket_count++;
  } else if ( bracket == ")"){
    closed_bracket_count++;
  }
})

  /*
  returns 1 if the number of open_brackets matches
  the number of closed_brackets otherwise 0
  */
  return ( open_bracket_count === closed_bracket_count ) ? 1 : 0;

}//end BracketMatcher
   
