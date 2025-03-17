import {
	View,
	Text,
	ImageBackground,
	Pressable,
	ScrollView,
} from "react-native"
import React, { useEffect, useState } from "react"
import { useRouter, useLocalSearchParams } from "expo-router"
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory"
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery"
import AppGradient from "@/components/AppGradient"
import { AntDesign } from "@expo/vector-icons"

const AffirmationPractice = () => {
	const router = useRouter()
	const { itemId } = useLocalSearchParams()

	const [affirmation, setAffirmation] = useState<GalleryPreviewData>()
	const [sentences, setSentences] = useState<string[]>([])

	useEffect(() => {
		for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
			const affirmationData = AFFIRMATION_GALLERY[idx].data

			const affirmationToStart = affirmationData.find(
				(a) => a.id === Number(itemId)
			)

			if (affirmationToStart) {
				setAffirmation(affirmationToStart)

				const sentencesArray = affirmationToStart.text.split(".")

				if (sentencesArray[sentencesArray.length - 1] === "") {
					sentencesArray.pop()
				}

				setSentences(sentencesArray)
				return
			}
		}
	}, [])

	return (
		<View className="flex-1">
			<ImageBackground
				className="flex-1"
				source={affirmation?.image}
				resizeMode="cover"
			>
				<AppGradient colors={["#rgba(0,0,0, 0.3)", "rgba(0,0,0,0.9)"]}>
					<Pressable
						onPress={() => router.back()}
						className="absolute top-16 left-6 z-10"
					>
						<AntDesign
							name="leftcircleo"
							size={40}
							color={"#fff"}
						/>
					</Pressable>
					<ScrollView
						contentContainerStyle={{
							flexGrow: 1,
							justifyContent: "center",
						}}
						showsVerticalScrollIndicator={false}
					>
						<View className="h-full justify-center">
							<View className="h-full self-center justify-center">
								{sentences.map((s, idx) => (
									<Text
										key={idx}
										className="mb-12 font-semibold text-2xl text-zinc-50 text-center"
									>
										{s}.
									</Text>
								))}
							</View>
						</View>
					</ScrollView>
				</AppGradient>
			</ImageBackground>
		</View>
	)
}

export default AffirmationPractice
