export default function Post(props) {
    return (
        <>
            <div>
                <h2 className="post__title">{props.title}</h2>
                <small>{props.createdAt}</small>
                <p>{props.postSummary}</p>
                <small>View count: {props.viewCount}</small>
                <small>Upvote: {props.upvote}</small>
                <small>Downvote: {props.downvote}</small>
            </div>
        </>
    );
}