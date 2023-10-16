import { Form } from "../components/Form";
import { Quality } from "../components/Quality";
export function Home() {
    return(
        <>
        <section>
            <div id='Home' className="flex lg:h-screen justify-center flex-wrap items-center w-full bg-gray-400 bg-[url('./assets/bg1.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="m-6">
                    <h1 className="text-3xl md:text-7xl font-bold text-center md:text-left text-white max-w-md font-ptserif">Competência em <span className=" text-amber-600">  Direito!</span></h1>
                    <p className="mt-6 text-center max-w-sm md:text-left text-white">Entre em contato conosco para garantir os seus direitos de forma fácil, rápida e segura!</p>
                </div>
                <Form />
            </div>
            <Quality />
        </section>
        </>
    )
}