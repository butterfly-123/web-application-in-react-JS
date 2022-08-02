runApp();

function runApp() {

  const product = document.getElementById("product1");

  function clickHandler() {
    console.log("Hello there!")
  }

  product.addEventListener("click", clickHandler());

  // product.addEventListener("click", function() {
  //   console.log("Hello there!")
  // }

  function callbackFunction(message) {
    console.log(message);
  }

  function myCustomFunction(fn) {
    fn("Mu custon function");
  }

  myCustomFunction(callbackFunction); 

  const functionRef = function() {
    console.log("Function reference")
  }

  functionRef();

  const functionRef2 = callbackFunction;

  myCustomFunction(functionRef2);


  class Product {
    constructor(
      name = "Default Name",
      type,
      price,
      currency = "usd",
      image = "unsplash_url"
    ) {
      this.name = name;
      this.type = type;
      this.price = price;
      this.currency = currency;
      this.image = image;
    }

    displayInfo(additionalInfo = "") {
      const info = `
        Name: ${this.name},
        Type: ${this.type},
        Price: ${this.price},
        Currency: ${this.currency},
        Image: ${this.image},
        ${additionalInfo}
      `;

      console.log(info)    
    }
  }
  
  const product1 = new Product("Laptop", "eletronics", 500, "usd", "some_url_of_image");
  const product2 = new Product("Super shoes", "clothing", 47, "usd", "some_url_of_image");
  const product3 = new Product("Smartphone", "phones", 50, "usd", "some_url_of_image");
  const product4 = new Product("Fancy Hat", "clothing", 100, "usd", "some_url_of_image");

  const products = [product1, product2, product3, product4];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    product.displayInfo();
    console.log("-----------------");
  }
}
