// ============================================================
//  RUDRA — Shared Footer
//  Include this script in every page:
//  <script src="footer.js"></script>
// ============================================================

(function () {
  const html = `
    <footer>
      <div class="footer-inner">

        <div class="footer-brand">
          <span class="wordmark">RUD<span>RA</span></span>
          <p>Premier solar energy management company delivering excellence through innovation and customer commitment.</p>
          <div class="socials">
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          </div>
        </div>

        <div class="footer-col">
          <h5>Contact</h5>
          <p>+91-9116729736</p>
          <p>HR@RUDRAMANAGEMENTS.COM</p>
          <p>Jodhpur, Rajasthan</p>
        </div>

        <div class="footer-col">
          <h5>Services</h5>
          <a href="solutions.html">Solar O&amp;M</a>
          <a href="solutions.html">Panel Cleaning</a>
          <a href="solutions.html">Manpower Supply</a>
          <a href="solutions.html">Site Management</a>
        </div>

        <div class="footer-col">
          <h5>Company</h5>
          <a href="about.html">About Us</a>
          <a href="team.html">Our Team</a>
          <a href="careers.html">Careers</a>
          <a href="media.html">News</a>
        </div>

      </div>

      <div class="footer-bottom-bar">
        <p>© ${new Date().getFullYear()} Rudra Managements. All rights reserved.</p>
        <div class="footer-links">
          <a href="privacy.html">Privacy</a>
          <a href="terms.html">Terms</a>
          <a href="sitemap.html">Sitemap</a>
        </div>
      </div>
    </footer>
  `;

  // Inject footer at the very end of <body>
  document.body.insertAdjacentHTML('beforeend', html);
})();