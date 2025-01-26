'use client';

import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/expenses">View Expenses</Link>
          </li>
          <li>
            <Link href="/add-expense">Add Expense</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
