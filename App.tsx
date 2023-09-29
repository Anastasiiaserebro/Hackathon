import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import styled from 'styled-components/native';
import { TamaguiProvider } from 'tamagui';
import { ButtonGroup } from './ButtonGroup';
import config from './tamagui.config'
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

const MainWrapper = styled.View`
  display:flex;
  padding:10px;
  justify-content:space-between;
  align-items: center;
  position:absolute;
  top: 30px;
  left:10px;
  right:10px;
  bottom: 10px;
`

export default function App() {
  
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
    }
  }, [loaded])

  if (!loaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <TamaguiProvider config={config}>
        <MainWrapper>
          <View >
            <Text>Hackathon App</Text>
          </View>
         <ButtonGroup/>
      </MainWrapper>
      </TamaguiProvider>
    </NavigationContainer>
  );
}