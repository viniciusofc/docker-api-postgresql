require('dotenv').config();
import app from "./app";

const PORT_SERVER = process.env.PORT_SERVER || 3000;

app.listen(PORT_SERVER, () => console.log(`Servidor rodando na porta ${PORT_SERVER}.`))