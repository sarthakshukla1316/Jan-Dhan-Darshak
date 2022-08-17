import React, { useState } from "react";
import { Image } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomMenu from "../components/CustomMenu";

import MapBox from "./MapBox";

//Modals
import About from "../components/Modals/AboutUs";
import ChangeLanguage from "../components/Modals/ChangeLanguage";
import Disclaimer from "../components/Modals/Disclaimer";
import SavedLocations from "../components/Modals/SavedLocations";
import TrackRequest from "../components/Modals/TrackRequest";
import MissingBankSuggestion from "../components/Modals/MissingBankSuggestion";
import Help from "../components/Modals/Help";
import Login from "../components/Modals/Login";
import BankFeedback from "../components/Modals/BankFeedback";
import { useSelector } from "react-redux";
import * as SecureStore from 'expo-secure-store';

const Drawer = createDrawerNavigator();

const Home = ({ navigation }) => {
    const [current, setCurrent] = useState("test");
    const [customer, setCustomer] = useState("");
    const { user } = useSelector(state => state.auth || {});
    const getToken = async () => {
        console.log(await SecureStore.getItemAsync('name'), "access token header");
        setCustomer(await SecureStore.getItemAsync('name'));
    }
    getToken();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomMenu {...props} />}
            initialRouteName="Find"
        >
            {!customer && <Drawer.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image source={require("../assets/icons/icon.png")} />
                    ),
                }}
            />}
            <Drawer.Screen
                name="Find"
                component={MapBox}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image source={require("../assets/icons/icon.png")} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Change Language"
                component={ChangeLanguage}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image
                            source={require("../assets/icons/changelanguage.png")}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Missing Bank Suggestion"
                component={MissingBankSuggestion}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image
                            source={require("../assets/icons/missingbank.png")}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Saved Location"
                component={SavedLocations}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image source={require("../assets/icons/icon.png")} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Track Request/ Suggestion"
                component={MapBox}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image source={require("../assets/icons/icon.png")} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Feedback"
                component={BankFeedback}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image
                            source={require("../assets/icons/disclaimer.png")}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="About Us"
                component={About}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image source={require("../assets/icons/about.png")} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Disclaimer"
                component={Disclaimer}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image
                            source={require("../assets/icons/disclaimer.png")}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Help"
                component={Help}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image
                            source={require("../assets/icons/missingbank.png")}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default Home;