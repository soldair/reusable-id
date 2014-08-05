
module.exports = function(){
  var o = {
    ids:{},
    max:0,
    get:function(){
      for(var i=1;i<this.max;++i){
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
      if(this.ids[id] && id == this.max) this.max--;
      delete this.ids[id];
    }
  }

  return o;
}

