

const contents = getNode('.contents');

//input 가져오기
const textField = getNode('#comment37');

//입력창 비워주는 함수
function clearText(target) {
  target.value = "";
}



function handler(e){

  let target = e.target;



  //좋아요 영역 어느 곳을 눌러도 좋아요 체크되기 (toggle)

  //만약에 dataset.name이없는 자식요소를 선택했다면
  //그 위의 부모를 찾음. (dataset.name을 가진 부모가 나올때까지)

  //눌렀는데 대상의 data-name을 못가져올때!
  //그러면 부모의 data-name을 가져옴. (data-name을 가진 상위 요소가있을때까지 찾음.)
  while(!attr(target, 'data-name')){
    target = target.parentNode;

    //이상한데 클릭해서 data-name 못찾으면 무한반복 
    //될수도 있어서 break 해줘야함.

    if(target.nodeName === 'BODY'){
      target = null;
      return;
    }

  }

  if(target.dataset.name === 'like'){
    
    console.log('like!');
    toggleClass(target, 'active');
    
  }

  //댓글을 눌렀을때 입력창으로 포커스가게 하기
  if (target.dataset.name === 'comment') {
    console.log('comment!');

    textField.focus();
    //input에서 제공하는 메소드.
    //focus()를 사용하면 그 입력창으로 포커스가 감.
 
  }


  //입력창에 글을 쓰고 아이콘을 클릭했을때
  //그 내용이 콘솔에 뜨게 하기

  if(target.dataset.name === 'send'){
    console.log(textField.value);
    
    //입력한 내용을 댓글 목록에 띄우기
    let template = /*html */`
    <div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">신섬범</a></div>
                <div class="text_field">${textField.value}</div>
            </div>
        </div>
    </div>
    `

    insertLast('.comment_container', template);

    clearText(textField);
    //댓글 전송한 다음 입력창 비워주기

  }

}


contents.addEventListener('click', handler);

//엔터키 눌렀을 때 전송되게 (나머지는 위코드랑 동일)
textField.addEventListener('keydown', (e)=>{
  if(e.keyCode === 13) {
    
    // textField.value

    let template = /*html */`
    <div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">신섬범</a></div>
                <div class="text_field">${textField.value}</div>
            </div>
        </div>
    </div>
    `

    insertLast('.comment_container', template);

    clearText(textField);

  }
})


// const off = bindEvent(contents, 'click', handler);















