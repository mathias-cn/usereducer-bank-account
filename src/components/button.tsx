import { ComponentProps, ReactNode } from "react";

type ButtonWidth = "full" | "half"

interface ButtonProps extends ComponentProps<"button"> {
    children: ReactNode
    width: ButtonWidth
}

export function Button({ children, width, ...props }: ButtonProps) {
    return (
        <button {...props} className={`px-3 py-2 rounded-lg outline-none bg-green-800 ${width === "full" ? "w-full" : "w-1/3"}`}>{children}</button>
    )
}