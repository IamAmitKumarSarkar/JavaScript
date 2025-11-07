//synchronous -->  synchronous code basically execute in particular sequence
//Asynchronous --> Async code allow us to execute next instruction immedeatly without blocking the flow of the programme

//Callback --> Callback is a function passed as an argument to the another function

//Callback Hell --> Neasted callback stack below one an another and forming a pyramid like structure


function getData(dataId,nextdataId){
      setTimeout(() => {
        console.log("Data fetched for ID:", dataId);
        if (nextdataId) {
             nextdataId();
        }
      }, 4000)
}

console.log("Fetching data....");
getData(101,()=>{
     console.log("Fetching data....");
     getData(102);
});