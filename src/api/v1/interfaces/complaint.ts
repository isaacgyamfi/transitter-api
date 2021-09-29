export interface IComplaint {
  name: string;
  phone: string;
  email?: string;
  complaint: { type: string; subject?: string; description: string };
  registrationNumber: string;
}
