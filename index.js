const mysql= require ("mysql2/promise");


async function main(){

    try{
        let connection=await mysql.createConnection(
            {
                    host:"localhost",
                    user:"root",
                    password:"620340680",
                    database:"escuela"
            }
        );
        console.log("conecxion correcta");


    //     let sql="	INSERT INTO teachers (`teacher_id`, `first_namel`, `last_name`)" +
    //         " VALUES" + "('6', 'pepe', 'fanegas' ) ," + 
    //          "('7', 'francisca', 'antoranz' )," +
             
    //          "('8', 'josefa', 'josefina' ),"+
    //          "('9', 'monica', 'carrillo' ),"+
    //          "('10', 'conchita', 'velasco' )";

    // let [result]= await connection.query(sql);
    // console.log("dato insertado");
    // console.log(result);

        // let sql=" INSERT INTO subjects (`subjets_id` , `title`) " + 
        //         "VALUES" + "('6' , 'musica')," +
        //           "('7' , 'baile')," +  
        //          "('8' , 'e.fisica')," +  
        //           "('9' , 'judo')," +  
        //           "('10' , 'fisica')";

        // let [result]= await connection.query(sql);
        //          console.log("dato insertado");
        //          console.log(result);
                
        // let sql = " INSERT INTO groups (`groups_id` , `name`) " +
        //   "VALUES" +" ('6', 'sexto'), " +
        //   "('7', 'septimo'), " +
        //   "('8', 'octavo'), " +
        //   "('9', 'noveno'), " +
        //   "('10', 'decimo')";

        // let [result]= await connection.query(sql);
        //          console.log("dato insertado");
        //          console.log(result);


        // let sql= " INSERT INTO subjects_teacher (`subject_id` , `teacher_id` , `group_id`)" + 
        //         "VALUES" + " ('6' , '6' , '6' )," +
        //         " ('7' , '7' , '7' )," +
        //         " ('8' , '8' , '8' )," +
        //         " ('9' , '9' , '9' )," +
        //         " ('10' , '10' , '10' )" ;

        //         let [result]= await connection.query(sql);
        //          console.log("dato insertado");
        //          console.log(result);

        // let sql = " INSERT INTO direccion (`numero` , `calle` , `ciudad`)" + 
        //         "VALUES" + "('6' , 'cilla' , ' yanguas') , " +
        //         "('7' , 'barranco' , 'carbonero') , " +
        //         "('8' , 'mina' , 'roda') , " +
        //         "('9' , 'naves' , 'cantimpalos') , " +
        //         "('10' , ' azul' , 'barcelona') ";

        //                  let [result]= await connection.query(sql);
        //          console.log("dato insertado");
        //          console.log(result);

        // let sql =  " INSERT INTO students (`student_id` , `firrst_name`, `last_name` , `group_id`)" + 
        //         "VALUES" + "('6' , 'pedro' , 'sanz' , '6'), " + 
        //         "('7' , 'gracia' , 'pujadas' , '7'), " +
        //         "('8' , 'sandra' , 'de andres' , '8'), " +
        //         "('9' , 'giancarlo' , 'benavides' , '9'), " +
        //         "('10' , 'guillermo' , 'torres' , '10') ";

        //                          let [result]= await connection.query(sql);
        //          console.log("dato insertado");
        //          console.log(result);

        // let sql =" INSERT INTO marks (`mark_id`, `date`, `mark`, `student_id`, `subject_id`)" +
        // "VALUES" + 
        // "('6', '2023/05/08', '6', '6', '6') , " +
        // "('7', '2024/04/06', '7', '7', '7') , " +
        // "('8', '2022/01/17', '8', '8', '8') , " +
        // "('9', '2023/09/12', '9', '9', '9') , " +
        // "('10', '2023/05/14', '10', '10', '10') ";
        //                          let [result]= await connection.query(sql);
        //          console.log("dato insertado");
        //          console.log(result);

        // let sql= " ALTER TABLE direccion ADD codigo_postal VARCHAR(20) NULL ;";

        // let [result]= await connection.query(sql);
        //           console.log("dato insertado");
        //           console.log(result);

        // let sql="ALTER TABLE direccion DROP COLUMN codigo_postal" ;

        //  let [result]= await connection.query(sql);
        //            console.log("dato insertado");
        //            console.log(result);


        // let sql= "DROP TABLE direccion; ";

        //  let [result]= await connection.query(sql);
        //            console.log("dato insertado");
        //            console.log(result);

        // let sql ="UPDATE marks SET `mark` = '0' WHERE (`mark_id`);"

        //  let [result]= await connection.query(sql);
        //            console.log("dato insertado");
        //            console.log(result);


        // let sql= " SELECT firrst_name , last_name FROM students ;";

        //  let [result]= await connection.query(sql);
        //            console.log("dato insertado");
        //            console.log(result);

        // let sql = " SELECT * FROM teachers ;";

        //  let [result]= await connection.query(sql);
        //            console.log("dato insertado");
        //            console.log(result);

        // let sql=" DELETE FROM marks WHERE date < DATE_SUB(NOW(), INTERVAL 10 YEAR);";
        //  let [result]= await connection.query(sql);
        //            console.log("dato insertado");
        //            console.log(result);

        let sql= " UPDATE marks SET mark=5 WHERE mark<5;";

         let [result]= await connection.query(sql);
                   console.log("dato insertado");
                   console.log(result);
        

    }

    catch(err){
        console.log(err)
        await connection.end();
    }

    

}

main();