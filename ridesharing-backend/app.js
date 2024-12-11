import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');

  const findRides = () => {
    axios.get('http://localhost:5000/rides')
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Starting Location"
        onChangeText={setStart}
      />
      <TextInput
        style={styles.input}
        placeholder="Destination"
        onChangeText={setDestination}
      />
      <Button title="Find Rides" onPress={findRides} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 }
});
