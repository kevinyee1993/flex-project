import React from 'react';
import * as rb from 'react-bootstrap';
import * as utils from '../../../../frontend_utils';

const ExpandedAbout = ({ fullAbout, toggleText }) => {

  return(
    <div>
      {fullAbout}
    </div>
  );
};

const CondensedAbout = ({ fullAbout, toggleText }) => {
  let condensedAbout = fullAbout.slice(0, 300) + "...";
  if (condensedAbout.length <= 3) condensedAbout = `The owner has not left a description.`;
  return(
    <div>
      {condensedAbout}
    </div>
  );
};

class FromOwner extends React.Component {
  constructor(props) {
    super(props);

    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.state = {
      expandedAbout: false
    };
  }

  toggleExpanded() {
    this.setState({ expandedAbout: !this.state.expandedAbout });
  }

  render() {

    let toggleText = "+ Show More";

    if (this.state.expandedAbout) {
      toggleText = "- Show Less";
    }

    return(
      <div className="from-owner">
        <div className="from-owner-header">
          <h4>About {this.props.data.name}</h4>
          <span className="toggle-btn" onClick={this.toggleExpanded}>
              {toggleText}
          </span>
        </div>

        {!this.state.expandedAbout &&
          <CondensedAbout
            fullAbout={this.props.data.ownerDesc}/>}

        {this.state.expandedAbout &&
          <ExpandedAbout
            fullAbout={this.props.data.ownerDesc} />}

      </div>
    );
  }
}

export default FromOwner;
