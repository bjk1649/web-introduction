var enter = document.getElementById('enter');
enter.addEventListener('click', enterVisitorBook);

function enterVisitorBook() {
    const comments = document.getElementById("comments");
    const newComment = document.createElement("li");
    const commentText = document.getElementById("commentText");
    const name = commentText.value;
    commentText.value = commentText.value + "가 좋아하는 영화 목록 ";
    let overlap = 0;
    commentText.value = commentText.value + ": "
    let overlapMovieName = []; 

    console.log('commentTextClear');
    var movie_length = document.getElementsByName("movie").length;
    for (var i=0; i<movie_length; i++) {
        if (document.getElementsByName("movie")[i].checked == true) {
            document.getElementsByName("movie")[i].checked = false;
            overlapMovieName.push(document.getElementsByName("movie")[i].value);
            overlap++;
        }
    }
    commentText.value = commentText.value + overlapMovieName.join(", ") + "\n";


    const comment = document.createTextNode(commentText.value);
    newComment.appendChild(comment);
    comments.appendChild(newComment);
    commentText.value = "";
    alert(name + "님, 저와 " + overlap + "개의 취향이 같으시네요!");
}
