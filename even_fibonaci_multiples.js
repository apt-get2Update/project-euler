/*Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms*/

let value=0;
let limit =4000000;
let fibno=[1,2];
function doSomething(){
	const cal = (array)=> array[ array.length - 1 ] + array[ array.length - 2 ];
  	while ( fibno[ fibno.length - 1 ] < limit ) fibno.push( cal(fibno) );
    fibno.forEach(n => n % 2 === 0 ? value += n : null); 
    return value;
}
console.log(doSomething());