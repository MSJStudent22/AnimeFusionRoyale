
class Controller{

     async fetchAllData (res){
         let db = await require("./database");

        db.query('SELECT * FROM college.student;',
            function (err, data, fields) {
                if (err) throw err;
                res.send(data);
            });
    }
    async fetchData (res, id){
        let db = await require("./database");

        db.query('SELECT * FROM college.student where student_id='+id+';',
            function (err, data, fields) {
                if (err) throw err;
                res.send(data);
            });

    }
}

module.exports  =  Controller;