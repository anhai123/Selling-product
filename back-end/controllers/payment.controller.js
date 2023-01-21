const config = require("../config/auth.config");
const db = require("../models");
const Products = db.product;
const Payments = db.payment;
const Users = db.user;
var ObjectId = require("mongodb").ObjectId;

exports.getPayments = async (req, res) => {
  try {
    const payments = await Payments.find();
    return res.json(payments);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.createPayment = async (req, res) => {
  try {
    const user = await Users.findById(req.userId).select("username email");
    if (!user) {
      return res.status(400).json({ msg: "User does not exist." });
    }

    const { cart, address } = req.body;
    console.log(user);
    const { _id, username, email } = user;

    const newPayment = new Payments({
      user_id: _id,
      name: username,
      email,
      cart,
      address,
    });

    cart.filter((item) => {
      return sold(item._id, item.quantity, item.sold);
    });

    await newPayment.save();
    return res.json({ msg: "Payment Success." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const sold = async (id, quantity, oldSold) => {
  await Products.findOneAndUpdate(
    { _id: id },
    {
      sold: quantity + oldSold,
    }
  );
};
