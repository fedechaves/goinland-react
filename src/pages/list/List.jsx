import './list.css';
import NavBar from '../../components/navBar/NavBar';
import Header from '../../components/header/Header';


const List = () => {
  return (
    <div>
        <NavBar/>
        <Header type="list"/>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">List Search</h1>
            </div>
            <div className="listResult"></div>
          </div>
        </div>
    </div>
  )
}

export default List
