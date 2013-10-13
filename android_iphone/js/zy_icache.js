/**
 * 
 */
 
var zy_dl_opid=1000;
var zy_dl_session=new Object;
var lstor=(window.localStorage?window.localStorage:(new Object));

function zy_initcache(cb)
{
	uexFileMgr.cbGetFileRealPath = function(opCode, dataType, path) {
		zy_dl_session.rp = path;
		if (cb)
			cb();
	}
	uexFileMgr.getFileRealPath("wgt://");
}

function zy_imgcache(sel,key,url,cb,err,dest,ext)
{
      uexDownloaderMgr.onStatus = function(opCode, fileSize, percent, status) {
		switch (status) {
			case 0 :
				break;
			case 1 :
				uexDownloaderMgr.closeDownloader(opCode);
				var s = zy_dl_session[opCode];
				lstor[s.key] = s.dest.replace("wgt://", zy_dl_session.rp);
				if (s.cb)
					s.cb(s.sel, lstor[s.key]);
				else
					s.sel.style.backgroundImage = "url(" + lstor[s.key] + ")";
				break;
			case 2 :
				uexDownloaderMgr.closeDownloader(opCode);
				if (zy_dl_session[opCode].err)
					zy_dl_session[opCode].err();
				delete(zy_dl_session[opCode]);
				return;
		}
	};
	uexDownloaderMgr.cbCreateDownloader = function(opCode, dataType, data) {
		if (data == 0) {
			var s = zy_dl_session[opCode];
			if (!s.dest) {
				var d = new Date();
				s.dest = "wgt://data/icache/" + d.valueOf() + opCode + "."
						+ (s.ext ? s.ext : "jpg");
			}
			uexDownloaderMgr.download(opCode, s.url, s.dest, '0');
		} else {
			uexDownloaderMgr.closeDownloader(opCode);
			if (zy_dl_session[opCode].err)
				zy_dl_session[opCode].err();
			delete(zy_dl_session[opCode]);

		}
	};

	var r = window.localStorage[key];
	if (r) {
		var con;
		if (sel.nodeType && sel.nodeType == 1) {
			con = sel;
		} else if (typeof sel == 'string') {
			con = document.getElementById(sel);
		}
		if (cb)
			cb(con, r);
		else
			con.style.backgroundImage = "url(" + r + ")";
	} else {
		zy_dl_opid++;
		zy_dl_session[zy_dl_opid] = new Object;
		if (sel.nodeType && sel.nodeType == 1) {
			zy_dl_session[zy_dl_opid].sel = sel;
		} else if (typeof sel == 'string') {
			zy_dl_session[zy_dl_opid].sel = document.getElementById(sel);
		}
		zy_dl_session[zy_dl_opid].key = key;
		zy_dl_session[zy_dl_opid].cb = cb;
		zy_dl_session[zy_dl_opid].err = err;
		zy_dl_session[zy_dl_opid].url = url;
		zy_dl_session[zy_dl_opid].dest = dest;
		zy_dl_session[zy_dl_opid].ext = ext;
		uexDownloaderMgr.createDownloader(zy_dl_opid);
	}
}

function zy_clearcache()
{
	lstor.clear();
	uexFileMgr.deleteFileByPath("wgt://data/icache");
	
}