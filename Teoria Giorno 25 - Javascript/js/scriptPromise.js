// Promise

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
    ).catch(
      function(error) { /* code if some error */ }
    )

let p = new Promise(function(resolve, reject) {
    // "Producing Code" (May take some time)

    let xhr = new XMLHttpRequest(); 
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); 
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let obj = JSON.parse(xhr.responseText); 
            resolve(obj); // when successful
        }
    };  
    xhr.onerror = function () {
        reject("Error!!");  // when error
    }; 
});
    
console.log(p);

// "Consuming Code" (Must wait for a fulfilled Promise)
/* p.then(obj => console.log(obj))
    .catch(err => console.log(err)); */


let promise = fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()); // GET => Promise<Response>
console.log(promise); // Promise {<pending>}


// codice


// codice


// codice


// codice

/* promise
    .then(json => console.log(json))
    .catch(err => console.log(err)); */



// Async - Await

 async function func() {
    let arr = [];
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => arr = json)
        .catch(error => console.log(error));
    console.log(arr);
}

 let func2 = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        let arr = await response.json();
        console.log(arr);
    } catch(error) {
        console.log(error)
    }
}

func();
func2();


// Example https://www.pexels.com/

fetch('https://api.pexels.com/v1/search?query=cat', {
        method: 'GET', 
        headers: {
            Authorization: 'apiKey'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))


