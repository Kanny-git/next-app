import "./globals.css";
import Header from "./_componetnts/Header";
import Footer from "./_componetnts/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />{
          children
        }
        <Footer/>
      </body>
    </html>
  );
}
