//1. How to compare two json have the same properties without order.
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
let a=JSON.stringify(obj1)===JSON.stringify(obj2);
console.log(a);
//2.Use the rest countries' API URL ->https://restcountries.com/v3.1/all and disply all the country flags in the console.

var request1=new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload=function(){
    var data1=request1.response;
    var result1=JSON.parse(data1);
    for(var i=0;i<result1.length-1;i++){
        console.log(result1[i].flags);
    }
}
//------------------------------------
//3.Use the same rest countries ans print all countries names, regions, sub-region and populations.

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data=request.response;;
    var result=JSON.parse(data);
    for(var i=0;i<result.length;i++){        console.log(result[i].name,result[i].region,result[i].subregion,result[i].population);
    }
}