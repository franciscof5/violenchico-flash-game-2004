//this = new jogador1(this);
//_global.jogador1 = function (mc) {
function player ( mc, esq, dir, chute, soco, pulo, abaixar, keycorrer, comemora) {
	mc = eval(mc);
	//numeroAt = 1;desnecessário por enquanto
	//if(foi) {
		mc.vida = 100;
		mc.parado = true;			//PARA QUANDO APERTAR ENTER
		mc.armado = false			//QUANDO PEGAR A ARMA NO BAU
		mc.arma = "foice"			//NOME DA ARMA QUE SERA ATACADA
		mc.abaixado = false;		//ESTADO ABAIXADO
		mc.pulando = false;			//QUANDO ESTA NO AR, NO MEIO DO PULO
		mc.acao  = false;			//SE ESTA SOCANDO OU CHUTANDO OU ARMANDO
		mc.correndo = false;		//CASO ESTEJA CORRENDO DEER
		mc.apanhando = false;		//SE ESTIVER SENDO ATACADO
		mc.vida = 100;				//VIDA DO JOGADOR
		mc.nome = mc;				//PARA PEGAR O NOME DESTE DINAMICAMENTE
		mc.vel = 12;
		mc.forcaGolpe = 0;
		//if(("jogador"+numeroAt)==mc) {
		//	numeroAt++;
		///mc.inimigo = "jogador"+numeroAt;		//PARA PEGAR O INIMIGO DINAMICAMENTE
		//}
		//mc.inimigo = "jogador2_mc";
		//foi = false;				//PARA NAO REPETIR O CARREGAMENTO DESSAS VARIAVES, NAO SEI SE É BOM OU RUIM TODAS ESTAREM DENTRO
		//trace("variaves carregadas");
	//}
	//Key.addListener(ouvidor);
	mc.antena.onEnterFrame = function () {
		//trace(mc.interno.vida);
		//trace(this);
		//trace(mc);
		
		//point = new object();
		//point.x = mc.interno.shape._x;
		//point.y = mc.interno.shape._y;
		//globalToLocal(point);
		//trace(mc + " shape " + mc.interno.shape._x + " pontoG " + point.x);
		//if(mc.inimigo=="_level0.jogador2_mc")
		//trace(mc + " inimigo->" + mc.inimigo + " nome->" + mc.nome + " acao->" + mc.acao + " parado->" + mc.parado);
		//dist = mc._x - mc.inimigo._x;
		//trace(mc.shape._x + " registra uma dist de : " + dist);
		
		if(Key.isDown(Key.DELETEKEY))
		trace(mc);
		
		limite(mc.interno);		//PARA BATER NAS PAREDES
		
		if(!mc.parado) {//PARA QUANDO APERTAR ENTER
			if (Key.isDown(esq))
			move( -1 * mc.vel, mc);
			//desloca(-1, 0, mc.interno);//this.move(-100, 0);
			//else
			//vai("parado", mc.interno);
			
			if(Key.isDown(dir))
			move( 1 * mc.vel, mc);//desloca( 1, 0, mc.interno);
			//else
			//vai("parado", mc.interno);				
				
			if (Key.isDown(chute))
			voadora(mc);
			//poderJogado(this.nome, "vassoura", 20);
			
			if (Key.isDown(soco))
			socar(mc);
			
			if (Key.isDown(pulo))
			pular(mc);
		
			if (Key.isDown(abaixar))
			agaichar(mc.interno);
			//trace(abaixar);
			
			if(Key.isDown(comemora))
			comemorarTeclando(mc, comemora);
	
			if (Key.isDown(keycorrer)) //{Caso o personagem corra -- FUNCIONOU PERFEITAMENTE BEM
			correr(mc.interno, keycorrer);
						
			if(mc.vida<=0)
			morrer(mc.interno);
		}//FECHA O PARADO PARA QUANDO APERTAR ENTER
	}
};