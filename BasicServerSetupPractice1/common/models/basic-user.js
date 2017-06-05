'use strict';

module.exports = function(Basicuser) {

  Basicuser.createUser = function(userDetails,cb){
    var i = userDetails[0];
    var first_name = i['first_name'];
    var last_name = i['last_name'];
    var phone_number = i['phone_number'];
    Basicuser.create({"first_name":first_name,"last_name":last_name,"phone_number":phone_number},function(err,response){
      if(err!=null){
        cb(null,err);
      }else{
        cb(null,"User "+response.first_name+" "+response.last_name+" id created with id "+response.id);
      }
    });
  }

  Basicuser.remoteMethod("createUser",{
    accepts:{arg:"userDetails",type:"array",required:true},
    returns:{arg:"returnMessage",type:"string"},
    http:{path:"/newUser",verb:"post"}
  })
  // Basicuser.disableRemoteMethodByName("create",false);
  // Basicuser.disableRemoteMethodByName("find",false);
  // Basicuser.disableRemoteMethodByName("upsert",false);
  // Basicuser.disableRemoteMethodByName("update",false);
  // Basicuser.disableRemoteMethodByName("count",false);
  // Basicuser.disableRemoteMethodByName("createChangeStream",false);
  // Basicuser.disableRemoteMethodByName("findOne",false);
  // Basicuser.disableRemoteMethodByName("count",false);
  // Basicuser.disableRemoteMethodByName("replaceOrCreate",false);
  // Basicuser.disableRemoteMethodByName("upsertWithWhere",false);
  // Basicuser.disableRemoteMethodByName("upsertById",false);

};
