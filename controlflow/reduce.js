 //shopping cart me billing ke time pe use hota

   const myarr=[1,2,3]
//    const totalnum=myarr.reduce( function(acc,currval){
//      return acc+currval
//    ,0})
  
    // const total=myarr.reduce((acc,currval) => acc+currval,0)
    // console.log(total);

  const cart=[
    {
        course:"js",
        price:2999
    },
    {
        course:"pyhton",
        price:999
    },
    {
        course:"data science",
        price:12999
    },
    {
        course:"mobile dev",
        price:5999
    }
  ]


const total =cart.reduce( (acc,item) => 
    //   console.log(`acc:${acc}andcurval:${curval});
        acc+item.price
    ,0)
    console.log(total);