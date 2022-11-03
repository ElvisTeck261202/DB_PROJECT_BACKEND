import { connect } from '../database'

export const Login = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] =  await connection.query('SELECT * FROM ADMIN WHERE A_USERNAME = ? and PASSSWORD = ?', [req.params.user, req.params.pass]);
        if(rows.length == 0){
            res.json({msg: 'Null'});
        } else{
            res.json({msg: 'Ok', usr: rows[0].user});
        }
    }
    catch(e){
        res.json(e);
    }
}