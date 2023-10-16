import { Typography } from "@material-tailwind/react";
import LogoBlack from '../assets/logo-black.png'
 
export function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={LogoBlack} alt="logo" className="w-56 h-auto" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a className="hover:text-slate-400" href="https://wa.me/5511991373849" target="_blank">Ficou alguma dúvida?</a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Queiroz Rodrigues
      </Typography>
    </footer>
  );
}