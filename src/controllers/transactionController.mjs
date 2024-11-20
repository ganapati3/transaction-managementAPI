import TransactionModel from '../models/transactionModel.mjs';

// Controller to create a new transaction
export const create_transaction = async (req, res) => {
  const { amount, transaction_type, user } = req.body;

  try {
    const transaction = await TransactionModel.createTransaction(amount, transaction_type, user);
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error:err.message });
  }
};

// Controller to get all transactions for a specific user
export const get_all_transactions_by_userid = async (req, res) => {
  const { user_id } = req.query;

  try {
    const transactions = await TransactionModel.getTransactionsByUserId(user_id);
    res.json({ transactions });
  } catch (err) {
    res.status(500).json({ error: err.message});
  }
};

// Controller to update the status of an existing transaction
export const update_transaction = async (req, res) => {
  const { transaction_id } = req.params;
  const { status } = req.body;

  try {
    const transaction = await TransactionModel.updateTransactionStatus(transaction_id, status);
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error:err.message});
  }
};

// Controller to get details of a specific transaction by its ID
export const get_transaction_by_id = async (req, res) => {
  const { transaction_id } = req.params;

  try {
    const transaction = await TransactionModel.getTransactionById(transaction_id);
    res.json(transaction); 
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error:err.message});
  }
};
