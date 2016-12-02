//use jQuery to select the HTML elements we're going to manipulate
var GoButton = $ ('#go')
var homeButtons = $('#home .services')
var homeDropdown = $ ('#home select')
var HomeSection = $ ('#home')
var resultsSection = $ ('#results') 
var ResultsBackButton = $ ('#results .back')
var resultsTogglebutton = $ ('#results .toggle')
var resultsOL = $('#results ol')
var resultsMap = $('#map')
var detailsSection = $('#details')
var detailsBackButton = $('#details .back')
var detailsInfo = $('#details #info')
var valux = $('.sb-search-input')


var resultsList = []




// tell the GO button to do something when we click it 
//GoButton.click(function ()
homeButtons.click(function (event)
{
    console.log('clicked a service button')
//    console.log(event.currentTarget) // currentTarget is the button you clicked
    
    //capture the user option
    var chosenOption = event.currentTarget.value

 console.log ("You picked " + chosenOption)
 
 // filter+sort people by user selection
    var resultsList = filterAndSortList(shopsList, chosenOption);
    console.log(resultsList);

    showList(resultsList, resultsOL);
    addMarkers(resultsList)
    
    $('#results li').click( function() 
    {
        // grab the id from the clicked item
        var resultId = $(this).attr('id')
        // use the id to get the right data
        var resultData = resultsList[resultId]
        console.log(resultData)
        // call the function showDetails()
        showDetails(resultData, detailsInfo)
    })
    
    // show the results
    HomeSection.hide()
    resultsSection.show()
})
    
function showDetails (data, interfaceElement) 
{
    console.log(data)
  var detailsHTML = makeDetailsHTML(data)
  interfaceElement.html(detailsHTML)
}


// tell the Back button to do something whe we click it 
ResultsBackButton.click(function ()
{
 resultsSection.hide()
 HomeSection.show()
})
 
//button to swtich betwwen list and map
resultsTogglebutton.click( function()
{
     console.log('clicked resultsTogglebutton')
                           //which is visible. map or list
    var listDisplay = resultsOL.css ('display')
    if (listDisplay == 'block') isListVisible = true
    else isListVisible = false
                           
   console.log(isListVisible)
    
    // map - show lsit
    if (isListVisible)
    {
        //want to show map and hide list
        resultsMap.show()
        map.resize() // map covers all the space
        resultsOL.hide()
    }
     
     else
       {
           //want to show list, hide list 
           resultsOL.show()
           resultsMap.hide()
       }                    //list - show map
    
                           
})