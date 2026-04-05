const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Express in Docker!",
    timestamp: new Date().toISOString(),
  });
});
app.get("/api/health", (req, res) => {
  res.status(200).json({
    health: "100%",
    message: "server responded successfully",
  });
});

app.get("/api/ping", (req, res) => {
  console.log("/PING");
  res.status(200).send("pong");
});

app.get("/api/random", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Random isn't random anymore",
    data: {},
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "NOT FOUND",
    message: "Route not found",
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at port  : ${port}`);
});
