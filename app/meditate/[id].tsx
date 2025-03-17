import {
	View,
	Text,
	ImageBackground,
	Pressable,
	TouchableOpacity,
} from "react-native"
import React, { useContext, useEffect, useState } from "react"
import MEDITATION_IMAGES from "@/constants/meditation-images"
import { AntDesign } from "@expo/vector-icons"
import AppGradient from "@/components/AppGradient"
import { useLocalSearchParams, useRouter } from "expo-router"
import CustomButton from "@/components/CustomButton"
import { Audio } from "expo-av"
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/MeditationData"
import { TimerContext } from "@/context/TimerContext"
const Meditate = () => {
	const router = useRouter()
	const { id } = useLocalSearchParams()
	const [isMeditating, setIsMeditating] = useState<boolean>(false)
	const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false)
	const {
		duration: secRemaining,
		selectedDuration,
		setDuration,
	} = useContext(TimerContext)

	const [audio, setAudio] = useState<Audio.Sound>()
	useEffect(() => {
		let timerId: NodeJS.Timeout

		if (secRemaining === 0) {
			setIsMeditating(false)
			return
		}

		if (isMeditating) {
			timerId = setTimeout(() => {
				setDuration(secRemaining - 1)
			}, 1000)
		}

		return () => {
			clearTimeout(timerId)
		}
	}, [secRemaining, isMeditating])

	const toggleSound = async () => {
		const sound = audio ? audio : await initializeAudio()

		const status = await sound?.getStatusAsync()

		if (status?.isLoaded && !isAudioPlaying) {
			await sound?.playAsync()
			setIsAudioPlaying(true)
		} else {
			await sound?.pauseAsync()
			setIsAudioPlaying(false)
		}
	}

	const initializeAudio = async () => {
		const audioFileSound = MEDITATION_DATA[Number(id) - 1].audio

		const { sound } = await Audio.Sound.createAsync(
			AUDIO_FILES[audioFileSound]
		)

		setAudio(sound)
		return sound
	}

	const toggleStatus = async () => {
		if (secRemaining === 0) setDuration(selectedDuration)
		setIsMeditating(!isMeditating)
		await toggleSound()
	}

	const formattedMins: string = String(
		Math.floor(secRemaining / 60)
	).padStart(2, "0")
	const formattedSeconds: string = String(secRemaining % 60).padStart(2, "0")

	useEffect(() => {
		return () => {
			audio?.unloadAsync()
		}
	}, [audio])

	const handleDuration = () => {
		if (isMeditating) toggleStatus()

		router.push("/(modal)/adjust-duration")
	}
	const resetDuration = () => {
		setDuration(selectedDuration)
		setIsMeditating(false)
		setIsAudioPlaying(false)

		if (audio) {
			audio.unloadAsync()
			setAudio(undefined)
		}
	}

	const startOrResume: string =
		secRemaining === selectedDuration ? "Start" : "Resume"

	return (
		<View className="flex-1">
			<ImageBackground
				source={MEDITATION_IMAGES[Number(id) - 1]}
				resizeMode="cover"
				className="flex-1"
			>
				<AppGradient colors={["#rgba(0,0,0, 0.3)", "rgba(0,0,0,0.9)"]}>
					<Pressable
						onPress={() => {
							setDuration(selectedDuration)
							router.back()
						}}
						className="absolute top-16 left-6 z-10"
					>
						<AntDesign
							name="leftcircleo"
							size={40}
							color={"#fff"}
						/>
					</Pressable>
					<View className="justify-center flex-1">
						<View className="justify-center rounded-full bg-neutral-200 mx-auto w-44 h-44 ">
							<Text className="text-center text-blue-800 text-4xl font-rmono">
								{formattedMins}.{formattedSeconds}
							</Text>
						</View>
					</View>
					<View className="mb-5">
						<CustomButton
							title="Adjust Time"
							onPress={handleDuration}
						/>
						{isMeditating ? (
							<View className="w-full justify-center flex-row gap-4">
								<TouchableOpacity
									onPress={toggleStatus}
									className={
										"justify-center items-center bg-white rounded-xl min-h-[62px] mt-4 flex-1"
									}
									activeOpacity={0.7}
								>
									<Text className="font-semibold text-lg">
										Pause
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={resetDuration}
									className={
										"justify-center items-center bg-white rounded-xl min-h-[62px] mt-4 flex-1"
									}
									activeOpacity={0.7}
								>
									<Text className="font-semibold text-lg">
										Reset Session
									</Text>
								</TouchableOpacity>
							</View>
						) : (
							<CustomButton
								title={startOrResume}
								onPress={toggleStatus}
								containerStyles="mt-4"
							/>
						)}
					</View>
				</AppGradient>
			</ImageBackground>
		</View>
	)
}

export default Meditate
