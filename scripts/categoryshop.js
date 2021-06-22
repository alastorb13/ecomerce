let category = {};

function fillcategory(data) {
  let url = window.location;
  let artist = url.search.split("=")[1];
  let shopslice = document.getElementById("shop-slice");
  let categoryslice=document.getElementById("category-slice")

  for (const paintings in data[artist].media) {
    shopslice.innerHTML += `
    <a href=product.html?data?=${artist}=${paintings}>
        <div class="category-container">
            <img src=${data[artist].media[paintings]} width=100% height=100% ></img>
        </div>
    </a>
  `;
  
  }
  for (const artist in data) {
    categoryslice.innerHTML += `
    <a href=categoryshop.html?data?=${artist}>
        <div>
            <h2>${data[artist].name} </h2>
        </div>
    </a>
  `;
  
  }

}
fillcategory(data1)
console.log(data1)