import { SimpleCard } from "../components/SimpleCard";

export function ServicesNPartners() {
    return(
        <>
        <section>
            <div id='servicesNPartnersCSS'>
                <div id='Services' className="bg-no-repeat bg-cover bg-fixed bg-center bg-[linear-gradient(to_right_bottom,rgba(60,60,60,0.1),rgba(60,60,60,0.9)),url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] shadow-inner flex justify-center items-center w-full h-72">
                    <div className="flex flex-wrap justify-center items-center bg-gray-900 backdrop-blur-lg bg-opacity-25 w-full">
                        <div>
                            <div className="mt-12 m-6 text-center">
                                <h1 className="text-3xl md:text-7xl font-bold text-center md:text-left text-white font-ptserif">Áreas de atuação</h1>
                                <p className="text-center mt-4 text-white">Conheça as diversas áreas em que oferecemos nossos serviços.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-start justify-center h-auto">
                    <div className="m-6 w-[1280px]">
                        <SimpleCard />
                    </div>
                </div>
                <div id='Partners' className="flex flex-col justify-center w-full items-center p-6">
                    <div id='Aboutus' className="flex flex-row justify-start lg:w-[1280px]">
                        <h1 className="lg:text-9xl text-5xl text-black font-ptserif font-bold mt-6">Sócios</h1>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center items-center rounded-3xl bg-white shadow-lg mt-4">
                        <div className="m-6">
                                <img
                                    className="h-[400px] w-[600px] rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                                    src="https://images.unsplash.com/photo-1595358418885-ec3eb025ac19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="nature image"
                                />
                            </div>
                            <div className="m-6">
                                <section><h1 className="text-4xl font-bold">Lucas Queiroz Barreto</h1></section>
                                <h1 className="font-bold pt-2">Sócio</h1>
                                <article>
                                    <p className="max-w-md mt-4">Com mais de 6 anos de atuação em diversas áreas do direito, com vasta experiência no âmbito do direito civil e penal, graduado pelas Faculdades Metropolitanas Unidas - FMU, pós-graduado em Programação Neurolinguística - PNL, pós-graduando em Direito Civil pela Escola Paulista de Direito - EPD e especializado através dos cursos de Procedimentos especiais no Direito Civil, Direito Tributário e Direito aplicado no Agronegócio.</p>
                                </article>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full items-center p-6">
                    <div className="flex flex-row flex-wrap justify-center items-center rounded-3xl bg-white shadow-lg mt-4">
                            <div className="m-6">
                                <section><h1 className="text-4xl font-bold">Natalia Sayuri Rodrigues</h1></section>
                                <h1 className="font-bold pt-2">Sócia</h1>
                                <article>
                                    <p className="max-w-md mt-4">Com mais de 8 anos de atuação em diversas áreas do direito, com vasta experiência no âmbito do direito trabalhista e penal, graduada pelas Faculdades Metropolitanas Unidas - FMU, pós-graduada em direito do trabalho e previdenciário pela Pontifícia Universidade Católica - PUC e especializada através do curso de execução penal.</p>
                                </article>
                        </div>
                        <div className="m-6">
                                <img
                                    className="h-[400px] w-[600px] rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                                    src="https://images.unsplash.com/photo-1605501218769-dd46efd48417?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="nature image"
                                />
                        </div>
                    </div>
                    <div className="flex flex-row justify-end lg:w-[1280px]">
                        <h1 className="lg:text-9xl text-5xl text-black opacity-20 font-ptserif font-bold hidden lg:block mt-6 mb-6">Sócios</h1>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}