import React from "react";
import PropTypes from "prop-types";

const ServiceAlerts = props => {
  const { serviceAlerts } = props;
  return (
    <div>
      {serviceAlerts &&
        serviceAlerts.map((message, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: message.value }} />
        ))}
    </div>
  );
};

ServiceAlerts.propTypes = {
  serviceAlerts: PropTypes.array
};

export default ServiceAlerts;
