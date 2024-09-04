import { Input } from "./input";

interface BalanceProps {
    balance: number
    loan: number
}

export function Balance({ balance, loan }: BalanceProps) {
    return (
        <div className="w-full text-left flex items-center justify-between gap-3">
            <div className="space-y-2">
                <p>Balance:</p>
                <Input width="full" type="number" value={balance} isDisabled={true} />
            </div>
            <div className="space-y-2">
                <p>Loan:</p>
                <Input width="full" type="number" value={loan} isDisabled={true} />
            </div>
        </div>
    )
}