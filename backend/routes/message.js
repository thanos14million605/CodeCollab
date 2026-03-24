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
router.post("/", authenticate);

router.use(authenticate);
router.route("/:roomId").get(getAllMessages);
router.route("/").post(createMessage);

module.exports = router;
