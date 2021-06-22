function fillcategory(data) {
    let categoryslice=document.getElementById("category-slice");
    let user = window.localStorage.getItem("user");
    console.log(user)
    if (user) {
          user = JSON.parse(user);
          let paintings = user.paintings;
          let total = 0
          categoryslice.innerHTML = "";
          paintings.forEach(function (paint) {
            total+=parseInt(data[paint[0]].value[paint[1]],10)
            categoryslice.innerHTML += `
          <div class="category-container alver">
              <img src=${data[paint[0]].media[paint[1]]} width=100% height=100% ></img>
              <button class="btn btn-danger delete-movie">Borrar</button>
              <div><h2>${data[paint[0]].value[paint[1]]}</h2></div>
              
          </div>
          `;
          }
          )
          categoryslice.innerHTML += `<h2>Total: ${total}</h2>`
          activeDeleteButtons();
    } else {
        window.location.href = "index.html";
    }
}
fillcategory(data1);

function activeDeleteButtons() {
    let btns = document.querySelectorAll(".delete-movie");
    btns.forEach(function (el, index) {
      el.addEventListener("click", function () {
        let user = window.localStorage.getItem("user");
        user = JSON.parse(user);
        let paintings = user.paintings;
        paintings.splice(index, 1);
        window.localStorage.setItem("user", JSON.stringify(user));
        location.reload()
        fillcategory();
      });
    });
  }



 