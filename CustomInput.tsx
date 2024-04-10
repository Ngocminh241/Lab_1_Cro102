import React, { useState } from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';

const CustomTextInput = () => {
  const [inputValue, setInputValue] = useState('');

  // Hàm xác định hình ảnh dựa trên giá trị đầu vào
  const getImageForInput = () => {
    if (inputValue === '') {
      return require('./icon/back.png');
    } else if (inputValue.length < 5) {
      return require('./icon/warning.png');
    } else {
      return require('./icon/warning.png');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter text..."
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <Image
        style={styles.image}
        source={getImageForInput()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

export default CustomTextInput;
