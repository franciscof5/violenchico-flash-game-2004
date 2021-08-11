//Variáveis
vel = 12;
estado = "andando";

//Movimento Humano
MovieClip.prototype.move = function(x, y, estado) {
	//ESCOLHE O ESTADO DO PERSONAGEM
	switch ( estado ) {
	case "andando":
		//this.gotoAndPlay("andando");
		this._currentframe++;
		vel=12;
		trace(estado);
		break;
	case "correndo":
		this._currentframe++;
		vel = 18;
		trace(estado);
		break;
	default:
		trace ("no case tested true")
	}
	//A DIREÇAO QUE ELE VAI
	{
		if (x>0)
		this._xscale = 100;
		if (x<0)
		this._xscale = -100;
	}
	this._x += x;
	this._y += y;
	this.play();
};

	if (Key.isDown(Key.SHIFT)) {
		estado = "correndo";
	}
	else {
		estado = "andando";
	}
	if (Key.isDown(Key.LEFT)) {
		this.move(-vel, 0);
	}
	if(Key.isDown(Key.RIGHT)) {
		this.move(vel, 0);
	}