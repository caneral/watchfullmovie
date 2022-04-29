import React from "react";
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <footer className="py-24 px-8">
      <div className="w-full text-center flex flex-col">
        <div className="flex justify-center my-2 gap-4">
        <Button>
            <a target={"_blank"} href="https://github.com/caneral">
            <img
              src="https://img.icons8.com/nolan/96/github.png"
              width={96}
              height={96}
            />
            </a>
          </Button>
          <Button>
            <a target={"_blank"} href="https://www.linkedin.com/in/caneral/">
            <img
              src="https://img.icons8.com/fluency/96/000000/linkedin.png"
              width={96}
              height={96}
            />
            </a>
          </Button>
        </div>
        <h2>© 2022-CanerAl All rights reserved.</h2>
      </div>
    </footer>
  );
};

export default Footer;
