const express = require("express"),
  jsendie = require("jsendie"),
  app = express(),
  path = require("path"),
  PORT = process.env.PORT || 5000;

app.use(jsendie());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./router"));

// invalid / not found
app.use((_, res) => res.error("404 Not Found", 404));

// start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));