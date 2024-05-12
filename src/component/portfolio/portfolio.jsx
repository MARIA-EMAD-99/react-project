// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row'
// Portfolio.js


import Cards from './cards';

function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
      <Cards  title="card title one" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit"  />
      <Cards title="card title two" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />
      <Cards title="card title three"  para="Lorem ipsum dolor sit amet, consectetur adipisicing elit"/>
      <Cards title="card title four" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />
      </div>
    </>
  );
}

export default Portfolio;



















    
      {/* <Row xs={1} md={3} className="g-6">
      {Array.from({ length: 6}).map((_, idx) => (
        <Col key={idx}>
          <Card>
          
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row> */}