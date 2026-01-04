
export enum SubjectType {
  CHINESE = '华文',
  SCIENCE = '科学',
  MATH = '数学',
  GEOGRAPHY = '地理',
  HISTORY = '历史',
  RBT = 'RBT'
}

export enum Language {
  ZH = 'zh',
  EN = 'en',
  MS = 'ms',
  TA = 'ta',
  ES = 'es',
  JA = 'ja',
  KO = 'ko',
  AR = 'ar',
  FR = 'fr'
}

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

export interface SubjectMeta {
  id: SubjectType;
  title: string;
  icon: string;
  color: string;
  description: string;
  gradient: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  subject: SubjectType;
  title: string;
  questions: QuizQuestion[];
}
