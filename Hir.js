import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, TextInput,StyleSheet, TouchableOpacity,Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,

      szoveg:"hu"

    };
  }

  async getMovies() {
    try {
      let ugras='https://newsapi.org/v2/everything?q=villany OR szerelés OR elektromosság OR vésés OR szerszámok &language=hu&apiKey=bef3b596336f419dbfb562271b5abbe8'
      const response = await fetch(ugras);
      const json = await response.json();
      this.setState({ data: json.articles });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  szovegvaltoztat=(be)=>{
    this.setState({szoveg:be})
  }

  kereses=()=>{
    //alert("Keresés")
    this.getMovies()
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>

<Text style={{padding: 10, fontSize: 20,textAlign:"center"}}>
       Ország kódja:
      </Text>

      <TextInput
        style={{height: 40,backgroundColor:"#c6c6ec"}}
        placeholder="Írd be az ország kódját!"
        onChangeText={(be) => this.szovegvaltoztat(be)}
        value={this.state.szoveg}
      />

<TouchableOpacity
        style={styles.button}
        onPress={this.kereses}
      >
        <Text>Keresés</Text>
      </TouchableOpacity>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
              <Image source={{uri: item.urlToImage }}
       style={{width: 400, height: 400,marginLeft:"auto",marginRight:"auto"}} />
              <Text style={{fontSize:30,color:"blue"}}> {item.title} </Text>
              <Text style={{fontSize:25,color:"blue"}}>{item.description}</Text>
              <Text style={{fontSize:20,color:"blue"}}>{item.content}</Text>


              <Text style={{fontSize:15,color:"orange",fontStyle:"italic"}}>{item.publishedAt}</Text>
              <Text style={{fontSize:15,color:"orange"}}>{item.source.name}</Text>
              

              </View>
            )}
          />
        )}
      </View>
    );
  }
};


const styles = StyleSheet.create({
 
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,

    marginTop:10,

    width:"80%",
    borderRadius:20

  }
});