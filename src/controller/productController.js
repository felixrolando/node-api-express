import { dataProducts } from "../data/products.js";

const getProducts = (req, res) => {
  res.json(dataProducts);
};

const findProductById = (req, res) => {
  const id = Number(req.params.productID);
  const product = dataProducts.find((product) => product.id === id);

  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.json(product);
};

const createProduct = (req, res) => {
  const newProduct = {
    id: dataProducts.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
  const id = Number(req.params.productID);
  const index = dataProducts.findIndex((product) => product.id === id);
  const updatedProduct = {
    id: dataProducts[index].id,
    name: req.body.name,
    price: req.body.price,
  };

  dataProducts[index] = updatedProduct;
  res.status(200).json("Product updated");
};

const deleteProductById = (req, res) => {
  const id = Number(req.params.productID);
  const index = dataProducts.findIndex((product) => product.id === id);
  dataProducts.splice(index, 1);
  res.status(200).json("Product deleted");
};

export {
  getProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProductById,
};
