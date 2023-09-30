import { useFonts } from "expo-font";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./screens/home_screens/Home";
import { DetailsScreen } from "./screens/home_screens/DocumentDetails";
import ProfileScreen from "./screens/profile_screens/Profile";
import { AchievementsScreen } from "./screens/achievement_screens/Achievements";
import { Ionicons } from "@expo/vector-icons";


export type RootStackParamList = {
  Home: undefined;
  DocumentDetails: { id: string };
  Profile: undefined;
  Achievements: undefined;
};

const iconSize = 16;

export const RootStack = createNativeStackNavigator<RootStackParamList>();
export const Tab = createBottomTabNavigator();

export function HomeStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="DocumentDetails"
        component={DetailsScreen}
        options={{
          headerBackTitle: "Назад",
          headerTitle: "",
          animation: "slide_from_right",
        }}
      />
    </RootStack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Profile" component={ProfileScreen} />
    </RootStack.Navigator>
  );
}

function AchievementsStackNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Achievements" component={AchievementsScreen} />
    </RootStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Главная"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => <Ionicons name={"home-outline"} size={iconSize} />,
        }}
      />
      <Tab.Screen
        name="Профиль"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name={"person-outline"} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Достижения"
        component={AchievementsStackNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name={"trophy-outline"} size={iconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config} defaultTheme="light" >
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </TamaguiProvider>  
  );
}
