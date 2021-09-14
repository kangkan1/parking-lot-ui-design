import React, {useState} from 'react';
function Profile (){
  const json = {
                data: {
                  available: {
                    "12-08-2021": {
                      a: "12:30 PM",
                      b: "1:20 PM",
                      c: 70,
                      d: "5%",
                      e: 73.5
                    },
                    "11-08-2021": {
                      a: "7:30 AM",
                      b: "8:45 PM",
                      c: 10,
                      d: "5%",
                      e: 10.5
                    },
                    "09-08-2021": {
                      a: "8:30 PM",
                      b: "10:30 PM",
                      c: 76,
                      d: "5%",
                      e: 79.8
                    },
                    "06-08-2021": {
                      a: "5:30 PM",
                      b: "6:50 PM",
                      c: 60,
                      d: "5%",
                      e: 63
                    },
                    "05-08-2021": {
                      a: "3:30 PM",
                      b: "4:10 PM",
                      c: 20,
                      d: "5%",
                      e: 21
                    },
                    "03-08-2021": {
                      a: "9:30 AM",
                      b: "10:10 AM",
                      c: 40,
                      d: "5%",
                      e: 42
                    },
                  }
                }
              };

  const header = ["Date", "Start Time", "End time", "Price", "GST", "Total Price"];
  const [tableData, setTableData] = useState(json);
  const renderTable = () =>{
    return(
            <div>
              <h2>Your previuos bookings are :</h2>
              <table style={{border:'1px solid #eee', boxShadow:'0 4px 5px #ccc'}}>
                <thead>
                  <tr>{header.map((h, i) => 
                    <th style={{backgroundColor: '#04AA6D', padding:'1em',
                                textAlign: 'left', color:'white'}}
                      key={i}>
                      {h}
                    </th>)}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(tableData.data.available).map((k, i) => {
                    let data = tableData.data.available[k];
                    return (
                      <tr key={i}>
                        <td style ={{backgroundColor:i%2===0?'white':'#ddd'}}>{k}</td>
                        <td style ={{backgroundColor:i%2===0?'white':'#ddd'}}>{data.a}</td>
                        <td style ={{backgroundColor:i%2===0?'white':'#ddd'}}>{data.b}</td>
                        <td style ={{backgroundColor:i%2===0?'white':'#ddd'}}>{data.c}</td>
                        <td style ={{backgroundColor:i%2===0?'white':'#ddd'}}>{data.d}</td>
                        <td style ={{backgroundColor:i%2===0?'white':'#ddd'}}>{data.e}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
      );
  }
    return (
      <div style={{display:'table', margin:'0 auto'}} >
        <h1>This is profile screen</h1>
        {renderTable()}
      </div>
    );
  
}
export default Profile