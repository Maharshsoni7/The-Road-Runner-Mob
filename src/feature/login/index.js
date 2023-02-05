import MainView from "../../components/view/MainView";
import LoginScreen from "./loginScreen";
const Login = () => {
    return (
        <MainView
            isSafeAreaViewDisplay={true}
            isStatusBarHidden={true}
            subView={LoginScreen}
            isDifferentBG={true}
            context={null}
        />
    );
}

export default Login;