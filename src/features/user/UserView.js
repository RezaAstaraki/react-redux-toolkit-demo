import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./userSlice";

function UserView() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // useDispatch()
  return (
    <div>
      <h2>List of Users</h2>
      {user.isLoading && <div>is loading ... </div>}
      {!user.isLoading && user.user.length ? (
        <ul>
          {user.user.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}

      {!user.isLoading && !user.user.length ? <div>{user.error}</div> : null}
    </div>
  );
}

export default UserView;
