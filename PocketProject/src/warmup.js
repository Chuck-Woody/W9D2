
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let convert = document.createElement("p")
    convert.append(string);
    htmlElement.appendChild(convert);
};


htmlGenerator('Party Time.', partyHeader);