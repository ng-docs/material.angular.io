const gulp = require('gulp');
const replace = require('gulp-replace');
const rimraf = require('rimraf');

gulp.task('clean', (done) => {
  rimraf('../src/assets/documents/*', {}, done);
});
gulp.task('translate', ['clean'], () => {
  return gulp.src('../src/assets/documents-en/**/*.html')
  // 加翻译指令
    .pipe(replace(/<(span|a|t)\b([^<]*?)<\/\1>(\s*)<\1\b([^<]*?)<\/\1>/gim, addTranslationDirectives))
    .pipe(replace(/<(h\d|p|header)\b([\s\S]*?)<\/\1>(\s*)<\1\b([\s\S]*?)<\/\1>/gim, addTranslationDirectives))
    .pipe(replace(/<(div)\b(.*?)<\/\1>(\s*)<\1\b(.*?)<\/\1>/gim, addTranslationDirectives))
    .pipe(replace(/<h3 translation-result id=".*?<\/span> (.*?)<\/h3><h3 translation-origin="off" (id=".*?<\/span>) (.*?)<\/h3>/gim,
      '<h3 translation-result $2 $1</h3><h3 translation-origin="off">$3</h3>'))
    .pipe(gulp.dest('../src/assets/documents/'));
});

gulp.task('default', ['translate']);

function containsChinese(text) {
  return text.search(/[\u4e00-\u9fa5]/gm) !== -1;
}

function containsTranslationResult(text) {
  return text.search(/\btranslation-result\b/gm) !== -1;
}

function addTranslationDirectives(all, _1, _2, _3, _4) {
  if (!containsTranslationResult(_4) && !containsChinese(_2) && containsChinese(_4)) {
    return `<${_1} translation-result${_4}</${_1}>${_3}<${_1} translation-origin="off"${_2}</${_1}>`;
  } else {
    return all;
  }
}
