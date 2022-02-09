import { ExecutiveGroup } from './executiveGroup.model';

export interface Executive {
  id: number | null;
  lastName: string;
  firstName: string;
  initials: string;
  systemInitials: string;
  title: string;
  postTitle: string;
  salutation: string;
  jobTitle: string;
  officeId: number | null;
  version: number | null;
  executiveGroup: ExecutiveGroup;
}
