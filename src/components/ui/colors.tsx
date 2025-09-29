// src/components/ui/colors.tsx
export const gradients = {
  orangeToYellow: 'from-[#6779e8] to-yellow-500', // changed from-orange-400 to #6779e8
  // You can add more gradients here
};

export const buttonColors = {
  primary: `bg-gradient-to-r ${gradients.orangeToYellow} text-slate-900`,
  // Add more button color presets
};