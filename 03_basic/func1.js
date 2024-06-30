//if we to run a huge code part many times we create function for it
function myname(){
    console.log("s");
    console.log("o");
    console.log("h");
    console.log("a");
}
    //  console.log(myname());
   //function woth parametere

   function AddTwoNumbers(number1,number2){
    //  console.log(number1+number2);
    // let result=number1+number2
    // return result
    return number1+number2
   }
//    const result=AddTwoNumbers(2,4)


   //user login hota toh usko message ke liye func

   function loginuserMessage(username){
    if(username===undefined){//-->isko aise bhi likh sakte if(!username)
        console.log("please enter sername");
    }
    return`${username} just logged in`
   }

  //cardprice func
  function CardPrice(val1,val2,...num1){//-->well use this (...num1)jab 200 ke jagah 200,3999,400aise jyada value ho tab
    return num1
  }
 console.log(CardPrice(200,300,400,2000));

const user={
    username:"soha",
    price:199
}

function handleObject(anyobject){
    console.log(`the use anem is${anyobject.username}and price is ${anyobject.price}`);
}

handleObject(user)


///direct bhi poass kar sakte

 handleObject({
    username:"soha",
    price:100
})


//array bhi use hota func me

const myarray=[200,300,388]
    function printarr(arrelement){
      return arrelement[1]
    }


console.log(printarr(myarray));












