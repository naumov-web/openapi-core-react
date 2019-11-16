import { connect } from 'react-redux';
import { compose } from 'recompose';
// Redux
import { getIsLogged } from '../../store/auth/reducer';
// Component
import Menu from './Menu';

function mapStateToProps(state) {
  return {
    isLogged: getIsLogged(state)
  };
}

export default compose(
  connect(mapStateToProps)
)(Menu);