
// let arr = [{
//   name : 'tiger',
//   age : 34,
// }, 2, 3, 4]

// console.log(arr[0].name);

const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]


const navigation = getNode('.navigation');
const visualImage = getNode('.visual img');

// const list = getNodes('.navigation > li');

// console.log(navigation);


// 네비게이션에 이벤트를 건다
// 핸들러를 연결한다
// 이벤트 객체에서 타겟을 찾는다


//유사배열을 배열로 만들어주는 함수
function makeArray(arr){
  return Array.from(arr)
}

//내가 선택한 li에게 is-active 클래스를 넣어주세요.
//내가 선택하지 않은(모든 li) li에게 is-active 클래스를 제거해주세요.
//선택한 대상의 data-index값을 가져와주세요.

//비주얼 안에 있는 이미지를 가져온다.
//이미지의 src 속성에 접근한다.
//src의 값을 index로 바꾼다.
//alt도 변경한다.
  //> data 배열의 0번째에 있는 alt값이 필요함.


function handler(e) {
  
  let target = e.target.closest('li');
  if(!target) return;
  //target이 없을땐 밑 코드들이 실행되면 안되니까
  //위치를 여기로 이동시킴. (target이 없을때 에러 뜸)


  let list = makeArray(navigation.children);
  //children을 사용하면 자식들 다 가져올 수 있음.

  //선택한 대상의 data-index값 가져오기
  let index = attr(target, 'data-index');


  //선택하지 않은 대상 is-active 제거하기
  list.forEach(item=>removeClass(item, 'is-active'))

  
  //인자가 3개니까 set. 이미지의 src 속성에 접근해서 src의 값을 index로 변경
  // attr(visualImage, 'src', `./assets/part01/visual${index}.jpg`);

  //data에서 가져오는 방식으로 수정
  attr(visualImage, 'src', `./assets/part01/${data[index-1].src}`);
  
  

  //alt 변경 (data배열의 0번째에 있는 alt값을 가져와서 변경해주기)
  attr(visualImage, 'alt', data[index-1].alt);
  
  //선택한 li에 is-active 클래스 넣기
  addClass(target, 'is-active');

}



navigation.addEventListener('click', handler);







// const li_1 = getNode('.navigation > li:nth-child(1)');
// const li_2 = getNode('.navigation > li:nth-child(2)');

// li_1.addEventListener('click', ()=>{
  
// })

// li_2.addEventListener('click', (e)=>{
//   li_1.classList.remove('is-active')
//   e.currentTarget.classList.add('is-active')
// })










