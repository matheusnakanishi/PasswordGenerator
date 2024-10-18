import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { ModalPassword } from '../../components/modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home() {
  const [size, setSize] = useState(8)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword() {
    let password = ""

    for (let i = 0, n = charset.length; i < size; i++)
      password += charset.charAt(Math.floor(Math.random() * n))

    setPasswordValue(password)
    setModalVisible(true)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/padlock.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>{size} caracteres</Text>

        <View style={styles.area}>
          <TextInput
            style={styles.input}
            keyboardType='number-pad'
            value={String(size)}
            onChangeText={(value) => setSize(value) }
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text style={styles.buttonText}>Gerar senha</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} animationType='fade' transparent={true}>
          <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
        </Modal>

      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#404040",
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo:{
    marginBottom: 60
  },

  area:{
    marginTop: 14,
    marginBottom: 14,
    width: '10%',
    backgroundColor: "#878787",
    borderRadius: 8,
    padding: 8,
    
  },

  button:{
    backgroundColor: '#AA00FA',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18
  },

  buttonText:{
    color: 'white',
    fontSize: 20
  },

  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },

  input:{
    textAlign: 'center'
  }

})