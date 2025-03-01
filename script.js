//your JS code here. If required.

function submitForm(){
	let Name=document.getElementById("name").value;
	let Age=document.getElementById("age").value;
	console.log(Name)
	     if (Name == "" ||Age=="" ) {
    alert("Please enter valid details.")
  }
	const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Age>18) {
      resolve("Welcome, . You can vote.");
    } else {
      reject("Oh sorry . You aren't old enough.");
    }
  }, 4000);
});

promise.then(result => {
   alert(result);
}).catch(error => {
    alert(err);
});

}