
export enum PerspectiveType {
  VIRTUE = 'VIRTUE',           // 德性倫理 Virtue Ethics
  DUTY = 'DUTY',               // 義務倫理 Duty Ethics
  CONSEQUENCE = 'CONSEQUENCE'  // 後果倫理 Consequentialism
}

export interface EthicalPerspective {
  tradition: string;
  theme: string;
  description: string;
}

export interface User {
  name: string;
  role: 'admin' | 'student';
  loginTime: Date;
}

export interface Module {
  id: number;
  cycleId: number;
  title: string;
  subtitle: string;
  lifeQuestions: string[];
  perspectives: Record<PerspectiveType, EthicalPerspective>;
  tensionGuide: string;
  discussionPrompts: string[];
  summary: string;
}

export interface Cycle {
  id: number;
  title: string;
  description: string;
}
