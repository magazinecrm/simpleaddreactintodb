import React,{useState,useEffect}  from "react";
const ContactForm = (props) => {
       const initialFieldValues = 
          {
             fullName:'',
           };
        var [values,setValues] = useState(initialFieldValues);
    const handleInputChange = e => {
        var { name, value } = e.target;
            setValues({
                 ...values,
                fullName: 'timesaved' 
            }) };
    const handleFormSubmit = e =>
    {
        e.preventDefault();
      props.addOrEdit(values)
    }
    return (	    <form autoComplete="off" onSubmit={handleFormSubmit}> 
        
          <input className="form-control" name="fullName" placeholder="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
          />
   
 <div className="form-group">
       <input type="submit" value="Save" className="btn btn-primary btn-block" />
 </div>
</form> );
}
export default ContactForm;