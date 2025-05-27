// vulnerable.js

// function runUserCode() {
//     const userCode = location.hash.substring(1);
//     eval(userCode); // 🚩 S1523: Use of eval
//   }
  
//   const password = "123456"; // 🚩 S2068: Hardcoded password
  
//   fetch("http://insecure-api.com"); // 🚩 S4423: Insecure HTTP
  
//   const userId = req.query.id;
//   const sql = "SELECT * FROM users WHERE id = " + userId; // 🚩 S3649: SQL injection
  