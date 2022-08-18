import NavBar from "../components/navbar";
import Head from "next/head";
import Script from "next/script";

export default function AdminDashboard() {
  return (
    <body>
      <NavBar />
      <main>Hello</main>
    </body>
  );
}

// {/* <!-- Google tag (gtag.js) --> */}
//           <Script
//             src="https://www.googletagmanager.com/gtag/js?id=G-K87HSVX1J2"
//             strategy="afterInteractive"
//           />
//           <Script id="google-analytics" strategy="afterInteractive">
//             {`
//               window.dataLayer = window.dataLayer || [];
//             function gtag(){
//               dataLayer.push(arguments);
//             }
//             gtag('js', new Date());

//                 gtag('config', 'G-K87HSVX1J2');
//             `}
//           </Script>
