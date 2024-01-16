import React from 'react';
import {View,Text,Image,Button,Linking,ScrollView,TextInput,TouchableOpacity} from 'react-native';

const tekanDong = () => alert('Rawrrr... ');

const Wa = () => {
  const url = 'https://wa.me/6282220967264?text=Halo,%20salam%20kenal%20ka'
  Linking.openURL(url);
}
const Ig = () => {
  const url = 'https://www.instagram.com/dzisapa___/?next=%2F'
  Linking.openURL(url);
}

const App = ()=>{
  return(
    <ScrollView>
      <View>
        <View style={{backgroundColor: 'black'}}>
          <Text style={{color: 'white', textAlign:'center', padding:10, fontWeight: 'bold'}}>PORTOFOLIO</Text>
        <View style={{backgroundColor: 'white'}}>
        <Image style={{width:200, height:200, borderRadius: 15, alignSelf:'center', marginTop: 20}} source={require('./assets/Tamaa.jpeg')} />
    <Text style={{padding: 10, fontWeight:'bold', textAlign: 'center'}}> Dzikry Satria Pratama </Text>
     <Text style={{textAlign:'center'}}> Halo,kenalin namaku Dzikry Satria Pratama. Biasa dipanggil Tamabooy. Umurku sekarang 17 tahun. Aku berasal dari Kota Purwokerto'. Saya sekolah di SMK TELKOM PURWOKERTO. </Text>
       <View>

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <Image style={{width:35, height:28, alignSelf:'center', marginTop: 18}} source={require('./assets/Tamaa.jpeg')} />
      <TouchableOpacity
      style={{backgroundColor:'white', width:100, height:30, borderRadius:5, alignSelf: 'center', marginTop: 15}} onPress={Wa}>
        <Text style={{padding:5, fontWeight:'bold', textAlign:'center', color: 'green'}}>Contact Me</Text>
      </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <Image style={{width: 60, height: 28, alignSelf:'center', marginTop: 18}} source={require('./assets/Instagram.jpeg')} />
      <TouchableOpacity
      style={{backgroundColor:'white', width:100, height:30, borderRadius:5, alignSelf: 'center', marginTop: 15}} onPress={Ig}>
        <Text style={{padding:5, fontWeight:'bold', color: 'orange'}}>Follow Me</Text>
      </TouchableOpacity>
      </View>
      
        <Text style={{marginTop: 20, marginBottom: 10, fontWeight:'bold', textAlign: 'center', fontSize: 20}}> My Recent Project </Text>
        <View style={{backgroundColor: 'grey', height: 200, width: 280, alignSelf: 'center', borderRadius: 15}}>
        <Image style={{width: 270, height: 190, borderRadius: 15, alignSelf:'center', marginTop: 6}} source={require('./assets/DilesinAcademy.jpeg')} />
        <Text style={{marginTop: 10, textAlign: 'center'}}> Tampilan login project DilesinAcademy </Text>
          <View style={{backgroundColor: 'grey', height: 200, width: 280, alignSelf: 'center', borderRadius: 15, marginTop: 20}}>
        <Image style={{width: 270, height: 190, borderRadius: 15, alignSelf:'center', marginTop: 6}} source={require('./assets/DashboardDilesin.jpeg')} />
        <Text style={{marginTop: 10, textAlign: 'center'}}> Tampilan Dashboard project DilesinAcademy </Text>
          <View style={{backgroundColor: 'grey', height: 200, width: 280, alignSelf: 'center', borderRadius: 15, marginTop: 20}}>
        <Image style={{width: 270, height: 190, borderRadius: 15, alignSelf:'center', marginTop: 6}} source={require('./assets/HasilProject.jpeg')} />
         <Text style={{marginTop: 10, textAlign: 'center'}}> Tampilan Hasil project DilesinAcademy </Text>
          <TextInput placeholder='Kritik dan Saran' style={{backgroundColor:'black', color: 'white', padding: 10, marginVertical: 20, borderRadius: 10}} />
              </View>
              </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;