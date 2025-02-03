import { NextResponse } from 'next/server';

let expenses: { id: number; description: string; amount: number; date: string; category: string }[] = [];

// Generate a unique ID
const generateId = () => (expenses.length ? Math.max(...expenses.map((e) => e.id)) + 1 : 1);

// Handle GET (Fetch all expenses)
export async function GET() {
  return NextResponse.json(expenses);
}

// Handle POST (Add a new expense)
export async function POST(request: Request) {
  const body = await request.json();

  if (!body.description || !body.amount || !body.date || !body.category) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  const newExpense = {
    id: generateId(),
    description: body.description,
    amount: parseFloat(body.amount),
    date: body.date,
    category: body.category,
  };

  expenses.push(newExpense);
  return NextResponse.json(newExpense);
}

// Handle DELETE (Delete an expense by ID)
export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = parseInt(url.searchParams.get('id') || '', 10);

  if (!id) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  expenses = expenses.filter((expense) => expense.id !== id);
  return NextResponse.json({ message: 'Expense deleted successfully' });
}
