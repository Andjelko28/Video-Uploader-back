import dbConnection from "../common/db-connection";

const register = async (user: any) => {
    try {
        const result = await dbConnection.query(`insert into users(username, email, hashed_password, is_admin) values(?, ?, ?, 0)`,
            [user.username, user.email, user.hashed_password]);
        return result;
    } catch (e: any) {
        return { succes: false, msg: e.message }
    }
}

const login = async (user: any) => {
    try {
        const result = await dbConnection.query(`select * from user where username = ?, email = ? and hashed_password = ?`,
            [user.username, user.email, user.hashed_password])
        return result;
    } catch (e: any) {
        return { succes: false, msg: e.message }
    }
}

export default { register, login }