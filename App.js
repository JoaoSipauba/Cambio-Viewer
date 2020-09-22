import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import Moeda from './components/moeda';

export default function App() {
  const [moedas, setMoedas] = useState([])

  useEffect(()=>{
    axios.get('https://economia.awesomeapi.com.br/all')
    .then((response)=>{
      let data = response.data
      setMoedas(Object.values(data))
      // console.warn(data);
    });
  },[])
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Consumindo API de Cotação de moedas!</Text>
        {moedas.map((moeda)=>(
          <Moeda name={moeda.name} high={moeda.high}/>
        ))}
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    padding: 40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: '90%',
    marginTop: '20%',
    marginBottom: '40%'
  },
  moedaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  MoedaTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  MoedaNumber: {
    marginLeft: 10,
    fontSize: 16
  }
});
