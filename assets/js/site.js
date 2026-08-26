(function () {
  function createNavigation() {
    if (document.querySelector("[data-site-header]")) return;

    const main = document.querySelector(".page-content");
    if (!main) return;

    const header = document.createElement("header");
    header.className = "site-header";
    header.dataset.siteHeader = "";
    header.innerHTML = `
      <nav class="site-navigation" aria-label="Primary navigation">
        <a class="site-logo" href="/" aria-label="Your Name, homepage">
          <img class="site-logo-art site-logo-art--light" src="/assets/images/logo-black.svg" alt="" width="1024" height="1024">
          <img class="site-logo-art site-logo-art--dark" src="/assets/images/logo-white.svg" alt="" width="1024" height="1024">
        </a>

        <button class="site-menu-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="site-nav-menu">
          <span>Menu</span>
          <span class="site-menu-icon" aria-hidden="true"></span>
        </button>

        <div class="site-nav-menu" id="site-nav-menu">
          <div class="site-nav-item" data-nav-item data-nav-section="about">
            <a class="site-nav-trigger" href="/" data-nav-trigger aria-expanded="false" aria-controls="site-nav-about">About</a>
            <div class="site-nav-panel" id="site-nav-about" data-nav-panel>
              <div class="site-nav-panel-inner">
                <div class="site-nav-groups">
                  <div class="site-nav-group site-nav-group--primary">
                    <p>Explore</p>
                    <a href="/">Overview</a>
                    <a href="/#bio">Profile</a>
                    <a href="/#education">Education</a>
                    <a href="/#experience">Experience</a>
                  </div>
                  <div class="site-nav-group">
                    <p>Stay current</p>
                    <a href="/news/">News</a>
                    <a href="/contact/">Contact &amp; Profiles</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="site-nav-item" data-nav-item data-nav-section="projects">
            <a class="site-nav-trigger" href="/projects/" data-nav-trigger aria-expanded="false" aria-controls="site-nav-projects">Projects</a>
            <div class="site-nav-panel" id="site-nav-projects" data-nav-panel>
              <div class="site-nav-panel-inner">
                <div class="site-nav-groups">
                  <div class="site-nav-group site-nav-group--primary">
                    <p>Browse</p>
                    <a href="/projects/">All Projects</a>
                    <a href="/projects/#research-projects">Research Projects</a>
                    <a href="/projects/#technical-projects">Technical Projects</a>
                  </div>
                  <div class="site-nav-group">
                    <p>Elsewhere</p>
                    <a href="https://github.com/" target="_blank" rel="me noopener noreferrer">GitHub Repositories</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="site-nav-item" data-nav-item data-nav-section="news">
            <a class="site-nav-trigger" href="/news/" data-nav-trigger aria-expanded="false" aria-controls="site-nav-news">News</a>
            <div class="site-nav-panel" id="site-nav-news" data-nav-panel>
              <div class="site-nav-panel-inner">
                <div class="site-nav-groups">
                  <div class="site-nav-group site-nav-group--primary">
                    <p>Updates</p>
                    <a href="/news/">All News</a>
                    <a href="/#news">Latest News</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="site-nav-item" data-nav-item data-nav-section="contact">
            <a class="site-nav-trigger" href="/contact/" data-nav-trigger aria-expanded="false" aria-controls="site-nav-contact">Contact</a>
            <div class="site-nav-panel" id="site-nav-contact" data-nav-panel>
              <div class="site-nav-panel-inner">
                <div class="site-nav-groups">
                  <div class="site-nav-group site-nav-group--primary">
                    <p>Get in touch</p>
                    <a href="mailto:you@example.com">Email</a>
                    <a href="/contact/">All Profiles</a>
                  </div>
                  <div class="site-nav-group">
                    <p>Elsewhere</p>
                    <a href="https://scholar.google.com/" target="_blank" rel="me noopener noreferrer">Google Scholar</a>
                    <a href="https://github.com/" target="_blank" rel="me noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="me noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>`;

    main.before(header);
    bindNavigation(header);
    markCurrentSection(header);
  }

  function bindNavigation(header) {
    const menuToggle = header.querySelector(".site-menu-toggle");
    const items = Array.from(header.querySelectorAll("[data-nav-item]"));
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let activeItem = null;
    let closeTimer = null;

    function closeAll() {
      window.clearTimeout(closeTimer);
      header.classList.remove("has-open-panel");
      items.forEach(function (item) {
        item.classList.remove("is-open");
        item.querySelector("[data-nav-trigger]").setAttribute("aria-expanded", "false");
      });
      activeItem = null;
    }

    function setMenuState(isOpen) {
      header.classList.toggle("is-menu-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      if (!isOpen) closeAll();
    }

    function openItem(item) {
      window.clearTimeout(closeTimer);
      header.classList.add("has-open-panel");
      items.forEach(function (candidate) {
        const isActive = candidate === item;
        candidate.classList.toggle("is-open", isActive);
        candidate.querySelector("[data-nav-trigger]").setAttribute("aria-expanded", String(isActive));
      });
      activeItem = item;
    }

    function queueClose(item) {
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(function () {
        if (!item.contains(document.activeElement)) closeAll();
      }, 140);
    }

    menuToggle.addEventListener("click", function () {
      setMenuState(!header.classList.contains("is-menu-open"));
    });

    items.forEach(function (item) {
      const trigger = item.querySelector("[data-nav-trigger]");
      item.addEventListener("mouseenter", function () {
        if (finePointer.matches && window.innerWidth > 900) openItem(item);
      });
      item.addEventListener("mouseleave", function () {
        if (finePointer.matches && window.innerWidth > 900) queueClose(item);
      });
      item.addEventListener("focusin", function () {
        if (window.innerWidth > 900) openItem(item);
      });
      item.addEventListener("focusout", function () {
        if (window.innerWidth > 900) queueClose(item);
      });
      trigger.addEventListener("click", function (event) {
        if (!item.classList.contains("is-open")) {
          event.preventDefault();
          openItem(item);
          return;
        }
        setMenuState(false);
      });
    });

    header.querySelectorAll("[data-nav-panel] a").forEach(function (link) {
      link.addEventListener("click", function () { setMenuState(false); });
    });
    document.addEventListener("click", function (event) {
      if (!header.contains(event.target)) setMenuState(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape" || (!activeItem && !header.classList.contains("is-menu-open"))) return;
      const trigger = activeItem && activeItem.querySelector("[data-nav-trigger]");
      setMenuState(false);
      if (trigger) trigger.focus();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900 && header.classList.contains("is-menu-open")) setMenuState(false);
    });
  }

  function markCurrentSection(header) {
    const path = window.location.pathname;
    let section = "about";
    if (path.startsWith("/projects/")) section = "projects";
    else if (path.startsWith("/news/")) section = "news";
    else if (path.startsWith("/contact/")) section = "contact";
    const trigger = header.querySelector(`[data-nav-section="${section}"] [data-nav-trigger]`);
    if (trigger) trigger.setAttribute("aria-current", "page");
  }

  function loadFooter() {
    const script = document.createElement("script");
    script.src = "/footer/footer.js";
    script.defer = true;
    document.body.appendChild(script);
  }

  createNavigation();
  loadFooter();
})();
