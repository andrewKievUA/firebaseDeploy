loginHandler = async () => {
    const authData = {
      email: `andrew22221990mkssdf@gmail.com`,
      password: `8Bw78Yk93333`,
      returnSecureToken: true
    }
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9SxNhvf12JItVSouSUhRE9hRPE6MQFC8', authData)
  
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }
  
    deleteDataBase = async () => {
      axios.delete(`https://alarmstonelight-default-rtdb.europe-west1.firebasedatabase.app/arrays/.json`,[3443,34333,34114,41413233]).then(response  => {
        console.log(response)
      })
    }
  
  
    postDataBase = async () => {
      axios.post(`https://alarmstonelight-default-rtdb.europe-west1.firebasedatabase.app/arrays/-Mh4_5QeT9H7aATF4c4L.json`,
      [
        [{alarm:"авария сборщика форм",type:1,time:23423423423},{alarm:"авария сборщика форм При Опускании",type:1,time:23423423423}] 
        ]
           
        ).then(response  => {
        console.log(response)
      })
    }
  
  
  loginHandler2 = async () => {
    const authData = {
      email: `andrew22221990mkssdf@gmail.com`,
      password: `8Bw78Yk93333`,
      returnSecureToken: true
    }
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9SxNhvf12JItVSouSUhRE9hRPE6MQFC8', authData)
  
      console.log(response)
    } catch (e) {
      console.log(e)
      console.log("rejected user")
    }
  }
  
    //   componentDidMount(){
    //   axios.post(`https://alarmstonelight-default-rtdb.europe-west1.firebasedatabase.app/arrays/-Mh4_5QeT9H7aATF4c4L.json`,
    //   [
    //     [{alarm:"авария сборщика форм",type:1,time:23423423423},{alarm:"авария сборщика форм При Опускании",type:1,time:23423423423}] 
    //     ]
           
    //     ).then(response  => {
    //     console.log(response)
    //   })
    // }
  
  
  