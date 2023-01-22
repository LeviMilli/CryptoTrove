const { Schema, model } = require("mongoose");
require("./User.model")


const transactionSchema = new Schema(
  {
    UserId : {
        ref: 'User',
        type: Schema.Types.ObjectId
      } 
    ,
    name: String,
    price: Number,
    quantity: Number,
    image: String
  },
  {

    timestamps: true,
  }
);

const Transaction = model("Transaction", transactionSchema);

module.exports = Transaction;
