import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { addFavourite, removeFavourite } from '../actions';
import { addFavourite, removeFavourite } from '../slice/favouritesSlice'

const Job = ({ data }) => {

  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites.favourites)

  const company = favourites.find( c => c.company_name === data.company_name)
  console.log(company)
  return (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
    {/* (condizione) ? (true) : (false) */}
    { !company ? (
      <Button 
          variant="outline-dark" 
          size='small' 
          className='mx-3' 
          onClick={() => dispatch(addFavourite(data))}>
        <i className="bi bi-star"></i>
      </Button>
    ) : (
      <Button 
          variant="outline-dark" 
          size='small' 
          className='mx-3'
          onClick={() => dispatch(removeFavourite(data))}>
        <i className="bi bi-star-fill"></i>
      </Button>
    )
    }
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      
      
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
  )
}

export default Job
