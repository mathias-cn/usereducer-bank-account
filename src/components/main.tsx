import { ReactNode } from "react"

interface MainProps {
    children: ReactNode
}

export function Main({ children }: MainProps) {
    return (
        <div className="w-full min-h-dvh p-6 text-center bg-pattern space-y-6 flex flex-col justify-start items-center">
            
            {children}
        </div>
    )
}