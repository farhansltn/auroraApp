import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect,router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants'
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  const {isLoading, isLoggedIn } = useGlobalContext();

  if( !isLoading && isLoggedIn) return <Redirect href='/home'/>;
 
  return (
    <SafeAreaView className='bg-primary h-[full]'>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full items-center min-h-[85vh] px-1">
          <Image source={images.logo}
          className='w-[230px] h-[84px]'
          resizeMode='contain'/>
          <Image source={images.cards}
          className='max-w-[460px] w-full translate-x-9 h-[300px]'
          resizeMethod=''/>
          
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Explore endless options with {' '}
              <Text className="text-secondary-200">
                Aurora
              </Text>
            </Text>
            <Image 
            source={images.path}
            className='w-[136px] h-[15px] absolute 
            -bottom-2 right-12'
            resizeMode='contain'/>
          </View>
          <Text className='text-center text-gray-100 mt-7 font-pextralight
           text-sm'>A Plethora of choices to where you wanna explore: To create and colab</Text>
           <CustomButton
           title='Continue with Email'
           handlePress={()=>{router.push('/sign-in')}}
           containerStyles='w-[40vh] mt-7'/>
           <StatusBar
           backgroundColor='#161622'
           style='light'/>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}


