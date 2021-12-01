const Product = require("./productModel");
const PAGE_SIZE = 4;

exports.listProducts = (page) => {
  console.log(page);

  const Skip = (page - 1) * PAGE_SIZE;
  return Product.find({}).skip(Skip).limit(PAGE_SIZE);
};

exports.totalProductNum = () => Product.countDocuments();
exports.viewOne = (id) => Product.findById(id).lean();

exports.create=(req, res)=>{
  if(!req.body){
    res.status(400).send({message:"Content can not be empty!"});
    return;
  }
  const product = new Product({
    name= req.body.name,
    brand= req.body.brand,
    price= req.body.price,
    availability= req.body.availability,
    description= req.body.description,
    category= req.body.category,
    gender= req.body.gender,
    image= req.body.image,
    sale= req.body.sale,
    weight= req.body.weight,
    dimensions= req.body.dimensions,
    materials= req.body.materials,
    review= req.body.review,
    gen= req.body.gen
  })
  employee.save((err, doc) => {
    if (err)
        console.log(err);
    

});

    
}
