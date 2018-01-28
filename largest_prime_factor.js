let limit = 600851475143;

function doSomething(){
	for(let i=2 ;i<limit ; i++) {
		while(limit%i === 0) {
			((newlimit) => limit = newlimit)(limit / i);
		}
	}
	console.log(limit);
}
doSomething();