
import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import MainScreen from '../screen/MainScreen'

export default class WelcomeScreen extends React.Component {
    render(){
    return (
      <View   style={styles.container}>
        <View>
        <Image    style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 100,
                }}
                source={require('../assets/notes.jpg')}
              />
        </View>
       <Text>Welcome to WelcomeScreen</Text>
      
       <View>
           <TouchableOpacity   style={styles.button} 
           onPress={() => {
            this.props.navigation.navigate('MainScreen')
          }}>
          
           </TouchableOpacity>
       </View>
      </View>
    );
  }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 15,
        marginTop: 50,
        width: 200,
        height: 50,
      }
  });
  
  