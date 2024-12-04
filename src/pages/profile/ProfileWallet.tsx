import React from 'react';
import { Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function ProfileWallet() {
  const transactions = [
    {
      id: 1,
      type: 'deposit',
      amount: 5000,
      token: 'USDT',
      date: '2024-02-20',
      status: 'completed'
    },
    {
      id: 2,
      type: 'investment',
      amount: 2500,
      token: 'DFX',
      date: '2024-02-19',
      status: 'completed'
    },
    {
      id: 3,
      type: 'deposit',
      amount: 3000,
      token: 'USDC',
      date: '2024-02-18',
      status: 'pending'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Funds
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow p-6 text-white">
          <h3 className="text-lg font-medium mb-4">Available Balance</h3>
          <p className="text-3xl font-bold mb-4">$8,500.00</p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50">
              Deposit
            </button>
            <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-300">
              Withdraw
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Token Balances</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-medium">U</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">USDT</p>
                  <p className="text-sm text-gray-500">Tether USD</p>
                </div>
              </div>
              <p className="font-medium text-gray-900">5,000.00</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-medium">D</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">DFX</p>
                  <p className="text-sm text-gray-500">DefiChain</p>
                </div>
              </div>
              <p className="font-medium text-gray-900">2,500.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  {transaction.type === 'deposit' ? (
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <ArrowDownRight className="w-4 h-4 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-blue-600" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-gray-900 capitalize">
                      {transaction.type}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    {transaction.amount.toLocaleString()} {transaction.token}
                  </p>
                  <p className={`text-sm ${
                    transaction.status === 'completed' ? 'text-green-500' : 'text-yellow-500'
                  } capitalize`}>
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}