import React from 'react';

function Footer() {
  return (
    <footer className="bg-neutral text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-col md:flex-row">
            {/* Social media icons */}
          <div className="flex space-x-10 mb-4 md:mb-0">
            <a href="/Aboutme" className="hover:underline">
              About
            </a>
            <a href="/projects" className="hover:text-white">
              Projects
            </a>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
            <a href="/resume" className="hover:text-white">
                Resume
            </a>
            <a href="/Technologies" className="hover:text-white">
                Technologies
            </a>
            
          </div>

            {/* Footer text */}
          <div className="text-sm">
            Made by sowjanya kambhampati &copy; 2024
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;