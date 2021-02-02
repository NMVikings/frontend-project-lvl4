// @ts-check
import React, { useContext } from "react";
import { Field, Formik } from "formik";
import cx from "classnames";
import Axios from "axios";
import { useSelector } from "react-redux";

import routes from "../routes";
import { selectCurrentChannelId } from "../redux";
import Nickname from "../nickname";

const MessageForm = () => {
  const currentChannelId = useSelector(selectCurrentChannelId);
  const nickname = useContext(Nickname);
  const sendMessage = async ({ message }, { resetForm, setStatus }) => {
    try {
      await Axios.post(routes.channelMessagesPath(currentChannelId), {
        data: { attributes: { message, nickname } },
      });

      resetForm();
    } catch (err) {
      setStatus(err.message);
    }
  };
  return (
    <div className="mt-auto">
      <Formik initialValues={{ message: "" }} onSubmit={sendMessage}>
        {({ isSubmitting, handleSubmit, status }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <Field
                  className={cx("mr-2 form-control", status && "is-invalid")}
                  name="message"
                  disabled={isSubmitting}
                />
                <button
                  className="btn btn-primary"
                  aria-label="submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                <div className="d-block invalid-feedback">
                  {status || "\u00a0"}
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default MessageForm;
