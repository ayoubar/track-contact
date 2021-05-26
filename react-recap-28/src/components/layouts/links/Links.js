import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Links(props) {
  const isConnected = true;
  return (
    <ul>
      {isConnected
        ? props.connected.map((x, index) => (
            <li key={index}>
              {' '}
              <Link style={linkCss} to={x.path}>
                {x.name}
              </Link>
            </li>
          ))
        : props.notConnected.map((x, index) => <li key={index}> {x}</li>)}
    </ul>
  );
}

const linkCss = {
  color: '#ffffff',
  textDecoration: 'none',
};

Links.propTypes = {
  connected: PropTypes.array,
  notConnected: PropTypes.array,
  name: PropTypes.string,
  isOk: PropTypes.bool,
  n: PropTypes.number,
};

Links.defaultProps = {
  notConnected: ['Home', 'Login', 'Register', 'Y'],
};

/*
  array.map()
  array.filter()
  array.reduce()
  array.find()
  array.findIndex()
  array.includes()
  array.indexof()
  array.join()
  ...
*/

/*

const array = ["Chreyd", "youssra", "nawfel"]

array.map(x => x + "2021") 
===>  ["Chreyd2021", "youssra2021", "nawfel2021"]
                     <===>
array.map(x =>  { 
  return x + "2021"
})

*/

export default Links;
