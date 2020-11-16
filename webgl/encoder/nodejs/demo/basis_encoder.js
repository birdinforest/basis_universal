const basisu = require('../bin/1.12/multi_threads/basisu');
const path = require('path');

const filePath = function(relativePath) {
  return path.join(__dirname, relativePath);
}

const imagePath = filePath('./shannon.png');

basisu().then(module => {
  try {
    // The build has applied nodejs file system in FS.
    const stat = module.FS.stat(filePath('./shannon.png'), true);
    console.log('\nImage stat:', stat);
  } catch (e) {
    console.log('\nerror for stat: ', e);
  }

  try {
    const cwd = module.FS.cwd();
    console.log('\nCurrent directory:', cwd);
  } catch (e) {
    console.log('\nerror for cwd: ', e);
  }

  console.log('\n---------- Start compression ----------');
  module.callMain([filePath('./shannon.png'), '-debug']);
    // '-mipmap',
    // '-comp_level', '1',
    // '-max_endpoints', '16128',
    // '-max_selectors', '16128',
    // '-no_selector_rdo', '-no_endpoint_rdo']);

  console.log('---------- End compression ----------\n');

  try {
    // The build has applied nodejs file system in FS.
    const stat = module.FS.stat(filePath('./shannon.basis'), true);
    console.log('\nImage stat:', stat);
  } catch (e) {
    console.log('\nerror for stat: ', e);
  }

  // modlue.callMain([filePath('./images/BATHROOM_baseColor.png'),
  //   '-no_multithreading', '-mipmap']);

  // var reader = modlue.FS.readFile(filePath('shannon.basis'), {encoding: 'binary'});
  // var result = reader.buffer;
  // console.log(result);
});
