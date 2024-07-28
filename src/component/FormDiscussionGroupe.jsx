import React, { useEffect, useState } from 'react';
import { Form, Button, ListGroup, Image } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function FormDiscussionGroupe() {
  const { id } = useParams();
  const [idU, setIdU] = useState('');
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [commentaire, setCommentaire] = useState([]);
  const [text, setText] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("iduser"))
      navigate("/login");

    setUsername(localStorage.getItem('firstname'));
    setLastname(localStorage.getItem('lastname'));

    const getCommentaire = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/commaintaires`);
        setCommentaire(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    getCommentaire();
  }, [id]);

  const changeText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newCommentaire = {
        text: text,
        author: `${username} ${lastname}`,
        date: new Date().toLocaleDateString(),
        idGroup: id,
        idUser: localStorage.getItem("iduser")
      };

      await axios.post('http://localhost:3000/commantaires', newCommentaire);
      const response = await axios.get('http://localhost:3000/commantaires');
      setCommentaire(response.data);
      setText('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Groupe de discussion</h2>
      <ListGroup>
        {commentaire.map((item, index) => {
          if (item.idGroup === id) /*&& item.idUser === localStorage.getItem("iduser"))*/ {
            return (
              <ListGroup.Item key={index}>
                <div>
                  <Image src="url_de_l_avatar" roundedCircle width={30} height={30} />
                  <strong>{item.author}</strong> - {item.date}
                </div>
                <div>{item.text}</div>
              </ListGroup.Item>
            );
          }
          return null;
        })}
      </ListGroup>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="message">
          <Form.Control
            as="textarea"
            placeholder="Entrez votre message ici"
            onChange={changeText}
            value={text}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
  );
}

export default FormDiscussionGroupe;
