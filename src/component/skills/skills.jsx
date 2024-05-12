import Form from 'react-bootstrap/Form';

function Skills() {
   

    return (
      <>
    <div className="m-5 p-5 bg-secondary">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel debitis quam, consequuntur totam voluptates aspernatur consequatur esse voluptatibus libero nulla odit? Odit aperiam consequuntur impedit quo repellendus explicabo sed est!</p>
        <div className='d-flex  justify-content-between '>
            <div style={{ width: '20%' }}>
                <h1 className="border-bottom">My Focus</h1>
                <p>UI/UX</p>
                <p>web Design</p>
                <p> Responsive Design</p>
                <p> Mobile App Design</p>
            </div>
            <div style={{ width: '70%' }}>
            
           
          <Form.Label>Html </Form.Label>
          <Form.Range />
          <Form.Label> Css </Form.Label>
          <Form.Range />
          <Form.Label> javascript</Form.Label>
          <Form.Range />
          <Form.Label> node js </Form.Label>
          <Form.Range />
          <Form.Label> react </Form.Label>
          <Form.Range />
        
     

            </div>
        </div>
    </div>
      </>
    )
  }
  
  export default Skills