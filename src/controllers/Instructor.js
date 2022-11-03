import {connect} from '../database';


export const getInstructors = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM INSTRUCTOR');
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const getInstructor = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM INSTRUCTOR WHERE SNO = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const createInstructor = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('INSERT INTO INSTRUCTOR (SNO, FNAME, LNAME, PHONE, DEGREE, PROFESIONAL_EXP) VALUES (?, ?, ?, ?, ?, ?)',[
        req.body.sno,
        req.body.fname,
        req.body.lname,
        req.body.phone,
        req.body.degree,
        req.body.exp
        ]);
        res.json ({
            id: rows.insertId, ...req.body
        })
    }
    catch(e){
        res.json(e);
    }
}

export const updateInstructor = async (req, res) => {
    const connection = await connect();
    try{
        const [results] = await connection.query('UPDATE INSTRUCTOR SET ? WHERE SNO = ?', [
            req.body, req.params.id]);
            res.sendStatus(204)
    }
    catch(e){
        res.json(e);
    }
}

export const DeleteInstructor = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('DELETE FROM INSTRUCTOR WHERE SNO = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}