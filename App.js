import * as React from 'react';
import { Button, View,Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Komment from './Komment';
import Forum from './Forum';




function komment_lap({ navigation }) {


  return (

<View style={{flex: 1, paddingTop:20,backgroundColor:' '}}>
<Komment/>

<Text style={{textAlign:'left'}}>
       Ha elszeretnéd olvasni mások tapasztalatait, véleményeit vagy problémáit akkor kattints ide:
      </Text>
      <Button  
      style={styles.gomb}
      onPress={() => navigation.navigate('Forum')}
        title="Kommentek megnézése"
/>
    </View>
    
  );
}

function forum_lap({ navigation }) {
  return (



<View style={{ flex: 1, alignItems:'center', justifyContent: 'center',backgroundColor:'#ff9966' }}>
      <Text>
        -.-
      </Text>
      
      <Button
        onPress={() => navigation.navigate('Komment')}
        title="Komment írása"
      />

<Forum/>
    </View>

    
  );
}

const Drawer = createDrawerNavigator();


const ipcim=" 172.16.0.193";


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">

      <Drawer.Screen name="Komment" component={komment_lap}  
options={{
  title: 'Komment',
  headerStyle: {
    backgroundColor: '#2a0080',/*'#262729'*/
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },


  
}}/>


<Drawer.Screen name="Forum" component={forum_lap}  
options={{
  title: 'Forum',
  headerStyle: {
    backgroundColor: '#2a0080',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },


  
}}/>

        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  gomb:{
          height:45,
          backgroundColor:'#635320',
          width:'45%',
          alignSelf:'center',
          borderRadius:10
  },
});