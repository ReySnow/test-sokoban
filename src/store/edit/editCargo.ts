import { defineStore } from 'pinia'
import { reactive } from 'vue'
let Id = 1
export interface EditCargo {
  x: number
  y: number
  id: number
}
export const useEditCargoStore = defineStore('editCargo', () => {
  const cargos = reactive<EditCargo[]>([])

  function createCargo({ x, y }: { x: number; y: number }): EditCargo {
    return { x, y, id: Id++ }
  }

  function addCarge(cargo: EditCargo) {
    cargos.push(cargo)
  }

  function removeCargo(cargo: EditCargo) {
    cargos.splice(cargos.indexOf(cargo), 1)
  }

  return {
    cargos,
    createCargo,
    addCarge,
    removeCargo
  }
})
