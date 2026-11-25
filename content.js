const W=s=>s.split(";").map(x=>x.split("="));
const L=(title,tip,w,p)=>({title,tip,w:W(w),p:p.split("=")});
const U=(lvl,title,lessons)=>({lvl,title,lessons});
const COURSE={
de:{name:"Alemão (Hochdeutsch)",tl:"alemão",sl:"de-DE",units:[
U("A1","Erste Schritte",[
L("Begrüßung","Todo substantivo alemão começa com letra maiúscula. 'Guten' + parte do dia: Morgen, Tag, Abend.","Hallo=olá;Guten Morgen=bom dia;Guten Tag=bom dia / boa tarde;Guten Abend=boa noite;Tschüss=tchau;Danke=obrigado","Wie geht es dir?=como você está?"),
L("Sich vorstellen","O verbo conjugado fica na 2ª posição: Ich heiße Ana.","ich=eu;du=você (informal);Name=nome;heißen=chamar-se;kommen=vir;wohnen=morar","Ich komme aus Brasilien=eu venho do Brasil"),
L("Zahlen","Para contar: 1 é 'eins', mas '1 Euro' é 'ein Euro'.","eins=um;zwei=dois;drei=três;vier=quatro;fünf=cinco;zehn=dez","Ich habe zwei Brüder=eu tenho dois irmãos")]),
U("A1","Alltag",[
L("Familie","Artigos: der (masculino), die (feminino), das (neutro). Aprenda cada palavra com o artigo.","Mutter=mãe;Vater=pai;Bruder=irmão;Schwester=irmã;Kind=criança;Freund=amigo","Das ist meine Mutter=esta é a minha mãe"),
L("Essen und Trinken","'Ich möchte' = eu gostaria. É a forma educada de pedir.","Wasser=água;Brot=pão;Kaffee=café;Milch=leite;Apfel=maçã;Käse=queijo","Ich möchte einen Kaffee, bitte=eu gostaria de um café, por favor"),
L("Einkaufen","Para perguntar o preço: Wie viel kostet das?","kaufen=comprar;Geld=dinheiro;teuer=caro;billig=barato;Tüte=sacola;Kasse=caixa","Wie viel kostet das?=quanto custa isso?")]),
U("A1","Zeit und Ort",[
L("Wochentage","Os dias da semana são masculinos: der Montag. 'am Montag' = na segunda.","Montag=segunda-feira;Dienstag=terça-feira;Mittwoch=quarta-feira;Freitag=sexta-feira;heute=hoje;morgen=amanhã","Heute ist Montag=hoje é segunda-feira"),
L("Orte","Wo ist...? = Onde fica...?","Bahnhof=estação de trem;Haltestelle=ponto de ônibus;Supermarkt=supermercado;Apotheke=farmácia;Straße=rua;Stadt=cidade","Wo ist der Bahnhof?=onde fica a estação?"),
L("Fragewörter","Em perguntas com palavra interrogativa, o verbo vem logo depois dela.","wer=quem;was=o quê;wo=onde;wann=quando;warum=por quê;wie=como","Wann kommt der Bus?=quando chega o ônibus?")]),
U("A1","Verben",[
L("sein und haben","sein = ser/estar; haben = ter. São os dois verbos mais importantes.","ich bin=eu sou / estou;du bist=você é / está;er ist=ele é / está;ich habe=eu tenho;du hast=você tem;wir sind=nós somos","Ich bin müde=eu estou cansado"),
L("Alltagsverben","Verbos regulares: ich lerne, du lernst, er lernt.","essen=comer;trinken=beber;gehen=ir;arbeiten=trabalhar;lernen=aprender;schlafen=dormir","Ich lerne Deutsch=eu aprendo alemão"),
L("Nein und Können","'kein' nega substantivos; 'nicht' nega verbos. Com können/müssen/wollen o outro verbo vai para o fim.","nicht=não;kein=nenhum;können=poder;müssen=precisar;wollen=querer;ja=sim","Ich kann nicht kommen=eu não posso vir")]),
U("A2","Vergangenheit",[
L("Perfekt","Passado falado: haben + particípio no fim da frase.","gemacht=feito;gegessen=comido;getrunken=bebido;gelernt=aprendido;gearbeitet=trabalhado;gespielt=jogado","Ich habe gestern gearbeitet=ontem eu trabalhei"),
L("Perfekt mit sein","Verbos de movimento e mudança usam sein: ich bin gegangen.","gegangen=ido;gekommen=vindo;gefahren=ido (de veículo);geflogen=voado;geblieben=ficado;gewesen=sido / estado","Ich bin nach Hause gegangen=eu fui para casa"),
L("Zeitangaben","'war' é o passado de sein e se usa muito: ich war, du warst.","gestern=ontem;letzte Woche=semana passada;vorher=antes;schon=já;noch nicht=ainda não;früher=antigamente","Ich war gestern im Büro=ontem eu estava no escritório")]),
U("A2","Gesundheit",[
L("Körper","Dor: 'Mein Kopf tut weh' ou 'Ich habe Kopfschmerzen'.","Kopf=cabeça;Bauch=barriga;Hand=mão;Fuß=pé;Auge=olho;Rücken=costas","Mein Kopf tut weh=minha cabeça dói"),
L("Beim Arzt","Para marcar consulta: 'Ich brauche einen Termin'.","Arzt=médico;Termin=consulta / compromisso;Medikament=remédio;Fieber=febre;krank=doente;Rezept=receita","Ich brauche einen Termin=eu preciso de uma consulta"),
L("Krankenkasse","Na Suíça o seguro-saúde (Krankenkasse) é obrigatório.","Versicherung=seguro;Krankenkasse=seguro-saúde;Rechnung=conta / fatura;Notfall=emergência;Krankenhaus=hospital;Hilfe=ajuda","Ich brauche Hilfe=eu preciso de ajuda")]),
U("A2","Wohnen und Arbeit",[
L("Wohnung","Procurando casa: 'Ich suche eine Wohnung'.","Wohnung=apartamento;Zimmer=quarto;Miete=aluguel;Küche=cozinha;Vermieter=locador;Schlüssel=chave","Ich suche eine Wohnung=eu procuro um apartamento"),
L("Anmeldung","Ao chegar, você registra a residência na Gemeinde (comuna).","Anmeldung=registro de residência;Gemeinde=comuna / prefeitura;Ausweis=documento de identidade;Formular=formulário;Unterschrift=assinatura;Adresse=endereço","Ich möchte mich anmelden=eu quero me registrar"),
L("Arbeit","Em entrevistas: 'Ich bewerbe mich als...' (me candidato como...).","Arbeit=trabalho;Chef=chefe;Kollege=colega;Vertrag=contrato;Lohn=salário;Bewerbung=candidatura","Ich suche eine Arbeit=eu procuro um trabalho")]),
U("A2","Unterwegs und Meinung",[
L("Verkehr","'Der Zug hat Verspätung' = o trem está atrasado.","Zug=trem;Gleis=plataforma;Fahrkarte=passagem;Fahrplan=horário;Verspätung=atraso;umsteigen=fazer baldeação","Auf welchem Gleis fährt der Zug?=em qual plataforma sai o trem?"),
L("Wetter und Pläne","Para planos use o presente com uma expressão de tempo: 'Am Wochenende gehe ich...'.","Wetter=clima;Sonne=sol;Regen=chuva;kalt=frio;warm=quente;Wochenende=fim de semana","Am Wochenende gehe ich wandern=no fim de semana eu vou fazer trilha"),
L("Meinung","Com 'weil' o verbo vai para o fim da frase.","weil=porque;aber=mas;oder=ou;denn=pois;meiner Meinung nach=na minha opinião;ich finde=eu acho","Ich bleibe zu Hause, weil ich müde bin=eu fico em casa porque estou cansado")])
]},
en:{name:"Inglês",tl:"inglês",sl:"en-US",units:[
U("A2","Past and Plans",[
L("Past simple","Regulares: verbo + ed. Irregulares mudam: go → went.","went=foi;saw=viu;ate=comeu;bought=comprou;had=teve;came=veio","I went to the supermarket yesterday=ontem eu fui ao supermercado"),
L("Going to","going to + verbo expressa planos: I'm going to travel.","tomorrow=amanhã;next week=semana que vem;plan=plano;travel=viajar;visit=visitar;decide=decidir","I'm going to visit my friend next week=vou visitar meu amigo semana que vem"),
L("Present perfect","have/has + particípio liga o passado ao presente.","have lived=morei (e ainda moro);have been=estive;for=há (duração);since=desde;already=já;yet=ainda (em perguntas)","I have lived here since 2020=eu moro aqui desde 2020")]),
U("A2","Daily Life",[
L("Comparing","Adjetivo curto: +er (taller). Longo: more + adjetivo.","bigger=maior;cheaper=mais barato;more expensive=mais caro;better=melhor;worse=pior;than=do que","This is better than that=isto é melhor do que aquilo"),
L("Quantities","much com incontáveis, many com contáveis.","much=muito (incontável);many=muitos;some=alguns;any=algum (perguntas);a lot of=muito(s);a few=poucos","How much does it cost?=quanto custa?"),
L("Routines","O advérbio de frequência vem antes do verbo: I always drink coffee.","always=sempre;usually=geralmente;sometimes=às vezes;never=nunca;often=frequentemente;every day=todos os dias","I usually wake up at seven=geralmente eu acordo às sete")]),
U("A2","Real-life Speaking",[
L("Phrasal verbs","Phrasal verbs são muito naturais na fala do dia a dia.","wake up=acordar;get up=levantar;pick up=pegar;turn on=ligar;turn off=desligar;look for=procurar","I'm looking for my keys=estou procurando minhas chaves"),
L("Requests","'Could you...?' é mais educado que 'Can you...?'.","could you=você poderia;would you like=você gostaria;I'd like=eu gostaria;sorry=desculpe;excuse me=com licença;of course=claro","Could you repeat that, please?=você poderia repetir, por favor?"),
L("Directions","Direções: turn left/right, go straight.","turn left=vire à esquerda;turn right=vire à direita;go straight=siga em frente;next to=ao lado de;across from=em frente a;corner=esquina","Go straight and turn left at the corner=siga em frente e vire à esquerda na esquina")]),
U("A2","Work and Health",[
L("Jobs","Perguntas comuns: 'Where do you work?' e 'What do you do?'.","job=emprego;manager=gerente;meeting=reunião;deadline=prazo;salary=salário;interview=entrevista","I have a meeting at three o'clock=tenho uma reunião às três horas"),
L("Doctor","Sintomas: 'I have a headache' / 'My back hurts'.","headache=dor de cabeça;fever=febre;medicine=remédio;appointment=consulta;sore throat=dor de garganta;prescription=receita","I have a sore throat and a fever=estou com dor de garganta e febre"),
L("Opinions","because = porque; so = então.","because=porque;so=então;but=mas;I think=eu acho;maybe=talvez;I agree=eu concordo","I think it's a good idea, but it's expensive=acho uma boa ideia, mas é caro")])
]}};
const LV=['A1','A2','B1','B2','C1','C2'];
const OUTLINE = {
  de:{A1:['Begrüßung','Zahlen e compras','Família','Rotina'],A2:['Passado (Perfekt)','Saúde e médico','Moradia e aluguel','Trabalho'],B1:['Opiniões e planos','Konjunktiv II','Burocracia suíça','Notícias'],B2:['Passiva e orações relativas','Debates','Textos formais','Mundo do trabalho'],C1:['Nuances e idiomatismos','Argumentação','Mídia e literatura'],C2:['Precisão e estilo','Registros e dialetos','Domínio total']},
  en:{A1:['Everyday English','Numbers and shopping','Family','Routine'],A2:['Past simple','Health','Housing','Work'],B1:['Opinions and plans','Conditionals','Travel and services','News'],B2:['Passive and relative clauses','Debates','Formal writing','Workplace'],C1:['Idioms and nuance','Argumentation','Media and literature'],C2:['Precision and style','Registers','Mastery']}
};
const P=(lvl,q,o,a)=>({t:'choice',lvl,q,o,a,pt:o[a]});
const PLACE = {
  de:[P('A1','Responda: "Wie heißt du?"',['Ich bin 20 Jahre alt','Ich heiße Ana','Ich wohne in Wien'],1),P('A1','"Danke schön" significa:',['Muito obrigado','Bom dia','Até logo'],0),
      P('A2','Qual frase está correta?',['Ich habe gestern Pizza gegessen','Ich bin gestern Pizza gegessen','Ich habe gestern Pizza essen'],0),P('A2','Qual artigo? ___ Tisch (a mesa)',['die','der','das'],1),
      P('B1','Ich bleibe zu Hause, ___ es regnet.',['weil','aber','oder'],0),P('B1','Qual frase usa Konjunktiv II corretamente?',['Wenn ich Zeit hätte, würde ich reisen','Wenn ich Zeit habe, würde ich reisen','Wenn ich Zeit hätte, ich reise'],0),
      P('B2','Der Mann, ___ ich geholfen habe, ist Arzt.',['dem','den','der'],0),P('B2','Qual é o passivo correto?',['Das Haus wird gebaut','Das Haus wird bauen','Das Haus hat gebaut werden'],0),
      P('C1','"etwas in Kauf nehmen" significa:',['aceitar algo como consequência','comprar algo','vender algo'],0),P('C1','Er sagte, er ___ krank.',['sei','ist','wäre sein'],0),
      P('C2','Qual palavra significa "ambiguidade"?',['Mehrdeutigkeit','Gelassenheit','Selbstverständlichkeit'],0),P('C2','"sich mit etwas abfinden" significa:',['conformar-se com algo','esquivar-se de algo','apropriar-se de algo'],0)],
  en:[P('A1','Qual é correto?',['I am from Brazil','I from Brazil am','Me Brazil'],0),P('A1','"Thank you" significa:',['Obrigado','Desculpe','Tchau'],0),
      P('A2','She ___ to work every day.',['go','goes','going'],1),P('A2','Yesterday I ___ a movie.',['watch','watched','watching'],1),
      P('B1','If it rains, we ___ at home.',['will stay','would stayed','stay will'],0),P('B1','I have lived here ___ 2020.',['for','since','during'],1),
      P('B2','If I ___ more time, I would study more.',['have','had','would have'],1),P('B2','The report ___ by the team before the deadline.',['was finished','finished','has finish'],0),
      P('C1','Qual frase está correta?',['Hardly had I arrived when it started to rain','Hardly I had arrived when it started to rain','Hardly had I arrive when it started to rain'],0),P('C1','"to cut corners" significa:',['fazer algo mal feito para economizar','virar a esquina','cortar papel'],0),
      P('C2','"ubiquitous" significa:',['onipresente','raro','antigo'],0),P('C2','"to take something with a grain of salt" significa:',['duvidar um pouco de algo','temperar algo','levar algo a sério'],0)]
};


for(const k in PLACE)PLACE[k].forEach(x=>x.a=x.o[x.a]);
