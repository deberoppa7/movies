import React, { ReactElement } from 'react'
import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import { useFonts } from 'expo-font'


const Icon : any =  createIconSetFromIcoMoon(
  require('../../../assets/fonts/icomoon/selection.json'),
  'IcoMoon',
  'icomoon.ttf'
)

const MyIcon =  (props : any) => {

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../assets/fonts/icomoon/icomoon.ttf')
  })

  if (!fontsLoaded) return null
  

  return ( <Icon {...props} /> )

}

export default React.memo(MyIcon);
