import React, { forwardRef, useEffect } from 'react';
import { View } from 'react-native';
import { Label, Input } from './styles';

const InputField = forwardRef(({ label, value, keyboardType, onChangeText, onSubmitEditing, blurOnSubmit }, ref) => {
  const inputRef = React.useRef(null);

  useEffect(() => {
    if (ref) {
      ref.current = {
        focus: () => {
          inputRef.current.focus();
        }
      };
    }
  }, [ref]);

  return (
    <View>
      <Label>{label}</Label>
      <Input
        keyboardType={keyboardType}
        value={value === 0 ? '' : String(value)}
        onChangeText={onChangeText}
        ref={inputRef}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={blurOnSubmit}
      />
    </View>
  );
});

export default InputField;
