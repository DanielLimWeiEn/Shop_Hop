import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51LAlVKHrTVn3XrgZ09MIkdiCrL4zZ2kHrWZe5mKQF90V327xGUGOIWUhkY061HaEnf8Tusm3dRpmxDZ04TMCwo73003o0Zr8N1");

export const getPayments = (req, res) => {
    console.log("This should be working");
    res.status(200).json({ message: "This Works" });
};

export const payPayments = (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd',
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).json(stripeErr);
        } else {
            res.status(200).json(stripeRes);
        }
    })
}