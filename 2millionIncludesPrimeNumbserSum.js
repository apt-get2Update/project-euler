list = Array.from(Array(2000000).keys());
list.splice(0,2)
for(let i=0;list[i]<10000;i++){
    list=list.filter(l => l==list[i] || l%list[i]!=0);
}
list.reduce((a,b)=>{return a+b},0);