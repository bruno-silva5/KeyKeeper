const Credential = require('../database/Models/Credential')

async function store(req, res) {
    const user_id = req.user.id;

    await Credential.create({ ...req.body, user_id })
        .then(() => {
            return res.json({
                error: false,
                message: 'Credential Armazenada Com Sucesso!'
            })
        }).catch(error => {
            console.log(error);
            return res.status(400).json({
                error: true,
                message: "Desculpe, não foi possível armazenar a credencial"
            })
        });
}

async function index(req, res) {
    const user_id = req.user.id;

    await Credential.findAll({ where: { user_id } })
        .then(credentials => {
            return res.json(credentials);
        }).catch(error => {
            console.log(error);
            return res.status(400).json({
                error: true,
                message: "Desculpe, não foi possível listar as credenciais"
            })
        });
}

async function update(req, res) {
    const { id } = req.params;
    const user_id = req.user.id;

    await Credential.update(req.body, { where: { id, user_id } })
        .then(() => {
            return res.json({
                error: false,
                message: 'Credential Atualizada Com Sucesso!'
            })
        }).catch(error => {
            console.log(error);
            return res.status(400).json({
                error: true,
                message: "Desculpe, não foi possível atualizar a credencial"
            })
        });
}

async function destroy(req, res) {
    const { id } = req.params;
    const user_id = req.user.id;

    await Credential.destroy({ where: { id, user_id } })
        .then(() => {
            return res.json({
                error: false,
                message: 'Credential Deletada Com Sucesso!'
            })
        }).catch(error => {
            console.log(error);
            return res.status(400).json({
                error: true,
                message: "Desculpe, não foi possível deletar a credencial"
            })
        });
}

module.exports = {
    store,
    index,
    update,
    destroy
}