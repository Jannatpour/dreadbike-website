'use client';

import { createContext, useContext, ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = {
      id,
      duration: 5000,
      ...toast,
    };

    setToasts(prev => [...prev, newToast]);

    // Auto remove toast after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const clearToasts = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearToasts }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onRemove={removeToast}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const ToastItem = ({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) => {
  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />;
      default:
        return <Info className="w-5 h-5 text-gray-400" />;
    }
  };

  const getBackgroundColor = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-900/20 border-green-500/30';
      case 'error':
        return 'bg-red-900/20 border-red-500/30';
      case 'warning':
        return 'bg-yellow-900/20 border-yellow-500/30';
      case 'info':
        return 'bg-blue-900/20 border-blue-500/30';
      default:
        return 'bg-gray-900/20 border-gray-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`
        relative max-w-sm w-full bg-gray-800/90 backdrop-blur-sm border rounded-lg shadow-lg
        ${getBackgroundColor()}
      `}
    >
      <div className="p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-white">
              {toast.title}
            </h4>
            {toast.message && (
              <p className="mt-1 text-sm text-gray-300">
                {toast.message}
              </p>
            )}
            
            {toast.action && (
              <button
                onClick={toast.action.onClick}
                className="mt-2 text-sm text-yellow-400 hover:text-yellow-300 font-medium"
              >
                {toast.action.label}
              </button>
            )}
          </div>
          
          <button
            onClick={() => onRemove(toast.id)}
            className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Convenience functions for common toast types
export const createToastHelpers = (addToast: (toast: Omit<Toast, 'id'>) => void) => ({
  success: (title: string, message?: string, action?: Toast['action']) => {
    addToast({ type: 'success', title, message, action });
  },
  error: (title: string, message?: string, action?: Toast['action']) => {
    addToast({ type: 'error', title, message, action });
  },
  info: (title: string, message?: string, action?: Toast['action']) => {
    addToast({ type: 'info', title, message, action });
  },
  warning: (title: string, message?: string, action?: Toast['action']) => {
    addToast({ type: 'warning', title, message, action });
  },
  cart: (action: 'add' | 'remove', productName: string) => {
    addToast({
      type: 'success',
      title: action === 'add' ? 'Added to Cart' : 'Removed from Cart',
      message: `${productName} ${action === 'add' ? 'added to' : 'removed from'} your cart`,
      duration: 3000,
    });
  },
  wishlist: (action: 'add' | 'remove', productName: string) => {
    addToast({
      type: 'success',
      title: action === 'add' ? 'Added to Wishlist' : 'Removed from Wishlist',
      message: `${productName} ${action === 'add' ? 'added to' : 'removed from'} your wishlist`,
      duration: 3000,
    });
  },
});
