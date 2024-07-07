const usermail="soha@.com"

if (usermail) {
    console.log("got the mail");
}
else{
    console.log("do not got the value");
}

// falsey
// false,0,-0,BigInt 0n,null,undefined,NaN

// truthy
// "false","0","",[],{},function(){}-->str me h toh truthy ho jate

if (usermail===0) {
    console.log("array is empty");
}

 const objnew={}

 if (Object.keys(objnew).length===0) {//-->obj ka array banata h
    console.log("object is empty");
 }


   ////////////NULL coalescing operator ??--> ye use hota jab firebase se do value aati toh safe data provide karne ke liye
   //////null h toh phir jo koi alue stand karte vo value de deta
  let val1=5??10
   console.log(val1);
   let val2=null??10
    console.log(val2);
    let val3=undefined??15??10
    console.log(val3);

    ///////ternary operator

    // condition ? true:false
     const iceteaprice=100
     iceteaprice>=80?console.log("greater than 80"):console.log("less than 80");












