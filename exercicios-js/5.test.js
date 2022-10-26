/**
 * A variavel novoArray deverá conter um novo array com os valores de tipo número multiplicados por 5
 * Obs: Nenhum código original deve ser alterado
 */
const arrayInicial = [
  "134ad",
  5,
  7,
  "ad",
  1,
  "442",
  7,
  8,
  "hh45",
  4,
  2,
  123,
  1,
  6,
  8,
  42,
  215,
  "1ad4",
  13,
  6,
  8,
  45,
  213,
  13,
  1,
  "123d7",
  8,
  23,
  3,
  "ffas4",
  "76aas3",
];

test("5", () => {
  let novoArray = [];
  // Lógica aqui....
  novoArray = arrayInicial
  .filter((numero) => typeof numero !== "string")
  // duvida por que posso colocar assim > "  novoArray.map(numero => numero * 5)  " <
  .map(numero => numero * 5)
  console.log(novoArray)
  expect(novoArray).toEqual([
    25, 35, 5, 35, 40, 20, 10, 615, 5, 30, 40, 210, 1075, 65, 30, 40, 225, 1065,
    65, 5, 40, 115, 15,
  ]);
});
