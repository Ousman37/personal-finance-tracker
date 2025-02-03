'use client';

import ExpenseForm from '@/components/ExpenseForm';

export default function AddExpensePage() {
  const handleAddExpense = async (expense: { description: string; amount: number; date: string }) => {
    const response = await fetch('/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense),
    });
    if (response.ok) {
      alert('Expense added!');
    } else {
      alert('Error adding expense');
    }
  };

  return (
    <div className="p-8">
      <ExpenseForm onSubmit={handleAddExpense} />
    </div>
  );
}
