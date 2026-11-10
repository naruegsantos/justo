import {activitiesRepository } from "./activities.repository";

export const activitiesService = {
    async getActivities(){
        return activitiesRepository.findAll()
    },
    // async getOneEdition(id:number){
    //      try {
    //         return activitiesRepository.findOne(id)
    //     } catch (err) {
    //         console.log(err)
    //         return {error:err}
    //     }
    //     return activitiesRepository.findOne(id)
    // },

    // async updateEdition(id: number, data: IEditionUpdate) {
    //     try {
    //         activitiesRepository.updateOne(id, data)
    //         return {succes:true}
    //     } catch (err) {
    //         console.log(err)
    //         return {error:err}
    //     }
    // },

    // async createEdition(data: IEditionUpdate) {
    //     try {
    //         activitiesRepository.create(data)
    //         return {succes:true}
    //     } catch (err) {
    //         console.log(err)
    //         return {error:err}
    //     }
    // },

    // async deleteEdition(id:number) {
    //     try {
    //         activitiesRepository.delete(id)
    //         return {succes:true}
    //     } catch (err) {
    //         console.log(err)
    //         return {error:err}
    //     }
    //     return activitiesRepository.delete(id)
    // }
}