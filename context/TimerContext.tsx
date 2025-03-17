import { createContext, useState } from "react"

interface TimerContextType {
	duration: number
	selectedDuration: number
	setDuration: React.Dispatch<React.SetStateAction<number>>
	setSelectedDuration: React.Dispatch<React.SetStateAction<number>>
}
export const TimerContext = createContext<TimerContextType>({
	duration: 600,
	setDuration: () => {},
	selectedDuration: 600,
	setSelectedDuration: () => {},
})

interface TimerContextProps {
	children: React.ReactNode
}

const TimerProvider = ({ children }: TimerContextProps) => {
	const [duration, setDuration] = useState(600)
	const [selectedDuration, setSelectedDuration] = useState(600)

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
