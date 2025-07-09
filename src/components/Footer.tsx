import { Divide } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-6 px-4 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">FilminID</h2>
            <p className="text-sm text-gray-400">
              Your go-to platform for movie and series information.
            </p>
          </div>
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-md font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-md font-semibold mb-2">Follow Us</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
