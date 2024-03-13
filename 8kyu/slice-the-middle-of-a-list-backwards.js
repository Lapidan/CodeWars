// DESCRIPTION:
// Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.


//SOLUTION:

function reverseMiddle(a){
    let n = a.length, k = n>>1
    return a.slice(k-1,k+1+n%2).reverse()
  }