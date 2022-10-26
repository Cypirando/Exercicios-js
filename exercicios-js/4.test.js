/**
 * A variavel arrayOrdenado deverá conter um novo array com os números ordenados de forma ascendente
 * Obs: Nenhum código original deve ser alterado
 */
const arrayInicial = [
  1, 5, 7, 3, 1, 7, 8, 89, 4, 2, 123, 1, 6, 8, 42, 215, 1, 13, 6, 8, 45, 213,
  13, 1, 7, 8, 23, 3, 134, 76,
];

test("4", () => {
  let arrayOrdenado = [];
  // Lógica aqui....
  arrayOrdenado = ordena(arrayOrdenado);
  //   return a - b
  // })
  console.log(arrayOrdenado)
  expect(arrayOrdenado).toEqual(
    [
    1,
    1,
    1,
    1,
    1,
    2,
    3,
    3,
    4,
    5,
    6,
    6,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    13,
    13,
    23,
    42,
    45,
    76,
    89,
    123,
    134,
    213,
    215]
  );
});
function ordena(arrayOrdenado) {
  arrayOrdenado = arrayInicial.sort((a, b) => a - b);
  return arrayOrdenado;
}

