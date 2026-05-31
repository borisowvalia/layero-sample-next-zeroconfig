export const metadata = { title: "Layero Next zero-config SSR" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
