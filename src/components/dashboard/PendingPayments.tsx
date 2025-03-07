import{ useState, useEffect, Fragment } from "react";
import { filterPendingPaymentsForToday, groupByCollaborator } from "helpers";
import type { PendingPayments } from "components/reports/ControlBalance/type";

const PendingPaymentsPanel = () => {
  const [payments, setPayments] = useState<PendingPayments[]>([]);
  const [groupedPayments, setGroupedPayments] = useState<Record<string, PendingPayments[]>>({});

  const todayPayments = filterPendingPaymentsForToday(payments);
  useEffect(() => {
    const grouped = groupByCollaborator(todayPayments);
    setGroupedPayments(grouped);
  }, [payments]);

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0]; // Formato: YYYY-MM-DD
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Cuotas pendientes para hoy</h2>

      <div className="overflow-x-auto bg-gray-800 p-4 rounded-lg shadow-md">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-3 text-sm font-medium">Colaborador</th>
              <th className="p-3 text-sm font-medium">Cliente</th>
              <th className="p-3 text-sm font-medium">Monto</th>
              <th className="p-3 text-sm font-medium">Número de cuota</th>
              <th className="p-3 text-sm font-medium">Fecha de vencimiento</th>
              <th className="p-3 text-sm font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedPayments).map(([collaborator, payments]) => (
              <Fragment key={collaborator}>
                <tr className="bg-gray-600">
                  <td colSpan={6} className="p-3 text-lg font-semibold text-center">{collaborator}</td>
                </tr>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-gray-700 hover:bg-gray-700">
                    <td className="p-3">{collaborator}</td>
                    <td className="p-3">{payment.client}</td>
                    <td className="p-3">${payment.amount}</td>
                    <td className="p-3">{payment.installmentNumber}</td>
                    <td className="p-3">{payment.dueDate}</td>
                    <td className="p-3">
                      {payment.status === 'pending' && new Date(payment.dueDate).toISOString().split('T')[0] === getTodayDate() ? 
                      (
                        <button className="bg-green-600 hover:bg-green-500 text-white text-sm font-bold p-2 rounded-md transition-all duration-150">Ir a pagar</button>
                      ) : (
                        <span className={`px-4 py-2 rounded-full text-sm ${payment.status === 'overdue' ? 'bg-red-600' : 'bg-gray-600'}`}>
                        {payment.status}
                      </span>
                      )}
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingPaymentsPanel;
