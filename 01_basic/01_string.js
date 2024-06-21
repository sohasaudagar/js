 //concatenation of string 
 console.log("hitesh"+"hello");
  // string interpolation -->by making placeholder aur vahape u can put var 
  const name= "soha"
  const repocount=58
  
  console.log(`hello my name is ${name} and my repo count${repocount}`);
   const gamename= new String('soha1')
   console.log(gamename[0]);
   console.log(gamename.__proto__);
    console.log(gamename.length);

    const newstring=gamename.substring(0,4)
    console.log(newstring);// we xannot do minus here

    //slicing
    const anotherstring=gamename.slice(-8,4)
    console.log(anotherstring);

    //triming
    const newstringone ="    soha   "//unnecessary gaps jo string me hote jaise ki agar  koi user apna name put karta hai tab vo aise gaps deta  h and we dont want to store it our memory tab hum usko trim() karte
    console.log(newstringone);
    console.log(newstringone.trim());

    const url="http://sohagoogle.com//soha%20saudagar"

    console.log(url.replace('%20','-'));

    console.log(url.includes('soha'));

    

