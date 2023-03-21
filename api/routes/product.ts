const router = require("express").Router();
const { ProductModel: Product } = require("../models/Product");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../middlewares/verifyToken");

router.post("/add", verifyTokenAndAdmin, (req: any, res: any) => {
  const product = new Product({

    name: req.body.name,
    desc: req.body.desc,
    images: req.body.images,
    category: req.body.category,
    brand: req.body.brand,
    type: req.body.type,
    price: req.body.price,
    colors: req.body.colors,
    size: req.body.size,
    inStock: req.body.inStock,
    
  });

  try {
    const savedProduct = product.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put("/update", verifyTokenAndAdmin, async (req: any, res: any) => {
  try {
    await Product.findOneAndUpdate(req.body.id, { ...req.body });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.delete("/remove", verifyTokenAndAdmin, async (req: any, res: any) => {
  try {
    await Product.findByIdAndDelete(req.body.id);
    res.status(200).json({ message: "Product removed successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/", async (req: any, res: any) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;
  try {
    const products = await Product.find(
        queryCategory ? { categories: queryCategory } : {}
    )
      .sort(queryNew ? { createdAt: -1 } : { createdAt: 1 })
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/:id", async (req: any, res: any) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export { router as productRouter };
