(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const header = document.getElementById("site-header");
  const navToggle = document.getElementById("nav-toggle");
  const navigation = document.getElementById("primary-navigation");
  const menuLabel = document.getElementById("menu-label");
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));

  // The year is generated locally; no network request or tracking is used.
  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Accessible mobile navigation. Without JavaScript, all links remain visible.
  const setMenu = (open, returnFocus = false) => {
    if (!navToggle || !navigation || !menuLabel) return;
    navToggle.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
    menuLabel.textContent = open ? "Close navigation menu" : "Open navigation menu";
    if (returnFocus) navToggle.focus();
  };

  if (navToggle && navigation) {
    navToggle.addEventListener("click", () => {
      setMenu(navToggle.getAttribute("aria-expanded") !== "true");
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("click", (event) => {
      if (
        navToggle.getAttribute("aria-expanded") === "true" &&
        header &&
        !header.contains(event.target)
      ) {
        setMenu(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        setMenu(false, true);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 900) setMenu(false);
    });
  }

  // Sticky-header treatment and active-section indication share one lightweight scroll callback.
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  let scrollTicking = false;

  const setActiveLink = (activeSection) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${activeSection.id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const updatePageState = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
    if (sections.length) {
      const marker = window.scrollY + (header?.offsetHeight || 0) + window.innerHeight * 0.24;
      let activeSection = sections[0];
      sections.forEach((section) => {
        if (section.offsetTop <= marker) activeSection = section;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        activeSection = sections[sections.length - 1];
      }
      setActiveLink(activeSection);
    }
    scrollTicking = false;
  };

  const requestPageUpdate = () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updatePageState);
      scrollTicking = true;
    }
  };

  window.addEventListener("scroll", requestPageUpdate, { passive: true });
  window.addEventListener("resize", requestPageUpdate);
  updatePageState();

  // Project filters are an enhancement. Without JavaScript, the controls stay hidden
  // and every project remains visible.
  const filters = document.getElementById("project-filters");
  const projectCards = Array.from(document.querySelectorAll(".project-card[data-category]"));
  const filterStatus = document.getElementById("filter-status");

  if (filters && projectCards.length) {
    filters.hidden = false;
    const filterButtons = Array.from(filters.querySelectorAll("button[data-filter]"));

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.dataset.filter;
        let visibleCount = 0;

        filterButtons.forEach((item) => {
          const selected = item === button;
          item.classList.toggle("is-active", selected);
          item.setAttribute("aria-pressed", String(selected));
        });

        projectCards.forEach((card) => {
          const show = category === "all" || card.dataset.category === category;
          card.hidden = !show;
          if (show) {
            visibleCount += 1;
            if (!reducedMotion.matches && typeof card.animate === "function") {
              card.animate(
                [
                  { opacity: 0, transform: "translateY(8px) scale(0.99)" },
                  { opacity: 1, transform: "translateY(0) scale(1)" }
                ],
                { duration: 240, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
              );
            }
          }
        });

        if (filterStatus) {
          const label = category === "all" ? "all categories" : button.textContent.trim();
          filterStatus.textContent = `Showing ${visibleCount} project${visibleCount === 1 ? "" : "s"} in ${label}.`;
        }
      });
    });
  }

  // Reveal effects never control content visibility. Elements are visible by default,
  // then receive a short Web Animations API entrance as they enter the viewport.
  if (!reducedMotion.matches && "IntersectionObserver" in window && Element.prototype.animate) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.animate(
            [
              { opacity: 0, transform: "translateY(18px) scale(0.99)" },
              { opacity: 1, transform: "translateY(0) scale(1)" }
            ],
            { duration: 480, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
  }
})();
