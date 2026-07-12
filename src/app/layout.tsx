import { TildaHead } from "@/components/TildaHead";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TildaHead />
      <body className="t-body" style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
