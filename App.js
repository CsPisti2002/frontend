import * as React from 'react';
import { Button, View,Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Komment from './Komment';
import Forum from './Forum';
import Termekek from './Termekek';
import Hir from './Hir';


function hir_lap({ navigation }) {
  return (

<Hir/>
    
    
  );
}


function komment_lap({ navigation }) {


  return (




<View style={{flex: 1, paddingTop:20,backgroundColor:'#5c8a8a'}}>
<Komment/>

<Text style={{textAlign:'left', fontSize:20, border:10, borderColor:'black', borderWidth:2, margin:5, padding:5,backgroundColor:'#5c8a8a'}}>
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


function termek_lap({ navigation }) {
  return (

<Termekek/>
    
    
  );
}


function forum_lap({ navigation }) {
  return (



<View style={{ flex: 1, alignItems:'center', justifyContent: 'center',backgroundColor:'#5c8a8a' }}>
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
    backgroundColor: '#5c8a8a',/*'#262729'*/
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },


  
}}/>

<Drawer.Screen name="Termekek" component={termek_lap}  
options={{
  title: 'Termék',
  headerStyle: {
    backgroundColor: '#5c8a8a',/*'#262729'*/
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
    backgroundColor: '#5c8a8a',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },


  
}}/>

<Drawer.Screen name="Hir" component={hir_lap}  
options={{
  title: 'Hírek',
  headerStyle: {
    backgroundColor: '#5c8a8a',/*'#262729'*/
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