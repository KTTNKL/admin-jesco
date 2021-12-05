const adminService = require('./adminService');

exports.login =(req, res) =>{
    const wrongPassword = req.query['wrong-password'] !== undefined;
    res.render('login', {wrongPassword});
}
exports.logout = (req, res) => {
    req.logout();
    res.redirect('/login');
}
exports.addAdmin = (req, res) => {
    res.render('addAdmin');
};
exports.getAddAdmin = async (req, res) => {
    const {username, email, password} = req.body;
    const user = await adminService.addNewAdmin(username, email, password);
    res.redirect('/login');
};