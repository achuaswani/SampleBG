/**
 * Create a new `Ti.UI.TabGroup`.
 */
var tabGroup = Ti.UI.createTabGroup();
/**
 * Add the two created tabs to the tabGroup object.
 */
tabGroup.addTab(createTab("Tab 1", "I am Window 1", "assets/images/tab1.png"));
tabGroup.addTab(createTab("Tab 2", "I am Window 2", "assets/images/tab2.png"));
// var locationListener = function(location){
	// console.log("intialized"+location.speed);
// };
console.log("intialized");
// var fetchspeed = require("com.ust.location");
// fetchspeed.getSpeed();
// //console.log("checkLocationEnabled"+fetchspeed.checkLocationEnabled);
// fetchspeed.addEventListener('location_speed', locationListener);
 

/**
 * Open the tabGroup
 */
tabGroup.open();

/**
 * Creates a new Tab and configures it.
 *
 * @param  {String} title The title used in the `Ti.UI.Tab` and it's included `Ti.UI.Window`
 * @param  {String} message The title displayed in the `Ti.UI.Label`
 * @return {String} icon The icon used in the `Ti.UI.Tab`
 */
function createTab(title, message, icon) {
    var win = Ti.UI.createWindow({
        title: title,
        backgroundColor: '#fff'
    });

    var label = Ti.UI.createLabel({
        text: message,
        color: "#333",
        font: {
            fontSize: 20
        }
    });
    var tbl_data = [
	    {title:'Row 1'},
	    {title:'Row 2'},
	    {title:'Row 3'}
	];
	// now assign that array to the table's data property to add those objects as rows
	var table = Titanium.UI.createTableView({
	    data:tbl_data
	});
	// alternatively, you could do
	table.setData(tbl_data);


table.addEventListener('click', function(e){
    var sections = table.data; // grab the array of sections
    var section = sections[0]; // use just the first section
    for(var x=0,y=section.rowCount;x < y;x++) {
        var theRow = section.rows[x];
    }
});
win.add(label);
win.add(table);
    var tab = Ti.UI.createTab({
        title: title,
        icon: icon,
        window: win
    });

    return tab;
}


Ti.App.addEventListener('pause', function(e){
	// bgservice = require("com.ust.bgservice");
	// bgservice.runInbackground;
	var bgsvc = Ti.App.iOS.registerBackgroundService({ url: 'bg.js' }); 

});