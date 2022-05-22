// 리액트 패키지를 불러옵니다.
import React from 'react'; 
import styled from 'styled-components'
const BucketList = (props) => {

// Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
const my_lists = props.list_a;

// 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
return (
  <div>
    {my_lists.map((list, index) => {
    // 콘솔을 확인해봅시다 :)
      console.log(list);
      return (<ItemStyle key={index}>{list}</ItemStyle>);
      })}
  </div>
  );
};


const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color:aliceblue;
`;


// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export {BucketList};