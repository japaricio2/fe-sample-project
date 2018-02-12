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
var toCurrency = function(amount) {
  var cents = amount.substring(amount.length - 2, amount.length);
  var dollars = amount.substring(0, amount.length - 2);
  amount = '$' + dollars + '.' + cents;

  return amount;
}


var buildItem = function (item) {
  var element = "";
  item.filename = imgSrc = "../images/" + item.filename;
  item.price = toCurrency(item.price.toString());

  element += '<div class="item">'
  element +=  '<img class="item-img" src="' + item.filename + '" alt="">';
  element +=  '<p class="item-info">' + item.name + '</p>'
  element +=  '<p class="item-info">' + item.price + '</p>'
  element +=  '<div class="button-container">'
  element +=    '<button class="cart-button">Add to cart</button>'
  element +=   '</div>'
  element += '</div>'

  return element;
}

var buildCollection = function (arrItems) {
  arrItems.forEach(function (item) {
    var app = document.getElementById('app');
    app.innerHTML += buildItem(item);
  });
};

var loadPage = function () {
  buildCollection(payload.products);
}
