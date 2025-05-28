import NavBar from "@/app/components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Site Header</h1>
          {/* Nav Bar */}
          <NavBar />
        </div>
        <div>
          {children}
        </div>
        <div>
          <h1>Site Footer</h1>
        </div>
      </body>
    </html>
  );
}
