const dnaInEl = document.getElementById('dna-in');
const buttonEl = document.getElementById('button');
const outEl = document.getElementById('out');

const DNAMap = new Map([
	['GCU','Alanin'],
	['GCC','Alanin'],
	['GCA','Alanin'],
	['GCG','Alanin'],
	['CGU','Arginin'],
	['CGC','Arginin'],
	['CGA','Arginin'],
	['CGG','Arginin'],
	['AGA','Arginin'],
	['AGG','Arginin'],
	['AAU','Asparagin'],
	['AAC','Asparagin'],
	['GAU','Asparaginsyre'],
	['GAC','Asparaginsyre'],
	['UGU','Cystein'],
	['UGC','Cystein'],
	['UUU','Fenylalanin'],
	['UUC','Fenylalanin'],
	['CAA','Glutamin'],
	['CAG','Glutamin'],
	['GAA','Glutaminsyre'],
	['GAG','Glutaminsyre'],
	['GGU','Glysin'],
	['GGC','Glysin'],
	['GGA','Glysin'],
	['GGG','Glysin'],
	['CAU','Histidin'],
	['CAC','Histidin'],
	['AUC','Isoleusin'],
	['AUU','Isoleusin'],
	['AUA','Isoleusin'],
	['UUA','Leusin'],
	['UUG','Leusin'],
	['CUU','Leusin'],
	['CUC','Leusin'],
	['CUA','Leusin'],
	['CUG','Leusin'],
	['AAA','Lysin'],
	['AAG','Lysin'],
	['AUG','Methionin (start)'],
	['CCU','Prolin'],
	['CCC','Prolin'],
	['CCA','Prolin'],
	['CCG','Prolin'],
	['UCU','Serin'],
	['UCC','Serin'],
	['UCA','Serin'],
	['UCG','Serin'],
	['AGU','Serin'],
	['AGC','Serin'],
	['ACU','Threonin'],
	['ACC','Threonin'],
	['ACA','Threonin'],
	['ACG','Threonin'],
	['UGG','Tryptofan'],
	['UAU','Tyrosin'],
	['UAC','Tyrosin'],
	['GUU','Valin'],
	['GUC','Valin'],
	['GUA','Valin'],
	['GUG','Valin'],
	['UAA','Stop'],
	['UAG','Stop'],
	['UGA','Stop'],
]);
buttonEl.addEventListener('click', ()=>{
	const dna = dnaInEl.value;

	if(dna.toUpperCase().match(/[^ACTG]/g)) return outEl.innerHTML = 'DNA-sekvensen inneholder ugyldige tegn'
	if(dna.length % 3 != 0) return outEl.innerHTML = 'DNA-sekvensen inneholder feil antall tegn'

	try{
		const dnaArray = dna.toUpperCase().split(/(?=(?:[ACTG]{3})+$)/).map(e=>{
			if(!DNAMap.has(e.replace(/T/g, 'U'))) throw new Error('Invalid DNA');
			return DNAMap.get(e.replace(/T/g, 'U'))
		});
		console.log(dnaArray);
		outEl.innerHTML = `<ol><li>${dnaArray.join('</li>\n<li>')}</li></ol>`;
	}catch(e){
		outEl.innerHTML = 'Ugyldig DNA-sekvens';
	}
})
