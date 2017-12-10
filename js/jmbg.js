var jmbg, day, month, year, region, gender, control, msg;

function validate() {
	jmbg = document.getElementById("jmbg").value;
	if (jmbg.length != 13) {
		msg = "JMBG se sastoji od 13 cifara. Pokušajte ponovo!";
	} 
	else {
		parse();
	}
	create(msg);
}

function parse() {
	day = Number(jmbg.substring(0,2));
	month = Number(jmbg.substring(2,4));
	year = Number(jmbg.substring(4,7));
	year = (year > 900) ? year + 1000 : year + 2000;
	region = Number(jmbg.substring(7,9));
	gender = Number(jmbg.substring(9, 12));
	control = Number(jmbg[12]);

	var controlFormula = 11 - (7 * (Number(jmbg[0]) + Number(jmbg[6])) + 
			6 * (Number(jmbg[1]) + Number(jmbg[7])) + 
			5 * (Number(jmbg[2]) + Number(jmbg[8])) +
            4 * (Number(jmbg[3]) + Number(jmbg[9])) +
            3 * (Number(jmbg[4]) + Number(jmbg[10])) +
            2 * (Number(jmbg[5]) + Number(jmbg[11]))) % 11;
	if(controlFormula > 9) {
		controlFormula = 0;
	}
	
	if(control != controlFormula) {
		msg = "Neispravan JMBG!";
	} else if (day > 31) {
		msg = "Neispravan dan rоđenja!";
	} else if (month > 12) {
		msg = "Neispravan mesec rоđenja!";
	} else if(region >= 60 && region <=69) {
		msg = "Neispravna regija rоđenja!";
	} else {
		msg = "Ispravan JMBG!\n";
		msg += "Datum rođenja: " +day +"." +month +"." +year +".\n";
		
		if(gender <= 499) {
			gender = "Muški";
		} else {
			gender = "Ženski";
		}
		msg += "Pol: " +gender +"\n";

		if(region >= 0 && region <=9) {
			region = "Stranci bez državljanstva";
		} else if(region >= 10 && region <=19) {
			region = "Bosna i Hercegovina";
		} else if(region >= 20 && region <=29) {
			region = "Crna Gora";
		} else if(region >= 30 && region <=39) {
			region = "Hrvatska";
		} else if(region >= 40 && region <=49) {
			region = "Makedonija";
		} else if(region >= 50 && region <=59) {
			region = "Slovenija";
		} else if(region >= 70 && region <=79) {
			region = "Centralna Srbija";
		} else if(region >= 80 && region <=89) {
			region = "Autonomna Pokrajina Vojvodina";
		} else if(region >= 90 && region <=99) {
			region = "Autonomna Pokrajina Kosovo i Metohija";
		}
		msg += "Region: " +region +"\n";
	}
}

function create(msg) {
	var p = document.createElement('p');
	var t = document.createTextNode(msg);
	//Text in a <pre> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks.
	var _pre = document.createElement("pre");
	_pre.appendChild(t); 
	p.appendChild(_pre);
	document.getElementsByTagName('main')[0].appendChild(p);
}