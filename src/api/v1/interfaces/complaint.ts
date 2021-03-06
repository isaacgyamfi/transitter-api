export interface IComplaint {
  user: {
    name: string;
    phone: string;
    email?: string;
  };
  complaint: { complaintType: string; subject?: string; description: string };
  registrationNumber?: string;
  status?: string;
}
