const net = require("net");

const PORT = 5000; // Porta que o servidor vai escutar

const server = net.createServer((socket) => {
  console.log("ESP32 conectado:", socket.remoteAddress, socket.remotePort);

  // Quando receber dados do ESP32
  socket.on("data", (data) => {
    console.log("Dados recebidos do ESP32:", data.toString());
    
    // Você pode processar os dados aqui
    // Exemplo: salvar em banco de dados, enviar via API, etc.

    // Opcional: responder para o ESP32
    socket.write("Dados recebidos com sucesso!");
  });

  socket.on("end", () => {
    console.log("ESP32 desconectado");
  });

  socket.on("error", (err) => {
    console.error("Erro no socket:", err.message);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor TCP rodando na porta ${PORT}`);
});
