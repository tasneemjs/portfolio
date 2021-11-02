import "./Footer.css";

export default function Footer() {
    return (
      <footer className="">
        <hr />
        <div className="footer-grid">
          <p>get in touch <span class="hypen3">-</span> <a href="mailto:iamtasneemj@gmail.com">iamtasneemj@gmail.com</a></p>
          <ul>
            links <span class="hypen4">-</span><li><a href="https://www.linkedin.com/in/tasneemjannat/" target="_blank" rel="noreferrer">linkedIn</a></li>
            <li><a href="https://www.wantedly.com/id/tasneem" target="_blank" rel="noreferrer">wantedly</a></li>
            {/* <li>resume</li> */}
          </ul>
        </div>

      </footer>
    );
  }
  