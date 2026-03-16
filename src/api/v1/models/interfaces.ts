export interface Project {
    id: number;
    name: string;
    status: string;
    createdAt: string;
}

export interface AuthRequest extends Request {
    user?: {
        uid: string;
        role?: string;
    };
}