
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import '../../index.css'

//Adding New page for onclicked news 
function Newsitem() {

    const [item, setItem] = useState([]);
    const params = useParams();
    const fetchDataList = () => {
      return fetch(`https://api.npoint.io/d275425a434e02acf2f7/News/${params.id-1}`)
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
    <div>
      <h1 className="text-center m-5">News Item</h1>
      <Card className="card-edge" >
      
      {item.map((list) => (

          <Card.Body>
            <p>{list.title}</p>
          <Card.Img variant="top" src={list.urlToImage} />
          <Card.Text>
          {list.content}
          </Card.Text>
          <Card.Footer className="text-muted"> Date: {list.publishedDate}</Card.Footer>
          </Card.Body>
      ))
          
      }
    
  </Card>
    </div>
    
  );
}

export default Newsitem;
