import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import english from '/workspaces/language-learning-platform/frontend/src/components/Courses/english.jpg'
const Courses = () => {
  return (
    <div>
    <h1>Course</h1>
    <div className='Courses'>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>English Learning Course</Card.Title>
          <Card.Text>
          Improve your English language skills with our comprehensive course! Our program includes interactive lessons, exercises, and assessments to help you master reading, writing, speaking, and listening in English. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={english} style={{width:'15rem',display:'flex',justifyContent:'center',alignItems:'center'}}/>
        <Card.Body>
          <Card.Title>French Learning Course</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Hindi Learning Course</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>


    </div>
  )
}

export default Courses
