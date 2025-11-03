import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [age, setAge] = useState<string>('')
  const ageAsNumber = Number(age)
  const isValidAge = !isNaN(ageAsNumber) && age.trim() !== ''
  const lowerHeartRate = isValidAge ? (220 - ageAsNumber) * 0.65 : 0
  const upperHeartRate = isValidAge ? (220 - ageAsNumber) * 0.85 : 0

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput 
        placeholder='Age'
        keyboardType='number-pad'
        style={styles.field}
        value={age}
        onChangeText={setAge}
      />
      <Text>Lower limit: {lowerHeartRate.toFixed(2)}</Text>
      <Text>Upper Limit: {upperHeartRate.toFixed(2)}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10
  },
  field: {
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 6,
    width: '30%'
  }
});
