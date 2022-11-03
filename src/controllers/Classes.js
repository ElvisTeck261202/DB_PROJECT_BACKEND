import {connect} from '../database';


export const getClasses = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM CLASSES');
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const getClass = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM CLASSES WHERE ID_CLASS = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const createClass = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('INSERT INTO CLASSES (ID_CLASS, SNO, DESCRIPTION) VALUES (?, ?, ?)',[
        req.body.id_c,
        req.body.sno,
        req.body.desc
        ]);
        res.json ({
            id: rows.insertId, ...req.body
        })
    }
    catch(e){
        res.json(e);
    }
}

export const updateClass = async (req, res) => {
    const connection = await connect();
    try{
        const [results] = await connection.query('UPDATE CLASSES SET ? WHERE ID_CLASS = ?', [
            req.body, req.params.id]);
            res.sendStatus(204)
    }
    catch(e){
        res.json(e);
    }
}

export const DeleteClass = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('DELETE FROM CLASSES WHERE ID_CLASS = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}