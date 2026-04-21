function goToOutfitBuilder() {
    window.location.href = "outfit.html";
}
function login() {
    let email = document.querySelector('input[type="email"]').value;
    let password = document.getElementById("loginPass").value;
    if(email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }
    window.location.href = "index.html";
}
function signup() {
    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let password = document.getElementById("signupPass").value;
    if(name === "" || email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }
    
    document.getElementById("successMessage").innerText = "Account created successfully✅!!";
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);}
function goToshopping() {
    window.location.href = "index.html";
}

function generateOutfit() {
    const gender = document.getElementById("gender").value;
    const occasion = document.getElementById("occasion").value;
    const resultDiv = document.getElementById("result");

    let outfitText = "";
    let productsHTML = "";

    // ===== MALE OUTFITS =====
    if (gender === "Male" && occasion === "Casual") {
        outfitText = "T-Shirt + Jeans + Sneakers";

        productsHTML = `
        <section class="products">
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/61KA74FZFvL._SY550_.jpg">
                <h3>FASHION HOUSE</h3>
                <p>Men's Printed Full Sleeve Slim Fit Cotton T-Shirt</p>
                <p> <del>₹799</del> <b> ₹599</b></p>
                <button onclick="addToCart('FASHION HOUSE', 599,'Mens Printed Full Sleeve Slim Fit Cotton T-Shirt','https://m.media-amazon.com/images/I/61KA74FZFvL._SY550_.jpg')">Add to Cart</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/81aGI8SHsIL._SY550_.jpg">
                <h3> URBAN POCKETS</h3>
                <p>Loose Fit Denim Streetwear Loose Fit Pants</p>
                <p><del>₹1299</del><b> ₹999</b></p>
                <button onclick="addToCart('URBAN POCKETS', 999,'Loose Fit Denim Streetwear Loose Fit Pants','https://m.media-amazon.com/images/I/81aGI8SHsIL._SY550_.jpg')">Add to Cart</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/71dlxS7UBWS._SY500_.jpg">
                <h3>CENTRINO</h3>
                <p>Stylish Lace-Up Sneakers with Cushioned Insole</p>
                <p><del>₹1599</del> <b>₹1299</b></p>
                <button onclick="addToCart('CENTRINO', 1299,'Stylish Lace-Up Sneakers with Cushioned Insole','https://m.media-amazon.com/images/I/71dlxS7UBWS._SY500_.jpg')">Add to Cart</button>
            </div>
        </section>`;
    }

    else if (gender === "Male" && occasion === "Party") {
        outfitText = "Stylish Shirt + Black Jeans + Formal Shoes";

        productsHTML = `
        <section class="products">
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/61Q2zj6CdzL._SY550_.jpg">
                <h3>SMOWKLY</h3>
                <p> Full Sleeve Button Down Shirt with Dual Chest Pockets </p>
                <p><del>₹1499</del> <b>₹1199</b></p>
                <button onclick="addToCart('SMOWKLY', 1199,' Full Sleeve Button Down Shirt with Dual Chest Pockets','https://m.media-amazon.com/images/I/61Q2zj6CdzL._SY550_.jpg')">Add to Cart</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/81pWlD0F2KL._SY550_.jpg">
                <h3>QNIM</h3>
                <p>Men Trendy StylishCargo Jeans (Q-10-11)</p>
                <p><del>₹1599</del> <b>₹1299</b></p>
                <button onclick="addToCart('QNIM', 1299,'Men Trendy StylishCargo Jeans (Q-10-11)','https://m.media-amazon.com/images/I/81pWlD0F2KL._SY550_.jpg')">Add to Cart</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/61VCwoYnbBL._SY500_.jpg">
                <h3>CENTRINO</h3>
                <p>Mens Party wear Formal Style 6007-01 Moccasin</p>
                <p><del>₹1899</del> <b>₹1599</b></p>
                <button onclick="addToCart('CENTRINO', 1599,'Mens Party wear Formal Style 6007-01 Moccasin','https://m.media-amazon.com/images/I/61VCwoYnbBL._SY500_.jpg')">Add to Cart</button>
            </div>
        </section>`;
    }

    else if (gender === "Male" && occasion === "Formal") {
        outfitText = "Formal Shirt + Trousers + Leather Shoes";

        productsHTML = `
        <section class="products">
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/61b7nWubwKL._SX522_.jpg">
                <h3>WHITE HOUSE</h3>
                <p>Mens Satin Formal Shirt, Solid Slim Fit Full Sleeve Shirt</p>
                <p><del>₹1399</del> <b>₹999</b></p>
                <button onclick="addToCart('WHITE HOUSE', 999,'Mens Satin Formal Shirt, Solid Slim Fit Full Sleeve Shirt','https://m.media-amazon.com/images/I/61b7nWubwKL._SX522_.jpg')">Add to Cart</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/61-MGxXX4nL._SY550_.jpg">
                <h3>BORAN TRENDS</h3>
                <p>Men's Formal Slim Fit Trouser Stylish</p>
                <p><del>₹1599</del> <b>₹1199</b></p>
                <button onclick="addToCart('BORAN TRENDS', 1199,'Men's Formal Slim Fit Trouser Stylish','https://m.media-amazon.com/images/I/61KA74FZFvL._SY550_.jpg')">Add to Cart</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/714EobTRkXL._SX500_.jpg">
                <h3>US POLO</h3>
                <p> Lace-up Derby Business Casual Look Formal Shoe for Men</p>
                <p><del>₹1999</del> <b>₹1699</b></p>
                <button onclick="addToCart('US POLO', 1699,'Lace-up Derby Business Casual Look Formal Shoe for Men','https://m.media-amazon.com/images/I/714EobTRkXL._SX500_.jpg')">Add to Cart</button>
            </div>
        </section>`;
    }

    // ===== FEMALE OUTFITS =====
    else if (gender === "Female" && occasion === "Casual") {
        outfitText = "Top + Jeans + Flats";

        productsHTML = `
        <section class="products">
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/61WDo3UDabL._SX425_.jpg">
                <h3>GUFRINA</h3>
                <p>Women’s Casual Button-Down Shirt with Multicolor Floral Print</p>
                <p><del>₹999</del> <b>₹699</b></p>
                <button onclick="addToCart('GUFRINA', 699,'Women’s Casual Button-Down Shirt with Multicolor Floral Print','https://m.media-amazon.com/images/I/61WDo3UDabL._SX425_.jpg')">Add to Cart</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/81IXUKEiE8L._SY550_.jpg">
                <h3>TOKYO TALKIES</h3>
                <p>Women's High Waist Straight Fit Cotton Blend Denim Jeans</p>
                <p><del>₹1499</del> <b>₹1199</b></p>
                <button onclick="addToCart('TOKYO TALKIES', 1199,'Women's High Waist Straight Fit Cotton Blend Denim Jeans','https://m.media-amazon.com/images/I/81IXUKEiE8L._SY550_.jpg')">Add to Cart</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/61d9-X+jjqL._SY500_.jpg">
                <h3>FLATS</h3>
                <p>FROH FEET Solid Comfortable Sole for Womens & Girls</p>
                <p><del>₹1299</del> <b>₹999</b></p>
                <button onclick="addToCart('FLATS', 999,'FROH FEET Solid Comfortable Sole for Womens & Girls','https://m.media-amazon.com/images/I/61d9-X+jjqL._SY500_.jpg')">Add to Cart</button>
            </div>
        </section>`;
    }

    else if (gender === "Female" && occasion === "Party") {
        outfitText = "Party Dress + Heels";

        productsHTML = `
        <section class="products">
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/617f88iS-FL._SY550_.jpg">
                <h3>LERIYA FASHION</h3>
                <p>Western Summer Georgette Stylish A-line Dress for Beach Party Outfits</p>
                <p><del>₹1599</del> <b>₹1299</b></p>
                <button onclick="addToCart('LERIYA FASHION', 1299,'Western Summer Georgette Stylish A-line Dress for Beach Party Outfits','https://m.media-amazon.com/images/I/617f88iS-FL._SY550_.jpg')">Add to Cart</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/71R39jK7FlL._SY550_.jpg">
                <h3>LITZO </h3>
                <p>Western Dresses for Women One Piece Maxi Dress (L-29-31-1)</p>
                <p><del>₹1899</del> <b>₹1499</b></p>
                <button onclick="addToCart('LITZO', 1499,'Western Dresses for Women One Piece Maxi Dress (L-29-31-1)','https://m.media-amazon.com/images/I/71R39jK7FlL._SY550_.jpg')">Add to Cart</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/71AWAshlLIL._SY500_.jpg">
                <h3>METRO</h3>
                <p>Women's Gold Glitter Party Fashion Heel Sandals</p>
                <p><del>₹1299</del> <b>₹999</b></p>
                <button onclick="addToCart('>METRO', 999,'Women's Gold Glitter Party Fashion Heel Sandals','https://m.media-amazon.com/images/I/71AWAshlLIL._SY500_.jpg')">Add to Cart</button>
            </div>
        </section>`;
    }

    else if (gender === "Female" && occasion === "Formal") {
        outfitText = "Formal Top + Skirt + Office Shoes";

        productsHTML = `
        <section class="products">
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/61in3lMctFL._SX522_.jpg">
                <h3>BLACKSMITH</h3>
                <p>Textured Button Down Formal Office Shirt for Women</p>
                <p><del>₹1299</del> <b>₹799</b></p>
                <button onclick="addToCart('BLACKSMITH', 799,'Textured Button Down Formal Office Shirt for Women','https://m.media-amazon.com/images/I/61in3lMctFL._SX522_.jpg')">Add to Cart</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/51-Lkig6qwL._SY550_.jpg">
                <h3>POPWINGS</h3>
                <p>Casual Solid Black Peplum Style Semi-Formal Fit Skirt for Women</p>
                <p><del>₹1199</del> <b>₹899</b></p>
                <button onclick="addToCart('POPWINGS', 899,'Casual Solid Black Peplum Style Semi-Formal Fit Skirt for Women','https://m.media-amazon.com/images/I/51-Lkig6qwL._SY550_.jpg')">Add to Cart</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/71Y1lIxBcHL._SY500_.jpg">
                <h3>BATA</h3>
                <p>Comfortable & Stylish Block Heel Fashion Moccasins</p>
                <p><del>₹1599</del> <b>₹1199</b></p>
                <button onclick="addToCart('BATA', 1199,'Comfortable & Stylish Block Heel Fashion Moccasins','https://m.media-amazon.com/images/I/71Y1lIxBcHL._SY500_.jpg')">Add to Cart</button>
            </div>
        </section>`;
    }

    resultDiv.innerHTML = `
        <h3>Recommended Outfit</h3>
        <p>${outfitText}</p>
        <h3>Recommended Products</h3>
        ${productsHTML}
    `;
}

    // ====CART FEATURE===

// Cart Function
function addToCart(name, price, desc, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price, desc, image });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart!");
}

// Display Cart Items
function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-items");

  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    container.innerHTML += `
      <div class="cart-card">
        <img src="${item.image}" />
        <div class="cart-info">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <h4>₹${item.price}</h4>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}
// Remove Item
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  loadCart();
}

loadCart();

    // ==== SMOOTH SCROLL FEEL ====
document.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
        btn.style.transform = "scale(0.95)";
        setTimeout(()=>btn.style.transform="scale(1)",100);
    });
});