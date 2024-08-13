import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react"

type timecontextProps = {
  duration: number
  setDuration: Dispatch<SetStateAction<number>>
}

export const TimerContext = createContext<timecontextProps>({
  duration: 10,
  setDuration: () => {},
})

type childreProps = {
  children: ReactNode
}

const TimerContextProvider = ({ children }: childreProps) => {
  const [duration, setDuration] = useState<number>(10)

  return (
    <TimerContext.Provider value={{ duration, setDuration }}>
      {children}
    </TimerContext.Provider>
  )
}

export default TimerContextProvider
