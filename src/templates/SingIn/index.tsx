import BigButton from "../../components/BigButton"
import { useState, useRef } from "react"
import Field from "../../components/Field";
import { useLoginUser } from "../../service/mutations/auth";
import type { ChangeEvent } from "react";

export default function SignInForm() {
    const [ isDisable, setIsDisable ] = useState<boolean>(true)
    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { login, data } = useLoginUser();

    function handleFormChange(_: ChangeEvent<HTMLFormElement>) {
        if (loginRef.current && passwordRef.current) {
            const loginValue = loginRef.current.value.trim();
            const passwordValue = passwordRef.current.value.trim();
            setIsDisable(!(loginValue && passwordValue));
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (loginRef.current && passwordRef.current) {
            const loginValue = loginRef.current.value.trim();
            const passwordValue = passwordRef.current.value.trim();
            await login(loginValue, passwordValue);
        }
        if(data) {
            console.log("Login successful:", data);
            alert("Login realizado com sucesso!");
        }
        window.location.href = "/";
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form onChange={handleFormChange} onSubmit={handleSubmit} className="bg-[#A8DADC] lg:w-2/3 w-full p-8 rounded-3xl shadow-lg flex flex-col justify-center md">
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
        </div>
    )
}