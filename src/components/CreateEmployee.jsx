import { Container } from 'react-bootstrap';
import Header from './NavBar';

const CreateEmployee = () => {
  const formConfig = {
    title: "User Registration",
    fields: [
      { label: "Name", type: "text", required: true },
      { label: "Email", type: "email", required: true },
      { label: "Age", type: "number", min: 18, max: 99 },
      { label: "Password", type: "password", required: true, minLength: 6 },
      { label: "Confirm Password", type: "password", required: true, minLength: 6 },
      { label: "Phone Number", type: "tel", pattern: "\\d{10}" },
      { label: "Address", type: "text", required: false },
      { label: "Country", type: "select", options: ["Brazil", "Canada", "UK", "USA", "China"] }
    ],
    submitText: "Register"
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'select':
        return (
          <select name={field.label} required={field.required}>
            {field.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type={field.type}
            name={field.label}
            required={field.required}
            min={field.min}
            max={field.max}
            minLength={field.minLength}
            pattern={field.pattern}
          />
        );
    }
  };

  return (
    <>
      <Header />
      <br />
      <Container>
        <form>
          <h2>{formConfig.title}</h2>
          {formConfig.fields.map(field => (
            <div key={field.label}>
              <label>{field.label}</label>
              {renderField(field)}
            </div>
          ))}
          <button type="submit">{formConfig.submitText}</button>
        </form>
      </Container>
    </>   
  );
};

export default CreateEmployee;