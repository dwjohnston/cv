const file = process.argv[2] || 'cv.pdf';
console.log(process.argv);
console.log(file);


const HTMLToPDF = require('html5-to-pdf');
const htmlToPDF = new HTMLToPDF({
  inputPath: './dist/index.html',
  outputPath: './dist/' + file,
  include: [{
    "type": "js",
    "filePath": "./dist/bundle.js"
  }, {
    "type": "css",
    "filePath": "./dist/style.css"
  }],
  renderDelay: 1000,
  templatePath: "./dist",

  options: {
    marginsType: 1
  }
});

htmlToPDF.build(error => {
  if (error != null) { throw error; }
});
  // Done!
