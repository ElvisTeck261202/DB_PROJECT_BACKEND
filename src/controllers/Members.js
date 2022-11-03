import {connect} from '../database';

export const getMembers = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM MEMBER');
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const getMember = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('SELECT * FROM MEMBER WHERE MEMBERSHIP_NUM = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const createMember = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] = await connection.query('INSERT INTO MEMBER (MEMBERSHIP_NUM, M_NAME, M_LNAME, ADDRESS, M_PHONE, BANK_INFO, PROFESSION) VALUES (?, ?, ?, ?, ?, ? , ?)',[
        req.body.num,
        req.body.name,
        req.body.lname,
        req.body.adress,
        req.body.phone,
        req.body.bank,
        req.body.profession
        ]);
        res.json ({
            id: rows.insertId, ...req.body
        })
    }
    catch(e){
        res.json(e);
    }
}

export const updateMember = async (req, res) => {
    const connection = await connect();
    try{
        console.log(req.params.id, req.body)
        const [results] = await connection.query('UPDATE MEMBER SET ? WHERE MEMBERSHIP_NUM = ?', [
            req.body, req.params.id]);
            console.log(results)
            res.sendStatus(204)
    }
    catch(e){
        res.json(e);
    }
}


export const Delete = async(req, res) =>{
    const connection = await connect();
    try{
        const [rows] = await connection.query('DELETE FROM MEMBER WHERE MEMBERSHIP_NUM = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}