const Ceshi = require('./models');

class CeshiCtl {
  async find(ctx){
    const { per_page = 10 } = ctx.query;
    const page = Math.max(ctx.query.page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    let data = await Ceshi
    .find()
    .limit(perPage).skip(page * perPage);
    ctx.body = {code:20000,data}
  }
  async create(ctx){
    ctx.verifyParams({
      Latitude: { type: 'Number', required: true},
      Longitude: { type: 'Number', required: true },
      Engine_Speed: { type: 'Number', required: true},
      Engine_Temperature: { type: 'Number', required: true},
      Time : { type: 'Number', required: true},
      
    })
    const ceshi = await new Ceshi(ctx.request.body).save();
    ctx.body = {code:20000,data:ceshi};
  }
  async createMore(ctx){
    const arr = JSON.parse(ctx.request.body.data)
    for(let i=0;i<arr.length;i++){
      await new Ceshi(arr[i]).save();
    }
    ctx.body = {code:20000,data:'Succeed'};
  }
}

module.exports = new CeshiCtl();