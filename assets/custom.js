/* ==========================================================================
   Responsive — Mobile overrides for Biom Probiotics Shopify theme
   NOTE: Section CSS loads in <body> AFTER this file (loaded in <head>),
   so we use !important on overrides that compete with section styles.

   Breakpoints:
   Mobile S  : 320px
   Mobile M  : 375px
   Mobile L  : 425px
   Tablet    : 768px
   Laptop    : 1024px
   Laptop L  : 1440px
   ========================================================================== */

/* ── Global ── */
@media screen and (max-width: 767px) {
  body {
    overflow-x: hidden;
  }

  .page-width {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
}

/* ==========================================================================
   HEADER & ANNOUNCEMENTS
   ========================================================================== */
@media screen and (max-width: 767px) {
  .header__row {
    padding: 0 !important;
  }

  .header__columns {
    display: grid !important;
    grid-template-columns: 1fr auto 1fr !important;
    align-items: center !important;
    padding: 16px 24px !important;
    --padding-block-start: 0px !important;
    --padding-block-end: 0px !important;
  }

  /* 9-dot menu icon — 32x32 with hover animation */
  .header__icon--menu {
    width: 32px !important;
    height: 32px !important;
    cursor: pointer !important;
  }

  .header__icon--menu .svg-wrapper,
  .header__icon--menu svg {
    width: 32px !important;
    height: 32px !important;
    transition: transform 0.6s ease !important;
  }

  .header__icon--menu:hover svg {
    transform: rotate(45deg) !important;
  }

  .header__icon--menu:hover svg circle {
    fill: #7aa05f !important;
  }

  /* Logo — centered, 85x47 */
  .header-logo {
    flex: 1 !important;
    display: flex !important;
    justify-content: center !important;
  }

  .header-logo img,
  .header-logo svg {
    width: 85px !important;
    height: 47px !important;
    max-height: 47px !important;
    object-fit: contain !important;
  }

  /* Right icons — search, cart, account each 23x23 */
  .header__columns .search-action {
    order: 10 !important;
  }

  .header__columns .search-action svg {
    width: 23px !important;
    height: 23px !important;
  }

  header-actions {
    order: 11 !important;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    gap: 0px !important;
  }

  header-actions svg,
  header-actions .svg-wrapper svg {
    width: 23px !important;
    height: 23px !important;
  }

  .account-button svg {
    width: 23px !important;
    height: 23px !important;
  }

  .header-logo img,
  .header-logo svg {
    max-height: 44px !important;
  }

  .header-actions-list {
    gap: 14px !important;
  }

  .header-actions-list svg {
    width: 22px !important;
    height: 22px !important;
  }

  .header__menu-btn-text {
    display: none !important;
  }

  .header__menu-btn {
    gap: 0 !important;
  }

  .header__nav-dropdown {
    display: none !important;
  }

  .header__column--right {
    flex-direction: row !important;
    gap: 14px !important;
  }

  /* Show main search on right, hide drawer duplicate */
  .search-action--hidden-on-drawer {
    display: flex !important;
  }

  .search-action--hidden-on-menu {
    display: none !important;
  }

  .header__columns .search-action {
    grid-area: rightA !important;
  }

  /* Keep 9-dot icon, hide close X completely */
  .header-drawer-icon--close {
    display: none !important;
  }

  /* Prevent details from toggling visual state */
  .header__icon--menu[aria-expanded="true"] .header-drawer-icon--open,
  details[open] .header-drawer-icon--open {
    display: flex !important;
  }

  /* Menu drawer */
  .menu-drawer {
    width: 100% !important;
    top: 0 !important;
    border-radius: 0 !important;
    padding: 20px 16px !important;
    height: 100vh !important;
    height: 100dvh !important;
  }

  .menu-drawer__heading {
    font-size: 24px !important;
  }

  .menu-drawer__link {
    font-size: 24px !important;
  }

  .menu-product-card {
    height: auto !important;
    padding: 10px 16px 10px 10px !important;
    gap: 12px !important;
  }

  .menu-product-card__thumb {
    width: 56px !important;
    height: 66px !important;
  }

  .menu-product-card__title {
    font-size: 16px !important;
    margin-bottom: 4px !important;
  }

  .menu-product-card__sub {
    font-size: 16px !important;
    font-weight: 400 !important;
    max-width: 100% !important;
  }

  .menu-drawer__ctas {
    flex-direction: column !important;
    gap: 10px !important;
  }

  .btn--bar {
    width: 100% !important;
    min-width: unset !important;
    text-align: center !important;
    justify-content: center !important;
    display: flex !important;
  }

  /* Cart drawer */
  .cart-drawer__dialog:modal {
    width: 100% !important;
    top: 0 !important;
    border-radius: 0 !important;
    height: 100vh !important;
    height: 100dvh !important;
  }

  .cart-drawer__heading {
    font-size: 28px !important;
  }

  .cart-drawer__header {
    padding: 16px !important;
    gap: 12px !important;
  }

  .cart-items__wrapper {
    margin: 0 16px !important;
    padding: 16px 0 !important;
  }

  .cart-drawer__close-button .svg-wrapper {
    width: 24px !important;
    height: 24px !important;
  }

  .button--cart__share svg {
    width: 24px !important;
    height: 24px !important;
  }
}

/* ==========================================================================
   HERO SECTION
   ========================================================================== */
@media screen and (max-width: 767px) {
  .hero {
    grid-template-columns: 1fr !important;
  }

  .hero__left {
    padding: 60px 24px 40px 24px !important;
    gap: 16px !important;
    text-align: left !important;
    min-height: auto !important;
  }

  .hero__heading {
    font-size: 30px !important;
    line-height: 1.15 !important;
    max-width: 85% !important;
    font-family: 'TT Gateral' !important;
    font-weight: 800 !important;
    color: #445438 !important;
    margin: 0 !important;
  }

  .hero__text {
    font-size: 16px !important;
    font-weight: 400 !important;
    max-width: 75% !important;
    line-height: 1.55 !important;
    color: #757575 !important;
    margin: 0 !important;
  }

  video.hero__left-bg {
    transform: scale(2.2) !important;
  }

  /* Video card */
  .hero__video-card {
    width: 100% !important;
    padding: 10px 16px 10px 10px !important;
    gap: 16px !important;
    border-radius: 14px !important;
    margin-top: 4px !important;
  }

  .hero__video-thumb {
    width: 64px !important;
    height: 64px !important;
    border-radius: 10px !important;
  }

  .hero__video-play {
    width: 26px !important;
    height: 26px !important;
  }

  .hero__video-copy {
    gap: 6px !important;
    max-width: none !important;
    flex: 1 !important;
  }

  .hero__video-title {
    font-size: 17px !important;
    font-weight: 600 !important;
    color: #1a1a2e !important;
  }

  .hero__video-sub {
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.35 !important;
    color: #757575 !important;
    text-transform: none !important;
  }

  /* Hero right panel */
  .hero__right {
    min-height: 540px !important;
    position: relative !important;
  }

  .hero__model {
    height: 95% !important;
    right: -20% !important;
    bottom: 0 !important;
  }

  .hero__panel-content {
    left: 16px !important;
    bottom: 20px !important;
    width: 75% !important;
    gap: 18px !important;
    z-index: 2 !important;
  }

  .hero__product-title {
    font-size: 22px !important;
    font-weight: 600 !important;
    color: #fff !important;
  }

  .hero__benefits {
    gap: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    max-width: 280px !important;
  }

  .hero__benefit {
    padding: 10px 0 !important;
    gap: 14px !important;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.5) !important;
    overflow: hidden !important;
  }

  .hero__benefit:last-child {
    border-bottom: 0 !important;
  }

  .hero__benefit-icon {
    width: 48px !important;
    height: 48px !important;
    background-color: #F2FEF2 !important;
    border-radius: 50% !important;
    box-shadow: -6px -6px 12px rgba(0, 0, 0, 0.08) !important;
    flex-shrink: 0 !important;
  }

  .hero__benefit-icon img,
  .hero__benefit-icon svg {
    width: 24px !important;
    height: 24px !important;
  }

  .hero__benefit-text {
    font-size: 16px !important;
    max-width: none !important;
    font-weight: 400 !important;
    color: #fff !important;
  }

  .hero__panel-content .btn {
    width: 60% !important;
    text-align: center !important;
    justify-content: center !important;
    display: flex !important;
    padding: 12px 18px!important;
    font-size: 16px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.04em !important;
    border-radius: 10px !important;
    margin-top: 4px !important;
  }

  /* Video modal */
  .hero__video-modal-content {
    width: 95vw !important;
    border-radius: 8px !important;
  }
}

/* ==========================================================================
   LEANBIOM HIGHLIGHT
   ========================================================================== */
@media screen and (max-width: 767px) {
  .leanbiom-highlight__content {
    grid-template-columns: 1fr !important;
    min-height: auto !important;
  }

  .leanbiom-highlight__media {
    order: 1 !important;
    padding: 30px 20px 0 !important;
    min-height: auto !important;
  }

  .leanbiom-highlight__media img {
    max-height: 260px !important;
    width: auto !important;
    margin: 0 auto !important;
    display: block !important;
  }

  .leanbiom-highlight__text {
    order: 2 !important;
    padding: 24px 20px 36px !important;
  }

  .leanbiom-highlight__heading {
    font-size: 26px !important;
    margin-bottom: 16px !important;
  }

  .leanbiom-highlight__benefits {
    gap: 0.5rem !important;
    margin-bottom: 20px !important;
  }

  .leanbiom-highlight__benefit {
    padding: 8px 0 !important;
  }

  .leanbiom-highlight .btn {
    width: 100% !important;
    text-align: center !important;
    display: flex !important;
    justify-content: center !important;
  }

  .hero__benefit-icon {
    width: 34px !important;
    height: 34px !important;
  }

}

/* ==========================================================================
   BENEFIT CARDS ("Microbiome Support for Real-Life Needs")
   ========================================================================== */
@media screen and (max-width: 767px) {
  .benefit-cards {
    padding: 40px 0 !important;
  }

  .benefit-cards__intro {
    margin-bottom: 24px !important;
    gap: 12px !important;
  }

  .benefit-cards__heading {
    font-size: 26px !important;
  }

  .benefit-cards__text {
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.5 !important;
  }

  .benefit-cards__grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 10px !important;
  }

  .benefit-card {
    min-height: auto !important;
    padding: 14px !important;
    gap: 16px !important;
    align-items: center !important;
    text-align: center !important;
  }

  .benefit-card__title {
    font-size: 14px !important;
    font-weight: 600 !important;
    margin-bottom: 6px !important;
  }

  .benefit-card__text {
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.4 !important;
  }

  .benefit-card .btn {
    font-size: 14px !important;
    padding: 8px 14px !important;
    align-self: center !important;
  }
}

/* ==========================================================================
   FEATURED PRODUCTS / PRODUCT CARDS
   ========================================================================== */
@media screen and (max-width: 767px) {
  .featured-products {
    padding: 40px 0 !important;
  }

  .featured-products__heading {
    font-size: 26px !important;
    margin-bottom: 24px !important;
  }

  .featureSwiper .swiper-slide {
    width: 100% !important;
    max-width: 100% !important;
    flex-shrink: 0 !important;
  }

  .product-card {
    min-height: auto !important;
    padding: 14px 14px 5rem !important;
    border-radius: 20px !important;
  }

  .product-card__badge {
    padding: 6px 10px !important;
    font-size: 12px !important;
    margin-bottom: 8px !important;
  }

  .product-card__title {
    font-size: 16px !important;
  }

  .product-card__media img {
    max-height: 180px !important;
  }

  .product-card__cta {
    bottom: 14px !important;
    height: 42px !important;
    width: calc(100% - 28px) !important;
  }

  .product-card__cta-label {
    font-size: 13px !important;
  }

  .product-card__cta-price {
    font-size: 15px !important;
  }

  /* Collection tabs */
  .collection-tabs {
    gap: 8px !important;
    padding: 10px 16px !important;
    overflow-x: auto !important;
    flex-wrap: nowrap !important;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .collection-tabs::-webkit-scrollbar {
    display: none;
  }

  .collection-tabs__tab {
    font-size: 13px !important;
    padding: 8px 14px !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
  }
}

/* ==========================================================================
   WHY BIOM COMPARISON
   ========================================================================== */
@media screen and (max-width: 767px) {
  .why-biom {
    padding: 40px 0 !important;
    border-radius: 20px 20px 0 0 !important;
  }

  .why-biom__intro {
    margin-bottom: 24px !important;
    gap: 12px !important;
  }

  .why-biom__heading {
    font-size: 26px !important;
  }

  .why-biom__text {
    font-size: 16px !important;
    font-weight: 400 !important;
  }

  .why-biom__compare {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
    justify-items: center !important;
  }

  .why-biom__visual {
    order: 0 !important;
    width: 75vw !important;
    max-width: 320px !important;
    aspect-ratio: 1 !important;
    display: flex !important;
    flex-direction: row !important;
    gap: 0 !important;
    border-radius: 50% !important;
    overflow: hidden !important;
    margin: 0 auto !important;
  }

  .why-biom__visual::after {
    display: none !important;
  }

  .probiotics_wrap,
  .biom-probiotics_wrap {
    width: 50% !important;
    height: 100% !important;
    border-radius: 0 !important;
    overflow: hidden !important;
  }

  .probiotics_wrap img,
  .biom-probiotics_wrap img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    border-radius: 0 !important;
  }

  .why-biom-card--left:before,
  .why-biom-card--left::after,
  .why-biom-card--right:before,
  .why-biom-card--right::after {
    display: none !important;
  }

  .why-biom-card {
    max-width: 100% !important;
    width: 100% !important;
    padding: 18px !important;
    gap: 14px !important;
  }

  .why-biom-card--right {
    justify-self: stretch !important;
  }

  .why-biom-card__title {
    margin: 0px;
    font-size: 24px !important;
    font-weight: 700;
  }

  .why-biom-card__rows {
    gap: 10px !important;
  }

  .why-biom-card__row {
    padding-bottom: 10px !important;
  }

  .why-biom-card__row p {
    font-size: 16px !important;
    font-weight: 400 !important;
    max-width: 100% !important;
  }

  .why-biom-card__icon img,
  .why-biom-card__icon svg {
    width: 28px !important;
    height: 28px !important;
  }

  .why-biom-card--left .why-biom-card__icon,
  .why-biom-card--right .why-biom-card__icon {
    width: 46px !important;
    height: 46px !important;
  }
}

/* ==========================================================================
   SCIENCE SPLIT ("Built on Microbiome Science")
   ========================================================================== */
@media screen and (max-width: 767px) {
  .science-split {
    grid-template-columns: 1fr !important;
    min-height: auto !important;
  }

  .science-split__media {
    min-height: 380px !important;
    position: relative !important;
  }

  .science-split__media > img {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: center top !important;
    left: 0 !important;
    top: 0 !important;
  }

  .science-split__caption {
    left: 24px !important;
    bottom: 40px !important;
    padding: 16px !important;
    border-radius: 12px !important;
  }

  .science-split__name {
    font-size: 18px !important;
  }

  .science-split__role {
    font-size: 12px !important;
  }

  .science-split__content {
    padding: 32px 20px !important;
    gap: 20px !important;
    order: 1 !important;
  }

  .science-split__heading {
    font-size: 26px !important;
  }

  .science-split__sub {
    font-size: 16px !important;
    font-weight: 400 !important;
  }

  .science-split__cards {
    gap: 14px !important;
  }

  .science-card {
    flex-direction: row !important;
    align-items: flex-start !important;
    padding: 16px !important;
    gap: 16px !important;
  }

  .science-card__icon {
    width: 64px !important;
    height: 64px !important;
    flex-shrink: 0 !important;
  }

  .science-card__body {
    gap: 10px !important;
    max-width: 100% !important;
    flex: 1 !important;
  }

  .science-card__title {
    font-size: 15px !important;
    font-weight: 700 !important;
  }

  .science-card__text {
    font-size: 16px !important;
    font-weight: 400 !important;
  }

  .science-card__tag {
    font-size: 12px !important;
    padding: 6px 12px !important;
  }
}

/* ==========================================================================
   TESTIMONIALS
   ========================================================================== */
@media screen and (max-width: 767px) {
  .testimonials {
    padding: 40px 0 32px !important;
  }

  .testimonials__heading {
    font-size: 26px !important;
    margin-bottom: 20px !important;
    padding: 0 16px !important;
  }

  .testimonial-card {
    flex: unset !important;
    width: 100% !important;
    height: 380px !important;
    border-radius: 16px !important;
  }

  .testimonial-card__name {
    top: 10px !important;
    left: 10px !important;
    padding: 4px 10px !important;
    font-size: 11px !important;
    gap: 4px !important;
  }

  .testimonial-card__play {
    width: 36px !important;
    height: 36px !important;
  }

  .testimonial-card--quote {
    background: #7AA05F !important;
  }

  .testimonial-card__panel {
    width: 90% !important;
    padding: 12px !important;
    max-height: 320px !important;
  }

  .testimonial-card__quote {
    font-size: 11px !important;
    font-weight: 400 !important;
    line-height: 1.3 !important;
  }

  .testimonial_nav {
    padding: 0 16px !important;
    margin-top: 14px !important;
    gap: 10px !important;
  }

  .testimonial_nav .swiper-button-prev,
  .testimonial_nav .swiper-button-next {
    width: 30px !important;
    height: 30px !important;
  }

  .testimonial_nav .swiper-button-prev::after,
  .testimonial_nav .swiper-button-next::after {
    font-size: 10px !important;
  }
}

/* ==========================================================================
   IMAGE BANNER ("Support Your Body. Nourish Your Microbiome.")
   ========================================================================== */
@media screen and (max-width: 767px) {
  .image-banner {
    min-height: auto !important;
    display: block !important;
    padding-bottom: 0 !important;
    position: relative !important;
    overflow: hidden !important;
    background: transparent !important;
  }

  /* Title overlays the swiper from outside */
  .image-banner__title {
    position: absolute !important;
    top: 20px !important;
    left: 16px !important;
    right: 16px !important;
    bottom: auto !important;
    font-size: 26px !important;
    line-height: 1.2 !important;
    margin: 0 !important;
    padding: 0 !important;
    mix-blend-mode: overlay !important;
    color: #f5f5f5 !important;
    z-index: 10 !important;
    pointer-events: none !important;
  }

  .image-banner-swiper {
    position: relative !important;
    height: auto !important;
    inset: auto !important;
  }

  .image-banner-swiper .swiper-slide {
    min-height: 600px !important;
    position: relative !important;
    padding: 80px 16px 30px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  .image-banner-swiper .image-banner__bg,
  .image-banner__bg {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 0 !important;
    object-fit: cover !important;
    object-position: right center !important;
  }

  .image-banner__card {
    position: relative !important;
    z-index: 2 !important;
  }

  .image-banner__card--product {
    left: auto !important;
    top: auto !important;
    margin: 0 0 16px !important;
    width: fit-content !important;
    padding: 16px 24px !important;
    align-items: center !important;
  }

  .image-banner__card--product img {
    height: 120px !important;
  }

  .image-banner__card--text {
    right: auto !important;
    top: auto !important;
    margin: 0 !important;
    width: auto !important;
    padding: 18px !important;
    gap: 14px !important;
    text-align: center !important;
  }

  .image-banner__card--text p {
    font-size: 14px !important;
    font-weight: 400 !important;
    line-height: 1.6 !important;
    text-align: center !important;
  }

  .image-banner__about-btn {
    align-self: center !important;
    margin: 0 auto !important;
  }

  .image-banner__glow {
    display: none !important;
  }
}

/* ==========================================================================
   ECOSYSTEM CTA
   ========================================================================== */
@media screen and (max-width: 767px) {
  .ecosystem-cta {
    flex-direction: row !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    min-height: auto !important;
    position: relative !important;
    padding: 40px 20px !important;
  }

  .ecosystem-cta__media {
    position: absolute !important;
    right: 0 !important;
    top: 0 !important;
    bottom: 0 !important;
    width: 45% !important;
    height: 100% !important;
    order: unset !important;
  }

  .ecosystem-cta__media img {
    object-position: center !important;
    object-fit: contain !important;
    width: 100% !important;
    height: 100% !important;
  }

  .ecosystem-cta__content {
    padding: 0 !important;
    gap: 14px !important;
    max-width: 60% !important;
    position: relative !important;
    z-index: 1 !important;
  }

  .ecosystem-cta__heading {
    font-size: 26px !important;
    line-height: 1.25 !important;
  }

  .ecosystem-cta__text {
    font-size: 14px !important;
    font-weight: 400 !important;
    max-width: 100% !important;
  }

  .ecosystem-cta__btn {
    width: fit-content !important;
    text-align: center !important;
    display: flex !important;
    justify-content: center !important;
  }
}

/* ==========================================================================
   CTA BAND
   ========================================================================== */
@media screen and (max-width: 767px) {
  .cta-band {
    padding: 36px 16px !important;
  }

  .cta-band__heading {
    font-size: 26px !important;
    margin-bottom: 10px !important;
  }

  .cta-band__text {
    font-size: 16px !important;
    font-weight: 400 !important;
    margin-bottom: 18px !important;
  }

  .cta-band__buttons {
    flex-direction: column !important;
    gap: 10px !important;
  }

  .cta-band__buttons .btn {
    width: 100% !important;
    text-align: center !important;
    justify-content: center !important;
    display: flex !important;
  }
}

/* ==========================================================================
   FOOTER
   ========================================================================== */
@media screen and (max-width: 767px) {
  .footer-content {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }

  .footer-content > * {
    text-align: left !important;
  }

  footer .social-icons {
    justify-content: center !important;
    gap: 16px !important;
  }
}

/* Footer utilities / disclaimer — fix text overflow on all breakpoints */
.footer-utilities .utilities {
  text-wrap: wrap !important;
  white-space: normal !important;
}

.footer-utilities .utilities > * {
  white-space: normal !important;
  text-wrap: wrap !important;
  word-break: break-word !important;
  overflow-wrap: break-word !important;
}

@media screen and (max-width: 1023px) {
  .footer-utilities .utilities {
    display: flex !important;
    flex-direction: column !important;
    text-align: center !important;
  }

  .footer-utilities .utilities > * {
    text-align: center !important;
    max-width: 100% !important;
  }
}

@media screen and (max-width: 767px) {
  .footer-utilities .utilities {
    padding: 16px !important;
  }

  .footer-utilities .utilities > * {
    font-size: 12px !important;
    line-height: 1.5 !important;
  }
}

/* ==========================================================================
   COLLECTION PAGE (product grid)
   ========================================================================== */
@media screen and (max-width: 767px) {
  .product-grid-collection .product-card {
    min-height: auto !important;
    padding: 12px 12px 4rem !important;
    border-radius: 20px !important;
  }

  .product-grid-collection .product-card__badge {
    font-size: 12px !important;
    padding: 5px 8px !important;
    margin-bottom: 8px !important;
  }

  .product-grid-collection .product-card__title {
    font-size: 15px !important;
  }

  .product-grid-collection .product-card__media img {
    max-height: 160px !important;
  }

  .product-grid-collection .product-card__cta {
    height: 40px !important;
    bottom: 12px !important;
  }

  .product-grid-collection .product-card__cta-label {
    font-size: 12px !important;
  }

  .product-grid-collection .product-card__cta-price {
    font-size: 15px !important;
  }

  .product-grid--template--21045656912007__main:is(.product-grid--grid) {
    --product-grid-columns-desktop: repeat(2, 1fr) !important;
  }

  .facets__summary {
    padding: 12px !important;
    font-size: 13px !important;
  }
}

/* ==========================================================================
   MARQUEE
   ========================================================================== */
@media screen and (max-width: 767px) {
  marquee-component {
    font-size: 14px !important;
  }
}

/* ==========================================================================
   GLOBAL BUTTONS
   ========================================================================== */
@media screen and (max-width: 767px) {
  .btn {
    padding: 12px 22px !important;
    font-size: 14px !important;
  }

  .shopify-payment-button__button {
    border-radius: 10px !important;
    padding: 12px 20px !important;
    font-size: 14px !important;
  }
}

/* ==========================================================================
   CONTENT BANDS (page-hero, cards-trio, steps-strip, faq-grid)
   ========================================================================== */
@media screen and (max-width: 767px) {
  .page-hero__grid {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }

  .page-hero__heading {
    font-size: 26px !important;
  }

  .cards-trio__grid {
    grid-template-columns: 1fr !important;
  }

  .cards-trio__heading {
    font-size: 26px !important;
  }

  .steps-strip {
    grid-template-columns: 1fr !important;
  }

  .faq-grid__cards {
    grid-template-columns: 1fr !important;
  }

  .faq-grid__heading {
    font-size: 26px !important;
  }
}

/* ==========================================================================
   MEDIA WITH CONTENT SECTION
   ========================================================================== */
@media screen and (max-width: 767px) {
  .media-with-content__grid {
    grid-template-columns: 1fr !important;
  }
}

/* ==========================================================================
   ANNOUNCEMENT BAR
   ========================================================================== */
@media screen and (max-width: 767px) {
  .header-announcements .announcement__text,
  .announcement__text {
    font-size: 11px !important;
  }
}

/* ==========================================================================
   LAYERED SLIDESHOW
   ========================================================================== */
@media screen and (max-width: 767px) {
  .layered-slideshow {
    min-height: auto !important;
  }
}

/* ==========================================================================
   TABLET (768px – 1023px)
   ========================================================================== */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .hero__heading {
    font-size: 36px !important;
  }

  .hero__right {
    min-height: 440px !important;
  }

  .hero__model {
    height: 100% !important;
    right: -8% !important;
  }

  .hero__panel-content {
    width: min(320px, 55%) !important;
  }

  .benefit-cards {
    padding: 60px 0 !important;
  }

  .benefit-cards__grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  .featured-products {
    padding: 60px 0 !important;
  }

  .why-biom {
    padding: 60px 0 !important;
  }

  .why-biom__compare {
    gap: 16px !important;
  }

  .why-biom-card {
    max-width: 100% !important;
  }

  .why-biom-card--left:before,
  .why-biom-card--left::after,
  .why-biom-card--right:before,
  .why-biom-card--right::after {
    display: none !important;
  }

  .science-split__content {
    padding: 48px 32px !important;
  }

  .testimonials {
    padding: 60px 0 !important;
  }

  .ecosystem-cta__heading {
    font-size: 28px !important;
  }

  .ecosystem-cta__media {
    width: 40% !important;
  }
}

/* ==========================================================================
   MOBILE L (426px – 767px)
   ========================================================================== */
@media screen and (min-width: 426px) and (max-width: 767px) {
  .hero__right {
    min-height: 490px !important;
    
  }

  .hero__panel-content {
    width: 70% !important;
    margin-bottom: 20px !important;
  }
}

/* ==========================================================================
   MOBILE M (376px – 425px)  — default mobile styles above cover this
   ========================================================================== */

/* ==========================================================================
   MOBILE M & S (≤375px)
   ========================================================================== */
@media screen and (max-width: 375px) {
  .hero__heading {
    font-size: 22px !important;
  }

  .hero__right {
    min-height: 480px !important;
  }

  .hero__panel-content {
    left: 14px !important;
    bottom: 16px !important;
    width: 72% !important;
    gap: 12px !important;
  }

  .hero__product-title {
    font-size: 18px !important;
  }

  .hero__benefit {
    padding: 7px 0 !important;
    gap: 10px !important;
  }

  .hero__benefit-text {
    font-size: 14px !important;
  }

  .hero__benefit-icon {
    width: 40px !important;
    height: 40px !important;
  }

  .hero__benefit-icon img,
  .hero__benefit-icon svg {
    width: 20px !important;
    height: 20px !important;
  }

  .hero__panel-content .btn {
    padding: 12px 12px !important;
    font-size: 14px !important;
  }

  .benefit-cards__heading {
    font-size: 22px !important;
  }

  .benefit-cards__grid {
    grid-template-columns: 1fr !important;
  }

  .why-biom__heading {
    font-size: 22px !important;
  }

  .ecosystem-cta__heading {
    font-size: 22px !important;
  }

  .science-split__heading {
    font-size: 22px !important;
    text-align: center !important;
  }

  .testimonials__heading {
    font-size: 22px !important;
  }

  .image-banner__title {
    font-size: 22px !important;
  }
}

/* ==========================================================================
   MOBILE S (≤320px)
   ========================================================================== */
@media screen and (max-width: 320px) {
  .hero__heading {
    font-size: 30px !important;
    font-weight: 700 !important;
  }

  .hero__right {
    min-height: 335px !important;
  }

  .hero__panel-content {
    gap: 10px !important;
    width: 78% !important;
  }

  .hero__product-title {
    font-size: 16px !important;
  }

  .hero__benefit {
    padding: 5px 0 !important;
    gap: 8px !important;
  }

  .hero__benefit-icon {
    width: 34px !important;
    height: 34px !important;
  }

  .hero__benefit-icon img,
  .hero__benefit-icon svg {
    width: 17px !important;
    height: 17px !important;
  }

  .hero__benefit-text {
    font-size: 12px !important;
  }

  .hero__panel-content .btn {
    padding: 10px 16px !important;
    font-size: 13px !important;
  }

  .benefit-cards__heading {
    font-size: 20px !important;
  }

  .science-card {
    display: block !important;
  }
}
