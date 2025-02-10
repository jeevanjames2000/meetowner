import "./globals.css";
import "./responsive.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Meet Owner Seller Panel",
  description: "Meet Owner Seller Panel is a platform for sellers to list their properties for rent or sale.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
        
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P8HMN9BJ');
          `
        }} />
        {/* End Google Tag Manager */}

        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBmei9lRUUfJI-kLIPNBoc2SxEkwhKHyvU&libraries=places"
          async
          defer
        ></script>
      </head>
      <body>
        
        <ToastContainer />
        {children}
        {/* Google Tag Manager (noscript) */}
        {/* <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P8HMN9BJ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript> */}
        {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
  );
}
