import React from 'react'
interface ModalProps {
  modalopen: boolean;
  setmodalopen:(open:boolean)=>boolean |void;
  children:React.ReactNode;
}
const Modal:React.FC<ModalProps>= ({ modalopen, setmodalopen,children}) => {
  return (
    <div className={`modal ${modalopen ? "modal-open" :""}`}>
    <div className="modal-box relative">
    <form method="dialog">
    
      <button onClick={()=>setmodalopen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    {children}
  </div>
  </div>
  )
}

export default Modal