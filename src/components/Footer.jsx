function Footer() {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-gray-800 text-base-content rounded">
        <div>
          <div className="grid grid-flow-col gap-4">
            <a className="hover:cursor-pointer w-12" href="https://www.linkedin.com/in/david-segura-vesga" target="blank">
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>       
            <a className="hover:cursor-pointer w-12" href="mailto:dseguravesga@gmail.com" target="blank">
              <img src="/email.png" alt="LinkedIn" />
            </a>       
            <a className="hover:cursor-pointer w-12" href="https://github.com/DeusExcalibur" target="blank">
              <img src="/github.png" alt="LinkedIn" />
            </a>       
          </div>
        </div>
        <div>
          <p className="text-slate-200">2023 - David Segura Vesga</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
