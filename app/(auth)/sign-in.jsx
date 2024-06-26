import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { getCurrentUser, signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'
const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:''

  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { setUser, setIsLoggedIn } = useGlobalContext();
  
  const submit = async () => {
    if( form.username==="" || form.password===""){
      Alert.alert('Error', 'Whoops!All or some fields were not filled!')
    }
    setIsSubmitting(true);

    try {
      await signIn(form.email,form.password)
      //set it to global state
      const result = await getCurrentUser();
      setUser(result);
      setIsLoggedIn(true);
      
      Alert.alert('Success','User signed in successfully')
      router.replace('/home')
    } catch (error) {
      Alert.alert('Erorr',error.message)
    } finally{
      setIsSubmitting(false)
    }
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6 min-h-[80vh]'>
          <Image source={images.logo} 
          className='w-[185px] h-[65px]'
          resizeMode='contain'/>
          
          <Text className='font-semibold text-white font-psemibold text-xl'>Lets Log in!</Text>
          
          <FormField
          title='Email'
          value={form.email}
          handleChangeText={(e) => setForm({...form,email:e})}
          otherStyles='mt-7'
          keyboardType='email-address'/>
          
          <FormField
          title='Password'
          value={form.password}
          handleChangeText={(e) => setForm({...form,password:e})}
          otherStyles='mt-2'/>
          
          <CustomButton
          title='Sign-in'
          handlePress={submit}
          containerStyles='mt-7'
          isLoading={isSubmitting}/>

          <View className="justify-center pt-10 flex-row gap-2">
            <Text className='text-sm text-gray-100 font-pextralight'>
              Yet to make account?
            </Text>
            <Link className='text-sm font-psemibold text-secondary-200' href='/sign-up'>Sign Up!</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn