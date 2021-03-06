//  file:   main.js
//  author: alex w.
//  desc:   root file for bundling the image annotator
global.jQuery = require('jquery');
global.$ = require('jquery');
const ImageAnnotator = require('./components/image-annotator');

// set global UI vars
global.DEV = false;
global.task = window.task || -1;
global.user = window.user || -1;
global.experiment = window.experiment || -1;
global.condition = window.condition || -1;
const config = window.config || {
  mode: 'transcription',
};

function start(configuration) {
  /* create and init the annotator ui */
  ms = new ImageAnnotator();
  ms.initialize(config);
}

/* create the interface */
start(config);
