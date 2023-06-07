import React, { useState, useEffect, useRef } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Keyboard } from 'react-native';
import InputField from '../InputField';
import ResultField from '../ResultField';
import { Container } from './styles';

const JurosCompostos = () => {
  const initialRef = useRef(null);
  const jurosRef = useRef(null);
  const periodRef = useRef(null);
  const aportRef = useRef(null);

  useEffect(() => {
    initialRef.current.focus();
  }, []);

  const focusInput = (ref) => {
    ref.current.focus();
  };

  const [valorInicial, setValorInicial] = useState(0);
  const [taxaJurosAnual, setTaxaJurosAnual] = useState(0);
  const [periodoAnos, setPeriodoAnos] = useState(0);
  const [aporteMensal, setAporteMensal] = useState(0);
  const [valorFinal, setValorFinal] = useState(0);

  const calcularJurosCompostos = () => {
    const taxaJurosMensal =
      Math.pow(1 + Number(taxaJurosAnual) / 100, 1 / 12) - 1;
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
    <KeyboardAwareScrollView>
      <Container>
        <InputField
          label="Valor Inicial:"
          value={valorInicial}
          keyboardType="numeric"
          onChangeText={(value) => setValorInicial(value)}
          ref={initialRef}
          onSubmitEditing={() => focusInput(jurosRef)}
          blurOnSubmit={false}
        />
        <InputField
          label="Taxa de Juros Anual (%):"
          value={taxaJurosAnual}
          keyboardType="numeric"
          onChangeText={(value) => setTaxaJurosAnual(value)}
          ref={jurosRef}
          onSubmitEditing={() => focusInput(periodRef)}
          blurOnSubmit={false}
        />
        <InputField
          label="Período (Anos):"
          value={periodoAnos}
          keyboardType="numeric"
          onChangeText={(value) => setPeriodoAnos(value)}
          ref={periodRef}
          onSubmitEditing={() => focusInput(aportRef)}
          blurOnSubmit={false}
        />
        <InputField
          label="Aporte Mensal:"
          value={aporteMensal}
          keyboardType="numeric"
          onChangeText={(value) => setAporteMensal(value)}
          ref={aportRef}
          onSubmitEditing={() => focusInput(initialRef)}
          blurOnSubmit={false}
        />
        <ResultField
          label="Valor Final:"
          value={formatarValorFinal(valorFinal)}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default JurosCompostos;
