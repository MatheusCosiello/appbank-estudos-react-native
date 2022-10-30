import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function Moviments({data}) {
    // showValue e setShowValue função toogle
    // onpress dispara a ação de alterar o valor de setShowValue
    
    const [showValue,setShowValue] = useState(false);


  return (
    < TouchableOpacity  style={styles.container} onPress = {() => setShowValue(!showValue) }>  
      <Text style={styles.date} >{data.date}</Text>

        <View style={styles.content}>

            <Text style={styles.label}>{data.label}</Text>

            {showValue ? (
                <Text style={data.type === 1 ? styles.value : styles.expenses}>
                    {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                </Text>
             ) : (
                <View style={styles.skeleton}>
                </View>
             )}
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop : 18,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#fff',
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 2,
        marginBottom: 2,
    },
    date:{
        color:'#FFF',
        fontWeight:'bold',
    },
    label:{
        fontsize: 18,
        color:'#FFF',
        fontWeight:'350', 
    },
    value:{
        fontsize: 22,
        color:'#2ecc71',
        fontWeight:'bold',
    },
    expenses:{
        fontsize: 22,
        color:'#e74c3c',
        fontWeight:'bold',
    },
    skeleton:{
        marginTop : 6,
        width : 80,
        height: 10,
        backgroundColor : '#dadada',
        borderRadius: 8,
    }
});