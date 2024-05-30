import userRepo from "../repo/user-repo";
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const register = async (user: any) => {
    user.hashedPassword = crypto.createHash('md5').update(user.password).digest('hex');
    const result = await userRepo.register(user);
    if (result.affectedRows > 0) {
        const token = jwt.sign({
            username: user.username,
            email: user.email,
            isAdmin: false
        }, 'PRIVATE');
        return { succes: true, token }
    } else {
        return { succes: false, result }
    }
}

const login = async (user: any) => {
    user.hashedPassword = crypto.createHash('md5').update(user.password).digest('hex');
    const result = await userRepo.login(user);

    if (result && result.length > 0) {
        const token = jwt.sign({
            username: user.username,
            email: user.email,
            isAdmin: result[0].is_admin == 1
        }, 'PRIVATE');
        return { succes: true, token };
    } else {
        return { succes: false, result };
    }
}


export default { register, login }