import React from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function BreadcrumbComponent({name, location}) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href='/'> All Cards </Breadcrumb.Item>
      <Breadcrumb.Item href={location.pathname} active>
        {name}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

BreadcrumbComponent.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(BreadcrumbComponent);
