/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/


function doSomething(start,end){
	let value=start;
	
	for(let i=value+1 ; i<=end; i++){
		value = (value*i)/gcd(value,i);
	}
	console.log(value);
}

function gcd(value, next) {
  while(next) {
    var temp = next;
    next = value % next;
    value = temp;
  }
  return value;
}

doSomething(1,20);
