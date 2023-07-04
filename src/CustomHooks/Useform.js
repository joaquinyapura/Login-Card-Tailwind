import { useState } from "react";


export const Useform = (initialForm={}) => {



    const usuario={
    email:"joaquinyapura@gmail.com"
    }


    const [formState, setFormState] = useState(initialForm);

    
    const handlestate = ({ target }) => {
        const { name, value } = target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
      
      const onResetForm=(e)=>{
        e.preventDefault()

        const inputForm=document.querySelector('#inputForm')
        
        if (formState.email==usuario.email) {
          inputForm.classList.add('border-slate-200')
          inputForm.classList.remove('border-red-200','text-red-300',"bg-red-200")
          inputForm.placeholder='Usuario correcto'
        }
        else{

          inputForm.classList.remove('border-slate-200')
          inputForm.classList.add('border-red-200','text-red-300',"bg-red-200")
          inputForm.placeholder='Usuario Incorrecto'
          
        }


        setFormState(initialForm)

      }
  
    return {
        formState,
        handlestate,
        onResetForm


  }
}
