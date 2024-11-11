let sequential_id = 8

const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
    }]

    function get(){
        return users
    }

    function get_by_id(id){
        const the_users=users.filter(user=>user.id===id)
        return the_users.length>0 ? the_users[0] : null;
    }

    function post(user){
        const new_user={...user, id: ++sequential_id}
        users.push(new_user)
        return new_user
    }

    function put(id,user){
        //if id exist than replace the fieleds with the given user
        //if not exist insert this user (with the correct id)
        const filter_users=users.filter(user=>user.id===id)
        if(filter_users.length==0){
            //if not exist
            post(user)
        }//if exist
        const index=users.indexOf(filter_users[0])
        users[index]={...users[index], ...user}
        return users[index]
    }

    function patch(id,user){
        //if exist replace, not exist do nothing

        const filter_users=users.filter(user=>user.id===id)
        if(filter_users==0){
             //if not exist
             return
        }
        //if exist 
        const index=users.indexOf(filter_users[0])
        users[index]={...users[index],...user}
        return users[index]
           
    }

    function delete_by_id(id){
        const filter_users=users.filter(user=>user.id===id)
        if(filter_users.length==0){
            //not exist do nothing
            return false
        }
        //exist -- remove
        const index=users.indexOf(filter_users[0])
        users.slice(1,index)
        return true
    }

    module.exports={ get, get_by_id, post, put, patch, delete_by_id }