import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface QuickActionCardProps {
  id?: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  badge?: string;
  iconColor?: string;
  iconBg?: string;
  onClick: () => void;
}

export const QuickActionCard: React.FC<QuickActionCardProps> = ({
  id,
  title,
  subtitle,
  icon: Icon,
  badge,
  iconColor = 'text-blue-600',
  iconBg = 'bg-blue-50',
  onClick
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className="w-full text-left bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-between group active:scale-[0.99]"
    >
      <div className="flex items-center gap-3.5">
        <div className={`w-11 h-11 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center shrink-0`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-sm text-[#0A192F] group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            {badge && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
    </button>
  );
};

export const StatCard: React.FC<{
  title: string;
  value: string;
  description?: string;
  icon?: LucideIcon;
  trend?: string;
}> = ({ title, value, description, icon: Icon, trend }) => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
      <div className="flex items-center justify-between text-slate-500 mb-1">
        <span className="text-xs font-medium">{title}</span>
        {Icon && <Icon className="w-4 h-4 text-slate-400" />}
      </div>
      <div className="text-xl font-black text-[#0A192F] tracking-tight">{value}</div>
      {(description || trend) && (
        <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
          {description && <span>{description}</span>}
          {trend && <span className="text-emerald-600 font-semibold">{trend}</span>}
        </div>
      )}
    </div>
  );
};
