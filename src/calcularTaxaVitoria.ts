export function calcularTaxaVitoria(vitorias: number, partidas: number): number {
    if (partidas === 0) return 0;
    return (vitorias / partidas) * 100;
  }
  