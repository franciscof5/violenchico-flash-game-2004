(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Boca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Dente
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAbgEQg9gGAKALQAJALAlgI");
	this.shape.setTransform(2.6,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYABQgKgLA9AGIgFAIQgQADgKAAQgPAAgFgGg");
	this.shape_1.setTransform(2.6,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AAbgIQg9gCAKALQAJALAlgF");
	this.shape_2.setTransform(2.6,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYABQgKgLA9ACIgFAPIgUACQgUAAgGgIg");
	this.shape_3.setTransform(2.6,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5,1,1).p("AAbgKQg9AAAKAKQAJAMAjgC");
	this.shape_4.setTransform(2.6,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAAQgKgKA9AAIgHAUIgIABQgcAAgIgLg");
	this.shape_5.setTransform(2.6,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AAagHQg8gFAKAMQAKALAigC");
	this.shape_6.setTransform(2.5,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAAQgKgMA8AFIgGAQIgHAAQgcAAgJgJg");
	this.shape_7.setTransform(2.5,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("AAbgKQg9gCAJAMQAKAKAjAB");
	this.shape_8.setTransform(2.6,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAAQgJgMA9ACIgHAVQgjgBgKgKg");
	this.shape_9.setTransform(2.6,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.5,1,1).p("AAagHQg7gGAJAMQAKAKAjAB");
	this.shape_10.setTransform(2.5,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYgBQgJgMA7AGIgFARQgjgBgKgKg");
	this.shape_11.setTransform(2.5,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.5,1,1).p("AAagEQg8gHALAJQALAIAiAC");
	this.shape_12.setTransform(2.5,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXgCQgLgJA8AHIgEAMQgigCgLgIg");
	this.shape_13.setTransform(2.5,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.5,1,1).p("AAZAAQg6gLALAJQAKAIAiAB");
	this.shape_14.setTransform(2.5,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWgCQgLgJA6ALIgDAHQgigBgKgIg");
	this.shape_15.setTransform(2.5,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.5,1,1).p("AAZgGQg6gEAKAJQALAIAiAC");
	this.shape_16.setTransform(2.5,0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXgBQgKgJA6AEIgDAPQgigCgLgIg");
	this.shape_17.setTransform(2.5,0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.5,1,1).p("AAXgDQg3gHAMAHQAMAHAcAE");
	this.shape_18.setTransform(2.4,0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUgDQgMgHA3AHIgDALQgcgEgMgHg");
	this.shape_19.setTransform(2.4,0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.5,1,1).p("AAZgIQg7gBAMAIQAMAGAcAE");
	this.shape_20.setTransform(2.6,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWgBQgMgIA7ABIgHARQgcgEgMgGg");
	this.shape_21.setTransform(2.6,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.5,1,1).p("AAZgKQg7gBAMAIQAMAGAcAI");
	this.shape_22.setTransform(2.6,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWgDQgMgIA7ABIgHAVQgcgIgMgGg");
	this.shape_23.setTransform(2.6,0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.5,1,1).p("AAagOQg+ABANALQAOALAaAG");
	this.shape_24.setTransform(2.5,0.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXgCQgNgLA+gBIgJAdQgagGgOgLg");
	this.shape_25.setTransform(2.5,0.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.5,1,1).p("AAbgOQhAAFANAMQANANAdgB");
	this.shape_26.setTransform(2.5,0.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYADQgNgMBAgFIgJAdIgHAAQgXAAgMgMg");
	this.shape_27.setTransform(2.5,0.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.5,1,1).p("AAZgMQg4gIAIAVQAIAWAigL");
	this.shape_28.setTransform(2.4,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXABQgIgVA4AIIgGAYQgMADgHAAQgSAAgFgOg");
	this.shape_29.setTransform(2.4,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.5,1,1).p("AAZgGQg3gQAHAWQAIAVAjgL");
	this.shape_30.setTransform(2.3,1.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAAQgHgWA3AQIgFAQQgMAEgIAAQgRAAgGgOg");
	this.shape_31.setTransform(2.3,1.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.5,1,1).p("AAYgEQg3gRAJASQAJARAggB");
	this.shape_32.setTransform(2.4,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWgDQgJgSA3ARIgFARIgDAAQgdAAgJgQg");
	this.shape_33.setTransform(2.4,1.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.5,1,1).p("AAXgHQg0gFAIAMQAHAKAggB");
	this.shape_34.setTransform(2.5,1.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgVAAQgIgMA0AFIgFAQIgFABQgbAAgHgKg");
	this.shape_35.setTransform(2.5,1.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.5,1,1).p("AAXgHQg0gCAIAKQAHALAggG");
	this.shape_36.setTransform(2.5,0.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVABQgIgKA0ACIgFANIgSACQgRAAgEgHg");
	this.shape_37.setTransform(2.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,7.4,3.5);


(lib.MarinhoDedo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1).p("AgdAgIBBglQAmgihAALIg8Al");
	this.shape.setTransform(3.8,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9B06A").s().p("AgyAJIA8glQBAgLgmAiIhBAlg");
	this.shape_1.setTransform(3.8,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-6.1,12.1,8.4);


(lib.shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,102,255,0)").s().p("AkeHYIAAuvII9AAIAAOvg");
	this.shape.setTransform(2.9,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shape, new cjs.Rectangle(-25.8,-49.6,57.5,94.4), null);


(lib.articulaçãomenor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAdgcQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6AB93").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.articulaçãomenor, new cjs.Rectangle(-5,-5,10.1,10.1), null);


(lib.articulação = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6AB93").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.articulação, new cjs.Rectangle(-5.7,-5.7,11.6,11.6), null);


(lib.pescocinho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AArAlQgVgxATgZAgpgiQAQAYgRAw");
	this.shape.setTransform(-0.2,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6AB93").s().p("AgqAfQARgwgQgYIBSgDQgTAZAVAxQgVAPgVAAQgUAAgXgOg");
	this.shape_1.setTransform(-0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pescocinho, new cjs.Rectangle(-5.5,-6.7,10.6,10), null);


(lib.Arma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Arame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6A658").ss(1,1,1).p("AAFg6IgJB1");
	this.shape.setTransform(6,-105.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1.5,1,1).p("Ahag5IC1AAAg8A3IBtAD");
	this.shape_1.setTransform(2.1,-93.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Sora
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D6A658").ss(1,1,1).p("AAginIgXE/IgBAIABsiXIgsCeIgoCSIgFAOAgHCkIgFhGIgTkFAhrijQAuClAuCm");
	this.shape_2.setTransform(0.7,-93.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C88E31").ss(1,1,1).p("AgbCiIAAAEAgQCpIgDAJIBHlTABkihIhjEZIgMAjAgHCqIBrk7AgaCaIAPlDAhjixIA0FXAgjCiIgQlL");
	this.shape_3.setTransform(4.3,-94.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#845E20").ss(1,1,1).p("AgRCuIABgEIAik/AgFCqIAMgyIAbhvIAsiuAgQCqIA+lTAgdipIAEFDAghCmIgJhGIgjkN");
	this.shape_4.setTransform(3.7,-94.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#845E20").ss(1,1,1).p("AAkCsIhHlX");
	this.shape_5.setTransform(-4.4,-94.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Forma
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D6A658").ss(1,1,1).p("AAVHLQgVAQgUgQIAAudIApAAg");
	this.shape_6.setTransform(1.3,-30.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#CA952B","#E9C996","#835B1D"],[0,0.451,1],-2.1,0,2.1,0).s().p("AgUHLIAAudIApAAIAAOdQgLAIgKAAQgJAAgLgIg");
	this.shape_7.setTransform(1.3,-30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Arma, new cjs.Rectangle(-11,-112.9,26.4,130.5), null);


(lib.Marinhopescocinho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA7ANIhzgBIgCgYIBvAJIABABg");
	this.shape.setTransform(-0.1,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ag4AMIgCgYIBvAJIAAABIAGAPg");
	this.shape_1.setTransform(-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Camada 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAmAiQgbg1AigPAgsghQAbANgQA3");
	this.shape_2.setTransform(-0.8,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIABAAIgBABIAAgBg");
	this.shape_3.setTransform(1.1,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8A24B").s().p("AgsghIBZgBQgiAPAaA1IhGABQAQg3gbgNgAATAAIABACIAAgCIgBAAg");
	this.shape_4.setTransform(-0.8,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Marinhopescocinho, new cjs.Rectangle(-6.9,-6,13.8,8.9), null);


(lib.MarinhoColunadelado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Estojo
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#614D23").ss(0.8,1,1).p("AgUAAIgpgRIAAgjQAHgRAxAPIgEgVIA1gCIAEAlIAOBtIg/AJIgShOIgBAAIAMgeQATgTAlAJ");
	this.shape.setTransform(0.1,35.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgFACIgBgBIAAgBIABgBQABgCADgBIABAAQAFAAABAEIABAAQgDAFgEAAQgCAAgDgDg");
	this.shape_1.setTransform(1.6,33.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2311").s().p("AgTAAIgBAAIAMgeIABgBQAMgMAUAAIAAAAIABAAQAKAAAMADIAOBtIg/AJgAAJgRIAAABIAAABIAAABQAIAGAGgHIgBgBQgCgEgEAAIgCAAQgEAAgBADgAg9gRIAAgjQAHgRAxAPIgEgVIA1gCIAEAlQgMgDgKAAIgBAAIAAAAQgUAAgMAMIgBABIgMAegAAwgoIAAAAg");
	this.shape_2.setTransform(0.1,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Cinto
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCC33").ss(0.5,1,1).p("AgbgNIAqgHIANAiIgtAH");
	this.shape_3.setTransform(14.3,28.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCC33").ss(0.5,1,1).p("AAFASIgJgj");
	this.shape_4.setTransform(12.1,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// desenhjo
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,1,1).p("AjAiuQCiAVBjgPQAFgBAGgBQAKgCAJgCABzhzQgSAGgcADQhXAIi2gSAjLgJQCjAoDLgoAC6AyQivAsjTgsAjDBhQDdAiCtgiADMCgQiGAfkBgfACLg+QixAlilgl");
	this.shape_5.setTransform(4.7,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("ABqjsQhgAYiXgYAiMDaQCCAjCYge");
	this.shape_6.setTransform(1.1,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("ABjiqQgLgegSgbQgJgPgMgOQgcgcgWAFIhsgEIgVADQgbAEgJASQgGAPgFAQQgJAbgGAeQgFAcgDAeQgDAaAAAdQgBAZABAbQABAcACAfQACAXADAZQADAeAFAgQAFAfAGAgQAFAbAGAJQBpAcBogKQBogBgqgwQBpACgHhGQACgcgIgiQgEgXgIgZQgKgcgNgfQgLgZgOgbQgHgPgJgQQgCgFgDgFQAAgGgCgGQgFgdgJgbQgBgCgBgCg");
	this.shape_7.setTransform(4.7,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009966").s().p("AgGAHIgBgBIAAAAIgBgCQgHAJgKgGIAAgBIAAAAIAAgCIADgEIACgBIAAgBIABgBIAAgBQAIgHAKAHIAQgFQAHAAADAGIABABIgBABIAAABIgBAAQgHADgHAAIgBABIAAABIgBABQgEAEgEAAQgCAAgEgDg");
	this.shape_8.setTransform(10.1,-16.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9999").s().p("AiwD2IgLg/QEBAgCGggQAHBGhpgCQhGAOhBAAQhNAAhGgTgAjDB5IgFgwQDTAtCvgtQAIAZAEAXQhWARhiAAQhiAAhvgRgAjLANIAAgzQClAlCwglIAZAzQhmAVhbAAQhbAAhSgVgAjIhdQADgeAFgcQCiAVBigPIAMgCIATgEIACAEQAJAbAFAdQgSAGgdACQgbADgkAAQhQAAh9gNgAixjQIALgfQAJgSAbgEIAVgDIBsAEQAWgFAcAcQAMAOAJAPQgwAMg9AAQg+AAhMgMg");
	this.shape_9.setTransform(4.7,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai7C8IgIg+QDdAiCsgiQAHAigBAcQhDAQhiAAQhhAAiBgQgAjIBOQgCgfgBgdQCjApDLgpQANAgAKAcQhYAXhgAAQhgAAhqgXgAjLghQAAgcADgbQC2ATBWgIQAdgDASgGIACAMIAFAKIAQAfQhZAShUAAQhWAAhSgSgAjAiSQAGgeAJgbQCYAYBfgYQASAbALAeIgTAEIgMACQgpAHgzAAQhKAAhegNgAAuikIAAAAIABABQAIAGAHgHIABgBIAAgBIABgBQAHAAAHgDIABgBIAAgBIABgBIgBgBQgDgGgHAAIgRAFQgKgHgIAHIAAABIgBABIAAABIgCACIgDAEIAAACIAAAAIAAABQAKAGAHgJIABACg");
	this.shape_10.setTransform(4.7,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiHAHQgGgHgGgcQCCAjCZgeQApAwhoABQgbADgbAAQhNAAhNgWg");
	this.shape_11.setTransform(1.7,28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Camada 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AACAAQgCAAgBAA");
	this.shape_12.setTransform(-6,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.MarinhoColunadelado, new cjs.Rectangle(-16.8,-26.1,43,70.4), null);


(lib.MarinhoCabeça = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Oculos
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAyghQAAgBAAAAQAAgGABgHQABgHANACQANABADAGQAEAFAAAIIAAAAQAAAJgGAEQgHADgIgBQgIAAgCgDQgDgCAAgFQgBgEAAgCIhFAHABVggIAHgBAhbAOQACAQAMARQAHAOAJgPIACgcAhGAVIAAgM");
	this.shape.setTransform(3.6,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(252,252,252,0.502)").s().p("AgCASQgIgBgDgCQgCgDgBgFIAAgFIAAgBIABgMQABgHANABQAMABADAGQADAGAAAGIAAABQABAJgGADQgGADgGAAIgCAAg");
	this.shape_1.setTransform(10.3,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Olho
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("AADAFIAAgJAAUAFIAAgJAAIACIAAgGAAOABIAAgFAgTACIACgFAgEACIABgGAgNACIACgG");
	this.shape_2.setTransform(10.3,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#990000").ss(1,1,1,3,true).p("AgMABIACgDIAEAAIADAEIADgDIAGABIACgDAAFAEIAAgDIABgBIAGAAAgEADIABgBAALgCIABACIABAD");
	this.shape_3.setTransform(9.4,-3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAAgOQABABACABQADABAFABQAFABAFAAQADAAAEAAQAAgBABAAQANgKgOgKQgXABgHAMQABACABABQgDACgDACQgMAHACADAgCgRQgRAAgIgJAgdgKQAKgIANAIAAgAGQAGgGgEgIQgCAGgJACAAjgkIACgIAgkAtQAEgRAPgD");
	this.shape_4.setTransform(7.8,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#614D23").s().p("AgRAiIApAAQAGAHgGAGIgEABIAAgKIAAAKIgSAAIgcACQgCgLALgFgAACAwIAAgKgAgFAtIABgHgAgOAtIADgHgAgUAtIACgGgAAHAtIAAgHgAANAsIAAgGgAAAgqIgCAAIAAgBIgBgCIABgCIAAgBIADgBIAEABQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABIgEABIgBgBg");
	this.shape_5.setTransform(10.3,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFAKIgBgCIACgCIgCACIABACIgJAAIABgCIgBACIgIgDIABgEIAEAAIAEAFIADgEIAGACIgGgCIgDAEIgEgFIgEAAIgBAEIgDgCIgDgDQAIgLAVAAQAOAJgMAJIgBgDIgCgDIACADIABADIgCABIgGAAIAAAAgAAMAGIgGAAgAAGAGIACgEIACABIAEgBQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgEgBIgDABIAAAAIgBADIABABIAAABIABAAgAANAJg");
	this.shape_6.setTransform(9.4,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Cebça
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1,3,true).p("AADgOQgTAZAWAE");
	this.shape_7.setTransform(11,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#614D23").ss(0.5,1,1).p("AALhMQAogNAiAIAgegKQgIgeAggSAhDg3QgRAbAAAhAgNhFQgrAaAJArAgjhMIAggCAhQBVIABgpAgrhCQgfAqgFA6Ag3ALIgHAOAAAAGIACAXAAFg6QgYAYAKAi");
	this.shape_8.setTransform(-0.3,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgShPQAbgCAagJAAKBbQgSgSgIgdQADgSAQgJAAvAuIgkAAQACgEADgCQAJgGAWAFAgtAsQgBANATAOAAHAbQgKAGAAALQAHAXAIAA");
	this.shape_9.setTransform(7.7,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("ABuhZQglAKgyABQgRASgGAWQgEANgBAPQgBASADAMIgbgFAhJBgQAQAHAQADQAQADA3AEQAWABAQgCQAXgDAHgMQALgTgFgXIAAgXQAMABACgCQACgCAAgQQAAgOgHgTQgGgTAAgUQABgNACgRQgJgkixAUQgyApAIBXQACAaANATQALARATALgAgeAPQgEgwgTAGQgFACgGAFQgaBBARAz");
	this.shape_10.setTransform(2,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AhiBNIABgoIgBAoQgNgTgCgaQgIhXAygpQCxgUAJAkQglAKgyABQgRASgHAWQgEANAAAPQgBASACAMIgagFIAAAAQgEgxgTAHIgBgLQgBgXAagOQgaAOABAXIABALQgFACgGAFQgbBBASAzQgTgLgLgRgAhhAaQAFg5AfgrQgfArgFA5gAgPAWIgDgXgAhQARIAHgOgAhmgCQAAghARgcQgRAcAAAhgAgbgHQgDgKAAgJQAAgXASgRQgSARAAAXQAAAJADAKgAhBgHIgCgOQAAgiAkgWQgkAWAAAiIACAOgAgGhUIACgBIADgBIABAAQAUgGAUAAIAAAAIAAAAQAMAAALACIAAAAIABAAIADABIgDgBIgBAAIAAAAQgLgCgMAAIAAAAIAAAAQgUAAgUAGIgBAAIgDABIgCABgAg1hUIAggCgAgwgSIAAAAg");
	this.shape_11.setTransform(1.5,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAEQACgDADgBQAJgGAVAFIAAAFg");
	this.shape_12.setTransform(10.6,5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9B06A").s().p("AAKBlQg3gEgQgDQgPgDgRgHQgRgyAbhBQAGgGAFgCQASgGAEAxIABAAIAaAEQgDgLABgTQABgEADgDQADgEgCgCIAAgDIAAgMQAIgWAQgSQAxgBAmgKQgDASAAANQgBATAHATQAGATAAAPQABAPgDACQgCADgMgCIAAAXQAGAXgMAUQgHALgXADQgTgRgIgeQADgSAQgIQgQAIgDASQAIAeATARQgJACgMAAIgRgBgAAKBQQgSgNAAgOIAAAAIAAAAQAAAOASANgAAyBMIAAAAIgBAAQgHgBgIgVIgBgBQABgLAKgGQgKAGgBALIABABQAIAVAHABIABAAIAAAAgAA2AxQgDACgCAEIAjAAIAAgHQgKgCgHAAQgJAAgEADgABNAOQgMgCAAgIQAAgHAJgMQgJAMAAAHQAAAIAMACgAAThGQAcgBAZgKQgZAKgcABg");
	this.shape_13.setTransform(3.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MarinhoCabeça, new cjs.Rectangle(-11,-12.6,26,24.7), null);


(lib.MarinhoArma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1).p("AAMgzIAAAAIgDASIAjAMIADgegAghgsIgNBbQARAJAagGIABheg");
	this.shape.setTransform(2.2,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguAvIANhbIAfAAIgBBeQgLACgJAAQgNAAgKgFgAAJghIADgSIAAAAIAjAAIgEAeg");
	this.shape_1.setTransform(2.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Forma
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.8,1,1).p("ABxgwIATAAQgBgBAFgGQAEgHgCgLQgDgLgCgBIgUABQgKASAKASIgUAAIAAAOIhhAAQADASgPAQQgdALgcgLIgDBRQgkALgZgRIAPh5QAAgnAlAGIDGgFAhJAAIADgeIBCgEABdgwIiZAA");
	this.shape_2.setTransform(10.3,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ah9BLIAQh5QAAgnAkAGIDGgFQgJARAKASIgVAAIiYAAICYAAIAAAPIhhAAIhBAEIgDAeIgEBRQgOAEgMAAQgTAAgQgKgABpgxg");
	this.shape_3.setTransform(9.1,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgJASQgKgSAJgRIAUAAQACABACALQADAKgEAGIgFAHg");
	this.shape_4.setTransform(22.6,-7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MarinhoArma, new cjs.Rectangle(-4.5,-10,29.7,19.2), null);


(lib.Caopescocinho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA7ANIhzgBIgCgYIBvAJIABABg");
	this.shape.setTransform(-0.1,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ag4AMIgCgYIBvAJIAAABIAGAPg");
	this.shape_1.setTransform(-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Camada 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAmAiQgbg1AigPAgsghQAbANgQA3");
	this.shape_2.setTransform(-0.8,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIABAAIgBABIAAgBg");
	this.shape_3.setTransform(1.1,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8A24B").s().p("AgsghIBZgBQgiAPAaA1IhGABQAQg3gbgNgAATAAIABACIAAgCIgBAAg");
	this.shape_4.setTransform(-0.8,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Caopescocinho, new cjs.Rectangle(-6.9,-6,13.8,8.9), null);


(lib.Coxa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Articulações
	this.instance = new lib.articulação();
	this.instance.parent = this;
	this.instance.setTransform(-12.9,-0.4);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-8,-8,16,16);

	this.instance_1 = new lib.articulação();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.1,-0.1);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-8,-8,16,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Desenho
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AgDg+QAMA5gIBE");
	this.shape.setTransform(17.6,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("ABvA+QAqgBAqgDIgFh0QgpgEgqgBQiTgHiaAMIAAB7QCUAECdgHg");
	this.shape_1.setTransform(6.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjCBBIAAh7QCagMCTAHQAHAjAAAmQAAAZgDAbQhjAFhfAAIhvgCgABvA+QADgbAAgZQAAgmgHgjIBTAFIAFB0IhUAEIAAAAgABrg/IAAAAg");
	this.shape_2.setTransform(6.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Coxa, new cjs.Rectangle(-18.7,-7.7,49.6,15.3), null);


(lib.Colunadelado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///*arma._visible = false;
		//_global.showArma = function () {
		//	arma.onEnterFrame = function () {
		//		if(_parent._parent._parent.armado)
		//		arma._visible = true;
		//		else {
		//			delete arma.onEnterFrame;
		//			arma._visible = false;
		//		}
		//	}
		//}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// 775
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AADAHIgBgBIgBAAIABgCIABAAIACgFIAAAAIgBgBIgBgBIgCABIgBABIgCAFIACAAIAAABIgBABIgBABIgDAAIgBgBIgBAAIABgCIACAAIABgGIgBgBIAAgBIAAgBIACAAIACAAIAAABIABgBIACgBIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIgBABIgBAFIABAAIABABIgBABIgBABg");
	this.shape.setTransform(12.2,-18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgFAGIgBgCIAAgDIADgBIAEgBIACAAIABgBIAAAAIgBAAIgCgBIgCABIgBAAIgBAAIAAgBIAAgBIADgBIACgBIADABQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABIgBAAIgBAGIABAAIABAAIAAABIgBABIgBAAIgDAAIAAAAIgEABIgDgBgAgDACIAAABIAAABIACAAIABAAIADgBIAAgCIgDAAIgDABg");
	this.shape_1.setTransform(10.5,-18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgFAGQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBgBgBIACgDIADgCQAAgBABAAQABAAAAgBQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQABAAAAABIAAAAIgBABIgLAAIABADIADAAIAEAAIABgBIACABIAAAAIgBACIgDAAIgDABQgDAAgCgBgAAAgCIgDABIAHAAIgBgBIgCgBIgBABg");
	this.shape_2.setTransform(8.9,-18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgFAGQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgEIADgCQABgBAAAAQABAAAAgBQAAAAAAAAQABAAABAAIACABIABAAIABAAIABAAIAAABIAAABIAAABIgBACIgBAAIAAAAIgBgBIAAgBIgDgBQgBAAAAAAQAAAAAAAAQgBABAAAAQgBABgBAAIgBACIABADIADAAIADAAIACgBIAAAAIABAAIAAABIgBACQgCABgDAAQgDAAgCgBg");
	this.shape_3.setTransform(7.2,-18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgEAGIgCgCIAAgDIABgDIADgCQABgBAAAAQABAAAAgBQAAAAAAAAQABAAABAAIACABIACACIABADQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABIgDADIgEABIgDgBgAgDgBIgBACIABACIADABIADgBIABgDIgBgCIgCgBQgBAAAAAAQAAAAAAAAQgBABgBAAQAAABgBAAg");
	this.shape_4.setTransform(5.5,-18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2D666").s().p("AAFAIIgCgBIgBgBIABgBIACgBIACgFIAAAAIgBgCIgCAAIgDAAIgCACIgBAFIABAAIABABIgBACIgCABIgFAAIgCgBIAAgBIABgCIACAAIADgHIgCAAIgBgBIACgCIACAAIADAAIAAABIABgBIAEgBIAEABQABABAAAAQAAABABAAQAAAAAAABQAAAAAAAAIgBACIgBAFIABAAIABABIgBACIgCABg");
	this.shape_5.setTransform(10.6,-19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2D666").s().p("AgIAHQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIACgDIAEgBIAFgBIAEAAIABgBIAAAAIgBgBIgDAAIgEAAIgBAAIgBAAIgBgBIABgBIADgBIAEgBIAFABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIAAABIgBAGIAAAAIACAAIAAABIgBACIgBAAIgGAAIABgBIgGACIgFgBgAgEACIgBABIABABIACABIACgBIAEgBIABgCIgFAAQgCAAgCABg");
	this.shape_6.setTransform(8.3,-19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2D666").s().p("AgHAGQgDgCAAgCQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQACgCADgBIAFgCQAEAAACACQADACAAADIgBAAIAAACIgQAAIACACIAEAAIAFAAIADgBIABABIAAABIgBABIgEABIgFABQgEAAgCgCgAgCgDIgDACIALAAIgCgCIgDAAIgDAAg");
	this.shape_7.setTransform(5.9,-19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2D666").s().p("AgIAGQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIACgEQABgCADgBQADgCADAAIADAAIACABIACAAIABAAIABABIgBABIAAACIgBACIgCAAIgBAAIAAgBIgBgCIgEAAQgDAAgCACIgCACQAAABAAAAQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAABQABAAABAAQAAAAABAAIAEgBIACgBIABAAIACAAIAAABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQgDACgFAAQgEAAgDgCg");
	this.shape_8.setTransform(3.6,-19);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2D666").s().p("AgGAHIgDgCIgBgDIACgEQACgCADgBIAFgCIAFABIACACIABAEIgBADQgBACgDABIgGACIgFgBgAgDgBQgBAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAIAEABQACAAACgBQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgEgBQgCAAgCACg");
	this.shape_9.setTransform(1.1,-19);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F2D666").ss(0.8,1,1).p("AAnhGQALAdgBAcQgBAZgMAKQgNAHgRgQQgRgPgLgdQgLgeABgcQACgaAMgIQAMgJARAQQARAQALAegAgTACIgdgZAgTACIA9A4QgfCigejag");
	this.shape_10.setTransform(0.5,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F2D666").ss(1,1,1).p("AgHC3QgVgRgTgpQgbg9gFhPQgFhQATgzQAUg0AhAGQAhAHAbA+QAbA9AFBPQAFBPgTA0QgJAXgMAMQgOANgSgDQgLgDgJgHg");
	this.shape_11.setTransform(1.1,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

	// Arma
	this.arma = new lib.Arma();
	this.arma.parent = this;
	this.arma.setTransform(-2.6,33.5,1.254,0.77,-19.1);

	this.timeline.addTween(cjs.Tween.get(this.arma).wait(20));

	// Desenho
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AB3kJQAkAngQHrQAAAPgBAPQiTAYiEgcIgCn7QADgdAHgUQAMgcAVgGQAkgKAYAGQAYAHAzgHQArgFAoAqQABAAAAABg");
	this.shape_12.setTransform(0.8,-2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FE850C").s().p("AiNEjIgCn7QADgdAHgUQAMgcAVgGQAkgKAYAGQAYAHAzgHQArgFAoAqIABABQAkAngQHrIgBAeQhEALhBAAQhLAAhHgPg");
	this.shape_13.setTransform(0.8,-2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AiRjXQADgeAIgTQALgcAVgHQAlgJAXAGQAcAGAvgGQAtgEAnAnQAFAGAEAJQAfBKgSG5QAAAPgBAQQiZAYh+gaQAAgEgBgDg");
	this.shape_14.setTransform(0.9,-2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FE850C").s().p("AiNEkIgBgHIgDn0QADgeAIgTQALgcAVgHQAlgJAXAGQAcAGAvgGQAtgEAnAnQAFAGAEAJQAfBKgSG5IgBAfQhKAMhDAAQhIAAhCgOg");
	this.shape_15.setTransform(0.9,-2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AiSjXQADgdAHgUQALgcAVgGQAlgKAXAGQAcAGAvgGQAsgEAoAmQAGAGAEAIQAjBGgVG9QgBAPgBAQQiYAah+gaQgBgDAAgDg");
	this.shape_16.setTransform(1.1,-2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FE850C").s().p("AiNEkIgBgGIgEn1QADgdAHgUQALgcAVgGQAlgKAXAGQAcAGAvgGQAsgEAoAmQAGAGAEAIQAjBGgVG9IgCAfQhNANhFAAQhFAAg/gNg");
	this.shape_17.setTransform(1.1,-2.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AiUjXQADgdAHgTQALgcAVgHQAlgKAXAGQAcAGAvgGQAsgEApAmQAGAFAEAIQAoBBgZHBQgBAQgBAPQiZAdh8gaQgCgDgBgDg");
	this.shape_18.setTransform(1.2,-2.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FE850C").s().p("AiMElIgDgGIgFn2QADgdAHgTQALgcAVgHQAlgKAXAGQAcAGAvgGQAsgEApAmQAGAFAEAIQAoBBgZHBIgCAfQhQAPhIAAQhCAAg7gMg");
	this.shape_19.setTransform(1.2,-2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AiVjXQADgcAHgTQALgdAUgHQAlgKAXAGQAcAGAvgGQAsgEAqAlQAGAFAEAHQAtA9gdHFQgBAQgBAPQiZAfh8gaQgCgDgBgCg");
	this.shape_20.setTransform(1.4,-2.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FE850C").s().p("AiMElIgDgFIgGn3QADgcAHgTQALgdAUgHQAlgKAXAGQAcAGAvgGQAsgEAqAlQAGAFAEAHQAtA9gdHFIgCAfQhUARhKAAQg/AAg4gMg");
	this.shape_21.setTransform(1.4,-2.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AiXjWQADgdAHgTQALgcAUgHQAlgKAXAFQAbAHAxgGQArgFArAkQAGAFAEAHQAxA5ggHJQgBAPgCAPQiYAhh8gZQgCgCgCgDg");
	this.shape_22.setTransform(1.5,-2.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FE850C").s().p("AiMEmIgEgFIgHn3QADgdAHgTQALgcAUgHQAlgKAXAFQAbAHAxgGQArgFArAkQAGAFAEAHQAxA5ggHJIgDAeQhWAThMAAQg8AAg2gLg");
	this.shape_23.setTransform(1.5,-2.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AiYjWQADgcAHgTQAKgcAUgIQAlgKAXAFQAbAHAxgGQAqgFAsAjQAHAFAEAGQA2A1gkHNQgCAPgBAPQiZAjh7gZQgCgCgDgCg");
	this.shape_24.setTransform(1.7,-2.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FE850C").s().p("AiMEmIgFgEIgHn4QADgcAHgTQAKgcAUgIQAlgKAXAFQAbAHAxgGQAqgFAsAjQAHAFAEAGQA2A1gkHNIgDAeQhaAVhOAAQg4AAg0gLg");
	this.shape_25.setTransform(1.7,-2.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AiajWQADgcAHgTQAKgcAUgIQAlgKAXAFQAbAHAxgGQAqgFAtAiQAHAFAFAGQA6AwgpHQQgBAQgBAPQiZAlh6gZQgDgBgDgCg");
	this.shape_26.setTransform(1.8,-2.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FE850C").s().p("AiLEmIgGgDIgJn5QADgcAHgTQAKgcAUgIQAlgKAXAFQAbAHAxgGQAqgFAtAiIAMALQA6AwgpHQIgCAfQhcAWhQAAQg2AAgxgKg");
	this.shape_27.setTransform(1.8,-2.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AibjWQADgcAGgTQALgcATgHQAlgLAXAFQAbAHAxgGQAqgFAuAhQAHAFAFAFQA+AsgsHUQgBAQgCAPQiYAnh6gYQgEgCgDgBg");
	this.shape_28.setTransform(2,-2.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FE850C").s().p("AiLEnIgHgDIgJn6QADgcAGgTQALgcATgHQAlgLAXAFQAbAHAxgGQAqgFAuAhIAMAKQA+AsgsHUIgDAfQheAYhSAAQgzAAgvgJg");
	this.shape_29.setTransform(2,-2.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AB3kJQBGApg3IDQidAdh7gcIgLn7QAIhJAjgKQAkgKAYAGQAYAGAzgGQArgGA3Arg");
	this.shape_30.setTransform(2.1,-2.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FE850C").s().p("AiSEkIgLn7QAIhJAjgKQAkgKAYAGQAYAGAzgGQArgGA3ArQBGApg3IDQhRAOhHAAQhEAAg8gNg");
	this.shape_31.setTransform(2.1,-2.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AibjXQAHhJAkgKQAjgKAZAGQAXAHA0gHQArgFA1AqQBDAog0IEQibAdh9gcg");
	this.shape_32.setTransform(2,-2.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FE850C").s().p("AiSEkIgJn7QAHhJAkgKQAjgKAZAGQAXAHA0gHQArgFA1AqQBDAog0IEQhQAPhGAAQhFAAg9gOg");
	this.shape_33.setTransform(2,-2.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AiajXQAHhKAkgKQAjgKAZAHQAXAGA0gGQArgGAzAqQBAAngwIGQiaAch9gbg");
	this.shape_34.setTransform(1.9,-2.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FE850C").s().p("AiREkIgJn7QAHhKAkgKQAjgKAZAHQAXAGA0gGQArgGAzAqQBAAngwIGQhOAPhGAAQhFAAg+gOg");
	this.shape_35.setTransform(1.9,-2.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AiZjXQAIhKAjgKQAkgKAYAHQAYAGAzgGQAsgGAxAqQA9AmgsIIQiaAbh+gbg");
	this.shape_36.setTransform(1.7,-2.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FE850C").s().p("AiREkIgIn7QAIhKAjgKQAkgKAYAHQAYAGAzgGQAsgGAxAqQA9AmgsIIQhNAOhFAAQhHAAg/gOg");
	this.shape_37.setTransform(1.7,-2.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AiXjXQAHhKAkgKQAjgKAZAHQAXAGA0gGQArgGAwAqQA6AlgoIJQiZAbh/gbg");
	this.shape_38.setTransform(1.6,-2.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FE850C").s().p("AiQEkIgHn7QAHhKAkgKQAjgKAZAHQAXAGA0gGQArgGAwAqQA6AlgoIJQhNAOhEAAQhHAAhAgOg");
	this.shape_39.setTransform(1.6,-2.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AiWjXQAIhKAjgKQAkgKAYAHQAYAGAzgGQAsgGAvAqQA2AkglILQiYAah/gbg");
	this.shape_40.setTransform(1.4,-2.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FE850C").s().p("AiPEkIgHn7QAIhKAjgKQAkgKAYAHQAYAGAzgGQAsgGAvAqQA2AkglILQhKANhEAAQhIAAhBgOg");
	this.shape_41.setTransform(1.4,-2.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AiUjXQAHhKAkgKQAjgKAZAHQAXAGA0gGQArgGAuAqQAzAjghINQiXAZiBgbg");
	this.shape_42.setTransform(1.3,-2.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FE850C").s().p("AiPEkIgFn7QAHhKAkgKQAjgKAZAHQAXAGA0gGQArgGAuAqQAzAjghINQhKAMhCAAQhJAAhDgOg");
	this.shape_43.setTransform(1.3,-2.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("AiTjXQAHhKAkgKQAjgKAZAHQAXAGA0gGQArgGAsAqQAwAigdIOQiWAZiCgbg");
	this.shape_44.setTransform(1.2,-2.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FE850C").s().p("AiPEkIgEn7QAHhKAkgKQAjgKAZAHQAXAGA0gGQArgGAsAqQAwAigdIOQhIAMhCAAQhKAAhEgOg");
	this.shape_45.setTransform(1.2,-2.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AiSjXQAIhKAjgKQAkgKAYAHQAYAGAzgGQAsgGAqAqQAtAhgZIQQiWAYiCgbg");
	this.shape_46.setTransform(1,-2.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FE850C").s().p("AiOEkIgEn7QAIhKAjgKQAkgKAYAHQAYAGAzgGQAsgGAqAqQAtAhgZIQQhHALhDAAQhJAAhFgOg");
	this.shape_47.setTransform(1,-2.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AiQjYQAHhJAkgKQAjgKAZAGQAXAHA0gHQArgFApAqQAqAfgWISQiUAYiDgcg");
	this.shape_48.setTransform(0.9,-2.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FE850C").s().p("AiNEjIgDn7QAHhJAkgKQAjgKAZAGQAXAHA0gHQArgFApAqQAqAfgWISQhGALhBAAQhKAAhGgPg");
	this.shape_49.setTransform(0.9,-2.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AB2kKQAmAegSITQiTAYiEgcIgCn7QAHhJAkgKQAkgKAYAGQAYAHAzgHQArgFAoAqg");
	this.shape_50.setTransform(0.8,-2.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FE850C").s().p("AiNEjIgCn7QAHhJAkgKQAkgKAYAGQAYAHAzgHQArgFAoAqQAmAegSITQhEALhBAAQhLAAhHgPg");
	this.shape_51.setTransform(0.8,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.3,-54.4,59.5,100.9);


(lib.Canela = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ténis
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("AhVAJIgTgUQBrANBmgCQhSARhpgHQgCgBgBAAg");
	this.shape.setTransform(3.9,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1).p("ABggJQg/gagrgJQgKAPghADQgqAFgYgWQgNARgBAOQgCAOAGAeQAhAJAWACQBAAFCCgJQAngYg/gYg");
	this.shape_1.setTransform(5.2,21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhSAKIgDgBIgTgUQBrANBmgCQg6AMhEAAQgdAAgggCg");
	this.shape_2.setTransform(3.9,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhKArQgWgCghgJQgGgeACgOQABgOANgRQAYAWAqgFQAhgDAKgPQArAJA/AaQA/AYgnAYQhUAGg4AAQgfAAgXgCgAhiAZIADABQBpAHBSgRQhlAChsgOg");
	this.shape_3.setTransform(5.2,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Articulações
	this.instance = new lib.articulaçãomenor();
	this.instance.parent = this;
	this.instance.setTransform(-1.2,20.1,0.992,0.992,0,135.5,134.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-7,-7,14,14);

	this.instance_1 = new lib.articulação();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,-16,1,1,135);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-8,-8,16,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Desenho
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("Ag5AAQA+AHA1gJ");
	this.shape_4.setTransform(-1.1,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(1,1,1).p("AA7ggIABiOIhzgBIgCCRIgCC6QA7AoA5gog");
	this.shape_5.setTransform(-1.2,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag7CcIADi6IACAAQAcAEAZAAIABAAIAAAAQAbAAAagFIABAAIACAAIADgBIgCC8QgdAUgdAAQgdAAgdgUgAgBgaQgZAAgcgEIgCAAIABiRIBzABIgBCOIgDABIgCAAIgBAAQgaAFgbAAIAAAAIgBAAg");
	this.shape_6.setTransform(-1.2,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Canela, new cjs.Rectangle(-9.3,-24.2,29,51.5), null);


(lib.chicoCabeca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///*jogasom = new Sound();
		//jogasom.setVolume(100);
		//jogasom.onLoad = function () {
		//	this.start();
		//}
		//_global.falar = function (jogador, verbo) {
		//	trace(jogador + " idp:" + _parent._parent._parent.id);
		//	if(jogador==_parent._parent._parent.id) {
		//		jogador = eval(jogador);
		//		faleJogador = _parent._parent._parent.id;		
		//		randomSom = Math.random()*5;
		//		randomSom = Math.ceil(randomSom);
		//		faleSomR = faleJogador+randomSom+".mp3";
		//		faleArma = "/jogadores/"+faleJogador+"/arma.mp3";
		//		boca.play();
		//		if(verbo=="arma")
		//		jogasom.loadSound(faleArma, true);
		//		else
		//		jogasom.loadSound(faleSomR, true);
		//	}
		//}*/
		//stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Ações
	this.boca = new lib.Boca();
	this.boca.parent = this;
	this.boca.setTransform(3.5,7.7);

	this.timeline.addTween(cjs.Tween.get(this.boca).wait(1));

	// Boné
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgKAGIALADQAUgJgVgI");
	this.shape.setTransform(-13,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("AACAIIgLgIAgIgHIASAN");
	this.shape_1.setTransform(4.9,-8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABvhpQgNgFgCgKQgBgKAHgHAB5htIAJAKACChbIgSgOIgBAAACFiCIgNAPIgIAKQgBAAAAAAAiEB/QAKACABAJ");
	this.shape_2.setTransform(-8,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgMAeQACgBACgCQBFgxA8hFQAEgFAEgFQAJgKAIgLQgLgFgMgDABdiJQhCAAgyAgQhBA6AUBMQAEARAGAOQAXgOAXgQQgnBBg0AkQgRAGgKABQgLAAgEgFQACgDACgDQAlgvAkgz");
	this.shape_3.setTransform(-7,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#669999").s().p("AgHAAIAFgEQAIABABAIIgCAAQgIAAgEgFg");
	this.shape_4.setTransform(-20.9,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAGIAAgBIAIgIIANgQQAKAEAMAEIgRAVIgSgNIASANIgIAKgAgDAMIgLgJgAgDAMIgJgKgAAFAKg");
	this.shape_5.setTransform(5.4,-9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5494A").s().p("AiCB/QAlgvAjgzQAFARAFAOQAYgOAXgQQgXAQgYAOQgFgOgFgRQgUhMBCg6QAyggBCAAQgIAHABAKQACAKANAFIABAAIASAOQg7BFhGAxIgDADQgnBBg0AkQgRAGgLABQgBgJgJgCgAgwAJQALgEAAgEQAAgEgLgEQALAEAAAEQAAAEgLAEIgLgCIALACgABxhpIgBAAIABAAIAAAAg");
	this.shape_6.setTransform(-8.1,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Cabelito
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABxh4IguAhQgCA3gZAfIgeAAIgUgWQgRgFgRAMIACBBIAGAUIALAUQAXAhgGAIQgHAJgHACQgIADglgKQhFAJAkgnQAOggABhSQgHgnAwg3QAvg2BtAZAAdgIIAKgVAg8AoQANAhgCAoAhKAzIABBD");
	this.shape_7.setTransform(-5.4,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#564814").s().p("AhPCGQhFAJAlgnQANggABhSQgHgnAxg3QAwg2BsAZIAMAFIAMAJIgBAPIgWgQIguAhQgDA3gZAfIgdAAIgVgWQgRgFgRAMIACBBIAHAUIALAUQAWAhgGAIQgGAJgIACIgEABQgLAAgegIgAhUB2IgBhDgAg9BxIABgLQAAgigMgcQAMAcAAAiIgBALgAARgIIAKgVg");
	this.shape_8.setTransform(-4.2,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Oculos
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAEAKQgNgJAKgK");
	this.shape_9.setTransform(7.6,4.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.5,1,1).p("AAOgMQgZACgNALQAKAOAcgCQAWgNgWgMg");
	this.shape_10.setTransform(5.1,-2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgCAFIgBgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABgBIAAAAIADgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_11.setTransform(6.5,-2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMAHIABAAIABgBIAAAAIABABIgBACIgCgCgAABAGIAAgBIABAAIABAAIABABIgCABIgBgBgAAKABIAAgBIABAAIABAAIABABIgCABIgBgBgAgEABIAAgBIABAAIABAAIABABIgCABIgBgBgAAHgHIABAAIABgBIAAAAIABABIgBACIgCgCg");
	this.shape_12.setTransform(10.5,4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#838321").s().p("AgWAnQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIABAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAIAAABIgBACIgBAAIgBABQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBgAgJAjQgBAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIACAAQADgBABADIAAABIAAABIgCACIgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBgAAAAgQgBgBAAgBQABAAAAgBQAAAAAAAAQAAgBABAAIABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABABIAAAAIgBACIgBABIgBAAQgBAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAgAAKAdIAAgDQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIABAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIAAABIgBABIABAAQADAAABADIAAAAIAAACIgCABIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBgAAUAaQgBAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIACAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAIAAABIgBACIgBAAIgBABQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBgAAMAVQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIABAAQADAAACACIAAACIgBAAIgBACIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAgAATAMQgBgBAAgBQABAAAAgBQAAAAAAAAQABgBABAAIABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAIAAABIgBACIgBABIgBAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAgAgWgVQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQABAAAAgBQAAAAAAAAQABgBABAAIABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAIAAACIgBABIgBABIgBAAgAATgZQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIABAAQABAAAAAAQAAAAABAAQAAABAAAAQABABAAAAIAAABIgBABIgBABIgBAAgAAGgcIABgDIgBgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIABgBQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAIAAABIgBABIABACIAAAAIgBACIgBAAIgBABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgAgagaQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIACAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABABIAAABIgBABIgBABIgBAAgAAAgbQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIABgBQAAAAAAAAQAAABABAAQAAAAAAABQABAAAAABIAAABIgBABIgBABIAAAAgAgHgbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQABAAAAAAQAAgBAAAAQABAAABAAIABgBQAAAAAAAAQABABAAAAQABAAAAABQAAAAABABIAAABIgBABIgBABIgBAAgAgRggQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIABAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAIAAABIgBACIgBABIgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgAAZgiQgBAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIACAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAIAAABIgBACIgBABIgBAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBgAARggQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQABAAAAgBQAAAAAAAAQABAAABgBIABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAIAAABIgBACIgBABIgBAAgAACgjQgBAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBgBAAAAQABgBAAAAQAAAAAAgBQAAAAABAAIABAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAABIgBABIgBABIgBAAg");
	this.shape_13.setTransform(5.1,9.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990000").s().p("AguA7IAAgBIACAAIAAAAIABABIgBABIgCgBgAAJA3QgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIACAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAIAAABIgBABIgBACIgBAAgAhLAlIAAAAIABgBIABAAIABABIgCACIgBgCgAgzAdIABgBIAAAAIABAAIABABIgCABIgBgBgAgeAAIABAAIAAgBIABAAIACABIAAAAIgBABIgDgBgAALgnIgBgBIAAgBIgBgBIABAAIAAgBIABAAIABgBIABAAIABACIAAAAIAAABIgCACIgBAAgABGgwQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABIAAAAIgBACIgBAAIgBABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgAAkg6IAAAAIABgBIABAAIABABIgCABIgBgBg");
	this.shape_14.setTransform(3.7,7.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYABQANgLAZgCQAWAMgWANIgGAAQgXAAgJgMgAAJgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIABABIADABQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAIgEABIAAAAg");
	this.shape_15.setTransform(5.1,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Cabeça
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#564814").ss(1,1,1).p("AAZgIQgZABgYAQ");
	this.shape_16.setTransform(5,-4.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.5,1,1).p("AgDgIIAIAGAAQgIIAAgMAgNgUQgGAHAQAdQALAKAGgNIACgN");
	this.shape_17.setTransform(-7,6.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1,3,true).p("AANgFQgDgJgWAX");
	this.shape_18.setTransform(6.7,11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AAFgVIgJAr");
	this.shape_19.setTransform(8.5,8.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("ABUBUQAAABAAARQgBAQhHAIQhGAIgmgmQglgmAAg1QAAg0AlgmQAmglA3gEQA2gDAXAKQAVAKgFAnQAAACgCAQQAAAFAEAIQAPAFAFAQQAIARAOAZQgQANgYAD");
	this.shape_20.setTransform(-0.4,2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6AB93").s().p("AhgBgQglgmAAg1QAAg0AlgmQAmglA3gEQA2gDAWAKQAWAKgFAnIgCASQAAAFAEAIQAPAFAFAQQAIARAOAZQgQANgYADIgKAsIAAAAIAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIAAAAIgEABIAAAAIgBABIAAAAIgCABIgHAFIAAABIgBABIgBABIgCACIgDADIgBABIAAAAIgBABIABgBIAAAAIABgBIADgDIACgCIABgBIABgBIAAgBIAHgFIACgBIAAAAIABgBIAAAAIAEgBIAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABIAAAAIAAAAIgBASQAAAQhHAIIgWABQg2AAgggfgAg7A+QAEAAADgGIAAAAIAAAAIABgBIABgOIgBAOIgBABIAAAAIAAAAQgDAGgEAAIgBAAIAAAAIgBAAIAAAAQgEgBgEgDIAAAAIAAAAIAAAAQgMgXAAgJQAAgDABgCQgBACAAADQAAAJAMAXIAAAAIAAAAIAAAAQAEADAEABIAAAAIABAAIAAAAIABAAgAg9AnIgJgGgAgyAhIAAgMgAAdg3QAZgRAYgCQgYACgZARgABUBUIAAAAg");
	this.shape_21.setTransform(-0.4,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chicoCabeca, new cjs.Rectangle(-22.6,-12.6,36.7,31.3), null);


(lib.Braço = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Articulações
	this.instance = new lib.articulação();
	this.instance.parent = this;
	this.instance.setTransform(-8.8,9);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 254, 133, 12, 0)];
	this.instance.cache(-8,-8,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Mão
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F2D666").ss(0.5,1,1).p("AADgSIgdAVQgagvA3AaIANgKAAQgLQAJAAAGAGQAFAFgBAIQgCAJgIAGQgIAGgKAAQgIABgGgGQgFgGABgJQACgIAIgFQAIgGAJgBg");
	this.shape.setTransform(7.4,-5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgRAKIATgiAAUgMIgUAgAARAgIATgfAgOgfIgVAg");
	this.shape_1.setTransform(12.4,-16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgKg7QAJAFAIAFQAJAFAIAHQAJAGAIAIQAJAIAIAKIgiA9QgNAKgIgGIg4gnQgLgWAQgVIAUgiQAOgKAFAJ");
	this.shape_2.setTransform(11.9,-13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6AB93").s().p("AADA8Ig4gnQgLgWAQgVIAUgiQAOgKAFAJIgWAhIAWghIgBgCIARAKIARAMIARAOQAJAIAIAKIgiA9QgIAGgGAAQgEAAgDgCgAAVAHIAUgegAAEgFIAUgggAgNgOIAUgjg");
	this.shape_3.setTransform(11.9,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Desenho
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ACEhBIhTg5AiDAnIBMBU");
	this.shape_4.setTransform(1,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AAxh6QhcBKhYBXAg3B7QBXhWBkhm");
	this.shape_5.setTransform(1,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE850C").s().p("AiDAnQBYhXBchKIBTA5QhkBmhXBWg");
	this.shape_6.setTransform(1,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Braço, new cjs.Rectangle(-14.5,-20.7,33.4,35.5), null);


(lib.AnteBraço = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Articulações
	this.instance = new lib.articulação();
	this.instance.parent = this;
	this.instance.setTransform(-6.1,-0.2);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 254, 133, 12, 0)];
	this.instance.cache(-8,-8,16,16);

	this.instance_1 = new lib.articulação();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.1,0);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 254, 133, 12, 0)];
	this.instance_1.cache(-8,-8,16,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Desenho
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ah9A1IAEhyAB1g9IAJBxAg7A+QgxgGgGgB");
	this.shape.setTransform(6.1,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhyA6IgLgBAB+A3QiJAQgwgGAh5g5QB3gQB3AQ");
	this.shape_1.setTransform(6.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE850C").s().p("Ag7BBIg3gHIgLgBIAEhyQB3gQB3AQIAJBwQhkALg0AAQgUAAgNgBg");
	this.shape_2.setTransform(6.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AnteBraço, new cjs.Rectangle(-11.9,-7.5,35.8,15.3), null);


(lib.Marinhocoxa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Articulações
	this.instance = new lib.articulação();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,0.6,0.807,0.856);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance.cache(-8,-8,16,16);

	this.instance_1 = new lib.articulação();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.2,0.5,0.835,0.886);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_1.cache(-8,-8,16,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Desenho
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACbgzQAAAAAAAAQgqgJgngGQgDAAgCgBAAIhIQgIAAgJAAQhPAAg/AWIgDBqQBVAOA7ACQANABANAAQApAAAagHQBDgSAFAIIAAhrACbgzIAAAA");
	this.shape.setTransform(3.6,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgMgEQgfgEgegBABJAKQAAAAABAA");
	this.shape_1.setTransform(11.8,-5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgKBIQg7gChVgOIADhqQA/gWBOAAIASAAQAeACAfADIAFABQAnAGAqAJIAAAAIAABrQgFgIhDASQgaAHgpAAIgEAAIgWgBg");
	this.shape_2.setTransform(3.6,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFD6FE").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(19.1,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Marinhocoxa, new cjs.Rectangle(-16.2,-7.9,40.3,16.6), null);


(lib.MarinhoCanela = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tenis
	this.instance = new lib.articulação();
	this.instance.parent = this;
	this.instance.setTransform(-2,-16.4,0.865,0.865,135);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance.cache(-8,-8,16,16);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgBgIQABAJACAI");
	this.shape.setTransform(-7.4,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhXAdQADAIAhgBQAuAAAUAAQAUAAA7gJQAGgegggFQgfgEgjgWQgIAKgWADQgWADgegRQgPAPABALQACAJABAL");
	this.shape_1.setTransform(1.6,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#AAAAAA","#000000"],[0,1],0.7,-1.7,0,0.7,-1.7,4.2).s().p("AhXAdQgDgHgBgLIgDgUQgBgLAPgPQAeARAWgDQAWgDAIgKQAjAWAfAEQAgAFgGAeQg7AJgUAAIhCAAIgEAAQgdAAgDgHg");
	this.shape_2.setTransform(1.6,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Perna
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgqCaQAnASArgRIACgxIAAgBIAKkIIhegDQgQBiAOBrQAEAUABAUQABALAAAMQgBAegDASg");
	this.shape_3.setTransform(-2.2,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgqCaQADgSABgeIgBgXQgBgUgEgUQgOhrAQhiIBeADIgKEIIAAABIgCAxQgWAIgTAAQgVAAgUgJg");
	this.shape_4.setTransform(-2.2,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MarinhoCanela, new cjs.Rectangle(-9.1,-23.4,21.3,45.7), null);


(lib.MarinhoBraço = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Articulações
	this.instance = new lib.articulação();
	this.instance.parent = this;
	this.instance.setTransform(-9.8,10,0.821,0.821);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 249, 176, 106, 0)];
	this.instance.cache(-8,-8,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Mão
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAAAQIAQgaAAeABIgQAaAgLgaIgSAbAACgTIgQAb");
	this.shape.setTransform(7.6,-10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgyAQQAAgVAOgRIAQgcQAMgJADAIAgFg1QAGAEAHAEQAIAFAHAFQAHAFAHAGQAHAIAHAIIgcAyQgLAIgGAG");
	this.shape_1.setTransform(6.9,-7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9B06A").s().p("AgyAQQAAgVAOgRIAQgcQAMgJAEAIIgBgCIANAIIAPAKIANALIAPAQIgcAyIgRAOgAAUABIAQgZgAAGgIIARgbgAgHgQIAPgdgAgWgYIASgbg");
	this.shape_2.setTransform(6.9,-7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Desenho
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAvhkIiUCEIA/BFICMig");
	this.shape_3.setTransform(-2.5,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9B06A").s().p("AhlAgICUiEIA3ApIiMCgg");
	this.shape_4.setTransform(-2.5,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MarinhoBraço, new cjs.Rectangle(-14.5,-14.5,27.5,29.3), null);


(lib.MarinhoAnteBraço = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Articulações
	this.instance = new lib.articulação();
	this.instance.parent = this;
	this.instance.setTransform(-7.1,0.8,0.826,0.826);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 153, 153, 0)];
	this.instance.cache(-8,-8,16,16);

	this.instance_1 = new lib.articulação();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.9,1,0.826,0.826);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 249, 176, 106, 0)];
	this.instance_1.cache(-8,-8,16,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Desenho
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAAA2IABhr");
	this.shape.setTransform(-1.2,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAjAtIgCASIhLgIIg9gHIADheIA8gGIBMgKIAAASIA9gCIAHBdIhFgCIAAgzIABgm");
	this.shape_1.setTransform(3,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9B06A").s().p("AghgNIAAAyIgBASgAghAlIAAgyIABgnIA8gCIAHBdgAghAlg");
	this.shape_2.setTransform(9.8,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9999").s().p("AgfAvIAEheIA6gGIgCBrg");
	this.shape_3.setTransform(-4.3,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnA3IAChrIBNgKIAAASIgBAmIgCBFg");
	this.shape_4.setTransform(2.6,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MarinhoAnteBraço, new cjs.Rectangle(-11.8,-6.3,29.5,14.6), null);


(lib.MarinhoVoadora = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cabeça
	this.instance = new lib.MarinhoCabeça();
	this.instance.parent = this;
	this.instance.setTransform(-2.6,-50.5,1,1,0,0,0,-0.3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({skewY:180,x:1.1},0).wait(3).to({regY:10.9,scaleX:1,scaleY:1,skewX:-25.3,skewY:154.7,x:-46,y:-29.4},5).to({regY:11,scaleX:1,scaleY:1,skewX:0,skewY:180,x:1.1,y:-50.5},5).wait(1).to({skewY:0,x:-2.6},0).wait(1));

	// AnteBraço Direito
	this.instance_1 = new lib.MarinhoAnteBraço();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,-42.6,0.996,0.996,75.4,0,0,-7.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:0,skewX:-75.4,skewY:104.6,x:-0.6},0).to({regX:-7.3,scaleX:0.99,scaleY:0.99,skewX:-137.9,skewY:42.1,x:-0.7,y:-42.5},3).to({scaleX:0.99,scaleY:0.99,skewX:-78.4,skewY:101.6,x:-37.8,y:-20.2},5).to({regX:-7.4,scaleX:1,scaleY:1,skewX:-75.4,skewY:104.6,x:-0.6,y:-42.6},5).wait(1).to({rotation:75.4,skewX:0,skewY:0,x:-0.9},0).wait(1));

	// Braço Direito
	this.instance_2 = new lib.MarinhoBraço();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.1,-22.7,0.992,0.992,92,0,0,-9.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:0,skewX:-92,skewY:88,x:-5.7},0).to({regX:-9.4,scaleX:0.99,scaleY:0.99,skewX:-148.2,skewY:31.8,x:14.4,y:-29},3).to({regX:-9.3,scaleX:0.99,scaleY:0.99,skewX:-86.8,skewY:93.2,x:-41.6,y:0},5).to({scaleX:0.99,scaleY:0.99,skewX:-92,skewY:88,x:-5.7,y:-22.7},5).wait(1).to({rotation:92,skewX:0,skewY:0,x:4.1},0).wait(1));

	// Pescocinho
	this.instance_3 = new lib.Caopescocinho();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.9,-48.3,1,1,7.8,0,0,-1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:0,skewX:-7.8,skewY:172.2,x:-0.7},0).wait(3).to({scaleX:1,scaleY:1,skewX:-47.9,skewY:132.1,x:-44.5,y:-26.9},5).to({scaleX:1,scaleY:1,skewX:-7.8,skewY:172.2,x:-0.7,y:-48.3},5).wait(1).to({rotation:7.8,skewX:0,skewY:0,x:-0.9},0).wait(1));

	// Coluna
	this.instance_4 = new lib.MarinhoColunadelado();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.3,5.6,0.69,1,0,0,0,0,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({skewY:180,x:-1.3},0).wait(3).to({scaleX:0.69,scaleY:1,skewX:-55.4,skewY:124.6,x:-1.2},5).to({scaleX:0.69,scaleY:1,skewX:0,skewY:180,x:-1.3},5).wait(1).to({skewY:0,x:-0.3},0).wait(1));

	// AnteBraço Esquerdo
	this.instance_5 = new lib.MarinhoAnteBraço();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.8,-42.6,0.993,0.993,0,-51.1,128.9,-7.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:51.1,skewX:0,skewY:0,x:-0.7},0).wait(3).to({scaleX:0.99,scaleY:0.99,rotation:135,x:-37.5,y:-20.1},5).to({scaleX:0.99,scaleY:0.99,rotation:51.1,x:-0.7,y:-42.6},5).wait(1).to({rotation:0,skewX:-51.1,skewY:128.9,x:-0.8},0).wait(1));

	// Braço Esquerdo
	this.instance_6 = new lib.MarinhoBraço();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-13.6,-26.2,0.998,0.998,125.6,0,0,-9.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({rotation:0,skewX:-125.6,skewY:54.4,x:12},0).to({regX:-9.1,scaleX:1,scaleY:1,skewX:-154.6,skewY:25.4,x:12.1},3).to({skewX:-64.6,skewY:115.4,x:-52.2,y:-5.2},5).to({regX:-9.2,scaleX:1,scaleY:1,skewX:-125.6,skewY:54.4,x:12,y:-26.2},5).wait(1).to({rotation:125.6,skewX:0,skewY:0,x:-13.6},0).wait(1));

	// Coxa Direita
	this.instance_7 = new lib.Marinhocoxa();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.3,4.7,0.999,0.999,67.4,0,0,-11.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({rotation:0,skewX:-67.4,skewY:112.6,x:-1.2},0).to({scaleX:1,scaleY:1,skewX:-90.8,skewY:89.2,x:-1.3},3).wait(5).to({scaleX:1,scaleY:1,skewX:-67.4,skewY:112.6,x:-1.2},5).wait(1).to({rotation:67.4,skewX:0,skewY:0,x:-0.3},0).wait(1));

	// Perna Direita
	this.instance_8 = new lib.MarinhoCanela();
	this.instance_8.parent = this;
	this.instance_8.setTransform(12.5,33.2,1,1,-8.5,0,0,-1.1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({rotation:0,skewX:8.5,skewY:-171.5,x:-14},0).to({regY:-15.6,scaleX:1,scaleY:1,skewX:-9,skewY:-189,x:-2,y:36},3).wait(5).to({regY:-15.7,scaleX:1,scaleY:1,skewX:8.5,skewY:-171.5,x:-14,y:33.2},5).wait(1).to({rotation:-8.5,skewX:0,skewY:0,x:12.5},0).wait(1));

	// Coxa Esquerda
	this.instance_9 = new lib.Marinhocoxa();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.3,5,0.999,0.999,99.5,0,0,-12.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({rotation:0,skewX:-99.5,skewY:80.5,x:-0.3},0).to({scaleX:1,scaleY:1,skewX:-56.2,skewY:123.8,y:5.1},3).to({regX:-12.2,scaleX:1,scaleY:1,skewX:-208.6,skewY:-28.6,x:-0.2},5).to({regX:-12.1,scaleX:1,scaleY:1,skewX:-99.5,skewY:80.5,x:-0.3,y:5},5).wait(1).to({rotation:99.5,skewX:0,skewY:0,x:-1.3},0).wait(1));

	// Perna Esquerda
	this.instance_10 = new lib.MarinhoCanela();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6,34.4,0.998,0.998,30.1,0,0,-2,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({rotation:0,skewX:-30.1,skewY:149.9,x:4.4},0).to({scaleX:1,scaleY:1,skewX:-75.5,skewY:104.5,x:-19.2,y:30.2},3).to({regY:-17.4,scaleX:1,scaleY:1,skewX:-94.8,skewY:85.2,x:24.9,y:21.9},3).to({scaleX:1,scaleY:1,skewX:-107.9,skewY:72.1,x:26.7,y:-9.4},2).to({regX:-2.1,regY:-17.5,scaleX:1,scaleY:1,skewX:-61.2,skewY:118.8,x:24.4,y:23.8},3).to({regX:-2,scaleX:1,scaleY:1,skewX:-30.1,skewY:149.9,x:4.4,y:34.4},2).wait(1).to({rotation:30.1,skewX:0,skewY:0,x:-6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-73.6,61.7,148.7);


(lib.MarinhoSocando = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cabeça
	this.instance = new lib.MarinhoCabeça();
	this.instance.parent = this;
	this.instance.setTransform(-2.6,-50.5,1,1,0,0,0,-0.3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({x:-7.6,y:-50.2},8).to({x:-2.6,y:-50.5},5).wait(1));

	// AnteBraço Direito
	this.instance_1 = new lib.MarinhoAnteBraço();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,-42.6,0.996,0.996,75.4,0,0,-7.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({scaleX:0.99,scaleY:0.99,rotation:106.5,x:-6,y:-41.1},8).to({scaleX:1,scaleY:1,rotation:75.4,x:-0.9,y:-42.6},5).wait(1));

	// Braço Direito
	this.instance_2 = new lib.MarinhoBraço();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.1,-22.7,0.992,0.992,92,0,0,-9.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.99,scaleY:0.99,rotation:29.9,x:4,y:-22.6},6).to({regY:9.6,scaleX:0.99,scaleY:0.99,rotation:148.2,x:-12.8,y:-21},8).to({regY:9.7,scaleX:0.99,scaleY:0.99,rotation:92,x:4.1,y:-22.7},5).wait(1));

	// Pescocinho
	this.instance_3 = new lib.Caopescocinho();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.9,-48.3,1,1,7.8,0,0,-1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({scaleX:1,scaleY:1,x:-6.4,y:-46.8},8).to({scaleX:1,scaleY:1,x:-0.9,y:-48.3},5).wait(1));

	// Coluna
	this.instance_4 = new lib.MarinhoColunadelado();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.3,5.6,0.69,1,0,0,0,0,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({scaleX:1.13,rotation:-6.8,x:4.7,y:5.4},8).to({scaleX:0.69,rotation:0,x:-0.3,y:5.6},5).wait(1));

	// AnteBraço Esquerdo
	this.instance_5 = new lib.MarinhoAnteBraço();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.8,-42.6,0.993,0.993,0,-51.1,128.9,-7.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.99,scaleY:0.99,skewX:-125.5,skewY:54.5,x:-0.7},6).to({skewX:-59.1,skewY:120.9,x:-6.6,y:-41.1},8).to({scaleX:0.99,scaleY:0.99,skewX:-51.1,skewY:128.9,x:-0.8,y:-42.6},5).wait(1));

	// Braço Esquerdo
	this.instance_6 = new lib.MarinhoBraço();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-13.6,-26.2,0.998,0.998,125.6,0,0,-9.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:9.9,scaleX:1,scaleY:1,rotation:-17.6,x:12.2,y:-26.7},6).to({regX:-9.1,scaleX:1,scaleY:1,rotation:159.9,x:-17.7,y:-23.7},8).to({regX:-9.2,regY:9.8,scaleX:1,scaleY:1,rotation:125.6,x:-13.6,y:-26.2},5).wait(1));

	// Coxa Direita
	this.instance_7 = new lib.Marinhocoxa();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.3,4.7,0.999,0.999,67.4,0,0,-11.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({scaleX:1,scaleY:1,rotation:90.8,x:-0.4,y:4.8},8).to({scaleX:1,scaleY:1,rotation:67.4,x:-0.3,y:4.7},5).wait(1));

	// Perna Direita
	this.instance_8 = new lib.MarinhoCanela();
	this.instance_8.parent = this;
	this.instance_8.setTransform(12.5,33.2,1,1,-8.5,0,0,-1.1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({scaleX:1,scaleY:1,rotation:13,x:0.1,y:36.4},8).to({scaleX:1,scaleY:1,rotation:-8.5,x:12.5,y:33.2},5).wait(1));

	// Coxa Esquerda
	this.instance_9 = new lib.Marinhocoxa();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.3,5,0.999,0.999,99.5,0,0,-12.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:0.8,scaleX:1,scaleY:1,rotation:81.3},6).to({regX:-12.2,regY:0.7,scaleX:1,scaleY:1,rotation:97.2,y:4.9},8).to({regX:-12.1,rotation:99.5,y:5},5).wait(1));

	// Perna Esquerda
	this.instance_10 = new lib.MarinhoCanela();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6,34.4,0.998,0.998,30.1,0,0,-2,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:3.8,y:35.7},6).to({regY:-17.6,scaleX:1,scaleY:1,rotation:22.8,x:-4.7,y:35.3},8).to({regY:-17.5,scaleX:1,scaleY:1,rotation:30.1,x:-6,y:34.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-73.6,61.7,148.7);


(lib.MarinhoParado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dedo
	this.instance = new lib.MarinhoDedo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(36.4,-40.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:39.6,x:32.9,y:-18.1},5).to({scaleX:1,scaleY:1,rotation:0,x:36.4,y:-40.1},5).to({scaleX:1,scaleY:1,rotation:39.6,x:32.9,y:-18.1},5).to({scaleX:1,scaleY:1,rotation:0,x:36.4,y:-40.1},5).to({scaleX:1,scaleY:1,rotation:39.6,x:32.9,y:-18.1},5).to({scaleX:1,scaleY:1,rotation:0,x:36.4,y:-40.1},5).to({_off:true},1).wait(5));

	// AnteBraço Direito
	this.instance_1 = new lib.MarinhoAnteBraço();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,-42.6,0.996,0.996,75.4,0,0,-7.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-7.3,scaleX:0.99,scaleY:0.99,rotation:41.1,x:-0.8,y:-42.5},4).to({scaleX:0.99,scaleY:0.99,rotation:59.1,x:-0.9},5).to({scaleX:0.99,scaleY:0.99,rotation:41.1,x:-0.8},5).to({scaleX:0.99,scaleY:0.99,rotation:59.1,x:-0.9},5).to({scaleX:0.99,scaleY:0.99,rotation:41.1,x:-0.8},5).to({scaleX:0.99,scaleY:0.99,rotation:59.1,x:-0.9},5).to({scaleX:0.99,scaleY:0.99,rotation:41.1,x:-0.8},5).to({regX:-7.4,scaleX:1,scaleY:1,rotation:75.4,x:-0.9,y:-42.6},5).wait(1));

	// Braço Direito
	this.instance_2 = new lib.MarinhoBraço();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.1,-22.7,0.992,0.992,92,0,0,-9.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.99,scaleY:0.99,rotation:27.6,x:14.6,y:-29.2},4).to({scaleX:0.99,scaleY:0.99,rotation:69.5,x:9,y:-24.7},5).to({scaleX:0.99,scaleY:0.99,rotation:27.6,x:14.6,y:-29.2},5).to({scaleX:0.99,scaleY:0.99,rotation:69.5,x:9,y:-24.7},5).to({scaleX:0.99,scaleY:0.99,rotation:27.6,x:14.6,y:-29.2},5).to({scaleX:0.99,scaleY:0.99,rotation:69.5,x:9,y:-24.7},5).to({scaleX:0.99,scaleY:0.99,rotation:27.6,x:14.6,y:-29.2},5).to({scaleX:0.99,scaleY:0.99,rotation:92,x:4.1,y:-22.7},5).wait(1));

	// Coluna
	this.instance_3 = new lib.MarinhoColunadelado();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.3,5.6,0.69,1,0,0,0,0,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// AnteBraço Esquerdo
	this.instance_4 = new lib.MarinhoAnteBraço();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.8,-42.6,0.993,0.993,0,-51.1,128.9,-7.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.99,scaleY:0.99,skewX:-44.3,skewY:135.7},4).wait(30).to({scaleX:0.99,scaleY:0.99,skewX:-51.1,skewY:128.9},5).wait(1));

	// Braço Esquerdo
	this.instance_5 = new lib.MarinhoBraço();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-13.6,-26.2,0.998,0.998,125.6,0,0,-9.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-9.1,rotation:114.5,x:-15.2,y:-28.1},4).wait(30).to({regX:-9.2,rotation:125.6,x:-13.6,y:-26.2},5).wait(1));

	// Cabeça
	this.instance_6 = new lib.MarinhoCabeça();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-2.6,-50.5,1,1,0,0,0,-0.3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40));

	// Pescocinho
	this.instance_7 = new lib.Marinhopescocinho();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.9,-48.3,1,1,7.8,0,0,-1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40));

	// Coxa Direita
	this.instance_8 = new lib.Marinhocoxa();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.3,4.7,0.999,0.999,67.4,0,0,-11.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,rotation:92.2,x:-0.4},4).wait(30).to({scaleX:1,scaleY:1,rotation:67.4,x:-0.3},5).wait(1));

	// Perna Direita
	this.instance_9 = new lib.MarinhoCanela();
	this.instance_9.parent = this;
	this.instance_9.setTransform(12.5,33.2,1,1,-8.5,0,0,-1.1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:-15.8,scaleX:1,scaleY:1,rotation:-1.3,x:-1,y:36.7},4).wait(30).to({rotation:-1.3},0).to({regY:-15.7,scaleX:1,scaleY:1,rotation:-8.5,x:12.5,y:33.2},5).wait(1));

	// Coxa Esquerda
	this.instance_10 = new lib.Marinhocoxa();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1.3,5,0.999,0.999,99.5,0,0,-12.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:0.8,rotation:92.5},4).wait(30).to({regY:0.7,rotation:99.5},5).wait(1));

	// Perna Esquerda
	this.instance_11 = new lib.MarinhoCanela();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-6,34.4,0.998,0.998,30.1,0,0,-2,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1,scaleY:1,rotation:2.3,x:-2.4,y:35.3},4).wait(30).to({rotation:2.3},0).to({scaleX:1,scaleY:1,rotation:30.1,x:-6,y:34.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-73.6,61.7,148.7);


(lib.MarinhoMorrendo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cabeça
	this.instance = new lib.MarinhoCabeça();
	this.instance.parent = this;
	this.instance.setTransform(-2.6,-50.5,1,1,0,0,0,-0.3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-98.8,x:-45.5,y:-72.5},19).to({scaleX:1,scaleY:1,rotation:-241.4,x:-153.2,y:-91.1},5).to({regX:-0.2,regY:10.9,scaleX:1,scaleY:1,rotation:-393.4,x:-234.8,y:-67.1},5).to({regX:-0.3,scaleX:1,scaleY:1,rotation:-505.9,x:-322.7,y:49.9},5).wait(5).to({scaleX:0.99,scaleY:0.99,rotation:-644,x:-357.8,y:60.7},5).wait(1));

	// AnteBraço Direito
	this.instance_1 = new lib.MarinhoAnteBraço();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,-42.6,0.996,0.996,75.4,0,0,-7.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-24.1,x:-63.9,y:-34.6},19).to({rotation:-24.1,x:-146.4,y:-19.1},5).to({regY:0.6,scaleX:0.99,scaleY:0.99,rotation:-133.4,x:-175.8,y:14.4},5).to({scaleX:0.99,scaleY:0.99,rotation:-170,x:-208.9,y:72.8},5).wait(11));

	// Braço Direito
	this.instance_2 = new lib.MarinhoBraço();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.1,-22.7,0.992,0.992,92,0,0,-9.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.99,scaleY:0.99,rotation:4.8,x:-17.8,y:-53.6},19).to({scaleX:0.99,scaleY:0.99,rotation:-98.2,x:-101,y:44.9},5).to({regX:-9.5,scaleX:0.99,scaleY:0.99,rotation:-128.9,x:-114.9,y:68.9},5).wait(10).to({x:-116.9,y:71.9},5).wait(1));

	// Pescocinho
	this.instance_3 = new lib.Caopescocinho();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.9,-48.3,1,1,7.8,0,0,-1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-101.3,x:-51.9,y:-50.2},19).to({x:-111.4,y:-8.7},5).to({regY:0.2,scaleX:1,scaleY:1,rotation:-196.3,x:-156.8,y:24.7},5).to({x:-167.3,y:66.2},5).wait(11));

	// Coluna
	this.instance_4 = new lib.MarinhoColunadelado();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.3,5.6,0.69,1,0,0,0,0,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-5.3},19).to({x:-25.3},5).to({scaleX:0.69,scaleY:1,rotation:-35.6,x:-45.2},5).to({regX:-0.1,scaleX:0.69,scaleY:1,rotation:0.5,x:-70.3,y:70.6},5).wait(5).to({rotation:-85.4,x:-70.2},5).wait(1));

	// AnteBraço Esquerdo
	this.instance_5 = new lib.MarinhoAnteBraço();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.8,-42.6,0.993,0.993,0,-51.1,128.9,-7.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-7.4,scaleX:0.99,scaleY:0.99,skewX:2.8,skewY:182.8,x:-18.5,y:-53.1},19).to({skewX:-78.6,skewY:101.4,x:-85.4,y:-13.1},5).to({regX:-7.5,regY:0.9,scaleX:0.99,scaleY:0.99,skewX:-163.6,skewY:16.4,x:-147.5,y:47.5},5).to({skewY:16.4,x:-166.5,y:67.5},5).wait(5).to({regY:0.8,skewX:-171.3,skewY:8.7,x:-166.6,y:68.5},5).wait(1));

	// Braço Esquerdo
	this.instance_6 = new lib.MarinhoBraço();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-13.6,-26.2,0.998,0.998,125.6,0,0,-9.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-49.1,y:-26.7},19).to({regY:10,scaleX:1,scaleY:1,rotation:76.2,x:-142.8,y:13.3},5).to({scaleX:1,scaleY:1,rotation:-50.4},5).to({scaleX:0.99,scaleY:0.99,rotation:-157.5,x:-176.7,y:65.3},5).wait(5).to({scaleX:0.99,scaleY:0.99,rotation:-134.7,y:68.8},5).wait(1));

	// Coxa Direita
	this.instance_7 = new lib.Marinhocoxa();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.3,4.7,0.999,0.999,67.4,0,0,-11.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:97.2,x:-5.3},19).to({scaleX:1,scaleY:1,rotation:76.7,x:-25.4},5).to({rotation:2.5,x:-45.4},5).to({x:-70.4,y:69.7},5).wait(11));

	// Perna Direita
	this.instance_8 = new lib.MarinhoCanela();
	this.instance_8.parent = this;
	this.instance_8.setTransform(12.5,33.2,1,1,-8.5,0,0,-1.1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:-15.6,scaleX:1,scaleY:1,rotation:28.3,x:-9,y:36.3},19).to({scaleX:1,scaleY:1,rotation:-3.8,x:-18.1,y:35.8},5).to({regX:-1,scaleX:1,scaleY:1,rotation:-52.7,x:-13.5,y:5.3},5).to({scaleX:0.99,scaleY:0.99,rotation:-67.7,x:-38.5,y:70.2},5).wait(5).to({regX:-1.1,scaleX:0.99,scaleY:0.99,rotation:-83,y:70.3},5).wait(1));

	// Coxa Esquerda
	this.instance_9 = new lib.Marinhocoxa();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.3,5,0.999,0.999,99.5,0,0,-12.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:-12.2,regY:0.8,scaleX:1,scaleY:1,rotation:75,x:-6.3},19).to({scaleX:1,scaleY:1,rotation:101.5,x:-26.3},5).to({scaleX:1,scaleY:1,rotation:77.5,x:-46.3,y:4.9},5).to({rotation:-10.5,x:-71.4,y:69.9},5).wait(11));

	// Perna Esquerda
	this.instance_10 = new lib.MarinhoCanela();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6,34.4,0.998,0.998,30.1,0,0,-2,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:-17.6,scaleX:1,scaleY:1,rotation:2.6,x:2.1,y:33.2},19).to({regY:-17.5,scaleX:1,scaleY:1,rotation:17.9,x:-32.4,y:34.3},5).to({regY:-17.6,scaleX:1,scaleY:1,rotation:-0.2,x:-40,y:33.8},5).to({regY:-17.5,rotation:-81.4,x:-41.9,y:62.9},5).wait(11));

	// Sangue
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgvABQgEgoAqgJIAIgBQBAAOgTA8QgGAVgWADIgPABQgsAAgEgxg");
	this.shape.setTransform(8.2,-76);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AhFCyIgHgHIAAgCQgDgLAEgJQAFgKAHgGQARgjAogMIAQgJIANgGQA8gNAtAMQAVAFAEAaQgIASgMAMQgQASgaAHIgXAGQgkAIgcAKQgGACgHAAQgNAJgOAAQgQAAgRgNgAg9BAQgUgEgBgOQgBgHADgCIgDgDQgEgGgCgGIgCgIQgIgBgJgKQgFgEgCgHQgCgKABgIIgCgCQgKgEgCgNIAAgDQgDgUAPgIQAKgFALgEIgFAAIgDAAQgNACgOgBQhPgBgugpQgEgDgEgGIgBgIIAAgBIAAgEQAEgOADgEIAHgGQAdgRAugBIANAAQAxAKAiAVIADADQAIAFAHAHIAEAFQAFAJgBAKIgDAJIgFAJQgGAGgHADIgDADIAOgDQAKgCAKABIARACIADABIgRgVQgHgJgGgLQgCgHAAgHIAAgBQABgLAHgIIAGgGQAagMAjANIAKAEQAKAHAIAIIADADQAgAZAGAjIAGABQABgEgBgFQgCgGADgGQAFgMANgEIAGgBIAKADQASAHAQAKIAFADQAMAGALAHIgBgCIABgDQAHgGAMACQATALAKAVIAMAbQAMAUAEAYQACANgIAJQgBAEgCAFQgDAHgIACIgHACQgKAKgOgGIgFgBIgSgJQgMACgMgHQgUgLgUgOQgYgRgagKQgDAAgCgDIgEgDQAGAQgIAJQgCAKgHAFQgPALgQAPIgCACQgVASgaACIgRAAIAAAAIgFAAQgIAAgJgBg");
	this.shape_1.setTransform(-13.5,-76);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AiVEcIgDgBQgFgDgFgFIgBgCQgFgQAIgNQAIgNAMgIQAdgwAxgRQgMgBgDgGQgBgBAAgBQAAgBgBAAQAAgBAAAAQAAAAABAAIgDgCIgHgGIgDgEQgFABgFgCIgHgDQgEgCgDgEIgGgJIgCgBIgCAAQgHgBgDgGIAAgBQgEgHADgDQgKADgKABQhAAKgzgbIgHgEQgFgDgDgFIgDgHIgBgEQACgMACgGQAMgOANgHQATgLAZgEIAMgCIAMgBIgFgDQgOgFABgPIABgGIABgDIgBgDIgDgKIABgIQgDgCgDgIIgBgEIgCgFIgDgHIgBgLIgCgCQgHgGgCgMIAAgCIAAgDIAAgIIhGACIgTAAQgiAHgigMQgJgDgIgGIgBgCIgFgKIAAgBIAAgGQAEgQADgEIAFgIIAOgIIACgBQASgKAVgGIgDgDQgEgDgDgGIgBgIIgBgEIAAgBQACgMACgGIAFgGQAUgVApgDIAGAAIANAAQAuAHAkAOIADACIARAIIAEAEQAGAGACAHIABAGIgBAGIgDAEIAQADIAPABIAFABIAKACIADABIgBgBIgIgEIgCgBQgEgCgDgEIgDgIIAAAAIAAgDIAAAAIACgTQAVggAxgFIAPgBQAwAHAlAUIAVAPIAEAEIADAEIAFgBIADgBQgEgLAAgKQgBgGACgFIAAgDIADgHQAEgGAHgDIAIgDQAbgCAiAQIAJAEIAIAGIANAJIACADQAVAOANASIAAAEIACADIAFgCQACgEgBgEQAAgGADgFQAHgLANgEIAIgBIACAAIAIACQATAIAQALIAFAEQAMAHALAJIAAAAIABgBQAHgCAKAEIABABQAQAOALAUIAPAZIABABQANAUAIAXQADALgDAKQABAEgBAFQgBAHgEADIgDAFQgEALgIABIgBAAIgCAAIgLAAQgHAGgLgBIgLgBIgOAAIACAEQAFAVAAAUQABAIgFAIQgDAGgFAFIgGAMQgFAJgKADIgKACQgMAKgOgBIgCAAIABAEIgBAGQgCALgHAIIgEAIQgEAGgGADIgHACQgKAJgNgCIgEAAIgRgDIgHABQAEAGACAHIABAGQgTAbgYAQQgXAQgfAHIgQAEIgjAJQgpAMghAUQgKAFgKAEIgCACQgIAGgIAFQgaAYgfAAQgQAAgRgHg");
	this.shape_2.setTransform(-29.5,-69.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("ABZGmIgCAAQgEgBgEgDIAAgBQgGgHAAgGQAAgFADgDQABgUAMgDQgIAAgEgCIgCgBIgCgBIgGgCIgCgBIgIABIgEgBIgFgCIgGgEIAAAAIgCAAQgFAAgCgCIAAAAQgBgBgBgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIgPAFQgfAJgdACQgLABgMgCIgGgCIgGgCIgDgDIgBgBIgCgFIAAgCQAEgEAEAAIAHAAIAAAAIgBgCIgBgBIgBgBIgDgDIgBgDQgDgBgCgDIgCgBIgCgCIgDgDIgDgEIgBgBQgGgBgEgGIAAgBIgBAAIgBgEQgcAEgaACIgPAAQgZAEgbgIQgHgCgHgEIgBgBIgEgGIgBgBIgBgEIgDgCIACgPIAJgOQALgMANgHIgDgJIABgGIAAgDIAFgMIAEgFQAPgPAZgGIAFgCIAEgBIAJgDIALgDIAEgMQADgFAEgEQgIgCgEgEIgBgDIgCgCIgFgEIgCgDIgHgCIgEgDQgDgCgCgDIgDgHIgBAAIgBAAQgEgCgCgEIAAgBQgCgFACgDIgKgDIgGgGQgUgLgHgKIgHgFIgFgDIAAgCIgFgGIgCgFIgBgCIABgOQAFgLAGgIIACgBQAJgLANgHIADgCIABAAIADAAIgEgCQgKgDgEgJIgBgEIAAgCQgLAAgMgDQgEgCgFgDIAAgBIgDgFIAAgBIAAgDIgIgBQACgIABgCQAHgHADgBIAIgEQgEgFgCgIIAAgBIAAgCIgBgBIgJADQgeARgjgMIgCAAIgHgFIgBgBQgFgIABgHQABgHADgFIABgJIgLgEQgGgDgGgGIAAgBIgEgHIAAgBIgBgEIgBgFIADgQIABgCIgDgCIAAgBIgCAAQgEAAgDgEIAAAAQgDgEAAgCIgOABQgtADglgQIgGgDIgGgEIgDgEIAAgCIgCgKIAFgMQAFgGAIgDQABgBAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIAEgBIgEgBQgKgEgCgIIgBgDIAAgCIgCgBIgDgGIgBgEQgDgCgCgEIgBgCIgCgCIgDgEIgDgGIgBgBQgGgEgDgGIgBgBIAAgCIgCgEIg0gDIgDAAIgNgBQgQABgQgGQgGgDgFgEIgJgIIAAgBIgDgGIAAgFIADgPIALgMQAHgGAGgEIANgHIgDgIIABgIIAFgMIADgDIAIgGQAMgFAPgDIADgBIAGgBIAEAAIAKABQAgADAbAIIACABIAMAFIAEACIAGAGIACADIACADIAAACIALACIALABIAEABIAHABIADAAIgCgCIgBgBIgBgDIAAgEIAAgBQADgHACgCQATgPAhgCIALABQAiAFAcALIAQAJIAEACIADADIAEgBIACAAQAAgFACgFIADgFIABgBIADgDQAEgDAFgBIAFgBQAUAAAYAKIAGACIAFADIACgEIADgDIAIgGQAMgGARgCIADgCIACABIAEAAIAJABQAfAGAZALIACABIALAGIADACQAEAEACAEIACADIABAEIAAADIAKADIAKACIADAAIAGADIACABIAAgBIgCgBIgBAAIgCgCIAAgDIAAgBIAAAAIAAgBQACgFABgCQARgLAeACIAJACQAfAJAYARIAOALIADADIACADIAEABIACAAQgBgEABgDIACgEIAAgBIADgCQACgCAFAAIAFAAQAQAEAUANIAGAFIAFAFIAGAEIABACIABAAQAGAGAFAGIAJAMIABACIACACIADAAIABgCQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAEgDAIAAIAFABIABABIAFACQALAIAKAJIADACIAOAOIAAAAQAEABAFADIAGABIAEADIAEADIADADIAFAAIACABQABgFADgDIADgEIABAAIAEgDQAEgCAFAAIAHAAQAWAEAZANIAHAEIAHAFIAKAHIADADIAKAIIAMAKIAGAFIABACIACACIAFAAIACgDIAFgDQAHgDAKAAIAGABIACABIAHADIAPAIIAEgBIAAAAIACAAIAGgCIAFAAIABgBIABgBQAEgEAHAAIAAABQAMABAMAHIAQAJIACACIABABQAOAMAKAQQAFAIACAHIACAGIABAIIAAAEQAAAIgBACIgBABIAAAAIgDADQgCAFgEACIgDADIgFADIABABIABACQAGAQAEAQQACAHgBAGQAAAFgBAEIgBAIQgBAHgCAEIgCAFIgEAEIgFAFIAAAAIABADIABAFQACAIgCAGIgBAGQAAAEgCADIgCADQgCAIgFADIgBABIgFAEIgCADQADAEACAGIABAFQgFAXgIARIgBABQgHARgSAMIgKAGIgTAJIAAABIgEADIgSAQQgOANgSAJIgKAEIgGACIgCABIgNAEIgCACQgJAIgJAFIABAFIgBAHIgBAHQAAAGgDAEIgDADQgEAIgFADIgBAAIABADIAAAFQABAIgDAHIgCAEQgBAFgDADIgDADIgBAAQgHAHgJABIgDABIgMACIgFACIAAAJIgBAEQgQASgSAMQgTAMgWAHIgMAEIgZAIQgfAJgcANIgPAGIgCABIgNAHQgLAGgLAEQgOAEgOAAQgKAAgJgCg");
	this.shape_3.setTransform(-58.1,-76.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AiSKVQgNgCgMgLQgJgaAQgWQAQgWAZgMQA1hVBhgZQCYh4C/gYQBJgPASA/IACAKQhGBMh2AQQh0AQhfBJQgPALgTAHQg6BehaAAQgOAAgOgCgAirBbQgVgCgVgBQgcgCgagJQg1gSATgzQAKgZAZgBIgHgLQgIgQAAgTQABgPAEgLQgXAGgcgZQgNgNgCgSQgDgaAHgUIgJAAQghgDgFggQgIg1A2gIQBOABBPAEQAaACAZAIQA+AUAoAxQBEAbA5AuQALAKAHANQAHAOADANQAJAFAEALQARAvgmAOQgHAYgaAHQg+AQg7AYQgxAUgzAAQgQAAgRgCgAi9gNIAhADQgQgEgQAAIgBABgAjzh3IAEgBIgDgBIgBACgAMaAeQgegXgVgaQgeAKghgcQgxgrgzgpQhAg0hWgBQgJAAgJgGQgsgbg0gCQgNAAgFgLQgfhABIgTIAIgCQBEABA7AgIALAFQgRgNgQgOQgRgPABgXQADgwAwgFQA7AdA3AoIALAIQAgAQAdAVIgIgMQgEgIACgJQAKglAngDQA4AVAhA2QAVAiAcAeQAxA1AbBCQANAggaAYIAAAAQAAAMgFAOQgGAVgWADQgLABgJAAQgPARgSAAQgPAAgSgMgACkjoQgegBgSgYQgfiuiIh1QgUgRgSgVQgFgPACgQQAEgaAXgMQADgCAEAAIARgDIAAgCQB3AoBBB6IAEAKQBKBtgZB+QgEAXgZAAIgDAAgAoFnuIgIgGQi9ghi7goQgNgDgMgKIgDgVQgBgFABgFQADgKAGgJQAHgKALgJIAHgCIAQgDIABgCQDZAJDMBBQAEACAEADQAYAFAXAIQAIADAFAGQAQARgBAXQgFAKgHAJQgHAKgKAFQgbANgaAAQggAAgdgUg");
	this.shape_4.setTransform(-78.2,-73.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AjFJGQgKgEgIgLQgFgYAOgVQAPgVAWgMQAYggAhgVQA2geAlgIQCchcCbAUIAJAAQAuADAJAsIABAKIAAAJQhCBJhtAOQgrAFgrAJQgcAHgcALQgfAMgbAPQgOAHgRAEQgtAugxAAQgZAAgbgNgAKpFvQgKgIgKgKQgNgNgLgPQgZADgYgbIgDgCQgSgOgPgRIgMgOIgjghQgTgTgUgOIgQgCQgIgBgGgFQgVgPgYgHIgBAAIgFgBQgKgDgMgCQgJgBgEgIIgHAAQgIABgIgEIg2gVQgOgFgOgDQgKgCgEgJIAAgBQgWg3A3gXQAwgJAoAIIAPAAQgPgFgRgDIgngGQgLgBgGgJIAAAAQgWgwAmgXIAdgMQA8gIA4ATIALAEIgEgFQgIgJgHgLQgJgOAEgUQAIgpAogJQAsALApAPIARAHIAKAEQAdAIAbAMIgEgLIAAgGQgmgigoggQgOgMgQgLQgegUgjgKQgdgIgegFIgCAAQgJgBgJgDQgsgRgvgLIgJgDIgCgBIgFgCQgGgFgDgIQgGgVAGgPIAJgQQARgOAjgGIAIgBQBIAEA+AiIAMAGQgHgGgGgHQgIgIAHgNQALgcAsAGIAPAKIAGAFIAeARQAYAQAVATIAGAFIAOAKIALAIIAMAIIAxAlIgDgHIAAgCIABgBQgBgDADgEQAQgWAlAGQAWALAUARQAbAXAWAfQAOAUAQASIALAOIAHAQQAVA4gBAXIAAAGQAEASgbALIgDADQgCAFgFAFQgJAMgSgEIgFAAIgDAAIADAJQAJAZAEAZQAFAbgaARQgCAIgFAJIAXAkIASAbIALAQQAKAQAGAQQAFALAAAHQgBALAFAEQAFAGAEAHQAFAKgLAGQgEADgHACQgCAGgGAHIgCABIgEACQgKAMgRgDIgBgBQgJgBgIgDIgHACIgEAAQgHAKgIAFIgDADIAAAAQAAAJgEAMIgCAEQgGAOgPACIgQABQgVAYgbgRQgLANgOACIgEAAQgNAAgOgJgAi3AMQgXgEgYgDQgegFgegIIgEgBQgVgHgOgKQgSgOgBgXQAAgJACgFIgPADQgKACgHgHIgBgDQAAgPAOgFIAGgBIgJgPIgGgTQgcAFgfgTQgIgEgGgFQgGgGgEgHQgKgTgDgNIgKAAIgCABQgdAAgMgZIgCgIIAAgBQgGgtAkgPQALgEAOgDIAwgFQBAgCBAADQAdABAdAHQBGAQA1ApQBPAaBEAtQANAJALAMQAKANAHAMQAMAFAHALIAJAPQAOAegPAPQACAOgFAKQgCAGgHAGIgBABQg1AkhEgBIgFAAQgTACgTAAIgFAAQgyAAg1gLgAB+jIQgOgCgNgIQgRgIgOgMIgDgEQgqhGg5g2IgXgTQhLg4hfgqIgJgFIgwgUIgHgEQgLgJgEgQIAAgGQACghAegNIAhgJQANgBALABQCOAZBmBiIAIAIQBGA6ApBGQASAeALAiQADAJABAKQgEAPgFAMQgJAWgYAAIgLgBgAlZmEQgTgEgTgHQgVgIgUgMIgJgGQhCgShEgOIgjgFQhzgQhygMIg9gGIgMAAQgLgCgKgHIgHgQIgCgGQAAgHABgFQACgNAIgKQAIgLAMgHIAhgKIACgCIAagCQD+gDDnBXQAFACAFADIAUAHIAjAOQAIADAHAHQALAKAHAMQAGAJACAMQgHAOgHAKQgKANgNAEQgPAGgPAAQgNAAgOgEg");
	this.shape_5.setTransform(-94.2,-84.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AAuPTQgSgegDgiQgOgFgDgVIgBgNQgSglAFgrQABgHADgGQgVgngCgqQgUgIABgXQADghAMgfQAKgcAXgSQANgKANgIQAIgFAJgEIAPgDQAngHARAgQACAGgCAGQgOAbgegMQgHgDgIAFQgQAJgLAMQAKAJgHATQgOAiADAmQADAfARAaQAEAFgBAHIAAAFQAXANAEAeQAFAkgDAlQgDAiAPAdQAJATgTAKQgHAEgGAAQgMAAgHgNgADzOsQgLgVgFgXQgGghgBgjQAAgaAIgYQAEgKALgCIAEAAQAlADgJAhQgEASABATQAGAzALAwQACAHgGAEQgLAIgJAAQgNAAgJgRgAKnOQQgHg2gWgyQgNgfgTgdIgHgKQgTAMgQgYQgLgPgKgRIgEgHQAFAhADAhIAGAvQAEAjghABQgMAAgEgKQgHgSgCgTIgLhlQgCgPgMgIQgKgGgHgIQgEAGgCAHQgRAsAHAwQAFAlgjADQgIAAgFgHQgMgQACgVIAFhGQABgOAFgNQAFgPAIgMQgngBgmAGQgTADgRAHQgWAHgKgTQgJgSAQgMQAGgEAHgDQAigOAigCQBKgEBJAPQAKACAJAFIADgGQAIgLANgBQAGAAAGACQAFgNAQgBQBPgKA1A6IBkBtQAPAPgCATQgCAOgMAEIgBAKQgJAdgbgPQgLgGgBgMQgigkgkgjQgWgUgXgUQgRgOgUgIQgVgJgWgEQAhAQAYAeQAuA6AaBGQALAgAJAgQAGAXgDAYQgBARgRABIgDAAQgZAAgEgagAC2OZQgSgIACgUQAEglgRghIgKgXQgNgngaggQgGgHADgJQAEgTAUgBQAeANARAeQATAhAJAlIAMAjQAIAWgCAYQABANgGALQgHANgMAAQgFAAgHgDgAj2KxQgIgOABgRQAGhDAVhBQgJgHAEgSQAGghAPgeQAOgbATgYQARgWAagEQBOAABOACQAXABAAAWQAAAQgNAFIgBAGQgDAOgPADQhDAMhFAPQgUApgFAtQgGApgPAmIgRAwQgBAEgEACIgIACIAAABQACAQgPAGQgHADgFAAQgOAAgIgPgAg/DvQgMgjAbgZQAzgxBDgZQBOg+A+hMQAtg4A7gVQBagbBDAxQARAOAAAXQgFAKgHAIQgvAzhRgSIgHAKQgIAOgQAGIgSAHIgFAKIgEAKIgEALIgOAJQgeAUgcAWIgDAKIgEALIgDAKQgIAFgHAEQgSAIgTAHQhKBAhfATIgKABQgVAAgPgTgAnMCGIgwgJQiogaAuihQAVhMBQgNIAUgDQDdgqA6C5QAMAjgWAgQg8BWhjAAQgdAAgggIgAKTmwQgkglgngiQgfgcgKgnQgigHgWgaQgOgPgPgOQgWgTgNgcQhzhxh5hrQgggcgogQQgigNgggTQgTAEgRgBQAsgIAtgLQBBAlBIARQAXAFAMgUIAGgNQA0AqAtA4QADAEACAFQARAKAQAMQAcAVARAeIAFAJQAZAMAQAWQAcAlAoAeIAAACQBAAqA1A+QAvA3A1AvQAIAHAFAKQgcA+goAAQgiAAgrgsgAk8oEQgZgSgbgPQh5hBiGghQAjgJAjgTQAUgKARgPQANgMANgNQBiAhBfAxQA6AeAyAnQAOALAGARQgXA9guAAQghAAgtgfgAtCqZQAJgJAJgMQAUANAVAKIg7gCg");
	this.shape_6.setTransform(-113.7,-80.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AD1QBQgSgegDgiQgOgEgDgVIgBgNQgTglAGgsQAAgHADgGQgVgmgCgqQgUgIABgXQADghAMggQAKgbAYgSQANgKANgJQAIgFAKgDIAOgEQAogHAQAgQACAGgCAGQgOAbgdgLQgIgDgIAEQgQAJgLANQAKAJgHASQgOAiADAmQADAfARAbQAEAFgBAHIAAAFQAXANAEAeQAFAkgDAlQgDAhAPAeQAJATgTAKQgHAEgGAAQgMAAgHgOgAG6PaQgLgUgEgXQgHgigBgiQAAgbAIgXQAEgLALgBIAEgBQAlADgJAiQgEASACATQAFAyALAwQACAHgGAFQgLAIgIAAQgNAAgKgSgANuO/QgHg3gWgxQgNgggTgdIgHgJQgTAMgQgYQgLgQgKgRIgEgHQAFAhADAiIAGAvQAEAighABQgMABgEgLQgHgRgCgUIgLhlQgCgOgMgIQgJgGgIgIQgEAGgCAHQgRArAHAxQAFAlgjACQgIABgFgHQgLgRABgUIAFhHQABgOAFgNQAFgOAIgNQgnAAgmAGQgTADgRAGQgWAIgKgUQgJgRAQgMQAGgFAIgDQAhgNAigCQBKgEBJAPQAKACAKAFIACgGQAIgMANAAQAHAAAFABQAGgNAPgBQBPgJA1A5IBkBtQAPAQgCATQgCAOgLADIgCALQgJAcgbgOQgLgGgBgNQgigkgkgiQgWgVgXgTQgRgOgUgJQgVgJgWgDQAhAQAYAdQAuA7AaBFQALAgAJAgQAGAYgDAXQgBARgRACIgDAAQgZAAgEgagAF9PIQgSgIACgUQAEglgRghIgKgYQgNgngaggQgGgHADgIQAEgTAUgBQAeAMARAeQATAhAJAlIAMAjQAIAWgBAZQAAAMgGALQgGAOgMAAQgGAAgHgDgAgvLgQgIgOABgRQAGhEAVhAQgJgHAEgSQAGghAPgeQANgcATgYQARgVAagFQBOAABPACQAXABAAAWQAAARgNAFIgBAFQgDAPgPACQhEANhEAOQgVApgFAuQgGAogPAnIgRAwQgBADgEACIgHADIAAABQABAQgOAGQgGADgGAAQgNAAgJgPgACHEeQgMgkAbgZQA0gwBDgZQBOg/A+hNQAtg3A7gUQBagcBDAyQASANAAAXQgGAJgHAJQgvAzhRgSIgHAKQgIAPgQAGIgRAGIgGALIgEAKIgEAKIgOAKQgeATgcAXIgDAKIgEAKIgDALQgHAFgIADQgSAJgTAHQhKA/hgAUIgKABQgVAAgPgTgAkFC1IgwgJQiogaAuiiQAWhLBPgNIAUgEQDdgpA6C4QAMAkgWAfQg8BWhjAAQgdAAgggHgANamBQgkglgngjQgfgcgKgmQgigIgWgZQgOgPgPgOQgWgUgNgcQhzhxh5hqQgggdgogPQgigNgggTQhJANg4gmIgLgJIgDgLQgBgKABgKQADgaAYgMIAHgCIAQgDIABgCQEDAOChDLQADAEACAGQARAKAQAMQAcAVARAdIAFAKQAZAMAQAVQAcAmAoAeIAAACQBAApA1A/QAvA2A1AwQAIAHAFAKQgcA+goAAQgiAAgrgsgAh1nWQgZgRgbgPQiEhHiSghQgcgGgcgCQizgJi0AIQg4ADg1ANQgkAKgYgeQgCgFAAgGQgEg3A5gUIBdgfQGogxFtC8QA6AeAxAoQAOALAGARQgXA9gtAAQghAAgtggg");
	this.shape_7.setTransform(-133.6,-85.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("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");
	this.shape_8.setTransform(-144.4,-56);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AIELPIgEAAIgGAAQgbgEgagLIgCAAIgGgCIgIgEQgOgHgMgKIgCgCIgKgHIgDgFIgDgEIgCgCQgDgFAAgHIAAgEIAAgCIgDgEQgCgDAAgFIAAgEIAAgBQAAgFAEgEIAIgFIgBgCIgEgHQgGgLgOgLIgNgKIgMgJIgLgKQACAHgCAKIgDARQgDATgFASQgHAYAEAWQACAMgNAIIgCACQgPAJgKgJQgQgOgHgRQgMAAgEgMIgDgGIgHgHQgKgOgEgQIgDgMIgBgJIgCgDIgLgPIgBgCIgFgOIgDgNIgBgTIgEgDQgIgJAAgNIAAgCIAAAAQAHgaAMgYQALgVATgPQApgaAHgDQAdgJAQAPQgDAUgNgJQgEgDgDACIgHAFIgDAFQADACACACQADAEgBAGQAAASAIAXQADAKAHAKIABADQAFgKAKgFQAEgCAFgBQAcACATAPQAVAQAPAUIgDgFIgBgCIAAAAQgFgPAOgJQAlgOAcgDIArgDQAigCAjADIAGABQAGAAAGACIAFACIADgDQAFgFAHAAIANAAQAGgJAMgBQAYgDAWACQAaADAWALQAJAFAJAHIAUAPIAqAcIAZAPIAGAEQANAJADALQABAJgFACIABADIAHAKIACADIAFAIQAHAQADAOIABAHIABALIAAAHIgCAQQgCANgLACQgTAEgFgOIgDgJIgHgMIgMgSIgNgPQgPgRgTgPIgGgGQgPAJgOgNIgVgSIgEgEIgCAKIgDANIgFAUIgGAeQgEAWgaABQgFABgDgCIgFgEQgHgIgEgJIgBgCIgFgKIgWgsQgDgIgLgEQgIgDgGgEIgHAIQgOAWgHAWIADABIANAGQAOAHAMAJIABABQAJAFAHAIIACAEIAAAEIAAAIIAAABIgEAGIgCACQgNATgOAMIgGAFQgFAFgKAEQgRAGgQACIgHABIgNABIgNACQgKAAgKgDgABQIKQgFAAgDgBQgIgDgFgKIgBgEQgEgIABgKIAAgDQAMgyAVguQAIgqAOgWQANgUAQgRQAMgOASgGQAwgFAeABQgFgDgDgHQgDgLADgHQAIgPARgJIAMgFIAJgGQASgKAUgIIAKgDIAPgCIAegJIAPgIIAbgMIAYgLIAIgFIAhgUIAhgWIAJgFQAbgTAcgLIAUgHQAPgGAQgDIAfgDQAdgBAcAHIAHABQALACALAFIAMAHQAEACACADIACAEQAEAFAAAFQABAFgBAFIAAAEIgCAGIgPAPQgXAUgdAGQggAIgngEIgHAGQgJAJgMAEIgEABIgGACIgKADIgIAHIgFAGIgGAHIgNAHIgiAPIgLAEIgPAIIgBADIgEAEIgFAHIgFAHIgNAGIgiALIgQAHIgPAIQgiARglAJIgGACIgBAAIgbAFIADAEQADAEgBAIQgCAMgKAEIgBAEQgDAKgLADQgwAOgxALIgIACQgSAbgKAdIgIATQgGAMgIAMIgDAFIgIANIAAAAIgHAMIgEACIgGAAQAAAEgCACQgDADgGABIAAAAgAkYFXIgsgHIgIgBQgbgFgXgKQgmgSgSghQgLgVAAgZIAAgDQAAgYAJgYQANgiAbgRQAWgOAdgHIAbgGQAdgFATABQAYABATAHIADABQAdACAWAKQA2APAlArQAJALAGAOIAHAVQAEAPgEANQgDAQgLAOQgKANgMAKQgOAMgRAKIgMAGQgRAIgRAFQgeAKghAAQgTAAgVgEgARUgJQgQgIgRgJIgFgCIgxgYQgigSgWgWQgbgEgYgLIgJgFIgFgCIAAAAIgdgOQgZgLgTgQIg9gdIgRgJQhXgmhYgyIgUgKIgGgEIgBAAQgigPgmgKQgbgIgcgLIgDgBIgJgEIgCgBIgBAAQgbgBgYgEIgEAAQgMgCgLgEIgGgCQgOgGgJgLIgDgEIgGgIIgDgDIgLgIIgDgDIgBgBIgBgEQgEgJAAgKIAAAAQABgSAOgJIAmgGQAeAEAcAIIACABIABAAIATgBQAlAEAkAIIAFABIAPAFIAFADQANAIAIAKIAEABQApALAnAQIAEACQAWAJAWAMIAGAEQAVANASASIAFAEIA4AeIAGAGIAkANQASAGAQAJIAGADIAPAJIAFAFQAaAHAUAMQAVAMAYALIAEACQAPAHAQAFIAGACQAwAOAvAXIAEACIAdAPIA2AbIAFADIADABIAFACQAYAJAaAOIALAGIADADIACAEIABADIAAAEQgCAQgKAMIgDADQgGAGgIAFIgDACIgEADIgDABQgUAJgWAAQgdAAgigSgAvCknIgDgGQgIgaAQgOIgIADQgkAMgjAGQgNACgNgCQgKgCgIgFIgEgFIgIgLIgBgCIgCgIIAAgBQABgTAIgQIgMgHIAAAAIgFgGQgGgLAAgGQAAgJAHgGQgrASguAJQgJACgJABIgNgCIgJgDIgGgGIgCgBIgDgGIgFgIIgCgFIgBgCIgBgLIAAgBQARg2A6gcIAmgRIAOgGIA3gXQAzgOAygLIAdgGQAogIAlgPIAngPQB5gwCBgXIAFAAIAMgBQAggCAggBIAHABIAOABIAAAAQCOAVCJAlQA6AQA3ATQAMAEALAHIAAABIAKAJQAHAIADAIIgCAGQgEARgIAIIgKAJIAFAEIALAMIAJAQQADAGABAFQABAGgBAGQgEAIgEADIgLAMQAEAHABAHIgDAGQgLAZgWAKQASANAOAOIAHAIQAEAFACAGIABAGIgEAOQgSAogmADIgDAAQgfABglgPQgXgJgagGQh6ggiBgEQgYAAgYACQhcAJhbAPQg8AOg/AOIgUAEIgZAJIgtARQgLAEgKAAQgRAAgOgLg");
	this.shape_9.setTransform(-153.6,-43.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AGWJ1IgCAAIgFgBIgGgCQgKgEgJgGIgCgBIgHgEIgDgDIgCgCIgBgCQgDgDAAgEIgBgDIAAgBIgCgDIgCgFIAAgCIAAgBQAAgDACgCIAFgEIgBgBIgEgEQgFgGgLgHIgKgGIgIgFIgJgHIgBANIgEAMIgEAMIgFAMQgHAPABANQAAAIgJAFIgCABQgMAGgHgHIgHgGQgIgIgFgKQgGAAgDgEIgDgFIgCgFIgFgGIgFgJIgFgOIgCgIIAAgIIgCgCIgHgMIgBgBIgBgFIgCgGIgCgKIgBgOIgDgDQgEgHgBgIIAAgEQAGgTALgSQAEgHAFgHIgMACIgHABQgQAQgKARIgEAFIgFAGIgIAJIgDAEIgDADIgFAFIAAABIgBABIgEAGIgDABIgEgBIgBADQgCACgEAAQgDgBgCgCIgBAAQgFgDgDgIIgBgDQgDgGABgIIAAgDIAAgBQAMgmATgkQAJgfANgSQALgQANgNQAKgLANgFQAlgHAYgCQgFgQADgGQAIgLANgHIAQgJIAegPIAIgCIALgDIAZgIIALgGIAWgKIAQgHIAKgGIASgKIAJgFIAbgOIAHgEQAXgMAWgFIAQgEIAXgDIAXACQAUACATAJIABAAIAFACIAIAEIAGADIAHAGIADAEIACAEQACADgBAEQABAEgCAEIAAADIgCAFIgMAMQgTAQgWAGQgZAIgeAAIgGAFQgHAGgKAEIgDABIgGACIgIACIgGAFIgEAFIgFAFIgLAFIgbALIgIADIgLAHIgCACIgCAEIgEAFIgEAGIgKAFIgaALIgMAHIgLAGQgaAPgdAJIgFACIAAAAIgVAGIABACQABAEgBAGQgCAIgIAEIgBADQgCAEgEADIABADQABALAHAOIAIAMQAFgFAIgEIAHgDQAUAAAOAIQAQAJAMAMIgBgEIgBgBQgBgLAKgGQAbgMAWgDIAggFQAagDAaAAIAFABIAIABIAEABIADgDQAEgEAFAAIAKAAQAFgHAIgBQASgDAQAAIACAAQAUABARAHIABABQAHACAHAEIAQALIAgASIAUALIAFADQAKAHADAIQABAGgCABIAAADIAGAHIACACIAEAHQAGALACALIABAFIACAIIAAAGIAAAMQgBAKgHACQgMAEgDgHIgCgGIgEgIIgEgGIgFgFIgIgIIgBAAQgLgKgNgIIgEgDQgMAHgKg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");
	this.shape_10.setTransform(-162.8,-32);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AKcKFIgCABIgEgBIgFgBIgRgFIgCgBIgGgCIgDgBIgDgCIgBAAIgEgEIgBgCIAAAAIgCgCIgDgCIgCgBIAAgBIgCgDIAAgCIgBgBIgEgCIgPgHIgJgEIgIgDIgHgEIgFAFIgGAEIgCABIgGAGIgHAFIgJAHIgGAHQgCAEgHACIgCABQgKACgHgEIgHgDQgIgEgGgFQgFgBgDgCIgEgDIgDgDIgEgDIgFgFIgIgHIgFgFIgDgEIgBgCIgIgGIgBgBIgCgDIgDgDIgFgGIgFgEIgDgFIgDgCIgEgDIgCgCIgCgDIgBgDQgEgLgDgLIgBgIIgHAAIgEgBIgGAAIgSAFIgLADIgDAAIgEABIgFAAIAAAAIgBgBIgBgBIgDABIAAAAIAAAAIgCgBIgCABIgCAAIgEgBIgCAAIgGAAIgCgBIgCgBIgBAAQgEgDgDgGIgBgCQgDgGAAgHIAAgBIAAgBQADgUAOgNIAPgLIAAgCIAAAAIgBgCIgCgCIAAgBIAAgBIAAgCIACgBIAAgBIgCgCIgKgFIgGgDIgGgCIgFgDIgCAHIgDAHIgDAHIgEAGQgFAJgBAHQgBAFgFACIgBABQgHADgFgDIgFgCIgFgCIgFgHQgDAAgCgCIgCgDIgCgCIgDgDIgDgFIgEgIIgCgFIgBgEIgBgBIgEgHIgBAAIgBgDIgBgDIgCgGIgCgIIgCgBQgCgEgCgFIAAgBIgBgNIADgKIADgIIgHAAIgDgBIgCAAIgMAIIgCADIgCACIgCACIgFADIgBABIgBABIgDACIAAABIAAAAIgDACIgBAAIgCgBIAAABIgEAAIgCgCIAAAAIgBAAQgCgDgCgEIAAgCQgCgEABgFIAAgBIAAgBIAAgHQAJgWAMgWQAHgSAJgLIAPgSQAjgRAPgDQgCgJADgEQAFgHAIgEIAKgGIASgKIAFgCIAGgCIAPgGIAHgEIANgHIAKgFIADgCIAAAAIgIgEIAAAAIgBAAIAAAAIgBAAIgVgGIgLgGIgBAAIgBAAIgCgCIgKgHIgBAAIgCgCQgHgGgDgIIAAgBIAAgCIgBgCIgCgGIgCgCIgFgFIgBgCIgBAAIAAAAIgBgCQgDgFAAgGIAAgEQACgLAJgGIAYgFQARgBARABIARgEQAVgDAUgBIAHAAIAHAAIAFACIADABIAGAFIAHABQAYgBAXABIAJABIACAAIAVADIAJACIAEABIASAHIAJADIAEABIAnAEIAFABIAYABIARABIAFABIAFAAIAKACIAEABIAVABIALABIATADIAKABIAEABIADAAIAUADIAFABQAjADAfAMIABAAIACABIATAIQASAIARAKIABABIACABIABABIABAAIACABQAKADAKAEIAIAGIAFAEIABABIABABIABAAIAAACIABACIAAADQgBAKgHAIIgCACIAAAAQgEAFgFADIgCABIgBAAIgCACIgDABQgfAUglgFIgWgCIgBgBIgBAAIgigEQgXgDgTgFQgSAAgRgCIgGgBIgFAAIgBAAIgSABQgQAAgOgCIgogBIgCAAIgKgBIgDAAQg5AAg8gMIgCgBIgMgCIgFgBIgDAAIgQgBIgDgBIgCACIgBADIgEACIgJAEIgEAEIgEADQgJAHgLAFIgBABIgJAEIACABIABAFQAAAFgDACIAAABIgCAEIAAACIAHAOIAGAHIAHgDIAFgBQAMACAIAGQAKAHAHAIIAAgCQgBgEAGgCIANgCIgBgDIgCgIIgBgDIgBgBIgKgHIgEgCIgBAAIgBgBIgDgDQgGgGgBgIIAAgCIgBgCQAAgSAQgGQAcgBAOAEQAbAHAaALIAUgDIAKAAQAhACAgADIAEAAIAKADIAGADIAFADIAGAGIAEAFQAEAGABAGIAMADIAEABQAkAEAkAGIABAAIAOACIAFACQARADARAHIAMAFIAGADQAPAJAMAMIADACIAMADIAGACIBCAJIAIACIAmADIAbABIAIABIAHAAIAQACIAHACQAbAAAZADIAtAGIADAAIABAAIAFABQAPABAQgBIAEAAIACAAQAzgEA0AGIACAAIAEAAIABAAIAfAEIA+AHIACAAIAEAAIADABIACAAIACgBQAFABAEgBQAXgDAXAFIAMADIAFABIAAAAIAEACIADACIABADIABAAQADAEABAGQADALgGAJIgCADIgBACIgGAFIgIAGIgEACIgBABIgEACIgBAAIgEACIgBABQg0Abg5gIQgSgBgSgEIgCAAIgDAAIgBAAIg2gKQglgGghgIQgbgBgbgDIgFgBIgFgBIgGAAIgGAAIgbgDQgbgCgYgFIhFgIIgDAAIgJgCIgHgBIgFAAIgJgBQgngDgogGIACACIAAAGQAAAHgCADQgCACgEAAIgCAAIAAACIgBAEIAAAAIABABIgBABIAAACIABADIAAACIgBACIgDAFIgBACIAAADIAAABIACABIABADIABACIgBADIgDABIgBADIgBADIgCACIgBACIgCAFIAAABIgCABIACACIAEAEQABAEAAABIABACIAAADIACABIANAMIACACIAGAEIAMgFIAGgCQARAAAPAEQAPAEAMAFIABgCIAAAAQAEgGAJgDIAMgEIALgDIAVgFIAegEQASgBATACIAIACIAEADIABAAIAFAEIACACIACABIADACQAAABABAAQAAAAAAABQABAAAAABQAAABAAAAIABgBIACABIADACIACACIAAABIAAAAQAEADACAHIAAAAIACAGIACAHIADANIABAHIABABQABAEgBAEQgBADgDABIgBACIABADIgBABIAAAEQgBAGgEAFIgCAAIgBACIgDAEIgCADIgEAGQgDAFgHABQgJACgFgEIgDgDIgFgEIgEgDIgFgCIgHgEIgBgBIgYgJIgEgBQgLADgJgEIgPgFIgDgBIgEAEIgGAFIgIAHIgLALQgFAEgGACQgHADgIABIgFAAIgBAAIgDgCIgJgEIgBgBIgFgDIgVgNQgEgCgGgBIgKgCIgFADQgNAIgKAIIAAABIABACIAAAGIAAABIAAAEIAAABIAAAAIgBACIgCADIgFADIgCABQgMAHgMAEIgBABIgEACIgKAEIgHABIgRAEIgEAAIgJABQgKACgKgBIgEAAIgEABQgSgBgRgDgAlDJaQgTgBgUgEIgHgCIgFgBIgDgBQgVgFgRgIQgggRgSgeIgCgDIgBgDQgKgRACgVIAAgCIAAgBQADgWAMgSQAQgZAhgKIAvgOIAbgHQAdgEAPAFQATAGAMAPIACACIADABQAWgBAUAFQAzAHAnAgIADADQAIAGACALIAAAEIABARQAAAOgGAMQgGANgNAJQgLAJgOAGIgBABQgOAFgOAIIgCABIgJAEQgOAHgPAEQghALgjAAIgYgBgAvIA+IgBAAIgDgBIgDgCIgCgBIgBgBIgCgBIgBgBQgDgKAFgFIgQAEIgOADIgEgBIgHgBIgBgBIgDgBIAAgBIgIgGIgEABIgFABIAAAAIgDgBIgFgBIgCAAIgCgCQglATglAAIgNAAIgCAAIgKgEIgGgDIgDgDIgBgBIAAAAIgDgEIgDgGIgBgDIgBgBIgBgBIgDgIIAAAAIAAgBIAAgBQAMgtAmgeQANgKAPgJIAPgJQANgIAOgGIAPgIIAegOIAwgVIAXgJQAjgPAXgNIAdgRIARgKQBSgyBZglIAFgCIAIgDIAxgRIAFgBIALgDIAZgGIAFgBIANgCQBdgIBcgBQAwAAAvABQALAAAKACIAKACIAMAEIADABIAHAHIAAADIAFABIALADIAFACIAFACIAGADIAFADIACAEIABADIAEACIADADIACACIADAHIACAIIgBAGIAGAIIADAEIADADIACAEIABADIgBAGQgCAJgEAHIAGAFIAIAIIAEAGIADAGIgBAHIAAAIQADAEABAEIABAFIgCAHQgBAGgCAGIgDAEIAEAIIADAGIABAGIABAFIAAAHIgBAEIgEAIQgOAUgXAFIgEAAIgCAAIgCAAQgXADgYgCIgigCQhVAAhXANIghAGQg+ANg+ASIhUAcIgNADIgQAHIgeAMQgTAIgQgCIgDgBIgGgEQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAAAIgFACQgWAMgXAJQgIADgIACIgLABIgEAAIgFgCIgDgCIgFgHIgIAAIgDgBIgHgDIgCgDIAAAAIgcANQgPAJgQAHIgKAEIgHACIgGAAIgDgBgA2xh1IgDgBQgGgBgGgEIAAAAIgFgGIgBgCIgCgEIAAgBIgCgGIgCgIIAAgGIAAgCIgBgCIAAgKIAAgBIAAgBQAjgzA3giQATgMAUgKIANgHIAIgEIAGgDIAvgXQA0gWA1gRIAegKIANgFIAPgFQAagJAZgNQASgKASgNIAUgPIAQgMQBWhIBhg4IAHgEIAKgFIA6gdIAHgDIANgFIAAgBIAegLIAHgCIAPgEIABgBIAYgGIAIAAIAQgBIABgBQBhAGBhAKIB9AOQAOABAOADIABAAIAMADIAQAGIAEACIAMAJIACADIAGACIAOAEIARAGIAIADIAHAEIAEAEIAEAEIAEACIAFADIADADIAHAIIAFAIIADAGIAKAJIAEADIAFADIAEAEIACACIABAFIgBAJIABADIAHAGQAGAFADAHIACACIABAGIADAJIgBAGIAAABIgFALQABAEgBAFIgCAFQgGAIgIAEIgNAIIAAAFIgBAEIgBAEIgBAEIgEAFIgCACIgIAHQgWAOgcAEIgIABIgDAAQgdACgggEIgsgDQhvgEhxAGIgrADIhSAJQgQACgPAHIgwAUIhnA0IgPAIIgTALIgiAUIgCABQgVANgTAEIgDAAIgIAAIgBgBIgGAFIgFADQgVASgXAPQgJAGgKAEQgHADgHACIgEABIgGgBIgFAAIgHgEIgKACIgEAAIgJgBIgDgCQgmAVgoAKIgQADIgKABIgIgBIgGgBIgBAAIgDgCIgGgCIgDgCIgCgBIgCgBIgCgCQgOgMgGgJIAAgBIgWAFIgRAEIgFACIgBAAIgHAAIgBAAIgEAAIgBAAIAAgBQgGgCgEAAIgFACIgGACIgEAAIgJAAIgDgBQgtAdgyAEIgGAAIgDAAIgHAAg");
	this.shape_11.setTransform(-172,-11.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("AmNKcQg7gQgcgxQgLgSAFgVQALg1A8gKQAggGAfgKIAOgEQAtgFARAoIABACQBLgJA7AoQAKAHAAAMQAAA5g8APQgQAEgOAHQg1Aag3AAQggAAgggJgAMlKBQgRgEgRAAQhIgBhGgQIgNgDIgDgBQgbgIgbgGQgPgDgNgHQgSgJAAgVIAAgRQgHgFgMgFQgNgGAAgPQgBgSATgFIAGgCQAvAMAsAVIACAAQAIgFAJAAQAoAAAnACQALAAAJAHQAPAMgBATQAuABAuADQAdACAbAJQAcAJAUAVQBUAEBTgKQBIgIBIgCQAVgBAVgFQA5gOA7gDIBugHQAFAAAFgCQAngOAnAKQAHACADAIQAKATgQAOQgIAIgLAEIgIAEQhJAnhSgEQhhgEhiACIgSABQhTAIhUAAIgWABQghADghAAQhGAAhGgOgADQErQgGgDgFgFQgCgFAAgGIgBgUIAAgVQBMhaBug0QAIgEAIgBQBAgKAOA6IABAKQgpA6hPAVQgnA/hHAaQgTgIgSgLgAvWEjQgEhHBEglQAQgJAQgNQENjJFIhXQBmggAeBRQACAEAAAFQgLAogoAIQkmA1kHCYQgoBOhPAqQgXANgVAAQgfAAgZgagA4ogbQgMAAgMgLIgCgKQgCgKAAgLIAAgUQBFhMBegxQBng3BugnQBDgYA0g7QCPiiC6h0IAHgCIARgDIAAgCQFBADFBANQATABAFAVIADAUQgHAdgcACQkwAQkxAOQgQABgQAKQhsBGhhBTQgjAdgdAkQiDCjjUAgQgaAEgSAVQhEBRhXAAIgCAAg");
	this.shape_12.setTransform(-181,10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AnPIpQgTgDgRgEQghgJgYgXQgIgHgGgJQgOgTAIgYIAAgBIAFgLQACglAmgTIAagLQAdgLAbgIQAWgDAGABQAKABAIAFQAhAFAUAaIACACQAxgBArAQQAMAEAKAGIAEADQASAEARAHQALAFAFALIAEASQABAGgBAHQgGAkguAKIgEABQgSADgRAGIgBAAQhCAWhCAAQggAAgggFgAMUIMQgSgDgTAAQgogBgngDQglgDgkgIIgOgDIgDAAIg6gPQgQgEgOgIQgIgEgGgGQgHgHgCgMIgDgQQgHgHgKgGQgMgIAAgPIAAgBQgBgUAQgIQAvgHAxANQAMgFAKAAIBVACQAMAAAKAGQARAKAEAPIBjAEQAfACAeAHQAeAHAYARQBaAEBagHIAhgCQA9gEA9gDQAWgBAXgEQAegGAegEQAhgFAggBQA7gBA7ABQA2gIAjASQAGADADAIQAIAUgOARIgEAFQgGAGgGAFIgHAEQgsAig5AIQgeAEgggBQhpgChpACIgTABQhSAGhRgBIgRAAIgYABQggABgfAAQhQAAhPgLgA0OELQgTgEgQgRQgChKBKgmQAWgMAOgJQCWhiCghHQAdgKAZgGQBGgWBHgRQBNgSBDgNQA1gMAnAKQAeAJARAdIAEAKIACAEIACAKIgDAJIgDAIIgEAIIgJAJQgPANgVABIgHABIgXABIgTACIhBARQhhAVhfAcQiZAuiSA5QgWAegaAaQgnAkgxAYQgcAOgaAAQgJAAgKgCgAEpEEQgSgEgRgGQgKgEgJgFQgGgFgFgGIgMgQQgLgVAAgTQANgqApgRQB7guCJgdIAXgFIAagFQAhgDAdACQAtADAgAeQAIAGAFAIQAFAGACAHQAAAQgKATQgPAfghAMQg9AVhGAJQgiASgmANQhDAYhNAOIgdgGgA5KAAQgLAAgKgIIgCgJQgCgIgBgJIgBgRIAAgBQA1hGBSgrQAfgQAhgOQA8gbBAgVQA7gUAvgwQBhhjB0hOQAogaAqgZIAGgCIAPgDIAAgBQBxgCBvgFQB6gGB7ABQArACAqAEQAQABAFASIADASQgFAYgUAEIgCAAIgTADQj2Agj+AUQgOABgNAJQhQAxhLA4IgcAWQgfAYgbAdQh3CEi6AcQgWADgQARIgUATQgzAqg6AAIgKAAg");
	this.shape_13.setTransform(-178.5,23.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990000").s().p("AoNG8IgpgEIgDAAQgkgFgegUIgBgBQgJgGgHgIQgSgUALgcIABgBIAAgBIAGgMQgGgqAqgYIAcgOQAhgTAbgIQAYgBAIAEQAJAEAGAHIAGADQAhAFAYAUQA4AFAxAUIAEACQAMAEAJAHIAEAEQAWACATAFQANAEAHAJIALAPQACAEABAFIAAACQACAGgBAGQgEAjgrAJIgFACIgEABIgkAHIgCAAIgJACQhSAQhRAAQgaAAgZgBgAMHGdQgTgCgUgBQgrAAgrgCIgBAAQgogCgmgIIgPgDIgCAAIg/gRQgQgEgPgIQgIgEgGgFIgCgBQgHgHgEgKIgHgQIgQgQQgKgKAAgRIAAAAQgBgVANgLQAngXA1AEQAfgGAIgBIBMACQANABAMAFQASAHAJAMIBrADQAhACAgAFQAhAGAbANQBhAEBhgFIAkgBIAKgBIB4gEQAYgBAYgEIBBgJIAJgBQAegEAfAAQBAgBA/AGIAHAAQA1AAAdAXQAGAFADAHQAIAVgMATIgDAHIgGAJIgEAEIgGAGQgnAsg+AJIgPACQgaACgZAAIjiADIgVABQhYAFhXgCIgKAAIgIAAIgaAAIg1AAQheAAhdgJgA5jDkQgVgCgRgSIAAgBQABhNBRgoIAmgUQCkhcCphJQAlgHAXgDQBMgPBMgLIALAAQBMgMBGgJQA0gIArAHQAiAIAUAbIAEAJIACAGIABACIABADIACAHIAAADIgCAGIgBAEIgBAEIgCAEIgDAFIgCADIgIAIIgBABQgRAOgXgCIgEAAIgDAAQgLgCgMAAIgCAAIgSACIgCAAQghALgiAIIgCAAQhmAVhlAXIgFABIlCBNIgBAAQgbAbgeAZQgsAkg0AYQgjAQghAAIgKAAgAF0DYIgGgBQgagDgagHQgOgEgNgGIgSgLIgSgPQgXgZgBgdQAKg/A8gRQC9giDBgSIAogEIAlgEIBMgDIANgBQA5ABAxAaIAJAFQAMAHAIAJQAGAHAEAJQAGAVgKAdQgRAwgyALIgDAAQhbAUhiAGQgzAOg3AIQhoAQhuALIgjgDgA5qAiQgJgBgIgHIgCgHQgDgHgBgHIgCgMIAAgCQAlhABGglQAbgOAcgLIABAAQA0gVA3gRQAzgQAqglQBXhLBmg9IABgBIBIgpIAFgBIAMgDIABgBQBegGBZgMIAEAAQBlgOBmgDIADAAQAmACAiAGQAOACAEAPIAEAQQgDARgNAGIgDABIgBABIgMADIgCABQjHAxjXAaQgMABgLAHQhEAohCArIgCABIgZARQgcATgYAWQhsBmieAXQgTADgOANIgQALIgDACQgqAegsAAIgRgBg");
	this.shape_14.setTransform(-176.2,36.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990000").s().p("AnmFOQgmgCgigRIgEgBIgBgBQgLgHgHgHQgVgVAPgfIAAgBIABgBIAHgNQgPgvAwgeQASgJAMgKQAfgXAdgIIAHAAQAYAAAJAKQAHAGAFAIIAGAEQAlAEAfAQQA8AJA1AYIAEABIAFADQAJAEAHAGIAFAFIACAAIAGACQAYgBAVAEQAPAEALAGIAPANIADADIADAFIABACQACAFAAAFIAAACQABArgwAKIgGABIgFABIgoAGIgIABIgFAAQh5AOh4ACIgqABIgEAAIgEAAgATEE0IgGAAIgGAAIgJAAIgbAAQiCAAiBgIIgqgCIhUAAIgIAAQgsgCgpgIIgQgDIgDAAQghgJghgJQgRgGgQgIIgGgDIgIgGIgCAAQgJgHgFgKIgIgPIgPgSQgIgMgBgRIAAgBIAAgHQgOgDgNgFIgZgMIgagQIgCgBQgigbgBgnQAHhVBTgQQD7gUD7gKIA0gCIAwgDIBigGIASAAQBKgDBEAcIAMAFQASAIALAMQAJAJAFALQALAZgLAlQgRA7g5AOIBkgCQAagCAagDIBGgIIAJgBQAhgDAgAAQBFAABDALIAIABQA3AGAbAcQAGAGACAHQAIAWgJAWIgCAIIgFAKIgDAGIgFAHQghA2hDALIgRACQgcADgbAAQh5AEh5ACIgWAAQgzACgzAAIhWgCgA9GCoIAAAAIgBgBQADhRBXgoIAqgUQCzhZC1hKQAogEAXACIBEgGQBKgyBSgpIAEgCIABgBIA9geIAFgCIAKgCIAAgBQBNgKBHgTIABAAIADgBQBQgWBSgHIADAAIACAAQAgADAbAHQAKAEAFAMIADANQgBAMgGAGIgCACIgCACIgBABIgHADIgBAAIgCABQiXBCivAfQgJACgJAFQAygFAtAGIAKABQAfAHAUAYIAFAIIAAABIACAHIABACIABADIACAFIAAADIABADIAAADIgBAEIgCADIAAABIgCAFIgBACIgBADIgCAGIgDADIgJAIIgBAAQgTAPgXgEIgFgBIgDgBQgLgCgNgBIgBAAIgUAAIgCAAQgjAOgkAHIgBAAIjcAoIgBAAIgFABQhfARhdANIgGAEIgOAIIgDACQgrAZgrgKQgHgBgHgGIgCgFIgiADIAAAAIhBAxIgBABQgxAjg3AYQgqASgpACIgCAAQgWAAgQgTg");
	this.shape_15.setTransform(-189.4,49.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990000").s().p("AnfDnIgDgBIgCAAIgBgBQgMgFgIgHQgZgWASgkIAAgBIAAgBIABgBIAJgPQgYgzA2gjQAUgLANgNQAegcAhgIIAMABQAYAEAIAOQAFAHACAIIACADIAGACQApADAlANQBBAMA8AdIAFACIAGAEQAIAFAHAHIAEACIAFADIADAAIAHAAQAagCAZADQAQADANAFIATAKIADACIADADIACACQADAEABAHQAIAzgyAMIgGACIgFABIgDAAIgrAFIgIAAIgGABIgCAAQiHAFiFALIgwAEIgDABIgBAAIgFAAIgKAAQglAAgigNgAV3DVIgGAAIgGAAIgIAAIgTgBIgIAAQh/gDh/gFIgpgBIhSAAIgJAAQgqgBgpgDIgPgCIgFAAQgggEgggGIghgJIgGgCIgHgDIgCgBQgKgEgIgGIgLgJIgSgMQgLgIgHgLIAAgBIgDgEIgbgKIgRgIIgHgEQgOgHgLgJIgCgCQgdgagBgoIAAgBQADhVBEgaQAlgMAsgEQDNgGDNgBIAzgBIAvgBIBhgBQBYgBBFAPIALADQARAEANAGQAKAEAIAGQAVANAKASQASAdgCAFQAfgBAggCIAigCIAzgCQAigCAjABQApABAgAEIAPACQBAALAnAbIAFAEQAcATAIAfIAEANQACAGAAAHQgBAVgLASIgEAHIgGAIIgEAGIgGAFQgYAaglAKQgWAGgYADIgQACIg1ADQh3AGh2ABIgWAAIhDABQg7AAg6gCgA4MCuQgPgDgMgNIAAgBQgDg8A3gdIAegPQAQgIASgGIBcgjIhWAKIgCAAIgEAAQhWAJhWADIgGACIgNADIgEABIgSADQgeANgeADQgGABgHgCIgDAAIgSAFIgKACIAAAAIg9AoIgCABQgvAcgyATQgeALgfAFIgQACQgUgBgPgRIgBgBQAEhKBJgpIAmgUQCwhOCeg/IA4gKIA9gNQAggRAhgQQAqgKAegDIAKgDIAHgCIA7gNIAOgCQA6gDA2gFQAIgBAIABIAGgBIABAAIAFAAQBJgLBMgCIADAAIACAAQAcACAaAEQAKACAIAGIAGAHIAFAKIABAAIABABIAAABIAAACIAAAAIgCAHQgCAJgIAZIgFAHIgEAHIgFAHIgBABIAjgNIABAAIADgCIALgFQAvgVAwgKIACAAIACAAQAVgCATABQAIABAFAFIAEAGIAAAEIAAAFIgBABIAAABIgBACIgBABQgTAUgiAdIgLAJQgwAagzAUQgGACgFAEQASAFAQAJIADACQALAIAFAQIABAFIAAAAIAAAEIAAACIAAACIAAADIgBABIAAADIAAABIgBACIgCACIAAABIgCADIgBABIgBACIgDAEIgCACIgGAFIgBAAQgNAKgQgBIgDAAIgCAAIgRAAIAAAAIgNACIgCAAQgYAKgZAGIAAAAQg2ANg2AKIgwAIIgBAAIgEABQhCAMhCAJIgEABIgKAFIgDABQgeANgfgDQgFgBgFgDIgDgCIgXADIAAAAIgwAaIgCAAIgdANQgYALgZAGQgRAEgQAAQgMAAgMgCg");
	this.shape_16.setTransform(-202.9,61.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990000").s().p("A0PCZQgPg/BEgKIDmgiQBNgLA1g0QApgpAvgPQArAGAHAqIABALQhTCNijAbQhyATh1AKIgJABQgoAAgagfgAmcCXQg/gVAfg5QAFgJAHgHQgjg5A+goQAUgMAPgRQAeghAngKQAuAGAEAsIAAADQB7AFBuA3QAQAJAMANIAHAHQBFgPA/AYQAKAEADALQAQBChHAJQggAEghAAQiygDivAcQgSADgSAAQghAAgggKgEgjDAB9QAIhcBsgqQDmhbDghTQAvADAWANQBeADBeAHQAHAAAHAFQCPAECVAFQAoABAdAjIADAKIAEAKIADALIgDAKIgEAKIgDALIgOAKQgZATgfgOQgOgHgQgDQgMgCgMAAQgoAUgpAHQh9ASh+ANQjMAUjJgVQgpATgoAXQhoA9huAZIgLABQgUAAgPgTgAX8B5Qj0gLj0AFQiCAChxg3Qg5gcgBg/QAAiECDgOQF2AHF1AKQCSAFCSgPQB4gNB1AjQBzAjgZBxQgWBihnAJQi/AQi+AAQhlAAhlgEg");
	this.shape_17.setTransform(-215.6,72.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990000").s().p("AyoDAIgKgCIgCgCIgLgNIgMgNIgMgPQg6ANhAgJQgZgDgaACIguAEQghABgfgEQgdgFgRgXQgJgNgEgPQAEgPAKgHQAfgiA8ACQAPgNAVgCQAQgCARADQAtAHAsgNQAngMAngGIBYgCIAKABQAKABAIAEQAmgFAgAJQAIgDAKgCIAOgBIANgCIgCgCQgLgHgNgHIgVgJIgFAAQg0APg1gBIgQgBIgcgCQgRgCgMgFQgsANgxAEQhBAThDgHIgOgBIgigCIgLACQghAHghAEIgQADIgGACIgFAEIgbARQgcAOgiAMIgDACQgJAFgNADIgNABIgNgCIgPgDIgEgCIgYgQIgXgQIgagSQgcABgcgBQg2ARg4ALIgGABQgiAHgiAMQhKAYhLAMQggAEgbgFQgIgBgHgEQgSgJgJgWIgBgBQAHgXAOgOQAxgxBYgPQAKgHALgFQAlgSAqgDQA/gFA9gZQA3gWA4gQQA9gOA9gLQAbgCANABQAzgOAvAAIASgHQAPgBAOABQAcACAUADQAIABAHACQAJAAAIADQALgGARAAQAwABAuAKQALACAMABIBNADQAJABAJAEIAeABQAwgJAyAIIAlAGQAfAFAaAMQAJADAEAEQAKAJAGACIARAEQAEABAEADQACADACAEIAFASIAHANIADANIAEANIABAFIACAJIAAAGIgBACQARgCAQABQAHAAAIgCQAogKAmgOIABAAQAbgUAegCIAXgBQAUgBAOAGQAFADAAACQACAFgEgBIgJAOIgEAHIgGANIAFAdIABADIABALIABAEQgEASgQAHQgHADgDgCIgPgHIgDgBQgJgDgMgCQgmAPgmADIgQACQgLAAgGgEQgaASggAIIgBAAQgoAZgtgEIgfgBIgHACQgWAJgXAGIgLACIgDACIgCAFQgGAJgHAHIgCACQgQAQgXANIgBACQgFAHgJADIgIADIgJgCgAgcCgIgqgBQgwgCgvgEQgZgDgYgFIgMgEQgNgDgLgFQg9gEgFg6QgBgGADgIIAAgBQADgOAHgNQgDg2AagJQAPgVAagLQAKgKAOgIIATgIQAWgIAVgJQA2gaA9gHQA/AFAgAlIARACIB6AHQAyACAvAPQATADANAAQAwADAfAaIAIACIADAAIACAAIADAAIAIACIAMAEIAJADIAQAGIAKAFQBdgNBLAnIgDgIQgEgKAAgNQAAgeAFgZQAYhQBHgHQAWgMAcgEQASgBATABQAigJArgBIH5AMQBjACBjgBIAcABQBDABBBAEQAfgBAVgDQBPgIA+ALIALgCIALgBIAOgBQAMgBALABIARgBQBkgFBdAdQBUAaAcBBQAHARgGATQgFAPgHAOQgSAlggALQgPAKgQAHIgKAFQgMAGgOADIgMAIQgKAGgNACIgLACIjCAOQgZACgZAFIgYAEQgjAchQgDIgUgDIgYgEQhWgBhVgFQgNACgNABQgtABgugMIgvgDIgLgBIgvgBQhiAQhngJQhMgHhNgCQgigBgigDQgpgEgngIQgegGgcgKQglgEgjgNQgegLgSgVIgCAEQgHAQgMACQgHAHgIAFIgEAFQgGAGgHADIgFAIQgHAJgNAEQgTAEgXACQgmAFglADQgNAAgNADIgFACIgPADQgIAbg1gDIgMgDIgPgEQg0ABg1gBQghAKglgMIgcgBIgHgBIgdACQgwARgyAAIgYgBg");
	this.shape_18.setTransform(-209.9,74.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990000").s().p("AxUDFQgQAAgNgGIgNgGQgVgKgWgHIgMgDIgJgDIgSgFQgbgHgcgKIgFgBQgegEgVgSQgMgLgIgMQgBgMADgGQAHgXAVgIIALgEIAGgIIgGABIgKABQglAXgvAQIgIADIgFAEQgPALgUAFIgUAEIgUgCQgNgCgMgDIgGgDIgIgDIgKgFIgagNIgIgCIgggIIgSgFIgLgDIgFgBIgDAAIgFABIgXALQgfAOgmAJIgDABQgLAFgNABIgNABIgOgBIgRgDIgFgCIgbgNIgbgPIgegQIgCgBIg7gEIg0AKQgiAHgjAGIgGABQglAFglAJQguAKgtAHQgkAFghgDQgbgCgWgLIgHgDQgHgEgFgFQgPgOgGgXIAAgBIgBgBQAKgXARgMQAKgIAMgGQA4gdBLgHQALgFAMgDQAogLAsACIAQABQA4gVA8gOQAVgEAVgDQAngFAogHQA8gIA8gPIALgDIAqgGQA2gQAzgCIAUgGIABAAQAPAAAOABQAdABAXADQAKABAIACQAJAAAJACQANgEARAAQAZABAZADQALABALADQAOAEAOAFIAOAFIAJAAQAqAAAoAFQAKABAJAEIAgAFIAVABQAhgIApADIAKABIAoADIAaACQAUADARAGQAJAEAEAEQAKAEAGgBIASAAQAEABAEACIABAAIAGAGQAFAFAEAIIAJAKIAIALIAGALIADAEIAFAHIABAGIABABQASAAAQADQAIABAIgBIACAAQASgBASgDIAtgLIACAAQAfgPAggBIAagBQAVAAAQAFQAFACACACQAAABABAAQAAABAAAAQAAABAAAAQAAAAgBgBIAAABQAAACgDAGIgBAEIAAAIIANAUIACADIAFAHIACAEQACAMgGAHQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAAAgBIgHgDIgCgBQgDgBgGAAIgOALQgKAIgLAGIgIAFQgGACgDAAIgHAIQgGAKgOAJQgKAGgLAEIAAAAQgYAQgbAFQgUADgVgBIghAAIgIADQgYAHgYAFIgMACIgEACIgEAEIgEAEIgMAJIgDABIgKAHIgiAUIgCACIgGAGIgGAFIgGAFIgHACIgHACIgBgBIgIgEIgGgEIgBAAIgHgEIgCAAQgaAWguAAIgCAAgAY4CpIgagGIgFgBIglgIIgCAAIgLgBIguAAQhiALhmgKIgEAAQhHAFhKgNQgQgCgQgDIgjgEIgkgFIgRgDIgagEQgYgDgXgGIgJgBQgkABgigGQgcgGgUgPIgDAEQgJAMgNACQgHAGgIAEIgFADQgGAFgHACIgFAGQgIAHgNACQgUADgWAAIgZABIgyAAQgNgBgMACIgGABIgOABQgOASgwgDIgMgDIgOgDIhogEQgVAEgXgDQgNgBgNgEIgcgBIgHgBIgdAAQgPAEgPACQguAGgugHIgpACQgwACgtgFQgYgDgXgHIgLgEQgMgEgLgGQgigGgRgYQgKgOgCgWQAAgGABgIQAHgxAEgQQAGgUANgHQAOgWAYgMQAKgKANgIIATgIQAVgHAVgGQASgFARgDQAkgRAogGQAcAAAXAHQAZADATALIARABQAXgBAZAAIBJADQAxACAwAMIAfACQAvADAiAUIAIABIADAAIAEAAIAIACIANADIAIACIAQAEIAKAEQBbgJBOAfIAAgHQAAgIADgJQAGgWALgTQAjg8BGgFIAGgCQAUgGAWgDQASgBATABQAjgHApgBQBKABBKgBQB8gBB6ALIAOABIBCgEIAYAAQBogCBXASIAUgBIAHgBIALAAIAUAAIACgBIAiACIAZAAIAlABIA0gFQBNgGA/ALIALAAIALgBIAOABQALAAALABIARABQBhAEBYAmIAWALQAbAOAIATQAOAXACAZQACANgJAOQgIAKgJAKQgPARgVAGQgIAEgJACQgPAIgQAFIgGADIgEACIgLAFIgOAEIgNAHQgHAEgIABIgGAEIgJAEIgEABQgXAJgdACIiEAKQgZACgYAFIgYADQghATg4ADIgaABIgTAAIgYgBIgIACIgkADQgmATg4AEQgMADgOABIgRABQgWAAgZgEg");
	this.shape_19.setTransform(-205.1,74.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990000").s().p("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");
	this.shape_20.setTransform(-199.9,75.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990000").s().p("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");
	this.shape_21.setTransform(-193.6,78.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990000").s().p("A7+EeQgNgJgMgJIgCgLQgCgkAAgkQABgkgCgkQgBgqAGgpQiYAzi5g9QhEgVhJAFQiUANiVgJQhWgFgjhLQgTgrAJguQAcglAwgFQClgPCZA5QBHhRB0AsQB9AwB2gyQBpgtBrgPQB6AEB5AMQANABAOAHQAYANATAVQBrgNBSA5QAjgTA5gCQAygDArgJQApgJAYARQALgfAjgBIAAAAQBcABBTAnQAUAKAXgBQB3ACB3AEQBWgzBfAkQAiANAgAOQA5AZAgA0QAMATgOASQgeApg3AFQhhAJhgAJQgUADgUAFQgdAJgbAPQgBAuALAtQADAOACAPQAIBFhDACQgXABgJgVQgUgwgJgzQgCgHgDgJQgVgughgoQh8gDhzguQgYgJgYgMQghgQgIgiQhIAqhlAFIAAAAQhyBJiAg6QgogSgsgOIgVAKQg6Aag+APIgeAHIgLAKQAGAKABALQAEAogKAnQgSBFg3A5IAAAKQgEAcgYAMQgLAGgMADQgMgEgLgFgAd0DQQgOgCgOgJIgfgWQiAAAh9gOQhLAuhZhFIhFgNIgRgEIhGAAQiGBYicgvQibgwiogOQg7gEg7gKQgygIgngSQiUA9hdh6QgKgNAAgVQgCgqAGgoQA5iJBkA4QAxgwBEACQAhgqBHgIQF2AHF1AKQCTAFCRgPQB5gMB0AiIAMAFIA/gUQCKgaA1BPIASgDIAGgDIAKgCIAUgDIAAgCQARABAPAEIAXgFQEegtC9C1QAZAXgbAYQhKBBhchDIg3AEQgGAFgIADQgXAKgSAAQgBAMgEAOQgJAbghACQiRAJiPAVQglAGgjATQgRALgTAGQA+B4hyAAQgOAAgSgCg");
	this.shape_22.setTransform(-187,84.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_3}]},4).to({state:[{t:this.shape_4}]},7).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-73.6,61.7,148.7);


(lib.MarinhoCorrendo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cabeça
	this.instance = new lib.MarinhoCabeça();
	this.instance.parent = this;
	this.instance.setTransform(-2.6,-50.5,1,1,0,0,0,-0.3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-3.3},4).to({x:-1.3},5).to({x:-3.3},5).to({x:-2.6},5).wait(1));

	// AnteBraço Direito
	this.instance_1 = new lib.MarinhoAnteBraço();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,-42.5,0.995,0.995,54.1,0,0,-7.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-7.4,rotation:93.2,y:-42.6},4).to({scaleX:0.99,scaleY:0.99,rotation:151.7,x:-1},5).to({regY:0.6,rotation:96.5,x:-0.9},5).to({regX:-7.3,regY:0.5,scaleX:1,scaleY:1,rotation:54.1,y:-42.5},5).wait(1));

	// Braço Direito
	this.instance_2 = new lib.MarinhoBraço();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.9,-25.3,0.991,0.991,72.7,0,0,-9.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:108.6,x:-2.8,y:-22.8},4).to({regX:-9.2,regY:9.6,scaleX:0.99,scaleY:0.99,rotation:176.5,x:-19.2,y:-33.3},5).to({rotation:113.1,x:-3.9,y:-21.7},5).to({regX:-9.3,regY:9.7,scaleX:0.99,scaleY:0.99,rotation:72.7,x:9.9,y:-25.3},5).wait(1));

	// Pescocinho
	this.instance_3 = new lib.Marinhopescocinho();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.9,-48.3,1,1,7.8,0,0,-1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// Coluna
	this.instance_4 = new lib.MarinhoColunadelado();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.3,5.6,0.69,1,0,0,0,0,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// AnteBraço Esquerdo
	this.instance_5 = new lib.MarinhoAnteBraço();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.8,-42.6,0.991,0.991,0,-26.7,153.3,-7.5,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:0.9,scaleX:0.99,scaleY:0.99,skewX:-81.1,skewY:98.9},4).to({regY:0.8,scaleX:0.99,scaleY:0.99,skewX:-128.4,skewY:51.6,x:-0.9,y:-42.5},5).to({regY:0.9,skewX:-92.6,skewY:87.4,x:-0.8},5).to({regY:1.1,scaleX:0.99,scaleY:0.99,skewX:-26.7,skewY:153.3,y:-42.6},5).wait(1));

	// Braço Esquerdo
	this.instance_6 = new lib.MarinhoBraço();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-20,-33.2,0.997,0.997,169.2,0,0,-9.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,rotation:125.6,x:-4.1,y:-21.7},4).to({regX:-9.1,scaleX:1,scaleY:1,rotation:74.6,x:12.8,y:-25.8},5).to({scaleX:1,scaleY:1,rotation:108.5,x:0.3,y:-21.7},5).to({regX:-9.2,scaleX:1,scaleY:1,rotation:169.2,x:-20,y:-33.2},5).wait(1));

	// Coxa Direita
	this.instance_7 = new lib.Marinhocoxa();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.4,4.7,0.998,0.998,52.2,0,0,-11.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:0.7,rotation:88.7,x:-0.3},4).to({scaleX:1,scaleY:1,rotation:118.6},5).to({regY:0.8,rotation:83.7,x:-0.4},5).to({scaleX:1,scaleY:1,rotation:52.2},5).wait(1));

	// Perna Direita
	this.instance_8 = new lib.MarinhoCanela();
	this.instance_8.parent = this;
	this.instance_8.setTransform(20.2,29.9,1,1,-8.5,0,0,-1.1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,rotation:1.5,x:1.5,y:35.7},4).to({regX:-1.2,scaleX:1,scaleY:1,rotation:54.2,x:-14.7,y:33.1},5).to({regX:-1.1,regY:-15.8,scaleX:1,scaleY:1,rotation:33.1,x:3.5,y:36.2},5).to({regY:-15.7,scaleX:1,scaleY:1,rotation:-8.5,x:20.2,y:29.9},5).wait(1));

	// Coxa Esquerda
	this.instance_9 = new lib.Marinhocoxa();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.2,5,0.999,0.999,109.6,0,0,-12.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:-12.1,regY:0.8,scaleX:1,scaleY:1,rotation:81.5,x:-1.3},4).to({regX:-12.2,scaleX:1,scaleY:1,rotation:41.1,x:-1.4},5).to({regX:-12.1,rotation:88.3},5).to({regX:-12.2,regY:0.7,scaleX:1,scaleY:1,rotation:109.6,x:-1.2},5).wait(1));

	// Perna Esquerda
	this.instance_10 = new lib.MarinhoCanela();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-11.1,33.6,0.997,0.997,51,0,0,-2.1,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:-2,regY:-17.5,scaleX:1,scaleY:1,rotation:30.1,x:4,y:34.9},4).to({regX:-2.1,scaleX:1,scaleY:1,rotation:-18,x:22,y:24.6},5).to({rotation:-0.7,x:-0.5,y:35.8},5).to({regY:-17.6,scaleX:1,scaleY:1,rotation:51,x:-11.1,y:33.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-73.6,84.4,142.6);


(lib.MarinhoComemorando = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cabeça
	this.instance = new lib.MarinhoCabeça();
	this.instance.parent = this;
	this.instance.setTransform(-2.6,-50.5,1,1,0,0,0,-0.3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-51.9,x:-37.6,y:-37.2},2).to({scaleX:1,scaleY:1,rotation:-15.6,x:4.7,y:-7.4},2).to({scaleX:1,scaleY:1,rotation:-41.6,x:-29.4,y:-42.2},3).to({scaleX:1,scaleY:1,rotation:0,x:-2.6,y:-50.5},2).wait(1));

	// AnteBraço Direito
	this.instance_1 = new lib.MarinhoAnteBraço();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,-42.6,0.996,0.996,75.4,0,0,-7.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-7.3,scaleX:0.99,scaleY:0.99,rotation:179.7,x:6.5,y:8.2},4).to({regX:-7.4,scaleX:1,scaleY:1,rotation:75.4,x:-0.9,y:-42.6},5).wait(1));

	// Braço Direito
	this.instance_2 = new lib.MarinhoBraço();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.1,-22.7,0.992,0.992,92,0,0,-9.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:9.8,scaleX:0.99,scaleY:0.99,rotation:217.8,x:-13.8,y:7.7},4).to({regY:9.7,scaleX:0.99,scaleY:0.99,rotation:92,x:4.1,y:-22.7},5).wait(1));

	// Pescocinho
	this.instance_3 = new lib.Caopescocinho();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.9,-48.3,1,1,7.8,0,0,-1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-37.1,x:-32.6,y:-35.7},2).to({scaleX:1,scaleY:1,rotation:6.2,x:6.1,y:-4.3},2).to({scaleX:1,scaleY:1,rotation:-28.1,x:-26.8,y:-39.5},3).to({scaleX:1,scaleY:1,rotation:7.8,x:-0.9,y:-48.3},2).wait(1));

	// Coluna
	this.instance_4 = new lib.MarinhoColunadelado();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.3,5.6,0.69,1,0,0,0,0,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-0.1,scaleX:0.69,scaleY:1,rotation:16.5,x:-6.7,y:47.7},4).to({regX:0,scaleX:0.69,scaleY:1,rotation:0,x:-0.3,y:5.6},5).wait(1));

	// AnteBraço Esquerdo
	this.instance_5 = new lib.MarinhoAnteBraço();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.8,-42.6,0.993,0.993,0,-51.1,128.9,-7.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-7.4,regY:0.9,scaleX:0.99,scaleY:0.99,skewX:37.1,skewY:217.1,x:6.8,y:8},4).to({regX:-7.5,regY:1,scaleX:0.99,scaleY:0.99,skewX:-51.1,skewY:128.9,x:-0.8,y:-42.6},5).wait(1));

	// Braço Esquerdo
	this.instance_6 = new lib.MarinhoBraço();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-13.6,-26.2,0.998,0.998,125.6,0,0,-9.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-9,scaleX:0.99,scaleY:0.99,rotation:256.4,x:-9.7,y:-4.8},4).to({regX:-9.2,scaleX:1,scaleY:1,rotation:125.6,x:-13.6,y:-26.2},5).wait(1));

	// Coxa Direita
	this.instance_7 = new lib.Marinhocoxa();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.3,4.7,0.999,0.999,67.4,0,0,-11.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:155.7,x:-5.8,y:47.5},4).to({scaleX:1,scaleY:1,rotation:67.4,x:-0.3,y:4.7},5).wait(1));

	// Perna Direita
	this.instance_8 = new lib.MarinhoCanela();
	this.instance_8.parent = this;
	this.instance_8.setTransform(12.5,33.2,1,1,-8.5,0,0,-1.1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:-15.6,scaleX:1,scaleY:1,rotation:79.7,x:-33.9,y:61.3},4).to({regY:-15.7,scaleX:1,scaleY:1,rotation:-8.5,x:12.5,y:33.2},5).wait(1));

	// Coxa Esquerda
	this.instance_9 = new lib.Marinhocoxa();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.3,5,0.999,0.999,99.5,0,0,-12.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:-12.2,regY:0.8,rotation:187.7,x:-6,y:46.6},4).to({regX:-12.1,regY:0.7,rotation:99.5,x:-1.3,y:5},5).wait(1));

	// Perna Esquerda
	this.instance_10 = new lib.MarinhoCanela();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6,34.4,0.998,0.998,30.1,0,0,-2,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,scaleY:1,rotation:118.3,x:-35.6,y:42.9},4).to({scaleX:1,scaleY:1,rotation:30.1,x:-6,y:34.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-73.6,61.7,148.7);


(lib.MarinhoArmado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// AnteBraço Direito
	this.instance = new lib.MarinhoAnteBraço();
	this.instance.parent = this;
	this.instance.setTransform(-0.9,-42.6,0.996,0.996,75.4,0,0,-7.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-7.3,scaleX:0.99,scaleY:0.99,rotation:103.3,y:-42.5},4).to({scaleX:0.99,scaleY:0.99,rotation:120.1},2).to({scaleX:0.99,scaleY:0.99,rotation:-41.6},5).to({scaleX:0.99,scaleY:0.99,rotation:24.6,x:-1,y:-42.6},4).wait(3).to({rotation:24.6},0).to({scaleX:0.99,scaleY:0.99,rotation:103.3,x:-0.9,y:-42.5},3).to({regX:-7.4,scaleX:1,scaleY:1,rotation:75.4,y:-42.6},3).wait(1));

	// Braço Direito
	this.instance_1 = new lib.MarinhoBraço();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.1,-22.7,0.992,0.992,92,0,0,-9.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:9.6,scaleX:0.99,scaleY:0.99,rotation:125.4,x:-5.3,y:-22.4},4).to({x:-11,y:-24.7},2).to({scaleX:0.99,scaleY:0.99,rotation:82.9,x:6,y:-23.8},1).to({scaleX:0.99,scaleY:0.99,rotation:5.8,x:19.2,y:-38.7},1).to({scaleX:0.99,scaleY:0.99,rotation:-71.2,x:14.3,y:-56.2},3).to({scaleX:0.99,scaleY:0.99,rotation:56.4,x:17.3,y:-34.2},4).wait(3).to({rotation:56.4},0).to({scaleX:0.99,scaleY:0.99,rotation:125.4,x:-5.3,y:-22.4},3).to({regY:9.7,scaleX:0.99,scaleY:0.99,rotation:92,x:4.1,y:-22.7},3).wait(1));

	// Arma
	this.instance_2 = new lib.MarinhoArma();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7,0.2,0.999,0.999,84.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({y:-3.8},2).to({scaleX:0.99,scaleY:0.99,rotation:108.8,x:26.2,y:-25.3},1).to({scaleX:0.99,scaleY:0.99,rotation:46.1,x:20.4,y:-60.8},1).to({scaleX:1,scaleY:1,rotation:-16.5,x:-12.5,y:-65.3},3).to({scaleX:0.99,scaleY:0.99,rotation:126.1,x:42,y:-43.3},4).wait(3).to({scaleX:1,scaleY:1,rotation:84.8,x:-7,y:0.2},3).to({_off:true},1).wait(3));

	// Coluna
	this.instance_3 = new lib.MarinhoColunadelado();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.3,5.6,0.69,1,0,0,0,0,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

	// AnteBraço Esquerdo
	this.instance_4 = new lib.MarinhoAnteBraço();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.8,-42.6,0.993,0.993,0,-51.1,128.9,-7.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-7.4,scaleX:0.99,scaleY:0.99,skewX:-63.6,skewY:116.4,y:-42.5},4).wait(2).to({scaleX:0.99,scaleY:0.99,skewX:-90.9,skewY:89.1,y:-42.6},5).to({regY:0.9,skewX:-84.9,skewY:95.1,x:-0.9},4).wait(3).to({regY:1,scaleX:0.99,scaleY:0.99,skewX:-63.6,skewY:116.4,x:-0.8,y:-42.5},3).to({regX:-7.5,scaleX:0.99,scaleY:0.99,skewX:-51.1,skewY:128.9,y:-42.6},3).wait(1));

	// Braço Esquerdo
	this.instance_5 = new lib.MarinhoBraço();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-13.6,-26.2,0.998,0.998,125.6,0,0,-9.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:9.9,scaleX:1,scaleY:1,rotation:91.2,x:-9.9,y:-23.7},4).wait(2).to({regY:9.8,scaleX:1,scaleY:1,rotation:39.3,x:0,y:-21.7},5).to({regY:9.9,scaleX:1,scaleY:1,rotation:91.2,x:-1.4},4).wait(3).to({x:-9.9,y:-23.7},3).to({regY:9.8,scaleX:1,scaleY:1,rotation:125.6,x:-13.6,y:-26.2},3).wait(1));

	// Cabeça
	this.instance_6 = new lib.MarinhoCabeça();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-2.6,-50.5,1,1,0,0,0,-0.3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

	// Pescocinho
	this.instance_7 = new lib.Marinhopescocinho();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.9,-48.3,1,1,7.8,0,0,-1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25));

	// Coxa Direita
	this.instance_8 = new lib.Marinhocoxa();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.3,4.7,0.999,0.999,67.4,0,0,-11.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25));

	// Perna Direita
	this.instance_9 = new lib.MarinhoCanela();
	this.instance_9.parent = this;
	this.instance_9.setTransform(12.5,33.2,1,1,-8.5,0,0,-1.1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25));

	// Coxa Esquerda
	this.instance_10 = new lib.Marinhocoxa();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1.3,5,0.999,0.999,99.5,0,0,-12.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25));

	// Perna Esquerda
	this.instance_11 = new lib.MarinhoCanela();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-6,34.4,0.998,0.998,30.1,0,0,-2,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-73.6,61.7,148.7);


(lib.MarinhoApanhando = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cabeça
	this.instance = new lib.MarinhoCabeça();
	this.instance.parent = this;
	this.instance.setTransform(-2.6,-50.5,1,1,0,0,0,-0.3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-51.9,x:-37.6,y:-37.2},2).to({regX:-0.2,scaleX:1,scaleY:1,rotation:-103.8,x:-55.1,y:-7.5},2).to({regX:-0.3,scaleX:1,scaleY:1,rotation:-41.6,x:-29.4,y:-42.2},3).to({scaleX:1,scaleY:1,rotation:0,x:-2.6,y:-50.5},2).wait(1));

	// AnteBraço Direito
	this.instance_1 = new lib.MarinhoAnteBraço();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,-42.6,0.996,0.996,75.4,0,0,-7.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.99,scaleY:0.99,rotation:91.6,x:-39.2,y:-8.8},4).to({scaleX:1,scaleY:1,rotation:75.4,x:-0.9,y:-42.6},5).wait(1));

	// Braço Direito
	this.instance_2 = new lib.MarinhoBraço();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.1,-22.7,0.992,0.992,92,0,0,-9.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.99,scaleY:0.99,rotation:129.6,x:-40.4,y:11.6},4).to({scaleX:0.99,scaleY:0.99,rotation:92,x:4.1,y:-22.7},5).wait(1));

	// Pescocinho
	this.instance_3 = new lib.Caopescocinho();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.9,-48.3,1,1,7.8,0,0,-1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-37.1,x:-32.6,y:-35.7},2).to({scaleX:1,scaleY:1,rotation:-82,x:-51.9,y:-8.8},2).to({scaleX:1,scaleY:1,rotation:-28.1,x:-26.8,y:-39.5},3).to({scaleX:1,scaleY:1,rotation:7.8,x:-0.9,y:-48.3},2).wait(1));

	// Coluna
	this.instance_4 = new lib.MarinhoColunadelado();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.3,5.6,0.69,1,0,0,0,0,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-0.1,scaleX:0.69,scaleY:1,rotation:-71.7,x:-0.2},4).to({regX:0,scaleX:0.69,scaleY:1,rotation:0,x:-0.3},5).wait(1));

	// AnteBraço Esquerdo
	this.instance_5 = new lib.MarinhoAnteBraço();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.8,-42.6,0.993,0.993,0,-51.1,128.9,-7.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.99,scaleY:0.99,x:-39.4,y:-9.1},4).to({scaleX:0.99,scaleY:0.99,x:-0.8,y:-42.6},5).wait(1));

	// Braço Esquerdo
	this.instance_6 = new lib.MarinhoBraço();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-13.6,-26.2,0.998,0.998,125.6,0,0,-9.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-9.1,scaleX:0.99,scaleY:0.99,rotation:168.2,x:-52.7,y:6.9},4).to({regX:-9.2,scaleX:1,scaleY:1,rotation:125.6,x:-13.6,y:-26.2},5).wait(1));

	// Coxa Direita
	this.instance_7 = new lib.Marinhocoxa();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.3,4.7,0.999,0.999,67.4,0,0,-11.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:67.5},4).to({scaleX:1,scaleY:1,rotation:67.4},5).wait(1));

	// Perna Direita
	this.instance_8 = new lib.MarinhoCanela();
	this.instance_8.parent = this;
	this.instance_8.setTransform(12.5,33.2,1,1,-8.5,0,0,-1.1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,x:12.6},4).to({scaleX:1,scaleY:1,x:12.5},5).wait(1));

	// Coxa Esquerda
	this.instance_9 = new lib.Marinhocoxa();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.3,5,0.999,0.999,99.5,0,0,-12.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Perna Esquerda
	this.instance_10 = new lib.MarinhoCanela();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6,34.4,0.998,0.998,30.1,0,0,-2,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:-17.6,scaleX:1,scaleY:1,x:-5.9,y:34.3},4).to({regY:-17.5,scaleX:1,scaleY:1,x:-6,y:34.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-73.6,61.7,148.7);


(lib.MarinhoAndando = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cabeça
	this.instance = new lib.MarinhoCabeça();
	this.instance.parent = this;
	this.instance.setTransform(-2.6,-50.5,1,1,0,0,0,-0.3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// AnteBraço Direito
	this.instance_1 = new lib.MarinhoAnteBraço();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,-42.6,0.996,0.996,75.4,0,0,-7.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:93.2},4).to({scaleX:0.99,scaleY:0.99,rotation:126.8},5).to({regY:0.6,scaleX:0.99,scaleY:0.99,rotation:96.5},5).to({regY:0.5,scaleX:1,scaleY:1,rotation:75.4},5).wait(1));

	// Braço Direito
	this.instance_2 = new lib.MarinhoBraço();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.1,-22.7,0.992,0.992,92,0,0,-9.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.99,scaleY:0.99,rotation:108.6,x:-2.8,y:-22.8},4).to({regX:-9.2,scaleX:0.99,scaleY:0.99,rotation:140.6,x:-13.4,y:-26.2},5).to({regY:9.6,scaleX:0.99,scaleY:0.99,rotation:113.1,x:-3.9,y:-21.7},5).to({regX:-9.3,regY:9.7,scaleX:0.99,scaleY:0.99,rotation:92,x:4.1,y:-22.7},5).wait(1));

	// Pescocinho
	this.instance_3 = new lib.Marinhopescocinho();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.9,-48.3,1,1,7.8,0,0,-1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// Coluna
	this.instance_4 = new lib.MarinhoColunadelado();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.3,5.6,0.69,1,0,0,0,0,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// AnteBraço Esquerdo
	this.instance_5 = new lib.MarinhoAnteBraço();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.8,-42.6,0.993,0.993,0,-51.1,128.9,-7.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:0.9,skewX:-81.1,skewY:98.9},4).to({scaleX:0.99,scaleY:0.99,skewX:-110.4,skewY:69.6,y:-42.5},5).to({scaleX:0.99,scaleY:0.99,skewX:-92.6,skewY:87.4},5).to({regY:1,scaleX:0.99,scaleY:0.99,skewX:-51.1,skewY:128.9,y:-42.6},5).wait(1));

	// Braço Esquerdo
	this.instance_6 = new lib.MarinhoBraço();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-13.6,-26.2,0.998,0.998,125.6,0,0,-9.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-4.1,y:-21.7},4).to({regX:-9.1,scaleX:1,scaleY:1,rotation:82.9,x:6.3,y:-23.2},5).to({scaleX:1,scaleY:1,rotation:108.5,x:0.3,y:-21.7},5).to({regX:-9.2,scaleX:1,scaleY:1,rotation:125.6,x:-13.6,y:-26.2},5).wait(1));

	// Coxa Direita
	this.instance_7 = new lib.Marinhocoxa();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.3,4.7,0.999,0.999,67.4,0,0,-11.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:88.7},4).to({scaleX:1,scaleY:1,rotation:103.8},5).to({regY:0.8,scaleX:1,scaleY:1,rotation:83.7,x:-0.4},5).to({regY:0.7,scaleX:1,scaleY:1,rotation:67.4,x:-0.3},5).wait(1));

	// Perna Direita
	this.instance_8 = new lib.MarinhoCanela();
	this.instance_8.parent = this;
	this.instance_8.setTransform(12.5,33.2,1,1,-8.5,0,0,-1.1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,rotation:1.5,x:1.5,y:35.7},4).to({scaleX:1,scaleY:1,rotation:19.4,x:-7.5,y:36.3},5).to({regY:-15.8,scaleX:1,scaleY:1,rotation:33.1,x:3.5,y:36.2},5).to({regY:-15.7,scaleX:1,scaleY:1,rotation:-8.5,x:12.5,y:33.2},5).wait(1));

	// Coxa Esquerda
	this.instance_9 = new lib.Marinhocoxa();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.3,5,0.999,0.999,99.5,0,0,-12.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:0.8,scaleX:1,scaleY:1,rotation:81.5},4).to({regX:-12.2,regY:0.7,rotation:62.2},5).to({regX:-12.1,regY:0.8,scaleX:1,scaleY:1,rotation:88.3,x:-1.4},5).to({regY:0.7,scaleX:1,scaleY:1,rotation:99.5,x:-1.3},5).wait(1));

	// Perna Esquerda
	this.instance_10 = new lib.MarinhoCanela();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6,34.4,0.998,0.998,30.1,0,0,-2,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:4,y:34.9},4).to({regX:-2.1,scaleX:1,scaleY:1,rotation:-9,x:13.5,y:31.8},5).to({scaleX:1,scaleY:1,rotation:-0.7,x:-0.5,y:35.8},5).to({regX:-2,scaleX:1,scaleY:1,rotation:30.1,x:-6,y:34.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-73.6,61.7,148.7);


(lib.MarinhoAbaixado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cabeça
	this.instance = new lib.MarinhoCabeça();
	this.instance.parent = this;
	this.instance.setTransform(23.2,-12.9,0.998,0.998,39.4,0,0,-0.3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},6).to({scaleX:1,scaleY:1},7).wait(1));

	// AnteBraço Direito
	this.instance_1 = new lib.MarinhoAnteBraço();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.5,-5.7,0.996,0.996,75.4,0,0,-7.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.99,scaleY:0.99,rotation:96.3},6).to({scaleX:1,scaleY:1,rotation:75.4},7).wait(1));

	// Braço Direito
	this.instance_2 = new lib.MarinhoBraço();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10.4,14.9,0.988,0.988,84.8,0,0,-9.3,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.99,scaleY:0.99,rotation:107.3,x:3.9,y:15},6).to({scaleX:0.99,scaleY:0.99,rotation:84.8,x:10.4,y:14.9},7).wait(1));

	// Pescocinho
	this.instance_3 = new lib.Caopescocinho();
	this.instance_3.parent = this;
	this.instance_3.setTransform(20.3,-12.8,0.997,0.997,71,0,0,-1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:20.4},6).to({scaleX:1,scaleY:1,x:20.3},7).wait(1));

	// Braço Esquerdo
	this.instance_4 = new lib.MarinhoBraço();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-29.4,0.993,0.993,167.2,0,0,-9.3,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.99,scaleY:0.99,rotation:156.7,y:-29.3},4).to({regY:9.8,scaleX:0.99,scaleY:0.99,rotation:176.5,x:-5.9,y:-29.2},4).to({scaleX:0.99,scaleY:0.99,rotation:164.4,y:-29.3},5).wait(1));

	// Coluna
	this.instance_5 = new lib.MarinhoColunadelado();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-30.2,5.6,0.689,0.999,72.5,0,0,0,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:1,x:-30.3},6).to({scaleY:1,x:-30.2},7).wait(1));

	// AnteBraço Esquerdo
	this.instance_6 = new lib.MarinhoAnteBraço();
	this.instance_6.parent = this;
	this.instance_6.setTransform(8.8,-8.9,0.986,0.986,0,52.6,-127.4,-7.6,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.98,scaleY:0.98,skewX:52.7,skewY:-127.3,y:-9},6).to({scaleX:0.99,scaleY:0.99,skewX:52.6,skewY:-127.4,y:-8.9},7).wait(1));

	// Coxa Direita
	this.instance_7 = new lib.Marinhocoxa();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-30.2,4.7,0.999,0.999,67.4,0,0,-11.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:0.8,scaleX:1,scaleY:1,rotation:93.8,x:-30.3,y:4.8},6).to({regY:0.7,scaleX:1,scaleY:1,rotation:67.4,x:-30.2,y:4.7},7).wait(1));

	// Perna Direita
	this.instance_8 = new lib.MarinhoCanela();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-17.4,33.2,1,1,-8.5,0,0,-1.1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,rotation:12.3,x:-31,y:36.4},6).to({scaleX:1,scaleY:1,rotation:-8.5,x:-17.4,y:33.2},7).wait(1));

	// Coxa Esquerda
	this.instance_9 = new lib.Marinhocoxa();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-31.2,5,0.998,0.998,81.3,0,0,-12.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,rotation:70.2},6).to({scaleX:1,scaleY:1,rotation:81.3},7).wait(1));

	// Perna Esquerda
	this.instance_10 = new lib.MarinhoCanela();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-26.1,35.7,0.998,0.998,30.1,0,0,-2,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:-17.6,scaleX:1,scaleY:1,rotation:-10.5,x:-19.6,y:33},6).to({regY:-17.5,scaleX:1,scaleY:1,rotation:30.1,x:-26.1,y:35.7},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-37.3,100.4,113.7);


(lib.correndo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cabeça
	this.instance = new lib.chicoCabeca();
	this.instance.parent = this;
	this.instance.setTransform(2.3,-80.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5.8,y:-79.1},3).to({x:4.6,y:-80.1},3).to({x:3.1},3).to({x:3.5},3).wait(1));

	// AnteBraço Direito
	this.instance_1 = new lib.AnteBraço();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.7,-55.3,0.995,0.995,59.9,0,0,-6,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-5.9,rotation:91.3,x:4.8,y:-53.3},3).to({regX:-6,scaleX:0.99,scaleY:0.99,rotation:130.6,x:3.2,y:-50.2},3).to({regX:-5.9,rotation:89.4,x:4.8,y:-53.8},3).to({scaleX:0.99,scaleY:0.99,rotation:80.2,y:-54.8},3).wait(1));

	// Braço Direito
	this.instance_2 = new lib.Braço();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7.8,-28.9,0.993,0.993,63.2,0,0,-7.4,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-7.3,scaleX:0.99,scaleY:0.99,rotation:110.5,x:-4.7,y:-29.4},3).to({regY:13.5,scaleX:0.99,scaleY:0.99,rotation:93.7,x:-20,y:-34.6},3).to({regY:13.7,scaleX:0.99,scaleY:0.99,rotation:115.6,x:-3.8,y:-28.3},3).to({scaleX:0.99,scaleY:0.99,rotation:85.7,x:0.2,y:-27.3},3).wait(1));

	// Coluna
	this.instance_3 = new lib.Colunadelado();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.3,-28.4,0.69,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13));

	// AnteBraço Esquerdo
	this.instance_4 = new lib.AnteBraço();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-4.9,-56,0.992,0.992,0,-36.6,143.4,-5.5,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.99,scaleY:0.99,skewX:-82.5,skewY:97.5,y:-52},3).to({scaleX:0.99,scaleY:0.99,skewX:-109.5,skewY:70.5,y:-53.5},3).to({scaleX:0.99,scaleY:0.99,skewX:-76,skewY:104,x:-5,y:-55.5},3).to({skewX:-59.4,skewY:120.6,x:-4.9,y:-55.9},3).wait(1));

	// Braço Esquerdo
	this.instance_5 = new lib.Braço();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-17.7,-40.8,0.997,0.997,88.5,0,0,-12.9,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-13,rotation:116.7,x:0.4,y:-34.4},3).to({scaleX:1,scaleY:1,rotation:56.3,x:9.8,y:-35.4},3).to({regX:-12.9,scaleX:0.99,scaleY:0.99,rotation:106.5,x:-1.7,y:-32.9},3).to({regX:-13,scaleX:1,scaleY:1,rotation:109.1,x:-8.6,y:-35},3).wait(1));

	// Coxa Direita
	this.instance_6 = new lib.Coxa();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.4,-3.3,0.993,0.993,64.4,0,0,-14.6,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-14.7,regY:-0.2,scaleX:1,scaleY:1,rotation:94.2,x:0.3,y:-3.4},3).to({regX:-14.8,regY:-0.3,scaleX:1,scaleY:1,rotation:109.8,x:0.4},3).to({regX:-14.7,rotation:87.5,y:-3.3},3).to({scaleX:0.99,scaleY:0.99,rotation:72.2,x:0.3},3).wait(1));

	// Perna Direita
	this.instance_7 = new lib.Canela();
	this.instance_7.parent = this;
	this.instance_7.setTransform(16.4,33.9,0.996,0.996,4.5,0,0,-1.3,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:6,x:-2.5,y:35.4},3).to({scaleX:1,scaleY:1,rotation:33.8,x:-14,y:33.4},3).to({scaleX:1,scaleY:1,rotation:45.1,x:1.5,y:36.9},3).to({regX:-1.2,scaleX:1,scaleY:1,rotation:18,x:11.5,y:34.9},3).wait(1));

	// Coxa Esquerda
	this.instance_8 = new lib.Coxa();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-3.7,-3.2,0.999,0.999,99.5,0,0,-14.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,rotation:78.3},3).to({scaleX:1,scaleY:1,rotation:62.2,y:-3.4},3).to({regY:1.4,scaleX:1,scaleY:1,rotation:75,y:-3.3},3).to({regX:-14.6,scaleX:1,scaleY:1,rotation:91.3,x:-3.6},3).wait(1));

	// Perna Esquerda
	this.instance_9 = new lib.Canela();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-7.8,35,0.998,0.998,30.1,0,0,-0.5,-16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,rotation:13.8,x:7.7},3).to({scaleX:1,scaleY:1,rotation:-17.2,x:16.7,y:29.9},3).to({regX:-0.6,regY:-16.7,scaleX:1,scaleY:1,rotation:4.4,x:7.7,y:33.9},3).to({regY:-16.6,rotation:21.5,x:-2.6,y:34.7},3).wait(1));

	// Pescocinho
	this.instance_10 = new lib.pescocinho();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-62.5,1,1,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,scaleY:1,rotation:14.4,y:-61.8},3).to({scaleX:1,scaleY:1,rotation:10.5,x:0.5,y:-62},3).to({scaleX:1,scaleY:1,rotation:5.3,x:0,y:-62.3},3).to({rotation:6.8,y:-62.5},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-91.7,86,174.2);


(lib.andando = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cabeça
	this.instance = new lib.chicoCabeca();
	this.instance.parent = this;
	this.instance.setTransform(2.3,-80.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:4.1,y:-79.1},4).to({x:4.6,y:-80.1},5).to({x:3.1},5).to({x:3.7},5).wait(1));

	// AnteBraço Direito
	this.instance_1 = new lib.AnteBraço();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.7,-55.3,0.996,0.996,75.4,0,0,-5.9,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:91.3,x:4.8},4).to({regX:-6,scaleX:0.99,scaleY:0.99,rotation:118.8,y:-51.7},5).to({regX:-5.9,rotation:89.4,y:-53.8},5).to({scaleX:1,scaleY:1,rotation:75.4,x:4.7,y:-55.3},5).wait(1));

	// Braço Direito
	this.instance_2 = new lib.Braço();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.3,-28,0.993,0.993,70.5,0,0,-7.4,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-7.3,scaleX:0.99,scaleY:0.99,rotation:110.5,x:-5.2,y:-31.9},4).to({scaleX:0.99,scaleY:0.99,rotation:128.4,x:-15.1,y:-35.9},5).to({regY:13.7,scaleX:0.99,scaleY:0.99,rotation:115.6,x:-4.5,y:-30.8},5).to({regX:-7.4,regY:13.6,scaleX:0.99,scaleY:0.99,rotation:70.5,x:2.3,y:-28},5).wait(1));

	// Coluna
	this.instance_3 = new lib.Colunadelado();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.3,-28.4,0.69,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// AnteBraço Esquerdo
	this.instance_4 = new lib.AnteBraço();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-4.9,-56,0.993,0.993,0,-51.1,128.9,-5.5,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewX:-82.5,skewY:97.5,y:-54},4).to({scaleX:0.99,scaleY:0.99,skewX:-97.8,skewY:82.2,x:-5,y:-53.5},5).to({scaleX:0.99,scaleY:0.99,skewX:-76,skewY:104,y:-55.5},5).to({scaleX:0.99,scaleY:0.99,skewX:-51.1,skewY:128.9,x:-4.9,y:-56},5).wait(1));

	// Braço Esquerdo
	this.instance_5 = new lib.Braço();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-11.7,-37.7,0.998,0.998,110.6,0,0,-13,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,rotation:116.7,x:1.1,y:-33.2},4).to({rotation:80.6,x:4.8,y:-36},5).to({regX:-12.9,scaleX:0.99,scaleY:0.99,rotation:106.5,x:-2.2,y:-34.7},5).to({regX:-13,scaleX:1,scaleY:1,rotation:110.6,x:-12,y:-37.5},5).wait(1));

	// Coxa Direita
	this.instance_6 = new lib.Coxa();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.4,-3.4,0.999,0.999,67.4,0,0,-14.7,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-0.2,scaleX:1,scaleY:1,rotation:94.2,x:0.3},4).to({regX:-14.8,scaleX:1,scaleY:1,rotation:100.8},5).to({regX:-14.7,regY:-0.3,rotation:87.5,x:0.4,y:-3.3},5).to({regX:-14.6,scaleX:0.99,scaleY:0.99,rotation:69.2},5).wait(1));

	// Perna Direita
	this.instance_7 = new lib.Canela();
	this.instance_7.parent = this;
	this.instance_7.setTransform(16,35.5,1,1,-8.5,0,0,-1.3,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:6,x:-2.8,y:36.7},4).to({scaleX:1,scaleY:1,rotation:33.8,x:-8,y:35.9},5).to({scaleX:1,scaleY:1,rotation:45.1,x:1.5,y:36.9},5).to({scaleX:1,scaleY:1,rotation:4.5,x:13.9,y:33.9},5).wait(1));

	// Coxa Esquerda
	this.instance_8 = new lib.Coxa();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-3.7,-3.2,0.999,0.999,99.5,0,0,-14.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,rotation:78.3},4).to({scaleX:1,scaleY:1,rotation:69.5,y:-3.3},5).to({regY:1.4,scaleX:1,scaleY:1,rotation:75},5).to({regY:1.5,scaleX:1,scaleY:1,rotation:99.5,y:-3.2},5).wait(1));

	// Perna Esquerda
	this.instance_9 = new lib.Canela();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-8.8,35,0.998,0.998,30.1,0,0,-0.5,-16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,rotation:13.8,x:6.7},4).to({scaleX:1,scaleY:1,rotation:-17.2,x:12,y:32.2},5).to({regX:-0.6,regY:-16.7,scaleX:1,scaleY:1,rotation:4.4,x:7.7,y:33.9},5).to({regX:-0.5,regY:-16.8,scaleX:1,scaleY:1,rotation:30.1,x:-7.8,y:35.5},5).wait(1));

	// Pescocinho
	this.instance_10 = new lib.pescocinho();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-62.5,1,1,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,scaleY:1,rotation:14.4,y:-61.8},4).to({scaleX:1,scaleY:1,rotation:10.5,x:0.5,y:-62},5).to({scaleX:1,scaleY:1,rotation:5.3,x:0,y:-62.3},5).to({scaleX:1,scaleY:1,rotation:7.8,y:-62.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-91.7,80.3,174.2);


(lib.MarinhoPulando = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// AnteBraço Direito
	this.instance = new lib.MarinhoAnteBraço();
	this.instance.parent = this;
	this.instance.setTransform(-0.8,-32.5,0.994,0.994,-39.6,0,0,-7.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Braço Direito
	this.instance_1 = new lib.MarinhoBraço();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.2,-45.1,0.992,0.992,-84.1,0,0,-9.3,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Pescocinho
	this.instance_2 = new lib.Caopescocinho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.9,-38.3,1,1,7.8,0,0,-1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Coluna
	this.instance_3 = new lib.MarinhoColunadelado();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.3,15.6,0.69,1,0,0,0,0,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// AnteBraço Esquerdo
	this.instance_4 = new lib.MarinhoAnteBraço();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.9,-32.6,0.992,0.992,0,121.4,-58.6,-7.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Cabeça
	this.instance_5 = new lib.MarinhoCabeça();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-2.6,-40.5,1,1,0,0,0,-0.3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Braço Esquerdo
	this.instance_6 = new lib.MarinhoBraço();
	this.instance_6.parent = this;
	this.instance_6.setTransform(9.8,-51,0.998,0.998,-66.5,0,0,-9.2,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Coxa Direita
	this.instance_7 = new lib.Marinhocoxa();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.3,14.7,0.998,0.998,90.7,0,0,-11.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Perna Direita
	this.instance_8 = new lib.MarinhoCanela();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1,46.7,0.999,0.999,6,0,0,-1.1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Coxa Esquerda
	this.instance_9 = new lib.Marinhocoxa();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.3,15,0.999,0.999,99.5,0,0,-12.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Perna Esquerda
	this.instance_10 = new lib.MarinhoCanela();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6,44.4,0.998,0.998,30.1,0,0,-2,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-80.4,52.7,165.6);


(lib.MarinhoPulando_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// AnteBraço Direito
	this.instance_11 = new lib.MarinhoAnteBraço();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-0.9,-42.6,0.996,0.996,75.4,0,0,-7.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:0.99,scaleY:0.99,rotation:-39.6,x:-0.8,y:-72.5},4).to({_off:true},1).wait(10).to({_off:false,rotation:-39.6},0).to({scaleX:1,scaleY:1,rotation:75.4,x:-0.9,y:-42.6},4).wait(1));

	// Braço Direito
	this.instance_12 = new lib.MarinhoBraço();
	this.instance_12.parent = this;
	this.instance_12.setTransform(4.1,-22.7,0.992,0.992,92,0,0,-9.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:3.8,x:19.4,y:-51.2},2).to({regY:9.6,rotation:-84.1,x:15.2,y:-85.1},2).to({_off:true},1).wait(10).to({_off:false},0).to({regY:9.7,rotation:3.8,x:19.4,y:-51.2},2).to({rotation:92,x:4.1,y:-22.7},2).wait(1));

	// Pescocinho
	this.instance_13 = new lib.Caopescocinho();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-0.9,-48.3,1,1,7.8,0,0,-1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:-78.3},4).to({_off:true},1).wait(10).to({_off:false},0).to({y:-48.3},4).wait(1));

	// Coluna
	this.instance_14 = new lib.MarinhoColunadelado();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-0.3,5.6,0.69,1,0,0,0,0,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({y:-24.4},4).to({_off:true},1).wait(10).to({_off:false},0).to({y:5.6},4).wait(1));

	// AnteBraço Esquerdo
	this.instance_15 = new lib.MarinhoAnteBraço();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-0.8,-42.6,0.993,0.993,0,-51.1,128.9,-7.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regY:0.9,scaleX:0.99,scaleY:0.99,skewX:-192.8,skewY:-12.8,x:-0.9,y:-57.6},2).to({regY:1,scaleX:0.99,scaleY:0.99,skewX:-238.6,skewY:-58.6,y:-72.6},2).to({_off:true},1).wait(10).to({_off:false},0).to({regY:0.9,scaleX:0.99,scaleY:0.99,skewX:-192.8,skewY:-12.8,y:-57.6},2).to({regY:1,scaleX:0.99,scaleY:0.99,skewX:-51.1,skewY:128.9,x:-0.8,y:-42.6},2).wait(1));

	// Braço Esquerdo
	this.instance_16 = new lib.MarinhoBraço();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-13.6,-26.2,0.998,0.998,125.6,0,0,-9.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regX:-9.1,regY:9.9,scaleX:1,scaleY:1,rotation:11.5,x:18.9,y:-61.4},2).to({regX:-9.2,scaleX:1,scaleY:1,rotation:-66.5,x:9.8,y:-91},2).to({_off:true},1).wait(10).to({_off:false},0).to({regX:-9.1,scaleX:1,scaleY:1,rotation:11.5,x:18.9,y:-61.4},2).to({regX:-9.2,regY:9.8,scaleX:1,scaleY:1,rotation:125.6,x:-13.6,y:-26.2},2).wait(1));

	// Cabeça
	this.instance_17 = new lib.MarinhoCabeça();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-2.6,-50.5,1,1,0,0,0,-0.3,11);

	this.instance_18 = new lib.MarinhoPulando();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-2.6,-40.6,1,1,-4.5,0,0,-0.3,10.9);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:-80.5},4).to({_off:true},1).wait(9).to({_off:false},1).to({y:-50.5},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(5).to({_off:false},0).to({regY:11,rotation:-180,x:-2.5,y:-190.6},4).to({rotation:0,x:-2.7,y:-60.4},5).to({_off:true,x:-2.6,y:-80.5},1).wait(5));

	// Coxa Direita
	this.instance_19 = new lib.Marinhocoxa();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-0.3,4.7,0.999,0.999,67.4,0,0,-11.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({scaleX:1,scaleY:1,rotation:90.7,y:-25.3},4).to({_off:true},1).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:67.4,y:4.7},4).wait(1));

	// Perna Direita
	this.instance_20 = new lib.MarinhoCanela();
	this.instance_20.parent = this;
	this.instance_20.setTransform(12.5,33.2,1,1,-8.5,0,0,-1.1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({scaleX:1,scaleY:1,rotation:6,x:1,y:6.7},4).to({_off:true},1).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-8.5,x:12.5,y:33.2},4).wait(1));

	// Coxa Esquerda
	this.instance_21 = new lib.Marinhocoxa();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-1.3,5,0.999,0.999,99.5,0,0,-12.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({y:-25},4).to({_off:true},1).wait(10).to({_off:false},0).to({y:5},4).wait(1));

	// Perna Esquerda
	this.instance_22 = new lib.MarinhoCanela();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-6,34.4,0.998,0.998,30.1,0,0,-2,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({y:4.4},4).to({_off:true},1).wait(10).to({_off:false},0).to({y:34.4},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-73.6,61.7,148.7);


// stage content:
(lib.marinho_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{andando:0,correndo:9,voadora:19,socando:29,pulando:39,abaixado:49,parado:59,armado:69,poderJogado:79,comemorando:89,apanhando:99,morrendo:109});

	// timeline functions:
	this.frame_0 = function() {
		//_parent.comemorando = false;
		//_parent.acao = false;
		//_parent.abaixado = false;
		//_parent.pulando = false;
		//_parent.apanhando = false;
		//
		///*#include "../../jogador1.as"
		//
		////_global.thiz = this; //pois o this da funcao transformadorDeJogadores fica sendo a propria função, tendo que tranforma a variaviel diz nesse diretorio em q esta sendo escrito no momentos
		//
		////transformadorDeJogadores(1);
		////mc, esq, dir, chute, soco, pulo, abaixar, correr, invisibilidade
		//this.vida = 100;
		//this.vel = _root.velandando 	//velocidade de deslocamento terça-feira 2 de novembro de 2004 - 01:53
		//this.parado = false;			//PARA QUANDO APERTAR ENTER
		//this.armado = false			//QUANDO PEGAR A ARMA NO BAU
		//this.arma = "foice"			//NOME DA ARMA QUE SERA ATACADA
		//this.abaixado = false;		//ESTADO ABAIXADO
		//this.pulando = false;			//QUANDO ESTA NO AR, NO MEIO DO PULO
		//this.acao  = false;			//SE ESTA SOCANDO OU CHUTANDO OU ARMANDO
		//this.correndo = false;		//CASO ESTEJA CORRENDO DEER
		//this.apanhando = false;		//SE ESTIVER SENDO ATACADO
		//this.vida = 100;				//VIDA DO JOGADOR
		//this.pos = "esquerda";		//POSICAO EM RELACAO AO OUTRO PLAYER
		//this.nome = this;				//PARA PEGAR O NOME DESTE DINAMICAMENTE
		////if(("jogador"+numeroAt)==this) {
		////	numeroAt++;
		/////this.inimigo = "jogador"+numeroAt;		//PARA PEGAR O INIMIGO DINAMICAMENTE
		////}
		//this.inimigo = "jogador2_mc";
		//foi = false;*/
		////trace(_parent);
		//stop();
		/* this*/
	}
	this.frame_9 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* _parent.acao = true;
		stop();*/
	}
	this.frame_29 = function() {
		/* _parent.acao = true;
		stop();*/
	}
	this.frame_39 = function() {
		/* _parent.pulando = true;
		stop();*/
	}
	this.frame_49 = function() {
		/* _parent.abaixado = true;
		stop();*/
	}
	this.frame_59 = function() {
		/* stop();*/
	}
	this.frame_69 = function() {
		/* _parent.acao = true;
		stop();*/
	}
	this.frame_79 = function() {
		/* acao = true;
		stop();*/
	}
	this.frame_89 = function() {
		/* _parent.comemorando = true;
		stop();*/
	}
	this.frame_99 = function() {
		/* _parent.apanhando = true;
		stop();*/
	}
	this.frame_109 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(11));

	// Shape
	this.shape = new lib.shape();
	this.shape.parent = this;
	this.shape.setTransform(45.8,101.4,1.455,1.245);
	this.shape.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(39).to({scaleX:0.78,scaleY:0.83,x:55.9,y:-1.2,alpha:1},0).wait(10).to({x:54.5,y:136.5},0).wait(10).to({y:87.9},0).wait(30).to({_off:true},10).wait(21));

	// Corpitcho
	this.instance = new lib.MarinhoAndando();
	this.instance.parent = this;
	this.instance.setTransform(48,109.7);

	this.instance_1 = new lib.MarinhoCorrendo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48,109.7);

	this.ataque = new lib.MarinhoVoadora();
	this.ataque.parent = this;
	this.ataque.setTransform(53.4,110.2);

	this.ataque_1 = new lib.MarinhoSocando();
	this.ataque_1.parent = this;
	this.ataque_1.setTransform(53.4,110.2);

	this.instance_2 = new lib.MarinhoPulando_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(53.3,110.2);

	this.ataque_2 = new lib.MarinhoAbaixado();
	this.ataque_2.parent = this;
	this.ataque_2.setTransform(53.4,110.2);

	this.instance_3 = new lib.MarinhoParado();
	this.instance_3.parent = this;
	this.instance_3.setTransform(53.4,110.2);

	this.ataque_3 = new lib.MarinhoArmado();
	this.ataque_3.parent = this;
	this.ataque_3.setTransform(53.4,110.2);

	this.instance_4 = new lib.MarinhoComemorando();
	this.instance_4.parent = this;
	this.instance_4.setTransform(53.4,110.2);

	this.instance_5 = new lib.MarinhoApanhando();
	this.instance_5.parent = this;
	this.instance_5.setTransform(53.4,110.2);

	this.instance_6 = new lib.MarinhoMorrendo();
	this.instance_6.parent = this;
	this.instance_6.setTransform(53.4,110.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.ataque}]},10).to({state:[{t:this.ataque_1}]},10).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.ataque_2}]},10).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.ataque_3}]},10).to({state:[]},10).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_6}]},10).wait(11));

	// Sombra
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#404040","rgba(130,130,130,0)"],[0,1],0,0,0,0,0,12.1).s().p("Ak6BhQiDgoAAg5QAAg4CDgoQCCgoC4AAQC5AACCAoQCDAoAAA4QAAA5iDAoQiCAoi5AAQi4AAiCgog");
	this.shape_1.setTransform(46.7,182);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},109).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.1,136.1,89.8,159.6);
// library properties:
lib.properties = {
	width: 100,
	height: 200,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;