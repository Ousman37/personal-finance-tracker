import { GetServerSideProps } from 'next';
import CustomChart from '@/components/CustomChart';
import ExpenseForm from '@/components/ExpenseForm';
import ExpenseList from '@/components/ExpenseList';
import { useState } from 'react';

type Expense = {
  id: number;
  description: string;
  amount: number;
  date: string;
  category: string;
};

type ExpensesPageProps = {
  initialExpenses: Expense[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/expenses'); // Adjust your API URL
  const initialExpenses = await response.json();
  return {
    props: { initialExpenses },
  };
};

export default function ExpensesPage({ initialExpenses }: ExpensesPageProps) {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);

  const addExpense = async (expense: { description: string; amount: number; date: string; category: string }) => {
    const response = await fetch('/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense),
    });
    if (response.ok) {
      const newExpense = await response.json();
      setExpenses((prev) => [...prev, newExpense]);
    } else {
      alert('Error adding expense');
    }
  };

  const deleteExpense = async (id: number) => {
    const response = await fetch(`/api/expenses/${id}`, { method: 'DELETE' });
    if (response.ok) {
      setExpenses(expenses.filter((expense) => expense.id !== id));
    } else {
      alert('Error deleting expense');
    }
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Manage Expenses</h1>
      <ExpenseForm onSubmit={addExpense} />
      <CustomChart expenses={expenses} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}
// 'use client';
// import { useEffect, useState } from 'react';
// import CustomChart from '@/components/CustomChart';
// import ExpenseForm from '@/components/ExpenseForm';
// import ExpenseList from '@/components/ExpenseList';

// type Expense = {
//   id: number;
//   description: string;
//   amount: number;
//   date: string;
//   category: string;
// };

// export default function ExpensesPage() {
//   const [expenses, setExpenses] = useState<Expense[]>([]);

//   useEffect(() => {
//     const fetchExpenses = async () => {
//       const response = await fetch('/api/expenses');
//       const data = await response.json();
//       setExpenses(data);
//     };
//     fetchExpenses();
//   }, []);

//   const addExpense = async (expense: { description: string; amount: number; date: string; category: string }) => {
//     const response = await fetch('/api/expenses', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(expense),
//     });
//     if (response.ok) {
//       const newExpense = await response.json();
//       setExpenses((prev) => [...prev, newExpense]);
//     } else {
//       alert('Error adding expense');
//     }
//   };

//   const deleteExpense = async (id: number) => {
//     const response = await fetch(`/api/expenses/${id}`, { method: 'DELETE' });
//     if (response.ok) {
//       setExpenses(expenses.filter((expense) => expense.id !== id));
//     } else {
//       alert('Error deleting expense');
//     }
//   };

//   return (
//     <div className="p-8 space-y-8">
//       <h1 className="text-3xl font-bold">Manage Expenses</h1>
//       <ExpenseForm onSubmit={addExpense} />
//       <CustomChart expenses={expenses} />
//       <ExpenseList expenses={expenses} onDelete={deleteExpense} />
//     </div>
//   );
// }


