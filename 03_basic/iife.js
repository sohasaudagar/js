///imediately ivoked function
  function chai (){
   console.log("db connected");
  }
  chai()

//   to make in unpolluted we use iife fync-->kyuki global scope me pollution ki problem hoti h

(function chai (){
    console.log("db connected");
})();//iife wala syntax h

///aur ya toh apn aise bhi kar sakte
///do iife ek file me lekh te waqt ; lagate
((name)=>{
  console.log(`db is connected ${name}`);
})(`soha`)////ye arrow function ka iife h


