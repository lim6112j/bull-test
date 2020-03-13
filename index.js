const bull = require("bull");
const data = new bull('dataQueue', 'redis: 127.0.0.1:6379');
data.process((job, done) => {
  console.log(`current job is => ${JSON.stringify(job)}`);
  if(false) {
    done(new Error('error transcoding'));
  }
  else {
    done(null, 'success');
  }
});
data.on('completed', (job, result) => {
  console.log(`job completed with result => ${result}`);
});
data.add({name: 'lim', desc: 'hello world'} );