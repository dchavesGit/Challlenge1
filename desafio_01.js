class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts = () => {
    return this.products;
  };

  addProduct = (title, description, price, thumbnail, code, stock) => {
    let productValid = true;

    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("All the fields need to be completed");
      productValid = false;
    } else if (this.products.find((p) => p.code === code)) {
      console.log(
        `The code ${code} was alrady in use, please ckeck the field code again.`
      );
      productValid = false;
    }

    if (productValid) {
      if (this.products.length === 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }
      this.products.push(product);
    }
  };

  getProductById = (id) => {
    let product = this.products.find((p) => p.id === id);
    if (product) return product;
    console.log("Not found.");
  };
}

const PM = new ProductManager();

PM.addProduct("Serenito", "Postre", 815, "/rutaimagen2.jpg", 200, 50);
PM.addProduct("Surtido Bagley", "Galletitas", 500, "/rutaimagen1.jpg", 201, 80);
PM.addProduct("", "quesos", 700, "/rutaimagen3.jpg", 205, 50);
PM.addProduct("Parmesano", "quesos", 1000, "/rutaimagen4.jpg", 205, 50);
PM.addProduct("Roquefort", "quesos", 1000, "/rutaimagen4.jpg", 205, 50);
console.log(PM.getProducts());
console.log(PM.getProductById(2));
