import { ComponentProps } from "react";

type InputWidth = "full" | "half"

interface InputProps extends ComponentProps<"input"> {
    width: InputWidth
    isDisabled?: boolean
}

export function Input({ width, isDisabled, ...props }: InputProps) {
    return (
        <input {...props} className={`px-3 py-2 bg-gray-700 shadow-shape rounded-lg outline-none ${width === "full" ? "w-full" : "w-2/3"} ${isDisabled && "bg-gray-800"}`} disabled={isDisabled} />
    )
}