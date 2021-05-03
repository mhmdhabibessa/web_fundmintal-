
// #1 
function print_big(x){
    for (var i = 0; i < x.length; i++){
        if (x[i] > 0){
            x[i] = "big";
        }
    }
    
    return x;
}
//console.log(print_big([-1,3,5, 7,-5])); for test 

//#2 
function print_low_hight(x){
    var low = x[0];
    var high =x[0];
    for (var i = 1; i < x.length; i++){
        if (x[i] < low){
            low = x[i];
        }else if (x[i] > high){
            high = x[i];
        }
    }
    console.log(low);
    return high;
}

//#3 

function print_2lastandOdd(arr){
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            return arr[i];
        }
    }
}
//#4 

function doubleVision(arr){
    var newe = [];
    for (var i = 0; i < arr.length; i++){
        newe.push(arr[i] * 2);
    }
    return newe;
}

//#5 
var sum =  0 ; 
function possitv(arr) {
for(i=0 ; i<arr.length ; i++) {
    if(arr[i]>0) {
        sum+=arr[i] 
       // arr[arr.length-1] = sum ; 
    }
    arr[arr.length-1] = sum ; 
    
}
console.log(arr);
}
possitv([1,-1,-1,3]);

//#6 
function odd_even (arr) {
    for(var i =0 ; i<arr.length ; i++) {
        if(arr[i]%2==0 && arr[i+1]==0 && arr[i+2]%2==0) {
            console.log("even function");
        }  
    if (arr[i]%2 !=0 && arr[i+1]!=0 && arr[i+2]%2!=0 ){
        console.log('odd function');
    }
    }
}
odd_even([3,5,7,9,10]);

//#7 


function odd_one (arr) {
    for(var i =1 ; i<arr.length ; i+=2) {
        arr[i] +=1
    }
    console.log(arr)
}
odd_one([3,5,7,9,10]);

//#8 
function apre_length (arr) {
    for(var i =1 ; i<arr.length ; i ++) {
        arr[i] = arr[i-1].length
    }
    console.log(arr)
}
apre_length(["hello","max"]);
//


//# 9
function add_seven (arr) {
    for(var i =0 ; i<arr.length ; i ++) {
        arr[i] +=7
    }
    console.log(arr)
}
add_seven([1,3]);
  


////#10
function apre_length (arr) {
    for(var i =1 ; i<arr.length ; i ++) {
        arr[i] = arr[i-1].length
    }
    console.log(arr)
}
apre_length(["hello","max"]);



//11
function print(arr){
    var nar = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = arr[i]- arr[i]-arr[i];
        }
        nar.push(arr[i]);
    }
    return nar;
}

//12
function print(){
    var getFood = false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            console.log("yummy");
            getFood = true;
        }
    }
    if (getFood == false){
        console.log("I am hungry");
    }
    return arr;
}
var z=print();
console.log(z);



//13
function print(){
    for (var i = 0; i < arr.length/2; i+=2){
        var tt = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = tt;
    }
    return arr;
}
var z=print();
console.log(z);


//14
function print(arr, num){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*num;
    }
    return arr;
}
console.log(scaleArray([1,2,3,4],4));