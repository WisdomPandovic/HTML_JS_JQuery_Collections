function render(data) {
  return `<div class="products" id="product-${data.id}">
  <a href="product-details.html?id=${data.id}" class="product-link"> 
  <div class="size">
    <img src="${data.image}"/>
  </div>  
</a>
        <div>${data.title}</div>
          <div>${data.price}</div>
          <button data-attr='${data.id}' class="add">Add To Cart</button>
       </div>`;
}

function load() {
  $.ajax({
    url: "https://fakestoreapi.com/products",
    type: "GET",
    success: function (res) {
      for (let i = 0; i < res.length; i++) {
        let d = res[i];
        let output = render(d);
        $(".content").append(output);
      }
      updateCartCount(); // Add this line to update the cart count when the page loads
    },
    error: function (err) {},
  });
}

load();

function updateCartCount() {
  let item = localStorage.getItem("cart");
  if (item !== null) {
    let arr = JSON.parse(item);
    $("#count").html(arr.length);
  }
}

function getCart(product) {
  let item = localStorage.getItem("cart");
  console.log("Existing Cart Data:", item);

  let arr = [];
  if (item !== null) {
    arr = JSON.parse(item);
    arr = arr.filter((item) => item); // Remove null, undefined, and empty slots
  }

  if (product !== undefined) {
    arr.push(product);
    console.log("Updated Cart Data:", arr);
    localStorage.setItem("cart", JSON.stringify(arr));
    $("#count").html(arr.length);
  }
}

$(document).on("click", ".add", function () {
  let id = $(this).attr("data-attr");
  let url = "https://fakestoreapi.com/products/" + id;
  $.ajax({
    url,
    type: "GET",
    success: function (res) {
      alert("Item added to cart");
      getCart(res); // Pass the product data to getCart() function
    },
    error: function (err) {},
  });
});
