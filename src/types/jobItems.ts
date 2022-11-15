export interface IJobItems {
  id: string;
  title: string;
  pictures: string[];
  address: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  salary: string;
  description: string;
  employment_type: string[];
  benefits: string[];
  location: {
    lat: number;
    long: number;
  };
}
