import app from "./app";

require("dotenv").config();

const port = 3000;

app.listen(port);

console.log(`eWallet API Running-> ${port}`);
