const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const router = require(__dirname + '/routes/router');
const app = new express();

const port = 3000
now = new Date



// ------------------ Express e EJS --------------------- //

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname) + '/src/views');
app.set('trust proxy', true);

// ------------------Principais--------------------- //

app.use('/', router);

// ------------------Iniciar Servidor--------------------- //

app.use((req, res, next) => {
    res.status(404).send("Desculpe, não conseguimos encontrar essa página.");
  }) // Erro 404


  app.listen(port, function(erro) {
    if(erro){
        console.log("❌ » Erro :" + erro)
    }
    else{
        console.clear()
        console.log("✅ » Servidor Online atualizado ás " + now.getHours() + ":" + now.getMinutes() + " na porta 3000...") 
    }
})



