import MainView from "../../components/view/MainView";
import MenScreen from "./menScreen";
const Men = () => {
    return (
        <MainView
            isSafeAreaViewDisplay={true}
            isStatusBarHidden={true}
            subView={MenScreen}
            isDifferentBG={true}
            context={null}
        />
    );
}

export default Men;