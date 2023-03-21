const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

router.post("/pay", async (req: any, res: any) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
        description: "Test payment",
    }).then((error: any, response: any) => {
        if(error){
            res.status(500).json({message: error})
        }
        else{
            res.status(200).json({message: response})
        }

    })


});

export  {router as stripeRouter}