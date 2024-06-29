//const tinderuser= new Object()  -->singleton objectg aise define karte


const tinderuser ={} //-->nonsingleton object

tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isLoggedIn=false
// console.log(tinderuser);


// const regularuser={
//     email:"soha@google.com",
//     fullname:{
//         uerfulname:{
//             firstname:"soha",
//             lastname:"saudagar"

//         }
//     }
// }
// console.log(regularuser.fullname.uerfulname.firstname);


const obj={
    a:"1",
    b:"2"
}
const obj2={
    c:"4",
    d:"5"
}
// const obj3={obj,obj2}


//so to assign aobject we need a syntax 

// const obj3=Object.assign({},obj,obj2)

const obj3={...obj,...obj2}
console.log(obj3);

//database se dataek array format me aata to vo obj ka array rahta

// const newobj={
//     {

//     }
//     {

//     }
//     {

//     }
// }

//toh isme hum access kar sakte data 
  //newobj[1].email-->phele array jaise karte aur phile uske ander ke value ko point se access karte

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// const ab=Symbol("ab2")
//  const objj={
//     [ab]:"ab4",
//  }
//  console.log(ab);

const course={
    name:"soha",
    id:"1",
    courseinstructor:"soha"
}
   console.log(course.courseinstructor);
   //OR
  
   const{courseinstructor:instructor}=course

   console.log(instructor);

///database se data json ya array me aata
// {
//     "name":"soha",
//     "id":"2",
//     "price":"free"
// }
//       [
//         {},
//         {},
//         {},
//       ]














