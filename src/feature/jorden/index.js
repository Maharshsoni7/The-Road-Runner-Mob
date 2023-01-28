import MainView from "../../components/view/MainView";
import JordanScreen from "./jordanScreen";
const Jordan = () => {
    return (
        <MainView
            isSafeAreaViewDisplay={true}
            isStatusBarHidden={true}
            subView={JordanScreen}
            isDifferentBG={true}
            context={null}
        />
    );
}

export default Jordan;