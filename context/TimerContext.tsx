import { createContext, useContext, useState } from "react"

interface TimerContextType {
	duration: number
	setDuration: React.Dispatch<React.SetStateAction<number>>
}
export const TimerContext = createContext<TimerContextType>({
	duration: 60,
	setDuration: () => {},
})

interface TimerContextProps {
	children: React.ReactNode
}

const TimerProvider = ({ children }: TimerContextProps) => {
	const [duration, setDuration] = useState(60)

	return (
		<TimerContext.Provider value={{ duration, setDuration }}>
			{children}
		</TimerContext.Provider>
	)
}

export default TimerProvider
