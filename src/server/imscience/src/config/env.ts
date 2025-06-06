import * as dotenv from 'dotenv';
dotenv.config();

export const env = {
  SUPABASE_URL: process.env.SUPABASE_URL || '',
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || '',
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  SUPABASE_JWT_SECRET: process.env.SUPABASE_JWT_SECRET || '',

  POSTGRES_URL: process.env.POSTGRES_URL || '',
  POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL || '',
  POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING || '',
  POSTGRES_USER: process.env.POSTGRES_USER || '',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || '',
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE || '',
  POSTGRES_HOST: process.env.POSTGRES_HOST || '',

  PORT: process.env.PORT || '3000',
};
