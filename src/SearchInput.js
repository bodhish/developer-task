import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

class SearchInput extends PureComponent {
  handleChange = event => {
    // Function to handele change
  };

  render() {
    return <div className="component-search-input">{/* Search Input  */}</div>;
  }
}
SearchInput.propTypes = {
  textChange: PropTypes.func
};
export default SearchInput;
