export function Contact() {
    return(
        <>
        <section>
            <div id='Contact' className="flex flex-wrap justify-center w-full bg-gray-900 lg:p-28 p-6 h-auto bg-no-repeat bg-cover bg-fixed bg-center bg-[linear-gradient(to_right_bottom,rgba(60,60,60,0.1),rgba(60,60,60,0.9)),url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] shadow-inner">
                <div className="text-center flex items-center justify-center w-full m-6">
                    <h1 className="text-white font-bold text-5xl font-ptserif">Contato</h1>
                </div>
                <div className="p-6 bg-white max-w-lg lg:rounded-s-lg lg:rounded-tr-none rounded-t-lg">
                    <h1 className="text-2xl md:text-4xl font-bold m-2 text-slate-600">Advocacia Exemplar</h1>
                    <p className="m-2 text-black">Comprometidos com a justiça e a excelência jurídica, nossa equipe de advogados está aqui para proteger seus direitos e interesses. Conte conosco para oferecer soluções legais confiáveis e eficazes. Seja qual for sua necessidade jurídica, estamos prontos para representá-lo com integridade e dedicação. Sua busca pela advocacia de confiança termina aqui!</p>
                    <div>
                    <div className="">
                        <h1 className="text-2xl md:text-2xl font-bold m-2 text-slate-600 mt-10">Redes sociais</h1>
                    </div>
                    <ul className="text-2xl md:text-4xl font-bold m-2 text-slate-600">
                        <li className="inline-block mr-4"><a href=""><i aria-label="Instagram" className="fa-brands fa-instagram text-2xl hover:text-slate-500"></i></a></li>
                        <li className="inline-block"><a href="https://wa.me/5511991373849" target="_blank"><i aria-label="Whatsapp" className="fa-brands fa-whatsapp text-2xl hover:text-slate-500"></i></a></li>
                    </ul>
                    </div>
                    <div className="m-2 text-slate-600 mt-6">
                        <p className="text-slate-600"><i className="fa-solid fa-phone mr-4"></i>(11) 99137-3849</p>
                        <p className="text-slate-600"><i className="fa-solid fa-location-dot mr-4"></i><strong>Endereço:</strong> Av. Paulista, 2551 - São Paulo - SP - 03322000</p>
                    </div> 
                </div>
                <div className="bg-slate-600 p-4 max-w-lg lg:rounded-e-lg lg:rounded-bl-none rounded-b-lg bg-opacity-25 backdrop-blur-lg">
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
            </div>
        </section>
        </>
    )
}