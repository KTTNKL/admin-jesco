const Product = require("./productModel");
const PAGE_SIZE = 4;

exports.listProducts = (page) => {
  console.log(page);

  const Skip = (page - 1) * PAGE_SIZE;
  return Product.find({}).skip(Skip).limit(PAGE_SIZE);
};

exports.totalProductNum = () => Product.countDocuments();
exports.viewOne = (id) => Product.findById(id).lean();

exports.create = (product) => {
  if (!product) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  console.log(product);
  const newProduct = new Product();
  newProduct.name = product.name;
  newProduct.price = product.price;
  newProduct.availability = product.availability;
  newProduct.category = product.category;
  newProduct.brand = product.brand;
  newProduct.gender = product.gender;
  newProduct.sale = product.sale;
  newProduct.weight = product.weight;
  newProduct.dimensions = product.dimensions;
  newProduct.materials = product.materials;
  newProduct.gen = product.gen;
  newProduct.description = product.description;
  newProduct.save((err, doc) => {
    if (err) console.log(err);
  });
};

exports.update= (product) =>{
  console.log(product);
  Product.findOneAndUpdate({ _id: product._id }, product, { new: true }, (err, doc) => {
      if (err) { console.log(err); }

  });
}

exports.delete =(id)=>{
  console.log(id);
  Product.findByIdAndRemove(id, (err, doc) => {
    if (err) console.log(err); 
    
});

}
