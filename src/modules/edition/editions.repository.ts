import { db } from '../../database/client' 
import { editions } from '../../database/schema'
import { asc, desc, eq } from 'drizzle-orm'

export const editionsRepository = {
  async findAll() {
    try {
      return db
      .select()
      .from(editions)
      .orderBy(editions.updatedAt)
    } catch (error) {
      console.log(error);
      
    }
  },

  // async findOne(id:number) {
  //   return db
  //   .select()
  //   .from(editions)
  //   .where(eq(editions.id, id))
  // },

  // async updateOne(id:number, data: ITodoUpdate) {
  //   return db
  //   .update(editions)
  //   .set(data)
  //   .where(eq(editions.id, id))
  // },

  // async create(data:any) {
  //   return db
  //   .insert(editions)
  //   .values(data)
  // },

  // async delete(id:number) {
  //   return db
  //   .delete(editions)
  //   .where(eq(editions.id, id))
  // }
};