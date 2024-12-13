import "./globals.css";
import "./responsive.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "MEETOWNER SELLER PANEL",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
