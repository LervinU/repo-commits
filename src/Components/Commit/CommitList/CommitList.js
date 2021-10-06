import './CommitList.css';
import CommitCard from '../CommitCard/CommitCard';
import useFetch from '../../../Hooks/useFetch';
import moment from 'moment';

const CommitList = () => {
const {isLoading, successResponse: commits, failureResponse: error} = useFetch('https://api.github.com/repos/LervinU/repo-commits/commits');
const commitsObj = {};

commits && (() => {
    commits.forEach(commit => commitsObj[moment(commit.commit.author.date).format('ll')] = []);
    commits.forEach(commit => {
        let date = moment(commit.commit.author.date).format('ll');
        commitsObj[date] = [...commitsObj[date], commit];
    });
})();


return (
    <div className="container">
        {
            commits && Object.entries(commitsObj).map(([key, value]) => {
                return (
                    <>
                        <p style={{color: "#000", marginTop: '2rem', marginBottom: '-15px'}}>Commits on {key}</p>
                        {value.map(commit => <CommitCard key={commit.sha} commitObj={commit} />)}
                    </>
                )
            })
        }
    </div>
);
};

export default CommitList;