
//creo clase producto

class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

//uso la clase de molde y creo un producto

let producto1 = new Product("producto1", "es un producto", 300, "foto", 1, 10);

//creo clase product manager

class ProductManager {
  constructor() {
    this.product = [];
    this.contador = 1; //para incrementar
  }
  getProducts() {
    // Esto es para que me muestre el listado de productos. Era "this.product" NO "this.products"
    console.log(this.product);
  }
  getProductsById(id) {
    let findbyId = this.product.find((producto) => producto.id == id);
    console.log(findbyId);
    return findbyId;
  }
  addProduct(product) {
    // Primero busco si está el producto en la lista de productos
    let productoCode = this.product.find(
      (producto) => producto.code == product.code
    );
    // Si está, no lo agrego, tiro un error
    if (productoCode) {
      console.log("code repetido");
      return;
    } else {
      //Si no está, le agrego el id y lo agrego a la lista
      product.id = this.contador; //incrementador
      this.contador++;
      this.product.push(product);
    }
  }
}

const productManager = new ProductManager();

productManager.addProduct(producto1);

productManager.getProducts();
