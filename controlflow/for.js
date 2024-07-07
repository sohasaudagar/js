  // for (let index = 0; index <= 10; index++) {
  //   const element = index;
  //   console.log(element);
    
  // }
  //add if in for loop
  // for (let i = 0; i <=10; i++) {
  //   const element = i;
  //   if (i==5) {
  //       console.log("5 is the best number");
  //   }
  //   console.log(element);
  // }

  ///add for loop inside for loop
    for (let i = 11; i <=30 ; i++) {
        // console.log(`outer loop value:${i}`);
        for (let j = 0; j <=10; j++) {
            // console.log(`inner loop value:${j}`);
          // console.log(i +'*'+j +'=' +i*j);
        }
        
    }

  ////continue and break
   for (let index = 1; index < 20; index++) {
    const element = index;

    if (index==5) {
      console.log("detected 5");
     break;
     }
   
    console.log(`value of i is ${element}`);
    
   }