const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`

let data = JSON.parse(localStorage.getItem("user")) || []

fetch (url).then(function(res){
    return res.json();
}).then(function(res){
    appendData (res.form.data)
}).catch(function(err){
    console.log("err:",err)
})


function appendData(data){
    data.forEach(function(el){
        let box = document.createElement('div')
        box.setAttribute("id","box");

        let name = document.createElement("h2")
        name.innerText = el.name;

        let amount = document.createElement("h4")
        amount.innerText = el.amount

        let btn = document.createElement("h4")
        btn.innerText = "Buy";
        btn.addEventListener("click", function(){
            addtocart(el)
        });
        box.append(name, amount, btn)
document.getElementById("form").append(box)   
    })

}

let amount = document.getElementById("amount").value;

let wallet = document.getElementById("wallet_balance")
wallet.innerText = amount;