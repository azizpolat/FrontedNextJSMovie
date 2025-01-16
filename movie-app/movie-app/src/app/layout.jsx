import "./globals.css";
import Headers from "@/components/Headers";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Headers />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
}
