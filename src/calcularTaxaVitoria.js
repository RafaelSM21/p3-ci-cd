"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularTaxaVitoria = calcularTaxaVitoria;
function calcularTaxaVitoria(vitorias, partidas) {
    if (partidas === 0)
        return 0;
    return (vitorias / partidas) * 100;
}
