const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true
	},
	text: {
		type: String,
		trim: true,
		required: [true, 'Please add some text']
	},
	amount: {
		type: Number,
		required: [false],
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Transaction', TransactionSchema);
