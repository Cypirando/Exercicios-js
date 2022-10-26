/**
 * A variavel novoArray deverá conter um novo array contento apenas números maiores que 5
 * Obs: Nenhum código original deve ser alterado
 */
const arrayInicial = [3.5, 5, 1.2, 1, 3, 992, 6, 3, 34, 5, 435, 1, 123, 3];

test("2", () => {
  let novoArray = [];
  // Lógica aqui....
  novoArray = arrayInicial.filter((maiores) => maiores >= 6
  )
  console.log(novoArray)
  expect(novoArray).toEqual([992, 6, 34, 435, 123]);
});
