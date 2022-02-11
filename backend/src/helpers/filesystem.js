const fs = require('fs');
const Path = require('path');
/**
 * Löscht einen Ordner rekursiv von der Festplatte.
 * @param {String} path 
 */
const deleteFolderRecursive = function(path) {
	if (fs.existsSync(path)) {
		fs.readdirSync(path).forEach((file, index) => {
			const curPath = Path.join(path, file);
			if (fs.lstatSync(curPath).isDirectory()) {
				// recurse
				deleteFolderRecursive(curPath);
			} else {
				// delete file
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
};

/**
 * Default, make directories relative to current working directory.
 * 		mkDirByPathSync('path/to/dir');
 * Make directories relative to the current script.
 * 		mkDirByPathSync('path/to/dir', {isRelativeToScript: true});
 * Make directories with an absolute path.
 * 		mkDirByPathSync('/path/to/dir');
 * @param {*} targetDir 
 * @param {*} param1 
 */
function mkdirSyncRecursive(targetDir, { isRelativeToScript = false } = {}) {
	const sep = Path.sep;
	const initDir = Path.isAbsolute(targetDir) ? sep : '';
	const baseDir = isRelativeToScript ? __dirname : '.';
  
	return targetDir.split(sep).reduce((parentDir, childDir) => {
	  const curDir = Path.resolve(baseDir, parentDir, childDir);
	  try {
		fs.mkdirSync(curDir);
	  } catch (err) {
		if (err.code === 'EEXIST') { // curDir already exists!
		  return curDir;
		}
  
		// To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
		if (err.code === 'ENOENT') { // Throw the original parentDir error on curDir `ENOENT` failure.
		  throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
		}
  
		const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1;
		if (!caughtErr || caughtErr && curDir === Path.resolve(targetDir)) {
		  throw err; // Throw if it's just the last created dir.
		}
	  }
  
	  return curDir;
	}, initDir);
  }

module.exports = { deleteFolderRecursive, mkdirSyncRecursive };
