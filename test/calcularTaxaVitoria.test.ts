import { calcularTaxaVitoria } from '../src/calcularTaxaVitoria';

describe('calcularTaxaVitoria', () => {
  it('retorna 50 para 5 vitórias em 10 partidas', () => {
    expect(calcularTaxaVitoria(5, 10)).toBe(50);
  });

  it('retorna 0 se partidas for 0', () => {
    expect(calcularTaxaVitoria(5, 0)).toBe(0);
  });

  it('retorna 100 se todas forem vitórias', () => {
    expect(calcularTaxaVitoria(10, 10)).toBe(100);
  });
});
