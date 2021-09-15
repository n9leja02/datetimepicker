import React, { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'

export default function App() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
  }

  return (
    <View style={styles.container}>
      {show && Platform.OS === 'ios' && (
        <DateTimePicker
          style={{ width: 320 }}
          mode={'date'}
          display="inline"
          value={date}
          onChange={onChange}
        />
      )}
      {show && Platform.OS === 'android' && (
        <DateTimePicker          
          mode={'date'}
          display="default"
          value={date}
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
