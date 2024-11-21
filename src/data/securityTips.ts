import {
  Lock,
  Key,
  Shield,
  RefreshCw,
  AlertTriangle,
  Wifi,
  Mail,
  Smartphone,
  Database,
  Users
} from 'lucide-react';

export const securityTips = [
  {
    icon: Lock,
    title: 'Use Strong Passwords',
    description: 'Create unique, complex passwords with a mix of letters, numbers, and symbols. Use a password manager to keep track of them securely.'
  },
  {
    icon: Key,
    title: 'Enable Two-Factor Authentication',
    description: 'Add an extra layer of security to your accounts by enabling 2FA wherever possible. This significantly reduces the risk of unauthorized access.'
  },
  {
    icon: Shield,
    title: 'Keep Software Updated',
    description: 'Regularly update your operating system, applications, and security software to protect against the latest threats and vulnerabilities.'
  },
  {
    icon: RefreshCw,
    title: 'Regular Backups',
    description: 'Maintain regular backups of important data using the 3-2-1 rule: three copies, two different media types, one off-site location.'
  },
  {
    icon: AlertTriangle,
    title: 'Be Phishing Aware',
    description: 'Learn to identify suspicious emails, links, and attachments. Never share sensitive information through unverified channels.'
  },
  {
    icon: Wifi,
    title: 'Secure Your Network',
    description: 'Use strong encryption (WPA3) for your Wi-Fi, change default passwords, and regularly update router firmware.'
  },
  {
    icon: Mail,
    title: 'Email Security',
    description: 'Use email encryption when sending sensitive information and be cautious with unexpected attachments or urgent requests.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Device Security',
    description: 'Lock your devices with strong PINs or biometrics, enable remote wiping capabilities, and only install apps from trusted sources.'
  },
  {
    icon: Database,
    title: 'Data Encryption',
    description: 'Encrypt sensitive data both in transit and at rest. Use trusted encryption tools and protocols for all important information.'
  },
  {
    icon: Users,
    title: 'Social Engineering Defense',
    description: 'Be aware of social engineering tactics. Verify unusual requests through alternative channels and maintain healthy skepticism.'
  }
];