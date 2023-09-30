import { Button, Text, View, styled } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation<any>();

  return (
    <LinearGradient flex={1} colors={["#D8E713", "#3C8FD3"]}>
      <View
        padding={24}
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Header>Добро пожаловать</Header>
        <SignInButton onPress={() => navigation.navigate("MainApp")}>
          Войти по сертификату
        </SignInButton>
        <LoginButton>Войти по логину и паролю</LoginButton>
      </View>
    </LinearGradient>
  );
};

const Header = styled(Text, {
  color: "white",
  fontSize: 50,
  fontWeight: "800",
  alignSelf: "flex-start",
  marginBottom: 64,
});

const SignInButton = styled(Button, {
  width: "100%",
  fontSize: 14,
  fontWeight: "400",
  maxHeight: 48,
  marginBottom: 24,
  backgroundColor: "#34AD3C",
  color: "white",
  pressStyle: {
    backgroundColor: "#299D31",
  },
});

const LoginButton = styled(Button, {
  width: "100%",
  fontSize: 14,
  fontWeight: "400",
  maxHeight: 48,
  backgroundColor: "rgba(208, 208, 208, 0.3)",
  color: "white",
});
export default Login;
