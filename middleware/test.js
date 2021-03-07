const fs = require("fs")

fs.readFile('islensk_nutimamalsordabok.xml.html', function(err, data) {
    if (err) {
    console.error(err)
    return
  }
  console.log(data)
  });