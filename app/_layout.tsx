import { View, Text } from "react-native"
import React, { useEffect } from "react"
import { Slot, SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"
import TimerProvider from "@/context/TimerContext"
SplashScreen.preventAutoHideAsync()
const RootLayout = () => {
	const [fontsLoaded, error] = useFonts({
		"Roboto-Mono": require("@/assets/fonts/RobotoMono-Regular.ttf"),
	})

	useEffect(() => {
		if (error) throw error
		if (fontsLoaded) SplashScreen.hideAsync()
	}, [fontsLoaded, error])

	if (!fontsLoaded) return null
	if (!fontsLoaded && !error) return null

	return (
		<TimerProvider>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen
					name="meditate/[id]"
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="(modal)/adjust-duration"
					options={{ headerShown: false, presentation: "modal" }}
				/>
			</Stack>
		</TimerProvider>
	)
}

export default RootLayout
