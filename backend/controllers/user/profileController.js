import User from "../../models/userModal.js";
import asyncHandler from "express-async-handler";

// @desc   Get user profile
// @route  GET /api/users/profile
// @access Private

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.json(user);
});
