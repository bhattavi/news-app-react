
import Navbar from './Navbar'
import Card from './Card'
const API_KEY = process.env.REACT_APP_YOUR_API_KEY_NAME;

function Trending() {
  
  return (
   <div>
     <Navbar></Navbar>
<h1>this is trending</h1>
     <Card></Card>

   </div>
  );
}

export default Trending;