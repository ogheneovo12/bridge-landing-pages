import { NextPage } from 'next';

export interface ApiResponse {
    success: boolean;
    code: number;
    status_message: string | { message: string };
}

export interface INotification {
    type: 'success' | 'error' | 'info';
    message: string;
    description?: string;
}

export interface IContactEmail {
    fullname: string;
    email: string;
    subject: string;
    message: string;
}

export type WithLayout = {
    layout?: React.FC<{ children: React.ReactNode }>;
};

export type PageWithLayout<Props> = NextPage<Props> & WithLayout;
