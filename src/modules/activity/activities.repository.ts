import { db } from '../../database/client' 
import { activities } from '../../database/schema'
import { asc, desc, eq } from 'drizzle-orm'

export const activitiesRepository = {
  async findAll() {
    return db
    .select()
    .from(activities)
    .orderBy(activities.updatedAt)
  },
};