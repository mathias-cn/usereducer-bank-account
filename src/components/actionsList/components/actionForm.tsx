import { FormEvent, useState } from "react";
import { Input } from "../../input";
import { Button } from "../../button";

type TypeOptions = "deposit" | "withdraw" | "loanReq" | "loanPay"

interface ActionFormProps {
    type: TypeOptions
    placeholder: string
    maxVal?: number
    dispatchFn: (val: number) => void
}

export function ActionForm({ type, placeholder, maxVal, dispatchFn }: ActionFormProps) {
    const [val, setVal] = useState(0)

    function formSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if(!type) return

        dispatchFn(val)
        setVal(0)
    }
    function handleChange(v: number) {
        if(!maxVal) return setVal(v)
        if(v > maxVal) return
        return setVal(v)
    }

    return (
        <form className="flex items-center justify-between gap-3" onSubmit={formSubmit} >
            <Input width="half" type="number" name={type} id={type} value={val} onChange={(e) => handleChange(Number(e.target.value))} max={maxVal} />
            <Button type="submit" width="half">{placeholder}</Button>
        </form>
    )
}