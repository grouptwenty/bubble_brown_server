var BookingModel = require('../models/BookingModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getBookingBy = async function getBookingBy(data, result) {
    var booking = await BookingModel.getBookingBy(data);
    result(booking);
}

Task.getBookingByCode = async function getBookingByCode(data, result) {
    var booking = await BookingModel.getBookingByCode(data);
    result(booking);
}

Task.getBookingMaxCode = async function getBookingMaxCode(data, result) {
    var booking = await BookingModel.getBookingMaxCode(data);
    result(booking);
}

Task.insertBooking = async function insertBooking(data, result) {
    var booking = await BookingModel.insertBooking(data);
    result(booking);
}

Task.checkBook = async function checkBook(data, result) {
    var booking = await BookingModel.checkBook(data);
    result(booking);
}

Task.checkTable = async function checkTable(data, result) {
    var booking = await BookingModel.checkTable(data);
    result(booking);
}

Task.deleteBooking = async function deleteBooking(data, result) {
    var booking = await BookingModel.deleteBooking(data);
    result(booking);
}

Task.getBookingByCustomer = async function getBookingByCustomer(data, result) {
    var booking = await BookingModel.getBookingByCustomer(data);
    result(booking);
}

module.exports = Task;