/**
 * A variavel posicaoEncontrada deverá conter qual a posição do valor "TECLADO"
 * Obs: Nenhum código original deve ser alterado
 */
const arrayInicial = [
  1,
  2,
  4,
  5,
  6,
  7,
  8,
  9,
  7,
  6,
  "TECLADO",
  5,
  4,
  3,
  2,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
];

test("6", () => {
  let posicaoEncontrada;
  // Lógica aqui....
  posicaoEncontrada = arrayInicial.lastIndexOf("TECLADO")
  console.log(posicaoEncontrada)
  expect(posicaoEncontrada).toEqual(10);
});
