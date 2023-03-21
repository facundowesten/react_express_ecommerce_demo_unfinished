const router = require("express").Router();
import { OrderModel as Order } from "../models/Order";
import { verifyTokenAndAdmin, verifyToken } from "../middlewares/verifyToken";

router.post("/add", verifyToken, async (req: any, res: any) => {
  const order = new Order({
    user: req.user.id,
    products: req.body.products,
    address: req.body.address,
    city: req.body.city,
    zip: req.body.zip,
    country: req.body.country,
    phone: req.body.phone,
  });

  try {
    const savedOrder = await order.save();
    res.status(201).json({ message: "Order added successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/", verifyTokenAndAdmin, async (req: any, res: any) => {
  const queryUser = req.query.user;
  const queryStatus = req.query.status;
  try {
    const orders = await Order.find()
      .where(queryUser ? { user: queryUser } : {})
      .where(queryStatus ? { status: queryStatus } : {});
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    
    res.status(500).json({ message: err });
  }
});

export const orderRouter = router;
