import React from "react";
import { Alert } from "@material-tailwind/react";
 
export function AlertDismissible() {
  const [open, setOpen] = React.useState(true);
 
  return (
    <>
      <div className="w-full flex justify-center flex-wrap p-6">
        <Alert className='w-auto bg-slate-600' open={open} onClose={() => setOpen(false)}>
        Este site utiliza cookies para oferecer a melhor experiência de navegação. Ao continuar, esteja ciente que seus dados estão sendo coletados.
        </Alert>
      </div>
    </>
  );
}