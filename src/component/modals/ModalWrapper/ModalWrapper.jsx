import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const ModalWrapper = ({ children, onClose }) => {
  const ref = useRef();

  useCloseModalClickOutside(ref, () => {
    onClose();
  });

  return (
    <div style={{ width: "100%" }} ref={ref}>
      {children}
    </div>
  );
};

export default ModalWrapper;
