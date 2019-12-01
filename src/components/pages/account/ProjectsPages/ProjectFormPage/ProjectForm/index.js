import { connect } from 'react-redux';
import { compose } from 'recompose';
// Redux
import { getFormats } from '../../../../../../store/handbooks/reducer';
// Effects
// Components
import ProjectForm from './ProjectForm';

function mapStateToProps(state) {
  return {
    formats: getFormats(state)
  };
}

export default compose(
  connect(mapStateToProps)
)(ProjectForm);