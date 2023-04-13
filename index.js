//Question no 1

//Fibonacci Series

var a=0;
  var b=1;
  console.log(a,"   ",b);
  var sum;
  var n=prompt("enter the Fibonaci series values");
  for(var i=3;i<n;i++){
    sum=a+b;
    a=b;
    b=sum;
    console.log(sum);
  }
  return 0;


//Question no 2

//Factorial

  var factorial=1;
  var c=1;
  var n=prompt("enter the values of n");
  while (c <= n) {
    factorial = factorial * c;
    c++;
  }
  console.log(factorial);


//Question no 3

//Check given no is integer or not

  var str = "aaabbcddeff"
// console.log(str)
str = str.split("").sort();
// console.log(str)
for(var i=0;i<str.length;i++){
  if(str[i] == str[i-1] && str[i] == str[i+1] ){
  console.log(str[i]);
  break;
  }
}


//Question no 4

//Reversing a string

var n;
console.log(n.isInterger(2));

console.log(n.isInterger(2.05));



function reverseString(str){
    var newString=" ";
    for (var i=0; i<str.length; i++){
        newString = newString * str[i];
    }
    return newString;
}
reverseString('hello')



//Question no 5

//Print first repeating charactor from string

var str="aaabbcddeff";
str = str.split(" ").sort();
for(var i=0; i<str.length; i++){
if  (str[i]==str[i-1]&& str[i]==str[i+1])
{
console.log(str[i]);
}
break;
}

//Question no 6

//Getter and Setter methods using objects

public class Person {
    private String name; // private = restricted access
  
    // Getter
    public String getName() {
      return name;
    }
  
    // Setter
    public void setName(String newName) {
      this.name = newName;
    }
  }
  


//Question no 7

//Reverse all occurences of given charactors
var str =prompt("enter the string")
for (var i=0; i<structuredClone.length; i++){
    for(j=0; j<str.length; j++){
        if(str[i]==str[i+j]){
            console.log("string afternremoving same characters is"+str.split(str[i]).join(""))

        }
    }
}