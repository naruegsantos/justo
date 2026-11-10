import {editionsRepository } from "./editions.repository";

export const editionsService = {
    async getEditions(){
        console.log("/editions");
        
        return editionsRepository.findAll()
    },
    // async getOneEdition(id:number){
    //      try {
    //         return editionsRepository.findOne(id)
    //     } catch (err) {
    //         console.log(err)
    //         return {error:err}
    //     }
    //     return editionsRepository.findOne(id)
    // },

    // async updateEdition(id: number, data: IEditionUpdate) {
    //     try {
    //         editionsRepository.updateOne(id, data)
    //         return {succes:true}
    //     } catch (err) {
    //         console.log(err)
    //         return {error:err}
    //     }
    // },

    // async createEdition(data: IEditionUpdate) {
    //     try {
    //         editionsRepository.create(data)
    //         return {succes:true}
    //     } catch (err) {
    //         console.log(err)
    //         return {error:err}
    //     }
    // },

    // async deleteEdition(id:number) {
    //     try {
    //         editionsRepository.delete(id)
    //         return {succes:true}
    //     } catch (err) {
    //         console.log(err)
    //         return {error:err}
    //     }
    //     return editionsRepository.delete(id)
    // }
}