
    //Creating function for the prameters post
    function createElementPost(tag, className, attributes, parent, textContent = '') {
        const el = document.createElement(tag)
        for(const attr in attributes) {
            if(attr === 'onclick') {
                el[attr] = attributes[attr]
            } else {
                el[attr] = attributes[attr] 
            }
        }
        if (className) {el.className = className};
        if (textContent) {el.textContent = textContent};
        if (parent) {parent.append(el)};
        return el;
    }


    // Creating border Phone
    const borderPhone = document.createElement('div');
    borderPhone.className = "phone";
    document.body.append(borderPhone)
    
    //Creating function for the post
    function createPost(avatarSrc, song, backgroundImg, buttonId, openCommentText, comment, ) {
        let isOpen = true;
        let isFilled = false;
    
        // creating function for the like button
        function likePostFn() {
            const img = document.getElementById(buttonId);
            if(!isFilled) { 
                img.src = './images/coeur.png';
                isFilled = true;
            } else { 
                img.src = './images/heart.png';
               isFilled = false;
            };
        
        };
    
        //creating function for open comment text
        function openCommentTextFn() {
            const openText = document.getElementById(openCommentText);
            if(isOpen) { 
                openText.style.overflow = 'hidden';
                isOpen = false;
            } else { 
                openText.style.overflow = 'visible';
                isOpen = true;
            }
            
        };
    
    //Creating container 1
    const cnt = createElementPost('div', 'container', { style: `background-image: ${backgroundImg}` }, borderPhone);

    //creating avatar container
    const avatar = createElementPost('div', 'avatar_container', {}, cnt);
    createElementPost('img', 'avatar border', { src: avatarSrc, alt: '' }, avatar);
    //creating section for name and song
    const headerTexts = createElementPost('div', 'header_texts', {}, avatar);
    createElementPost('div', 'name', {}, headerTexts, 'Name');
    createElementPost('div', 'song', {}, headerTexts, song);
    //Creating container 2
    const cnt2 = createElementPost('div', 'container_2', {}, borderPhone);

    // Create button like
    const btnLike = createElementPost('button', 'btn1 heart', { id: "myButtonLike" }, cnt2);
    btnLike.addEventListener('click', likePostFn);
    createElementPost('img', 'btn_heart', { id: buttonId, src: './images/heart.png', alt: '', style: 'width: 20px; height: 20px;' }, btnLike);
    // Create button comment
    const btnComment = createElementPost('button', 'btn1 comments', {}, cnt2);
    createElementPost('img', 'btn_heart', { src: './images/comment.png', alt: '', style: 'width: 20px; height: 20px;' }, btnComment);
    // Create button share
    const btnShare = createElementPost('button', 'btn1 share', {}, cnt2);
    createElementPost('img', 'btn_heart', { src: './images/share.png', alt: '', style: 'width: 20px; height: 20px;' }, btnShare);

    // Create text comment
    const textComment = createElementPost('button', 'comment_text', { id: openCommentText }, cnt2, comment);
    textComment.addEventListener('click', openCommentTextFn);                       
};

createPost("./images/avatar.jpg", 'S.O.A.D. - Toxicity', `url('./images/img_1.jpg')`, 'myButtonLike1', 'openCommentText1', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.');
createPost("./images/avatar2.jpg", 'S.O.A.D. - Chop suey', `url('./images/img2.jpg')`, 'myButtonLike2', 'openCommentText2', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.');
createPost("./images/avatar3.jpg", 'S.O.A.D. - Lonely day', `url('./images/img3.jpg')`, 'myButtonLike3', 'openCommentText3', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.');
createPost("./images/avatar4.jpg", 'S.O.A.D. - Radio/Video', `url('./images/img4.jpg')`, 'myButtonLike4', 'openCommentText4', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.');
createPost("./images/avatar5.jpg", 'S.O.A.D. - Hypnotize', `url('./images/img5.jpg')`, 'myButtonLike5', 'openCommentText5', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.');





























































