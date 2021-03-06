const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');


const app = express();

mongoose.connect('mongodb+srv://Leo:Leo@aircnc.vnkiz.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})

//GET PUT POST DELETE

//rec.query = Acessar query params (para filtros)
//rec.params = Acessar route params (para edição, delete)
//rec.body = Acessar corpo da requisição
app.use(cors());
app.use(express.json());
// app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
app.listen(3333);

