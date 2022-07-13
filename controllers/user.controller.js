
import { userServiceRegister, userServiceGetAll, userServiceLogin } from "../services/user.service.js";

class UserController {

    // POST /user/register {"email": "example@aol.com", "pwd": "defaultlol"}
    async register(req, res, next) {
        if (!req.body.email || !req.body.pwd) {
            res.status(400);
            return res.json({ message: "Incomplete input fields, please check again" });
        }

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await userServiceRegister(req.body.email, req.body.pwd);
            result.message = "New user registration successful";
            result.status = 200;
            result.data = data;
        } catch (error) {
            result.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }

    }

    // POST /user/login {"email": "fifth-example@aol.com", "pwd": "defaultzzz"}
    async login(req, res, next) {
        if (!req.body.email || !req.body.pwd) {
            res.status(400);
            return res.json({ message: "Incomplete input fields, please check again" });
        }

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await userServiceLogin(req.body.email, req.body.pwd);
            result.message = "Login successful!";
            result.status = 200;
            result.data = data;
        } catch (error) {
            result.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }

    }

    //GET /user
    async retrieve(req, res, next) {
        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await userServiceGetAll();
            result.message = "Retrieval successful";
            result.status = 200;
            result.data = data;
        } catch (error) {
            result.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }

    }

}

export default UserController;