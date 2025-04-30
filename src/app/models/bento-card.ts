export interface BentoCard {
  id: string;
  title: string;
  icon: string
  description: string;
  backContent: string;
  size: 'small' | 'medium' | 'large';
  technologies?: string[];
  iconColor?: string;
}
