export function notANumber(value) {
  return isNaN(value) || value == "";
}

export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

export const Tabela = {
  abaixo: "Você está com peso muito baixo...",
  normal: "Parabéns, seu peso está normal",
  sobrepeso: "Você está um pouco acima do peso",
  obesidade1: "Você está no primeiro nível de obesidade",
  obesidade2: "Você está no segundo nível de obesidade",
  obesidade3: "Você está no terceiro nível de obesidade",
};
