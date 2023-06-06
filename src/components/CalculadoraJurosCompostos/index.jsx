import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Container, Label, Input, Result,Value } from './styles';

function CalculadoraJurosCompostos() {
  const [valorInicial, setValorInicial] = useState(0);
  const [taxaJurosAnual, setTaxaJurosAnual] = useState(0);
  const [periodoAnos, setPeriodoAnos] = useState(0);
  const [aporteMensal, setAporteMensal] = useState(0);
  const [valorFinal, setValorFinal] = useState(0);

  const calcularJurosCompostos = () => {
    const taxaJurosMensal = Math.pow((1 + Number(taxaJurosAnual) / 100), (1 / 12)) - 1;
    const periodoMeses = Number(periodoAnos) * 12;

    let valorInvestido = Number(valorInicial);

    for (let i = 0; i < periodoMeses; i++) {
      valorInvestido += Number(aporteMensal);
      valorInvestido *= 1 + taxaJurosMensal;
    }

    setValorFinal(valorInvestido);
  };

  useEffect(() => {
    calcularJurosCompostos();
  }, [valorInicial, taxaJurosAnual, periodoAnos, aporteMensal]);

  const formatarValorFinal = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <Container>
      <View>
        <Label>Valor Inicial:</Label>
        <Input
          keyboardType="numeric"
          value={valorInicial === 0 ? '' : String(valorInicial)}
          onChangeText={(value) => setValorInicial(Number(value))}
        />
      </View>
      <View>
        <Label>Taxa de Juros Anual (%):</Label>
        <Input
          keyboardType="numeric"
          value={taxaJurosAnual === 0 ? '' : String(taxaJurosAnual)}
          onChangeText={(value) => setTaxaJurosAnual(Number(value))}
        />
      </View>
      <View>
        <Label>Período (Anos):</Label>
        <Input
          keyboardType="numeric"
          value={periodoAnos === 0 ? '' : String(periodoAnos)}
          onChangeText={(value) => setPeriodoAnos(Number(value))}
        />
      </View>
      <View>
        <Label>Aporte Mensal:</Label>
        <Input
          keyboardType="numeric"
          value={aporteMensal === 0 ? '' : String(aporteMensal)}
          onChangeText={(value) => setAporteMensal(Number(value))}
        />
      </View>
      <Result>
        <Label>Valor Final:</Label>
        <Value>{formatarValorFinal(valorFinal)}</Value>
      </Result>
    </Container>
  );
}

export default CalculadoraJurosCompostos;
