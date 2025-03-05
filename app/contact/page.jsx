import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
];


const Contact = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="container mx-auto">
      <div>{info.map((item, index)=> {
        return <li key={index} className="flex items-center gap-4 sm:gap-6 mb-5">
          <div className = "text-accent">{item.icon}</div>
          <div>
            <p className="h3 text-heading">{item.title}</p>
            <h3>{item.content}</h3>
          </div>
        </li>
      })}
      </div>
      </div>
    </div>
  )
}

export default Contact;
