import { useState } from "react";
import Header from './NavBar';
import PageFooter from "./PageFooter";
 
function DesafioReact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobrole, setJobRole] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !jobrole) {
      setError("* Please fill all fields");
      return;
    }else{
      setSubmittedData([...submittedData, { name, email, jobrole }]);
      console.log("submittedData",submittedData);
      setError("");
      setName("");
      setEmail("");
      setJobRole("")
  
    }

  };

  const handleDelete = (index) => {
    console.log(index);
    const newData = submittedData.filter((_, i) => i !== index);
    console.log(newData);
    setSubmittedData(newData);
  }

  return (
    <>
      <nav header="Contact Form"></nav>
      <Header />
      <div className="contactform">
        <h1 class="text-black-300 bg-gray-300 pl-3">Contact Form</h1>
        <form onSubmit={handleSubmit} class="pl-2 mt-4">
          <input
            class="border-collapse border border-gray-600"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            data-testid="name-input"
          />
          <input
            class="border-collapse border border-gray-600"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            data-testid="email-input"
          />
          <input
            type="text"
            class="border-collapse border border-gray-600"
            value={jobrole}
            onChange={(e) => setJobRole(e.target.value)}
            placeholder="Job Role"
            data-testid="role-input"
          />
          <button class="w-24 rounded-full bg-blue-400 hover:bg-gray-600"type="submit" data-testid="submit-button">
            Submit
          </button>
        </form>
        {error && (
          <p data-testid="error-message" className="error" class="text-red-500 pl-4">
            {error}
          </p>
        )}
        {submittedData && submittedData.length>0 && (
        <div>
        <div>
          <h3 class="text-black-300 bg-gray-300 pl-2 mt-4">Submitted Data</h3>
        </div>
        <div className="mt-4 grid grid-cols-4">  
            <div class="inline-block pl-3 col-span-1 text-blue-800">
                <strong>Name:</strong> 
            </div>
            <div class="inline-block pl-3 col-span-1 text-blue-800">
                <strong>Email:</strong> 
            </div>
            <div class="inline-block pl-3 col-span-1 text-blue-800">
                <strong>Job Role:</strong>
            </div>
         </div>   
            {submittedData &&(
              submittedData.map((data, index) => (
                <div key={index} class="pl-2 mt-2 grid grid-cols-4">
                  <div class="inline-block col-span-1 border-collapse border border-gray-600 ">{data.name}</div>
                  <div class="inline-block col-span-1 border-collapse border border-gray-600 ">{data.email}</div>
                  <div class="inline-block col-span-1 border-collapse border border-gray-600 ">{data.jobrole}</div>
                  <button onClick={() => handleDelete(index)} class="w-25 rounded-full bg-red-300 hover:bg-gray-600" type="button" data-testid="delete-button">
                    Delete
                  </button>
                </div>
              ))
            )}  

        </div>
        )}  
    </div>
    </>
  )}
export default DesafioReact;