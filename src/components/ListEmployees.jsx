import { Container } from 'react-bootstrap';
import Header from './NavBar';

const ListEmployees = () => {
  return (
    <>
      <Header />
      <Container>
        <br />
        <h2>List Employees</h2>
        <table class="border-collapse border border-gray-400 ...">
        <thead>
          <tr>
            <th class="border border-gray-300 ...">Song</th>
            <th class="border border-gray-300 ...">Artist</th>
            <th class="border border-gray-300 ...">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 ...">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td class="border border-gray-300 ...">Malcolm Lockyer</td>
            <td class="border border-gray-300 ...">1961</td>
          </tr>
          <tr>
            <td class="border border-gray-300 ...">Witchy Woman</td>
            <td class="border border-gray-300 ...">The Eagles</td>
            <td class="border border-gray-300 ...">1972</td>
          </tr>
          <tr>
            <td class="border border-gray-300 ...">Shining Star</td>
            <td class="border border-gray-300 ...">Earth, Wind, and Fire</td>
            <td class="border border-gray-300 ...">1975</td>
          </tr>
        </tbody>
      </table>
      </Container>
    </>
  )
}

export default ListEmployees