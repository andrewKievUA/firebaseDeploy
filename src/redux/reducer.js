import axios from 'axios';
    const initialState =[[],[]]



 function getData(params) {
     console.log("startded");
    axios.get(`https://alarmstonelight-default-rtdb.europe-west1.firebasedatabase.app/arrays/.json`,)
    .then(response  => {
      let zz= Object.values(response.data)
      return [zz[0].stat,zz[0].alarms]
    })
     
 }

        
   

    

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "cubs": console.log("hehehe")  

        default:return [...state]
         
    }
}