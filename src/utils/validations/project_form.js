import * as Yup from 'yup';
import errorMessages from '../error_messages';

export default Yup.object().shape({
  name: Yup.string()
          .required(errorMessages.required),
  description: Yup.string(),
  format_id: Yup.number()
          .required(errorMessages.required)
          .integer()
});