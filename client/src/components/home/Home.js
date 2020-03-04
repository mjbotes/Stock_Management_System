import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Home = ({isAuthenticated }) => {

  const onSubmit = async e => {
    e.preventDefault();
  };

  // if (!isAuthenticated) {
  //   return <Redirect to='/login' />;
  // }

  let Products = [];
  Products[0] = [1, 2, 3, 4];
  Products[1] = ["This", "This2", "This3", "This4"];
  Products[2] = [13, 22, 33, 44];
  Products[3] = [11, 2, 3, 4];

  var i = 0;
  var table = [];
  table.push(<tr class="lead text-primary">
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Add To Cart</th>
          </tr>);
  while (Products[0][i] > 0)
  {
      table.push(<tr>
              <td>{Products[1][i]}</td>
              <td>R{Products[2][i]}</td>
              <td>{Products[3][i]}</td>
              <td><input type='text' class='form' id={i} defaultValue="0"></input></td>
          </tr>);
      i++;
  }

  return (
    <Fragment>
        <h1 className='x-large text-primary'>Products</h1>
        <br />
        <form className='form' onSubmit={e => onSubmit(e)}>
          <input type='text'></input>
          <br />
          <div className=""><button className="btn btn-success" type="submit">Search</button></div>
        </form>
        <br />
        <br />
        <br />
        <form className='form' onSubmit={e => onSubmit(e)}>
          <table> 
            {table}
          </table>
          <br />
          <div className=""><button className="btn btn-success" type="submit">Order</button></div>
        </form>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(Home);