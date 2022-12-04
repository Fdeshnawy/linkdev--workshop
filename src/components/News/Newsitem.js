
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
//Adding New page for onclicked news 
function Newsitem() {

    const [item, setItem] = useState([]);
    const params = useParams();
    const fetchDataList = () => {
      return fetch(`https://api.npoint.io/d275425a434e02acf2f7/News/${params.id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log([data]);
          setItem([data]);
        });
    };
  
    useEffect(() => {
      fetchDataList();
    }, []);
  
  return (
    <Card  >
        {item.map((list) => (

            <Card.Body>
            <Card.Title>{list.title}</Card.Title>
            <Card.Img variant="top" src={list.urlToImage} />
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            {list.content}
            </Card.Text>

            <Card.Footer className="text-muted">{list.publishedDate}</Card.Footer>
        

            </Card.Body>
        ))
            
        }
      
    </Card>
  );
}

export default Newsitem;
