import './App.css';
import {  useQuery } from '@apollo/client'
import { FETCH_USERS } from './queries/fetch_users'

function App() {

  const { loading, error, data } = useQuery(FETCH_USERS)


  const mapUsers = () => {
    if (loading) {
      return <div>Loading...</div>
    } else {
      return data.users.map((user: any) => {
        return <li key={user.user_id}>{user.firstname} {user.lastname}</li>
      })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Hello world !!
        </p>
        
      {mapUsers()}


      </header>
    </div>
  );
}

export default App;
