console.log('Loaded!');
app.get('/ui/main.js', function (req,res) {
   res.sendFile(path.join(_dirname,'ui','main.js')); 
});