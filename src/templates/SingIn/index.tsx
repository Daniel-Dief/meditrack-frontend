import BigButton from "../../components/BigButton"
import { useState, useRef } from "react"
import Field from "../../components/Field";

export default function SignInForm() {
    const [ isDisable, setIsDisable ] = useState<boolean>(true)
    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    function handleFormChange(_: React.ChangeEvent<HTMLFormElement>) {
        if(loginRef.current && passwordRef.current) {
            setIsDisable(
                loginRef.current.value.trim() === ""
                ||
                passwordRef.current.value.trim() === ""
            )      
        }
        return
    }

    return (
            <form onChange={handleFormChange} className="bg-[#A8DADC] w-full max-w-md p-8 rounded-3xl shadow-lg flex flex-col justify-center">
                <h1 className="text-center text-5xl font-semibold mb-8 text-black">
                    Entrar
                </h1>
                <div className="space-y-6">
                    <Field
                        inputRef={loginRef}
                        name="Login"
                        type="text"
                        placeholder="Seu usuário"
                    />
                    <Field
                        inputRef={passwordRef}
                        name="Senha"
                        type="password"
                        placeholder="Sua senha"
                    />
                    <BigButton
                        type="submit"
                        onClick={() => null}
                        disable={isDisable}
                    >
                        Entrar
                    </BigButton>
                </div>
            </form>
    )
}