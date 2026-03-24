const express = require("express");
const router = express.Router();

// Import controllers
const {
  createMessage,
  getAllMessages,
} = require("../controllers/messageController");

// Import middleware
const { authenticate } = require("../middleware/authMiddleware");

// Routes
router.post("/", authenticate, createMessage);

router.get("/:roomId", authenticate, getAllMessages);

module.exports = router;
