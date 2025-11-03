const User = require("../../models/user");


const userRegisterCtrl = async (req, res) => {
    try {
        const {firstName , lastName , email, password} = req.body;
        if(!firstName || !lastName || !email || !password) throw new Error("Imp info is missing");
        const existingUser = await User.findOne({email});
        if(existingUser) return sendResponse(res, 200, {}, "Please login");
        const userId = 'auth|' + uuid();
        const user = await User.create({email,userId,firstName,lastName});
        return sendResponse(res, 200, {}, 'Successfully created user');
    } catch (err) {
        err.scope = 'userRegisterCtrl'
        handleAppError({ err });
        return sendResponse(res, 400, {}, 'Something went wrong');
    }
};

module.exports={
    userRegisterCtrl
};