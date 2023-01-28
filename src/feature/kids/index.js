import MainView from "../../components/view/MainView";
import KidsScreen from "./kidsScreen";
const Kids = () => {
    return (
        <MainView
            isSafeAreaViewDisplay={true}
            isStatusBarHidden={true}
            subView={KidsScreen}
            isDifferentBG={true}
            context={null}
        />
    );
}

export default Kids;