import React, { useState, useEffect, useRef } from 'react';
import { View, Keyboard } from 'react-native';
import { Container, Label, Input, Result, Value, LabelResult } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function CalculadoraJurosCompostos() {
  const initialRef = useRef(null);
  const jurosRef = useRef(null);
  const periodRef = useRef(null);
  const aportRef = useRef(null);

  useEffect(() => {
    initialRef.current.focus();
  }, []);

  const focusInput = (ref) => {
    if (ref === initialRef) {
      jurosRef.current.focus()
    }
    else if (ref === jurosRef) {
      periodRef.current.focus()
    }
    else if (ref === periodRef) {
      aportRef.current.focus()
    }
    else {
      initialRef.current.focus()
    }
  };

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
          ref={initialRef}
          onSubmitEditing={() => focusInput(initialRef)}
          blurOnSubmit={false}
        />
      </View>
      <View>
        <Label>Taxa de Juros Anual (%):</Label>
        <Input
          keyboardType="numeric"
          value={taxaJurosAnual === 0 ? '' : String(taxaJurosAnual)}
          onChangeText={(value) => setTaxaJurosAnual(Number(value))}
          ref={jurosRef}
          onSubmitEditing={() => focusInput(jurosRef)}
          blurOnSubmit={false}
        />
      </View>
      <View>
        <Label>Período (Anos):</Label>
        <Input
          keyboardType="numeric"
          value={periodoAnos === 0 ? '' : String(periodoAnos)}
          onChangeText={(value) => setPeriodoAnos(Number(value))}
          ref={periodRef}
          onSubmitEditing={() => focusInput(periodRef)}
          blurOnSubmit={false}
        />
      </View>
      <View>
        <Label>Aporte Mensal:</Label>
        <Input
          keyboardType="numeric"
          value={aporteMensal === 0 ? '' : String(aporteMensal)}
          onChangeText={(value) => setAporteMensal(Number(value))}
          ref={aportRef}
          onSubmitEditing={() => focusInput(aportRef)}
          blurOnSubmit={false}
        />
      </View>
      <Result>
        <LabelResult>Valor Final:</LabelResult>
        <Value>{formatarValorFinal(valorFinal)}</Value>
      </Result>
    </Container>
  );
}

export default CalculadoraJurosCompostos;
