import React, { useContext } from 'react';
import { string } from 'prop-types';

// load main context
import { MainContext } from '../../store/Store';

// load action
import updateIndex from '../../actions/updateIndex';
import { resetStyle, outStyle, inStyle } from '../../actions/updateStyle';

// load data
import componentsData from '../../data/componentsData';

function Button({ text }) {
  const { state, dispatch } = useContext(MainContext);

  // handle animation
  const handle = () => {
    // first animation
    dispatch(outStyle());

    // second animation
    setTimeout(() => {
      dispatch(updateIndex(state.index + 1))

      // reset style
      dispatch(resetStyle());

      setTimeout(() => {
        // reagain animation
        dispatch(inStyle());
      }, 10);
    }, 320);
  }

  return (
    <button
      type="button"
      onClick={componentsData.length <= state.index + 1 ? null : handle}
    >
      { text }
    </button>
  )
}

Button.defaultProps = {
  text: ''
}

Button.propTypes = {
  text: string
}

export default Button;
