import * as Yup from 'yup';
import errorMessages from '../error_messages';

export default Yup.object().shape({
  email: Yup.string()
          .required(errorMessages.required)
          .email(errorMessages.invalid_email),
  password: Yup.string(),
  password_confirmation: Yup.string()
          .when('password', {
            is: (password) => password,
            then: Yup.string().required(errorMessages.required),
            otherwise: Yup.string()
          })
          .oneOf([Yup.ref('password'), null], errorMessages.password_confirmation),
});