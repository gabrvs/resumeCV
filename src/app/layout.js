import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

export const metadata = {
  title: "Interaktywny Generator CV | Stwórz profesjonalne CV",
  description:
    "Twórz nowoczesne, profesjonalne CV z podglądem na żywo. Wybierz szablon, przetłumacz na język obcy i eksportuj do PDF.",
  keywords: "CV, resume, generator, kreator CV, szablon CV, PDF",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
