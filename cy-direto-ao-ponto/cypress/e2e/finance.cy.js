describe('Transações', () => {
    it('Cadastrar entrada de valor', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")

        cy.contains('Nova Transação').click()
    });
});