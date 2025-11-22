import React from 'react';

interface PixelCardProps {
  children: React.ReactNode;
  borderColor?: string;
  className?: string;
}

const PixelCard: React.FC<PixelCardProps> = ({ 
  children, 
  borderColor = 'border-pacman-wall', 
  className = '' 
}) => {
  return (
    <div className={`relative p-1 ${className} group`}>
      {/* Pixel Borders Effect */}
      <div className={`absolute inset-0 border-2 ${borderColor} opacity-80 pointer-events-none`}></div>
      
      {/* Corner pieces to simulate rounded pixel corners */}
      <div className={`absolute -top-[2px] -left-[2px] w-2 h-2 bg-[#050505]`}></div>
      <div className={`absolute -top-[2px] -right-[2px] w-2 h-2 bg-[#050505]`}></div>
      <div className={`absolute -bottom-[2px] -left-[2px] w-2 h-2 bg-[#050505]`}></div>
      <div className={`absolute -bottom-[2px] -right-[2px] w-2 h-2 bg-[#050505]`}></div>
      
      <div className="relative bg-pacman-dark p-6 h-full transition-transform duration-200 group-hover:-translate-y-1">
        {children}
      </div>
    </div>
  );
};

export default PixelCard;