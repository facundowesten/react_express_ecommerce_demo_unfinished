const router = require("express").Router();
import { ProductModel as Product } from "../models/Product";
import { CartModel as Cart } from "../models/Cart";
import { verifyTokenAndAdmin, verifyToken } from "../middlewares/verifyToken";


router.post("/add", verifyToken, async (req: any, res: any) => {
    
    const existingCart = await Cart.findOne({userId: req.user.id});
    if (existingCart) {
        const existingProduct = existingCart.products.find((p: any) => p.productId === req.body.productId);
        if (existingProduct) {
            existingProduct.quantity += req.body.quantity;
        } else {
            existingCart.products.push(req.body);
        }
        existingCart.save();
        res.status(200).json({ message: "Cart updated successfully" });
        return;
    }
    else{
    const cart = new Cart({
        user: req.user.id,
        products: {product: req.body.productId, quantity: req.body.quantity },
    });
    try {
        const savedCart = await cart.save();
        res.status(201).json({ message: "Cart added successfully" });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}
});


export const cartRouter = router;