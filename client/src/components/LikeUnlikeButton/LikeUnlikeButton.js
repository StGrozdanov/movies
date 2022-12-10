function LikeUnlikeButton({ likedByCurrentUser, handler }) {
    const buttonClass = likedByCurrentUser ? 'btn btn-danger' : 'btn btn-success';
    const title = likedByCurrentUser ? 'Unlike' : 'Like';
    return (
        <button
            className={buttonClass}
            style={{ marginRight: 10 }}
            onClick={handler}
        >
            {title}
        </button>
    );
}

export default LikeUnlikeButton;