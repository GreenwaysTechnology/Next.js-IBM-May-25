import "./globals.css";

//SEO Meta 
export const metadata = {
  title: "IBM",
  description: "IBM is leading Software Consulting Firm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
