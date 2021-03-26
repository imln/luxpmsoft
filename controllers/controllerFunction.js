exports.getOddNumbers = async (req, res) => {

    var spawn = require("child_process").spawn;
    var process = spawn('python',["./python/oddNumbers.py"]);
    process.stdout.on('data', function(data) {
        res.send(data.toString());
    })

    //res.send('<h2>Hello this is LNG from route folder server new!!</h2>');
}