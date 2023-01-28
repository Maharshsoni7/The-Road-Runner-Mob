import MainView from "../../components/view/MainView";
import WomenScreen from "./womenScreen";
const Women = () => {
    return (
        <MainView
            isSafeAreaViewDisplay={true}
            isStatusBarHidden={true}
            subView={WomenScreen}
            isDifferentBG={true}
            context={null}
        />
    );
}

export default Women;