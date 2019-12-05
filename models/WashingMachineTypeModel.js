var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');

const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};
Task.getWashingMachineTypeBy = function getWashingMachineTypeBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_washing_machine_type "
            + "ORDER BY tb_washing_machine_type.washing_machine_type_code ASC ";
        console.log('checkLogin : ', str);
        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.getWashingMachineTypeMaxCode = function getWashingMachineTypeMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  LPAD( SUBSTRING(max(washing_machine_type_code),3, 4)+1,2,'0') AS washing_machine_type_code_max FROM `tb_washing_machine_type` "; //insert usercode
        console.log('checkLogin : ', str);

        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res[0],
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.insertTypeBy = function insertTypeBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_washing_machine_type` ("
            + "`washing_machine_type_code`,"
            + "`washing_machine_type_name` "
            + ") VALUES ("
            + " '" + data.washing_machine_type_code + "', "
            + " '" + data.washing_machine_type_name + "' " 
            + " ) "

        // console.log('checkLogin : ', data);
        // console.log('checkLogin : ', str);

        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: false,
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: true,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.getTypeByCode = function getTypeByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  *  FROM tb_washing_machine_type "
            + "WHERE washing_machine_type_code = '" + data.washing_machine_type_code + "'";

        console.log('checkLogin : ', str);

        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res[0],
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.updateTypeBy = function updateTypeBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_washing_machine_type` SET "
            + "`washing_machine_type_code` = '" + data.washing_machine_type_code + "',"
            + "`washing_machine_type_name` = '" + data.washing_machine_type_name + "' "
            + "WHERE tb_washing_machine_type.washing_machine_type_code = '" + data.washing_machine_type_code + "'";


        // console.log('checkLogin : ', data);
        console.log('checkLogin : ', str);

        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: false,
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: true,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.deleteByCode = function deleteByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_washing_machine_type WHERE washing_machine_type_code = '" + data.washing_machine_type_code + "'";//showdata editview

        console.log('checkLogin : ', str);

        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: false,
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: true,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};
module.exports = Task;