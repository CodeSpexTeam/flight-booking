import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home(){
  return (
   <SafeAreaView style={styles.main}>

    <ScrollView>
        {/*title start*/}
        <View style={{flexDirection: 'row', paddingTop: 12, paddingBottom: 12, paddingLeft: 16, paddingRight: 16, alignItems:'center'}}> 
            <View style={{alignItems:'center', flex:1, marginLeft:'10%'}}> 
                <Text style={{fontSize: 20, fontWeight: '500', color: '#191919', }}>Book Flight</Text> 
            </View> 
            <View> 
                <Text style={{fontSize: 20}}>icon</Text> 
            </View> 
        </View>
         {/*title end*/}

        {/*switch tab start*/}

        <View style={styles.headerView}>
           <View style={styles.switchView}>
            <Text style={styles.switchText}>One way</Text>
           </View>
           <View style={styles.switchView1}>
           <Text style={styles.switchText1}>Round</Text>
           </View>
           <View style={styles.switchView1}>
           <Text style={styles.switchText1}>Multicilty</Text>
           </View>
        </View>

        {/*switch tab end*/}

        {/*inputbox start*/}

        <View style={styles.inputBoxMain}>
            <View style={styles.inputBoxOuter}></View>
            <View style={styles.inputBoxOuter}></View>
            <View style={styles.inputBoxOuter1}></View>
            <View style={styles.inputBoxOuter1}></View>
           <View style={styles.searchBtn}>
            <TouchableOpacity>
                    <Text style={{fontSize:18, fontWeight:500, color:'#FFFFFF'}}>Seach</Text>
            </TouchableOpacity>
           </View>
        </View>

        {/*inputbox end*/}

        {/*hr start*/}

        <View style={{ borderBottomWidth: 2, borderBlockColor:'#E6E8E7', width: 328, marginLeft:16,marginRight:16}}>

        </View>
        {/*hr end*/}
        {/*offer section start*/}
        <View style ={styles.offerSectionOuter}>

            <View style ={styles.offerSectionOuterHeading}>
                <View style ={styles.offerSectionHeading}>
                    <Text style={{color:'#191919', fontSize:18, fontWeight:600}}>Hot offer</Text>
                </View>
                <View style ={styles.offerSectionHeading}>
                    <Text style={{color:'#EC441E', fontSize:14, fontWeight:500}}>See all</Text>
                </View>
            </View>

             {/*offer card section start*/}

            <View style ={styles.offerCardOuter}>
                <View style ={styles.offerCard}>
                    <View style ={styles.imageSection}>
                        <Text>Image</Text>
                    </View>
                    <View style ={styles.textSection}>
                        <Text>Heading</Text>
                        <Text>Para</Text>
                    </View>
                </View>
                <View></View>

            </View>

             {/*offer card section end*/}



           
            
        </View>
         {/*offer section end*/}

    </ScrollView>

     <View style ={styles.bottomOuter}>
        <View style={styles.bottomIconOuter}>
            <Text style={styles.bottomBtnText}>Home</Text>
        </View>
        <View style={styles.bottomIconOuter}>
            <Text style={styles.bottomBtnText}>Booking</Text>
        </View>
        <View style={styles.bottomIconOuter}>
            <Text style={styles.bottomBtnText}>Offer</Text>
        </View>
        <View style={styles.bottomIconOuter}>
            <Text style={styles.bottomBtnText}>Inbox</Text>
        </View>
        <View style={styles.bottomIconOuter}>
            <Text style={styles.bottomBtnText}>profile</Text>
        </View>
    </View>

   </SafeAreaView>
  )
};


const styles = StyleSheet.create(
    {
        main:{
            flex:1,
            backgroundColor:'#FFF',
            alignItems:'center'
        },
        headerView:{
            flexDirection:'row',
            marginTop:16,
            alignItems:'center',
            shadowColor: '#000',       // Shadow color (for iOS)
            shadowOffset: { width: 0, height: 2 },  // Shadow offset (for iOS)
            shadowOpacity: 0.8,        // Shadow opacity (for iOS)
            shadowRadius: 3,           // Shadow radius (for iOS)
            elevation: 5,              // Shadow-like elevation (for Android)
            backgroundColor: '#fff',
            padding:2,
            borderRadius:32,
            marginLeft:32,
            marginRight:36
            
        },
        titleMain:{
            color:'#191919',
            fontSize:20,
        },
        switchView:{
            width:96,
            height:28,
            alignItems:'center',
            borderRadius:32,
            backgroundColor:"#EC441E",
            justifyContent:'center'
        },
        switchView1:{
            width:96,
            height:28,
            alignItems:'center',
            borderRadius:32,
            justifyContent:'center'
        },
        switchText:{
            color:'white',
        },
        switchText1:{
            color:'gray',
        },

        inputBoxMain:{
            marginTop:16,
            marginRight:16,
            marginLeft:16,
            marginBottom:24,
            width:328,

            shadowColor: '#000',       // Shadow color (for iOS)
            shadowOffset: { width: 0, height: 2 },  // Shadow offset (for iOS)
            shadowOpacity: 0.8,        // Shadow opacity (for iOS)
            shadowRadius: 3,           // Shadow radius (for iOS)
            elevation: 5,              // Shadow-like elevation (for Android)
            backgroundColor: '#fff',
            borderRadius:16


           
        },
        inputBoxOuter:{
            borderBlockColor:'red',
            borderWidth:2,
            marginLeft:16,
            marginRight:16,
            marginTop:8,
            marginBottom:8,
            height:70,
        },
        inputBoxOuter1:{
            borderBlockColor:'red',
            borderWidth:2,
            marginLeft:16,
            marginRight:16,
            marginTop:8,
            marginBottom:8,
            height:70,
        },
        searchBtn:{
            width:296,
            height:48,
            marginLeft:16,
            marginRight:16,
            marginTop:8,
            marginBottom:24,
            backgroundColor:'#EC441E',
            borderRadius:8,
            justifyContent:'center',
            alignItems:'center'
        },

        offerSectionOuter:{
            width:344,
            marginTop:16,
            marginLeft:16,
            marginBottom:16,
        },

        offerSectionOuterHeading:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginRight:16,
        },

        offerSectionHeading:{
            justifyContent:'center'
        },

        offerCardOuter:{
            height:112,
            marginTop:12
            
        },

        offerCard:{
            flexDirection:'row',
            width:264,
            shadowColor: '#000',       // Shadow color (for iOS)
            shadowOffset: { width: 0, height: 2 },  // Shadow offset (for iOS)
            shadowOpacity: 0.8,        // Shadow opacity (for iOS)
            shadowRadius: 3,           // Shadow radius (for iOS)
            elevation: 5,              // Shadow-like elevation (for Android)
            backgroundColor: '#fff',
            borderRadius:16

        },
        imageSection:{
            width:96,
            height:112,
            borderBlockColor:'red',
            borderWidth:1,
        },
        textSection:{
            padding:4

        },
        bottomOuter:{
            width:'100%',
            height:68,
            backgroundColor:"#EC441E",
           flexDirection:'row',
           justifyContent:'space-around',
           alignItems:'center',
           paddingLeft:16,
           paddingRight:16,

        },
        bottomIconOuter:{
            width:48,
            height:40,
            alignItems:'center',
            justifyContent:'center'
        },

        bottomBtnText:{
            fontSize:12,
            color:'white'
            
        }




    

        
    }

);

