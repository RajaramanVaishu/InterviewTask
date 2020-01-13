import { createStackNavigator } from "react-navigation-stack"
import ListView from "../ListView/ListView";
import DetailPage from "../DetailView/DetailView";
import { createAppContainer } from "react-navigation";



const PrimaryNavigation = createStackNavigator({
    "ListPage": {
        screen: ListView,
        navigationOptions: {
            title: "Album List",
        }

    },
    "DetailPage": {
        screen: DetailPage
    }

}, {
    headerMode: 'float',
    initialRouteName: "ListPage",
    navigationOptions: {
        gesturesEnabled: false
    }
});

const AppContainer = createAppContainer(PrimaryNavigation);

export default AppContainer;