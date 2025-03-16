import { createContext, useContext, useState } from "react"

interface TimerContextType {
	duration: number
	selectedDuration: number
	setDuration: React.Dispatch<React.SetStateAction<number>>
	setSelectedDuration: React.Dispatch<React.SetStateAction<number>>
}
export const TimerContext = createContext<TimerContextType>({
	duration: 60,
	setDuration: () => {},
	selectedDuration: 60,
	setSelectedDuration: () => {},
})

interface TimerContextProps {
	children: React.ReactNode
}

const TimerProvider = ({ children }: TimerContextProps) => {
	const [duration, setDuration] = useState(60)
	const [selectedDuration, setSelectedDuration] = useState(60)

	return (
		<TimerContext.Provider
			value={{
				duration,
				selectedDuration,
				setSelectedDuration,
				setDuration,
			}}
		>
			{children}
		</TimerContext.Provider>
	)
}

export default TimerProvider
