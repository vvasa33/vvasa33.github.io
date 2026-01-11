import { 
  TrendingDown, 
  Wifi, 
  Shield, 
  Award, 
  Battery, 
  ScrollText, 
  Cpu, 
  Radio,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  TrendingUp
} from 'lucide-react';

export const iconMap = {
  TrendingDown,
  Wifi,
  Shield,
  Award,
  Battery,
  ScrollText,
  Cpu,
  Radio,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  TrendingUp
};

export const getIcon = (iconName) => {
  return iconMap[iconName] || null;
};
