import React from 'react';

export function InvestmentFlowchart() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px] p-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Step 1 */}
          <div className="w-48 p-3 bg-blue-50 border-2 border-blue-200 rounded-lg text-center">
            <p className="font-medium text-blue-800">Research Project</p>
          </div>
          <div className="h-8 w-0.5 bg-blue-200" />
          
          {/* Step 2 */}
          <div className="flex items-center justify-center w-full space-x-8">
            <div className="w-48 p-3 bg-green-50 border-2 border-green-200 rounded-lg text-center">
              <p className="font-medium text-green-800">Complete KYC</p>
            </div>
            <div className="w-48 p-3 bg-purple-50 border-2 border-purple-200 rounded-lg text-center">
              <p className="font-medium text-purple-800">Connect Wallet</p>
            </div>
          </div>
          <div className="h-8 w-0.5 bg-blue-200" />
          
          {/* Step 3 */}
          <div className="w-48 p-3 bg-orange-50 border-2 border-orange-200 rounded-lg text-center">
            <p className="font-medium text-orange-800">Fund Account</p>
          </div>
          <div className="h-8 w-0.5 bg-blue-200" />
          
          {/* Step 4 */}
          <div className="w-48 p-3 bg-red-50 border-2 border-red-200 rounded-lg text-center">
            <p className="font-medium text-red-800">Participate in Launch</p>
          </div>
          <div className="h-8 w-0.5 bg-blue-200" />
          
          {/* Step 5 */}
          <div className="w-48 p-3 bg-indigo-50 border-2 border-indigo-200 rounded-lg text-center">
            <p className="font-medium text-indigo-800">Receive Tokens</p>
          </div>
        </div>
      </div>
    </div>
  );
}