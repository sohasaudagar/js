const user ={
    username:"soha",
    price:999,

    welcomemessage :function(){
     console.log(`${this.username},welcome`);//object ke func ke ander is this use karsakte

    }

}
user.welcomemessage()
user.username="sam"
user.welcomemessage()

// const chai = function(){
//     username="soha"
//     console.log(this.username);//this will show undefoned

// }

///and arrow function 

// const chai=()=>{
//   username="soha"
//   console.log(this.username);//undefined show honga  
// }

 const add=(num1,num2)=>{
    return num1+num2
 }

 ///or

 const add1=(num1,num2)=> (num1,num2)//ye wale syntax me  return likhne ki jarurrat nahi h
 console.log(add(3,5));













