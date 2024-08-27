

// let isFilled = false

// function likePostFn() {
//     const img = document.getElementById('like_btn')
//     console.log(img)
//     if(!isFilled) { 
//         img.src = './coeur.png'
//         isFilled = true
//         // end of fn
//     } else { 
//         img.src = './heart.png'
//        isFilled = false
//     }

// }
// let isFilled2 = false
// function likePostFn2() {
//     const img2 = document.getElementById('like_btn2')
//     console.log(img2)
//     if(!isFilled) { 
//         img2.src = './coeur.png'
//         isFilled = true
//         // end of fn
//     } else { 
//         img2.src = './heart.png'
//        isFilled = false
//     }

// }
// let isFilled3 = false

// function likePostFn3() {
//     const img3 = document.getElementById('like_btn3')
//     console.log(img3)
//     if(!isFilled) { 
//         img3.src = './coeur.png'
//         isFilled = true
//         // end of fn
//     } else { 
//         img3.src = './heart.png'
//        isFilled = false
//     }

// }
// let isFilled4 = false

// function likePostFn4() {
//     const img4 = document.getElementById('like_btn4')
//     console.log(img4)
//     if(!isFilled) { 
//         img4.src = './coeur.png'
//         isFilled = true
//         // end of fn
//     } else { 
//         img4.src = './heart.png'
//        isFilled = false
//     }

// }

// let isFilled5 = false
// function likePostFn5() {
//     const img5 = document.getElementById('like_btn5')
//     console.log(img5)
//     if(!isFilled) { 
//         img5.src = './coeur.png'
//         isFilled = true
//         // end of fn
//     } else { 
//         img5.src = './heart.png'
//        isFilled = false
//     }

// }
// const buttonLike = document.querySelectorAll('[id="like_btn"]')
// buttonLike.addEventListener('click', likePostFn )
// let isHello = true

// function myCommentSpaceFn() {
//     const cmt = document.getElementById('myCommentSpace')
//     console.log(cmt)
//     if(isHello) { 
//         cmt.textContent = 'Comment added!'
//         isHello = false
//         // end of fn
//     } else { 
//         cmt.textContent = 'Add Comment!'
//         isHello = true
//     }
//     //
// }
// let isBlack = true

// function testFn() {
//     const cv = document.getElementById('noir')
//     console.log(cv)
//     if(isBlack) { 
//         cv.style['z-index'] = '100';
//         isBlack = false
       
//     } else { 
//         cv.style['z-index'] = '-100';
//         isBlack = true
//     }
    
// }

// zb.style.zIndex = '-100';
// let isOpen = true

// function openCommentTextFn() {
//     const openText = document.getElementById('texte')
//     console.log(openText)
//     if(isOpen) { 
//         openText.style.overflow = 'hidden';
//         isOpen = false
       
//     } else { 
//         openText.style.overflow = 'visible';
//         isOpen = true
//     }
    
// }
// let isOpen2 = true

// function openCommentTextFn2() {
//     const openText = document.getElementById('texte2')
//     console.log(openText)
//     if(isOpen) { 
//         openText.style.overflow = 'hidden';
//         isOpen = false
       
//     } else { 
//         openText.style.overflow = 'visible';
//         isOpen = true
//     }
    
// }
// let isOpen3 = true

// function openCommentTextFn3() {
//     const openText = document.getElementById('texte3')
//     console.log(openText)
//     if(isOpen) { 
//         openText.style.overflow = 'hidden';
//         isOpen = false
       
//     } else { 
//         openText.style.overflow = 'visible';
//         isOpen = true
//     }
    
// }
// let isOpen4 = true

// function openCommentTextFn4() {
//     const openText = document.getElementById('texte4')
//     console.log(openText)
//     if(isOpen) { 
//         openText.style.overflow = 'hidden';
//         isOpen = false
       
//     } else { 
//         openText.style.overflow = 'visible';
//         isOpen = true
//     }
    
// }
// let isOpen5 = true

// function openCommentTextFn5() {
//     const openText = document.getElementById('texte5')
//     console.log(openText)
//     if(isOpen) { 
//         openText.style.overflow = 'hidden';
//         isOpen = false
       
//     } else { 
//         openText.style.overflow = 'visible';
//         isOpen = true
//     }
    
// }




// Creating border Phone
const borderPhone = document.createElement('div');
borderPhone.className = "phone";
document.body.append(borderPhone)

//Creating function for the post
function createPost(avatarSrc, song, backgroundImg, buttonId, openCommentText, comment, ) {
    let isFilled = false;
    let isOpen = true;

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
    const cnt = document.createElement('div');
    cnt.className = "container";
    cnt.style.backgroundImage = backgroundImg;
    borderPhone.append(cnt) 

    //creating avatar container
    const avatar = document.createElement('div')
    avatar.className = "avatar_container";
    cnt.append(avatar)

    //creating avatar image
    const avatarImg = document.createElement('img')
    avatarImg.className = "avatar border";
    avatarImg.src = avatarSrc;
    avatarImg.alt = "";
    avatar.append(avatarImg)

    //creating section for name and song 
    const headerTexts = document.createElement('div')
    headerTexts.className = "header_texts";
    avatar.append(headerTexts)

    //creating section for name
    const nameUser = document.createElement('div')
    nameUser.className = "name";
    nameUser.textContent = "Name";
    headerTexts.append(nameUser)

    //creating section for song
    const songUser = document.createElement('div')
    songUser.className = "song";
    songUser.textContent = song;
    headerTexts.append(songUser) 

    //creating container 2
    const cnt2 = document.createElement('div');
    cnt2.className = "container_2";
    borderPhone.append(cnt2) 

    //creating button like
    const btnLike = document.createElement('button');
    btnLike.id = "myButtonLike";
    btnLike.className = "btn1 heart";
    btnLike.onclick = "likePostFn()";
    cnt2.append(btnLike)
    btnLike.addEventListener("click", likePostFn);

    //creating button like image
    const btnLikeImg = document.createElement('img')
    btnLikeImg.id = buttonId;
    btnLikeImg.style.width = "20px";
    btnLikeImg.style.height = "20px";
    btnLikeImg.src = "./images/heart.png";
    btnLikeImg.alt = "";
    btnLike.append(btnLikeImg)

    //creating button comment
    const btnComment = document.createElement('button');
    btnComment.id = "myButtonComments";
    btnComment.className = "btn1 comments";
    btnComment.onclick = "commentPostFn()";
    cnt2.append(btnComment)
    
    //creating button comment image
    const btnCommentImg = document.createElement('img')
    btnCommentImg.id = "comment_btn";
    btnCommentImg.style.width = "20px";
    btnCommentImg.style.height = "20px";
    btnCommentImg.src = "./images/comment.png";
    btnCommentImg.alt = "";
    btnComment.append(btnCommentImg) 
                  
    //creating button share
    const btnShare = document.createElement('button');
    btnShare.id = "myButtonShare";
    btnShare.className = "btn1 share";
    btnShare.onclick = "sharePostFn()";
    cnt2.append(btnShare) 

    //creating button share
    const btnShareImg = document.createElement('img')
    btnShareImg.id = "share_btn";
    btnShareImg.style.width = "20px";
    btnShareImg.style.height = "20px";
    btnShareImg.src = "./images/share.png";
    btnShareImg.alt = "";
    btnShare.append(btnShareImg) 
            
    //creating button text comment for the post
    const textComment = document.createElement('button');
    textComment.id = openCommentText;
    textComment.className = "comment_text";
    textComment.onclick = "openCommentTextFn()";
    textComment.textContent = comment;
    cnt2.append(textComment)              
    textComment.addEventListener("click", openCommentTextFn);                   
                            
                                        
};

createPost("./images/avatar.jpg", 'S.O.A.D. - Toxicity', `url('./images/img_1.jpg')`, 'myButtonLike1', 'openCommentText1', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.');
createPost("./images/avatar2.jpg", 'S.O.A.D. - Chop suey', `url('./images/img2.jpg')`, 'myButtonLike2', 'openCommentText2', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.');
createPost("./images/avatar3.jpg", 'S.O.A.D. - Lonely day', `url('./images/img3.jpg')`, 'myButtonLike3', 'openCommentText3', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.');
createPost("./images/avatar4.jpg", 'S.O.A.D. - Radio/Video', `url('./images/img4.jpg')`, 'myButtonLike4', 'openCommentText4', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.');
createPost("./images/avatar5.jpg", 'S.O.A.D. - Hypnotize', `url('./images/img5.jpg')`, 'myButtonLike5', 'openCommentText5', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.');
