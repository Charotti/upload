const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 8000;
const upload = multer({ dest: "public/uploads" });
app.use(express.static("public"));
app.use(express.json());
const users = [];
app.post("/user", upload.single("image"), (req, res) => {
  fs.renameSync(
    req.file.path,
    path.join(req.file.destination, req.file.originalname)
  );
  users.push(req.body.name);
  res.json({ message: "Image received", users });
});

app.listen(port, () => {
  console.log("Server started on port: " + port);
});
