import React from "react";
import axios from "axios";  // json 처리를 위해 axios 추가 -> 원래는 fetch를 쓴다고 함
import Movie from "../components/Movie";
import './Home.css';

class Home extends React.Component{//state는 class형 컴포넌트에서 가능
  
  state = { 
    isLoading:true,   //영화 앱 데이터 로딩 상태 보여주기   
    movies:[],  //여기에 객체 원소 저장
  }
  getMovies = async () =>{  //자바스크립트에게 이 함수는 시간이 필요하고(이 함수는 비동기다)
    const{  //ES6의 구조 분해 할당
      data:{
        data:{movies},
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating'); //평점순으로 sorting 함
    this.setState({movies, isLoading: false});  // 다 완료되면 값을 false로 바꿔줌
  };
  componentDidMount(){  //6초 후에 we are ready로 바뀜
    this.getMovies();
  }
  render(){ // render가 실행되면 호출되는 생명주기 함수 -> componentDidMount() -> setTimeout()적용
    const {isLoading, movies} = this.state;
    return <section className="container">{isLoading? ( //jsx때문에 class가 예약어여서 html에서 사용할 수 없음
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
    ): (<div className="movies">
      {movies.map((movie)=>{
      console.log(movie);
      return (<Movie 
        key={movie.id}  // 컴포넌트 여러 개 출력 시 유일한 값을 이용하여 key props를 추가해야 함
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
        genres={movie.genres}
      />); //movie 컴포넌트 반환 -> 여기서 Movie 컴포넌트 출력
    })}
    </div>)}</section>; //isLoading이 false인 경우 데이터 출력
  }
}

export default Home;