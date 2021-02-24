import express from "express";

const app = express();

app.get('/', (request, response) => {
  return response.json({message: 'teste man'});
});

app.post('/', (request, response) => {
  return response.json({message: 'Inseriu essa miséria.'});
});

app.listen(3333, () => console.log("Server us running!"));
