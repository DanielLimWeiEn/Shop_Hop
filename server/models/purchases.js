import mongoose from "mongoose";

const purchaseSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    description: { type: String, required: true, },
    price: { type: String, required: true },
    origin: { type: String, required: true },
    itemFile: { type: String, required: true },
}, {
    timestamps: true
});

export default mongoose.model("Purchases", purchaseSchema);