import { db } from '../utils/db.mjs';

class TransactionModel {
  // Method to create a transaction
  static async createTransaction(amount, transaction_type, user) {
    const connection = await db.getConnection(); 
    try {
      await connection.beginTransaction(); 

      const [result] = await connection.execute(
        'INSERT INTO transactions (amount, transaction_type, user_id, status, timestamp) VALUES (?, ?, ?, ?, NOW())',
        [amount, transaction_type, user, 'PENDING']
      );
        // Get the newly created transaction ID
        const transaction_id = result.insertId;

      await connection.commit();
      return {
        transaction_id,
        amount,
        transaction_type,
        status: 'PENDING',
        user,
        timestamp: new Date().toISOString(),
      };
    } catch (err) {
      await connection.rollback();
      throw err;
    } finally {
      connection.release();
    }
  }

  // Method to get all transactions for a specific user
  static async getTransactionsByUserId(user_id) {
    try {
      const [transactions] = await db.execute(
        'SELECT * FROM transactions WHERE user_id = ? ORDER BY timestamp DESC',
        [user_id]
      );

      if (transactions.length === 0) {
        throw new Error('No transactions found for this user');
      }

      return transactions.map(transaction => ({
        transaction_id: transaction.transaction_id,
        amount: transaction.amount,
        transaction_type: transaction.transaction_type,
        status: transaction.status,
        timestamp: transaction.timestamp,
      }));
    } catch (err) {
      throw err;
    }
  }

  // Method to update the status of a transaction
  static async updateTransactionStatus(transaction_id, status) {
    const connection = await db.getConnection(); // Get a database connection
    try {
      await connection.beginTransaction(); // Start a new transaction

      const [result] = await connection.execute(
        'UPDATE transactions SET status = ? WHERE transaction_id = ?',
        [status, transaction_id]
      );

      if (result.affectedRows === 0) {
        throw new Error('Transaction not found');
      }

      await connection.commit();
      return {
        transaction_id,
        status,
        timestamp: new Date().toISOString(),
      };
    } catch (err) {
      await connection.rollback();
      throw err;
    } finally {
      connection.release();
    }
  }

  // Method to get transaction details by ID
  static async getTransactionById(transaction_id) {
    try {
      const [transaction] = await db.execute(
        'SELECT * FROM transactions WHERE transaction_id = ?',
        [transaction_id]
      );

      if (transaction.length === 0) {
        throw new Error('Transaction not found');
      }

      return {
        transaction_id: transaction[0].transaction_id,
        amount: transaction[0].amount,
        transaction_type: transaction[0].transaction_type,
        status: transaction[0].status,
        timestamp: transaction[0].timestamp,
      };
    } catch (err) {
      throw err;
    }
  }
}

export default TransactionModel;
