const xmlrequest = require("xhr2");
const xhr = new xmlrequest();

//open connection

xhr.open("GET","https://jsonplaceholder.org/users");
xhr.onload = function () {
    var arr = JSON.parse(xhr.responseText)

    //using map function
   
     arr.map(value => {
        console.log(value)
    })

     arr.map(value => {
      if (value.birthDate === "1973-01-22")
       console.log(value.firstname,value.lastname)
       })
    
    //using filter returns true or false
    
    arr.filter(value => {
        if (value.company != null)
            console.log(value.company);
    })
    
   
    console.log(arr.filter(value => {
        if (value.id <= 5)
            return true;
     }))

    //map using return type
    console.log(arr.map(value => {
        if (value.id <= 5)
            return true;
     }))
}
xhr.send();
  