import { Button, Image,Text, View } from "react-native";
import { Stack } from "expo-router";
import { useRouter } from 'expo-router';

export default function RootLayout(){
    function LogoTitle() {
        const router = useRouter()
        return (
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <View style={{flexDirection:"row" , justifyContent:"center",alignContent:"center",alignItems:"center",gap:10}}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={{ flex: 1,padding:24}}>
            <View style={{flexDirection:'row' , flex:1,maxWidth: 960,
    marginVertical: "auto" ,gap:10}}>

            <Button color="#21346e" title="Home"  />
            <Button color="#21346e" title="About" />
            <Button color="#21346e" title="Services" />
            <Button color="#21346e" title="Blog" />
            <Button color="#21346e" title="Policy"  onPress={()=> router?.replace('/policy') }/>
            </View>
        </View>
        </View>
        );
      }
    return (
    
    <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#21346e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        
      }} 
      
      >
        <Stack.Screen name="index" options={{headerTitle: (props) => <LogoTitle />}} />
        <Stack.Screen name="[slug]" options={{
          title: 'Details'
        }} />

    </Stack>
    )
}