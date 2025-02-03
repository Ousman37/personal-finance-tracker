'use client';

import { useState } from 'react';

type Expense = {
  id: number;
  description: string;
  amount: number;
  date: string;
  category: string;
};

type ExpenseListProps = {
  expenses: Expense[];
  onDelete: (id: number) => void;
};

export default function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  const [filter, setFilter] = useState('');

  const filteredExpenses = expenses.filter(
    (expense) => !filter || expense.category === filter
  );

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Filter by Category:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Rent">Rent</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <ul className="space-y-4">
        {filteredExpenses.map((expense) => (
          <li
            key={expense.id}
            className="flex justify-between items-center p-4 border rounded-md bg-gray-50"
          >
            <div>
              <p className="font-medium">{expense.description}</p>
              <p className="text-sm text-gray-600">
                ${expense.amount} - {new Date(expense.date).toLocaleDateString()} ({expense.category})
              </p>
            </div>
            <button
              onClick={() => onDelete(expense.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
