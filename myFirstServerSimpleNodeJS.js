var http = require('http');

var server = http.createServer(function(req, res){
  var categoria = req.url;

  if(categoria == '/tecnologia'){
    res.end("<html><body>Portal de tecnologia</body></html>");
  } else if(categoria == '/moda'){
    res.end("<html><body>Portal de moda</body></html>");
  } else {
    res.end("<html><body>Portal index</body></html>");
  }
});

server.listen(3000);
