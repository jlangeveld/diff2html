	        currentFile.oldName = values;
	        currentFile.newName = values;
	    var prefixes = ["a/", "i/", "w/", "c/", "o/"];
	    var prefixes = ["b/", "i/", "w/", "c/", "o/"];
	    var FilenameRegExp = new RegExp('^' + linePrefix + ' "?(.+?)"?$');

	    var filename;
	    var values = FilenameRegExp.exec(line);
	    if (values && values[1]) {
	      filename = values[1];
	      var matchingPrefixes = prefixes.filter(function(p) {
	        return filename.indexOf(p) === 0;
	      });

	      if (matchingPrefixes[0]) filename = filename.slice(matchingPrefixes[0].length); // remove prefix if exists
	    }

	    return filename;