import { useState } from 'react';
import { Plus, Check, Edit2, Trash2 } from 'lucide-react';

const Goals = () => {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Emergency Fund', target: 5000, current: 2000, category: 'Savings' },
    { id: 2, title: 'Debt Free', target: 10000, current: 4000, category: 'Debt' },
  ]);
  const [newGoal, setNewGoal] = useState({ title: '', target: '', category: 'Savings' });
  const [isAdding, setIsAdding] = useState(false);

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!newGoal.title || !newGoal.target) return;
    
    setGoals([...goals, {
      id: Date.now(),
      ...newGoal,
      current: 0
    }]);
    setNewGoal({ title: '', target: '', category: 'Savings' });
    setIsAdding(false);
  };

  const categories = ['Savings', 'Investment', 'Debt', 'Education', 'Other'];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Financial Goals</h1>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={20} /> Add Goal
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleAddGoal} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Goal Title"
              value={newGoal.title}
              onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="number"
              placeholder="Target Amount"
              value={newGoal.target}
              onChange={(e) => setNewGoal({ ...newGoal, target: Number(e.target.value) })}
              className="border p-2 rounded"
            />
            <select
              value={newGoal.category}
              onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
              className="border p-2 rounded"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="mt-4 flex gap-2">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Save Goal
            </button>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{goal.title}</h3>
                <span className="text-sm text-gray-500">{goal.category}</span>
              </div>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit2 size={18} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{Math.round((goal.current / goal.target) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(goal.current / goal.target) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Current: ${goal.current}</span>
              <span className="text-gray-600">Target: ${goal.target}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
