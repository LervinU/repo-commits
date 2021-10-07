import './RepoTitle.css';
import useFetch  from '../../../Hooks/useFetch';
import star from '../../../Assets/Icons/star.png';
import Watchers from '../../../Assets/Icons/Watchers.png';


const RepoTitle = () => {
    const {isLoading, successResponse: repo, failureResponse: error} = useFetch('https://api.github.com/repos/LervinU/repo-commits');

    return (
        <div>
            <div className="row mt-5">
                <div className="col">
                    {repo && <h2>{repo.name}</h2>}
                </div>
            </div>
            <div className="row">
                <div className="col-auto mr-auto">
                    {repo && <div>Author: {repo.owner.login} </div> } 
                </div>
                <div className="col-auto float-end">
                    {repo && 
                        <div className="bgInteractions">
                            <img style={{width: '16px', height: '16px'}} src={star}/>
                            <span style={{marginLeft: '10px'}}>{repo.stargazers_count}</span>
                        </div> 
                        }
                </div> 
                <div className="col-auto float-end">
                    {repo && 
                    <div className="bgInteractions">
                        <img  style={{width: '20px', height: '20px'}} src={Watchers}/> 
                        <span style={{marginLeft: '10px', marginTop: '-50px'}}> {repo.watchers_count} </span>
                    </div> 
                    }
                </div>  
            </div>
            
        </div>
    )
};

export default RepoTitle;