import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center p-8 sm:p-20 bg-gradient-to-br from-primary to-accent text-white min-h-screen">
      {/* Hero Section */}
      <h1 className="text-secondary text-4xl font-bold">
        Take Control of Your Finances
      </h1>
      <p className="text-lg max-w-2xl text-white/90">
        Welcome to the Personal Finance Tracker app! Track your expenses, set budgets, and simplify your financial planning with ease.
      </p>

      {/* Call-to-Actions */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/dashboard"
          className="bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-200"
        >
          View Your Expenses
        </Link>
        <Link
          href="/add-expense"
          className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-200"
        >
          Add a New Expense
        </Link>
        <Link
          href="/signup"
          className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-200"
        >
          Create an Account
        </Link>
      </div>

      {/* Features Section */}
      <section className="mt-16 max-w-4xl bg-white/10 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-white">Why Use Our App?</h2>
        <ul className="mt-4 space-y-4 text-white/80">
          <li>💰 <strong>Track Expenses:</strong> Easily keep track of where your money goes.</li>
          <li>📊 <strong>Set Budgets:</strong> Create and monitor budgets to achieve your financial goals.</li>
          <li>🕒 <strong>Save Time:</strong> Spend less time managing finances and more time enjoying life.</li>
          <li>🔒 <strong>Secure:</strong> Your financial data is encrypted and stored safely.</li>
          <li>🌍 <strong>Accessible:</strong> Manage your finances anywhere, anytime, from any device.</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="mt-16 max-w-4xl text-left">
        <h2 className="text-2xl font-semibold text-white text-center">What Our Users Say</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <blockquote className="p-4 border-l-4 border-secondary bg-white/10 rounded-lg">
            <p className="text-white/90 italic">
              &quot;This app has completely transformed the way I manage my budget. I’ve saved so much money since I started using it!&quot;
            </p>
            <footer className="mt-4 text-sm font-semibold text-white">– Sarah, Freelancer</footer>
          </blockquote>
          <blockquote className="p-4 border-l-4 border-secondary bg-white/10 rounded-lg">
            <p className="text-white/90 italic">
              &quot;Tracking expenses has never been easier. I love the simplicity and the detailed insights this app provides.&quot;
            </p>
            <footer className="mt-4 text-sm font-semibold text-white">– John, Small Business Owner</footer>
          </blockquote>
        </div>
      </section>

      {/* Security Section */}
      <section className="mt-16 max-w-4xl text-left">
        <h2 className="text-2xl font-semibold text-white text-center">Your Security, Our Priority</h2>
        <p className="text-white/90 mt-4 text-center">
          We use industry-standard encryption to ensure your financial data is safe and secure.
          You can focus on managing your finances without worrying about data breaches.
        </p>
      </section>

      {/* Final Call-to-Action */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-white">Ready to Take Control?</h2>
        <p className="text-white/90 mt-4 max-w-2xl mx-auto">
          Start managing your expenses today and achieve your financial goals. Join thousands of users already using the Personal Finance Tracker app!
        </p>
        <div className="mt-8">
          <Link
            href="/signup"
            className="inline-block bg-secondary text-primary px-8 py-4 text-lg font-semibold rounded-lg hover:bg-yellow-400 transition duration-200"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}

