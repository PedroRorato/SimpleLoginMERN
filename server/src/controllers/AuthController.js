const User = require('../models/User');
const bcrypt = require('bcrypt');


module.exports = {

    async signup(request, response, next) {
        
        const { name, email } = request.body;
        let { password } = request.body;
        
        const user = new User();

        const newUser = await User.create({ name, email, password: user.generateHash(password) });
        
        return response.json(newUser);
    }
};