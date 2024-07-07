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