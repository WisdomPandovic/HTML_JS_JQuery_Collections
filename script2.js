$(document).ready(function(){
    let users = [
      {
        id: 1,
        name: "Jude",
        email: "devrus265@gmail.com",
        pwd: "123"
      },
      {
        id: 2,
        name: "James",
        email: "james@gmail.com",
        pwd: "567"
      },
      {
        id: 3,
        name: "Mike",
        email: "aperic3@gmail.com",
        pwd: "345"
      }
    ];
    
    let products = [
      {
        id: 1,
        name: "Product 1",
        price: 345,
        img: "https://reqres.in/img/faces/1-image.jpg"
      },
      {
        id: 2,
        name: "Product 2",
        price: 245,
        img: "https://reqres.in/img/faces/2-image.jpg"
      },
      {
        id: 3,
        name: "Product 3",
        price: 145,
        img: "https://reqres.in/img/faces/3-image.jpg"
      },
      {
        id: 4,
        name: "Product 4",
        price: 45,
        img: "https://reqres.in/img/faces/4-image.jpg"
      }
    ];
    
    $('#btnvalidate').click(function(){
      if($('#email').val() == "" || $('#passwd').val() == ""){
        $('#output').html("<b>Email and password field required</b>")
      } else {
        $('#output').html("");
        let isLoggedIn = false;
        for(let i=0; i<users.length; i++){
          let user = users[i];
          if(user.email == $('#email').val() && user.pwd == $('#passwd').val()){
            console.log("User logged in:", user);
            isLoggedIn = true;
            break;
          }
        }
        if (!isLoggedIn) {
          $('#output').html("<b>Invalid email or password</b>");
        }
      }
    });
    
    function render(data){
      return `<div class="product">
          <h3>${data.name}</h3>
          <img src="${data.img}" alt="${data.name}"/>
          <div>
            ${data.price} <button class="add" data-id="${data.id}">Add</button>
          </div>
        </div>`;
    }
    
    for(let i=0;i<products.length;i++){
      let product = products[i];
      let output = render(product);
      $('#products').append(output);
    }
  
    // Add functionality to add products to cart
    $(document).on("click", ".add", function () {
      let productId = $(this).data("id");
      console.log("Product added to cart:", productId);
      // Implement your logic to add the product to the cart
    });
  });