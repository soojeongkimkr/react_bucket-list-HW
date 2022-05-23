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
    
    
    this.text = React.createRef();
    //console.log(this.text)
};
  //componentDidMount()는 렌더링이 모두 끝난 후 실행되는 함수이다.
  //따라서 이 것을 사용하면 렌더링이 된 후의 상황을 볼 수 있다.
  componentDidMount(){
    // console.log(this.text.current.value)
  }; 
  addBucket = () => {
      // console.log(this.text.current.value);
      this.setState({list: [...this.state.list, this.text.current.value]});
    };
  

// 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <AppWrap className="App">
        <Container>
          <Title>나의 버킷리스트</Title>
          <Line/>
          <BucketList list_a={this.state.list}/>
        </Container>  
        
        <InputDiv>
          <input type="text" ref={this.text}/>
          <button onClick={this.addBucket}>저장</button>
        </InputDiv>
      </AppWrap>
    );
  };
};

const AppWrap = styled.div`
  background-color:#eee;
  height: 100vh;
  width: 100vw;
  display:flex;
  flex-direction: column;
`;

const Container = styled.div`
  background-color:#fff;
  width: 50vw;
  max-width:350px;
  height: 50vh;
  margin: 10px auto;
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

const InputDiv = styled.div`
  background-color:#fff;
  width: 50vw;
  max-width:350px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export default App;


