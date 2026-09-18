import "./globals.css";

export const metadata = {
  title: "Snap2Green",
  description: "Know your carbon footprint from one photo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
