import {connect} from '../database';

export const getDevices = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM DEVICES');
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const getDevice = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM DEVICES WHERE ID_DEVICE = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const createDevice = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('INSERT INTO DEVICES (ID_DEVICE, ID_ROOM, DESCRIPTION, CONSERVATION_STATUS) VALUES (?, ?, ?, ?)',[
        req.body.id_c,
        req.body.id_r,
        req.body.desc,
        req.body.conservation
        ]);
        res.json ({
            id: rows.insertId, ...req.body
        })
    }
    catch(e){
        res.json(e);
    }
}

export const updateDevice = async (req, res) => {
    const connection = await connect();
    try{
        const [results] = await connection.query('UPDATE DEVICES SET ? WHERE ID_DEVICE = ?', [
            req.body, req.params.id]);
            res.sendStatus(204)
    }
    catch(e){
        res.json(e);
    }
}

export const DeleteDevice = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('DELETE FROM DEVICES WHERE ID_DEVICE = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}