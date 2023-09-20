var productContainer = document.getElementById("latest-products");

axios.get("https://fakestoreapi.com/products")
    .then(function (response) {
        var products = response.data;
        var numCardsToShow = 6;

        for (var i = 0; i < numCardsToShow; i++) {
            var product = products[i];
            var productCard = document.createElement("div");
            productCard.className = "product-card";

            var productImage = document.createElement("img");
            productImage.className = "product-image";
            productImage.src = product.image;
            productCard.appendChild(productImage);

            var additions = document.createElement("div");
            additions.className = "additions";


            var addToCartLink = document.createElement("a");
            addToCartLink.href = "#";
            addToCartLink.className = "add-to-cart-link";
            var addToCartImage = document.createElement("img");
            addToCartImage.src = "images/Add To Cart.png";
            addToCartImage.className = "productadd1"
            addToCartLink.appendChild(addToCartImage);

            additions.appendChild(addToCartLink);

          
            var wishListImage = document.createElement("img");
            wishListImage.className = "productadd2";
            wishListImage.src = "images/Wish list.png";
            additions.appendChild(wishListImage);

            productCard.appendChild(additions);

            var productInfo = document.createElement("p");
            productInfo.textContent = product.title;
            productCard.appendChild(productInfo);

            var additionalImage = document.createElement("img");
            additionalImage.className = "additional-image";
            additionalImage.src = "images/Group 13.png";
            productCard.appendChild(additionalImage);

            var productPrice = document.createElement("p");
            productPrice.textContent = "$" + product.price;
            productCard.appendChild(productPrice);

            productContainer.appendChild(productCard);
        }
    })
    .catch(function (error) {
        console.error("Error fetching data:", error);
    });
    
    var cartshop = document.getElementsByName(add-to-cart-link)
    const $display = document.getElementById("clickme");
    
    let count = 0;
    
    function save () {
      $display.textContent = count;
      localStorage.setItem("count", count);
    }
    
    cartshop.addEventListener ("click", function () {
        console.log(dsadsa)
      count++;
      save();
    })
    
    
    if (localStorage.getItem("count")) {
      count = localStorage.getItem("count");
      save();
    }