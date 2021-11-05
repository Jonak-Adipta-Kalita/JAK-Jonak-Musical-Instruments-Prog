const dex = document.getElementById('dex');
const BASE_URL = "https://jak-api-dot-com.herokuapp.com";

const fetchInstruments = async () => {
    const url = `${BASE_URL}/api/hobby/2`;
	const res = await fetch(url);
	const data = await res.json();
	const instruments = data.instruments.map((result, index) => ({
		...result,
		id: index + 1,
		_imageURL: `${BASE_URL}/${result.imageURL}`
	}));
	displayInstruments(instruments);
};

const displayInstruments = (instruments) => {
    const instrumentsHTMLString = instruments
        .map((instrument) => (`
			<li class="card">
				<img class="card-image" src="${instrument._imageURL}"/>
				<h2 class="card-title">${instrument.id}. ${instrument.value}</h2>
			</li>
		`)).join('');
    dex.innerHTML = instrumentsHTMLString;
};

fetchInstruments();
