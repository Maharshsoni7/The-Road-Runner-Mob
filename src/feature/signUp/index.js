import MainView from "../../components/view/MainView";
import SignUpScreen from "./signUpScreen";
const SignUp = () => {
    return (
        <MainView
            isSafeAreaViewDisplay={true}
            isStatusBarHidden={true}
            subView={SignUpScreen}
            isDifferentBG={true}
            context={null}
        />
    );
}

export default SignUp;