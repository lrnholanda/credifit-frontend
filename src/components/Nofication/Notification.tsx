import React, { useEffect } from 'react';

type NotificationProps = {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
};

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Fecha a notificação após 3 segundos
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-4 right-4 z-50 p-4 rounded shadow-md ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 8.586l-4.293-4.293-1.414 1.414L8.586 10l-4.293 4.293 1.414 1.414L10 11.414l4.293 4.293 1.414-1.414L11.414 10l4.293-4.293-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Notification;
