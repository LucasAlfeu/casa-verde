import { useState } from "react";
import { toast } from "react-toastify";

export default function useEmail(){    
    const [email, setEmail] = useState<string>('')
    const [emailValido, setEmailValido] = useState<boolean>(true)
    const erro = 'Email inválido. Verifique novamente';
    
    const notificacaoDeEmailValido = () => {
        toast(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail: ${email}`)
        setEmailValido(true)
        console.log(emailValido)
    };

    const validaEmail = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const patt = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        patt.test(email) ? notificacaoDeEmailValido() : setEmailValido(false)
    }
    return {
        email,
        setEmail,
        emailValido,
        setEmailValido,
        erro,
        notificacaoDeEmailValido,
        validaEmail
    }
}