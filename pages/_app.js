import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.min.css";
import "swiper/swiper-bundle.min.css";
import "typeface-barlow";
import "typeface-prata";
import "../assets/css/animate.min.css";
import "../assets/css/piloz-icons.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZN0Y3Z0XPW"></script>
      <script
        dangerouslySetInnerHTML={
          {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZN0Y3Z0XPW');
            `,
          }
        }
      />
      <Component {...pageProps} />
    </>
  );
}
