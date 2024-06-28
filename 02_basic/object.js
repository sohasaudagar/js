 //singleton


 //object

 ///***interview specific[IS]:u have to define a symbol and then assign a valye to that sysmbol in key */
const mysym=Symbol("key1")//-->outside object symbol banaya declred kiya
 const JsUser={
    name:"soha",
    "full name":"soha saudagar",
    [mysym]:"mykey2",//-->key ko value assign ki
    age:19,
    location:"amravati",
    email:"soha@google.com",
    isLoggedIn:"false",
    LastLoggedInDays:["monday","saturday"]
 }


//  console.log(JsUser.email);
//  console.log(JsUser["email"]);//imp h bcz bohot sare other keys me kam me aata
//  console.log(JsUser["full name"]);
//  console.log(JsUser[mysym]);
//  console.log(JsUser);
//  JsUser.email="soha@gpt.com"
//  Object.freeze(JsUser)//-->freezing the object so that nothing can be changed in it
//  JsUser.email="soha@microsoft.com"
//  console.log(JsUser);


  ///greeting add karna
    
  JsUser.greeting= function(){
    console.log(`hello js user ,${this.name}`);

  }
    
   console.log(JsUser.greeting());
   