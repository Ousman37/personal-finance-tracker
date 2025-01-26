'use client';

import { useEffect, useState } from 'react';

type Expense = {
  id: number;
  description: string;
  amount: number;
  date: string;
};

export default function Expenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch('/api/expenses');
      const data = await response.json();
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  const deleteExpense = async (id: number) => {
    const response = await fetch(`/api/expenses/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setExpenses(expenses.filter((expense) => expense.id !== id));
    } else {
      alert('Error deleting expense');
    }
  };

  return (
    <div>
      <h1>Expenses</h1>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - ${expense.amount} ({expense.date})
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
