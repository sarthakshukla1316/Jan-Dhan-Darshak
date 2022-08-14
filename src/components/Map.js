import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useRoute } from "@react-navigation/native";

const Map = ({ markers }) => {
	const route = useRoute();
	const focused = useIsFocused();
	const [data, setData] = useState([]);
	const [location, setLocation] = useState({
		latitude: 28.862185,
		longitude: 81.911271,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
	});
	useEffect(() => {
		setData(markers);
		async function getLocation() {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				console.log("Permission to access location was denied");
				setErrorMsg("Permission to access location was denied");
				return;
			}
			const location = await Location.getCurrentPositionAsync({});
			console.log(location);
			location.coords.latitudeDelta = 0.04;
			location.coords.longitudeDelta = 0.03;
			setLocation(location.coords);
		}
		getLocation();
	}, [focused]);
	return (
		<View
			style={{
				flex: route.name === "Find" ? 3 : 4,
				backgroundColor: "#fff",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<MapView
				style={styles.map}
				initialRegion={location}
				showsUserLocation={true}
				region={location}
				showsMyLocationButton={true}
				followsUserLocation={true}
				showsCompass={true}
				scrollEnabled={true}
				zoomEnabled={true}
				pitchEnabled={true}
				rotateEnabled={true}
			>
				{data !== [] ? (
					data.map((item, i) => {
						return (
							<Marker
								key={i}
								title={item.name}
								icon={item.icon}
								coordinate={{
									latitude: item.geometry.location.lat,
									longitude: item.geometry.location.lng,
									latitudeDelta: 0.01,
									longitudeDelta: 0.01,
								}}
							/>
						);
					})
				) : (
					<View></View>
				)}
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	map: {
		width: Dimensions.get("window").width,
		flex: 1,
	},
});

export default Map;