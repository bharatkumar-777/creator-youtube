'use client';

import ToolTabButton from './ToolTabButton';

interface ToolTabItemProps {
  nameKey: string;
  href: string;
  color: string;
  icon: string;
  isActive: boolean;
  isExpanded: boolean;
  onTabClick: (href: string) => void;
}

export default function ToolTabItem({
  nameKey,
  href,
  color,
  icon,
  isActive,
  isExpanded,
  onTabClick,
}: ToolTabItemProps) {
  const handleClick = () => {
    onTabClick(href);
  };

  return (
    <ToolTabButton
      nameKey={nameKey}
      color={color}
      icon={icon}
      isActive={isActive || isExpanded}
      onClick={handleClick}
    />
  );
}

