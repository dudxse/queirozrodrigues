import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
  } from "@material-tailwind/react";

  export function Whatsapp() {
    return (
      <div className="fixed h-80 w-full z-50">
        <div className="fixed bottom-0 right-0 mr-6 mb-6">
          <SpeedDial>
            <SpeedDialHandler>
              <a href="https://wa.me/5511991373849" target="_blank"><IconButton color="white" size="lg" className="rounded-full shadow-xl bg-green-700 hover:bg-green-600">
                <i className="fa-brands fa-whatsapp text-2xl text-white"></i>
              </IconButton></a>
            </SpeedDialHandler>
          </SpeedDial>
        </div>
      </div>
    );
  }