//// #1
var num = [] ; 
    for (var i =0 ; i<= 255 ; i++) {
        num.push(i);
        
    }
    console.log(num)



/////// #2
//even_1000
function sum_even() {
    var sum = 0 ;
    for(var x=2 ; x<=1000; x=x+2) {
    sum+=x ;    
 }
console.log(sum)
}
sum_even();


/// #3 odd_5000 
function sum_odd_500() {
    var sum=0 ; 
        for(var x=1; x<=5000;x+=2){
            sum+=x;
        }
     return sum ;   
}
var a=sum_odd_500();
console.log(a) ;

////////#4 Iterate an array 
function it0_arr(arr) {
    var sum=0 ; 
    for(i=0 ; i<arr.length ;i++){
          sum+= arr[i]
    }
    return sum ; 
}


//// #5 find_max_
array=[-3, 3, 5, ];
var max = array[0];
for(var i=1; i<array.length; i++)
{
	if (array[i]>max)
	{
	max = array[i];
	}
}
console.log(max);


/// #6find_average 
function find_avg(){
    var sum = 0 ; 
    var x = [1,3,5,7,20] ;
    for(var i=0 ; i<x.length ; i++){
        sum+=x[i] }
return (sum/x.length) } 
var  y= find_avg() ;
      console.log(y) ;


/////#8 array_odd 
function array_odd() { 
    var odd=[] ; 
    for( var i = 1 ; i<=50 ;i++)
        if (i %2 !==0) {
                odd.push(i)
        }
        return odd ; 

   }
var y=array_odd() ;
console.log(y);

/// #9 Greater than Y  

var x=[1, 3, 5, 7];
var y=3;
var count = 0;
for(var i=0; i<x.length; i++)
{
	if (x[i]>y)  //if the new x-value greater than y
	{
	count++;
	}
}
console.log(count);
//#10 negativ 
function nonnegativ(x){
    for(var i=0 ;i<x.length;i++){
        if(x[i]<0){
            x[i]=0;
        }
       
    }
  console(x) 
}
//#11 max/mix/avg 
x=[1,5,10,-2];
var max = x[0];
var min = x[0];
var sum = 0;
sum = sum+x[0];
for (var i=1; i<x.length;i++)
{
	if (x[i]>max)
	{
		max = x[i];
	}
	if (x[i]<min)
	{
		min = x[i];
	}
	sum = sum + x[i];
}
console.log('Max is ',max);
console.log('Min is ',min);
console.log('Avg is ',sum/x.length); 

// #12 Swap Values 
function swap_arr(x){
    var temp = x[x.length-1];
    x[x.length-1] = x[0];
    x[0] = temp;
}
        var array =[1,5,10,-2] ;
        swap_arr(array);
        console.log(array);
 
        
 // #13   Number to String
 function print_Dojo(x){
    for (var i = 0; i < x.length; i++){
        if (x[i] < 0){
            x[i] = "Dojo";
        }
    }
}
//var y= [-1,-3,2] ; for test 
//print_Dojo(y) 
 // console.log(y);     