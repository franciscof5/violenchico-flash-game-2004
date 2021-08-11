function maquinaEsperta (mc) {

	mc = eval(mc);
	
	trace(mc);
	numeroAt = 1;
	mc.vida = 100;
	//mc.parado = false;			//PARA QUANDO QUISER PARALIZAR O PLAYER
	mc.parado = false;			//PARA QUANDO APERTAR ENTER
	mc.armado = false			//QUANDO PEGAR A ARMA NO BAU
	//mc.arma = "foice"			//NOME DA ARMA QUE SERA ATACADA
	mc.abaixado = false;		//ESTADO ABAIXADO
	mc.pulando = false;			//QUANDO ESTA NO AR, NO MEIO DO PULO
	mc.acao  = false;			//SE ESTA SOCANDO OU CHUTANDO OU ARMANDO
	mc.correndo = false;		//CASO ESTEJA CORRENDO DEER
	mc.apanhando = false;		//SE ESTIVER SENDO ATACADO
	mc.vida = 100;				//VIDA DO JOGADOR
	mc.nome = mc;				//PARA PEGAR O NOME DESTE DINAMICAMENTE
	mc.vel = 12;
	mc.forcaGolpe = 0;
	
	mc.onEnterFrame = function (mc) {
		//trace(inimigo.abaixado);
		//trace(dist);
		//pular(this);
		//*
		//limite(this);
		//if(acao)
		//correndo = true;
		//trace(dist);
		//trace("ação:" + acao + " ..pulando:"  + pulando + " ..correndo:" + correndo + "  ..abaixado:" + abaixado);	
		//trace(dist);
		//with (_root) {
		
		//if(_root.jogador1_mc.hitTest(this.shape))
		//bater(this);
		
		//if(_root._root.jogador1_mc.vida<=0)
		//voadora(this);
		//trace(this.parado);
		if(!this.parado) {
		//trace("nao esta parado");
		if(_root.jogador1_mc.acao) {
			//trace("_root.jogador1_mc acionado");
			if(_root.jogador1_mc.armado){
				//correndo = true;
				if(dist<400) {
					aproxima();
				}
				else {
					pular(this) 
				}
			}
			else if (!_root.jogador1_mc.armado) {
				this.correndo = false;
				if(dist<300) {
					afasta();
				}
				else {
					pular(this) 
				}
			}
		} else if(!_root.jogador1_mc.acao) {
			if(dist>360)
			aproxima();
			else if(dist>120 and dist<360) {
				//trace("dist mairo que 120");
				aproxima();
				//if(pos=="direita")
				//move(-1 * vel, this);
				//if(pos=="esquerda")
				///move( 1 * vel, this);
			}
			else if (dist>360 and dist<600) {
				//trace("dist>360");
				pular(this);
			}
			
			else if(dist>600 and dist<120) {
				//trace("dist<600");
				aproxima();
			}
			
			else if(dist<120 and dist>60) {
				//trace("dist menor que 120")
				if(!_root.jogador1_mc.pulando and !_root.jogador1_mc.acao)
				bater();
			}
			else if(dist<60 and dist>50) {
				//trace("dist<55");
				pula();
				//bater();
			}
			else if(dist<0 and dist>-150) {
				aproxima();
			}
			//else {
			//	trace("elsão");
			//	aproxima();
			//	bater();//QUALQUER COISA AQUI, ACHO EU QUE NUNCA ISSO IRA OCORRER, È APENAS PARA EVITAR ERRO
			//}
			
			//else if(dist<0) { // 1 para dir
			//	if(pos=="direita")
			//	move( 1 * vel, this);
			//	if(pos=="esquerda")
			//	move(-1 * vel, this);
			//}FECHA ELSE
			//else {
			//	if(pos=="direita")
			//	move(-1 * vel, this);
			//	if(pos=="esquerda")
			//	move( 1 * vel, this);
			//}
	
		}//FECHA IF !_root.jogador1_mc.ACAO
		
		if(this.forcaGolpe>12) {
			//trace("forcaGolpe>12");
			bater();
		}
		
		//if(vida<=20 and dist>130)
		//abaixar(this);
		if(this.vida<=0) {
			//morrer(this);
			//vencer(this.inimigo);
			//vai("morrendo", this);
			this.interno.gotoAndStop("morrendo");
			vencer(this.inimigo);
			this.parado=true;
		}
		
		if(abaixado and dist<=120)
		pula();
		}//fecha parado
		
		//}//FECHA WITH ROOT*/
	}
}