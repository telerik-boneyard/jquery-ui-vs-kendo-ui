Repo for http://jqueryuivskendoui.com/ - a site to compare [jQuery UI](http://jqueryui.com) and [Kendo UI](http://kendoui.com), as well as [jQuery Mobile](http://jquerymobile.com) and [Kendo UI Mobile](http://www.kendoui.com/mobile.aspx).

If you find an issue on the site - or want to suggest something we could improve - please [create an issue](https://github.com/telerik/jquery-ui-vs-kendo-ui/issues/new) to let us know about it.

### Updating

The site utilizes an [HTML5 AppCache](http://www.html5rocks.com/en/tutorials/appcache/beginner/). Therefore, after any update to the content, the timestamp in the manifest file must be updated. A grunt task has been setup to do this.

	grunt manifest