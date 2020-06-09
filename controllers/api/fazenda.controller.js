var config = require('config.json');
var express = require('express');
var router = express.Router();

var FazendaService = require('services/fazenda.service')

// routes
router.post('/register', registerFazenda);
router.put('/:_id', updateFazenda);
router.delete('/:_id', deleteFazenda);
router.get('/', getAllFazenda);
router.get('/user/:_iduser', getFazendasByUser);

module.exports = router;

function getFazendasByUser(req,res){
    FazendaService.getByUser(req.params._iduser)
        .then((fazendas) => {
            res.status(200).send(fazendas);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
}

function getAllFazenda(req,res){
    FazendaService.getAll()
        .then(function (Fazendas) {
            res.send(Fazendas);
        })
        .catch(function (err){
            res.status(400).send(err);
        });
}

function registerFazenda(req, res) {
    FazendaService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function updateFazenda(req, res) {
    FazendaService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function deleteFazenda(req, res) {
    FazendaService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}