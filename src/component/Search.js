import React,{useContext, useState} from 'react'
import GithubContext from '../context/github/githubContext'
import AlertContext from '../context/alert/alertContext'


const Search = () => {

    const [keyword,setKeyword] = useState("");
    const {searchUsers,clearUsers,users} = useContext(GithubContext);
    const {setAlert} = useContext(AlertContext);

    const onSubmit = (e) => {
        e.preventDefault();
        if(keyword==""){
            setAlert("Alanı Doldurunuz","danger");
        }
        else{
            searchUsers(keyword);
            setKeyword("");
        }
    }
    
    const onChange = (e)=> {
        setKeyword(e.target.value);
    }

        return (
            <div className="container my-3">
                <form onSubmit={onSubmit}>
                    <div className="input-group">
                        <input type="text" value={keyword} className="form-control" placeholder="Kullanıcı Ara" onChange={onChange}/>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>  
                    </div>
                </form>
                {users.length>0 && <button className="btn btn-secondary btn-sm btn-block mt-2" onClick={clearUsers}>Clear Users</button>}
                
            </div>
        )
    
}

export default Search
