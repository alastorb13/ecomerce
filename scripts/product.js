const userNameInput = document.getElementById("input-user");

let url = window.location;
let artist = url.search.split("=")[1];
let paintings = url.search.split("=")[2];
let shopslice = document.getElementById("shop-slice");
let categoryslice=document.getElementById("category-slice");
let paint=[artist,paintings];

function fillcontent(data){



categoryslice.innerHTML += `
<div>
    <img src=${data[artist].media[paintings]}></img>
</div>
<div><h3>${data[artist].name}</h3></div>
<div><h2>${data[artist].value[paintings]}</h2></div>
<button id="boton">comprar</button>
`;
 }
 fillcontent(data1)



 const myModal = document.getElementById("modal");


function validateUser() {
    let user = window.localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      user.paintings.push(paint);
      window.localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "./bag.html";
    } else {
      myModal.style.display = "block";
    }
  }
  
  function saveUser() {
    let userName = userNameInput.value.trim();
    let user = {
        user: userName,
        paintings: [paint],
      };
      window.localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "./bag.html";
    
  }
  

  function closeModal() {
    myModal.style.display = "none";
  }


let btncompra=document.getElementById("boton");
let btningresar=document.getElementById("button-user");

btncompra.addEventListener("click",validateUser);
btningresar.addEventListener("click",saveUser);
