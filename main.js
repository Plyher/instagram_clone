

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
let isFilled2 = false
function likePostFn2() {
    const img2 = document.getElementById('like_btn2')
    console.log(img2)
    if(!isFilled) { 
        img2.src = './coeur.png'
        isFilled = true
        // end of fn
    } else { 
        img2.src = './heart.png'
       isFilled = false
    }

}
let isFilled3 = false

function likePostFn3() {
    const img3 = document.getElementById('like_btn3')
    console.log(img3)
    if(!isFilled) { 
        img3.src = './coeur.png'
        isFilled = true
        // end of fn
    } else { 
        img3.src = './heart.png'
       isFilled = false
    }

}
let isFilled4 = false

function likePostFn4() {
    const img4 = document.getElementById('like_btn4')
    console.log(img4)
    if(!isFilled) { 
        img4.src = './coeur.png'
        isFilled = true
        // end of fn
    } else { 
        img4.src = './heart.png'
       isFilled = false
    }

}

let isFilled5 = false
function likePostFn5() {
    const img5 = document.getElementById('like_btn5')
    console.log(img5)
    if(!isFilled) { 
        img5.src = './coeur.png'
        isFilled = true
        // end of fn
    } else { 
        img5.src = './heart.png'
       isFilled = false
    }

}
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
let isOpen2 = true

function openCommentTextFn2() {
    const openText = document.getElementById('texte2')
    console.log(openText)
    if(isOpen) { 
        openText.style.overflow = 'hidden';
        isOpen = false
       
    } else { 
        openText.style.overflow = 'visible';
        isOpen = true
    }
    
}
let isOpen3 = true

function openCommentTextFn3() {
    const openText = document.getElementById('texte3')
    console.log(openText)
    if(isOpen) { 
        openText.style.overflow = 'hidden';
        isOpen = false
       
    } else { 
        openText.style.overflow = 'visible';
        isOpen = true
    }
    
}
let isOpen4 = true

function openCommentTextFn4() {
    const openText = document.getElementById('texte4')
    console.log(openText)
    if(isOpen) { 
        openText.style.overflow = 'hidden';
        isOpen = false
       
    } else { 
        openText.style.overflow = 'visible';
        isOpen = true
    }
    
}
let isOpen5 = true

function openCommentTextFn5() {
    const openText = document.getElementById('texte5')
    console.log(openText)
    if(isOpen) { 
        openText.style.overflow = 'hidden';
        isOpen = false
       
    } else { 
        openText.style.overflow = 'visible';
        isOpen = true
    }
    
}
