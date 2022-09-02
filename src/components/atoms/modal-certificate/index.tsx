import { Typography } from "@mui/material";
import React, { cloneElement } from "react";
import CloseGreenIcon from "../close-green-icon";
import CupPlaylistIcon from "../cup-playlist-icon";
import CertificateDownloadIcon from "../download-certificate-button";
import FaceBookIcon from "../FaceBookIcon";
import InstagramIcon from "../instagram-icon";
import LinkedInIcon from "../linkedin-icon";
import ShareCertificateIcon from "../share-certificate-button";
import ShareMiddleIcon from "../share-middle-icon";
import WhatsAppIcon from "../WhasappIcon";
import XIcon from "../x-icon";

export default function ModalCertificate({ children }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      {cloneElement(children, { onClick: () => setShowModal(true) })}
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex    " >
                  <div className="flex justify-center ml-8">
                    <div className="mt-9">
                      <CupPlaylistIcon />
                    </div>
                    <div className="mt-9">
                    <button onClick={() => setShowModal(false)}><XIcon /></button>
                    </div>
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="text-center text-xl font-extrabold">
                      <p>Parabéns, playlist</p>
                      <p>concluída !</p>
                  </div>
                  <div className=" text-size-lg text-center">
                    <p>Você concluiu a playlist nome da</p>
                    <p> playlist e adquiriu uma nova</p>
                    <p> habilidade. Estamos impressionados</p>
                    <p> com o seu desempenho.</p>
                  </div>
                  <div className="flex flex-col mt-6 m-2">
                    <div>
                    <CertificateDownloadIcon />
                    </div>
                    <div className="mt-5" >
                   <ShareCertificateIcon/>
                   </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center  p-6 border-slate-200 ">

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
