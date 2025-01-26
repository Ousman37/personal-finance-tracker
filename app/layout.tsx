import Header from '@/components/Header'
import Footer from '@/components/Footer';
import './globals.css';



export const metadata = {
  title: "Personal Finance Tracker - Manage Your Expenses",
  description: "Track your expenses and budget efficiently with the Personal Finance Tracker app. Simplify your financial management.",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
