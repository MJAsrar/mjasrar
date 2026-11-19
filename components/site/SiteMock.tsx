import { WhatsApp } from "./Icons";

// A generic small-business website drawn in a browser frame, for the websites landing page.
// Illustrative only: "Your Business" stands in for the client's name.
export default function SiteMock() {
  return (
    <figure className="site-mock">
      <div className="sm-window">
        <div className="sm-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>yourbusiness.ae</span>
        </div>
        <div className="sm-page" aria-hidden="true">
          <div className="sm-nav">
            <b>Your Business</b>
            <span>Home</span>
            <span>Services</span>
            <span>Gallery</span>
            <span>Contact</span>
          </div>
          <div className="sm-hero">
            <p className="sm-rating">★★★★★ 4.8 · 200+ Google reviews</p>
            <p className="sm-title">Car rental in Sharjah, delivered to your door.</p>
            <p className="sm-sub">Daily and monthly rentals. Airport delivery. Clear prices in AED.</p>
            <div className="sm-ctas">
              <span className="sm-wa">
                <WhatsApp /> Book on WhatsApp
              </span>
              <span className="sm-call">Call now</span>
            </div>
          </div>
          <div className="sm-cards">
            <span>
              <b>Daily</b>from AED 99
            </span>
            <span>
              <b>Monthly</b>from AED 1,800
            </span>
            <span>
              <b>Airport</b>free delivery
            </span>
          </div>
          <span className="sm-float">
            <WhatsApp />
          </span>
        </div>
      </div>
      <figcaption>Illustration: your reviews, your services and WhatsApp one tap away on every page.</figcaption>
    </figure>
  );
}
