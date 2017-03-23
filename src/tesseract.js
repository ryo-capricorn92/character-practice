document.getElementById('check').onclick = function (e) {
  var context = document.getElementById('canvas').getContext('2d');
  Tesseract.recognize(context)
    .catch(function (error) {
      console.log(error);
    })
    .then(function (result) {
      console.log(result);
    });
}

// Tesseract.recognize(myImage)
// .then(function(result){
//     console.log(result)
// })
