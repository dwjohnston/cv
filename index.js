var HTMLToPDF = require ('html5-to-pdf')
var htmlToPDF = new HTMLToPDF ({
  inputPath: './a4.html',
  outputPath: './ouput25.pdf',
  include: [
    {
      "type": "css",
      "filePath": "./a4.css"
    },
    {
      "type": "js",
      "filePath": "./d3.d3"
    }

  ],

  options: {
      marginsType: 1

    }
});

htmlToPDF.build ((err) => {
  console.log(err);
});
