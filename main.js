const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]

const name1 = document.getElementById("weeks")

for (let i=0 ; i < links.length; i++){
    var ttt = document.createElement("li");
    var aaa = document.createElement("a");

    aaa.textContent=links[i].label;
    aaa.setAttribute("href", links[i].url);

    ttt.appendChild(aaa);
    name1.append(ttt);

}