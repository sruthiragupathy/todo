import React,{useState} from "react";
import { Modal ,Form,Button} from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const [done,setDone] = useState(false);
  const [error,setError] = useState(false);
  const [titles,setTitles] = useState(true);


  // console.log({props})
    let {list,editItem,itemval} = props;
    
    function onUpdate (){
      // console.log("itemVal",props.itemval);
      list.map((e,i)=>{
        if(e.id===editItem.id){
          if(e.value===itemval){
            setError(true);
            setTitles(false);
           
  
          }
          else{
          e.value = itemval;
          setDone(true);
          localStorage.setItem('todos',JSON.stringify(list))
          setTitles(false);
          }

        }
        
      })
      // console.log(list);
      
      
    }
    const title = ()=>(
      titles&&(
      <Modal.Title id="contained-modal-title-vcenter">
      Edit Item
    </Modal.Title>
      )
    )

    const successMessage = () =>(
      done && (
        <div className="alert alert-success w-100 h-25" >
          <h5>Item updated successfully</h5>
        </div>
      )
    )

    const errorMessage = () =>(
      error && (
        <div className="alert alert-danger w-100 h-25" >
          <h5>There is no updates</h5>
        </div>
      )
    )
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
         {title()}
         {successMessage()}
         {errorMessage()}
         
        </Modal.Header>
        <Modal.Body>
            <Form.Control className="w-100" type="email" placeholder="Enter email" value={props.itemval} onChange = {(e)=>props.setItemval(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success"  onClick = {onUpdate}>Update</Button> 
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function Popup({edit,list,setEdit=f=>f,editItem,setEditItem=f=>f}) {
    // const [modalShow, setModalShow] = React.useState(false);
    
    
    const [itemval,setItemval]  = useState(editItem.value)
    
    // console.log(edit,list,editItem);
  
    return (
      <>
        
  
        <MyVerticallyCenteredModal
          list = {list}
          editItem={editItem}
          setItemval={setItemval}
          itemval={itemval}
          show={edit}
          onHide={() => setEdit(false)}
        />
      </>
    );
  }
  


// 

export default Popup;