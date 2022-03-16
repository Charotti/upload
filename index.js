const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 8000;
const upload = multer({ dest: "public/uploads" });
app.use(express.static("public"));

app.post("/user", upload.single("image"), (req, res) => {
  fs.renameSync(
    req.file.path,
    path.join(req.file.destination, req.file.originalname)
  );

  res.send("Image received");
});

app.listen(port, () => {
  console.log("Server started on port: " + port);
});
