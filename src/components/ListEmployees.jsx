import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './NavBar';
import { getAllEmployees } from '../services/Api';
const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getAllEmployees();
        if (Array.isArray(data)) {
          setEmployees(data);
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
        <table className="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
          <thead>
            <tr>
              <th className="bg-gray-400 border border-gray-300 ...">Name</th>
              <th className="bg-gray-400 border border-gray-300 ...">Job Role</th>
              <th className="bg-gray-400 border border-gray-300 ...">Employee Registration</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="border border-gray-300 ...">{employee.name}</td>
                <td className="border border-gray-300 ...">{employee.job_role}</td>
                <td className="border border-gray-300 ...">{employee.employee_registration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default ListEmployees;