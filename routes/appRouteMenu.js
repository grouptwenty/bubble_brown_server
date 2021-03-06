var MenuController = require('../controllers/MenuController');

module.exports = function (app) {

    app.post('/menu/getMenuBy', function (req, res) {
        console.log('/menu/getMenuBy', req.body)
        MenuController.getMenuBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/menu/getMenuByCode', function (req, res) {
        console.log('/menu/getMenuByCode', req.body)
        MenuController.getMenuByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/menu/getMenuByMenuCode', function (req, res) {
        console.log('/menu/getMenuByMenuCode', req.body)
        MenuController.getMenuByMenuCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

//     app.post('/menu/getMenuLoginBy', function (req, res) {
//         console.log('/menu/getMenuLoginBy', req.body)
//         menuController.getMenuLoginBy(req.body, function (err, task) {

//             if (err) {
//                 res.send(err);
//             }
//             // console.log('res', task);
//             res.send(task);
//         });
//     })

    app.post('/menu/getMenuMaxCode', function (req, res) {
        console.log('/menu/getMenuMaxCode', req.body)
        MenuController.getMenuMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/menu/insertMenu', function (req, res) {
        console.log('/menu/insertMenu', req.body)
        MenuController.insertMenu(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/menu/updateMenuByCode', function (req, res) {
        console.log('/menu/updateMenuByCode', req.body)
        MenuController.updateMenuByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/menu/deleteMenuByCode', function (req, res) {
        console.log('/menu/deleteMenuByCode', req.body)
        MenuController.deleteMenuByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/menu/getMenuByType', function (req, res) {
        console.log('/menu/getMenuByType', req.body)
        MenuController.getMenuByType(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

//     app.post('/menu/getMenuByCode', function (req, res) {
//         console.log('/menu/getMenuByCode', req.body)
//         menuController.getMenuByCode(req.body, function (err, task) {

//             if (err) {
//                 res.send(err);
//             }
//             // console.log('res', task);
//             res.send(task);
//         });
//     })
}