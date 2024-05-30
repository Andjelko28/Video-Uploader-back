import dbConnection from "../common/db-connection";

const register = async (user: any) => {
    try {
        const result = await dbConnection.query(`insert into users(username, email, password_hash, is_admin) values(?, ?, ?, 0)`,
            [user.username, user.email, user.hashedPassword]);
        return result;
    } catch (e: any) {
        return { succes: false, msg: e.message }
    }
}

const login = async (user: any) => {
    try {
        const result = await dbConnection.query(`select * from user where username = ?, email = ? and password_hash = ?`,
            [user.username, user.email, user.hashedPassword])
        return result;
    } catch (e: any) {
        console.log(e);
        return { succes: false, msg: e.message }
    }
}

export default { register, login }