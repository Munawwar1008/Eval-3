function submit(e){
e.preventDefault();
// let form = document.getElementById("form");
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let address = document.getElementById("address").value;
let amount = document.getElementById("amount").value;

let s1 = new Newsign(name, email, address, amount)

let data = JSON.parse(localStorage.getItem('user')) || []

data.push(s1)

localStorage.setItem('user',JSON.stringify(data));
console.log(s1);
}

function Newsign(n,e,ad,am){
    this.name = n;
    this.email = e;
    this.address = ad;
    this.amount = am;
}