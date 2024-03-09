import './App.css';
import hero from './assets/images/illustration-sign-up-desktop.svg'
import iconArrow from './assets/images/icon-success.svg'
import { useFormik } from "formik";
import { userSchema } from './validation/userSchema';

let submittedForm = false;
let email = '';

const onSubmit = (values, actions) => {
  console.log(values)
  submittedForm = true;
  email = values.email;
  actions.resetForm();
}

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: userSchema,
    onSubmit,
  })
  return (
    <div className='main'>
      {!(submittedForm) && <div className='card'>
        <div className='content'>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className='benefits'>
            <li className='benefits-item'>Product discovery and building what matters</li>
            <li className='benefits-item'>Measuring to ensure updates are a success</li>
            <li className='benefits-item'>And much more!</li>
          </ul>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">
            <p>Email address</p>
            {(formik.touched.email) && <p>{formik.errors.email}</p>}</label>
            <input type='text' 
            placeholder='email@company.com' 
            name='email' 
            id='email'
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            className={formik.errors.email && formik.touched.email ? "input-error": ""}/>
            <button type='submit' disabled={formik.isSubmitting}>Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div className='image'>
          <img src={hero} alt="hero"/>
        </div>
      </div>}

        {submittedForm && <div className='success-card'>
          <img src={iconArrow} alt='iconArrow'/> 
          <h1>Thanks for submitting!</h1>
          <p>A confirmation email has been sent to <span>{email} </span>
            Please open it and click the button inside to confirm your subscription.</p>
            <button onClick={() => window.location.reload(false)}>Dismiss message</button>
        </div>}
    </div>
  );
}

export default App;
