//if we to run a huge code part many times we create function for it
function myname(){
    console.log("s");
    console.log("o");
    console.log("h");
    console.log("a");
}
     console.log(myname());
   //function woth parametere

   function AddTwoNumbers(number1,number2){
    //  console.log(number1+number2);
    // let result=number1+number2
    // return result
    return number1+number2
   }
   const result=AddTwoNumbers(2,4)


   //user login hota toh usko message ke liye func

   function loginuserMessage(username){
    if(username===undefined){//-->isko aise bhi likh sakte if(!username)
        console.log("please enter sername");
    }
    return`${username} just logged in`
   }



