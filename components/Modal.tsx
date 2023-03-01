import React from "react";

export type ModalRef = {
  open: () => void;
  close: () => void;
};

type ModalProps = {
  modal: React.ReactElement;
  unSetModal: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalContext = React.createContext<{
  unSetModal?: () => void;
  setModal?: React.Dispatch<any>;
}>({
  unSetModal: undefined,
  setModal: undefined,
});

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modal, setModal] = React.useState<any>();
  const unSetModal = React.useCallback(() => setModal(undefined), [setModal]);

  return (
    <ModalContext.Provider value={{ unSetModal, setModal }}>
      {children}
      <Modal modal={modal} unSetModal={unSetModal} />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

const Modal = ({ modal, unSetModal }: ModalProps) => {
  const [size, setSize] = React.useState("");
  const handleEscape = React.useCallback(
    (event: any) => {
      if (event.keyCode === 27) unSetModal();
    },
    [unSetModal]
  );

  React.useEffect(() => {
    if (modal) {
      const _size = modal.props["data-size"];

      if (_size && ["sm", "lg", "xl"].includes(_size)) setSize(_size);

      document.addEventListener("keydown", handleEscape, false);
    } else {
      setSize("");
    }

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, modal, unSetModal]);
  return (
    <div
      className={`modal ${modal && "fade show"} `}
      style={{ display: modal ? "block" : "none" }}
    >
      <div
        className={`modal-dialog modal-dialog-centered ${
          size ? `modal-${size}` : ""
        }`}
      >
        <div className="modal-content">{modal}</div>
      </div>
      <div className="modal-backdrop" />
    </div>
  );
};

export default Modal;
