import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'; //importando componentes
import {Input} from 'react-native-elements';
import Constants from 'expo-constants';

export default function Cadastro({navigation}) { //funcao login

    const goLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "SingIn"}]
        });
    }
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState(null)


    const [isSelected, setSelected] = useState(false)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorName, setErrorName] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    const [visibleDialog, setVisibleDialog] = useState(false);
    const [titulo, setTitulo] = useState(null)
    const [mensagem, setMensagem] = useState(null)
    const [tipo, setTipo] = useState(null)
    
  const validar = () => {
    let error = false;
    setErrorName(null)
    setErrorEmail(null)
    setErrorPassword(null)
    setErrorConfirmPassword(null)

    
    const re = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i
    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu E-mail corretamente")
      error = true
    }
    if (name == null){
      setErrorEmail("Preencha o nome de Usuario")
      error = true
    }
    if (email == null){
      setErrorPassword("Preencha o E-mail")
      error = true
    }
    if (password == null){
      setErrorPassword("Preencha a senha")
      error = true
    }else{
      if(password !== confirmPassword) {
        setErrorConfirmPassword("• As senhas não pode ser diferentes.")
        error = true
      }
    }
    
    return !error
    
  }
  
  const salvar = () => {
    if (validar()){
      console.log("Salvou")
    }
  }
    
  
    
  return (
    <ScrollView style={styles.container}>
        <View style={{ marginTop:30, 
                       alignItems:'center', 
                       justifyContent:'center'}}>
            <View>
            <Image  
                    source={require('../../../assets/logoConn.png')} 
                    style={{width:400, height:250, marginTop: 55}}
                    resizeMode="contain"
                />
            </View>
          
          <View style={{ marginTop: 48,
                         flexDirection:'row', 
                         justifyContent:'center'}}>        
          </View>

                    
          <View style={styles.containerInput}>
              
            <Input 
              style={styles.input} 
              placeholder="Username" 
              autocorrect={false} 
              maxLenght="50"
              onChangeText={value => setName(value) }
              errorMessage={errorName}
            />
            
            <Input 
              style={styles.input} 
              placeholder="E-mail" 
              maxLenght="100"
              autocorrect={false} 
              keyboardType="email-address"
              onChangeText={value => setEmail(value) }
              errorMessage={errorEmail}
            />

            <Input 
              style={styles.input} 
              placeholder="Password" 
              autocorrect={false}
              maxLenght="30" 
              onChangeText={value => setPassword(value) } 
              secureTextEntry={true}
              errorMessage={errorPassword}
            />

            <Input 
              style={styles.input} 
              placeholder="Confirm Password" 
              autocorrect={false} 
              name='password2'
              maxLenght="30"
              onChangeText={value => setConfirmPassword(value) }  
              secureTextEntry={true}
              errorMessage={errorConfirmPassword}
            />
              
          </View>
              

            <TouchableOpacity style={styles.submitContainer}  onPress={() => salvar()} >
                <View>
                  <Text style={{fontFamily:'Avenir Next', 
                                color:'#fff', 
                                fontWeight:'600', 
                                fontSize: 16}}>Register Now
                  </Text>
                </View>
            </TouchableOpacity>
              
              <Text style={{fontFamily:'Avenir Next', 
                            fontsize: 14, color: '#ABB4BD', 
                            textAlign:'center', 
                            marginTop: 24}}>Have an account? <TouchableOpacity style={{flex:1}} onPress={()=>goLogin()}>
                            <Text style={styles.txtForgot}>Go to Login</Text>
                        </TouchableOpacity>
              </Text>

          </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff'
    },
    socialButton:{ //button login redes sociais
      flexDirection:'row',
      marginHorizontal: 12,
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'rgba(171, 180, 189, 0.65)',
      borderradius: 4,
      backgroundColor:'#fff',
      shadowColor: 'rgba(171, 180, 189, 0.35)',
      shadowOffset: {width: 0, height: 10},
      shadowOpacity: 5,
      shadowRadius: 10,
      elevation: 5,
    },
    socialLogo:{ // icon das redes sociais
      height: 35,
      width: 35,
      marginRight: 8,

    },
    textR:{ //predefinicao pronta para textos
      fontFamily:'Avenir Next',
      color:'black',
      marginTop: 7
    },
    txtOr:{ // texto 'or'
      color: '#ABB4BD',
      fontsize: 25,
      textAlign:'center',
      marginVertical: 20
    },
    txtForgot:{ //esqueceu sua senha?
      fontFamily:'Avenir Next',
      color: '#FF1654',
      fontsize: 14,
      fontWeight:'500',
      marginTop: 30
    },
    submitContainer:{ //button de registrar
      backgroundColor:'#B20000',
      fontsize: 16,
      borderRadius: 4,
      paddingVertical: 12,
      marginTop: 32,
      alignItems:'center',
      justifyContent:'center',
      shadowColor: 'rgba (255, 22, 84, 0.24)',
      shadowOffset: {width: 0, height: 9},
      shadowOpacity: 1,
      shadowRadius: 20,
      width:350
    },
    input:{ // e-mail, senha
      width: 320,
      color: '#FF1654',
      fontSize: 20,
      padding:10,
      fontFamily:'Avenir Next',
      borderBottomColor:'#D8D8D8',
      borderBottomWidth:1
    },
    containerInput:{
      alignItems:'center',
      width:'90%',
          
    },
    sucess: {
      color:'green'
    },
    error: {
      color:"red"
    }
});
