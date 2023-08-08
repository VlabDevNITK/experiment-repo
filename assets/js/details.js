const labName = "Manufacturing Lab";
const domainUrl = "http://vlab.co.in/broad-area-civil-engineering";
const labUrl = "https://vlabdevnitk.github.io/manufacturing-lab-nitk/"
const expData = {
    domain: "Mechanical Engineering",
    domainUrl: "http://vlab.co.in/broad-area-civil-engineering",
    lab:"Manufacturing Lab",
    labUrl: "https://vlabdevnitk.github.io/manufacturing-lab-nitk/",
    experimentUrl: "https://vlabdevnitk.github.io/manufacturing-lab-nitk/List%20of%20experiments.html"
}

const [domain, lab, exp] = document.querySelectorAll('.url span a');
domain.innerHTML = expData.domain;
domain.href=expData.domainUrl;

lab.innerHTML = expData.lab;
lab.href = expData.labUrl;

exp.innerHTML = "Experiments";
exp.href = expData.experimentUrl;


// export default labName;