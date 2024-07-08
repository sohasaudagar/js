const coding=[ 'js','java','python','cpp']

coding.forEach( function (item){//-->yaha pe func ko name nahi dete
    // console.log(item);
})

coding.forEach( (items,index,arr)=>{//--->arrow function
    // console.log(items,index,arr);
})



   ////array of object/////
  //hamesha database se data arr of object me hi aata h toh usko apn for each wale loop se koi bhi ek value ya key retrive kar sakte
  const mycoding=[
    {
        languagename:'java',
        filename:"java"
    },
    
    {
      languagename:'python',
        filename:"py"
    },
   
    {languagename:'javascript',
        filename:"js"
    }
  ]

  mycoding.forEach( (items)=>{
    console.log(items.languagename);
  })















