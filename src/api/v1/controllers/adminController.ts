import { Request, Response } from 'express';
import { HTTP_STATUS } from '../../../constants/httpConstants';

export const setCustomClaims = async (req: Request, res: Response) => {
    const { uid, role } = req.body;
    try {
        await auth.setCustomUserClaims(uid, { role });
        res.status(HTTP_STATUS.OK).json({ message: `Role ${role} assigned to user ${uid}` });
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Failed to set claims" });
    }
};