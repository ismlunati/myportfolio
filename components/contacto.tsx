import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-start mt-[-100px]">
      <div className="bg-slate-300 shadow-md rounded-lg p-8 w-96 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Información Personal
        </h1>
        <p className="text-gray-600 mb-6">
          Hola, soy{" "}
          <span className="text-indigo-500 font-semibold">Ismael Luna</span>, un
          desarrollador de software con experiencia en tecnologías web y
          soluciones innovadoras. Si le interesa mi perfil no dude en
          contactarme.
        </p>

        <div className="flex items-center gap-2">
          <FaEnvelope className="text-indigo-500" />
          <p className="text-gray-600">lunaatienzaismael@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-indigo-500" />
          <p className="text-gray-600">+34 622 130 239</p>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-indigo-500" />
          <p className="text-gray-600">Sevilla, España</p>
        </div>
        <div className="flex items-center gap-2">
          <FaLinkedin className="text-indigo-500" />
          <a
            href="https://www.linkedin.com/in/ismael-luna-atienza-933ba7235/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:underline"
          >
            linkedin.com/in/iluna
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;