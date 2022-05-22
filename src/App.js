import React from "react";
import "./style.css";
import {BucketList} from "./BucketList"
// import BucketList from './BucketList';
import styled from "styled-components";


// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {

  constructor(props){
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
    list: ['캠핑 가기', '여행 가기', '개발자 취직하기'],
  };
}

// 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
render() {
  return (
    <div className="App">
      <Container>
        <Title>나의 버킷리스트</Title>
        <Line/>
        <BucketList list_a={this.state.list}/>
      </Container>  
    </div>
  );
}
}

const Container = styled.div`
  background-color:#fff;
  width: 50vw;
  max-width:350px;
  height: 80vh;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;; 
`;


export default App;


