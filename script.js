function submitForm(event){
    event.preventDefault();
    let Name=document.getElementById("name").value;
    let Age=document.getElementById("age").value;

    if (Name == "" || Age == "") {
        alert("Please enter valid details.")
        return;
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Age > 18) {
                resolve(`Welcome, ${Name}. You can vote.`);
            } else {
                reject(`Oh sorry ${Name}, you aren't old enough.`);
            }
        }, 4000);
    });

    promise.then(result => {
        alert(result);
    }).catch(error => {
        alert(error);
    });
}