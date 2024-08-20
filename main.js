

let isFilled = false

function likePostFn() {
    const img = document.getElementById('like_btn')
    console.log(img)
    if(!isFilled) { 
        img.src = './coeur.png'
        isFilled = true
        // end of fn
    } else { 
        img.src = './heart.png'
       isFilled = false
    }

}
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
let isOpen = true

function openCommentTextFn() {
    const openText = document.getElementById('texte')
    console.log(openText)
    if(isOpen) { 
        openText.style.overflow = 'hidden';
        isOpen = false
       
    } else { 
        openText.style.overflow = 'visible';
        isOpen = true
    }
    
}
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


function createPost() {
    let isFilled = false;
    let isOpen = true;
    function likePostFn() {
        const img = document.getElementById('like_btn');
        if(!isFilled) { 
            img.src = './coeur.png';
            isFilled = true;
        } else { 
            img.src = './heart.png';
           isFilled = false;
        };
    
    };
    function openCommentTextFn() {
        const openText = document.getElementById('texte');
    
        if(isOpen) { 
            openText.style.overflow = 'hidden';
            isOpen = false;
        } else { 
            openText.style.overflow = 'visible';
            isOpen = true;
        }
        
    };
const borderPhone = document.createElement('div');
borderPhone.className = "phone";
    document.body.append(borderPhone)

    const cnt = document.createElement('div');
        cnt.className = "container";
        borderPhone.append(cnt) 

            const avatar = document.createElement('div')
                avatar.className = "avatar_container";
                cnt.append(avatar)
                    const avatarImg = document.createElement('img')
                        avatarImg.className = "avatar border";
                        avatarImg.src = "./avatar.jpg";
                        avatarImg.alt = "";
                        avatar.append(avatarImg)
                const headerTexts = document.createElement('div')
                    headerTexts.className = "header_texts";
                    avatar.append(headerTexts)
                        const nameUser = document.createElement('div')
                            nameUser.className = "name";
                            nameUser.textContent = "Name";
                            headerTexts.append(nameUser)
                        const songUser = document.createElement('div')
                            songUser.className = "song";
                            songUser.textContent = "S.O.A.D. - Toxicity";
                            headerTexts.append(songUser) 
    const cnt2 = document.createElement('div');
        cnt2.className = "container_2";
        borderPhone.append(cnt2) 

            const btnLike = document.createElement('button');
                btnLike.id = "myButtonLike";
                btnLike.className = "btn1 heart";
                btnLike.onclick = "likePostFn()";

btnLike.addEventListener("click", likePostFn);

                cnt2.append(btnLike) 
                    const btnLikeImg = document.createElement('img')
                        btnLikeImg.id = "like_btn";
                        btnLikeImg.style.width = "20px";
                        btnLikeImg.style.height = "20px";
                        btnLikeImg.src = "./heart.png";
                        btnLikeImg.alt = "";
                        btnLike.append(btnLikeImg)

            const btnComment = document.createElement('button');
                btnComment.id = "myButtonComments";
                btnComment.className = "btn1 comments";
                btnComment.onclick = "commentPostFn()";
                cnt2.append(btnComment) 
                    const btnCommentImg = document.createElement('img')
                        btnCommentImg.id = "comment_btn";
                        btnCommentImg.style.width = "20px";
                        btnCommentImg.style.height = "20px";
                        btnCommentImg.src = "./comment.png";
                        btnCommentImg.alt = "";
                        btnComment.append(btnCommentImg) 
                        
            const btnShare = document.createElement('button');
                btnShare.id = "myButtonShare";
                btnShare.className = "btn1 share";
                btnShare.onclick = "sharePostFn()";
                cnt2.append(btnShare) 
                    const btnShareImg = document.createElement('img')
                        btnShareImg.id = "share_btn";
                        btnShareImg.style.width = "20px";
                        btnShareImg.style.height = "20px";
                        btnShareImg.src = "./share.png";
                        btnShareImg.alt = "";
                        btnShare.append(btnShareImg) 
            
            const textComment = document.createElement('button');
                textComment.id = "texte";
                textComment.className = "comment_text";
                textComment.onclick = "openCommentTextFn()";
                textComment.textContent = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.";
                    cnt2.append(textComment) 
                    
                    textComment.addEventListener("click", openCommentTextFn);                   
                            
                                        
};

createPost();