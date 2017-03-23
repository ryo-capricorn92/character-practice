document.getElementById('check').onclick = function (e) {
  var context = document.getElementById('canvas').getContext('2d');

  var tessOptions = {
    lang: 'jpn',
    tessedit_pageseg_mode: 7,
    tessedit_char_whitelist: 'ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ'
  }

  Tesseract.recognize(context, tessOptions)
    .catch(function (error) {
      console.log(error);
    })
    .then(function (result) {
      console.log(result);
    });
}

console.log('Current commit is:', 'set tesseract to single char only');
