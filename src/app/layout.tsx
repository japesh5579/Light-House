import { TildaHead } from "@/components/TildaHead";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <TildaHead />
      </head>
      <body className="t-body" style={{ margin: 0 }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
