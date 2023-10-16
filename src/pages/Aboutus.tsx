export function Aboutus() {
    return(
        <>
            <section>
                <div  className="flex flex-col justify-center w-full items-center lg:h-screen">
                    <div id='Aboutus' className="mt-10 flex flex-row justify-start lg:w-[1280px]">
                        <h1 className="lg:text-9xl text-5xl text-black font-ptserif font-bold mt-6">Sobre nós</h1>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center items-center">
                        <div className="m-6">
                                <img
                                    className="h-[400px] w-[600px] rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                                    src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt="nature image"
                                />
                            </div>
                            <div className="m-6">
                                <section><h1 className="text-4xl font-bold max-w-sm">Saiba um pouco sobre o nosso escritório!</h1></section>
                                <article>
                                    <p className="max-w-sm mt-4">O Queiroz Rodrigues Advogados é um escritório que preza pela qualidade dos serviços jurídicos, com amplo conhecimento e experiência de atuação, especializado em diversas áreas do Direito.</p>
                                    <p className="max-w-sm mt-4q">O escritório conta com uma equipe de advogados experientes e qualificados, que atuam com dedicação, ética e excelência na defesa dos interesses de seus clientes, cujos sócios são dissidentes de grandes e renomados escritórios de advocacia, empresas e instituição financeira.</p>
                                </article>
                        </div>
                    </div>
                    <div className="mb-10 flex flex-row justify-end lg:w-[1280px]">
                        <h1 className="lg:text-9xl text-5xl text-black opacity-20 font-ptserif font-bold hidden lg:block">Sobre nós</h1>
                    </div>
            
                </div>
            </section>
        </>
    )
}