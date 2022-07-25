import "./ContactBtn.css";

import React, { useState, useEffect } from "react";
import Contact from "../../Pages/Home/Contact/Contact";
import { BaseModal, ModalCloseTarget } from "react-spring-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const ContactBtn = () => {
  const [showModal, setShowModal] = useState(false);
  const [btn, setBtn] = useState({ display: "block" });

  useEffect(() => {
    showModal
      ? setBtn({ display: "none" })
      : setTimeout(() => {
          setBtn({ display: "block" });
        }, 1500);
  }, [showModal]);

  const staticModalStyles = {
    position: "absolute",
    top: "-7vh",
    left: 0,
    padding: "0",
    width: "100%",
  };

  return (
    <>
      <button
        style={btn}
        className="btn-contact"
        onClick={() => setShowModal(true)}
      >
        Contact
      </button>
      <BaseModal
        isOpen={showModal}
        onDismiss={() => setShowModal(false)}
        contentTransition={{
          from: { top: "-100%" },
          enter: { top: "0px" },
          leave: { top: "-100%" },
        }}
        contentProps={{ style: staticModalStyles }}
      >
        <Contact setShowModal={setShowModal}></Contact>
        <ModalCloseTarget>
          <div className="w-100 d-flex justify-content-end">
            <button className="btn-close-modal d-block fw-bold">
              <FontAwesomeIcon icon={faWindowClose} />
            </button>
          </div>
        </ModalCloseTarget>
      </BaseModal>
    </>
  );
};

export default ContactBtn;
