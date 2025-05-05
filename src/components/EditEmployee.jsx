import Header from './NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PageFooter from './PageFooter';
import { updateEmployee } from '../services/Api';
import { useState, useContext, useEffect } from 'react';
import { EmployeeContext } from '../ context/EmployeeContext';
import { useParams } from 'react-router-dom';

const EditEmployee = () => {
    const { id } = useParams();
    const { employeeData } = useContext(EmployeeContext);
    const [formData, setFormData] = useState({
        name: '',
        employeeId: '',
        job_role: '',
        salary: '',
        birth: '',
        employee_registration: ''
    });

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    useEffect(() => {
        if (employeeData) {
            console.log('Employee data received:', employeeData);
            setFormData({
                name: employeeData.name || '',
                employeeId: employeeData.employee_id || '',
                job_role: employeeData.job_role || '',
                salary: employeeData.salary || '',
                birth: formatDate(employeeData.birth) || '',
                employee_registration: employeeData.employee_registration || ''
            });
        }
    }, [employeeData]);

    const [submitedStatus, setSubmitedStatus] = useState('');

    const formConfig = {
        title: "Edit Employee",
        fields: [
            { label: "Name", type: "text", required: true },
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
            
            const dataToUpdate = {
                name: formData.name,
                job_role: formData.job_role,
                salary: formData.salary,
                birth: new Date(formData.birth).toISOString(),
                employee_registration: formData.employee_registration,
                employee_id: id
            };

            console.log("Updated formData", dataToUpdate);

            const response = await updateEmployee(dataToUpdate);
            console.log('Employee updated successfully:', response);
            setSubmitedStatus('true');

            // Clear form after successful update
            setFormData({
                name: '',
                employeeId: '',
                job_role: '',
                salary: '',
                birth: '',
                employee_registration: ''
            });
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
                readOnly={field.readOnly}
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