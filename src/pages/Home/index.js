import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

// list simula os dados recebidos de um API ou dados ja tratados

const list = [
  {
    id:1,
    label: 'boleto conta de luz',
    value: '250,00',
    date: '21/10/2022',
    type : 0, // type 0 é key para despesas
  },
  {
    id:2,
    label: 'PIX Cliente x',
    value: '3.500,00',
    date: '24/10/2022',
    type : 1, // type 1 é key para receitas
  },
  {
    id:3,
    label: 'PIX Cliente y',
    value: '3.250,00',
    date: '25/10/2022',
    type : 1,
  },
  
];


export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="MTHS User"/>
      

      <Balance saldo="190.000,00" gastos=" -100.000,00"/>

      <Actions/>
      <Text style={styles.title}>Ultimas Movimentações</Text>

      <FlatList style={styles.list} 
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator = {false}
      renderItem={ ({ item }) => <Moviments data={item}/>}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363C45',
  },
  title:{
    color: '#fff',
    fontSize: 18,
    fontWeight:'350',
    margin:14,
  },
  list:{
    color :'#fff',
    marginStart: 14,
    marginEnd: 14,
  },
});
