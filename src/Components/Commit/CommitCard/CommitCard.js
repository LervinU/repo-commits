import './CommitCard.css';

const CommitCard = () => {

    return (
        
            <div class="card" style={{height: '10rem'}}>
                <div className="row">
                    <div className="col">
                        <div class="card-body">
                            <p style={{fontWeight: 'bold', fontSize: '13px'}}>This is some text within a card body.</p>
                            <div className="row row-cols-auto subtitle">
                                <div className="col my-auto">
                                    <img style={{width: '25px', height: '25px', borderRadius: '10px'}} src="https://avatars.githubusercontent.com/u/35772097?v=4"/>
                                </div>
                                <div className="col my-auto sub" style={{fontWeight: 'bold', fontSize: '12px'}}>LervinU</div>
                                <div className="col my-auto sub" style={{fontSize: '12px'}}>committed on Mar 5, 2020</div>
                            </div>
                        </div>
                    </div>
                    <div className="col my-auto">
                        <div class="card-body text-end">
                            <div className="dCopyHash">
                                 <button className="btnHash">7895145</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default CommitCard;