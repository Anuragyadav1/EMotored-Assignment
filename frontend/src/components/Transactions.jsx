import React from "react";

export default function Transactions() {
  const transactions = [
    { id: 1, date: "2024-02-20", amount: "$500", status: "Completed", user: "John Doe" },
    { id: 2, date: "2024-02-18", amount: "$250", status: "Pending", user: "Jane Smith" },
    { id: 3, date: "2024-02-15", amount: "$1000", status: "Failed", user: "David Brown" },
    { id: 4, date: "2024-02-10", amount: "$320", status: "Completed", user: "Emily Clark" },
    { id: 5, date: "2024-02-08", amount: "$780", status: "Pending", user: "Michael Johnson" },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm sm:text-base">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b">
                <td className="p-3">{transaction.id}</td>
                <td className="p-3">{transaction.date}</td>
                <td className="p-3">{transaction.user}</td>
                <td className="p-3">{transaction.amount}</td>
                <td className={`p-3 font-semibold ${getStatusColor(transaction.status)}`}>
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Function to apply color styling based on status
function getStatusColor(status) {
  switch (status) {
    case "Completed":
      return "text-green-600";
    case "Pending":
      return "text-yellow-600";
    case "Failed":
      return "text-red-600";
    default:
      return "";
  }
}
