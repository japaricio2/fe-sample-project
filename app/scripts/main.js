var payload = {
  "products": [{
      "filename": "618328744.png",
      "price": 5127,
      "name": "Mens Fashion Shirts"
    },
    {
      "filename": "618842634.png",
      "price": 5704,
      "name": "Casual jacket"
    },
    {
      "filename": "619521178.png",
      "price": 397,
      "name": "Mens work shirt"
    },
    {
      "filename": "623270836.png",
      "price": 3237,
      "name": "Running Shoes"
    },
    {
      "filename": "638571516.png",
      "price": 5774,
      "name": "Leather lacket"
    },
    {
      "filename": "649597850.png",
      "price": 8745,
      "name": "Snow Boots"
    },
    {
      "filename": "656678076.png",
      "price": 9012,
      "name": "Mens Fashion Shirts"
    },
    {
      "filename": "666666252.png",
      "price": 8883,
      "name": "Womens white sweater"
    },
    {
      "filename": "666666466.png",
      "price": 7767,
      "name": "Womens red jacket"
    },
    {
      "filename": "675606742.png",
      "price": 7057,
      "name": "Pastel everyday wear"
    },
    {
      "filename": "806813490.png",
      "price": 2246,
      "name": "Longsleeve workout shirt"
    }
  ]
};

// assuming price will stay under $100
var toCurrency = function (amount) {
  var cents = amount.substring(amount.length - 2, amount.length);
  var dollars = amount.substring(0, amount.length - 2);
  amount = '$' + dollars + '.' + cents;

  return amount;
}


var buildItem = function (item, key) {
  var element = "";
  item.filename = imgSrc = "../images/" + item.filename;
  item.price = toCurrency(item.price.toString());

  element += '<div class="item">'
  element +=   '<img class="item-img" src="' + item.filename + '" alt="">';
  element +=   '<p class="item-info">' + item.name + '</p>'
  element +=   '<p class="item-info">' + item.price + '</p>'
  element +=   '<div class="button-container">'
  element +=     '<button class="cart-button" value="' + key + '" onclick="addToCart(this)">Add to cart</button>'
  element +=   ' </div>'
  element += '</div>'

  return element;
}

var buildCollection = function (arrItems) {
  arrItems.forEach(function (item, index) {
    var app = document.getElementById('app');
    app.innerHTML += buildItem(item, index);
  });
};

var loadPage = function () {
  buildCollection(payload.products);
}

var toggleBlur = function () {
  var collection = document.getElementById('app');
  collection.classList.toggle('collection-blurred');
}

var toggleCart = function () {
  var cart = document.getElementById('app-cart');
  cart.classList.toggle('cart-show');
}

var displayCart = function () {
  toggleBlur();
  toggleCart();
}


var userCart = [];

var updateCartTotal = function() {
  var total = 0;
  var itemDollars = 0;
  var itemCents = 0;
  userCart.forEach(function(item) {
    var price = item.price.replace(/\D/g,'');

    itemCents += parseInt(price.substring(price.length - 2, price.length));
    if(itemCents >= 100) {
      itemDollars++;
      itemCents = itemCents - 100;
    }
    itemDollars += parseInt(price.substring(0, price.length - 2));
  });

  return '$' + itemDollars + '.' + itemCents;
}

var updateCartCount = function() {
  return userCart.length;
}

var addToCartView = function (cartItem) {
  var cart = document.getElementById('app-cart-items');
  var element = "";

  element += '<div class="cart-item">'
  element +=  '<img class="cart-img" src="' + cartItem.filename + '" alt="">'
  element +=  '<div class="cart-item-info">'
  element +=    '<p class="cart-item-info-name">' + cartItem.name + '</p>'
  element +=    '<p class="cart-item-info-price">'+ cartItem.price +'</p>'
  element +=  '</div>'
  element += '</div>'

  cart.innerHTML += element;
};


var addToCart = function (button) {
  // im going to pretend this is a uid that i can use to add items to carts
  var itemId = button.value;
  var item = payload.products[itemId];
  userCart.push(item);
  var recentItem = userCart.length - 1;
  addToCartView(userCart[recentItem]);
  var itemCount = document.getElementById('item-count');
  itemCount.innerHTML = updateCartCount();

  var cartPrice = document.getElementById('cart-price');
  cartPrice.innerHTML = updateCartTotal();

}