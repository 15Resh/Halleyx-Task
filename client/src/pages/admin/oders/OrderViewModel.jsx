import React from "react";
import { Dialog } from "@headlessui/react";

const OrderViewModal = ({ isOpen, onClose, order }) => {
  if (!order) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white max-w-xl w-full p-6 rounded-xl shadow-lg">
          <Dialog.Title className="text-xl font-semibold mb-4">
            Order Details - {order.id}
          </Dialog.Title>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Customer</p>
              <p className="text-lg font-medium">{order.customer}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="text-lg font-medium">{order.status}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Total</p>
              <p className="text-lg font-medium">${order.total.toFixed(2)}</p>
            </div>

            {/* Add more details as needed: items, shipping, billing */}
            <div>
              <p className="text-sm text-gray-500">Products</p>
              <ul className="list-disc list-inside">
                {(order.items || []).map((item, idx) => (
                  <li key={idx}>
                    {item.name} × {item.qty} = ${item.price * item.qty}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 text-right">
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default OrderViewModal;
