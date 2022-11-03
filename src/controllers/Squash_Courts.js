import {connect} from '../database';


export const getCourts = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM SQUASH_COURTS');
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const getCourt = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM SQUASH_COURTS WHERE ID_SQUASH = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const createCourt = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('INSERT INTO SQUASH_COURTS (ID_SQUASH, LOCATION, S_CONDITION) VALUES (?, ?, ?)',[
        req.body.id,
        req.body.location,
        req.body.condition
        ]);
        res.json ({
            id: rows.insertId, ...req.body
        })
    }
    catch(e){
        res.json(e);
    }
}

export const updateCourt = async (req, res) => {
    const connection = await connect();
    try{
        const [results] = await connection.query('UPDATE SQUASH_COURTS SET ? WHERE ID_SQUASH = ?', [
            req.body, req.params.id]);
            res.sendStatus(204)
    }
    catch(e){
        res.json(e);
    }
}

export const DeleteCourt = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('DELETE FROM SQUASH_COURTS WHERE ID_SQUASH = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}