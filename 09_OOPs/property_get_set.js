function User(username,password){
    this._password=password;
    this._username=username;

    Object.defineProperty(this ,'username',{
        get:function(){
            return this._username.toUpperCase()
        }
        set:function(value){
            this._username=value
        }
    })
}