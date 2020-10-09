(function(){

window.addEventListener('load', function(){

var sourceControlId = 68386267, /** THE ID OF THE SENDER CONTROL */

targetControlId = 68386271, /** THE ID OF THE RECEIVER CONTROL **/

sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId),

targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

sourceControlInstance.on('value-change', function(){

targetControlInstance.setValue( sourceControlInstance.getValue() );

});

targetControlInstance.setValue( sourceControlInstance.getValue() );

});

})();
