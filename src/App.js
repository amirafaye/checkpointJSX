import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card } from 'react-bootstrap';
import ProfilePhoto from './profile/ProfilePhoto';
import FullName from './profile/FullName';
import Address from './profile/Address';
function App() {
  return (
    <Card style={{ width: '300px', height:'400px', background: 'white', borderRadius:'10px', boxShadow:'0px 1px 10px 1 px black'}}>
      <ProfilePhoto />
      <Card.Body>
        <FullName />
        <Address />
      </Card.Body>
    </Card>
  );
}
export default App;
