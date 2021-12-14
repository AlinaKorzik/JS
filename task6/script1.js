const files = ['text.docx', 'index.html', 'document.pdf', 'script.js', 'style.css', 'summary.pdf', 'Harry_Potter.pdf', 'report.pdf'];

    function choosePdf (array) {

        let pdfFiles = [];

        for (let i = 0; i < files.length; i++) {

        let str = files[i];

        let arr = str.split(`.`);

            if (arr[1] == `pdf`) {

                pdfFiles.push (str)
            }

        }

        return pdfFiles
    }

    choosePdf (files)

