
const navigationController ={
    getHome : (req, res , next) => {
        res.render('index')
    },
    getPuzle2 : (req, res , next) => {
        res.render('../views/PUZLE2.ejs')
    },
    getPuzle3 : (req, res , next) => {
        res.render('../views/PUZLE3.ejs')
    },
    getPuzle4 : (req, res , next) => {
        res.render('../views/PUZLE4.ejs')
    },
    getPuzle5 : (req, res , next) => {
        res.render('../views/PUZLE5.ejs')
    },
    getPuzle6 : (req, res , next) => {
        res.render('../views/PUZLE6.ejs')
     },
    getRegisterForm : (req, res , next) => {
        res.render('../views/registerForm.ejs')
    },
    getLoginForm : (req, res , next) => {
        res.render('../views/loginForm.ejs')
    },
    getTips : (req, res , next) => {
        res.render('../views/tips.ejs')
    },
    getConozcanos : (req, res , next) => {
        res.render('../views/conozcanos.ejs')
    }

}

module.exports =navigationController