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
    //
}
let isHello = true

function myCommentSpaceFn() {
    const cmt = document.getElementById('myCommentSpace')
    console.log(cmt)
    if(isHello) { 
        cmt.textContent = 'Comment added!'
        isHello = false
        // end of fn
    } else { 
        cmt.textContent = 'Add Comment!'
        isHello = true
    }
    //
}
let isBlack = true

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

// zb.style.zIndex = '-100';