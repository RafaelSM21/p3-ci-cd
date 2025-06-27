"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calcularTaxaVitoria_1 = require("../src/calcularTaxaVitoria");
describe('calcularTaxaVitoria', () => {
    it('retorna 50 para 5 vitórias em 10 partidas', () => {
        expect((0, calcularTaxaVitoria_1.calcularTaxaVitoria)(5, 10)).toBe(50);
    });
    it('retorna 0 se partidas for 0', () => {
        expect((0, calcularTaxaVitoria_1.calcularTaxaVitoria)(5, 0)).toBe(0);
    });
    it('retorna 100 se todas forem vitórias', () => {
        expect((0, calcularTaxaVitoria_1.calcularTaxaVitoria)(10, 10)).toBe(100);
    });
});
