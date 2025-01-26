

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center p-8 sm:p-20">
      {/* Hero Section */}
      <h1 className="text-blue-600 text-4xl font-bold">
        Take Control of Your Finances
      </h1>
      <p className="text-gray-700 text-lg max-w-2xl">
        Welcome to the Personal Finance Tracker app! Track your expenses, set budgets, and simplify your financial planning with ease.
      </p>

      {/* Call-to-Actions */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="/dashboard"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
        >
          View Your Expenses
        </a>
        <a
          href="/add-expense"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Add a New Expense
        </a>
      </div>

      {/* Features Section */}
      <section className="mt-16 max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800">Why Use Our App?</h2>
        <ul className="mt-4 space-y-4 text-gray-600">
          <li>
            💰 <strong>Track Expenses:</strong> Easily keep track of where your money goes.
          </li>
          <li>
            📊 <strong>Set Budgets:</strong> Create and monitor budgets to achieve your financial goals.
          </li>
          <li>
            🕒 <strong>Save Time:</strong> Spend less time managing finances and more time enjoying life.
          </li>
        </ul>
      </section>
    </div>
  );
}

