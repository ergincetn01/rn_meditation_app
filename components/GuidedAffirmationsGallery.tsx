import { View, Text, FlatList, Pressable, Image } from "react-native"
import React, { FC } from "react"
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory"
import { Link } from "expo-router"

interface Props {
	title: string
	previews: GalleryPreviewData[]
}
const GuidedAffirmationsGallery: FC<Props> = ({ previews, title }) => {
	return (
		<View className="my-5">
			<View className="mb-2">
				<Text className="text-white text-xl font-bold">{title}</Text>
			</View>
			<View className="space-y-2">
				<FlatList
					horizontal
					data={previews}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<Link href={`/affirmations/${item.id}`} asChild>
							<Pressable>
								<View className="h-36 w-32 rounded-md mr-4">
									<Image
										source={item.image}
										className="w-full h-full"
										resizeMode="cover"
									/>
								</View>
							</Pressable>
						</Link>
					)}
				/>
			</View>
		</View>
	)
}

export default GuidedAffirmationsGallery
