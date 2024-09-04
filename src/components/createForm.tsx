import { FormEvent, useState } from "react"
import { Input } from "./input"
import { Button } from "./button"

interface CreateFormProps {
    setUser: (name: string) => void
}


export function CreateForm({ setUser }: CreateFormProps) {
    const [name, setName] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    function openAccount(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if(!name) return setErrorMessage("You must type a name to open an account")
        if(name.length < 3) return setErrorMessage("Your name must have at least 3 characters")

        setUser(name)
    }
    
    return (
        <>
            <h3 className="text-xl font-semibold text-left">Open your account</h3>
            <form className="flex flex-col items-center justify-center gap-3" onSubmit={openAccount}>
                <Input width="full" type="text" name="name" id="name" placeholder="Your name..." value={name} onChange={(e) => setName(e.target.value)} />
                {errorMessage && <p className="text-red-400 text-sm">{errorMessage}</p>}
                <Button type="submit" width="full">Open Account</Button>
            </form>
        </>
    )
}