export interface SocialType {
  title: string;
  startAt: Date;
  venue: string;
  capacity: number;
  price?: number;
  description: string;
  banner: string;
  tags: Array<string>;
  isManualApprove?: boolean;
  privacy: string;
}
