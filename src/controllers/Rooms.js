import {connect} from '../database';

export const getRooms = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM ROOMS');
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const getRoom = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM ROOMS WHERE ID_ROOM = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const createRoom = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('INSERT INTO ROOMS (ID_ROOM, LOCATION, SQUARE_METERS, TYPE_ROOM) VALUES (?, ?, ?, ?)',[
        req.body.id,
        req.body.loc,
        req.body.sq_met,
        req.body.type
        ]);
        res.json ({
            id: rows.insertId, ...req.body
        })
    }
    catch(e){
        res.json(e);
    }
}

export const updateRoom = async (req, res) => {
    const connection = await connect();
    try{
        const [results] = await connection.query('UPDATE ROOMS SET ? WHERE ID_ROOM = ?', [
            req.body, req.params.id]);
            res.sendStatus(204)
    }
    catch(e){
        res.json(e);
    }
}

export const DeleteRoom = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('DELETE FROM ROOMS WHERE ID_ROOM = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}