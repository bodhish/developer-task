import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

class SearchInput extends PureComponent {
  // handleChange = event => {
  // { ... ? ...}
  // };

  render() {
    return (
      <div className="component-search-input">
        {/* Handel search  */}
      </div>
    );
  }
}
SearchInput.propTypes = {
  textChange: PropTypes.func
};
export default SearchInput;
