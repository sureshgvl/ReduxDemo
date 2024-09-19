import { ScrollView, View } from 'react-native';
import React from 'react';
import Header from './components/Header';
import Product from './components/Product';

const App = () => {

  const products = [
    {
      id:1,
      name:'Samsung Mobile',
      color:'white',
      price:30000,
    },
    {
      id: 2,
      name:'Apple Iphone Mobile',
      color:'black',
      price:130000,
    },
    {
      id: 3,
      name:'Nokia Mobile',
      color:'green',
      price:20000,
    },
  ];

  return (
    <View>
      <Header/>
      <ScrollView>
      {
        products.map((item)=> <Product item={item}/>)
      }
      </ScrollView>


    </View>
  );
};

export default App;

