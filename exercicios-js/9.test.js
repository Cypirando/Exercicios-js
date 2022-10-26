/**
 * - A variavel novoArray deverá conter a um novo array com os objetos ordenados pelo campo 
 * valor de forna descendente e com o valor transformado para um número inteiro
 * EX: se depois de ordenado o valor do objeto for:
 *  {
      id: 4,
      valor: 34.12313,
    } 
    ele deverá ser transformado em:
    {
      id: 4,
      valor: 34,
    }
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

test("9", () => {
  let novoArray;
  // Lógica aqui....
  novoArray = arrayInicial.sort((a,b)=> b.valor - a.valor)
  .map(objeto => {
    return {... objeto, valor: Math.floor(objeto.valor)}})
  console.log(novoArray)
  expect(novoArray).toEqual([
    {
      id: 4,
      valor: 34,
    },
    {
      id: 10,
      valor: 33,
    },
    {
      id: 0,
      valor: 28,
    },
    {
      id: 11,
      valor: 27,
    },
    {
      id: 15,
      valor: 27,
    },
    {
      id: 14,
      valor: 17,
    },
    {
      id: 6,
      valor: 17,
    },
    {
      id: 1,
      valor: 16,
    },
    {
      id: 12,
      valor: 15,
    },
    {
      id: 2,
      valor: 15,
    },
    {
      id: 13,
      valor: 13,
    },
    {
      id: 19,
      valor: 12,
    },
    {
      id: 3,
      valor: 12,
    },
    {
      id: 9,
      valor: 12,
    },
    {
      id: 17,
      valor: 7,
    },
    {
      id: 8,
      valor: 3,
    },
    {
      id: 18,
      valor: 2,
    },
    {
      id: 5,
      valor: 2,
    },
    {
      id: 16,
      valor: 1,
    },
    {
      id: 7,
      valor: 1,
    },
  ]);
});
