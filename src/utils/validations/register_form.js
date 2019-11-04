import * as Yup from 'yup';
import errorMessages from '../error_messages';

export default Yup.object().shape({
  email: Yup.string()
          .required(errorMessages.required)
          .email(errorMessages.invalid_email),
  password: Yup.string()
          .required(errorMessages.required),
  password_confirmation: Yup.string()
          .required(errorMessages.required)
          .oneOf([Yup.ref('password'), null], errorMessages.password_confirmation),
});