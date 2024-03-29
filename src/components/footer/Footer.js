import "./Footer.css";

export default function Footer() {
    return (
      <footer className="">
        <hr />
        <div className="footer-grid">
          <p>get in touch<span class="hypen3">—&nbsp;</span> <a href="mailto:iamtasneemj@gmail.com">iamtasneemj@gmail.com</a></p>
          <ul>
            links<span class="hypen4">—&nbsp;</span><li><a href="https://www.linkedin.com/in/tasneemjannat/" target="_blank" rel="noreferrer">linkedIn</a></li>
            <li><a href="https://www.wantedly.com/id/tasneem" target="_blank" rel="noreferrer">wantedly</a></li>
            <li><a href="https://github.com/tasneemjs/" target="_blank" rel="noreferrer">github</a></li>    
            <li><a href={`/${'Tasneem_Jannat-Resume.pdf'}`} target="_blank" rel="noreferrer">resume</a></li>
          </ul>
        </div>
        <p className="copyright">This site is designed and developed by me with love</p>
      </footer>
    );
  }
  