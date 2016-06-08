var express = require('express'),
    app = express();

app.use(express.static('./'));

var server = app.listen(3000, function () {
  console.log('app listening on port:%s', server.address().port);
});