
const Comments = ({ comments }) => {

    return (
        <div className="px-4 sm:px-20">

            {comments?.map(comment => <div key={comment._id}>
                <div className="flex items-center py-2">
                    <div className="mr-2">
                        <img src={comment.userPhoto} alt="" className="w-16 h-16 rounded-full" />
                        <p>{comment.userName}</p>
                    </div>
                    <div>
                        <p>{comment.comment}</p>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Comments;