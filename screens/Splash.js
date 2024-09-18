import { useEffect } from "react";
import { View, Text,Image } from "react-native";

export default function Splash({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 3000)
    },[]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EC441E'}}>
            <Image source = {require('../assets/logo/Vector.png')}/>
            <Text style ={{fontSize:36, fontWeight:800, color:'#FFFFFF'}}>Book Flight</Text>
        </View>
    );
}
