import {connect} from '../database';


export const getAttends = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM ATTEND');
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const getAttend = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM ATTEND WHERE ID_CLASS = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const createAttend = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('INSERT INTO ATTEND (ID_CLASS, MEMBERSHIP_NUM) VALUES (?, ?)',[
        req.body.id,
        req.body.num
        ]);
        res.json ({
            id: rows.insertId, ...req.body
        })
    }
    catch(e){
        res.json(e);
    }
}

export const updateAttend = async (req, res) => {
    const connection = await connect();
    try{
        const [results] = await connection.query('UPDATE ATTEND SET ? WHERE ID_CLASS = ?', [
            req.body, req.params.id]);
            res.sendStatus(204)
    }
    catch(e){
        res.json(e);
    }
}

export const DeleteAttend = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('DELETE FROM ATTEND WHERE ID_CLASS = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}