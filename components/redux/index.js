

import { AppRegistry } from "react-native";
import App from "../../App";
import {name as appName} from '/Volumes/Android/Just_Wasit/RN_Responsive/RN_responsive_design/app.json'
import { Provider } from "react-redux";
import store from "./store";

const AppRedux=()=>(
    <Provider store={store}>
        <App/>
    </Provider>
)


AppRegistry.registerComponent(appName,()=>AppRedux)