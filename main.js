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

function myCommentFn() {
    const cmt = document.getElementById('myComment')
    console.log(cmt)
    if(isHello) { 
        cmt.textContent = 'goodbye Igor!'
        isHello = false
        // end of fn
    } else { 
        cmt.textContent = 'hello Igor!'
        isHello = true
    }
    //
}
let isBlack = true

function testFn() {
    const cv = document.getElementById('noir')
    console.log(cv)
    if(isBlack) { 
        cv.style['z-index'] = '100';
        isBlack = false
       
    } else { 
        cv.style['z-index'] = '-100';
        isBlack = true
    }
    
}


// zb.style.zIndex = '-100';