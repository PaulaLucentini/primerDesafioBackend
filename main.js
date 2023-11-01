
//creo clase producto

class Product {
  constructor(
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
  ) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
  }
}

//uso la clase de molde y creo un producto

let producto1 = new Product ("producto1", "es un producto", 300, "foto", 1, 10);

//creo clase product manager

class ProductManager {
  constructor(){
      this.product = [];
      this.contador = 1; //para incrementar
  }
  getProducts(){
    console.log(this.products);
  }
  getProductsById(id){
    let findbyId = this.product.find (producto => producto.id == id)
    console.log(findbyId);
    return findbyId;
  }
  addProduct(product){
    this.product.push(product);

    let productoCode = this.product.find (producto => producto.code == product.code)
    if(productoCode){
      console.log("code repetido")
      return
    }

    product.id = this.contador //incrementador
    this.contador++
  }
}

const productManager = new ProductManager

productManager.addProduct(producto1);

productManager.getProducts()

