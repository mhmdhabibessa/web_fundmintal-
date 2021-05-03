
//get 2-255
var num = [] ; 
for (var i =0 ; i<= 255 ; i++) {
    num.push(i);
    
}
console.log(num)


//even_1000
function sum_even() {
    var sum = 0 ;
    for(var x=2 ; x<=1000; x=x+2) {
    sum+=x ;    
 }
console.log(sum)
}
sum_even();

//////sum odd 500 

function sum_odd_500() {
    var sum=0 ; 
        for(var x=1; x<=5000;x+=2){
            sum+=x;
        }
        return sum ; 
}

