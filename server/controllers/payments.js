import Stripe from "stripe";

import Purchases from "../models/purchases.js";

const stripe = new Stripe(
  "sk_test_51LAlVKHrTVn3XrgZ09MIkdiCrL4zZ2kHrWZe5mKQF90V327xGUGOIWUhkY061HaEnf8Tusm3dRpmxDZ04TMCwo73003o0Zr8N1"
);

// @desc Check that route is working.
// @route GET /payment/
// @access private
export const getPayments = (req, res) => {
  console.log("This should be working");
  res.status(200).json({ message: "This Works" });
};

// @desc Make a purchase using stripe payment gateway and update database.
// @route POST /profile/pay
// @access private
export const payPayments = (req, res) => {
  const items = req.body.items;

  const newPurchases = items.map((item) => {
    return new Purchases({
      ...item,
      user: req.userId,
      purchaseDate: new Date().toISOString(),
    });
  });

  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );

  try {
    newPurchases.map((purchase) => purchase.save());
  } catch (error) {
    console.log(error);
  }
};
