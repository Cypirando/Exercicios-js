/**
 * A variavel novoArray deverá retornar no console.log um novo array contento apenas o nome dos animais
 * Obs: Nenhum código original deve ser alterado
 */
const arrayInicial = [
  3.5,
  "Camelo",
  1.2,
  1,
  3,
  6,
  "Arara",
  3,
  34,
  5,
  "Cachorro",
  "Gato",
  435,
  123,
  1233,
  "Elefante",
];

test("1", () => {
  let novoArray = [];
  // Lógica aqui....

  separaTexto();
  console.log(novoArray)
  
  function separaTexto() {
    novoArray = arrayInicial.filter((palavra) => typeof palavra == "string");
  }

  expect(novoArray).toEqual([
    "Camelo",
    "Arara",
    "Cachorro",
    "Gato",
    "Elefante",
  ]);

  
});
