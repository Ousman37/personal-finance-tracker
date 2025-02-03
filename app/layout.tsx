import Header from '@/components/Header'
import Footer from '@/components/Footer';
import './globals.css';


export const metadata = {
  title: "BudgetFlow - Manage Your Expenses",
  description: "Track your expenses and budget efficiently with the BudgetFlow app. Simplify your financial management.",
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
