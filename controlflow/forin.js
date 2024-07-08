const myobject={
    'js':"javascript",
    'rb':"ruby",
    'cpp':"c++",
    'swift':'swiftf'
}
 for (const key in myobject) {
//   console.log(myobject[key]);//-->key ke value print karne ke liye syntax use hota
 }
//   for (const key of myobject) {--->object is not iteraable isiiye we use for in
//     console.log(key);
//   }


const programming=['js','cpp','java','ruby']
for (const key in programming) {
   console.log(programming[key]);
}