import React from 'react';
import '../styles/FeedbackForm.css';


function FeedbackForm() {
  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Your Name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Your Email" />
        </label>
        <label>
          Message:
          <textarea placeholder="Your Feedback"></textarea>
        </label>
        <label>
          Rating:
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </label>
        <button type="submit" className="submit-feedback">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
