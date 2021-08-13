const { expect } = require('chai');
const BotServices = require('../../services/BotServices');

describe('Validações de erros da API', () => {
    describe('Quando a API retorna um erro', () => {

        const takeBlip = 'userNotExists';
        const quantity =  150;

      it('Retorna um Objeto de Error, quando usuario não existe no github', async () => {
        const response =  await BotServices.getLanguagesAPI(takeBlip, quantity);
  
        expect(response).to.be.a('object');
      });
    });
});

describe('Validações sucesso da API', () => {

    const takeBlip = 'takenet';
    const quantity =  150;

    it('Retorna um objeto em caso de sucesso', async () => {
        const response =  await BotServices.getLanguagesAPI(takeBlip, quantity);

        expect(response).to.be.a('object');
    });

    it('Objeto possui as keys 0, 1, 2, 3, 4,', async () => {

        const response =  await BotServices.getLanguagesAPI(takeBlip, quantity);

        expect(response).to.have.all.keys('0', '1', '2', '3', '4')
    });

});

