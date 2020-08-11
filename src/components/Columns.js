import React from "react";

function Columns({users}) {

    return (
        <tbody>
          {users[0] !== undefined && users[0].name !== undefined ? (
            users.map(({ login, name, picture, phone, email, dob }) => {
              return (
                <tr key={login.uuid}>
                  <td data-th="Image" className="align-middle m-3">
                    <img
                      src={picture.medium}
                      alt={"profile image for " + name.first + " " + name.last}
                      className="img-responsive"
                    />
                  </td>
                  <td data-th="Name" className="name-cell align-middle m-3">
                      <div className="d-flex justify-content-center">
                        {name.first} {name.last}
                      </div>
                        
                  </td>
                  <td data-th="Phone" className="align-middle m-3">
                    {phone}
                  </td>
                  <td data-th="Email" className="align-middle m-3">
                    <a href={"mailto:" + email} target="__blank">
                      {email}
                    </a>
                  </td>
                  <td data-th="Birthday" className="align-middle m-3">
                     {dob.date}
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      );

}

export default Columns;