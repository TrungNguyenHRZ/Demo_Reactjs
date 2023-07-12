import React from 'react';
// import './App.css';
import { useFormik } from 'formik';
import './style.css';
import * as Yup from 'yup';

// interface MyForm {
//   fullName: string
//   userName: string
//   email: string
//   password: string
//   confirmPassword: string
//   check: boolean
// }
function App() {

  // const [myForm, setMyForm] = useState<MyForm>({
  //   fullName: "",
  //   userName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   check: false
  // });


  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Required!'),
    userName: Yup.string()
      .min(10, "User Name requires 10-30 characters!")
      .max(30, "User Name requires 10-30 characters!")
      .required('Required!'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required!'),
    password: Yup.string()
      .min(8, "Password requires 8-20 characters!")
      .max(20, "Password requires 8-20 characters!")
      .required("Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Password do not match!')
      .required("Required!"),
    acceptedTerms: Yup
      .bool()
      .oneOf([true], 'You need to accept the terms to register!')
      .required()
      .default(false)
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptedTerms: false
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: validationSchema,
  });


  return (
    <div className="App">
      <div className='container'>
        <form className='form' action="" onSubmit={formik.handleSubmit}>
          <label htmlFor=''>Full Name</label><br />
          <input
            id='fullName'
            name='fullName'
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
          <br />
          {formik.errors.fullName && formik.touched.fullName ? <small style={{ color: "red" }}>{formik.errors.fullName}</small> : null}
          <br />
          <label htmlFor="">User Name</label><br />
          <input
            id='userName'
            name='userName'
            type="text"
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
          <br />
          {formik.errors.userName && formik.touched.userName ? <small style={{ color: "red" }}>{formik.errors.userName}</small> : null}
          <br />
          <label htmlFor="">Email</label><br />
          <input
            id='email'
            name='email'
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <br />
          {formik.errors.email && formik.touched.email ? <small style={{ color: "red" }}>{formik.errors.email}</small> : null}
          <br />
          <label htmlFor="">Password</label><br />
          <input
            id='password'
            name='password'
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <br />
          {formik.errors.password && formik.touched.password ? <small style={{ color: "red" }}>{formik.errors.password}</small> : null}
          <br />
          <label htmlFor="">Confirm Password</label><br />
          <input
            id='confirmPassword'
            name='confirmPassword'
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <br />
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? <small style={{ color: "red" }}>{formik.errors.confirmPassword}</small> : null}
          <br />
          <input
            id='acceptedTerms'
            name='acceptedTerms'
            type="checkbox"
            onChange={formik.handleChange}
          />
          <label htmlFor="">I have read and agree to the Terms</label><br />
          {formik.errors.acceptedTerms && formik.touched.acceptedTerms ? <small style={{ color: "red" }}>{formik.errors.acceptedTerms}</small> : null}
          <br />
          <button className='btn-register' type='submit'>Register</button>
          <button className='btn-reset' onClick={formik.handleReset}>Reset</button>
        </form>
      </div>
    </div>
  );
}

export default App;
