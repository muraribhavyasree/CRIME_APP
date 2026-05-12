export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await User.findOne({ email });

  if (!admin || admin.role !== "admin") {
    return res.status(400).json({
      message: "Admin not found",
    });
  }

  const isMatch = await bcrypt.compare(
    password,
    admin.password
  );

  if (!isMatch) {
    return res.status(400).json({
      message: "Wrong password",
    });
  }

  const token = jwt.sign(
    {
      id: admin._id,
      role: admin.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  res.json({
    token,
    admin,
  });
};