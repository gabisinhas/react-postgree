import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './NavBar';
import { getAllEmployees } from '../services/Api';
import { deleteEmployeeById } from '../services/Api';
import { EmployeeContext } from '../ context/EmployeeContext';

const ListEmployees = () => {

  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const { setEmployeeData } = useContext(EmployeeContext);

  const handleEdit = (id) => {
    console.log('Edit button clicked for employee ID:', id);
    const employeeToEdit = employees.find((employee) => employee.employee_id === id);

    if (!employeeToEdit) {
      console.error('Employee not found for ID:', id);
      return;
    }

    console.log('Employee to edit:', employeeToEdit);

    const employeeContextData = {
      name: employeeToEdit.name,
      employeeId: employeeToEdit.employee_id,
      salary: employeeToEdit.salary,
      birth: employeeToEdit.birth,
      job_role: employeeToEdit.job_role,
      employee_registration: employeeToEdit.employee_registration,
    };

    setEmployeeData(employeeContextData);
    navigate(`/editEmployee/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteEmployeeById(id);
      if (response.success) {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== id)
        );
        console.log('Employee deleted successfully:', response);
      } else {
        console.error('Failed to delete employee:', response.message);
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getAllEmployees();
        console.log('data', data);

        if (Array.isArray(data)) {
          const validData = data.map((employee, index) => ({
            ...employee,
            id: employee.id || index, // Ensure each employee has a unique id
          }));
          setEmployees(validData);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <br />
        <h2 className="text-indigo-800">List Employees</h2>
        <div style={{ paddingBottom: '3em' }}>
          <table className="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
            <thead>
              <tr>
                <th className="bg-gray-400 border border-gray-300 ...">Id</th>
                <th className="bg-gray-400 border border-gray-300 ...">Name</th>
                <th className="bg-gray-400 border border-gray-300 ...">Job Role</th>
                <th className="bg-gray-400 border border-gray-300 ...">Employee Registration</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (

                <tr key={employee.id}>
                  <td className="border border-gray-300 ...">{employee.employee_id}</td>
                  <td className="border border-gray-300 ...">{employee.name}</td>
                  <td className="border border-gray-300 ...">{employee.job_role}</td>
                  <td className="border border-gray-300 ...">{employee.employee_registration}</td>
                  <td className="border border-gray-300 ...">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                      onClick={() => handleEdit(employee.employee_id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="border border-gray-300 ...">
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-grey-300"
                      onClick={() => handleDelete(employee.id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default ListEmployees;