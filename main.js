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


function loadStory(){
  var storyName = document.getElementById("name_input").value;
  var storyHTML = localStorage(storyName);
  document.getElementById("story_editor").value=storyHTML;
}
function saveStory(){
  var storyName = document.getElementById("name_input").value;
  var storyHTML = document.getElementById("story_editor").value;
  localStorage.setItem(storyName, storyHTML);
}
function displayStory(){
  var storyHTML = document.getElementById("story_editor").value;
  document.getElementById("story_display").innerHTML = storyHTML;
}