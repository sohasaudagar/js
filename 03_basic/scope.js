var c=300//
let a=100
if(true){
    let a=10
    const b=20
    var c=3//-->var block ke bahar bhi print ho jata aur let and const nahi hote
     console.log("INNER:",a);

     }
      // for(i=0;i<Array.length;i++){
      //   const element=
      // // }
    // console.log(a);
    // console.log(b);
    // console.log(c);


    ///hoisting

   function one(){
      const username="soha"
       function two(){
        const website="youtube"
        console.log(website);
        console.log(username);
       }
      //  console.log(website);
       two()
       }

        one()
        ////parent func,loop if else cannot access the child elemet
        ///child func ,loop if else can access the parent elemnet
       
       
        addone()//-->apn direct declarartion me func k declration ke phele bhi usko call kar saktewhereas
        function addone(num){
          return num+1
        }

  //  addone()
      //-->yaha pe function ke ddeclaration k phele usko call nahi karsakte
     const addtwo = function(num){
      return num+2
     }








