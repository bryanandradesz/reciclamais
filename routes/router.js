const express = require("express");
const router = express.Router();
const path = require('path');


const data = new Date();


// Roteadores
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "..") + '/index.html');
});

router.get('/minigame', function (req, res) {
  res.sendFile(path.join(__dirname, "..") + '/src/views/minigame.html');
});

router.get('/ecopontos', function (req, res) {
  res.render('ecopontos', {linkmapa: "undefined"})
});
router.get('/ecoponto1', function (req, res) {
  res.render('ecopontos', {linkmapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58676.226474911426!2d-47.32621960506269!3d-23.197042025304153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4fa25d997637%3A0xad5049a3734101d3!2sEcoponto%2001%20-%20Jardim%20das%20Na%C3%A7%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1615893295307!5m2!1spt-BR!2sbr"})
});
router.get('/ecoponto2', function (req, res) {
  res.render('ecopontos', {linkmapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14665.878347301274!2d-47.2640686!3d-23.2259931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc1a0064d9dabd13!2sEcoponto%2002%20-%20Jardim%20Santa%20Cruz!5e0!3m2!1spt-BR!2sbr!4v1608820768509!5m2!1spt-BR!2sbr"})
});
router.get('/ecoponto3', function (req, res) {
  res.render('ecopontos', {linkmapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14671.472264846765!2d-47.3183315!3d-23.1750149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6916f668f91024b0!2sEcoponto%2003%20-%20Jardim%20S%C3%A3o%20Jo%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1608820899988!5m2!1spt-BR!2sbr"})
});
router.get('/ecoponto4', function (req, res) {
  res.render('ecopontos', {linkmapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14667.574465210273!2d-47.2721538!3d-23.2105473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66f882a43019f8af!2sEcoponto%2004%20-%20Jardim%20Cidade!5e0!3m2!1spt-BR!2sbr!4v1608821004383!5m2!1spt-BR!2sbr"})
});
router.get('/ecoponto5', function (req, res) {
  res.render('ecopontos', {linkmapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14668.537109590088!2d-47.310275!3d-23.2017766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3173c8906fbf1e68!2sEcoponto%20S%C3%A3o%20Pedro%20e%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1608823803912!5m2!1spt-BR!2sbr"})
});
router.get('/ecoponto6', function (req, res) {
  res.render('ecopontos', {linkmapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14670.904385401167!2d-47.3027476!3d-23.1801949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c0c210ebe9b290b!2sEcoponto%2006%20Escola%20-%20Jardim%20S%C3%A3o%20Gabriel!5e0!3m2!1spt-BR!2sbr!4v1608823919347!5m2!1spt-BR!2sbr"})
});
router.get('/ecoponto7', function (req, res) {
  res.render('ecopontos', {linkmapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14666.779929044922!2d-47.2781171!3d-23.217784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd0786e2e9702e012!2sEcoponto%2007%20-%20Parque%20Residencial%20Rondon!5e0!3m2!1spt-BR!2sbr!4v1608820597180!5m2!1spt-BR!2sbr"})
});
router.get('/ecoponto8', function (req, res) {
  res.render('ecopontos', {linkmapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14666.633835498033!2d-47.2676015!3d-23.2191144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfcda71a323d7354a!2sEcoponto%2008%20-%20Salto%20Ville!5e0!3m2!1spt-BR!2sbr!4v1608823988402!5m2!1spt-BR!2sbr"})
});
router.get('/ecoponto9', function (req, res) {
  res.render('ecopontos', {linkmapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.217462586355!2d-47.285197985552756!3d-23.19874425418485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4fcb8ff323e1%3A0x67f9a3bb00ff99e!2sEcoponto%209%20-%20CEA!5e0!3m2!1spt-BR!2sbr!4v1608824706367!5m2!1spt-BR!2sbr"})
});
router.get('/ecoponto10', function (req, res) {
  res.render('ecopontos', {linkmapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.493813605669!2d-47.28900898555302!3d-23.188667753818375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4dc85e2ea2cd%3A0x4057365ace150921!2sEcoponto%2010%20-%20Jardin%20Santo%20Ant%C3%B4nio!5e0!3m2!1spt-BR!2sbr!4v1608824650036!5m2!1spt-BR!2sbr"})
});
router.get('/ecoponto11', function (req, res) {
  res.render('ecopontos', {linkmapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14670.767287036833!2d-47.2697833!3d-23.1814453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa690c5ce45bdc830!2sEcoponto%2011%20-%20Quintal!5e0!3m2!1spt-BR!2sbr!4v1611360475187!5m2!1spt-BR!2sbr"})
});



router.get('/home', async function (req, res) {
  const connection = await getDbConnection();
  const result = await connection.execute('SELECT COUNT(*) AS total FROM inqueritos');
  
  // Acessa o valor de `total` no primeiro elemento do primeiro array
  const quantidade = result[0][0].total;
  const dataFormatada = (moment().locale('pt-br').format('dddd, D [de] MMMM [de] YYYY')).toUpperCase();
  connection.end();  // Feche a conexão
  res.render('home', { quantidadeInqueritos: quantidade, dataFormatada: dataFormatada });
});




module.exports = router;
