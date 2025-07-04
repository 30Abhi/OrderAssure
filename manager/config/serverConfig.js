import dotenv from 'dotenv';

dotenv.config(); // Load env var from .env file
export const PORT=process.env.PORT || 4000;
export const MongoDB_Url=process.env.MongoDB_Url

