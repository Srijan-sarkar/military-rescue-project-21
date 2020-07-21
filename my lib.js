function collisionDetect(obj1,obj2){

    obj1c = obj1.x + obj1.width/2;
    obj2c = obj2.x + obj1.width/2;

    if (obj1c>=obj2c){

        return true;

    }else{

        return false;

    }
}