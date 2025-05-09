
// import { GeistSans } from "next/font/google"; // Use GeistSans for variable font
// import "./globals.css"; // Uncomment if using global styles

// const geist = GeistSans({
//   subsets: ["latin"],
//   variable: "--font-geist-sans",
// });

// export const metadata = {
//   title: "Form",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ " w-screen h-screen flex justify-center items-center bg-[#F4F4F4]"}
      >
        {children}
      </body>
    </html>
  );
}

// import { Geist, Geist_Mono } from "next/font/google";
// // import "./globals.css";



// export const metadata = {
//   title: "Form",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={ "antialiased w-screen h-screen flex justify-center items-center relative bg-[#F4F4F4]"}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
