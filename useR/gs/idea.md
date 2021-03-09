# userconf tools

## Background
The useR! conference is the useR!, the main conference of the R user/developer community organized by the R Foundation. This year the conference is organized by a global organizing committee and promises to be acommunity-focused, inclusive and innovative conference. 
The R language has a very powerful global community, and as a free and open-source project,its progress and sustainability depends on the hardwork and commitment of volunteers across many spaces. Some of these spaces include: package development and maintenance, 
event organization, help and social media platforms, mentoring programs, and sub-communities. 

There is currently no standardized way of recognizing the work of these volunteers, especially those whose efforts affect the larger community significantly. Moreso, it seems vital to also recognize the efforts of people working hard to increase the representation of
minority groups and encourage 'rising stars' within the community by amplifying their efforts.

As with major global players like IEEE, ACM, etc recognizing the work of contributors is a knownway to encourage contributions.

## Related Work
The `praise` package praises someone for doing something good. But it does not cover thescope of this proposal.

## Details of your coding project
Develop an R package that:

1. Reads data from CRAN, extracts packages submitted in the past 12 months (relative to useR!)and summarizes the Top 5 (or less) most downloaded/updated packages (downloads within the past 12 months).
2. Reads Stackoverflow data, and highlights the most active R users that answer questions onthe Stackoverflow platform (within the past 12 months)
3. Scrapes R-bloggers and summarizes most active contributors on R-bloggers (within the past12 months)
4. Reads Meetup data and summarizes the most active R Meetup event organizers (within thepast 12 months)
5. Most active event (local, regional, global) sponsors (12 months)6. Most active useR! contributors - measured across talks, tutorials, etc (within a time span TBD)
6. Most social on Twitter (past 12 months)

## Skills
R, pacakge development

## Expected Impact
We hope that this package could be useful for organizing social events (maybe spotlight orawards events if they exists) for this useR! and future useR! conferences, since it is organized bya different team of (mostly voluntary) organizers each year.  This project would definitely amplify the work of the recognized contributors to a greater globalaudience.
