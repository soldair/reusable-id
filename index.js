
module.exports = function(){
  var o = {
    ids:{},
    max:0,
    get:function(){
      for(var i=0;i<this.max;++i){
        if(!this.ids[i]){
          this.ids[i] = true;
          return i;
        }
      }

      this.max++;
      this.ids[this.max] = true;
      return this.max;
    },
    release:function(id){
      delete this.ids[id];
      if(id == this.max) this.max--;
    }
  }

  return o;
}

