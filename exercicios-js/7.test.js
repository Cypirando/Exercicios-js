/**
 * A variavel somaDosNumeros deverá conter a soma de todos os números do array
 * Obs: Nenhum código original deve ser alterado
 */
const arrayInicial = [
  1,
  2,
  "asdad",
  4,
  5,
  "asdad",
  6,
  7,
  8,
  "asdad",
  9,
  7,
  6,
  5,
  "asdad",
  4,
  3,
  2,
  1,
  2,
  "asdad",
  3,
  4,
  "asdad",
  5,
  "asdad",
  6,
  7,
  8,
];

test("7", () => {
  let somaDosNumeros;
  // Lógica aqui....
  somaDosNumeros = arrayInicial
  .filter((numero) => typeof numero !== "string")
  .reduce((acc, atual) => acc + atual )
  console.log(somaDosNumeros)
  expect(somaDosNumeros).toEqual(105);
});
