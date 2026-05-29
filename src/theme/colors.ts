export const colors = {
  primary: {
    purple: '#6C4EF5',
    deepPurple: '#5B3BF6',
    blue: '#4D88FF',
    green: '#21C16B',
  },
  semantic: {
    success: '#21C16B',
    warning: '#FFCB00',
    streak: '#FF8A00',
    error: '#FF4D4F',
    info: '#4D88FF',
  },
  neutral: {
    textPrimary: '#001132',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    surface: '#F6F7FB',
    background: '#FFFFFF',
  },
} as const;

export type Colors = typeof colors;
