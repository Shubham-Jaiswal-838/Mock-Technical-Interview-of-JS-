
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const btn = document.getElementById("btn");

const box =  document.getElementById("detailsContainer");

let arr = [];

btn.addEventListener("click", function(e){
    e.preventDefault();

    if(validate(arr)){
        alert("Already exist");
        return;

    }else if(name.value && email.value && phone.value){
        arr.push({
            "name": name.value,
            "email": email.value,
            "phone": phone.value 
        })

        // console.log(arr);
        showData(arr);
    }

    
})

function showData(arr){
     box.innerHTML = "";
     for(let i of arr){
        // const div = document.createElement("div");

        const nameTwo = document.createElement("p");
        const emailTwo = document.createElement("p");
        const phoneTwo = document.createElement("p");


        nameTwo.innerText = i.name;
        emailTwo.innerText = i.email;
        phoneTwo.innerText = i.phone;

        nameTwo.setAttribute("id", "nameTwo")
        phoneTwo.setAttribute("id", "phoneTwo")

       
         box.appendChild(nameTwo);
         box.appendChild(emailTwo);
         box.appendChild(phoneTwo);
     }


}

function validate(arr){
    for(let i of arr){
        if(i.phone === phone.value){
            return true;
        }else {
            return false;
        }
    }

}