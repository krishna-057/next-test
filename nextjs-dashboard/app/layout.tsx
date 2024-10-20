import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor:"cyan", padding:"1rem",}}>Header boy</header>
        {children}
        <footer style={{backgroundColor:"yellow", padding:"1rem",}}>Footer babu</footer>
        </body>
    </html>
  );
}