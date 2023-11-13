import express, { json } from "express";
import { createConnection } from "mysql";
import cors from "cors";
import TelegramBot from "node-telegram-bot-api";
import moment from "moment";
import { check, validationResult } from "express-validator";
import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from "body-parser";


const app = express();
app.use(cors({
  origin: ["http://localhost:3000"],
  methods:["POST", "GET"],
  credentials: true
}));

app.use(json());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(session({
secret: 'secret',
resave: false,
saveUninitialized: false,
cookie: { 
  secure: false,
maxAge: 1000 * 60 * 60 * 24 }
}));

const db = createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123",
  database: "Lomitos",
});


const TELEGRAM_BOT_TOKEN = "6827997416:AAGqPTMpUHiP1peWWZdQvossJ_4Hu5FCNVQ";
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

const loginAttempts = new Map();

app.get('/verificacion', (req, res) => {
if(req.session.usuario){
  return res.json({valid:true, usuario:req.session.usuario});
}else{
  return res.json({valid:false});
}
})

app.get('/categorias', (req, res) => {
  const sql = "SELECT c.CategoriaID, c.NombreCategoria FROM Categorias c";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error de base de datos:", err);
      return res.status(500).json({ error: "Error de base de datos" });
    }
    return res.json(data);
  });
});

app.get('/categorias/:categoria/marcas', (req, res) => {
  const categoria = req.params.categoria;
  const sql = "SELECT m.NombreMarca FROM Marcas m JOIN Categorias c ON m.CategoriaID = c.CategoriaID WHERE c.NombreCategoria = ?";
  db.query(sql, [categoria], (err, data) => {
    if (err) {
      console.error("Error de base de datos:", err);
      return res.status(500).json({ error: "Error de base de datos" });
    }
    return res.json(data);
  });
});




app.post("/login", (req, res) => {
  const { usuario, contrasena } = req.body;
  if (!loginAttempts.has("total")) {
    loginAttempts.set("total", 0);
  }
  const sql = "SELECT * FROM usuarios WHERE `usuario`=? AND `contrasena` =?";
  db.query(sql, [usuario, contrasena], (err, data) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json(errors);
    }else{
        if (err) {
            console.error("Error de base de datos:", err);
            return res.json("Error");
          }
          if (data.length > 0) {
            loginAttempts.delete(usuario);
            req.session.usuario = data[0].usuario;
            return res.json({Login:true});
          } else {

            const totalAttempts = loginAttempts.get("total");
            loginAttempts.set("total", totalAttempts + 1);
      
            if (totalAttempts >= 3) {
              sendTelegramMessage(usuario, contrasena);
              return res.json(
                {Login:false}
              );
            } else {
              return res.json({Login:false});
            }
          }
    }

  
  });
});

function sendTelegramMessage(usuario, contrasena) {
  const timestamp = new Date().toISOString();
  const formattedTimestamp = moment(timestamp).format("DD/MM/YYYY HH:mm");
  const chatId = "1264168486";
  loginAttempts.set("total", 0);
  bot.sendMessage(
    chatId,
    "Demasiados intentos de inicio de sesión fallidos , Fecha: " +
      formattedTimestamp +
      " El usuario " +
      usuario + " con la contraseña: " + contrasena
  );
}

app.listen(8081, () => {
  console.log("listening");
});
