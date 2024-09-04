import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}

export function Container({ children }: ContainerProps) {
    return (
        <div className="max-w-[500px] bg-gray-800 shadow-shape min-w-72 p-3 sm:p-4 sm:min-w-[500px] rounded-lg text-white space-y-4">
            {children}
        </div>
    )
}