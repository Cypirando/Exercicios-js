/**
 * A variavel arrayNumerosImpares deverá conter um novo array contento apenas números impares
 * A variavel arrayNumerosPares deverá conter um novo array contento apenas números pares
 * Obs: Nenhum código original deve ser alterado
 */
const arrayInicial = [
  1, 5, 7, 3, 1, 7, 8, 89, 4, 2, 123, 1, 6, 8, 42, 215, 1, 13, 6, 8, 45, 213,
  13, 1, 7, 8, 23, 3, 134, 76,
];

test("3", () => {
  let arrayNumerosImpares = [];
  let arrayNumerosPares = [];
  // Lógica aqui....
  // arrayInicial.filter(element => element %2 ? arrayNumerosImpares.push(arrayInicial) : arrayNumerosPares.push(arrayInicial) );
  arrayNumerosImpares = arrayInicial.filter((numero) => {
    return numero %2
  })
  console.log(arrayNumerosImpares)
  ///====
  arrayNumerosPares = arrayInicial.filter((numero) => {
    return numero %2 !== 1
  })
  console.log(arrayNumerosPares)

  expect(arrayNumerosImpares).toEqual([
    1, 5, 7, 3, 1, 7, 89, 123, 1, 215, 1, 13, 45, 213, 13, 1, 7, 23, 3,
  ]);
  expect(arrayNumerosPares).toEqual([8, 4, 2, 6, 8, 42, 6, 8, 8, 134, 76]);
});
