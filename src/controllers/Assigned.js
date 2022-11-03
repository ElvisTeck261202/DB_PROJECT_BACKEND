import {connect} from '../database';


export const getAssigns = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM ASSIGNED');
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const getAssign = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM ASSIGNED WHERE ID_ROOM = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const createAssign = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('INSERT INTO ASSIgNED (ID_ROOM, ID_CLASS) VALUES (?, ?)',[
        req.body.id_r,
        req.body.id_c
        ]);
        res.json ({
            id: rows.insertId, ...req.body
        })
    }
    catch(e){
        res.json(e);
    }
}

export const updateAssign = async (req, res) => {
    const connection = await connect();
    try{
        const [results] = await connection.query('UPDATE ASSIGNED SET ? WHERE ID_ROOM = ?', [
            req.body, req.params.id]);
            res.sendStatus(204)
    }
    catch(e){
        res.json(e);
    }
}

export const DeleteAssign = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('DELETE FROM ASSIGNED WHERE ID_ROOM = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}