import { Container } from 'react-bootstrap';
import Header from './NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PageFooter from './PageFooter';
import { createNewEmployee } from '../services/Api';
import { useState } from 'react';

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    job_role: '',
    salary: '',
    birth: '',
    employee_registration: ''
  });

  const formConfig = {
    title: "User Registration",
    fields: [
      { label: "Name", type: "text", required: true },
      { label: "Employee Id", type: "number", required: true },
      { label: "Job Role", type: "text", required: true},
      { label: "Salary", type: "number", required: true },
      { label: "Birth", type: "date", required: true },
      { label: "Employee Registration", type: "number", required: true},
    ],
    submitText: "Register"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name.toLowerCase().replace(/ /g, '_')]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cleanedData = {
        name: formData.name,
        employeeId: formData.employeeId,
        job_role: formData.job_role,
        salary: formData.salary,
        birth: formData.birth,
        employee_registration: formData.employee_registration
      };
      console.log("formdata", cleanedData);
      
      const response = await createNewEmployee(cleanedData);
      console.log('Funcionário criado com sucesso:', response);
    } catch (error) {
      console.error('Erro ao criar funcionário:', error);
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'select':
        return (
          <select name={field.label.toLowerCase().replace(/ /g, '_')} required={field.required} onChange={handleChange}>
            {field.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      default:
        return (
          <Form.Control
            size="sm"
            type={field.type}
            name={field.label.toLowerCase().replace(/ /g, '_')}
            required={field.required}
            min={field.min}
            max={field.max}
            minLength={field.minLength}
            pattern={field.pattern}
            onChange={handleChange}
          />
        );
    }
  };

  return (
    <>
      <Header />
      <br />
      <div style={{ paddingLeft: '4em'}}>
        <form onSubmit={handleSubmit}>
          <h2>{formConfig.title}</h2>
          {formConfig.fields.map(field => (
            <div key={field.label}>
              <br />
              <Form.Label>{field.label}</Form.Label>
              {renderField(field)}
            </div>
          ))}
          <br />
          <Button type="submit" variant='primary'>{formConfig.submitText}</Button>
        </form>
      </div>
      <br />
      <PageFooter />
    </>   
  );
};

export default CreateEmployee;