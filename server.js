const http = require("http")

http.createServer(function(req, res) {
    const{ url}= req
    res.writeHead(200, {"Content-Type": "text/html"})
    
    if(url=="/about"){
        res.write("Want To Leran More")
    }
    
else     if(url =="/"){ 
     res.write ("Welcom Home")   
    }
    else {res.write("You done messed up A A Ron!!!!!!!")}
    res.end()
}).listen(8080)