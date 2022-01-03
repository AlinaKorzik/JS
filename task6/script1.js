const files = ['text.docx', 'index.html', 'document.pdf', 'script.js', 'style.css', 'summary.pdf', 'Harry_Potter.pdf', 'report.pdf'];

let pdfFiles = files.reduce ((start, current) => {

    let extension = current.split(`.`);

        if (extension[extension.length - 1] == `pdf`) {

            start.push (current)
        }

    return start

}, [])

console.log (pdfFiles)