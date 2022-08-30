import React from "react";
import CloseGreenIcon from "../close-green-icon";
import FaceBookIcon from "../FaceBookIcon";
import InstagramIcon from "../instagram-icon";
import LinkedInIcon from "../linkedin-icon";
import ShareMiddleIcon from "../share-middle-icon";
import WhatsAppIcon from "../WhasappIcon";
import XIcon from "../x-icon";



export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="bg-black-500 text-black active:bg-black-600 font-bold uppercase text-sm px-6 py-3 rounded shadow  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t justify-self-center" >
                  <div className="flex items-center gap-4">
                  <h3 className="text-3xl font-semibold">
                    Compartilhe nas redes sociais
                  </h3>
                  <button onClick={() => setShowModal(false)}><XIcon/></button>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className=" flex my-4 text-slate-500 text-lg leading-relaxed justify-center  items-center">
                   <ShareMiddleIcon/>
                  </p>
                  <div className="font-bold text-size-lg">
                    <p>Selecione a rede social e compartilhe com todos essa conquista</p>
                  </div>
                  <div className="flex gap-4 mt-6">
                      <FaceBookIcon/>
                      <WhatsAppIcon/>
                      <LinkedInIcon/>
                      <InstagramIcon/>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center  p-6 border-t border-solid border-slate-200 rounded-b">
                  <button

                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <CloseGreenIcon/>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
