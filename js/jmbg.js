var jmbg, day, month, year, region, country, gender, control, msg;
var date = new Date();
var p = document.getElementById('res');

function validate() {
	if(p.hasChildNodes()) {
		p.removeChild(p.childNodes[0]);
	}

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
	year = (year > 875) ? year + 1000 : year + 2000;
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
	} else if (month > 12 || month < 1) {
		msg = "Neispravan mesec rоđenja!";
	} else if (day == 0) {
		msg = "Neispravan dan rоđenja!";
	} else if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && (day > 31)) {
		msg = "Neispravan dan rоđenja!";
	} else if ((month == 4 || month == 6 || month == 9 || month == 11) && (day > 30)) {
		msg = "Neispravan dan rоđenja!";
	} else if (month == 2 && prestupna(year) && day > 29) {
		msg = "Neispravan dan rоđenja!";
	} else if (month == 2 && !prestupna(year) && day > 28) {
		msg = "Neispravan dan rоđenja!";
	}

	 else if(region >= 60 && region <=69) {
		msg = "Neispravan region rоđenja!";
	} else {
		msg = "Ispravan JMBG!\n";

		if(year > date.getFullYear()) {
			msg += "Ali osoba sa ovim jmbg još uvek nije rоđena!\n";
		} else if( year == date.getFullYear() && month > date.getMonth() + 1) {
			msg += "Ali osoba sa ovim jmbg još uvek nije rоđena!\n";
		} else if( year == date.getFullYear() && month == date.getMonth() + 1 && day > date.getDate()) {
			msg += "Ali osoba sa ovim jmbg još uvek nije rоđena!\n";
		}

		msg += "Datum rođenja: " +day +"." +month +"." +year +".\n";
		
		if(gender <= 499) {
			gender = "Muški";
		} else {
			gender = "Ženski";
		}
		msg += "Pol: " +gender +"\n";

		if(region >= 0 && region <=9) {
			country = "Stranac bez državljanstva";
		} else if(region >= 10 && region <=19) {
			country = "Bosna i Hercegovina";
		} else if(region >= 20 && region <=29) {
			country = "Crna Gora";
		} else if(region >= 30 && region <=39) {
			country = "Hrvatska";
		} else if(region >= 40 && region <=49) {
			country = "Makedonija";
		} else if(region >= 50 && region <=59) {
			country = "Slovenija";
		} else if(region >= 70 && region <=79) {
			country = "Centralna Srbija";
		} else if(region >= 80 && region <=89) {
			country = "Autonomna Pokrajina Vojvodina";
		} else if(region >= 90 && region <=99) {
			country = "Autonomna Pokrajina Kosovo i Metohija";
		}

		switch(region) {
			case 1:
				region = "u BiH";
				break;
			case 2:
				region = "u Crnoj Gori";
				break;
			case 3:
				region = "u Hrvatskoj";
				break;
			case 4:
				region = "u Makedoniji";
				break;
			case 5:
				region = "u Sloveniji";
				break;
			case 7:
				region = "u Srbiji (bez pokrajina)";
				break;
			case 8:
				region = "u Vojvodini";
				break;
			case 9:
				region = "na Kosovu i Metohiji";
				break;
			case 10:
				region = "Banja Luka";
				break;
			case 11:
				region = "Bihać";
				break;
			case 12:
				region = "Doboj";
				break;
			case 13:
				region = "Goražde";
				break;
			case 14:
				region = "Livno";
				break;
			case 15:
				region = "Mostar";
				break;
			case 16:
				region = "Prijedor";
				break;
			case 17:
				region = "Sarajevo";
				break;
			case 18:
				region = "Tuzla";
				break;
			case 19:
				region = "Zenica";
				break;
			case 21:
				region = "Podgorica, Danilovgrad, Kolašin";
				break;
			case 22:
				region = "Bar, Ulcinj";
				break;
			case 23:
				region = "Budva, Kotor, Tivat";
				break;
			case 24:
				region = "Herceg Novi";
				break;
			case 25:
				region = "Cetinje";
				break;
			case 26:
				region = "Nikšić, Plužine, Šavnik";
				break;
			case 27:
				region = "Berane, Rožaje, Plav, Andrijevica";
				break;
			case 28:
				region = "Bijelo Polje, Mojkovac";
				break;
			case 29:
				region = "Pljevlja, Žabljak";
				break;
			case 30:
				region = "Osijek, Slavonija region";
				break;
			case 31:
				region = "Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina region";
				break;
			case 32:
				region = "Varaždin, Međimurje region";
				break;
			case 33:
				region = "Zagreb";
				break;
			case 34:
				region = "Karlovac";
				break;
			case 35:
				region = "Gospić, Lika region";
				break;
			case 36:
				region = "Rijeka, Pula, Istra i Primorje region";
				break;
			case 37:
				region = "Sisak, Banovina region";
				break;
			case 38:
				region = "Split, Zadar, Dubrovnik, Dalmacija region";
				break;
			case 41:
				region = "Bitola";
				break;
			case 42:
				region = "Kumanovo";
				break;
			case 43:
				region = "Ohrid";
				break;
			case 44:
				region = "Prilep";
				break;
			case 45:
				region = "Skopje";
				break;
			case 46:
				region = "Strumica";
				break;
			case 47:
				region = "Tetovo";
				break;
			case 48:
				region = "Veles";
				break;
			case 49:
				region = "Štip";
				break;
			case 71:
                region = "Beograd region";
                break;
            case 72:
                region = "Šumadija i Pomoravlje region";
                break;
            case 73:
                region = "Niš region";
                break;
            case 74:
                region = "Južna Morava region";
                break;
            case 75:
                region = "Zaječar region";
                break;
            case 76:
                region = "Podunavlje region";
                break;
            case 77:
                region = "Podrinje i Kolubara region";
                break;
            case 78:
                region = "Kraljevo region";
                break;
            case 79:
                region = "Užice region";
                break;
            case 80:
                region = "Novi Sad region";
                break;
            case 81:
                region = "Sombor region";
                break;
            case 82:
                region = "Subotica region";
                break;
            case 85:
                region = "Zrenjanin region";
                break;
            case 86:
                region = "Pančevo region";
                break;
            case 87:
                region = "Kikinda region";
                break;
            case 88:
                region = "Ruma region";
                break;
            case 89:
                region = "Sremska Mitrovica region";
                break;
            case 91:
                region = "Priština region";
                break;
            case 92:
                region = "Kosovska Mitrovica region";
                break;
            case 93:
                region = "Peć region";
                break;
            case 94:
                region = "Đakovica region";
                break;
            case 95:
                region = "Prizren region";
                break;
            case 96:
                region = "Kosovsko Pomoravski okrug";
                break;
            default:
            	region = "";
            	break;
        }

		if(region) {
			msg += "Mesto rođenja: " +country +" - " +region +"\n";
		} else {
			msg += "Mesto rođenja: " +country +"\n";
		}
	}
}

function create(msg) {
	var t = document.createTextNode(msg);
	//Text in a <pre> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks.
	var _pre = document.createElement("pre");
	_pre.appendChild(t); 
	p.appendChild(_pre);
}

function prestupna(year) {
	if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0 ))
		return true;
}

function keyFunction(e) {
	e.preventDefault();
	validate();
}


/*$("form").submit(
	function(e){
		e.preventDefault();
		validate();
	}
);*/