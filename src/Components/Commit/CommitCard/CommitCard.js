import './CommitCard.css';
import moment from 'moment'


const CommitCard = (props) => {
    const { sha, author, commit } = props.commitObj;
    return (
            <div className="card mt-4" style={{height: '4.5rem'}}>
                <div className="row">
                    <div className="col">
                        <div className="card-body">
                            <p style={{fontWeight: 'bold', fontSize: '13px'}}>{commit.message}</p>
                            <div className="row row-cols-auto subtitle">
                                <div className="col my-auto">
                                    <img style={{width: '25px', height: '25px', borderRadius: '10px'}} src={author.avatar_url}/>
                                </div>
                                <div className="col my-auto sub" style={{fontWeight: 'bold', fontSize: '12px'}}>{author.login}</div>
                                <div className="col my-auto sub" style={{fontSize: '12px'}}>committed on {moment(commit.author.date).fromNow()}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col my-auto">
                        <div className="card-body text-end">
                            <div className="dCopyHash">
                                 <button className="btnHash">{sha.substring(0,7)}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
    );
}

export default CommitCard;