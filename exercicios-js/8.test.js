/**
 * - A variavel somaDosNumeros deverá conter a soma inteira de todos os campos "valor" do objeto
 * EX: se a soma for 23.123333, deverá retornar 23 apenas
 * Obs: Nenhum código original deve ser alterado
 */
const arrayInicial = [
  {
    id: 0,
    valor: 28.58971954866614,
  },
  {
    id: 1,
    valor: 16.377317328263857,
  },
  {
    id: 2,
    valor: 15.560120301970866,
  },
  {
    id: 3,
    valor: 12.689482466329505,
  },
  {
    id: 4,
    valor: 34.360374981465995,
  },
  {
    id: 5,
    valor: 2.048485423584676,
  },
  {
    id: 6,
    valor: 17.345512992959815,
  },
  {
    id: 7,
    valor: 1.4467402428800025,
  },
  {
    id: 8,
    valor: 3.21039413650805,
  },
  {
    id: 9,
    valor: 12.191731106676809,
  },
  {
    id: 10,
    valor: 33.00629395414262,
  },
  {
    id: 11,
    valor: 27.25014305422561,
  },
  {
    id: 12,
    valor: 15.76499510078115,
  },
  {
    id: 13,
    valor: 13.233759965635326,
  },
  {
    id: 14,
    valor: 17.927905375428193,
  },
  {
    id: 15,
    valor: 27.171304447857008,
  },
  {
    id: 16,
    valor: 1.8731824428714727,
  },
  {
    id: 17,
    valor: 7.209561024502769,
  },
  {
    id: 18,
    valor: 2.7479086128818686,
  },
  {
    id: 19,
    valor: 12.768938206915683,
  },
];

test("8", () => {
  let somaDosNumeros;
  // Lógica aqui....
  somaDosNumeros = arrayInicial.reduce((acc, atual)=>  acc + atual.valor, 0)
  somaDosNumeros = parseInt(somaDosNumeros)

  expect(somaDosNumeros).toEqual(302);
});
