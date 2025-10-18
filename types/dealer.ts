import { Car } from "./car";
import { Review } from "./review";
import { User } from "./user";
import { WorkingHour } from "./working-hour";

export type Dealer = {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    description?: string;
    logoUrl?: string;
    createdAt: Date;
    updatedAt: Date;
    ownerId?: string;
    archived: boolean;
    avgRating?: number;
    reviewCount: number;
    cars: Car[];
    owner?: User;
    reviews: Review[];
    workingHours: WorkingHour[];
};

export interface DealerCreateInput {
  name: string
  address: string
  phone: string
  email: string
  description?: string
  logoUrl?: string
  ownerId?: string
}

export interface DealerUpdateInput {
  name?: string
  address?: string
  phone?: string
  email?: string
  description?: string
  logoUrl?: string
  archived?: boolean
}