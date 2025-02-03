'use client';

import { useState } from 'react';

type ExpenseFormProps = {
  onSubmit: (expense: { description: string; amount: number; date: string; category: string }) => void;
};

export default function ExpenseForm({ onSubmit }: ExpenseFormProps) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!description || parseFloat(amount) <= 0 || !date || !category) {
      alert('Please fill out all fields correctly!');
      return;
    }

    setLoading(true);
    await onSubmit({ description, amount: parseFloat(amount), date, category });
    setLoading(false);

    // Reset form fields
    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-md bg-gray-100">
      <h1 className="text-2xl font-bold mb-2">Add Expense</h1>
      <div>
        <label className="block text-sm font-medium">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Rent">Rent</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`bg-blue-500 text-white py-2 px-4 rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
        }`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
// 'use client';

// import { useState } from 'react';

// type ExpenseFormProps = {
//   onSubmit: (expense: { description: string; amount: number; date: string }) => void;
// };

// export default function ExpenseForm({ onSubmit }: ExpenseFormProps) {
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');
//   const [date, setDate] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit({ description, amount: parseFloat(amount), date });
//     setDescription('');
//     setAmount('');
//     setDate('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-md bg-gray-100">
//       <div>
//         <label className="block text-sm font-medium">Description:</label>
//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium">Amount:</label>
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium">Date:</label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//         Submit
//       </button>
//     </form>
//   );
// }
