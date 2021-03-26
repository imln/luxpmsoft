var controller = require("../controllers/controllerFunction");
module.exports = function(app){
    console.log("Entered routesJS")
    app.get('/getOddNum', controller.getOddNumbers);

}