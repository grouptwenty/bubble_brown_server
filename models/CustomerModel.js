var sql = require('./BaseModel');
// const Config = require('../globals/Config');
const timeController = require('../controllers/TimeController');


// const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getCustomerBy = function getCustomerBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_customer"
            + " WHERE deleted = 0 AND about_code = '" + data.about_code + "'";

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
}

Task.getCustomerMaxCode = function getCustomerMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  LPAD( SUBSTRING(IFNULL( max(customer_code),1),4,5)+1,3,'0') AS customer_code_max FROM `tb_customer` "; //insert customer_code

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

Task.getCustomerByCode = function getCustomerByCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT * FROM `tb_customer` WHERE customer_code='" + data.customer_code + "'";

        console.log('customer_code : ', data);

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


Task.getCustomerByEmail = function getCustomerByEmail(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT * FROM `tb_customer` WHERE customer_email ='" + data.email + "'";

        console.log('str : ', str);

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

Task.deleteCustomerByCode = function deleteCustomerByCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "UPDATE `tb_customer` SET"
            + "`deleted`= '1'"
            + "WHERE tb_customer.customer_code = '" + data.customer_code + "'";

        console.log('str : ', str);

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

Task.ChangName = function ChangName(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "UPDATE `tb_customer` SET"
            + "`customer_name` = '" + data.customer_name + "'"
            + " WHERE tb_customer.customer_id = '" + data.customer_id + "'";

        console.log('str : ', str);

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

Task.ChangeEmail = function ChangeEmail(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "UPDATE `tb_customer` SET"
            + "`customer_email` = '" + data.customer_email + "'"
            + " WHERE tb_customer.customer_id = '" + data.customer_id + "'";

        console.log('str : ', str);

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

Task.ChangeTel = function ChangeTel(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "UPDATE `tb_customer` SET"
            + "`customer_tel` = '" + data.customer_tel + "'"
            + " WHERE tb_customer.customer_id = '" + data.customer_id + "'";

        console.log('str : ', str);

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





Task.insertCustomer = function insertCustomer(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_customer` ("
            + "`customer_code`,"
            + "`about_code`,"
            + "`customer_name`,"
            + "`customer_id`,"
            + "`customer_email`,"
            + "`customer_tel`,"
            + "`customer_image` "
            // + "`addby` "
            + ") VALUES ("
            // + " '" + data.order_code + "', "
            + " '" + data.customer_code + "', "
            + " '" + data.about_code + "', "
            + " '" + data.customer_name + "', "
            + " '" + data.customer_id + "', "
            + " '" + data.customer_email + "', "
            + " '" + data.customer_tel + "', "
            + " '" + data.customer_image + "' "
            // + " '" + data[0].addby + "' "
            + " ) "

        // console.log(str);

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
Task.getCustomerById = function getCustomerById(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT * FROM `tb_customer` WHERE customer_id ='" + data.userId + "'";

        console.log('str : ', str);

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
Task.getCustomerByCusId = function getCustomerByCusId(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT * FROM `tb_customer` WHERE customer_id ='" + data.customer_id + "'";

        console.log('str : ', str);

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

// Task.getJournalByCol = function getJournalByCol(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT * FROM tb_journal WHERE deleted = 0 ";
//         for (var key in data) {
//             str += " AND " + key + " = '" + data[key] + "' ";
//         }
//         sql.query(str, function (err, res) {
//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// }

// Task.insertJournal = function insertJournal(data){
//     return new Promise(function (resolve,reject) {
//         var str_sql = " INSERT INTO tb_journal ";
//         var str_col = " ( ";
//         var str_val = " value ( ";
//         var i = 0;
//         for (var key in data) {
//             i++;
//             str_col += " " + key + " ";
//             str_val += " '" + data[key] + "' ";
//             if (i != Object.keys(data).length) {
//                 str_col += " , ";
//                 str_val += " , ";
//             }
//         }
//         str_col += " ) ";
//         str_val += " ) ";
//         str_sql = str_sql + " " + str_col + " " + str_val;

//         console.log('insert : ', str_sql);
//         sql.query(str_sql, function (err, res) {
//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// }

Task.updateCustomerByCode = function updateCustomerByCode(data) {

    return new Promise(function (resolve, reject) {
        console.log('update : ', data);
        var str = "UPDATE `tb_customer` SET "
            + "`customer_code` = '" + data.customer_code + "',"
            + "`about_code` = '" + data.about_code + "',"
            + "`customer_name`= '" + data.customer_name + "',"
            + "`customer_id`= '" + data.customer_id + "',"
        if (data.customer_email != '' && data.customer_email != undefined) {
            str += "`customer_email`= '" + data.customer_email + "',"
        }
        if (data.customer_tel != '' && data.customer_tel != undefined) {
            str += "`customer_tel`= '" + data.customer_tel + "',"
        }
        + "`customer_image` = '" + data.customer_image + "'"
            + " WHERE customer_code = '" + data.customer_code + "'";



        console.log('str111111111 : ', str);

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