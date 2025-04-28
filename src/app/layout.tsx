import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FooterComponent from "./components/Footer";  // Asegúrate de importar el FooterComponent

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Laboratorio de Prácticas",
  description: "Laboratorio de Prácticas para el desarrollo de habilidades cognitivas, matemáticas y razonamiento verbal",
};

/**
 *
 * @param param0 Takes a component as a child and returns the 
 * layout for the entire application. Which in this case is the 
 * main page component. 
 * @returns Root layout component which wraps the entire website.
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="flex flex-col flex-1">
          {/* Contenido principal de la página */}

          <main className="flex-1">
            {children}
          </main>

        </div>
        <FooterComponent />

      </body>
    </html>
  );
}

