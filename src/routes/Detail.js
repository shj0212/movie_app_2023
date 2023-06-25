import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

// function Detail(){
//     const location = useLocation();
//     const nav = useNavigate();
//     console.log(location.state);
//     console.log(nav);
//     return <span>hello</span>;
// }

const withRedirect = Component => {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (location.state == null) {
        navigate('/');
      }
    }, [navigate, location.state]);

    return <Component location={location} {...props} />;
  };
};

class Detail extends React.Component {
  render() {
    const { location } = this.props;
    if(location.state){
      return <span>{location.state && location.state.title}</span>;
    }else{
      return null;
    }
  }
}

export default withRedirect(Detail);