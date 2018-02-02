/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?*/

function is(n){
	count=0; 
	for(let i=1; i < n ;i++){
		if(n%i ===0 ){
			count++;
		}
		if(count > 1){
			return false;
		}
	}
	return true;
}

function find(n){
	let count =0 ,prime=2;
	for(let i=2 ; i < = n; i++){
		if(is(i){
			count++;
			prime = i;
		}
	}
	return prime;
}
find(10001);