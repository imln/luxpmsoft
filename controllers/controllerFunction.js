const db = require('../config/mysql');
const oddNums = db.oddNums;

exports.getOddNumbers = async (req, res) => {

    var spawn = require("child_process").spawn;
    var process = spawn('python',["./python/oddNumbers.py"]);
    process.stdout.on('data', function(data) {
        var dataToInsert = JSON.parse(data.toString());
        const result = [];
        dataToInsert['oddNumList'].forEach(element => {
            const oddNum = oddNums.create({
                value: element
            });
            result.push(element);

        });

        return res.status(200).json(
            {result:result}
        );
    })

}