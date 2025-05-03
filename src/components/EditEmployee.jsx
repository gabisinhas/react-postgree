import Header from './NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PageFooter from './PageFooter';
import { createNewEmployee } from '../services/Api';
import { useState, useContext, useEffect } from 'react';
import { EmployeeContext } from '../ context/EmployeeContext';

const EditEmployee = () => {
    const { employeeData } = useContext(EmployeeContext);
    const [formData, setFormData] = useState({
        name: '',
        employeeId: '',
        job_role: '',
        salary: '',
        birth: '',
        employee_registration: ''
    });

    useEffect(() => {
        if (employeeData) {
            setFormData({
                name: employeeData.name || '',
                employeeId: employeeData.employeeId || '',
                job_role: employeeData.job_role || '',
                salary: employeeData.salary || '',
                birth: employeeData.birth || '',
                employee_registration: employeeData.employee_registration || ''
            });
        }
    }, [employeeData]);

    const [submitedStatus, setSubmitedStatus] = useState('');

    const formConfig = {
        title: "Edit Employee",
        fields: [
            { label: "Name", type: "text", required: true },
            { label: "Employee Id", type: "number", required: true },
            { label: "Job Role", type: "text", required: true },
            { label: "Salary", type: "number", required: true },
            { label: "Birth", type: "date", required: true },
            { label: "Employee Registration", type: "number", required: true },
        ],
        submitText: "Update"
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name.toLowerCase().replace(/ /g, '_')]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setSubmitedStatus('');
            const cleanedData = {
                name: formData.name,
                employeeId: formData.employeeId,
                job_role: formData.job_role,
                salary: formData.salary,
                birth: formData.birth,
                employee_registration: formData.employee_registration
            };
            console.log("Updated formData", cleanedData);

            const response = await createNewEmployee(cleanedData); // Replace with update API call
            console.log('Employee updated successfully:', response);
            setSubmitedStatus('true');
        } catch (error) {
            setSubmitedStatus('false');
            console.error('Error updating employee:', error);
        }
    };

    const renderField = (field) => {
        const fieldName = field.label.toLowerCase().replace(/ /g, '_');
        return (
            <Form.Control
                size="sm"
                type={field.type}
                name={fieldName}
                required={field.required}
                min={field.min}
                max={field.max}
                minLength={field.minLength}
                pattern={field.pattern}
                onChange={handleChange}
                value={formData[fieldName] || ''}
            />
        );
    };

    return (
        <>
            <Header />
            <br />
            <div style={{ paddingLeft: '4em', position: 'relative' }}>
                {(submitedStatus === 'true' || submitedStatus === 'false') && (
                    <div
                        style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: submitedStatus === 'true' ? 'green' : 'red',
                            color: 'white',
                            padding: '1em',
                            borderRadius: '5px',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '300px',
                        }}
                    >
                        <span>
                            {submitedStatus === 'true'
                                ? 'Form updated successfully!'
                                : 'Error updating the form. Please try again.'}
                        </span>
                        <button
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                marginLeft: '1em',
                            }}
                            onClick={() => setSubmitedStatus('')}
                        >
                            X
                        </button>
                    </div>
                )}
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

export default EditEmployee;