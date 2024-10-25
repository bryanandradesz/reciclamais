require('dotenv').config();

const mysql = require('mysql2/promise');  // Use mysql2/promise
const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.SENHADB,
  database: process.env.NOMEDB
};

// Crie uma função para obter a conexão com o banco de dados
const getDbConnection = async () => {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
};


class LogsDAO {
  async gravar(acao, discord_author, discord_id, ip) {
    try {
      const connection = await getDbConnection();
      const res = await connection.execute(
        "INSERT INTO logs(acao,discord_author, discord_id, ip) VALUES(?, ?, ?, ?)",
        [acao, discord_author, discord_id, ip]
      );
      connection.end();
     console.log('log salvo')
    } catch (erro) {
      console.log(erro);
    }
  }

}
module.exports = LogsDAO;
