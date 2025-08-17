import { BiLogoGmail } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import Form from "./Form";

function Contact() {
  const sendEmail = () => {
    const emailAddress = "srinidhi.s131@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink, "_blank");
  };

  const sendWhatsappMessage = () => {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=4915510597586";
    window.open(whatsappUrl, "_blank");
  };
  return (
    <>
      <div
        id="contacts"
        className="h-full w-full flex flex-col items-center bg-map-image bg-cover bg-no-repeat px-16 max-lg:p-0 pt-0 m-8 mt-5 mb-0 mx-auto"
      >
        <span className="text-4xl font-bold text-center max-lg:text-2xl max-sm:text-xl">
          Get in Touch
        </span>
        <Form />
        <div className="flex w-full max-lg:flex-col items-center justify-center">
          <div
            onClick={sendEmail}
            className="w-full max-lg:w-9/12 cursor-pointer flex flex-col items-center justify-between text-center gap-2 drop-shadow-2xl shadow-indigo-50 bg-opacity-100 bg-white hover:shadow-2xl hover:shadow-indigo-300 rounded hover:rounded-tl-3xl hover:rounded-br-3xl max-h-64 m-8 max-lg:m-4 p-8"
          >
            <BiLogoGmail className="text-3xl" />
            <span className="text-xl font-bold text-gray-700">Email</span>
            <div className="text-ellipsis text-base font-normal font-serif text-gray-700">
              srinidhi.s131@gmail.com
            </div>
          </div>
          <div
            onClick={sendWhatsappMessage}
            className="w-full max-lg:w-9/12 cursor-pointer flex flex-col items-center justify-between text-center gap-2 drop-shadow-2xl shadow-indigo-50 bg-opacity-100 bg-white hover:shadow-2xl hover:shadow-indigo-300 rounded hover:rounded-tl-3xl hover:rounded-br-3xl max-h-64 m-8 max-lg:m-4 p-8"
          >
            <BiLogoWhatsapp className="text-3xl" />
            <span className="text-xl font-bold text-gray-700">WhatsApp</span>
            <div className="text-ellipsis text-base font-normal font-serif text-gray-700">
              +49-15510597586
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
