// JWT
const jwt = require('jsonwebtoken');
const User = require('../database/Models/User');

async function signIn(req, res) {
    const { email, password } = req.body;

    if (!email || !password) return res.send('E-mail ou Senha em brancos!', 400);

    let user = await User.findOne({
        where: {
            email,
            password
        }
    });

    if (user) {
        const { password, ...rest } = JSON.parse(JSON.stringify(user));
        user = rest;

        const accessToken = generateAccessToken(user);

        return res.json({ accessToken, user });
    }

    return res.send('Usuário não encontrado', 400);
}

async function signUp(req, res) {
    if (await User.findOne({ where: { email: req.body.email } })) {
        return res.json({
            error: true,
            message: 'Já existe um usuário com este e-mail cadastrado!'
        }).status(400);
    }

    await User.create(req.body)
        .then(() => {
            return res.json({
                error: false,
                message: "Usuário Cadastrado com sucesso"
            })
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro: Usuário não cadastrado"
            });
        });
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET_KEY);
}

module.exports = {
    signIn,
    signUp
}