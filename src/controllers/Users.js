import {connect} from '../database';


export const getUsers = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM ADMIN');
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const getUser = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM ADMIN WHERE ID_ADMIN = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const createUser = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('INSERT INTO ADMIN (ID_ADMIN, A_NAME, A_LNAME, A_USERNAME, PASSSWORD) VALUES (?, ?, ?, ?, ?)',[
        req.body.admin,
        req.body.name,
        req.body.lname,
        req.body.username,
        req.body.pass
        ]);
        res.json ({
            id: rows.insertId, ...req.body
        })
    }
    catch(e){
        res.json(e);
    }
}

export const updateUser = async (req, res) => {
    const connection = await connect();
    try{
        const [results] = await connection.query('UPDATE ADMIN SET ? WHERE ID_ADMIN = ?', [
            req.body, req.params.id]);
            res.sendStatus(204)
    }
    catch(e){
        res.json(e);
    }
}

export const DeleteUser = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('DELETE FROM ADMIN WHERE ID_ADMIN = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}