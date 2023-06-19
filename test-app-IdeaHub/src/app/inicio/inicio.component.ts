import { Component } from '@angular/core';
import * as mysql from 'mysql2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor() { }
  
  connect() {
    
    let connection = mysql.createConnection({
      host: 'gateway01.us-east-1.prod.aws.tidbcloud.com',
      port: 4000,
      user: 'Ctp4ibJYDsXfrKw.root',
      password: 'DOvCEEQeWhI8sXr2',
      database: 'IDEAHUB',
      ssl: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true
      }
    });
    
    connection.query(
      'SELECT * FROM `USERS`',
      function(err: any, results: any, fields: any) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      }
    );

    //connection.close()
  }

}
