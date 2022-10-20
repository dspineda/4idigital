import Register from './register.model'

function createRegister(register: typeof Register) {
  return Register.create(register);
}

function getRegisters() {
  return Register.find()
}

function getRegisterById(id: string) {
  return Register.findById(id)
}

function updateRegisterById(id: string, register: typeof Register) {
  return Register.findByIdAndUpdate(id, register)
}

function deleteRegisterById(id: string) {
  return Register.findByIdAndDelete(id)
}

export default {
  createRegister,
  getRegisters, 
  getRegisterById,
  updateRegisterById,
  deleteRegisterById
}

