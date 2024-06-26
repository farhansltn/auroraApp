import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { StatusBar } from "expo-status-bar";

import {icons} from '../../constants'

const TabIcon = ({icon,color,name,focused}) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image
      source={icon}
      resizeMode='contain'
      tintColor={color}
      className='w-6 h-6'
      />
      <Text className={`${focused? 'font-semibold' : 
        'font-pregular'
      }text-xs`} style={{color:color}}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
      screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor: "#FF3EA5",
        tabBarInActiveTintColor:"#CDCDE0",
        tabBarStyle:{
          backgroundColor:"#171717",
          borderTopWidth:1,
          borderTopColor:"#2B2B2B",
          height: 75,
        },
      }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title:'Home',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon
              icon={icons.home}
              color={color}
              name='Home'
              focused={focused}/>
            )
          }}/>
          <Tabs.Screen
          name="create"
          options={{
            title:'Create',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon
              icon={icons.plus}
              color={color}
              name='Create'
              focused={focused}/>
            )
          }}/>
          <Tabs.Screen
          name="profile"
          options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon
              icon={icons.profile}
              color={color}
              name='Profile'
              focused={focused}/>
            )
          }}/>
      </Tabs>
    </>
  )
}

export default TabsLayout