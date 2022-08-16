function LikeUnlikeButton({ handler, title, className }) {
    return (
        <button
            className={className}
            style={{ marginRight: 10 }}
            onClick={handler}
        >
            {title}
        </button>
    );
}

export default LikeUnlikeButton;