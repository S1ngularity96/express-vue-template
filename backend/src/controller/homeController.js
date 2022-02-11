
const api = require('../helpers/apiResponse')

function getHome(req,res){
    api.successResponse(res, "Boilerplate for ExpressJS+Vue+Vuetify")
}

module.exports = {
    getHome
}