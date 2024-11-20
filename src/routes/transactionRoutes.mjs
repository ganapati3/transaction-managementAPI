import express from "express";
import { body, query, param } from "express-validator";
import { validate } from "../middleware/validator.mjs";
import {create_transaction,get_all_transactions_by_userid,update_transaction,get_transaction_by_id} from "../controllers/transactionController.mjs";
import swaggerJSDoc from "swagger-jsdoc";

const router = express.Router();
/**
*@swagger
*/

// POST /api/transactions - Create a new transaction
router.post(
  "/transactions",
  validate([
    body("amount").isFloat({ gt: 0 }).withMessage("Amount must be a positive decimal value."),
    body("transaction_type").isIn(["DEPOSIT", "WITHDRAWAL"]).withMessage("Transaction type must be either DEPOSIT or WITHDRAWAL."),
    body("user").isInt({ gt: 0 }).withMessage("User ID must be a positive integer."),
  ]),
  create_transaction
);

// GET /api/transactions - Retrieve all transactions for a specific user
router.get(
  "/transactions",
  validate([
    query("user_id").isInt({ gt: 0 }).withMessage("User ID must be a positive integer."),
  ]),
  get_all_transactions_by_userid
);

// PUT /api/transactions/:transaction_id - Update the status of an existing transaction
router.put(
  "/transactions/:transaction_id",
  validate([
      param("transaction_id").isInt({ gt: 0 }).withMessage("Transaction ID must be a positive integer."),
      body("status").isIn(["COMPLETED", "FAILED"]).withMessage("Status must be either COMPLETED or FAILED."),
  ]),
  update_transaction
);

// GET /api/transactions/:transaction_id - Retrieve details of a specific transaction
router.get(
  "/transactions/:transaction_id",
  validate([
    param("transaction_id").isInt({ gt: 0 }).withMessage("Transaction ID must be a positive integer."),
  ]),
  get_transaction_by_id
);

export default router;
