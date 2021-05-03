
// #1
var temp =     0 ; 
function sigma (num) {
    for( var i=1 ; i<= num ; i++){
    temp+= i ; 
    }
    console.log(temp)
}


sigma(3); 
  //#2  factorial
  function factorial(){
    var num=1;
    var number =prompt("Enter Number");
    
    for(var i=1; i<=number; i++){
    num = num * i;
    }
    
    return num;
    }
    var z=factorial();
    console.log(z);

    /// #3 fobonshi
    var temp = 0 ; 
    function fobonshi(num) {
        
        for(var i = 0 ; i<num ; i++){
            temp+=i ; 
        }
        console.log(temp) ; 
    }
    fobonshi(5) ;

 /// #4   
 
 function null_arr(arr) {
                
    if(arr.length<=2) {
        console.log('null')    
    }
    else{ console.log(arr[arr.length-2]) 
    }
}
null_arr([3,5,4,7]);

//#5 
function seond_arr(arr,n) {
    console.log(arr[arr.length-n]);
}
       seond_arr([1,2,3,4,5],2);
   



//#6 
function larg_max(arr){
    var max1=arr[0]; 
    var max2=arr[0];
    for(var i=0; i<arr.length; i++){
    if(arr[i]>max1){
    {max2=max1;
    max1= arr[i];
    i++
    if (max2<arr[i]){
    max2=arr[i]}
    
    }
    }}
    console.log(max1);
    console.log(max2);
    }
    larg_max([4,5,2,11,7,5,10,1,8,6,4,11]);

/// #7 
var REPET=[];
function double(arr){
for (var i=0; i<arr.length; i++){
REPET.push(arr[i]);
REPET.push(arr[i]);

}
console.log(REPET);
}
double([1,"STR",3]);