import {connect} from '../database';


export const getReservations = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM RESERVATION');
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const getReservation = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM RESERVATION WHERE RESERVATION_ID = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const createReservation = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('INSERT INTO RESERVATION (RESERVATION_ID, ID_SQUASH, MEMBERSHIP_NUM, R_DATE, R_TIME) VALUES (?, ?, ?, ?, ?)',[
        req.body.id_r,
        req.body.id_s,
        req.body.num,
        req.body.date,
        req.body.time
        ]);
        res.json ({
            id: rows.insertId, ...req.body
        })
    }
    catch(e){
        res.json(e);
    }
}

export const updateReservation = async (req, res) => {
    const connection = await connect();
    try{
        const [results] = await connection.query('UPDATE RESERVATION SET ? WHERE RESERVATION_ID = ?', [
            req.body, req.params.id]);
            res.sendStatus(204)
    }
    catch(e){
        res.json(e);
    }
}

export const DeleteReservation = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('DELETE FROM RESERVATION WHERE RESERVATION_ID = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}