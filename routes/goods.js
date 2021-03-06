var goodsModel=require('../models').goodsModel;

exports.show=function(req,res){       //后台商品分页显示
	var num=req.params.pageid-1;
	goodsModel.find({}).skip(num*6).limit(6).exec(function(err,data){
		if(err){
			console.log(err);
		}else{
			goodsModel.find({}).count(function(err,sum){
				res.send({count:sum,result:data});
			});
		}
	});
};
exports.search=function(req,res){     //前台搜索商品
	var name=req.params.goodsname;
	var pattern=new RegExp(name);
	goodsModel.find({gName:pattern},function(err,data){
		if(err){
			throw err;
		}else{
			res.send({code:200,result:data});
		}
	});
};
exports.select=function(req,res){     //前台搜索商品
	var name=req.params.goodsname;
	var pattern=new RegExp(name);
	goodsModel.find({gName:pattern}).limit(6).exec(function(err,data){
		if(err){
			throw err;
		}else{
			res.send({code:200,result:data});
		}
	});
};

exports.add=function(req,res){           //商品添加
	var goods={
		gName: req.body.gName,
		gPrice: req.body.gPrice,
		gImg:req.body.gImg,
		gDescription: req.body.gDescription,
		gCategory: req.body.gCategory,
		gSum: req.body.gSum
	};
	goodsModel.create(goods,function(err,data){
		if(err){
			console.log(err);
		}else{
			console.log(data);
			res.send(200);
		}
	});
};
exports.del=function(req,res){           //删除商品
	goodsModel.remove({_id:{$in:req.body.list}},function(err){
		if(err){
			console.log(err);
		}else{
			res.send({code:200});
		}
	});
};
//var id='';
exports.Des=function(req,res){
	//id=req.params.id;
	goodsModel.findOne({_id:req.params.id},function(err,data){
		if(err){
			console.log(err);
		}else{
			console.log(data);
			res.send(data);
		}
	})
};
exports.modify=function(req,res){       //修改商品信息
	var goods={
		gName: req.body.gName,
		gPrice: req.body.gPrice,
		gImg:req.body.gImg,
		gDescription: req.body.gDescription,
		gCategory: req.body.gCategory,
		gSum: req.body.gSum
	};
	goodsModel.update({_id:req.params.id},{$set:goods},function(err){
		if(err){
			console.log(err);
		}else{
			res.send(200);
		}
	});
};