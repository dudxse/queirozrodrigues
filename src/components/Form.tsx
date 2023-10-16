export function Form() {
  return (
    <> 
    <div className="bg-cyan-600 rounded-lg p-4 m-6 max-w-sm bg-opacity-25 backdrop-blur-lg">
        <h1 className="text-2xl md:text-4xl font-bold m-2 text-white">Fale conosco!</h1>
        <p className="m-2 text-white">Preencha esse formulário abaixo e entraremos em contato:</p>
        <form> 
            <div className="p-2"><i className="fa-solid fa-user pt-5 pl-2 absolute text-slate-500"></i>
                <input className='w-full h-14 rounded-md pl-8' type="text" placeholder="Nome completo"/>
            </div>
            <div className="p-2"><i className="fa-solid fa-phone pt-5 pl-2 absolute text-slate-500"></i>
                <input className='w-full h-14 rounded-md pl-8' type="tel" placeholder="(11) 91234-5678"/>
            </div>
            <div className="p-2"><i className="fa-solid fa-envelope pl-2 pt-5 absolute text-slate-500"></i>
                <input className='w-full h-14 rounded-md pl-8' type="email" placeholder="email@dominio.com"/>
            </div>
            <div className="p-2">
                <textarea className='w-full rounded-md p-4 h-32 resize-none' placeholder="Mensagem"/>
            </div>
            <div className="p-2">
                <input className="rounded-md bg-green-600 cursor-pointer p-4 w-full text-white hover:bg-green-500" type="submit" value='Enviar solicitação' />
            </div>
        </form>
    </div>

    </>
  ) 
}