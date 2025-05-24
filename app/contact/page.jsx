import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    content: <a href="mailto:aahmed@outlook.com" className="hover:text-accent">aahmed@outlook.com</a>,
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    content: "(+44) 744 513 5785",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    content: "Cambridge, United Kingdom",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    content: <a href="https://github.com/abeahmed" target="_blank" rel="noopener noreferrer" className="hover:text-accent">github.com/abeahmed</a>,
  },
];


const Contact = () => {
  return (
    <div className="container mx-auto max-w-screen-lg justify-center mt-10">
      <h3 className="h3 mb-20">Contact:</h3>
      <div>{info.map((item, index)=> {
        return <li key={index} className="flex items-center gap-4 sm:gap-6 mb-5">
          <div className = "text-accent text-2xl">{item.icon}</div>
          <div>
            <p className="h3">{item.title}</p>
            <h3>{item.content}</h3>
          </div>
        </li>
      })}
      </div>
      </div>
  )
}

export default Contact;
