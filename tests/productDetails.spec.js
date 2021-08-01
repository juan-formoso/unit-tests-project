const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const test1 = productDetails('product1', 'product2');
    assert.deepStrictEqual(Array.isArray(test1), true);
    assert.deepStrictEqual(test1.length, 2);
    assert.deepStrictEqual(typeof test1[0] && typeof test1[1], 'object');
    assert.notDeepStrictEqual(test1[0], test1[1]);
    assert.deepStrictEqual(test1[0].details.productId.indexOf('123'), test1[0].details.productId.length-3);
  });
});
