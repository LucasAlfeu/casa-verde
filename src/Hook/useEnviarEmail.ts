import { useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function useEnviarEmail () {
    useEffect(() => {
        (function(){
            emailjs.init("iQTzVTTNlu22yvlzj");
        })();
        var templateParams = {
            name: 'James',
            notes: 'Check this out!'
        };
         
        emailjs.send('service_mensage', 'template_el28ns8', templateParams)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
    }, [])
}