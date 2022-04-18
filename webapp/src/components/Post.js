import "./../styles/Post.css"

export default function Post(props) {
    return (
        <>
            <div>
                <h2 className="post__title">{props.title}</h2>
                <small>{convertDateTimeOffset(props.created)}</small>
                <p>{props.summary}</p>
                <small>View count: {props.viewCount}</small>
                <small>Upvote: {props.upvote}</small>
                <small>Downvote: {props.downvote}</small>
            </div>
        </>
    );
}

function convertDateTimeOffset(dateTimeOffset) {
    let date = new Date(dateTimeOffset);
    return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}