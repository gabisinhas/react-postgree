import axios from 'axios';

/**
 * Arquivo para conectar o front com o back end.
 */

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Substitua pela URL do seu back-end
});

async function createNewEmployee(employeeData) {
  try {
    const response = await api.post('/employees', employeeData);
    console.log("response", response);
    
    return response.data;
  } catch (error) {
    console.error('Erro ao criar funcionário:', error);
    throw error;
  }
}

async function updateEmployee(employee) {
  try {
    const { employee_id, ...updateData } = employee;
    const response = await api.put(`/employees/${employee_id}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar funcionário:', error);
    throw error;
  }
}

async function deleteEmployeeById(employee_id) {
  try {
    const response = await api.delete(`/employees/${employee_id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar funcionário:', error);
    throw error;
  }
}

async function getAllEmployees() {
  try {
    const response = await api.get('/employees');
    return response.data;
  } catch (error) {
    console.error('Erro ao retornar todos os funcionários:', error);
    throw error;
  }
}

async function getEmployeeById(id) {
  try {
    const response = await api.get(`/employees/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao retornar funcionário: ${id}`, error);
    throw error;
  }
}

export {
  createNewEmployee,
  updateEmployee,
  deleteEmployeeById,
  getAllEmployees,
  getEmployeeById
};