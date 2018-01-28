function numberCalculation(num){
	let tem=0
	while(0<num){
		tem=tem*10+(num%10);
		num=Math.floor(num/10);
	}
	return tem;
}

function doSomething(){
	let result=0;
	for(let i=100;i < 1000 ;i++){
		for(let j=100; j< 1000; j++){
			let a = i*j;
			if(a=== numberCalculation(a)){
				console.log(i,j,a)
				a > result ? 
				result = a 
					: null
			}
		}
	}
	console.log(result);
}
doSomething();