export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
} as const;

export type ErrorCode = 
    | 'TOKEN_NOT_FOUND' 
    | 'TOKEN_INVALID' 
    | 'ROLE_NOT_FOUND' 
    | 'INSUFFICIENT_ROLE' 
    | 'INTERNAL_ERROR';