const adminService = require("../auth/adminService");
exports.getAdminList = async (req, res) => {
    const admins = await adminService.listAdmins();
    console.log(admins);
    res.render("auth/views/adminList", { admins });
};
