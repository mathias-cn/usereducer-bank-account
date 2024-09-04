interface HeaderProps {
    name: string
    closeHandler: () => void
}

export function Header({ name, closeHandler }: HeaderProps) {
    return (
        <div className="flex items-center justify-between w-full">
            <p>Hello, <span className="font-semibold">{name}</span>!</p>
            <button className="text-sm px-3 py-2 bg-red-500 rounded-lg" onClick={closeHandler} >Close Account</button>
        </div>
    )
}