function Mostrador (mostrador, mc, temMostra) {
	mostrador = eval(mostrador);
	mc = eval(mc);
	id = mc.id;
	
	mostrador.mcFoto.loadMovie("jogadores/"+id+"/"+id+".jpg");
	mostrador.mcFoto._xscale = 40;
	mostrador.mcFoto._yscale = 40;
	mostrador.txNome.text = id;
	mostrador.mcVida._xscale = mc.vida;
	mostrador.txEnergia.text = mc.forcaGolpe;
	mostrador.mcEnergia._xscale = mc.forcaGolpe*3;
	//Como cai muito o desempenho é possivel escolher se o mostrador vai ficar repetindo as infomações
	if(temMostra) {
		podeMostra=0;
		mostrador.onEnterFrame = function () {
			trace(podeMostra);
			if(podeMostra==25) {			
				if(mc.armado) //{
				this.mcArma.gotoAndStop(2);
					//showArma();
				//}
				else
				this.mcArma.gotoAndStop(1);
				
				this.txVida.text = mc.vida;
				if(mc.vida>0)
				this.mcVida._xscale = mc.vida;
				else
				this.mcVida._xscale=0;
				
				this.txEnergia.text = mc.forcaGolpe;
				this.mcEnergia._xscale = mc.forcaGolpe*3;
				podeMostra=0;
			}
			podeMostra++;
		}
	}
}		