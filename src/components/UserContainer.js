import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

const UserContainer = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers();
    }, []);

  return userData.isLoading ? (
      <h2>Loading...</h2>
  ) : userData.error ? (
      <h2>{userData.error}</h2>
  ) : (
    <div className='UserContainer'>
        <h2>Users Data</h2>
        {
            userData && userData.users && userData.users.map(user => {
                <p>{user}</p>
            })
        }
</div>
  )
}

const mapStateToProps = (state, ownProps) => {
    return {
        userData: state.user
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}


export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(UserContainer);