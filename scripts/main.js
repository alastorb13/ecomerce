window.data1=data1

console.log(data1[0].category);

function fillcategories(data) {
  let categoryslyce = document.getElementById("category-slice");
  let test = document.createElement("p");
  test.textContent = "test";
  categoryslyce.appendChild(test);
  categoryslyce.innerHTML = "";
  for (const artist in data) {
    console.log(data[artist].media[0]);
    categoryslyce.innerHTML += `
    <a href=categoryshop.html?data?=${artist}>
        <div class="category-container">
            <img src=${data[artist].media[0]} width=100% height=100% >${data[artist].name}</img>
        </div>
    </a>
  `;
  }
}

fillcategories(data1);
