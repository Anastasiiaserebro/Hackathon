import { useFonts } from "expo-font";
import { TamaguiProvider, View } from "tamagui";
import config from "./tamagui.config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./screens/home_screens/Home";
import { DetailsScreen } from "./screens/home_screens/DocumentDetails";
import { ProfileScreen } from "./screens/profile_screens/Profile";
import { AchievementsScreen } from "./screens/achievement_screens/Achievements";
import OnboardingScreen from "./screens/intro_screens/OnboardingScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import registerNNPushToken from "native-notify";

import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";
import { Shop } from "./screens/achievement_screens/Shop";
import Login from "./screens/login_screens/Login";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Require cycle:"]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export type RootStackParamList = {
  Home: undefined;
  DocumentDetails: { id: string };
  Shop: undefined;
  Profile: undefined;
  Achievements: undefined;
  Login: undefined;
  MainApp: undefined;
  SignIn: undefined;
  Onboarding: undefined;
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
    <RootStack.Navigator
      initialRouteName="Achievements"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name="Achievements" component={AchievementsScreen} />
      <RootStack.Screen
        name="Shop"
        component={Shop}
        options={{
          headerBackTitle: "Назад",
          headerTitle: "",
          animation: "slide_from_right",
        }}
      />
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
        name="Дела"
        component={HomeStackNavigator}
        options={{
          tabBarActiveTintColor: "#0087CD",
          tabBarIcon: ({ color, focused }) => {
            return (
              <Svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <G clipPath="url(#clip0_111_2231)">
                  <Path
                    fill={color}
                    d="M19.9 3.091a3.999 3.999 0 00-5-2.938l-1.724.493A2.98 2.98 0 0012 1.3a2.98 2.98 0 00-1.176-.654L9.1.153a4 4 0 00-4.995 2.938A5 5 0 000 8.001v7a5.006 5.006 0 005 5h6v2H8a1 1 0 000 2h8a1 1 0 000-2h-3v-2h6a5.006 5.006 0 005-5V8a5 5 0 00-4.1-4.91zm-6.9.44a1 1 0 01.725-.96l1.725-.494A2 2 0 0118 4v3.938a2.006 2.006 0 01-1.45 1.921L13 10.873V3.531zm-6.2-1.13a1.993 1.993 0 011.75-.324l1.725.493a1 1 0 01.725.961v7.342L7.45 9.86A2.006 2.006 0 016 7.94V4a1.987 1.987 0 01.8-1.6zM22 15a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 012-2.817v2.754a4.014 4.014 0 002.9 3.845l3.451.987a6.02 6.02 0 003.3 0l3.451-.987A4.014 4.014 0 0020 7.938V5.184A3 3 0 0122 8v7z"
                  ></Path>
                </G>
                <Defs>
                  <ClipPath id="clip0_111_2231">
                    <Path fill="#fff" d="M0 0H24V24H0z"></Path>
                  </ClipPath>
                </Defs>
              </Svg>
            );
          },
        }}
      />
      <Tab.Screen
        name="Профиль"
        component={ProfileStackNavigator}
        options={{
          tabBarActiveTintColor: "#0087CD",
          tabBarLabelStyle: {
            fontSize: 12,
          },

          tabBarIcon: ({ color }) => (
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <G clip-path="url(#clip0_111_2232)">
                <Path
                  d="M9 12C10.1867 12 11.3467 11.6481 12.3334 10.9888C13.3201 10.3295 14.0892 9.39246 14.5433 8.2961C14.9974 7.19975 15.1162 5.99335 14.8847 4.82946C14.6532 3.66558 14.0818 2.59648 13.2426 1.75736C12.4035 0.918247 11.3344 0.346802 10.1705 0.115291C9.00666 -0.11622 7.80026 0.00259972 6.7039 0.456726C5.60754 0.910851 4.67047 1.67989 4.01118 2.66658C3.35189 3.65328 3 4.81331 3 6C3.00159 7.59081 3.63424 9.11602 4.75911 10.2409C5.88399 11.3658 7.40919 11.9984 9 12ZM9 2C9.79113 2 10.5645 2.2346 11.2223 2.67412C11.8801 3.11365 12.3928 3.73836 12.6955 4.46927C12.9983 5.20017 13.0775 6.00444 12.9231 6.78036C12.7688 7.55629 12.3878 8.26902 11.8284 8.82843C11.269 9.38784 10.5563 9.7688 9.78036 9.92314C9.00444 10.0775 8.20017 9.99827 7.46927 9.69552C6.73836 9.39277 6.11365 8.88008 5.67412 8.22228C5.2346 7.56449 5 6.79113 5 6C5 4.93914 5.42143 3.92172 6.17157 3.17158C6.92172 2.42143 7.93913 2 9 2Z"
                  fill={color}
                />
                <Path
                  d="M9 13.9998C6.61395 14.0027 4.32645 14.9518 2.63925 16.639C0.952057 18.3262 0.00291096 20.6137 0 22.9997C0 23.2649 0.105357 23.5193 0.292893 23.7068C0.48043 23.8944 0.734784 23.9997 1 23.9997C1.26522 23.9997 1.51957 23.8944 1.70711 23.7068C1.89464 23.5193 2 23.2649 2 22.9997C2 21.1432 2.7375 19.3627 4.05025 18.05C5.36301 16.7372 7.14348 15.9998 9 15.9998C10.8565 15.9998 12.637 16.7372 13.9497 18.05C15.2625 19.3627 16 21.1432 16 22.9997C16 23.2649 16.1054 23.5193 16.2929 23.7068C16.4804 23.8944 16.7348 23.9997 17 23.9997C17.2652 23.9997 17.5196 23.8944 17.7071 23.7068C17.8946 23.5193 18 23.2649 18 22.9997C17.9971 20.6137 17.0479 18.3262 15.3607 16.639C13.6735 14.9518 11.3861 14.0027 9 13.9998Z"
                  fill={color}
                />
                <Path
                  d="M21.9998 7.875C21.4433 7.90272 20.9204 8.14977 20.5456 8.56207C20.1708 8.97437 19.9746 9.51836 19.9998 10.075C20.0251 9.51836 19.8289 8.97437 19.4541 8.56207C19.0792 8.14977 18.5564 7.90272 17.9998 7.875C17.4433 7.90272 16.9204 8.14977 16.5456 8.56207C16.1708 8.97437 15.9746 9.51836 15.9999 10.075C15.9999 11.805 18.2558 13.832 19.3798 14.734C19.5558 14.8749 19.7745 14.9516 19.9998 14.9516C20.2252 14.9516 20.4439 14.8749 20.6198 14.734C21.7438 13.834 23.9998 11.805 23.9998 10.075C24.0251 9.51836 23.8289 8.97437 23.4541 8.56207C23.0792 8.14977 22.5564 7.90272 21.9998 7.875Z"
                  fill={color}
                />
              </G>
              <Defs>
                <ClipPath id="clip0_111_2232">
                  <Rect width="24" height="24" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Достижения"
        component={AchievementsStackNavigator}
        options={{
          tabBarActiveTintColor: "#0087CD",
          tabBarIcon: ({ color }) => (
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <G clip-path="url(#clip0_20_7151)">
                <Path
                  d="M15.091 16C21.661 15.964 24 12.484 24 9.5C23.9994 8.70005 23.7247 7.92445 23.2218 7.30236C22.7189 6.68026 22.0181 6.24922 21.236 6.081C21.372 5.694 21.49 5.339 21.569 5.07C21.7436 4.48494 21.7779 3.86699 21.6691 3.26622C21.5603 2.66544 21.3116 2.09873 20.943 1.612C20.5714 1.10989 20.0868 0.702309 19.5285 0.42226C18.9701 0.14221 18.3537 -0.00244575 17.729 -1.34514e-08H6.271C5.64635 -0.00244575 5.02989 0.14221 4.47153 0.42226C3.91317 0.702309 3.42859 1.10989 3.057 1.612C2.68841 2.09873 2.43966 2.66544 2.3309 3.26622C2.22214 3.86699 2.25643 4.48494 2.431 5.07C2.51 5.339 2.631 5.694 2.764 6.081C1.98193 6.24922 1.28109 6.68026 0.778178 7.30236C0.275263 7.92445 0.00062628 8.70005 0 9.5C0 12.484 2.339 15.964 8.909 16C8.9674 16.3036 8.99786 16.6119 9 16.921V20C9.01718 20.2671 8.97723 20.5348 8.88279 20.7852C8.78836 21.0357 8.64162 21.2631 8.45237 21.4524C8.26311 21.6416 8.03568 21.7884 7.78524 21.8828C7.53479 21.9772 7.2671 22.0172 7 22H6C5.73478 22 5.48043 22.1054 5.29289 22.2929C5.10536 22.4804 5 22.7348 5 23C5 23.2652 5.10536 23.5196 5.29289 23.7071C5.48043 23.8946 5.73478 24 6 24H18C18.2652 24 18.5196 23.8946 18.7071 23.7071C18.8946 23.5196 19 23.2652 19 23C19 22.7348 18.8946 22.4804 18.7071 22.2929C18.5196 22.1054 18.2652 22 18 22H17.008C16.7403 22.018 16.4719 21.9787 16.2206 21.8847C15.9694 21.7907 15.7411 21.6441 15.551 21.4548C15.3609 21.2655 15.2134 21.0378 15.1184 20.7869C15.0234 20.536 14.983 20.2677 15 20V16.92C15.0022 16.6112 15.0326 16.3032 15.091 16ZM20.5 8C20.8978 8 21.2794 8.15804 21.5607 8.43934C21.842 8.72064 22 9.10218 22 9.5C22 11.534 20.391 13.7 15.964 13.97C16.1854 13.6678 16.4411 13.3923 16.726 13.149C18.32 11.713 19.5904 9.95443 20.453 7.99C20.469 7.991 20.483 8 20.5 8ZM2 9.5C2 9.10218 2.15804 8.72064 2.43934 8.43934C2.72064 8.15804 3.10218 8 3.5 8C3.517 8 3.531 7.991 3.547 7.99C4.40956 9.95443 5.67999 11.713 7.274 13.149C7.55887 13.3923 7.81458 13.6678 8.036 13.97C3.609 13.7 2 11.534 2 9.5ZM10.513 22C10.8436 21.3859 11.0113 20.6973 11 20V16.921C11.0035 15.9148 10.7878 14.92 10.368 14.0056C9.94819 13.0912 9.3343 12.2792 8.569 11.626C6.53553 9.68255 5.07564 7.21735 4.349 4.5C4.26361 4.21318 4.24718 3.91024 4.30105 3.61586C4.35493 3.32149 4.47757 3.044 4.659 2.806C4.84554 2.55452 5.08869 2.35051 5.36874 2.21048C5.6488 2.07046 5.95789 1.99835 6.271 2H17.729C18.0424 1.99881 18.3518 2.07153 18.6318 2.21227C18.9119 2.353 19.1549 2.55779 19.341 2.81C19.5224 3.048 19.6451 3.32548 19.6989 3.61986C19.7528 3.91424 19.7364 4.21718 19.651 4.504C18.9237 7.21991 17.4638 9.68366 15.431 11.626C14.6657 12.279 14.0518 13.0908 13.632 14.0051C13.2122 14.9193 12.9965 15.914 13 16.92V20C12.9887 20.6973 13.1564 21.3859 13.487 22H10.513Z"
                  fill={color}
                />
              </G>
              <Defs>
                <ClipPath id="clip0_20_7151">
                  <Rect width="24" height="24" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function InitialNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Onboarding"
    >
      <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="MainApp" component={TabNavigator} />
    </RootStack.Navigator>
  );
}

export const queryClient = new QueryClient();

export const API = axios.create({
  baseURL: "http://158.160.31.243:5000/",
});

export default function App() {
  registerNNPushToken(12815, "ssq0xHjzNPqeyT9i0bPRDb");

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={config} defaultTheme="light">
        <NavigationContainer>
          <InitialNavigator />
        </NavigationContainer>
      </TamaguiProvider>
    </QueryClientProvider>
  );
}
