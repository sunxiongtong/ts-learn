function setTitle(title) {
    document && (document.title = title)
}

function getTitle(){
    return document?document.title:''
}

let documentTitle = getTitle()

console.log('我是handletitle页面')