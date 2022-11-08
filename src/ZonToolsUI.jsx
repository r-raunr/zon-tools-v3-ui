import React, { useEffect, useState } from 'react';
import axios from "axios";

const ZonToolsUI = () => {
  const [plans, setPlans] = useState([]);
  async function setData() {
    await axios.post("http://127.0.0.1:8000/api/subscriptions/token", {
      email: 'ellisha@carbon6.io',
    }).then(res => {
      let token = res.data.token;
      localStorage.setItem("access_token", token);
      const webApiUrl = "http://127.0.0.1:8000/api/subscriptions/plans";
      // localStorage.removeItem("access_token");
       axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${token}`} }).then(res => {
        setPlans(res.data.plans);
      });
    });
    // ...
  }
  useEffect(() => {
    setData();
  },[]);

    return (
      <div>
        <button style={{backgroundColor :'#1E1E2D',color:'white',width:'100%',padding: '50px', fontSize: "24px"}}>
          Subscription Plans
        </button>
        <table style={{margin: "0px auto"}}>
          <tr style={{color:'#9849fd', fontSize: "16px", padding: '25px'}}>
                  <th>{"Name"}</th>
                  <th>{"Type"}</th>
          </tr>
          {plans && plans.map(plan => (
            <tr>
              <td>{plan.name}</td>
              <td>{plan.type}</td>
            </tr>
          ))}
        </table>
      </div>
    );
}

export default ZonToolsUI;
