import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import petsImage from "../assets/rnuf_4k8b_230509.jpg";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-12 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10 flex-col lg:flex-row gap-3">
          <div className="flex items-center gap-2">
            <img src={petsImage} alt="PetCare" className="h-10" />
            <span className="text-xl font-semibold">HappyPaws</span>
          </div>
          <p className="text-gray-500">
            Where every pet gets the love they deserve
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Our Story</li>
              <li>Our Vets & Specialists</li>
              <li>Care Philosophy</li>
              <li>Community Programs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Pet Services</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Pet Check-ups</li>
              <li>Vaccination Programs</li>
              <li>Grooming & Spa</li>
              <li>Pet Nutrition Plans</li>
              <li>Pet Boarding & Daycare</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-center gap-2">
                <MdAttachEmail /> care@happypaws.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> +880 1577 031 291
              </li>
              <li className="flex items-center gap-2">
                <FaAddressBook /> Rangpur, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 text-sm text-gray-500">
          <p>© 2025 HappyPaws. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a>Terms & Conditions</a>
            <a>Privacy Policy</a>
            <a>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
