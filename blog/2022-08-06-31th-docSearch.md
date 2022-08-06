---
title: "Fixing Crawler and Json Issues"
slug: 2022-08-06-31th-docSearch
authors: tonylee
created: 2022-08-06T11:31:47 +0900
updated: 2022-08-06 11:31
---

## DocSearch Issues

I have trouble getting started with Algolia, especially with the pushing the site's index data to Algolia server, which has the following schematics;

local site --> server (where the app is deployed) <-- crawler  --> algolia db as indexed objects

and your typical deploy process would be; add or update your local version, build and deploy to the server. The deployed would be different from your local version as the running site and local development are bascially two different things. As Algolia won't care about your local site, the issues of not knowing what is at stake are apparent. They have a Dashboard where you can update and monitor this whole process. If I am not wrong, I felt there are significant time-lapse for the changes to be updated. 

And they have detailed instructions and snippets or cli to go with. They support all major documentation platforms for jump-starters. So their doc gets complicated and requires where you are at with your current development and what to choose from their set of tables.

I find it useful to refer to their show-case sites which resemble your development interface and requirements, such as Astromers in my case.





