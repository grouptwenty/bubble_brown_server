var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

// Task.insertOrder = function insertOrder(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "INSERT INTO `tb_order` ("
//             + "`order_code`,"
//             + "`order_date`,"
//             + "`order_service`,"
//             + "`table_code`,"
//             + "`customer_code`, "
//             + "`order_total_price` "
//             + ") VALUES ("
//             + " '" + data.order_code + "', "
//             + " '" + data.order_date + "', "
//             + " '" + data.order_service + "', "
//             + " '" + data.table_code + "', "
//             + " '" + data.customer_code + "', "
//             + " '" + data.order_total_price + "' "
//             + " ) "


//         console.log('checkLogin : ', str);

//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: false,
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: true,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

Task.getProductBy = function getProductBy(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_product "
            + " LEFT JOIN tb_product_type  ON tb_product.product_type_code = tb_product_type.product_type_code"

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

// Task.getOrderMaxCode = function getOrderMaxCode(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT  IFNULL(LPAD( SUBSTRING(max(order_code),3 ,7)+1,6, '0'),'000001') AS order_code_max FROM `tb_order` "


//         console.log('checkLogin565664646 : ', str);

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
//                     data: res[0],
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

// Task.getOrderByCode = function getOrderByCode(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT  * FROM `tb_order` "
//             + "WHERE order_code = '" + data.order_code + "'";

//         console.log('checkLogin565664646 : ', str);

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
//                     data: res[0],
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };



// Task.updateOrderByCode = function updateOrderByCode(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "UPDATE `tb_order` SET "
//             + "`order_code` = '" + data.order_code + "',"
//             + "`order_date` = '" + data.order_date + "',"
//             + "`order_service` = '" + data.order_service + "',"
//             + "`table_code` = '" + data.table_code + "',"
//             + "`customer_code` = '" + data.customer_code + "', "
//             + "`order_total_price` = '" + data.order_total_price + "' "
//             + "WHERE order_code = '" + data.order_code + "'";


//         // console.log('checkLogin : ', data);
//         console.log('checkLogin : ', str);

//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: false,
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: true,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };



// Task.getUserByCode = function getUserByCode(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT  * FROM tb_user WHERE user_code = '" + data.user_code + "'";//showdata editview

//         console.log('checkLogin : ', str);

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
//                     data: res[0],
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

// Task.getUserLoginBy = function getUserLoginBy(data) {
//     return new Promise(function (resolve, reject) { //user list
//         var str = "SELECT  * FROM tb_user WHERE  `user_username`= " + sql.escape(data.user_username) + ""
//             + " AND `user_password` =" + sql.escape(data.user_password) + "";

//         console.log('checkLogin : ', str);

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
// };




module.exports = Task;