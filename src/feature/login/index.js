import { useNavigation } from "@react-navigation/native";
import MainView from "../../components/view/MainView";
import NavigationHeaders from "../../navigation/navigationHeder";
import LoginScreen from "./loginScreen";
const Login = (props) => {
    const navigation = useNavigation();


    const OnPressSkip = () => {
        console.log("ejew");
        navigation.navigate(NavigationHeaders.Home)
    }
    const OnPressLogin = () => {
        navigation.navigate(NavigationHeaders.Home)
    }


    const onPressSingUp = () => {
        navigation.navigate(NavigationHeaders.SingUp)
    }

    return (
        <MainView
            isSafeAreaViewDisplay={true}
            isStatusBarHidden={true}
            subView={LoginScreen}
            isDifferentBG={true}
            context={{
                OnPressSkip,
                OnPressLogin,
                onPressSingUp
            }}
        />
    );
}

export default Login;