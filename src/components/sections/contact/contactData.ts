
import { Phone, Mail, Github, Linkedin, Code } from 'lucide-react';
import { ContactInfoItem } from './types';

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'anupamojha3113@gmail.com',
    href: 'mailto:anupamojha3113@gmail.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://linkedin.com/in/i-m-anupam'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my projects',
    href: 'https://github.com/anupamojha3113'
  },
  {
    icon: Code,
    label: 'LeetCode',
    value: 'See my solutions',
    href: 'https://leetcode.com/u/LessThanExpert'
  },
  {
    icon: Code,
    label: 'Codeforces',
    value: 'See my solutions',
    href: 'https://codeforces.com/profile/LessThanExpert'
  },
  {
    icon: Code,
    label: 'Codechef',
    value: 'See my solutions',
    href: 'https://www.codechef.com/users/conquistador21'
  },
  {
    icon: Code,
    label: 'Atcoder',
    value: 'See my solutions',
    href: 'https://atcoder.jp/users/anupamojha_21'
  }
];
