import React from 'react';

// 1. add onClick to delete button, it needs to execute onPressDelete function

const onPressDelete = () => {
  // 2. define an alert() here with a random text
};

const Contact = props => {
  return (
    <div className="friend-item">
      <section className="contact-info">
        <h3>{props.name}</h3>
        <h5>📧{props.email}</h5>
        <h5>📞{props.phone}</h5>
      </section>

      <section className="delete-btn">
        {props.isDeletable ? <button>Delete</button> : null}
      </section>
    </div>
  );
};

export default Contact;
