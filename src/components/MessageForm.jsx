// @ts-check
import React from "react";

const MessageForm = () => (
  <div className="mt-auto">
    <form>
      <div className="form-group">
        <div className="input-group">
          <input className="mr-2 form-control" />
          <button className="btn btn-primary" aria-label="submit" type="submit">
            Submit
          </button>
          <div className="d-block invalid-feedback"> </div>
        </div>
      </div>
    </form>
  </div>
);

export default MessageForm;
